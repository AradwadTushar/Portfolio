import { useEffect, useRef } from "react";

/**
 * NeuralSignature
 * An ambient, interactive "network of thought" — nodes drift and pulse
 * on their own, react to the cursor, ripple on click, and can be dragged.
 *
 * Drop into any section, e.g.:
 *   <NeuralSignature words={["React", "FastAPI", "Python", "AI/ML", "PostgreSQL", "Electron", "Clerk", "Systems", "Shipping", "Clean Code"]} />
 *
 * Give the wrapping section a dark background (e.g. bg-black or bg-slate-950)
 * — the glow is designed to sit on dark surfaces.
 */
export default function NeuralSignature({
  words = ["React", "FastAPI", "Python", "AI/ML", "PostgreSQL", "Electron", "Clerk", "Systems", "Shipping", "Clean Code"],
  nodeCount = 60,
  accent = "#E84B2A", // Default is Tushar's signature Rust color
  height = "100%",
}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let nodes = [];
    let pulses = []; // ambient pulses traveling along edges
    let ripples = []; // click-triggered ripple waves
    let floatingWords = []; // words that appear and fade after a click

    const mouse = { x: -9999, y: -9999, active: false };
    let dragTarget = null;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function buildNodes() {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 1.2,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function neighbors(node, maxDist) {
      const list = [];
      for (const other of nodes) {
        if (other === node) continue;
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const d = Math.hypot(dx, dy);
        if (d < maxDist) list.push({ node: other, dist: d });
      }
      return list;
    }

    function spawnPulse() {
      if (!nodes.length) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const near = neighbors(a, 160);
      if (!near.length) return;
      const b = near[Math.floor(Math.random() * near.length)].node;
      pulses.push({ a, b, t: 0, speed: 0.006 + Math.random() * 0.006 });
    }

    function triggerRipple(node) {
      ripples.push({ x: node.x, y: node.y, r: 0, max: 140, alpha: 1 });
      const word = words[Math.floor(Math.random() * words.length)];
      floatingWords.push({ x: node.x, y: node.y - 10, text: word, alpha: 0, life: 0 });

      // chain a few pulses outward from the clicked node
      let frontier = [node];
      for (let hop = 0; hop < 3; hop++) {
        const next = [];
        for (const f of frontier) {
          const near = neighbors(f, 150).slice(0, 3);
          for (const n of near) {
            pulses.push({ a: f, b: n.node, t: 0, speed: 0.01 });
            next.push(n.node);
          }
        }
        frontier = next;
      }
    }

    function toLocal(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function onMove(e) {
      const p = toLocal(e);
      mouse.x = p.x;
      mouse.y = p.y;
      mouse.active = true;
      if (dragTarget) {
        dragTarget.x = p.x;
        dragTarget.y = p.y;
        dragTarget.vx = 0;
        dragTarget.vy = 0;
      }
    }

    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onDown(e) {
      const p = toLocal(e);
      let closest = null;
      let closestDist = 26;
      for (const n of nodes) {
        const d = Math.hypot(n.x - p.x, n.y - p.y);
        if (d < closestDist) {
          closestDist = d;
          closest = n;
        }
      }
      if (closest) {
        dragTarget = closest;
        triggerRipple(closest);
      }
    }

    function onUp() {
      if (dragTarget) {
        dragTarget.vx = (Math.random() - 0.5) * 0.15;
        dragTarget.vy = (Math.random() - 0.5) * 0.15;
      }
      dragTarget = null;
    }

    function hexToRgb(hex) {
      const m = hex.replace("#", "");
      const bigint = parseInt(m, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }
    const [ar, ag, ab] = hexToRgb(accent);

    let raf;
    let last = performance.now();

    function tick(now) {
      const dt = Math.min(now - last, 40);
      last = now;
      ctx.clearRect(0, 0, width, height);

      // drift + gentle mouse influence
      for (const n of nodes) {
        if (n !== dragTarget) {
          n.x += n.vx * dt * 0.06;
          n.y += n.vy * dt * 0.06;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          if (mouse.active) {
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < 90 && d > 0.01) {
              const force = (90 - d) / 90;
              n.x += (dx / d) * force * 0.6;
              n.y += (dy / d) * force * 0.6;
            }
          }
        }
        n.phase += dt * 0.0015;
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const distToMouse = mouse.active ? Math.hypot(midX - mouse.x, midY - mouse.y) : 999;
            const nearMouse = distToMouse < 130 ? (130 - distToMouse) / 130 : 0;
            const baseAlpha = (1 - d / 120) * 0.12;
            const alpha = Math.min(baseAlpha + nearMouse * 0.35, 0.55);
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // ambient pulses
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        p.t += p.speed * (dt / 16.6);
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ar},${ag},${ab},0.9)`;
        ctx.fill();
      }
      if (Math.random() < 0.04) spawnPulse();

      // nodes
      for (const n of nodes) {
        const pulseSize = Math.sin(n.phase) * 0.4 + 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ar},${ag},${ab},0.85)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulseSize * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ar},${ag},${ab},0.06)`;
        ctx.fill();
      }

      // click ripples
      ripples = ripples.filter((r) => r.alpha > 0.01);
      for (const r of ripples) {
        r.r += dt * 0.18;
        r.alpha = Math.max(0, 1 - r.r / r.max);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ar},${ag},${ab},${r.alpha * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // floating words
      floatingWords = floatingWords.filter((w) => w.life < 1);
      for (const w of floatingWords) {
        w.life += dt * 0.0009;
        w.y -= dt * 0.012;
        w.alpha = w.life < 0.2 ? w.life / 0.2 : 1 - (w.life - 0.2) / 0.8;
        ctx.font = "12px 'Space Mono', monospace";
        ctx.fillStyle = `rgba(${ar},${ag},${ab},${Math.max(w.alpha, 0)})`;
        ctx.textAlign = "center";
        ctx.fillText(w.text, w.x, w.y);
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    buildNodes();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(wrap);

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", (e) => { onDown(e); onMove(e); }, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });
    canvas.addEventListener("touchend", onUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("touchend", onUp);
    };
  }, [nodeCount, accent, words]);

  return (
    <div ref={wrapRef} style={{ width: "100%", height, position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%", cursor: "pointer" }}
      />
    </div>
  );
}
