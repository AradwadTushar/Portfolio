import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid with brutalist theme settings
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: '"Space Mono", monospace',
    primaryColor: '#FAF7F2',
    primaryTextColor: '#0D0D0D',
    primaryBorderColor: '#0D0D0D',
    lineColor: '#0D0D0D',
    secondaryColor: '#CAFF00',
    tertiaryColor: '#EDEAE0',
    edgeLabelBackground: '#FAF7F2',
    clusterBkg: '#F5F0E8',
    clusterBorder: '#0D0D0D',
    nodeBorder: '#0D0D0D',
    mainBkg: '#FAF7F2',
    nodeTextColor: '#0D0D0D',
  },
});

export default function MermaidViewer({ chart, id = 'mermaid-chart' }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!chart || !chart.trim()) {
      setSvgContent('');
      return;
    }

    const uniqueId = `${id}-${Math.random().toString(36).substring(2, 9)}`;

    async function renderChart() {
      try {
        setError(null);
        // Clean input chart string
        const cleanedChart = chart.trim();
        const { svg } = await mermaid.render(uniqueId, cleanedChart);
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setError('Could not render diagram.');
        }
      }
    }

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="border-2 border-rust/40 bg-rust/5 p-4 font-mono text-xs text-rust">
        <p className="font-bold mb-1">Diagram Render Warning</p>
        <p className="text-[11px] text-[#666]">{error}</p>
        <pre className="mt-2 text-[10px] p-2 bg-surface overflow-x-auto border border-ink/20 text-ink">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div className="mermaid-viewer w-full overflow-x-auto p-4 bg-[#FAF7F2] border-2 border-ink flex justify-center items-center select-none shadow-[2px_2px_0px_0px_rgba(13,13,13,1)]">
      <div
        ref={containerRef}
        className="w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto font-mono text-xs"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
