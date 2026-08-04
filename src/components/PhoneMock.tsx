"use client";

import { useState } from "react";

/**
 * 앱 화면 폰 목업.
 *
 * 동작 우선순위
 *  1) public/ 에 mp4 가 있으면 → 3개를 순환 재생 (animai.kr 와 동일 소스)
 *  2) mp4 가 없으면 → poster(jpg) 가 그대로 남아 정지 이미지로 보인다
 *
 * 즉 mp4 를 복사하지 않아도 깨지지 않는다. 복사하면 자동으로 영상이 된다.
 */

const CLIPS = [
  { video: "/app-puppy.mp4", poster: "/app-puppy.jpg", alt: "AnimAI 앱 — 첫날 케어 질문" },
  { video: "/app-cat.mp4", poster: "/app-cat.jpg", alt: "AnimAI 앱 — 고양이 헤어볼 상담" },
  { video: "/app-allergy.mp4", poster: "/app-allergy.jpg", alt: "AnimAI 앱 — 사진으로 물어보기" },
] as const;

export default function PhoneMock({
  className = "",
  autoplay = true,
}: {
  className?: string;
  autoplay?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const clip = CLIPS[idx];

  const next = () => setIdx((i) => (i + 1) % CLIPS.length);

  return (
    <div className={`relative w-full max-w-[290px] ${className}`}>
      <div className="relative aspect-[9/17.5] overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-ink shadow-[0_24px_60px_-24px_rgba(11,31,42,0.45)]">
        {autoplay ? (
          <video
            key={idx}
            src={clip.video}
            poster={clip.poster}
            preload="metadata"
            autoPlay
            muted
            playsInline
            onEnded={next}
            aria-label={clip.alt}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={clip.poster}
            alt={clip.alt}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>

      {/* 화면 전환 인디케이터 */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {CLIPS.map((c, i) => (
          <button
            key={c.poster}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={c.alt}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-forest" : "w-1.5 bg-line hover:bg-ink-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
