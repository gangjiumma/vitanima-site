export const LANGS = ["ko", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang =>
  (LANGS as readonly string[]).includes(v);

/** Next 라우트 params 는 { lang: string } 으로 오므로 여기서 Lang 으로 좁힌다 */
export const resolveLang = async (
  params: Promise<{ lang: string }>
): Promise<Lang> => {
  const { lang } = await params;
  return isLang(lang) ? lang : "ko";
};

/* ────────────────────────────────────────────────
   ⚠️ 대외 공개 문서다. 아래 원칙을 넘는 문장을 넣지 말 것.
   1) 특허는 "출원"까지만. "등록"·"독점" 금지.
   2) 청구항 수준 기술(모듈 번호·수식·관측창·발현지연) 금지.
      미출원 후속 발명은 개념조차 쓰지 않는다.
   3) IR 전용 숫자(밸류에이션·재무추정·지분·PSR) 전면 금지.
   4) 트랙션은 반올림해서 쓴다.
   5) 물류 등 두 번째 현장은 이 사이트에 쓰지 않는다(별도 내부 메모).
   6) 카피는 여기서만 관리. 페이지 파일에 직접 쓰면 영문이 비어버린다.
──────────────────────────────────────────────── */

export const dict = {
  ko: {
    meta: {
      title: "㈜비타니마 — AI가 우리 아이를 이해하게 만듭니다",
      description:
        "세상의 AI는 평균을 학습합니다. 비타니마의 AI는 우리 아이를 학습합니다. 보호자의 말을 반려동물 개체 데이터로 바꾸는 AI 기술로 AnimAI를 만듭니다.",
    },
    nav: {
      about: "회사",
      ceo: "대표",
      animai: "서비스",
      technology: "기술",
      news: "뉴스",
      careers: "채용",
      contact: "문의",
      menu: "메뉴 열기",
      close: "메뉴 닫기",
    },
    common: {
      company: "주식회사 비타니마",
      companyShort: "㈜비타니마",
      email: "cs@vitanima.kr",
      phone: "010-2358-5248",
      phoneHref: "tel:+821023585248",
      productUrl: "https://www.animai.kr",
      dashboardUrl: "https://www.animai.kr/business",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "운영 중",
      more: "자세히 보기",
    },

    home: {
      eyebrow: "PET LIFETIME AI",
      h1: ["아이가 변해도,", "맞춤은 함께 변하도록"],
      lead: [
        "비타니마는 대화와 생활 신호를 통해 반려동물 한 마리 한 마리를 계속 학습하는 라이프타임 AI를 만듭니다.",
        "AI 대화로 궁금증을 풀고, Loop로 우리 아이를 학습하며, 태그와 홈 디바이스로 보호자가 보지 못하는 시간까지 이해합니다.",
      ],
      ctaPrimary: "AnimAI 알아보기",
      ctaSecondary: "기술 구조 보기",

      heroFlow: [
        { k: "01", en: "TALK", t: "대화", d: "보호자가 우리 아이의 경험을 이야기합니다." },
        { k: "02", en: "LEARN", t: "Loop 학습", d: "AI가 개체별 특성과 변화를 계속 학습합니다." },
        { k: "03", en: "SIGNAL", t: "24시간 신호", d: "태그와 홈 디바이스가 관찰하지 못한 시간을 채웁니다." },
      ],
      heroFlowCenter: "한 마리만을 학습하는 Lifetime AI",

      problemEyebrow: "THE PROBLEM",
      problemH2: ["우리 아이는 변하는데,", "맞춤은 그대로였습니다"],
      problemLead: [
        "같은 품종과 나이여도 성향과 알레르기, 기호와 생활은 모두 다릅니다.",
        "게다가 반려동물은 성장하고, 나이가 들고, 건강과 체중, 좋아하는 것까지 계속 달라집니다. 하지만 기존의 맞춤은 처음 입력한 조건에서 멈춰 있었습니다.",
      ],
      problemQuote:
        "아이의 시간은 빠르게 흐르기에, 맞는 것을 찾는 과정도 더 짧아져야 합니다.",
      timeline: [
        { t: "퍼피", d: ["성장기 사료", "높은 활동량"] },
        { t: "성견", d: ["새로운 기호", "체중 변화"] },
        { t: "질환·알레르기 발견", d: ["상품과 관리 변경"] },
        { t: "노령기", d: ["활동량 감소", "새로운 돌봄 필요"] },
      ],
      timelineOld: "기존 추천: 처음 설정한 '5살 말티즈'에서 멈춤",
      timelineNew: "AnimAI: 변화가 생길 때마다 다음 맞춤 갱신",

      prodEyebrow: "NOW AVAILABLE",
      prodTag: "운영 중",
      prodH2: "AnimAI",
      prodTagline: ["대화로 시작하는", "반려동물 라이프타임 AI"],
      prodBody: [
        "AnimAI는 보호자의 궁금증에 답하는 데서 시작합니다.",
        "대화 속에서 우리 아이의 특성과 변화를 이해하고, 이전 경험과 새로운 답을 계속 학습합니다.",
        "한 번의 추천으로 끝나지 않고, 아이의 변화에 따라 다음 질문과 정보도 함께 달라집니다.",
      ],
      prodCards: [
        { t: "궁금증을 풉니다", d: "보호자가 지금 필요한 정보를 AI와 대화로 확인합니다." },
        { t: "한 마리를 학습합니다", d: "대화 속 경험과 결과를 개체별 프로파일에 반영합니다." },
        { t: "먼저 확인합니다", d: "AI가 이전 대화와 변화를 바탕으로 필요한 내용을 먼저 묻습니다." },
      ],
      prodLink: "AnimAI 자세히 보기",
      iosBtn: "App Store",
      androidBtn: "Google Play",

      loopEyebrow: "THE LOOP",
      loopH2: ["한 번의 답이", "다음 맞춤을 바꿉니다"],
      loopCenter: ["AI Loop", "특허 출원"],
      loopSteps: [
        { k: "01", t: "보호자가 말함", d: "" },
        { k: "02", t: "의미 추출", d: "" },
        { k: "03", t: "개체별 모델 갱신", d: "" },
        { k: "04", t: "AI가 먼저 확인", d: "" },
        { k: "05", t: "보호자가 답함", d: "" },
        { k: "06", t: "다음 맞춤에 반영", d: "" },
      ],
      loopExampleQuote: "새 사료를 먹였는데 설사를 했어요.",
      loopExampleLabel: "AI가 이해하는 내용",
      loopExample: [
        { k: "개체", v: "마음이" },
        { k: "상품", v: "새 사료" },
        { k: "결과", v: "설사" },
        { k: "시점", v: "급여 이후" },
      ],
      loopExampleNextLabel: "다음 변화",
      loopExampleNext:
        "해당 상품과 유사한 조건의 추천 기준을 낮추고, 다음 선택에는 이전 반응을 함께 반영합니다.",
      loopBody:
        "보호자의 답은 단순한 대화 기록이 아니라 다음 정보와 질문을 바꾸는 개체별 학습 데이터가 됩니다.",
      loopLink: "Loop 기술 자세히 보기",

      signalEyebrow: "NEXT SIGNAL",
      signalH2: ["보호자가 보지 못한", "시간까지"],
      signalBody: [
        "보호자는 우리 아이를 가장 잘 알지만, 하루 24시간을 모두 지켜볼 수는 없습니다.",
        "AnimAI 태그는 관찰하지 못한 시간의 생활 신호를 더하고, 보호자의 말과 함께 우리 아이의 변화를 이해합니다.",
        "홈 디바이스로 확장되면 활동뿐 아니라 생활 공간에서 나타나는 신호까지 함께 볼 수 있습니다.",
      ],
      signalTagAlt: "AnimAI 웨어러블 태그를 착용한 강아지와 고양이",
      signalQuote:
        "우리는 트래커를 만드는 것이 아니라, Loop가 우리 아이를 더 잘 이해하도록 신호를 더합니다.",
      signalTimeline: [
        { d: "2026.08", t: "내부 파일럿" },
        { d: "2026 하반기", t: "정식 제품 출시 예정" },
        { d: "NEXT", t: "홈 디바이스 확장" },
      ],
      signalLink: "기술 자세히 보기",

      platformEyebrow: "ONE PLATFORM",
      platformH2: ["한 아이의 정보가", "보호자와 서비스 현장 사이에서 이어집니다"],
      platformSides: [
        {
          en: "FOR PET PARENTS",
          t: "AnimAI",
          d: "대화로 우리 아이를 학습하고, 아이에게 맞는 정보와 서비스를 이용합니다.",
          items: ["AI 대화", "개체별 학습", "변화에 따른 개인화", "태그·홈 신호 연동"],
          link: "AnimAI 알아보기",
        },
        {
          en: "FOR PET BUSINESS",
          t: "AnimAI Biz",
          d: "예약과 고객, 매출과 현장 업무를 관리하고, AnimAI 보호자와 연결됩니다.",
          items: ["예약·고객 관리", "매출·통계", "AI 알림장", "앱 연동", "AI 마케팅"],
          link: "AnimAI Biz 알아보기",
        },
      ],

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "이미 작동하고 있습니다",
      proofs: [
        { n: "2,115+", l: "AnimAI 사용자" },
        { n: "2,238건", l: "누적 AI 대화" },
        { n: "10곳", l: "AnimAI Biz 입점 시설" },
        { n: "3건", l: "기술 특허 출원" },
      ],
      proofNote: "* 2026년 8월 3일 기준",

      trackH2: ["현장에서 시작해,", "숫자로 증명했습니다"],
      trackMetrics: [
        { n: "150개", l: "고객사" },
        { n: "450개", l: "프로젝트" },
        { n: "70억 원", l: "창업팀 누적 사업 매출" },
      ],
      trackLead:
        "물류 현장에서 문제를 직접 해결하고 운영해 온 경험을 바탕으로, 이제 반려동물의 일생을 학습하는 AI를 만들고 있습니다.",
      trackLink: "비타니마가 걸어온 길",

      ctaH2: ["아이가 변할 때마다,", "맞춤도 함께 달라져야 합니다"],
      ctaLead:
        "비타니마는 대화와 생활 신호를 통해 반려동물의 일생을 계속 학습하는 라이프타임 AI를 만들고 있습니다.",
      ctaBtn: "AnimAI 시작하기",
      ctaBtn2: "투자·제휴 문의",

      newsH2: "소식",
      newsLink: "전체 보기",
      newsEmpty: "아직 등록된 소식이 없습니다.",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["AI가", "우리 아이를", "이해하게 만듭니다"],
      lead: [
        "비타니마는 반려동물 한 마리 한 마리를 학습하는 라이프타임 AI를 만드는 회사입니다.",
        "보호자의 대화와 반려동물의 생활 신호를 함께 이해해 아이가 변할 때마다 맞춤도 함께 달라지도록 만듭니다.",
      ],
      heroFlow: ["보호자의 대화", "개체별 학습", "생활 신호"],
      heroFlowCenter: "한 마리를 계속 알아가는 AI",

      missionLabel: "MISSION",
      mission: ["반려동물 한 마리 한 마리를", "가장 잘 이해하는 기술을 만듭니다"],
      missionBody:
        "반려동물은 같은 품종과 나이여도 성향과 생활, 건강과 기호가 모두 다릅니다. 비타니마는 평균적인 정보가 아니라 각 아이의 경험과 변화를 학습하는 AI를 만듭니다.",
      visionLabel: "VISION",
      vision: ["모든 아이가", "자기만의 라이프타임 AI를 갖는 것"],
      visionBody:
        "한 번 입력한 정보로 끝나는 맞춤이 아니라, 대화와 생활 신호를 통해 평생 함께 달라지는 AI. 비타니마가 만들고 싶은 반려생활의 새로운 기준입니다.",
      turnBody: ["아이가 변하면,", "맞춤도 함께 달라져야 합니다"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["맞는 것을 찾는 과정이", "너무 오래 걸렸습니다"],
      whyBody: [
        "같은 품종과 나이의 반려동물도 먹는 것과 생활 습관, 몸의 반응이 모두 다릅니다.",
        "보호자는 우리 아이에게 맞는 것을 찾기 위해 알아보고, 선택하고, 직접 시도해야 합니다.",
        "맞지 않으면 다시 바꾸고, 아이의 상태가 달라지면 다시 처음부터 알아봅니다.",
      ],
      whyQuote:
        "아이의 시간은 빠르게 흐르기에, 맞는 것을 찾는 과정도 더 짧아져야 합니다.",
      whyLoop: ["알아보기", "선택하기", "사용하기", "안 맞음", "다시 알아보기"],
      whyClose: "AnimAI는 이 반복을 줄이기 위해 시작됐습니다",

      storyEyebrow: "OUR PATH",
      storyH2: "여기까지 온 길",
      storyLead: [
        "비타니마는 처음부터 반려동물 산업에 있었던 팀이 아닙니다.",
        "우리는 다른 산업의 현장에서 사람들이 반복되는 일에 시간을 쓰는 문제를 먼저 해결했습니다. 그리고 지금, 같은 방식으로 반려동물과 보호자의 시간을 줄이는 일을 시작했습니다.",
      ],
      story: [
        {
          y: "2019",
          k: "DISCOVER",
          t: "현장에서 시작했습니다",
          d: "창고와 차량을 직접 운영하며 매일 같은 문제를 마주했습니다. 일은 끝났지만 정보는 늦게 전달됐고, 사람들은 같은 내용을 다시 확인하고 다시 설명해야 했습니다. 현장에는 답을 아는 사람이 있었지만 그 경험이 다음 과정으로 제대로 이어지지 않았습니다. 그때 알았습니다. 문제는 현장에서 일하는 사람이 아니라, 그 사람이 알고 있는 내용을 제대로 활용하지 못하는 방식에 있었습니다.",
        },
        {
          y: "2022",
          k: "PROVE",
          t: "일하는 방식을 바꿨습니다",
          d: "우리는 사람을 더 투입하는 대신 현장에서 반복되는 내용을 시스템이 처리하도록 만들었습니다. 흩어져 있던 업무를 한곳에 모으고, 사람이 매번 확인하고 전달하던 과정을 자동화했습니다. 그 결과 150개 고객사와 450개 프로젝트에서 관리 업무와 현장 대기 시간을 줄일 수 있었습니다.",
          metrics: [
            { n: "83%", l: "프로세스 관리 업무 감소" },
            { n: "71%", l: "현장 대기 시간 감소" },
            { n: "83%", l: "슈퍼휴먼 PMF" },
          ],
          note: "* 물류 서비스 고객 파일럿 결과",
          learn:
            "우리가 바꾼 것은 기능 하나가 아니라, 사람들이 일하는 방식이었습니다.",
        },
        {
          y: "2026",
          k: "EXPAND",
          t: "같은 질문을 반려생활에서도 만났습니다",
          d: "반려동물을 키우면서 비슷한 문제를 다시 보게 됐습니다. 우리 아이를 가장 잘 아는 사람은 보호자였지만, 그 경험은 다음 선택에 충분히 활용되지 않았습니다. 보호자는 매번 다시 설명하고, 다시 알아보고, 다시 시도해야 했습니다. 그래서 이번에는 보호자의 말을 AI가 이해하고, 대화와 생활 신호를 통해 한 마리씩 학습하도록 만들었습니다. 그렇게 비타니마와 AnimAI가 시작됐습니다.",
        },
      ],
      storyClose: ["산업은 달라졌지만,", "문제를 푸는 방식은 같습니다"],
      storyCloseBody:
        "사람이 이미 알고 있는 것을 기술이 이해하게 만들고, 반복되는 과정에 쓰이던 시간을 줄이는 것. 비타니마가 계속해 온 일입니다.",

      valuesH2: "우리가 지키는 것",
      values: [
        {
          n: "01",
          t: "현장에서 시작합니다",
          d: "가정으로 문제를 만들지 않습니다. 사용자가 실제로 겪는 불편에서 시작합니다.",
        },
        {
          n: "02",
          t: "복잡함은 우리가 맡습니다",
          d: "기술과 운영이 복잡하더라도 사용자는 쉽게 이용할 수 있어야 합니다.",
        },
        {
          n: "03",
          t: "시간이 지날수록 더 좋아져야 합니다",
          d: "한 번 쓰고 끝나는 기능이 아니라 사용할수록 더 잘 맞는 서비스를 만듭니다.",
        },
        {
          n: "04",
          t: "먼저 만들고 결과로 말합니다",
          d: "계획만 설명하기보다 직접 만들고 사용자의 반응으로 확인합니다.",
        },
      ],

      nameH2: "OUR NAME",
      nameLines: [
        { k: "VITA", v: "생명" },
        { k: "ANIMA", v: "마음과 생기" },
        { k: "ANIMAI", v: "그 방향을 처음 구현한 반려동물 라이프타임 AI" },
      ],
      nameBody:
        "비타니마는 생명을 더 잘 이해하는 기술을 만들겠다는 우리의 방향을 담은 이름입니다.",

      factsH2: "법인 정보",
      facts: [
        { k: "법인명", v: "주식회사 비타니마 (Vitanima Inc.)" },
        { k: "대표이사", v: "김훈기" },
        { k: "사업 분야", v: "반려동물 AI · 데이터 플랫폼" },
        { k: "서비스", v: "AnimAI · AnimAI Biz" },
        { k: "전화", v: "010-2358-5248" },
        { k: "이메일", v: "cs@vitanima.kr" },
        { k: "사업자등록번호", v: "284-88-02356" },
        { k: "통신판매업신고번호", v: "제2026-인천연수구-1470호" },
        { k: "설립일", v: "2022년 8월 30일" },
        { k: "주소", v: "인천광역시 연수구 테크노파크로 111번길 5, 8층" },
      ],

      historyH2: "연혁",
      history: [
        {
          y: "2026–",
          t: "주식회사 비타니마",
          d: "AnimAI · AnimAI Biz 개발 및 운영",
        },
        {
          y: "2022–2023",
          t: "주식회사 이지로지",
          d: "수출입 물류 자동화 서비스 (現 비타니마)",
        },
        {
          y: "2019–2025",
          t: "GN로지텍 주식회사",
          d: "수출입 3PL · 창고 · 운송 운영",
        },
        {
          y: "2019–2020",
          t: "GN밸류홀딩스 주식회사",
          d: "반려동물 이동 서비스 '모시개냥' 운영",
        },
        { y: "2018–2025", t: "GN누리", d: "무역 · 물류 (개인사업자)" },
      ],

      ctaH2: ["비타니마가 만드는", "라이프타임 AI를 만나보세요"],
      ctaLead:
        "대화로 시작해 우리 아이를 학습하고, 태그와 홈 디바이스로 관찰하지 못한 시간까지 이해합니다.",
      ctaBtn: "AnimAI 알아보기",
      ctaBtn2: "대표 이야기 보기",
    },
    ceo: {
      eyebrow: "CEO",
      kicker: "다른 산업에서 먼저 증명한 방법으로",
      h1: ["저는 기술보다", "문제를 먼저 봅니다"],
      intro: [
        "기술은 문제를 해결하기 위한 방법입니다.",
        "저는 먼저 현장에 가고, 사람들이 어디에서 시간을 쓰고 있는지 살펴봅니다. 그리고 그 반복을 줄일 수 있는 방법을 직접 만듭니다.",
      ],
      name: "김훈기",
      role: "대표이사 · Founder",
      greeting: [
        "7년 동안 무역과 물류 사업을 운영했습니다. 창고와 차량을 직접 운영했고, 세 개 법인에서 누적 70억 원의 매출을 만들었습니다. 외부 투자 없이 현장에서 문제를 찾고 직접 해결하며 사업을 키웠습니다.",
        "그 과정에서 배운 것은 기술보다 먼저 사람을 봐야 한다는 사실이었습니다. 현장의 문제는 기능이 부족해서만 생기지 않았습니다. 같은 내용을 반복해서 확인하고, 서로 다른 시스템에 다시 입력하고, 다음 사람에게 다시 설명해야 하는 방식이 더 큰 문제였습니다.",
        "2022년에는 이 문제를 직접 바꾸기 위해 수출입 물류 현장의 업무를 한곳에 모으고 자동화하는 서비스를 만들었습니다. 150개 고객사와 450개 프로젝트를 운영하며 관리 업무는 줄었고, 현장 대기 시간도 짧아졌습니다. 좋은 기능을 많이 넣어서가 아니라, 현장에서 가장 번거로운 부분부터 바꿨기 때문입니다.",
        "비타니마를 시작한 이유도 같습니다. 30년 동안 여섯 마리의 강아지를 키우면서도 새로운 아이가 올 때마다 다시 공부해야 했습니다. 같은 품종이어도 성향과 알레르기, 좋아하는 것과 몸의 반응이 달랐기 때문입니다. 알아보고, 시도하고, 맞지 않으면 바꾸는 동안 우리 아이의 시간은 빠르게 흘러갔습니다.",
        "기존의 맞춤 서비스도 많이 사용해 봤습니다. 하지만 대부분은 품종과 체급, 나이에 따라 비슷한 정보와 상품을 제공했습니다. 아이가 변해도 추천은 그대로였고, 결국 보호자는 다시 공부하고 다시 선택해야 했습니다. 그래서 평균을 추천하는 서비스가 아니라, 한 마리씩 학습하는 AI를 만들기로 했습니다.",
        "AnimAI는 보호자와의 대화로 시작합니다. 보호자가 알려준 경험을 AI가 이해하고, 아이에게 맞았던 선택과 맞지 않았던 결과를 학습합니다. 이후 태그와 홈 디바이스의 생활 신호까지 더해 보호자가 보지 못한 시간의 변화도 이해하게 만들고 있습니다. 기술을 만들기 위해 시작한 것이 아닙니다. 우리 아이에게 맞는 것을 찾는 시간과 시행착오를 줄이고, 함께하는 시간을 더 가치 있게 만들기 위해 시작했습니다.",
        "지금도 저는 기획과 제품, 운영을 직접 확인합니다. 서비스는 출시하는 순간 완성되는 것이 아니라 사용자의 반응을 보며 계속 바뀌어야 한다고 믿기 때문입니다. 아이가 변할 때마다 맞춤도 함께 변하는 AI. 비타니마는 그 기준을 직접 만들어가겠습니다.",
      ],
      sign: "㈜비타니마 대표이사 김훈기",

      factsH2: "숫자로 보는 창업 경험",
      facts: [
        { n: "7년", l: "창업·사업 운영", note: "" },
        { n: "3개", l: "법인 운영 경험", note: "" },
        { n: "70억 원", l: "누적 사업 매출", note: "" },
        { n: "0원", l: "외부 투자", note: "직접 매출을 만들며 성장했습니다" },
      ],

      careerH2: "경력",
      career: [
        {
          y: "2026–현재",
          t: "주식회사 비타니마",
          d: "대표이사 · AnimAI · AnimAI Biz",
        },
        {
          y: "2022–2023",
          t: "주식회사 이지로지",
          d: "대표이사 · 수출입 물류 자동화 (現 비타니마)",
        },
        {
          y: "2019–2025",
          t: "GN로지텍 주식회사",
          d: "대표이사 · 3PL · 창고 · 운송",
        },
        {
          y: "2019–2020",
          t: "GN밸류홀딩스 주식회사",
          d: "대표이사 · 반려동물 이동 서비스",
        },
        { y: "2018–2025", t: "GN누리", d: "대표 · 무역 · 물류" },
      ],
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "운영 중",
      h1: "AnimAI",
      tagline: ["대화로 시작하는", "반려동물 라이프타임 AI"],
      lead: [
        "AI와 대화하며 궁금증을 풀고, 우리 아이의 특성과 변화를 계속 학습합니다.",
        "사용할수록 정보와 질문이 달라지고, 태그와 홈 디바이스를 통해 보호자가 보지 못한 시간까지 이해합니다.",
      ],
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: ["AI 대화 · 개체별 Loop 운영 중", "태그 2026.08 파일럿 · 2026 하반기 출시 예정"],

      whyH2: "왜 만들었나",
      whyLead: ["아이의 시간은 빠르게 흐릅니다", "맞는 것을 찾는 과정은 더 짧아져야 합니다"],
      whyBody: [
        "같은 품종과 나이여도 아이마다 성향과 체질, 생활은 모두 다릅니다. 그래서 보호자는 우리 아이에게 맞는 것을 찾기 위해 알아보고, 시도하고, 맞지 않으면 다시 바꿉니다.",
        "기존의 맞춤은 아이가 변해도 함께 달라지지 않았습니다. AnimAI는 보호자의 경험과 선택 이후의 결과를 학습해 다음 시행착오를 줄이기 위해 만들었습니다.",
      ],
      whyQuote: "한 번의 맞춤이 아니라, 아이와 함께 달라지는 맞춤",

      featureH2: "무엇을 하나",
      features: [
        {
          t: "AI 비서",
          d: "궁금한 것을 평소처럼 물어보면 우리 아이의 정보와 이전 경험을 바탕으로 답합니다. 일반적인 답을 반복하는 것이 아니라, 알고 있는 내용이 많아질수록 답도 달라집니다.",
        },
        {
          t: "개체별 학습",
          d: "보호자의 대화에서 아이의 성향과 생활, 선택 이후의 결과를 이해합니다. 새롭게 알게 된 내용은 다음 질문과 정보에 반영됩니다.",
        },
        {
          t: "맞춤 정보",
          d: "품종과 나이만으로 정하지 않습니다. 우리 아이의 특성과 현재 상태, 이전 경험을 바탕으로 더 맞는 정보를 제공합니다.",
        },
        {
          t: "헬스케어",
          d: "평소의 생활과 달라진 변화를 이해하고, 보호자가 아이의 상태를 살피는 데 필요한 정보를 제공합니다. 진단과 처방은 의료진이 담당합니다.",
        },
      ],
      subFeatures: [
        {
          t: "시설 탐색·예약",
          d: "미용실 · 유치원 · 호텔 · 병원 등 필요한 시설을 찾고 앱에서 예약합니다.",
        },
        {
          t: "보호자 커뮤니티",
          d: "비슷한 고민을 가진 보호자의 경험을 살펴보고 우리 아이의 이야기를 나눕니다.",
        },
      ],

      flowEyebrow: "HOW IT FEELS",
      flowH2: ["말할수록,", "다음이 달라집니다"],
      flowQuote: "새 사료를 먹였는데 잘 먹지 않았어요.",
      flowUnderstand: ["새로운 사료", "기호 반응 낮음", "급여 후 결과"],
      flowUnderstandLabel: "AnimAI가 이해",
      flowNextLabel: "다음 이용",
      flowNext: "이전 반응을 고려해 다음 정보와 선택 기준이 달라집니다.",
      flowBody:
        "추천으로 끝나지 않습니다. 실제로 사용한 뒤의 반응을 다시 알려주면 그 결과까지 다음 맞춤에 반영됩니다.",

      signalEyebrow: "COMING NEXT",
      signalH2: ["보호자가 보지 못한", "시간까지"],
      signalBody: [
        "보호자는 우리 아이를 가장 잘 알지만 하루 24시간을 모두 관찰할 수는 없습니다.",
        "AnimAI 태그는 활동과 생활 신호를 더해 보호자의 말만으로 알기 어려운 시간을 채웁니다. 앞으로 홈 디바이스까지 연결해 생활 공간에서 나타나는 변화도 함께 이해합니다.",
      ],
      signalTimeline: [
        { d: "2026.08", t: "내부 파일럿" },
        { d: "2026 하반기", t: "태그 정식 출시 예정" },
        { d: "NEXT", t: "홈 디바이스 확장" },
      ],
      signalTagAlt: "AnimAI 웨어러블 태그를 착용한 강아지와 고양이",
      signalCaption: "제품 이미지는 개발 중인 시안이며 실제 출시 사양과 다를 수 있습니다.",
      signalQuote:
        "태그는 단순한 활동량 측정기가 아니라, AnimAI가 우리 아이를 더 잘 이해하기 위한 신호원입니다.",

      bizH2: "AnimAI Biz",
      bizTagline: ["예약부터 현장 결제까지", "하나로 이어지는 사업자 대시보드"],
      bizBody: [
        "AnimAI Biz는 미용실 · 유치원 · 호텔 · 병원 등 반려동물 시설의 예약과 고객, 매출과 운영을 관리합니다.",
        "앱에서 들어온 예약은 대시보드에 바로 반영되고, 현장에서 결제한 내역도 보호자 앱과 자동으로 연동됩니다.",
      ],
      bizFeatures: [
        "예약·고객 관리",
        "현장 결제 자동 연동",
        "매출·통계",
        "AI 알림장",
        "이용권·할인권",
        "AI 마케팅",
        "AnimAI 앱 연동",
      ],
      bizFlow: [
        "앱에서 시설 탐색",
        "예약",
        "사업자 대시보드 자동 등록",
        "방문·서비스 이용",
        "현장 결제",
        "보호자 앱 자동 반영",
      ],
      bizLink: "AnimAI Biz 알아보기",

      ctaH2: ["아이가 변할 때마다", "맞춤도 함께 달라지도록"],
      ctaLead:
        "AnimAI는 한 번의 답을 제공하는 AI가 아니라 반려동물의 일생을 함께 학습하는 라이프타임 AI입니다.",
      ctaBtn: "AnimAI 시작하기",
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: "방향을 뒤집었습니다",
      lead: [
        "대부분의 반려동물 AI는 센서와 사진에서 신호를 먼저 모으고, AI가 그 의미를 추측합니다.",
        "비타니마는 그 순서를 바꿨습니다. 보호자의 말을 먼저 이해해 개체별 기준을 만들고, 이후 생활 신호를 그 기준에 맞춰 해석합니다.",
      ],
      heroBefore: ["신호", "AI 추정", "평균적 해석"],
      heroAfter: ["보호자 발화", "개체별 라벨", "신호 정렬"],

      realEyebrow: "THE REAL PROBLEM",
      realH2: ["신호만으로는", "이유를 알 수 없습니다"],
      realCase: [
        { k: "센서가 감지한 것", v: "활동량 20% 감소", tone: "neutral" },
        {
          k: "기존 AI의 해석",
          v: "해당 견종과 연령대에서 나타날 수 있는 변화입니다.",
          tone: "old",
        },
        {
          k: "보호자가 아는 실제 이유",
          v: "어제 구토를 해서 오늘 쉬는 중입니다.",
          tone: "new",
        },
      ],
      realBody: [
        "센서는 변화가 있었다는 사실을 알려줍니다. 하지만 그 변화가 왜 생겼는지는 알지 못합니다.",
        "전문가가 모든 아이를 매일 관찰할 수 없고, AI가 평균 데이터만으로 추측하면 해당 개체의 실제 상황을 놓칠 수 있습니다.",
      ],
      realQuote: ["문제는 신호의 양이 아니라,", "그 신호의 의미를 누가 알려주느냐였습니다"],

      invH2: ["보호자의 말이", "개체별 기준이 됩니다"],
      invBeforeLabel: "기존 방향",
      invBefore: ["신호를 모은다", "AI가 의미를 추측한다", "집단 평균으로 해석한다"],
      invAfterLabel: "비타니마의 방향",
      invAfter: [
        "보호자가 이야기한다",
        "AI가 말의 의미를 구조화한다",
        "우리 아이의 라벨이 만들어진다",
        "관련 생활 신호와 연결한다",
      ],
      invBody:
        "보호자의 자연스러운 발화를 행동 · 상태 · 시간 · 개체 정보로 바꾸고, 그 내용을 과거와 미래의 생활 신호에 연결해 한 마리만의 기준을 만듭니다.",

      loopEyebrow: "THE LOOP",
      loopH2: "쓸수록 정확해지는 구조",
      loopBody: [
        "한 번의 질문과 답변으로 끝나지 않습니다.",
        "새롭게 알게 된 내용이 개체별 모델에 반영되고, AI는 필요한 내용을 먼저 확인합니다. 그 답은 다시 새로운 라벨이 되어 다음 질문과 정보, 서비스에 반영됩니다.",
      ],
      loopCenter: ["AI Loop", "특허 출원"],
      loopSteps: [
        { k: "S1", t: "상호작용", d: "보호자가 AI와 이야기합니다.", s: "가동 중" },
        { k: "S2", t: "이해", d: "AI가 개체와 시점, 상태와 행동을 파악합니다.", s: "가동 중" },
        { k: "S3", t: "신호 정렬", d: "관련된 앱 로그와 태그 · 홈 신호 구간에 연결합니다.", s: "태그 파일럿" },
        { k: "S4", t: "개체별 모델 갱신", d: "우리 아이의 누적 이력과 특성을 갱신합니다.", s: "가동 중" },
        { k: "S5", t: "능동 확인", d: "AI가 이전 이력과 변화를 바탕으로 먼저 질문합니다.", s: "가동 중" },
        { k: "S6", t: "피드백 회수", d: "보호자의 답과 실제 결과를 다시 학습합니다.", s: "부분 가동" },
      ],

      caseH2: ["한 번의 대화가", "과거와 다음을 바꿉니다"],
      caseSteps: [
        { k: "D-7", t: "활동과 수면 신호 변화 시작", lines: [] },
        {
          k: "TODAY",
          t: "보호자의 말",
          lines: ["\u201C요즘 밤에 자꾸 뒤척여요.\u201D"],
          extract: ["행동: 야간 뒤척임", "시점: 최근", "개체: 마음이"],
          extractLabel: "AI가 추출",
        },
        {
          k: "D+1",
          t: "AI가 먼저 확인",
          lines: [
            "AI — \u201C병원에서 어떤 이야기를 들었나요?\u201D",
            "보호자 — \u201C다리 통증이래요. 일주일 전부터 그랬던 것 같아요.\u201D",
          ],
        },
        {
          k: "결과",
          t: "과거 신호와 연결",
          lines: [
            "AI는 확인된 다리 통증을 일주일 전부터의 활동 · 수면 변화에 연결합니다.",
            "이후 활동량이 다시 줄어들면 다리 통증의 지속 여부를 먼저 확인합니다.",
          ],
        },
      ],

      signalEyebrow: "SIGNAL LAYER",
      signalH2: ["대화로 만든 기준에", "24시간의 신호를 더합니다"],
      signalBody: [
        "대화 기반 Loop는 태그가 없어도 작동합니다.",
        "태그와 홈 디바이스는 보호자가 직접 보지 못하는 시간을 채우는 신호원입니다. 평소에는 하루의 흐름을 요약하고, 이상 변화나 보호자의 발화가 있었던 구간은 더 자세히 확인합니다.",
      ],
      signalItems: [
        { t: "태그", d: "활동과 움직임 등 외부 생활 신호" },
        { t: "홈 스테이션", d: "집 안에서 태그 신호를 수집하고 연결" },
        { t: "홈 디바이스", d: "화장실 · 배변 · 급식 등 생활 공간의 변화" },
      ],
      signalQuote: [
        "우리는 트래커 회사가 아닙니다.",
        "신호를 개체별 의미와 연결하는 AI를 만듭니다.",
      ],

      guardH2: "AI는 진단하지 않습니다",
      guardBody: [
        "AnimAI는 의료진의 진단과 처방을 대신하지 않습니다.",
        "AI가 하는 일은 보호자의 대화와 생활 신호를 통해 평소와 달라진 변화를 확인하고, 필요한 경우 전문가에게 전달할 정보를 더 잘 정리할 수 있도록 돕는 것입니다.",
        "진단과 처방이 필요한 질문은 의료진과 연결되는 방향으로 안내합니다.",
      ],

      ipEyebrow: "IP",
      ipH2: ["Loop의 핵심 구조를", "특허로 보호하고 있습니다"],
      ipLead:
        "비타니마는 개체별 학습 Loop와 오프라인 서비스 연결에 필요한 핵심 기술을 2026년 7월 3건 출원했습니다.",
      ip: [
        {
          n: "01",
          t: "발화 기반 개체별 상태 추정",
          s: "보호자의 자연어를 개체별 라벨로 바꾸고, 관련 생활 신호에 연결하는 기술",
        },
        {
          n: "02",
          t: "상품 효능 역피드백",
          s: "상품 사용 이후의 생활 신호와 보호자의 반응을 회수해 다음 선택에 반영하는 기술",
        },
        {
          n: "03",
          t: "상태 기반 시설 매칭",
          s: "아이의 상태와 필요한 서비스에 따라 시설과 예약 자원을 연결하는 기술",
        },
      ],
      ipNote:
        "* 현재 심사 전 출원 단계이며, 청구 범위는 향후 심사 과정에서 변경될 수 있습니다.",

      ctaH2: ["한 마리를 이해하는 AI는", "기준부터 달라야 합니다"],
      ctaLead:
        "비타니마는 AI가 신호를 추측하게 하지 않습니다. 보호자가 알고 있는 경험을 기준으로 만들고, 생활 신호를 더해 우리 아이만의 Loop를 완성합니다.",
      ctaBtn: "AnimAI 알아보기",
    },
    news: {
      eyebrow: "NEWSROOM",
      h1: "뉴스룸",
      lead: "비타니마의 소식과 언론 보도, 영상을 모았습니다.",
      filterAll: "전체",
      cats: { press: "보도", video: "영상", notice: "공지" },
      empty: "아직 등록된 소식이 없습니다.",
      emptySub: "취재 문의는 cs@vitanima.kr 로 보내주세요.",
      readMore: "원문 보기",
      watch: "영상 보기",
      pressKitH2: "취재 문의",
      pressKitBody:
        "인터뷰, 자료 요청, 로고 및 이미지 사용은 아래 주소로 연락해 주세요.",
    },

    careers: {
      eyebrow: "CAREERS",
      h1: "함께 만들 사람을 찾습니다",
      lead:
        "비타니마는 AI를 만드는 회사가 아닙니다. 기술로 사람과 반려동물의 시간을 더 가치 있게 만드는 회사를 만들고 있습니다. 같은 방향을 보고 함께 성장할 동료를 기다립니다.",

      whyH2: "우리가 일하는 방식",
      why: [
        {
          t: "문제를 먼저 봅니다",
          d: "기술보다 먼저 사용자의 문제를 이해합니다.",
        },
        {
          t: "빠르게 만들고 확인합니다",
          d: "오래 고민하기보다 직접 만들고 사용자의 반응으로 배우는 것을 중요하게 생각합니다.",
        },
        {
          t: "함께 해결합니다",
          d: "직무보다 문제를 중심으로 협업합니다. 좋은 아이디어는 누구에게서든 시작될 수 있다고 믿습니다.",
        },
        {
          t: "끝까지 책임집니다",
          d: "만드는 것에서 끝나지 않습니다. 사용자가 계속 사용하는 서비스가 될 때까지 함께합니다.",
        },
      ],

      whoH2: "이런 분과 함께하고 싶습니다",
      who: [
        "문제를 스스로 발견하고 해결하는 사람",
        "새로운 것을 배우는 데 두려움이 없는 사람",
        "사용자 관점에서 생각하는 사람",
        "팀과 함께 성장하는 사람",
      ],

      lookH2: "채용 분야",
      roles: [
        { t: "AI Engineer", d: "개체별 AI 학습과 추천 기술을 함께 만듭니다." },
        { t: "Backend Engineer", d: "플랫폼과 데이터 기반 서비스를 개발합니다." },
        { t: "Frontend / App", d: "보호자가 매일 사용하는 서비스를 만듭니다." },
        { t: "Product Designer", d: "복잡한 기술을 누구나 쉽게 사용할 수 있는 경험으로 만듭니다." },
        { t: "Business Development", d: "더 많은 보호자와 사업자가 비타니마를 만날 수 있도록 연결합니다." },
      ],
      rolesNote: "상시 모집입니다. 위에 없는 역할도 제안해 주세요.",

      applyH2: "지원 방법",
      applyBody:
        "정해진 양식은 없습니다. 하시던 일과 만드신 것을 볼 수 있는 자료를 아래 주소로 보내주세요. 이력서보다 만든 것이 먼저입니다.",
      applyBtn: "지원 메일 보내기",
      applyNote: "영업일 기준 5일 안에 회신드립니다.",
    },
    contact: {
      eyebrow: "CONTACT",
      h1: "함께 이야기해 주세요",
      lead:
        "비타니마는 다양한 파트너와 함께 성장하고 있습니다. 서비스, 제휴, 투자, 채용 등 무엇이든 편하게 문의해 주세요.",
      types: [
        {
          t: "서비스 문의",
          en: "AnimAI",
          d: "서비스 이용 및 앱 관련 문의",
          email: "support@vitanima.kr",
        },
        {
          t: "사업 제휴",
          en: "Partnership",
          d: "병원, 미용실, 호텔, 유치원 등 사업 제휴 문의",
          email: "biz@vitanima.kr",
        },
        {
          t: "AnimAI Biz",
          en: "Facility",
          d: "AnimAI Biz 입점 및 운영 문의",
          email: "biz@vitanima.kr",
        },
        {
          t: "투자 문의",
          en: "Investment",
          d: "IR 및 투자 관련 문의",
          email: "ir@vitanima.kr",
        },
        {
          t: "채용 문의",
          en: "Careers",
          d: "채용 및 채용 과정 관련 문의",
          email: "recruit@vitanima.kr",
        },
      ],
      ctaH2: ["함께하면", "더 좋은 반려생활을", "만들 수 있습니다"],
      ctaLead:
        "작은 문의도 괜찮습니다. 비타니마는 언제나 새로운 이야기를 기다립니다.",
      mailBtn: "문의하기",
      infoH2: "회사 정보",
      emailLabel: "이메일",
      phoneLabel: "전화",
    },
    footer: {
      tagline: "AI가 우리 아이를 이해하게 만듭니다",
      product: "서비스",
      company: "회사",
      rights: "All rights reserved.",
    },
  },

  en: {
    meta: {
      title: "Vitanima — Making AI understand your animal",
      description:
        "The world’s AI learns the average. Vitanima’s AI learns your animal. We build AnimAI on technology that turns a caregiver’s words into per-animal data.",
    },
    nav: {
      about: "Company",
      ceo: "CEO",
      animai: "Service",
      technology: "Technology",
      news: "News",
      careers: "Careers",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
    },
    common: {
      company: "Vitanima Inc.",
      companyShort: "Vitanima",
      email: "cs@vitanima.kr",
      phone: "+82 10-2358-5248",
      phoneHref: "tel:+821023585248",
      productUrl: "https://www.animai.kr",
      dashboardUrl: "https://www.animai.kr/business",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "Live",
      more: "Read more",
    },

    home: {
      eyebrow: "PET LIFETIME AI",
      h1: ["As your animal changes,", "so does the fit"],
      lead: [
        "Vitanima builds a lifetime AI that keeps learning each individual animal through conversation and everyday signals.",
        "Ask the AI what you need to know, let the Loop learn your animal, and let the tag and home devices cover the hours you cannot watch.",
      ],
      ctaPrimary: "About AnimAI",
      ctaSecondary: "How it works",

      heroFlow: [
        { k: "01", en: "TALK", t: "Conversation", d: "The caregiver talks about what their animal has been through." },
        { k: "02", en: "LEARN", t: "Loop learning", d: "The AI keeps learning that animal's traits and changes." },
        { k: "03", en: "SIGNAL", t: "24-hour signal", d: "Tag and home devices fill in the hours nobody watched." },
      ],
      heroFlowCenter: "A lifetime AI that learns one animal",

      problemEyebrow: "THE PROBLEM",
      problemH2: ["Your animal changes.", "The fit did not."],
      problemLead: [
        "Even at the same breed and age, temperament, allergies, preferences and daily life all differ.",
        "And animals grow, age, and keep changing in health, weight and what they like. Yet existing personalisation stopped at the conditions entered on day one.",
      ],
      problemQuote:
        "An animal's years pass quickly. Finding what fits has to get faster too.",
      timeline: [
        { t: "Puppy", d: ["Growth-stage food", "High activity"] },
        { t: "Adult", d: ["New preferences", "Weight changes"] },
        { t: "Condition found", d: ["Products and care change"] },
        { t: "Senior", d: ["Less activity", "New care needs"] },
      ],
      timelineOld: "Existing recommendations: frozen at '5-year-old Maltese'",
      timelineNew: "AnimAI: the fit updates every time something changes",

      prodEyebrow: "NOW AVAILABLE",
      prodTag: "Live",
      prodH2: "AnimAI",
      prodTagline: ["A pet lifetime AI", "that starts with conversation"],
      prodBody: [
        "AnimAI begins by answering what the caregiver wants to know.",
        "From those conversations it understands the animal's traits and changes, and keeps learning from past experience and new answers.",
        "It doesn't end at one recommendation — as the animal changes, the next questions and information change too.",
      ],
      prodCards: [
        { t: "Answers what you ask", d: "Get the information you need right now, in conversation." },
        { t: "Learns one animal", d: "Experience and outcomes from those talks go into a per-animal profile." },
        { t: "Asks first", d: "Drawing on earlier talks and changes, the AI checks in before you have to." },
      ],
      prodLink: "More about AnimAI",
      iosBtn: "App Store",
      androidBtn: "Google Play",

      loopEyebrow: "THE LOOP",
      loopH2: ["One answer changes", "the next fit"],
      loopCenter: ["AI Loop", "Patent filed"],
      loopSteps: [
        { k: "01", t: "The caregiver speaks", d: "" },
        { k: "02", t: "Meaning extracted", d: "" },
        { k: "03", t: "Per-animal model updated", d: "" },
        { k: "04", t: "The AI checks in", d: "" },
        { k: "05", t: "The caregiver answers", d: "" },
        { k: "06", t: "Reflected in the next fit", d: "" },
      ],
      loopExampleQuote: "I switched food and she had diarrhoea.",
      loopExampleLabel: "What the AI understands",
      loopExample: [
        { k: "Animal", v: "Maeum" },
        { k: "Product", v: "New food" },
        { k: "Outcome", v: "Diarrhoea" },
        { k: "When", v: "After feeding" },
      ],
      loopExampleNextLabel: "What changes next",
      loopExampleNext:
        "The recommendation threshold for that product and similar profiles drops, and the earlier reaction is weighed in the next choice.",
      loopBody:
        "A caregiver's answer is not just a chat log. It becomes per-animal learning data that changes the next question and the next answer.",
      loopLink: "More about the Loop",

      signalEyebrow: "NEXT SIGNAL",
      signalH2: ["The hours you", "could not watch"],
      signalBody: [
        "Caregivers know their animals best, but nobody can watch all 24 hours.",
        "The AnimAI tag adds signals from the hours you missed, and reads changes alongside what you said.",
        "Extended to home devices, it covers not only activity but what happens in the living space.",
      ],
      signalTagAlt: "A dog and a cat wearing the AnimAI tag",
      signalQuote:
        "We are not building a tracker. We add signals so the Loop understands your animal better.",
      signalTimeline: [
        { d: "Aug 2026", t: "Internal pilot" },
        { d: "H2 2026", t: "Product launch planned" },
        { d: "NEXT", t: "Home device expansion" },
      ],
      signalLink: "More about the technology",

      platformEyebrow: "ONE PLATFORM",
      platformH2: ["One animal's information,", "carried between caregiver and service floor"],
      platformSides: [
        {
          en: "FOR PET PARENTS",
          t: "AnimAI",
          d: "Learn your animal through conversation, and use the information and services that fit.",
          items: ["AI conversation", "Per-animal learning", "Personalisation as things change", "Tag & home signals"],
          link: "About AnimAI",
        },
        {
          en: "FOR PET BUSINESS",
          t: "AnimAI Biz",
          d: "Manage bookings, customers, revenue and floor operations — connected to AnimAI caregivers.",
          items: ["Bookings & customers", "Revenue & statistics", "AI care notes", "App integration", "AI marketing"],
          link: "About AnimAI Biz",
        },
      ],

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "It is already working",
      proofs: [
        { n: "2,115+", l: "AnimAI users" },
        { n: "2,238", l: "AI conversations to date" },
        { n: "10", l: "Facilities on AnimAI Biz" },
        { n: "3", l: "Patents filed" },
      ],
      proofNote: "* As of 3 August 2026",

      trackH2: ["Started on the ground,", "proved in numbers"],
      trackMetrics: [
        { n: "150", l: "Client companies" },
        { n: "450", l: "Projects" },
        { n: "₩7.0B", l: "Founding team's cumulative revenue" },
      ],
      trackLead:
        "On the back of solving and running problems on logistics floors ourselves, we are now building an AI that learns an animal's whole life.",
      trackLink: "The path we took",

      ctaH2: ["Every time your animal changes,", "the fit should change with them"],
      ctaLead:
        "Vitanima is building a lifetime AI that keeps learning an animal's life through conversation and everyday signals.",
      ctaBtn: "Start with AnimAI",
      ctaBtn2: "Investment & partnership",

      newsH2: "News",
      newsLink: "See all",
      newsEmpty: "No news yet.",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["Making AI", "understand", "your animal"],
      lead: [
        "Vitanima builds a lifetime AI that learns each individual companion animal.",
        "By understanding a caregiver's conversation together with the animal's everyday signals, the fit changes whenever the animal does.",
      ],
      heroFlow: ["Caregiver's words", "Per-animal learning", "Everyday signals"],
      heroFlowCenter: "An AI that keeps getting to know one animal",

      missionLabel: "MISSION",
      mission: ["Build the technology that understands", "each animal best"],
      missionBody:
        "Even at the same breed and age, temperament, daily life, health and preferences all differ. Vitanima builds an AI that learns each animal's experience and changes — not average information.",
      visionLabel: "VISION",
      vision: ["Every animal with", "a lifetime AI of their own"],
      visionBody:
        "Not personalisation that ends with what you entered once, but an AI that changes with them for life, through conversation and everyday signals. That is the standard we want to set.",
      turnBody: ["When your animal changes,", "the fit should change too"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["Finding what fits", "took far too long"],
      whyBody: [
        "Even animals of the same breed and age differ in what they eat, how they live and how their bodies respond.",
        "So caregivers research, choose and try things themselves to find what fits.",
        "When it doesn't fit they switch again — and when the animal's condition changes, they start over.",
      ],
      whyQuote:
        "An animal's years pass quickly. Finding what fits has to get faster too.",
      whyLoop: ["Research", "Choose", "Use", "Doesn't fit", "Research again"],
      whyClose: "AnimAI began to shorten that loop",

      storyEyebrow: "OUR PATH",
      storyH2: "How we got here",
      storyLead: [
        "Vitanima was not a team that started out in the pet industry.",
        "On the floors of another industry, we first solved the problem of people spending time on work that repeats. Now we are doing the same for the time caregivers and their animals spend.",
      ],
      story: [
        {
          y: "2019",
          k: "DISCOVER",
          t: "We started on the ground",
          d: "Running our own warehouse and trucks, we met the same problem every day. The work was done, but the information arrived late, and people had to check and explain the same things again. Someone on the floor knew the answer, yet that experience never carried into the next step. That is when we saw it: the problem was not the people doing the work, but the way what they knew went unused.",
        },
        {
          y: "2022",
          k: "PROVE",
          t: "We changed how people worked",
          d: "Instead of adding people, we had the system handle what repeated on the floor. We pulled scattered tasks into one place and automated the checking and relaying people did by hand. Across 150 client companies and 450 projects, admin work and on-site waiting both fell.",
          metrics: [
            { n: "83%", l: "Less process administration" },
            { n: "71%", l: "Less on-site waiting" },
            { n: "83%", l: "Superhuman PMF" },
          ],
          note: "* From a customer pilot of the logistics service",
          learn:
            "What we changed was not one feature. It was the way people worked.",
        },
        {
          y: "2026",
          k: "EXPAND",
          t: "We met the same question living with animals",
          d: "Living with our own animals, we saw the same problem again. The person who knew them best was the caregiver, yet that experience was never carried into the next choice. Caregivers explained again, researched again, tried again. So this time we made the AI understand what caregivers say, and learn one animal at a time through conversation and everyday signals. That is how Vitanima and AnimAI began.",
        },
      ],
      storyClose: ["The industry changed.", "The way we solve it did not."],
      storyCloseBody:
        "Make technology understand what people already know, and cut the time spent on what repeats. That is what Vitanima has kept doing.",

      valuesH2: "What we hold to",
      values: [
        {
          n: "01",
          t: "We start on the ground",
          d: "We don't invent problems from assumptions. We start from what users actually struggle with.",
        },
        {
          n: "02",
          t: "We take on the complexity",
          d: "However complex the technology and operations, users should find it easy.",
        },
        {
          n: "03",
          t: "It has to get better with time",
          d: "Not a feature used once, but a service that fits better the more it is used.",
        },
        {
          n: "04",
          t: "Build first, let results speak",
          d: "Rather than explain a plan, we build it and check against how users respond.",
        },
      ],

      nameH2: "OUR NAME",
      nameLines: [
        { k: "VITA", v: "Life" },
        { k: "ANIMA", v: "Heart and spirit" },
        { k: "ANIMAI", v: "The pet lifetime AI that first realises that direction" },
      ],
      nameBody:
        "Vitanima is a name that holds our direction: to build technology that understands life better.",

      factsH2: "Corporate information",
      facts: [
        { k: "Legal name", v: "Vitanima Inc. (주식회사 비타니마)" },
        { k: "CEO", v: "Hunki Kim" },
        { k: "Field", v: "Companion animal AI · data platform" },
        { k: "Services", v: "AnimAI · AnimAI Biz" },
        { k: "Phone", v: "+82 10-2358-5248" },
        { k: "Email", v: "cs@vitanima.kr" },
        { k: "Business reg. no.", v: "284-88-02356" },
        { k: "E-commerce reg. no.", v: "2026-Incheon Yeonsu-1470" },
        { k: "Founded", v: "30 August 2022" },
        {
          k: "Address",
          v: "8F, 5, Technopark-ro 111beon-gil, Yeonsu-gu, Incheon, Korea",
        },
      ],

      historyH2: "History",
      history: [
        { y: "2026–", t: "Vitanima Inc.", d: "Building and running AnimAI · AnimAI Biz" },
        {
          y: "2022–2023",
          t: "EasyLogi Inc.",
          d: "Import/export logistics automation (now Vitanima)",
        },
        {
          y: "2019–2025",
          t: "GN Logitech Inc.",
          d: "Import/export 3PL · warehouse · trucking",
        },
        {
          y: "2019–2020",
          t: "GN Value Holdings Inc.",
          d: "Pet transport service",
        },
        { y: "2018–2025", t: "GN Nuri", d: "Trade · logistics (sole proprietorship)" },
      ],

      ctaH2: ["Meet the lifetime AI", "Vitanima is building"],
      ctaLead:
        "It starts with conversation, learns your animal, and understands even the hours you couldn't watch through the tag and home devices.",
      ctaBtn: "About AnimAI",
      ctaBtn2: "Read from the CEO",
    },
    ceo: {
      eyebrow: "CEO",
      kicker: "With a method proved first in another industry",
      h1: ["I look at the problem", "before the technology"],
      intro: [
        "Technology is a way to solve a problem.",
        "I go to the floor first and look at where people are spending their time. Then I build the thing that cuts the repetition.",
      ],
      name: "Hunki Kim",
      role: "CEO · Founder",
      greeting: [
        "I ran trade and logistics businesses for seven years. I operated our own warehouse and trucks, and built ₩7.0B in cumulative revenue across three companies. We grew by finding problems on the ground and solving them ourselves, without outside investment.",
        "What I learned was that you have to look at people before technology. Problems on the floor did not come only from missing features. The bigger problem was the way people had to check the same thing repeatedly, re-enter it into different systems, and explain it again to the next person.",
        "In 2022, to change that directly, I built a service that pulled import/export logistics work into one place and automated it. Across 150 client companies and 450 projects, admin work fell and on-site waiting got shorter — not because we packed in good features, but because we changed the most tedious part of the floor first.",
        "I started Vitanima for the same reason. Over thirty years I've lived with six dogs, and each new one meant learning from scratch again. Even at the same breed, temperament, allergies, preferences and physical responses differed. While I researched, tried and switched, my animal's time was passing quickly.",
        "I used plenty of existing personalisation services. Most of them offered similar information and products by breed, size and age. The recommendations stayed the same even as the animal changed, so caregivers ended up researching and choosing all over again. So I decided to build an AI that learns one animal at a time, not a service that recommends the average.",
        "AnimAI starts with conversation. The AI understands the experience a caregiver shares and learns which choices fitted and which did not. On top of that we are adding everyday signals from the tag and home devices, so it also understands changes in the hours nobody watched. I did not start this to build technology. I started it to cut the time and trial and error of finding what fits, and to make the time we share worth more.",
        "I still check product, engineering and operations myself, because a service is not finished the moment it launches — it has to keep changing with how users respond. An AI whose fit changes whenever the animal does: Vitanima will build that standard ourselves.",
      ],
      sign: "Hunki Kim, CEO, Vitanima Inc.",

      factsH2: "The founding experience in numbers",
      facts: [
        { n: "7 yrs", l: "Founding and running companies", note: "" },
        { n: "3", l: "Companies operated", note: "" },
        { n: "₩7.0B", l: "Cumulative revenue", note: "" },
        { n: "₩0", l: "Outside investment", note: "We grew on revenue we made ourselves" },
      ],

      careerH2: "Career",
      career: [
        { y: "2026–present", t: "Vitanima Inc.", d: "CEO · AnimAI · AnimAI Biz" },
        {
          y: "2022–2023",
          t: "EasyLogi Inc.",
          d: "CEO · logistics automation (now Vitanima)",
        },
        {
          y: "2019–2025",
          t: "GN Logitech Inc.",
          d: "CEO · 3PL · warehouse · trucking",
        },
        {
          y: "2019–2020",
          t: "GN Value Holdings Inc.",
          d: "CEO · pet transport service",
        },
        { y: "2018–2025", t: "GN Nuri", d: "Founder · trade · logistics" },
      ],
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "Live",
      h1: "AnimAI",
      tagline: ["A pet lifetime AI", "that starts with conversation"],
      lead: [
        "Ask the AI what you want to know, and it keeps learning your animal's traits and changes.",
        "The more you use it, the more the information and questions change — and the tag and home devices cover the hours you couldn't watch.",
      ],
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: [
        "AI conversation · per-animal Loop live",
        "Tag: Aug 2026 pilot · launch planned H2 2026",
      ],

      whyH2: "Why we built it",
      whyLead: ["An animal's years pass quickly", "Finding what fits has to get faster"],
      whyBody: [
        "Even at the same breed and age, temperament, constitution and daily life all differ. So caregivers research, try, and switch again when it doesn't fit.",
        "Existing personalisation didn't change as the animal did. AnimAI learns from a caregiver's experience and from what happens after each choice, to cut the next round of trial and error.",
      ],
      whyQuote: "Not one fit, but a fit that changes with your animal",

      featureH2: "What it does",
      features: [
        {
          t: "AI assistant",
          d: "Ask as you normally would, and it answers from your animal's information and your earlier conversations. Not a generic answer repeated — the more it knows, the more the answer changes.",
        },
        {
          t: "Per-animal learning",
          d: "From your conversations it understands temperament, daily life and what happened after each choice. What it newly learns shapes the next question and the next answer.",
        },
        {
          t: "Fitted information",
          d: "Not decided by breed and age alone. It draws on your animal's traits, current state and past experience to give information that fits better.",
        },
        {
          t: "Health care",
          d: "It reads what has changed from the usual and gives the information a caregiver needs to watch their animal's condition. Diagnosis and prescription belong to clinicians.",
        },
      ],
      subFeatures: [
        {
          t: "Find & book facilities",
          d: "Find groomers, daycares, hotels and clinics, and book from the app.",
        },
        {
          t: "Caregiver community",
          d: "See how other caregivers handled similar worries, and share your animal's story.",
        },
      ],

      flowEyebrow: "HOW IT FEELS",
      flowH2: ["The more you say,", "the more the next fit changes"],
      flowQuote: "I tried new food and she barely ate it.",
      flowUnderstand: ["New food", "Low preference response", "Outcome after feeding"],
      flowUnderstandLabel: "What AnimAI understands",
      flowNextLabel: "Next time",
      flowNext:
        "The earlier reaction is weighed, and the next information and criteria change with it.",
      flowBody:
        "It doesn't end at a recommendation. Tell it how something actually went, and that result feeds the next fit too.",

      signalEyebrow: "COMING NEXT",
      signalH2: ["The hours you", "could not watch"],
      signalBody: [
        "Caregivers know their animals best, but nobody can watch all 24 hours.",
        "The AnimAI tag adds activity and everyday signals to fill the hours words alone can't cover. Extended to home devices, it will also read changes in the living space.",
      ],
      signalTimeline: [
        { d: "Aug 2026", t: "Internal pilot" },
        { d: "H2 2026", t: "Tag launch planned" },
        { d: "NEXT", t: "Home device expansion" },
      ],
      signalTagAlt: "A dog and a cat wearing the AnimAI tag",
      signalCaption: "Product images are work-in-progress concepts and may differ from the final specification.",
      signalQuote:
        "The tag is not a step counter. It is a signal source so AnimAI understands your animal better.",

      bizH2: "AnimAI Biz",
      bizTagline: ["From booking to on-site payment,", "one connected dashboard"],
      bizBody: [
        "AnimAI Biz manages bookings, customers, revenue and operations for groomers, daycares, hotels and clinics.",
        "Bookings from the app appear on the dashboard immediately, and payments taken on site sync back to the caregiver's app automatically.",
      ],
      bizFeatures: [
        "Bookings & customers",
        "On-site payment sync",
        "Revenue & statistics",
        "AI care notes",
        "Passes & vouchers",
        "AI marketing",
        "AnimAI app integration",
      ],
      bizFlow: [
        "Find a facility in the app",
        "Book",
        "Auto-registered on the dashboard",
        "Visit & service",
        "Pay on site",
        "Synced back to the app",
      ],
      bizLink: "About AnimAI Biz",

      ctaH2: ["Every time your animal changes,", "the fit changes too"],
      ctaLead:
        "AnimAI is not an AI that gives one answer. It is a lifetime AI that learns alongside an animal's whole life.",
      ctaBtn: "Start with AnimAI",
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: "We reversed the direction",
      lead: [
        "Most pet AI gathers signals from sensors and photos first, then has a model guess what they mean.",
        "Vitanima changed that order. We understand what the caregiver says first to build a per-animal baseline, then read everyday signals against it.",
      ],
      heroBefore: ["Signal", "Model guesses", "Average interpretation"],
      heroAfter: ["Caregiver speaks", "Per-animal label", "Signals aligned"],

      realEyebrow: "THE REAL PROBLEM",
      realH2: ["Signals alone can't tell you", "why"],
      realCase: [
        { k: "What the sensor saw", v: "Activity down 20%", tone: "neutral" },
        {
          k: "How existing AI reads it",
          v: "A change that can occur in this breed and age group.",
          tone: "old",
        },
        {
          k: "What the caregiver knows",
          v: "She vomited yesterday, so she's resting today.",
          tone: "new",
        },
      ],
      realBody: [
        "A sensor tells you that something changed. It does not tell you why.",
        "No expert can observe every animal daily, and an AI guessing from average data alone can miss what is actually happening to that one animal.",
      ],
      realQuote: [
        "The problem was never the volume of signal,",
        "but who tells you what the signal means.",
      ],

      invH2: ["A caregiver's words become", "the baseline for one animal"],
      invBeforeLabel: "Conventional",
      invBefore: ["Gather signals", "The model guesses meaning", "Read against group averages"],
      invAfterLabel: "Vitanima",
      invAfter: [
        "The caregiver speaks",
        "The AI structures the meaning",
        "A label for that animal is made",
        "It connects to related signals",
      ],
      invBody:
        "Natural speech becomes behaviour, state, time and animal information — then connects to everyday signals, past and future, to form a baseline for that one animal.",

      loopEyebrow: "THE LOOP",
      loopH2: "It grows more accurate with use",
      loopBody: [
        "It doesn't end with one question and one answer.",
        "What is newly learned updates the per-animal model, and the AI checks what it needs before you have to. That answer becomes a new label, feeding the next question, information and service.",
      ],
      loopCenter: ["AI Loop", "Patent filed"],
      loopSteps: [
        { k: "S1", t: "Exchange", d: "The caregiver talks with the AI.", s: "Live" },
        { k: "S2", t: "Understand", d: "The AI identifies animal, time, state and behaviour.", s: "Live" },
        { k: "S3", t: "Align signals", d: "It connects to the related app logs and tag/home signal windows.", s: "Tag pilot" },
        { k: "S4", t: "Update the model", d: "The animal's accumulated history and traits are updated.", s: "Live" },
        { k: "S5", t: "Check in", d: "The AI asks first, based on prior history and changes.", s: "Live" },
        { k: "S6", t: "Recover feedback", d: "The caregiver's answer and the actual outcome are learned again.", s: "Partial" },
      ],

      caseH2: ["One conversation changes", "the past and the next step"],
      caseSteps: [
        { k: "D-7", t: "Activity and sleep signals begin to shift", lines: [] },
        {
          k: "TODAY",
          t: "The caregiver says",
          lines: ["\u201CShe keeps tossing and turning at night lately.\u201D"],
          extract: ["Behaviour: night restlessness", "When: recently", "Animal: Maeum"],
          extractLabel: "What the AI extracts",
        },
        {
          k: "D+1",
          t: "The AI checks in",
          lines: [
            "AI — \u201CWhat did the clinic say?\u201D",
            "Caregiver — \u201CLeg pain. I think it started about a week ago.\u201D",
          ],
        },
        {
          k: "Result",
          t: "Connected to earlier signals",
          lines: [
            "The AI connects the confirmed leg pain to the activity and sleep changes from a week earlier.",
            "If activity drops again later, it asks first whether the leg pain has continued.",
          ],
        },
      ],

      signalEyebrow: "SIGNAL LAYER",
      signalH2: ["24-hour signals on top of", "a baseline built from conversation"],
      signalBody: [
        "The conversation-based Loop works without a tag.",
        "Tag and home devices are signal sources that fill the hours a caregiver can't watch. Normally they summarise the shape of a day; around unusual changes or something the caregiver mentioned, they look closer.",
      ],
      signalItems: [
        { t: "Tag", d: "Activity, movement and other external signals" },
        { t: "Home station", d: "Collects and relays tag signals inside the home" },
        { t: "Home devices", d: "Changes in the living space — litter, toileting, feeding" },
      ],
      signalQuote: [
        "We are not a tracker company.",
        "We build AI that connects signals to per-animal meaning.",
      ],

      guardH2: "The AI does not diagnose",
      guardBody: [
        "AnimAI does not stand in for a clinician's diagnosis or prescription.",
        "What the AI does is confirm what has changed from the usual, through conversation and everyday signals, and help organise the information worth bringing to a professional.",
        "Questions that require diagnosis or prescription are guided toward a clinician.",
      ],

      ipEyebrow: "IP",
      ipH2: ["The core of the Loop", "is protected by patents"],
      ipLead:
        "In July 2026 Vitanima filed three applications covering the per-animal learning Loop and the connection to offline services.",
      ip: [
        {
          n: "01",
          t: "Per-animal state estimation from speech",
          s: "Turning a caregiver's natural language into per-animal labels and connecting them to related signals",
        },
        {
          n: "02",
          t: "Product efficacy feedback",
          s: "Recovering signals and caregiver responses after product use, and reflecting them in the next choice",
        },
        {
          n: "03",
          t: "State-based facility matching",
          s: "Connecting facilities and booking capacity to an animal's state and the service they need",
        },
      ],
      ipNote:
        "* Currently filed and not yet in examination; claim scope may change during examination.",

      ctaH2: ["An AI that understands one animal", "has to start from a different baseline"],
      ctaLead:
        "Vitanima does not have the AI guess at signals. We build the baseline from what the caregiver already knows, then add everyday signals to complete a Loop for that one animal.",
      ctaBtn: "About AnimAI",
    },
    news: {
      eyebrow: "NEWSROOM",
      h1: "Newsroom",
      lead: "Announcements, press coverage and video from Vitanima.",
      filterAll: "All",
      cats: { press: "Press", video: "Video", notice: "Notice" },
      empty: "No news yet.",
      emptySub: "For press enquiries, write to cs@vitanima.kr",
      readMore: "Read the original",
      watch: "Watch",
      pressKitH2: "Press enquiries",
      pressKitBody:
        "For interviews, materials, or use of our logo and images, please write to us.",
    },

    careers: {
      eyebrow: "CAREERS",
      h1: "We're looking for people to build with",
      lead:
        "Vitanima is not a company that makes AI. We are building a company that uses technology to make the time people and their animals share more valuable. We're waiting for colleagues who see the same direction and want to grow together.",

      whyH2: "How we work",
      why: [
        {
          t: "We look at the problem first",
          d: "We understand the user's problem before the technology.",
        },
        {
          t: "We build fast and check",
          d: "Rather than deliberate at length, we build it and learn from how users respond.",
        },
        {
          t: "We solve it together",
          d: "We collaborate around problems, not job titles. A good idea can start with anyone.",
        },
        {
          t: "We see it through",
          d: "It doesn't end at shipping. We stay with it until it becomes a service people keep using.",
        },
      ],

      whoH2: "Who we'd like to work with",
      who: [
        "People who find problems themselves and solve them",
        "People unafraid of learning something new",
        "People who think from the user's side",
        "People who grow with a team",
      ],

      lookH2: "Open roles",
      roles: [
        { t: "AI Engineer", d: "Build per-animal learning and recommendation technology with us." },
        { t: "Backend Engineer", d: "Develop the platform and data-driven services." },
        { t: "Frontend / App", d: "Build the service caregivers use every day." },
        { t: "Product Designer", d: "Turn complex technology into an experience anyone can use." },
        { t: "Business Development", d: "Connect more caregivers and businesses with Vitanima." },
      ],
      rolesNote: "Open on a rolling basis. Propose a role that isn't listed.",

      applyH2: "How to apply",
      applyBody:
        "There is no set format. Send us whatever shows what you've done and made. What you've built matters more than a CV.",
      applyBtn: "Email your application",
      applyNote: "We reply within five business days.",
    },
    contact: {
      eyebrow: "CONTACT",
      h1: "Let's talk",
      lead:
        "Vitanima grows with partners of many kinds. Service, partnership, investment, careers — write to us about anything.",
      types: [
        {
          t: "Service",
          en: "AnimAI",
          d: "Questions about using the service and the app",
          email: "support@vitanima.kr",
        },
        {
          t: "Partnership",
          en: "Partnership",
          d: "Clinics, groomers, hotels, daycares and other partnerships",
          email: "biz@vitanima.kr",
        },
        {
          t: "AnimAI Biz",
          en: "Facility",
          d: "Listing on and operating with AnimAI Biz",
          email: "biz@vitanima.kr",
        },
        {
          t: "Investment",
          en: "Investment",
          d: "IR and investment enquiries",
          email: "ir@vitanima.kr",
        },
        {
          t: "Careers",
          en: "Careers",
          d: "Hiring and the recruitment process",
          email: "recruit@vitanima.kr",
        },
      ],
      ctaH2: ["Together we can make", "life with animals", "better"],
      ctaLead:
        "No question is too small. Vitanima is always waiting for a new conversation.",
      mailBtn: "Get in touch",
      infoH2: "Company information",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
    footer: {
      tagline: "Making AI understand your animal",
      product: "Services",
      company: "Company",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Dict = (typeof dict)["ko"];
export const getDict = (lang: Lang): Dict => dict[lang] as unknown as Dict;
