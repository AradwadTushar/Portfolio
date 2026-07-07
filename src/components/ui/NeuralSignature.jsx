import { useEffect, useRef } from "react";

// Pool of 18 technical skills to randomly sample from
const SKILLS_POOL = [
  "React", "FastAPI", "Python", "PostgreSQL", "Electron", "Clerk", "Ollama",
  "Tailwind", "Docker", "SQLite", "Git", "Node.js", "TypeScript", "Pandas",
  "Gemini", "Next.js", "WebSockets", "Redis"
];

const KEYWORDS = {
  Vite: ["HMR", "Bundling", "Rollup", "Esbuild"],
  React: ["Hooks", "Virtual DOM", "JSX", "State"],
  Electron: ["IPC Main", "Desktop App", "Native API", "Windows"],
  Python: ["AI/ML", "Data Science", "OCR parsing", "Scripts"],
  FastAPI: ["ASGI server", "Swagger Docs", "Async API", "Pydantic"],
  Clerk: ["JWT Auth", "Identity Flow", "OAuth", "Security"],
  PostgreSQL: ["JSONB query", "Relational", "SQL Indexing", "Transactions"],
  Ollama: ["Llama 3", "Local LLM", "Model server", "Model Factory"],
  Tailwind: ["CSS Grid", "Utility-First", "Flexbox", "Responsive"],
  Docker: ["Containers", "Images", "Compose", "Volumes"],
  SQLite: ["Local DB", "Serverless", "SQL", "Fast Read"],
  Git: ["Branching", "Commit", "Merge", "Rebase"],
  "Node.js": ["V8 Engine", "NPM", "Event Loop", "FS module"],
  Express: ["Routing", "Middleware", "HTTP methods", "REST API"],
  TypeScript: ["Interfaces", "Generics", "Type Safe", "Compiler"],
  Pandas: ["DataFrames", "CSV Parse", "Data Clean", "Series"],
  Gemini: ["LLM", "Flash 1.5", "Pro 1.5", "Multimodal"],
  "Next.js": ["SSR", "App Router", "API Routes", "SEO Optimization"],
  WebSockets: ["WS Protocol", "Realtime", "Duplex", "Socket.io"],
  Redis: ["Caching", "Key-Value", "In-Memory", "Pub/Sub"]
};

// Generates a random constellation of size nodeCount with safe distance constraints
function generateConstellation(nodeCount) {
  const shuffled = [...SKILLS_POOL].sort(() => Math.random() - 0.5);
  // Pick nodeCount - 1 random tech nodes
  const selectedNames = shuffled.slice(0, nodeCount - 1);
  
  // Seed is always Vite placed at left-center
  const generated = [{ id: 0, label: "Vite", xPct: 0.15, yPct: 0.5 }];
  
  for (let i = 0; i < selectedNames.length; i++) {
    const label = selectedNames[i];
    let xPct = 0;
    let yPct = 0;
    let attempts = 0;
    let isValid = false;
    
    // spacing-guaranteed coordinate generation
    while (!isValid && attempts < 80) {
      attempts++;
      // Left-to-right progression distribution based on index
      const progressFactor = i / selectedNames.length;
      xPct = 0.3 + progressFactor * 0.56 + (Math.random() - 0.5) * 0.08;
      yPct = 0.15 + Math.random() * 0.7;
      
      // Check distance against already placed nodes
      let minDistance = 0.15; // 15% distance separation constraint
      isValid = true;
      for (const other of generated) {
        const d = Math.hypot(other.xPct - xPct, other.yPct - yPct);
        if (d < minDistance) {
          isValid = false;
          break;
        }
      }
    }
    
    generated.push({
      id: i + 1,
      label,
      xPct,
      yPct
    });
  }
  
  return generated;
}

/**
 * NeuralSignature
 * Upgraded visualizer that generates a spacing-guaranteed random cluster of
 * Tushar's stack on each mount and system reboot cycle.
 */
export default function NeuralSignature({
  onLogAdded,
  onRadarUpdate,
  accent = "#E84B2A", // Rust orange
  height = "100%",
}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  const onLogAddedRef = useRef(onLogAdded);
  const onRadarUpdateRef = useRef(onRadarUpdate);

  useEffect(() => {
    onLogAddedRef.current = onLogAdded;
    onRadarUpdateRef.current = onRadarUpdate;
  }, [onLogAdded, onRadarUpdate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const NODE_COUNT = 14;

    // Generate a fresh constellation mapping for this render loop
    let nodes = generateConstellation(NODE_COUNT).map((n) => ({
      ...n,
      x: 0,
      y: 0,
      baseX: 0,
      baseY: 0,
      driftX: (Math.random() - 0.5) * 6,
      driftY: (Math.random() - 0.5) * 6,
      phase: Math.random() * Math.PI * 2,
    }));

    let connectedSet = [0]; // Vite starts connected
    let currentTargetIndex = null;
    let buildProgress = 0;
    let userPriorityIndex = null;

    let compileTimer = 0;
    let systemState = "growing"; // "growing", "compiling", "cooldown"

    let ripples = [];
    let floatingWords = [];
    let pulses = [];

    const mouse = { x: -9999, y: -9999, active: false };

    // Set initial target
    findNextTarget();

    function resize() {
      const rect = wrap.getBoundingClientRect();
      width = rect.width || 400;
      height = rect.height || 280;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-map nodes base positions in actual pixel dimensions
      nodes.forEach((n) => {
        n.baseX = n.xPct * width;
        n.baseY = n.yPct * height;
        if (n.x === 0) {
          n.x = n.baseX;
          n.y = n.baseY;
        }
      });
    }

    function findNextTarget() {
      if (connectedSet.length === nodes.length) {
        systemState = "compiling";
        compileTimer = 15000; // 15 seconds compile phase
        if (onLogAddedRef.current) {
          onLogAddedRef.current("⚡ Compile trigger: All system cores connected. Optimization 99.8%.");
          onLogAddedRef.current("⚡ Compiling pipeline: Building production bundle...");
        }
        return;
      }

      if (userPriorityIndex !== null && !connectedSet.includes(userPriorityIndex)) {
        currentTargetIndex = userPriorityIndex;
      } else {
        let bestTarget = null;
        let minDist = Infinity;
        for (let i = 0; i < nodes.length; i++) {
          if (connectedSet.includes(i)) continue;
          const candidate = nodes[i];
          for (const connIdx of connectedSet) {
            const connNode = nodes[connIdx];
            const d = Math.hypot(connNode.baseX - candidate.baseX, connNode.baseY - candidate.baseY);
            if (d < minDist) {
              minDist = d;
              bestTarget = i;
            }
          }
        }
        currentTargetIndex = bestTarget;
      }

      buildProgress = 0;
      if (currentTargetIndex !== null && onLogAddedRef.current) {
        const sourceNode = getSourceNodeFor(currentTargetIndex);
        const targetNode = nodes[currentTargetIndex];
        onLogAddedRef.current(`> Gateway search: Routing path toward [${targetNode.label.toUpperCase()}]`);
        onLogAddedRef.current(`> Channel initialized: ${sourceNode.label} -> ${targetNode.label} (Building data bridge)...`);
      }
    }

    function getSourceNodeFor(targetIdx) {
      const target = nodes[targetIdx];
      let source = nodes[0];
      let minDist = Infinity;
      for (const idx of connectedSet) {
        const connNode = nodes[idx];
        const d = Math.hypot(connNode.baseX - target.baseX, connNode.baseY - target.baseY);
        if (d < minDist) {
          minDist = d;
          source = connNode;
        }
      }
      return source;
    }

    function triggerRipple(x, y) {
      ripples.push({ x, y, r: 0, max: 120, alpha: 1 });
    }

    function spawnFloatingWords(node, list) {
      const label = list[Math.floor(Math.random() * list.length)];
      floatingWords.push({
        x: node.x,
        y: node.y - 12,
        text: label,
        alpha: 0,
        life: 0,
      });
    }

    function toLocal(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function onDown(e) {
      const p = toLocal(e);
      triggerRipple(p.x, p.y);

      let clickedIndex = null;
      let minDist = 32;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const d = Math.hypot(n.x - p.x, n.y - p.y);
        if (d < minDist) {
          minDist = d;
          clickedIndex = i;
        }
      }

      if (clickedIndex !== null) {
        const clickedNode = nodes[clickedIndex];
        if (connectedSet.includes(clickedIndex)) {
          const subskills = KEYWORDS[clickedNode.label] || [];
          spawnFloatingWords(clickedNode, subskills);
          if (onLogAddedRef.current) {
            onLogAddedRef.current(`> Query active: Core [${clickedNode.label.toUpperCase()}] online and active.`);
          }
        } else {
          userPriorityIndex = clickedIndex;
          if (onLogAddedRef.current) {
            onLogAddedRef.current(`> Intercept: User requested priority connection lock on [${clickedNode.label.toUpperCase()}]`);
          }
          findNextTarget();
        }
      }
    }

    function onMove(e) {
      const p = toLocal(e);
      mouse.x = p.x;
      mouse.y = p.y;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
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
      const dt = Math.min(now - last, 50);
      last = now;

      ctx.clearRect(0, 0, width, height);

      // 1. Gentle float drift calculation
      nodes.forEach((n) => {
        n.phase += dt * 0.0012;
        const currentDriftX = Math.sin(n.phase) * n.driftX;
        const currentDriftY = Math.cos(n.phase) * n.driftY;
        
        n.x = n.baseX + currentDriftX;
        n.y = n.baseY + currentDriftY;

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 80 && d > 0.01) {
            const force = (80 - d) / 80;
            n.x += (dx / d) * force * 0.8;
            n.y += (dy / d) * force * 0.8;
          }
        }
      });

      // 2. Grow connection loop logic
      if (systemState === "growing" && currentTargetIndex !== null) {
        const source = getSourceNodeFor(currentTargetIndex);
        const target = nodes[currentTargetIndex];

        // Grow progress delta (takes 7 seconds per connection to span 1.5 minutes)
        buildProgress += dt / 7000;
        if (buildProgress >= 1) {
          buildProgress = 1;
          connectedSet.push(currentTargetIndex);
          if (userPriorityIndex === currentTargetIndex) {
            userPriorityIndex = null;
          }
          if (onLogAddedRef.current) {
            onLogAddedRef.current(`> Pipeline success: linked [${source.label}] -> [${target.label}] (Link status: STABLE).`);
          }
          triggerRipple(target.x, target.y);
          spawnFloatingWords(target, KEYWORDS[target.label] || ["Core Node"]);
          findNextTarget();
        }

        // Radar telemetry updates
        if (onRadarUpdateRef.current) {
          const distFromCenter = Math.hypot(target.x - width / 2, target.y - height / 2);
          const rawAngle = Math.atan2(target.y - height / 2, target.x - width / 2);
          const angleDeg = ((rawAngle * 180) / Math.PI + 360) % 360;
          onRadarUpdateRef.current({
            target: target.label,
            distance: Math.round(distFromCenter),
            progress: Math.round(buildProgress * 100),
            angle: Math.round(angleDeg),
            xPct: target.xPct,
            yPct: target.yPct,
          });
        }
      } else if (systemState === "compiling") {
        compileTimer -= dt;
        if (compileTimer <= 0) {
          systemState = "cooldown";
          compileTimer = 12000; // 12 seconds active display phase
          if (onLogAddedRef.current) {
            onLogAddedRef.current("⚡ Compile complete. AI Agent compiling finished successfully.");
            onLogAddedRef.current("⚡ Model status: Running full-stack loop.");
          }
        }
      } else if (systemState === "cooldown") {
        compileTimer -= dt;
        if (compileTimer <= 0) {
          // Restart simulation with a completely FRESH random constellation layout!
          const rawNodes = generateConstellation(NODE_COUNT);
          nodes = rawNodes.map((n) => ({
            ...n,
            x: n.xPct * width,
            y: n.yPct * height,
            baseX: n.xPct * width,
            baseY: n.yPct * height,
            driftX: (Math.random() - 0.5) * 6,
            driftY: (Math.random() - 0.5) * 6,
            phase: Math.random() * Math.PI * 2,
          }));

          connectedSet = [0];
          currentTargetIndex = null;
          userPriorityIndex = null;
          systemState = "growing";
          if (onLogAddedRef.current) {
            onLogAddedRef.current("🔄 System Recycle: Generating new stack cluster layout...");
          }
          findNextTarget();
        }
      }

      // 3. Draw active connections
      ctx.lineWidth = 1;
      for (let i = 0; i < connectedSet.length; i++) {
        for (let j = i + 1; j < connectedSet.length; j++) {
          const idxA = connectedSet[i];
          const idxB = connectedSet[j];
          const a = nodes[idxA];
          const b = nodes[idxB];
          
          ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, 0.28)`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // 4. Draw active building channel (yellow-green dashed scanner)
      if (systemState === "growing" && currentTargetIndex !== null) {
        const source = getSourceNodeFor(currentTargetIndex);
        const target = nodes[currentTargetIndex];

        ctx.strokeStyle = "#CAFF00";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(
          source.x + (target.x - source.x) * buildProgress,
          source.y + (target.y - source.y) * buildProgress
        );
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.strokeStyle = "#CAFF00";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(target.x, target.y, 14 + Math.sin(now * 0.005) * 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 5. Ambient electrical pulses
      if (Math.random() < 0.03 && connectedSet.length > 1) {
        const aIdx = connectedSet[Math.floor(Math.random() * connectedSet.length)];
        let bIdx = connectedSet[Math.floor(Math.random() * connectedSet.length)];
        if (aIdx !== bIdx) {
          pulses.push({
            a: nodes[aIdx],
            b: nodes[bIdx],
            t: 0,
            speed: 0.012 + Math.random() * 0.01,
          });
        }
      }
      pulses = pulses.filter((p) => p.t <= 1);
      pulses.forEach((p) => {
        p.t += p.speed * (dt / 16.6);
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = "#E84B2A";
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Draw nodes
      nodes.forEach((n, idx) => {
        const isConnected = connectedSet.includes(idx);
        const isTarget = currentTargetIndex === idx && systemState === "growing";
        const isPriority = userPriorityIndex === idx;

        const pulse = Math.sin(n.phase) * 0.4 + 1;
        const baseRadius = 4.5;

        if (isConnected) {
          ctx.fillStyle = `rgba(${ar}, ${ag}, ${ab}, 0.95)`;
        } else if (isTarget) {
          ctx.fillStyle = "#CAFF00";
        } else {
          ctx.fillStyle = "rgba(100, 100, 100, 0.45)";
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, baseRadius + (isConnected ? pulse * 0.5 : 0), 0, Math.PI * 2);
        ctx.fill();

        if (isConnected) {
          ctx.fillStyle = `rgba(${ar}, ${ag}, ${ab}, 0.07)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 14 * pulse, 0, Math.PI * 2);
          ctx.fill();
        }

        if (isPriority) {
          ctx.strokeStyle = "#CAFF00";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.font = "bold 9px 'Space Mono', monospace";
        ctx.textAlign = "center";
        
        if (isConnected) {
          ctx.fillStyle = `rgba(${ar}, ${ag}, ${ab}, 0.9)`;
        } else if (isTarget) {
          ctx.fillStyle = "#CAFF00";
        } else {
          ctx.fillStyle = "rgba(120, 120, 120, 0.6)";
        }
        ctx.fillText(n.label, n.x, n.y - 12);
      });

      // 7. Click ripple waves
      ripples = ripples.filter((r) => r.alpha > 0.01);
      ripples.forEach((r) => {
        r.r += dt * 0.12;
        r.alpha = Math.max(0, 1 - r.r / r.max);
        ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${r.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 8. Draw floating words
      floatingWords = floatingWords.filter((w) => w.life < 1);
      floatingWords.forEach((w) => {
        w.life += dt * 0.0008;
        w.y -= dt * 0.012;
        w.alpha = w.life < 0.25 ? w.life / 0.25 : 1 - (w.life - 0.25) / 0.75;
        
        ctx.font = "italic 9px 'Space Mono', monospace";
        ctx.fillStyle = `rgba(${ar}, ${ag}, ${ab}, ${Math.max(w.alpha, 0)})`;
        ctx.textAlign = "center";
        ctx.fillText(w.text, w.x, w.y);
      });

      if (systemState === "growing" && currentTargetIndex !== null) {
        ctx.font = "8px 'Space Mono', monospace";
        ctx.fillStyle = "rgba(232, 75, 42, 0.4)";
        ctx.textAlign = "left";
        ctx.fillText(
          `LOCK: [${nodes[currentTargetIndex].label.toUpperCase()}] @ ${Math.round(buildProgress * 100)}%`,
          10,
          height - 10
        );
      } else if (systemState === "compiling") {
        ctx.font = "8px 'Space Mono', monospace";
        ctx.fillStyle = "#CAFF00";
        ctx.textAlign = "left";
        ctx.fillText(`OPTIMIZING NET CORE... [${Math.round((1 - compileTimer / 15000) * 100)}%]`, 10, height - 10);
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(wrap);

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", (e) => {
      onDown(e);
      onMove(e);
    }, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [accent]);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: height || "100%", minHeight: "260px", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%", cursor: "crosshair" }}
      />
    </div>
  );
}
