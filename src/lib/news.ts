/**
 * 뉴스룸 데이터.
 * 새 소식이 생기면 이 배열 맨 위에 추가하면 된다. 배열이 비면 페이지가 빈 상태를 보여준다.
 *
 * cat  : "press"(언론 보도) | "video"(영상) | "notice"(공지)
 * date : "2026-07-25" 형식 (문자열 정렬로 최신순 처리)
 * href : 원문 링크. video 는 유튜브 주소를 넣으면 된다.
 * thumb: 썸네일 이미지 (선택). public/news/ 아래 두고 "/news/파일명.jpg" 로 적는다.
 *        유튜브는 비워두면 아래 youtubeThumb() 가 자동으로 썸네일을 만든다.
 */

export type NewsCat = "press" | "video" | "notice";

export type NewsItem = {
  id: string;
  cat: NewsCat;
  date: string;
  outlet: { ko: string; en: string };
  title: { ko: string; en: string };
  summary?: { ko: string; en: string };
  href?: string;
  thumb?: string;
};

export const NEWS: NewsItem[] = [
  // ── 예시. 실제 소식이 생기면 이 형식으로 위에 추가하고, 예시는 지운다. ──
  // {
  //   id: "2026-07-animai-launch",
  //   cat: "press",
  //   date: "2026-07-01",
  //   outlet: { ko: "매체명", en: "Outlet" },
  //   title: {
  //     ko: "비타니마, 반려동물 AI 앱 'AnimAI' 정식 출시",
  //     en: "Vitanima launches AnimAI",
  //   },
  //   summary: {
  //     ko: "한 줄 요약을 적습니다.",
  //     en: "One-line summary.",
  //   },
  //   href: "https://example.com/article",
  // },
];

/** 유튜브 주소에서 썸네일 URL 만들기 */
export function youtubeThumb(url?: string): string | null {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
}

/** 최신순 정렬 */
export const sortedNews = () =>
  [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
