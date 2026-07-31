/**
 * 시그니처 요소 — 회사의 구조 그 자체.
 * 여섯 마디가 원을 이루고, 점 하나가 계속 돈다.
 * 글자는 SVG 밖(HTML)에 두어 번역·접근성·반응형을 확보한다.
 */

type Tone = "light" | "dark";

const R = 118;
const C = 160;

const palette = {
  light: {
    ring: "var(--color-line)",
    arc: "var(--color-forest)",
    nodeFill: "var(--color-bone)",
    nodeStroke: "var(--color-line)",
    num: "var(--color-forest)",
    center: "var(--color-ink)",
    centerSub: "var(--color-ink-3)",
    dot: "var(--color-forest)",
  },
  dark: {
    ring: "var(--color-line-dark)",
    arc: "var(--color-forest-lit)",
    nodeFill: "var(--color-ink)",
    nodeStroke: "var(--color-line-dark)",
    num: "var(--color-forest-lit)",
    center: "var(--color-bone)",
    centerSub: "var(--color-ink-4)",
    dot: "var(--color-forest-lit)",
  },
} as const;

const nodeAt = (i: number) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
};

export default function Loop({
  keys,
  center,
  tone = "light",
  className = "",
}: {
  keys: readonly string[];
  center: readonly string[];
  tone?: Tone;
  className?: string;
}) {
  const p = palette[tone];

  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label={center.join(" ")}
      className={`h-auto w-full max-w-[340px] ${className}`}
    >
      {/* 바깥 링 */}
      <circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke={p.ring}
        strokeWidth="1"
      />

      {/* 진행 방향 — 항상 도는 점 */}
      <g className="vt-orbit">
        <circle cx={C} cy={C - R} r="4.5" fill={p.dot} />
        <path
          d={`M ${C - 30} ${C - R + 4} A ${R} ${R} 0 0 1 ${C} ${C - R}`}
          fill="none"
          stroke={p.arc}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      {/* 여섯 마디 */}
      {keys.map((k, i) => {
        const { x, y } = nodeAt(i);
        return (
          <g key={k}>
            <circle
              cx={x}
              cy={y}
              r="18"
              fill={p.nodeFill}
              stroke={p.nodeStroke}
              strokeWidth="1"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="var(--font-sans)"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.8"
              fill={p.num}
            >
              {k}
            </text>
          </g>
        );
      })}

      {/* 가운데 */}
      <text
        x={C}
        y={C - 12}
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
        fill={p.center}
      >
        {center[0]}
      </text>
      <text
        x={C}
        y={C + 14}
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
        fill={p.center}
      >
        {center[1]}
      </text>
      <line
        x1={C - 26}
        y1={C + 34}
        x2={C + 26}
        y2={C + 34}
        stroke={p.arc}
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
