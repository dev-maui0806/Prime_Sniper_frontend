import { useEffect, useRef } from "react";

interface ChartData {
  value: number;
  label: string;
  isNegative: boolean;
}

const Chart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const width = canvas.width;
    const height = canvas.height;

    // Colors matching the image
    const bgDark = "#1A1A1A";
    const gridColor = "#333333";
    const borderColor = "#E5E5E5";
    const greenColor = "#00FF00";
    const redColor = "#FF0000";
    const textColor = "#FFFFFF";
    const purpleColor = "#6A5ACD";
    const orangeColor = "#FFA500";

    // Clear canvas with dark background
    ctx.fillStyle = bgDark;
    ctx.fillRect(0, 0, width, height);

    // Draw grid pattern
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    const gridSpacing = 20;
    for (let x = 0; x <= width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Chart data with exact values from image
    const data: ChartData[] = [
      { value: 1224, label: "+1224%", isNegative: false },
      { value: 2854, label: "+2854%", isNegative: false },
      { value: 1224, label: "+1224%", isNegative: false },
      { value: -78, label: "-78%", isNegative: true },
      { value: 819, label: "+819%", isNegative: false },
      { value: 1870, label: "+1870%", isNegative: false },
      { value: 456, label: "+456%", isNegative: false },
    ];

    // Chart dimensions
    const chartPadding = 50;
    const chartAreaWidth = width - chartPadding * 2;
    const chartAreaHeight = height - chartPadding * 2 - 60; // Space for legend
    const topPadding = 30; // Space for dots and labels
    const bottomPadding = 50; // Space for legend
    
    // Calculate bar dimensions
    const maxValue = Math.max(...data.map(d => Math.abs(d.value)));
    const barWidth = 40;
    const totalBarArea = data.length * barWidth;
    const totalSpacing = chartAreaWidth - totalBarArea;
    const barSpacing = totalSpacing / (data.length + 1);
    
    // Calculate y positions
    const chartTop = topPadding;
    const chartBottom = height - bottomPadding;
    const chartHeight = chartBottom - chartTop;
    const zeroY = chartBottom; // All bars start from bottom

    // Draw bars
    data.forEach((item, index) => {
      const x = chartPadding + barSpacing + index * (barWidth + barSpacing);
      const barHeight = (Math.abs(item.value) / maxValue) * chartHeight;
      const barY = zeroY - barHeight;

      // Draw bar
      ctx.fillStyle = item.isNegative ? redColor : greenColor;
      ctx.fillRect(x, barY, barWidth, barHeight);

      // Draw value label above bar
      ctx.fillStyle = textColor;
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      const labelY = barY - 8;
      ctx.fillText(item.label, x + barWidth / 2, labelY);
    });

    // Draw border
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, width, height);

    // Draw three dots in top-left (red, orange, green)
    const dotRadius = 5;
    const dotY = 15;
    const dotSpacing = 14;
    let dotX = 15;
    
    ctx.fillStyle = redColor;
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    dotX += dotSpacing;
    ctx.fillStyle = orangeColor;
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    dotX += dotSpacing;
    ctx.fillStyle = greenColor;
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw green dot in bottom-left
    ctx.fillStyle = greenColor;
    ctx.beginPath();
    ctx.arc(15, height - 15, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw legend at bottom center
    const legendY = height - 25;
    const legendX = width / 2;
    const legendSpacing = 100;

    // ACTIVE legend (green dot)
    ctx.fillStyle = greenColor;
    ctx.beginPath();
    ctx.arc(legendX - legendSpacing / 2, legendY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = textColor;
    ctx.font = "12px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("ACTIVE", legendX - legendSpacing / 2 + dotRadius * 2 + 6, legendY);

    // MONITORING legend (purple dot)
    ctx.fillStyle = purpleColor;
    ctx.beginPath();
    ctx.arc(legendX + legendSpacing / 2, legendY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = textColor;
    ctx.fillText("MONITORING", legendX + legendSpacing / 2 + dotRadius * 2 + 6, legendY);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      className="w-full h-auto"
      style={{ imageRendering: "auto" }}
    />
  );
};

export default Chart;

