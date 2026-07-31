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
      dashboardUrl: "https://gangji-manage.kr",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "운영 중",
      more: "자세히 보기",
    },

    home: {
      eyebrow: "AI FOR PET LIFE",
      h1: ["AI가", "우리 아이를", "이해하게 만듭니다"],
      lead:
        "대부분의 AI는 품종과 나이 같은 평균적인 정보에서 답을 찾습니다. 비타니마는 보호자의 말과 반려생활 데이터를 AI로 이해해 한 마리 한 마리를 알아가는 서비스를 만듭니다.",
      ctaPrimary: "AnimAI 알아보기",
      ctaSecondary: "비타니마의 기술",

      loopCenter: ["보호자의 말을", "AI가 이해합니다"],
      loopCaption: "보호자의 언어를 반려동물 개체 데이터로 전환하는 AI 기술",

      problemEyebrow: "WHY",
      problemH2: ["같은 품종이어도", "모두 다르게 살아갑니다"],
      problemLead:
        "현재의 반려동물 정보와 서비스는 대부분 품종과 나이, 크기를 기준으로 제공됩니다. 하지만 실제 반려생활을 결정하는 것은 그 아이가 지금까지 어떻게 살아왔는지입니다.",
      problems: [
        {
          t: "정보는 평균에서 시작합니다",
          d: "같은 품종과 나이의 반려동물에게 비슷한 정보와 상품이 제공됩니다. 하지만 먹는 것과 생활 습관, 성격과 건강 상태는 한 마리마다 모두 다릅니다.",
        },
        {
          t: "보호자는 그 차이를 알고 있습니다",
          d: "어제보다 밥을 덜 먹었는지, 어떤 상황에서 불안해하는지, 최근 무엇이 달라졌는지. 매일 함께 지내는 보호자는 그 아이의 작은 차이와 변화를 알고 있습니다.",
        },
        {
          t: "그러나 AI는 그 아이를 모릅니다",
          d: "보호자가 알고 있는 정보는 기존 AI가 활용할 수 있는 데이터로 쌓이지 않습니다. 결국 AI는 그 아이의 실제 생활보다 일반적인 정보와 통계를 바탕으로 답하게 됩니다.",
        },
      ],

      axEyebrow: "OUR APPROACH",
      axH2: ["세상의 AI는 평균을 학습합니다", "비타니마의 AI는 우리 아이를 학습합니다"],
      axBody:
        "비타니마는 보호자가 일상에서 하는 말을 AI가 이해할 수 있는 개체 데이터로 바꿉니다. 전문가가 한 마리씩 직접 관찰하거나 별도의 센서와 기기로 모든 정보를 수집하지 않아도, 보호자와 AI의 자연스러운 상호작용을 통해 각 반려동물의 성격과 생활, 변화를 지속적으로 학습합니다.",
      axNote: "더 적은 비용과 과정으로, 한 마리에게 더 가까운 AI를 만듭니다.",
      axCardsTitle: "AI가 한 마리를 배우는 방법",
      axPoints: [
        {
          t: "보호자의 말을 이해합니다",
          d: "보호자가 평소처럼 이야기하면 AI가 문장 속 대상과 상황, 의미를 파악합니다.",
        },
        {
          t: "개체 데이터로 바꿉니다",
          d: "대화 속 정보를 성격과 식습관, 건강 상태, 생활 패턴과 이용 이력에 맞게 구조화합니다.",
        },
        {
          t: "한 마리씩 학습합니다",
          d: "새로운 정보가 쌓일수록 일반적인 평균보다 그 아이의 맥락을 더 많이 반영합니다.",
        },
      ],

      fieldEyebrow: "SERVICE",
      fieldTag: "운영 중",
      fieldH2: "AnimAI",
      fieldTagline: "AI로 더 편리하고 더 우리 아이답게 만드는 반려생활 플랫폼",
      fieldCols: [
        {
          t: "우리 아이를 알아가는 AI 비서",
          d: "AnimAI의 AI 비서는 보호자의 말을 이해하고 반려동물에 관한 정보를 학습합니다. 성격과 생활 습관, 건강 상태와 이전 경험을 함께 고려해 사용할수록 우리 아이에게 더 맞는 정보와 기능을 제공합니다.",
        },
        {
          t: "반려생활에 필요한 서비스를 한곳에서",
          d: "건강과 일정 관리부터 주변 반려동물 시설 탐색과 예약까지. 보호자는 필요한 서비스를 한곳에서 이용하고, 시설은 AnimAI Biz를 통해 예약과 고객, 매장 운영을 관리합니다.",
        },
      ],
      fieldFeatures: [
        { t: "AI 비서", d: "우리 아이의 특성과 맥락을 이해하는 AI" },
        { t: "일정 관리", d: "예방접종과 투약, 주요 일정을 간편하게 관리" },
        { t: "시설 탐색·예약", d: "전국 반려동물 시설을 찾고 바로 예약" },
        { t: "AnimAI Biz", d: "예약과 고객, 운영을 연결하는 사업자 대시보드" },
      ],
      fieldLink: "AnimAI 자세히 보기",

      structureEyebrow: "HOW IT WORKS",
      structureH2: ["사용할수록", "우리 아이를 더 잘 이해합니다"],
      structureLead:
        "AnimAI는 보호자와의 상호작용에서 반려동물에 관한 의미 있는 정보를 파악합니다. 새롭게 알게 된 내용은 기존의 생활 정보와 함께 학습되고, 그 결과는 다음 기능과 정보 제공에 반영됩니다. 이 과정이 반복될수록 AI는 일반적인 반려동물이 아니라 우리 아이에 가까워집니다.",
      loopSteps: [
        { k: "01", t: "상호작용", d: "보호자가 AI 비서와 평소처럼 이야기합니다" },
        { k: "02", t: "이해", d: "AI가 말의 대상과 상황, 의미를 파악합니다" },
        { k: "03", t: "구조화", d: "대화 속 정보를 AI가 학습할 수 있는 개체 데이터로 바꿉니다" },
        { k: "04", t: "결합", d: "새로운 정보를 기존의 성격과 생활, 건강 데이터와 함께 봅니다" },
        { k: "05", t: "학습", d: "한 마리에게 반복되는 특성과 달라진 변화를 학습합니다" },
        { k: "06", t: "개인화", d: "알게 된 내용을 다음 정보와 기능, 서비스 경험에 반영합니다" },
      ],
      structureLink: "비타니마의 기술 자세히 보기",

      trackEyebrow: "OUR EXPERIENCE",
      trackH2: ["현장의 문제를", "해결해 왔습니다"],
      trackLead:
        "비타니마의 창업팀은 산업 현장에서 직접 문제를 발견하고 서비스를 만들어 왔습니다. 2022년에는 수출입 물류 현장의 비효율을 해결하기 위해 관리 업무와 대기 시간을 줄이는 서비스를 개발하고 운영했습니다. 150개 고객사, 450개 프로젝트를 수행하며 쌓은 서비스 개발과 현장 운영 경험을 바탕으로, 이제 반려동물과 보호자에게 필요한 기술을 직접 만들고 검증하고 있습니다.",
      trackMetrics: [
        { n: "83%", l: "반복 관리 업무 감소" },
        { n: "71%", l: "현장 대기 시간 감소" },
        { n: "83%", l: "슈퍼휴먼 PMF" },
      ],
      trackNote: "* 물류 서비스 고객 파일럿 결과",
      trackLink: "비타니마가 걸어온 길",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "비타니마의 현재",
      proofLead:
        "AI가 한 마리의 반려동물을 더 잘 이해할 수 있도록 기술과 서비스, 데이터를 함께 확장하고 있습니다.",
      proofs: [
        { n: "1,000+", l: "AnimAI 가입 보호자" },
        { n: "13,000+", l: "전국 반려시설 데이터" },
        { n: "3건", l: "출원 특허" },
        { n: "70억 원+", l: "창업팀 누적 사업 매출" },
      ],
      proofNote: "* 대표 창업 후 7년간, 3개 법인 합산 기준",

      newsH2: "소식",
      newsLink: "전체 보기",
      newsEmpty: "아직 등록된 소식이 없습니다.",

      ctaH2: ["비타니마와", "새로운 가능성을 논의하세요"],
      ctaLead:
        "투자, 사업 제휴, 채용 등 비타니마와 함께할 방법을 제안해 주세요.",
      ctaBtn: "문의하기",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["AI가", "우리 아이를", "이해하게 만듭니다"],
      lead:
        "비타니마는 AI로 반려동물을 이해하는 회사를 만듭니다. 우리는 보호자의 말과 반려생활에서 만들어지는 정보를 AI가 이해할 수 있는 데이터로 바꾸고, 한 마리 한 마리에게 맞는 AI를 만들어갑니다.",

      missionLabel: "MISSION",
      mission: ["AI가", "반려동물을", "더 잘 이해하도록"],
      missionBody:
        "기존의 AI는 평균적인 데이터를 학습합니다. 비타니마는 보호자의 언어와 반려생활을 함께 이해하는 AI를 만듭니다.",
      visionLabel: "VISION",
      vision: ["모든 아이가", "자기만의 AI를 갖는 것"],
      visionBody:
        "우리가 만들고 싶은 것은 기록 앱이 아닙니다. 우리 아이를 가장 잘 이해하는 AI입니다.",
      turnBody: [
        "우리는 방향을 바꿨습니다.",
        "AI가 평균을 배우는 것이 아니라, 우리 아이를 배우게 합니다.",
        "그 시작은 보호자의 말입니다.",
      ],

      storyEyebrow: "OUR PATH",
      storyH2: ["다른 산업에서", "같은 문제를", "먼저 해결했습니다"],
      storyLead:
        "비타니마는 처음부터 반려동물 산업에 있었던 팀이 아닙니다. 우리는 다른 산업에서 같은 질문을 먼저 마주했고, 그 답을 찾는 방법을 배웠습니다. 지금은 그 방법을 반려동물을 위해 다시 쓰고 있습니다.",
      story: [
        {
          y: "2019",
          k: "01",
          t: "현장에서 시작했습니다",
          d: "창고와 차량을 직접 운영하며 매일 같은 장면을 봤습니다. 일은 끝났는데 사람은 기다리고 있었고, 현장에는 분명 답을 아는 사람이 있는데 그 이야기는 다음 사람에게 제대로 전달되지 않았습니다. 기술이 부족했던 것이 아니라, 사람이 알고 있는 것이 제대로 이어지지 않는 문제였습니다.",
        },
        {
          y: "2022",
          k: "02",
          t: "방법을 바꿨습니다",
          d: "우리는 사람을 더 투입하지 않았습니다. 현장에서 생기는 내용을 누구나 바로 공유하고 사용할 수 있도록 만들었습니다. 복잡한 과정은 시스템이 맡고, 사람은 자신의 일에만 집중할 수 있도록 바꿨습니다. 그 결과 150개 고객사, 450개 프로젝트에서 관리 업무는 줄었고 현장은 더 빠르게 움직이기 시작했습니다.",
          metrics: [
            { n: "83%", l: "프로세스 관리 감소" },
            { n: "71%", l: "대기시간 감소" },
            { n: "83%", l: "슈퍼휴먼 PMF" },
          ],
          note: "* 물류 서비스 고객 파일럿 결과",
          learn:
            "우리가 바꾼 것은 기능이 아니라, 사람들이 일하는 방식이었습니다.",
        },
        {
          y: "2026",
          k: "03",
          t: "같은 질문을 다시 만났습니다",
          d: "반려동물을 키우면서도 비슷한 장면을 보게 됐습니다. 우리 아이를 가장 잘 아는 사람은 언제나 보호자였습니다. 하지만 보호자가 알고 있는 이야기는 AI도, 서비스도, 다음에 만나는 전문가도 충분히 이어받지 못하고 있었습니다. 그래서 우리는 물류에서 했던 것처럼, 사람이 알고 있는 것을 AI가 이해할 수 있도록 만드는 방법을 반려동물에도 적용하기 시작했습니다. 그렇게 비타니마가 시작됐습니다.",
        },
      ],
      storyClose: "산업은 달라졌지만, 우리가 푸는 문제는 같았습니다.",

      valuesH2: "우리가 지키는 것",
      values: [
        {
          n: "01",
          t: "현장에서 시작합니다",
          d: "책상이 아니라 사용자가 있는 곳에서 문제를 찾습니다.",
        },
        {
          n: "02",
          t: "복잡함은 우리가 맡습니다",
          d: "사용자는 쉽게 사용할 수 있어야 합니다. 복잡한 기술은 우리 안에 남깁니다.",
        },
        {
          n: "03",
          t: "시간이 지날수록 더 좋아져야 합니다",
          d: "한 번 쓰고 끝나는 것이 아니라, 매일 더 좋아져야 합니다.",
        },
        {
          n: "04",
          t: "먼저 만들고, 데이터로 증명합니다",
          d: "의견보다 사용자의 경험을 믿습니다.",
        },
      ],

      nameH2: "회사 이름",
      nameLines: [
        { k: "Vita", v: "생명을 뜻합니다." },
        { k: "Anima", v: "영혼을 뜻합니다." },
      ],
      nameBody:
        "비타니마는 생명을 이해하는 AI를 만들겠다는 우리의 약속입니다. AnimAI는 그 약속을 가장 먼저 구현한 첫 번째 서비스입니다.",

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
        { y: "2018–2025", t: "GN누리", d: "무역중개 · 중앙아시아" },
        {
          y: "2019–2025",
          t: "GN로지텍 주식회사",
          d: "수출입 3PL · 창고와 운송사 직접 운영",
        },
        {
          y: "2019–2020",
          t: "GN밸류홀딩스 주식회사",
          d: "반려동물 이동 서비스 '모시개냥'",
        },
        {
          y: "2022–2023",
          t: "주식회사 이지로지",
          d: "수출입 내륙운송 관리 도구",
        },
        {
          y: "2026–",
          t: "주식회사 비타니마",
          d: "반려동물 AI 전환 · AnimAI 출시 및 운영 (이지로지 사명 변경)",
        },
      ],
    },

    ceo: {
      eyebrow: "CEO",
      h1: "대표 인사말",
      lead: ["저는 기술보다", "문제를 먼저 봅니다."],
      intro: [
        "저는 개발자로 시작한 사람이 아닙니다. 창고를 운영하고, 차량을 직접 관리하며, 현장에서 사람들이 어디에서 가장 많은 시간을 쓰는지 먼저 배웠습니다.",
        "그 경험은 지금도 변하지 않았습니다. 기술은 목적이 아니라, 문제를 해결하는 방법이라고 믿습니다.",
      ],
      name: "김훈기",
      role: "대표이사 · Founder",
      greeting: [
        "7년 동안 무역과 물류 사업을 운영했습니다. 창고와 차량을 직접 운영했고, 세 개의 회사를 만들며 누적 70억 원 이상의 매출을 만들었습니다.",
        "그 과정에서 기술보다 먼저 배운 것이 있습니다. 산업의 많은 문제는 사람이 아니라, 복잡한 과정에서 시작된다는 것이었습니다.",
        "그래서 2022년에는 현장의 업무를 자동화하는 시스템을 만들었습니다. 흩어져 있던 업무를 하나로 모으고, 사람이 반복하던 일을 줄였습니다. 150개 고객사, 450개 프로젝트에서 관리 업무는 줄었고, 현장은 더 빨라졌습니다.",
        "그 경험은 반려동물을 키우면서 다시 떠올랐습니다. 우리 아이를 가장 잘 아는 사람은 언제나 보호자였습니다. 그런데 그 이야기는 어디에도 제대로 이어지지 않았습니다. 매번 처음부터 다시 설명하고, 다시 찾고, 다시 선택해야 했습니다. 그 시간이 아깝다고 생각했습니다.",
        "그래서 비타니마를 시작했습니다. AI를 만들기 위해서가 아니라, 보호자의 이야기를 AI가 이해하게 만들기 위해서입니다. 그렇게 해야 우리 아이에게 더 맞는 선택을 할 수 있고, 함께하는 시간을 더 소중하게 만들 수 있다고 믿었습니다.",
        "지금도 저는 기획과 개발, 운영을 직접 합니다. 좋은 기술보다, 사람들이 계속 사용하는 서비스를 만드는 것이 더 중요하다고 믿기 때문입니다. 비타니마는 그 생각을 계속 실현해 나가겠습니다.",
      ],
      sign: "㈜비타니마 대표이사 김훈기",

      careerH2: "약력",
      career: [
        { y: "2026–", t: "주식회사 비타니마", d: "대표이사 · AnimAI" },
        { y: "2022–2023", t: "주식회사 이지로지", d: "대표이사 · 수출입 내륙운송 관리 도구" },
        { y: "2019–2025", t: "GN로지텍 주식회사", d: "대표이사 · 수출입 3PL" },
        { y: "2019–2020", t: "GN밸류홀딩스 주식회사", d: "대표이사 · 반려동물 이동 서비스" },
        { y: "2018–2025", t: "GN누리", d: "대표 · 무역중개" },
      ],

      factsH2: "요약",
      facts: [
        { n: "7년", l: "연속 창업" },
        { n: "4개", l: "설립 법인" },
        { n: "70억", l: "3개 법인 누적 매출" },
        { n: "0원", l: "외부 투자 유치" },
      ],
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "운영 중",
      h1: "AnimAI",
      tagline: "우리 아이를 알아가는 AI",
      lead:
        "보호자의 말을 통해 우리 아이의 특성과 생활을 이해합니다. 사용할수록 더 잘 맞는 정보와 선택을 제안하는 반려생활 AI 플랫폼입니다.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",

      whyH2: "왜 만들었나",
      whyTime:
        "아이의 시간은 우리보다 훨씬 빠르게 흐릅니다. 시행착오로 보내는 시간이 아까웠습니다.",
      whyBefore: "우리 아이가 어떤지 알려면 매번 처음부터 설명해야 했습니다.",
      whyBody:
        "같은 품종과 나이라도 아이마다 성향과 체질, 생활은 모두 다릅니다. 그래서 보호자는 우리 아이에게 맞는 것을 찾기 위해 알아보고, 시도하고, 맞지 않으면 다시 바꿔야 합니다. AnimAI는 보호자의 말을 이해하고, 선택 이후의 결과까지 학습합니다. 사용할수록 시행착오는 줄고, 우리 아이에게 맞는 답은 더 가까워집니다.",

      featureH2: "무엇을 하나",
      features: [
        {
          t: "전담 AI 비서",
          d: "일반적인 답을 반복하지 않습니다. 우리 아이의 특성과 이전 대화를 바탕으로 현재 상황에 더 가까운 정보와 선택지를 제공합니다.",
        },
        {
          t: "헬스케어",
          d: "생활 속에서 나타나는 변화와 보호자가 알려준 내용을 바탕으로 우리 아이의 상태를 이해하는 데 필요한 헬스케어 정보를 제공합니다. 의료진의 진단을 대신하는 것이 아니라, 보호자가 아이를 더 세심하게 살피고 필요한 정보를 놓치지 않도록 돕습니다.",
        },
        {
          t: "맞춤 추천",
          d: "품종이나 나이만으로 추천하지 않습니다. 우리 아이의 체질과 성향, 생활환경, 보호자가 알려준 경험을 함께 살펴 상품과 서비스를 제안합니다.",
        },
        {
          t: "동네 시설과 예약",
          d: "우리 아이의 성향과 필요한 서비스를 고려해 주변 미용실, 유치원, 호텔, 병원 등을 살펴보고 예약으로 이어질 수 있습니다.",
        },
      ],

      bizH2: "AnimAI Biz",
      bizTagline: "반려동물 사업자를 위한 AI 운영 플랫폼",
      bizBody:
        "미용실 · 유치원 · 호텔 · 병원의 예약과 고객관리를 한곳에서 운영합니다. 반복 업무는 AI가 줄이고, AnimAI를 사용하는 보호자와 시설을 자연스럽게 연결합니다.",
      bizLink: "AnimAI Biz 알아보기",

      roadEyebrow: "앞으로",
      roadH2: ["알수록 더 잘 맞는", "반려생활을 만듭니다"],
      roadNote:
        "AnimAI가 지향하는 것은 기능을 많이 모은 앱이 아닙니다. 보호자의 이야기와 실제 선택의 결과를 바탕으로, 우리 아이를 알아갈수록 상품과 서비스, 헬스케어, 돌봄이 더 잘 맞아지는 반려생활 플랫폼입니다.",
      road: [
        {
          n: "01",
          role: "신호",
          t: "웨어러블 태그",
          d: "보호자의 이야기만으로 알기 어려운 생활 신호를 더합니다. 앱과 스마트폰 센서에 이어 웨어러블 태그에서 얻은 정보까지 함께 이해하며 우리 아이의 일상을 더 세밀하게 알아갑니다.",
        },
        {
          n: "02",
          role: "공급",
          t: "사업자 대시보드",
          d: "보호자가 알려준 개체별 특성이 실제 서비스 현장에서도 이어지도록 합니다. 사업자는 아이를 더 잘 이해하고, 보호자는 같은 설명을 반복하는 시간을 줄일 수 있습니다.",
        },
        {
          n: "03",
          role: "확장",
          t: "맞춤 커머스",
          d: "단순히 상품을 추천하는 데서 끝나지 않습니다. 우리 아이의 특성과 이전 구매, 사용 이후의 반응을 함께 학습해 다음 선택의 시행착오를 줄입니다.",
        },
        {
          n: "04",
          role: "확장",
          t: "보험 중개",
          d: "개체별 생활과 헬스케어 정보가 쌓일수록 필요한 보장을 더 쉽게 비교하고 선택할 수 있는 환경을 만들어갑니다.",
        },
        {
          n: "05",
          role: "확장",
          t: "노령 집중 케어",
          d: "나이가 들수록 작은 변화도 중요해집니다. 평소의 생활과 달라진 점을 더 세심하게 이해하고, 보호자와 전문가가 필요한 정보를 나눌 수 있도록 돕습니다.",
        },
      ],
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: "방향을 뒤집었습니다",
      lead:
        "센서는 신호를 줍니다. 그런데 그 신호가 무슨 뜻인지는 알려주지 않습니다. 반려동물 AI가 지금까지 풀지 못한 것은 데이터가 아니라 의미였습니다.",

      invH2: "보통은 이렇게 합니다",
      invBefore: ["신호를 모은다", "모델이 분류한다", "무슨 뜻인지는 모른다"],
      invAfter: [
        "보호자가 말한다",
        "그 말이 의미가 된다",
        "같은 시간의 신호에 붙는다",
      ],
      invBeforeLabel: "기존 방향",
      invAfterLabel: "비타니마의 방향",
      invBody:
        "보호자의 말은 매일 무료로 생깁니다. 별도 조사도, 전문가 주석도 필요 없습니다. 그래서 한 마리를 개별로 아는 비용이 사실상 사라집니다.",

      loopH2: "쓸수록 정확해지는 구조",
      loopBody:
        "한 바퀴가 끝나면 다음 바퀴의 질문이 더 정확해집니다. 그 질문에 대한 답이 다시 데이터가 되기 때문에, 시간이 지날수록 그 대상에 대해서만 정확해집니다. 복제하기 어려운 것은 모델이 아니라 이 시간입니다.",

      guardH2: "AI는 진단하지 않습니다",
      guardBody:
        "우리 AI가 하는 일은 묻는 것과 기록하는 것입니다. 평소와 다른 구간이 보이면 보호자에게 확인하고, 그 답을 남깁니다. 판단은 병원에서 합니다. 진단이나 처방으로 답해야 할 질문은 가까운 동물병원 연결로 넘깁니다.",

      ipH2: "특허",
      ipNote:
        "세 건 모두 청구범위 제출 유예 출원이며, 심사 진행 전입니다. 출원은 반려동물 현장을 기준으로 냈지만 구조 자체는 특정 산업에 매여 있지 않습니다. 아래는 대외 공개 가능한 범위의 요약입니다.",
      ip: [
        {
          d: "2026.07.16",
          t: "발화 기반 개체별 상태 추정",
          s: "말을 데이터의 의미로 바꾸고, 그 대상만의 기준을 세우는 구조",
        },
        {
          d: "2026.07.19",
          t: "상품 효능 역피드백",
          s: "선택 이후의 변화를 되받아 실제로 맞았는지 확인하는 구조",
        },
        {
          d: "2026.07.19",
          t: "상태 기반 시설 매칭",
          s: "지금의 상태를 기준으로 오프라인 자원을 연결하는 구조",
        },
      ],
      ipStatus: "출원",
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
      dashboardUrl: "https://gangji-manage.kr",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "Live",
      more: "Read more",
    },

    home: {
      eyebrow: "AI FOR PET LIFE",
      h1: ["Making AI", "understand", "your animal"],
      lead:
        "Most AI answers from averages — breed, age, size. Vitanima builds services that understand what a caregiver says, along with the data of daily life, to learn one animal at a time.",
      ctaPrimary: "About AnimAI",
      ctaSecondary: "Our technology",

      loopCenter: ["AI understands", "what you say"],
      loopCaption:
        "Technology that turns a caregiver's language into per-animal data",

      problemEyebrow: "WHY",
      problemH2: ["Same breed,", "entirely different lives"],
      problemLead:
        "Information and services for companion animals are mostly organised by breed, age and size. But what actually shapes daily life is how that particular animal has lived so far.",
      problems: [
        {
          t: "Information starts from the average",
          d: "Animals of the same breed and age receive much the same advice and products. Yet diet, habits, temperament and health differ with every single one.",
        },
        {
          t: "The caregiver knows the difference",
          d: "Whether they ate less than yesterday, what makes them anxious, what has changed recently. The person living with them every day knows those small differences.",
        },
        {
          t: "But AI does not know that animal",
          d: "What the caregiver knows never accumulates as data an AI can use. So the AI answers from general information and statistics rather than that animal's actual life.",
        },
      ],

      axEyebrow: "OUR APPROACH",
      axH2: [
        "The world's AI learns the average.",
        "Vitanima's AI learns your animal.",
      ],
      axBody:
        "Vitanima turns what caregivers say in ordinary conversation into per-animal data an AI can work with. Without an expert observing each animal, and without collecting everything through dedicated sensors, the natural exchange between caregiver and AI keeps teaching it each animal's temperament, routine and changes.",
      axNote:
        "Less cost, fewer steps — and an AI that sits closer to one animal.",
      axCardsTitle: "How the AI learns one animal",
      axPoints: [
        {
          t: "It understands what you say",
          d: "Speak as you normally would, and the AI reads the subject, the situation and the meaning in the sentence.",
        },
        {
          t: "It turns that into data",
          d: "Information from the conversation is structured into temperament, diet, health, routine and service history.",
        },
        {
          t: "It learns one at a time",
          d: "The more that accumulates, the more it reflects that animal's context rather than a general average.",
        },
      ],

      fieldEyebrow: "SERVICE",
      fieldTag: "Live",
      fieldH2: "AnimAI",
      fieldTagline:
        "A companion-animal platform that uses AI to make daily life easier — and more like your animal",
      fieldCols: [
        {
          t: "An AI assistant that gets to know your animal",
          d: "The AnimAI assistant understands what a caregiver says and learns about the animal. Weighing temperament, routine, health and past experience together, it offers information and features that fit your animal better the more you use it.",
        },
        {
          t: "Everything you need, in one place",
          d: "From health and scheduling to finding and booking nearby facilities. Caregivers use what they need in one place, while facilities manage bookings, customers and operations through AnimAI Biz.",
        },
      ],
      fieldFeatures: [
        { t: "AI assistant", d: "An AI that understands your animal's traits and context" },
        { t: "Scheduling", d: "Vaccinations, medication and key dates, simply managed" },
        { t: "Find & book", d: "Search facilities nationwide and book straight away" },
        { t: "AnimAI Biz", d: "A dashboard connecting bookings, customers and operations" },
      ],
      fieldLink: "More about AnimAI",

      structureEyebrow: "HOW IT WORKS",
      structureH2: ["The more it's used,", "the better it understands"],
      structureLead:
        "AnimAI picks up meaningful information about the animal from its exchanges with the caregiver. What it newly learns is studied alongside existing records, and the result feeds the next feature and the next answer. Repeat that, and the AI moves from companion animals in general toward your animal in particular.",
      loopSteps: [
        { k: "01", t: "Exchange", d: "The caregiver talks with the assistant as they normally would" },
        { k: "02", t: "Understand", d: "The AI reads the subject, situation and meaning" },
        { k: "03", t: "Structure", d: "That information becomes per-animal data the AI can learn from" },
        { k: "04", t: "Combine", d: "New information is seen alongside existing temperament, routine and health data" },
        { k: "05", t: "Learn", d: "Recurring traits and genuine changes are learned for that animal" },
        { k: "06", t: "Personalise", d: "What was learned shapes the next answer, feature and experience" },
      ],
      structureLink: "More about our technology",

      trackEyebrow: "OUR EXPERIENCE",
      trackH2: ["We have solved problems", "on the ground before"],
      trackLead:
        "Vitanima's founding team has found problems on industrial floors and built services for them. In 2022 we developed and ran a service that cut admin work and waiting time in import/export logistics. On the back of that experience — 150 client companies and 450 projects — we are now building and validating technology for companion animals and their caregivers.",
      trackMetrics: [
        { n: "83%", l: "Less repetitive admin work" },
        { n: "71%", l: "Less waiting on site" },
        { n: "83%", l: "Superhuman PMF" },
      ],
      trackNote: "* From a customer pilot of the logistics service",
      trackLink: "The path we took",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "Where we are",
      proofLead:
        "We are expanding technology, services and data together, so that AI can understand one animal better.",
      proofs: [
        { n: "1,000+", l: "AnimAI registered caregivers" },
        { n: "13,000+", l: "Pet facilities in our directory" },
        { n: "3", l: "Patents filed" },
        { n: "₩7.0B+", l: "Founding team's cumulative revenue" },
      ],
      proofNote: "* Across 3 companies over 7 years since the founder's first company",

      newsH2: "News",
      newsLink: "See all",
      newsEmpty: "No news yet.",

      ctaH2: ["Let's talk about", "what we could build together"],
      ctaLead:
        "Investment, partnership, joining the team — tell us how you'd like to work with Vitanima.",
      ctaBtn: "Get in touch",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["Making AI", "understand", "your animal"],
      lead:
        "Vitanima is building a company that understands companion animals through AI. We turn what caregivers say, and the information daily life produces, into data an AI can work with — and build an AI that fits one animal at a time.",

      missionLabel: "MISSION",
      mission: ["So that AI", "understands animals", "better"],
      missionBody:
        "Existing AI learns from average data. Vitanima builds an AI that understands a caregiver's language and their daily life together.",
      visionLabel: "VISION",
      vision: ["Every animal", "with an AI of their own"],
      visionBody:
        "What we want to build is not a journaling app. It is the AI that understands your animal best.",
      turnBody: [
        "We changed the direction.",
        "Rather than have AI learn the average, we have it learn your animal.",
        "And that begins with what the caregiver says.",
      ],

      storyEyebrow: "OUR PATH",
      storyH2: ["We solved the same problem", "in another industry", "first"],
      storyLead:
        "Vitanima was not a team that started out in the pet industry. We met the same question first in another industry and learned how to answer it. Now we are applying that method to companion animals.",
      story: [
        {
          y: "2019",
          k: "01",
          t: "We started on the ground",
          d: "Running our own warehouse and trucks, we saw the same scene every day. The work was done, yet people were waiting. Someone on the floor clearly knew the answer, and that account never reached the next person properly. It was not a shortage of technology. It was that what people knew did not carry forward.",
        },
        {
          y: "2022",
          k: "02",
          t: "We changed the method",
          d: "We did not add more people. We made what happens on the ground shareable and usable by anyone, immediately. The system took the complicated steps so people could concentrate on their own work. Across 150 client companies and 450 projects, admin work fell and the floor started moving faster.",
          metrics: [
            { n: "83%", l: "Less process administration" },
            { n: "71%", l: "Less waiting time" },
            { n: "83%", l: "Superhuman PMF" },
          ],
          note: "* From a customer pilot of the logistics service",
          learn:
            "What we changed was not a feature set. It was the way people worked.",
        },
        {
          y: "2026",
          k: "03",
          t: "We met the same question again",
          d: "Living with our own animals, we saw a similar scene. The person who knows an animal best has always been the caregiver. Yet what the caregiver knows was not being carried forward — not by the AI, not by the services, not by the next professional they met. So, as we had in logistics, we began applying the same method to companion animals: making what a person knows something an AI can understand. That is how Vitanima began.",
        },
      ],
      storyClose:
        "The industry changed. The problem we are solving did not.",

      valuesH2: "What we hold to",
      values: [
        {
          n: "01",
          t: "We start on the ground",
          d: "We look for problems where the users are, not at a desk.",
        },
        {
          n: "02",
          t: "We take on the complexity",
          d: "Users should find it easy. The complicated technology stays on our side.",
        },
        {
          n: "03",
          t: "It has to get better with time",
          d: "Not something used once, but something better every day.",
        },
        {
          n: "04",
          t: "Build first, prove with data",
          d: "We trust what users experience over what anyone thinks.",
        },
      ],

      nameH2: "The name",
      nameLines: [
        { k: "Vita", v: "means life." },
        { k: "Anima", v: "means soul." },
      ],
      nameBody:
        "Vitanima is our promise to build an AI that understands life. AnimAI is the first service to carry out that promise.",

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
        { k: "Address", v: "8F, 5, Technopark-ro 111beon-gil, Yeonsu-gu, Incheon, Korea" },
      ],


      historyH2: "History",
      history: [
        { y: "2018–2025", t: "GN Nuri", d: "Trade brokerage · Central Asia" },
        {
          y: "2019–2025",
          t: "GN Logitech Inc.",
          d: "Import/export 3PL · own warehouse and trucking",
        },
        {
          y: "2019–2020",
          t: "GN Value Holdings Inc.",
          d: "Pet transport service",
        },
        {
          y: "2022–2023",
          t: "EasyLogi Inc.",
          d: "Inland freight management tool",
        },
        {
          y: "2026–",
          t: "Vitanima Inc.",
          d: "Pivot to companion animal AI · AnimAI launched and live (renamed from EasyLogi)",
        },
      ],
    },

    ceo: {
      eyebrow: "CEO",
      h1: "A word from the CEO",
      lead: ["I look at the problem", "before the technology."],
      intro: [
        "I did not start out as a developer. I ran a warehouse, managed trucks myself, and learned first-hand where people on the ground spend most of their time.",
        "That has not changed. Technology is not the goal — it is a way to solve a problem.",
      ],
      name: "Hunki Kim",
      role: "CEO · Founder",
      greeting: [
        "I ran trade and logistics businesses for seven years. I operated our own warehouse and trucks, founded three companies, and built over ₩7.0B in cumulative revenue.",
        "Along the way I learned something that came before technology: most problems in an industry begin not with people, but with complicated processes.",
        "So in 2022 I built a system that automated work on the ground. It pulled scattered tasks into one place and cut the work people were repeating. Across 150 client companies and 450 projects, admin work fell and the floor moved faster.",
        "That experience came back to me while living with my own animals. The person who knows an animal best has always been the caregiver — and yet that account was never carried forward anywhere. Every time, you explain from the beginning, search again, choose again. I thought that time was being wasted.",
        "So I started Vitanima. Not to build AI, but to make AI understand what a caregiver says. Only then can we make choices that fit our animals better, and make the time we have together count for more.",
        "I still handle product, engineering and operations myself, because I believe building a service people keep using matters more than building good technology. Vitanima will keep working to make that real.",
      ],
      sign: "Hunki Kim, CEO, Vitanima Inc.",

      careerH2: "Career",
      career: [
        { y: "2026–", t: "Vitanima Inc.", d: "CEO · AnimAI" },
        { y: "2022–2023", t: "EasyLogi Inc.", d: "CEO · inland freight management tool" },
        { y: "2019–2025", t: "GN Logitech Inc.", d: "CEO · import/export 3PL" },
        { y: "2019–2020", t: "GN Value Holdings Inc.", d: "CEO · pet transport service" },
        { y: "2018–2025", t: "GN Nuri", d: "Founder · trade brokerage" },
      ],

      factsH2: "In short",
      facts: [
        { n: "7 yrs", l: "Building companies" },
        { n: "4", l: "Companies founded" },
        { n: "₩7.0B", l: "Revenue across 3 of them" },
        { n: "₩0", l: "Outside investment raised" },
      ],
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "Live",
      h1: "AnimAI",
      tagline: "An AI that gets to know your animal",
      lead:
        "It understands your animal's traits and daily life through what you say. The more you use it, the better the information and options it suggests fit — a companion-animal AI platform.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",

      whyH2: "Why we built it",
      whyTime:
        "An animal's years pass far faster than ours. Time lost to trial and error is time that matters.",
      whyBefore:
        "To explain how your animal is doing, you had to start from the beginning every time.",
      whyBody:
        "Even at the same breed and age, temperament, constitution and daily life differ with every animal. So caregivers research, try, and switch again when it doesn't fit. AnimAI understands what you say and learns from what happens after each choice. The more it is used, the less trial and error — and the closer the answer that fits your animal.",

      featureH2: "What it does",
      features: [
        {
          t: "A dedicated AI assistant",
          d: "It doesn't repeat generic answers. Drawing on your animal's traits and your earlier conversations, it offers information and options closer to the situation in front of you.",
        },
        {
          t: "Health care",
          d: "From changes that show up in daily life and what the caregiver reports, it provides the health information needed to understand your animal's condition. It does not replace a clinician's diagnosis — it helps the caregiver watch more closely and not miss what matters.",
        },
        {
          t: "Fitted recommendations",
          d: "Not recommendations by breed or age alone. It weighs constitution, temperament, living environment and what the caregiver has told it, then suggests products and services.",
        },
        {
          t: "Local facilities & booking",
          d: "Considering your animal's temperament and what they need, browse nearby groomers, daycares, hotels and clinics — and book from there.",
        },
      ],

      bizH2: "AnimAI Biz",
      bizTagline: "An AI operations platform for pet businesses",
      bizBody:
        "Run bookings and customer management for groomers, daycares, hotels and clinics in one place. AI cuts the repetitive work, and caregivers using AnimAI connect naturally with facilities.",
      bizLink: "About AnimAI Biz",

      roadEyebrow: "WHAT COMES NEXT",
      roadH2: ["The more it knows,", "the better the fit"],
      roadNote:
        "What AnimAI aims at is not an app with many features. Built on caregivers' accounts and the results of real choices, it is a platform where products, services, health care and daily care fit better the more it learns about your animal.",
      road: [
        {
          n: "01",
          role: "Signal",
          t: "Wearable tag",
          d: "It adds the signals that are hard to know from an account alone. Alongside the app and phone sensors, information from a wearable tag lets us read daily life in finer detail.",
        },
        {
          n: "02",
          role: "Supply",
          t: "Business dashboard",
          d: "The per-animal traits a caregiver shared carry through to the actual service floor. Businesses understand the animal better, and caregivers repeat the same explanation less.",
        },
        {
          n: "03",
          role: "Extension",
          t: "Fitted commerce",
          d: "It doesn't stop at recommending a product. Learning from your animal's traits, past purchases and the response afterwards, it reduces trial and error on the next choice.",
        },
        {
          n: "04",
          role: "Extension",
          t: "Insurance brokerage",
          d: "As per-animal life and health information accumulates, we build an environment where the coverage you need is easier to compare and choose.",
        },
        {
          n: "05",
          role: "Extension",
          t: "Senior care",
          d: "With age, small changes matter more. We read what differs from the usual more carefully, and help caregivers and professionals share what they need.",
        },
      ],
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: "We reversed the direction",
      lead:
        "Sensors give you signal. They do not tell you what the signal means. What pet AI has failed to solve was never data — it is meaning.",

      invH2: "The usual approach",
      invBefore: [
        "Collect signal",
        "Let a model classify it",
        "Never learn what it meant",
      ],
      invAfter: [
        "The caregiver speaks",
        "The words carry meaning",
        "Meaning attaches to that hour's signal",
      ],
      invBeforeLabel: "Conventional",
      invAfterLabel: "Vitanima",
      invBody:
        "What a caregiver says is produced every day at no cost. No survey, no expert annotation. The cost of knowing one animal individually effectively disappears.",

      loopH2: "It gets more accurate with use",
      loopBody:
        "Each turn of the loop sharpens the next question, and the answer becomes data again. Over time the system becomes accurate about one subject in particular. What is hard to copy is not the model — it is the time.",

      guardH2: "The AI does not diagnose",
      guardBody:
        "What our AI does is ask and record. When something looks unlike the usual pattern, it checks with the caregiver and keeps the answer. Judgement belongs to the clinic. Anything requiring a diagnosis or prescription is routed to a nearby veterinary hospital.",

      ipH2: "Patents",
      ipNote:
        "All three are filed with deferred claims and have not yet entered examination. They were filed against the companion animal field, but the structure itself is not bound to one industry. Summaries below are limited to what can be disclosed publicly.",
      ip: [
        {
          d: "16 Jul 2026",
          t: "Per-subject state estimation from speech",
          s: "Turning what is said into meaning for data, and setting a baseline for that one subject",
        },
        {
          d: "19 Jul 2026",
          t: "Product efficacy feedback",
          s: "Reading change after a choice to confirm whether it actually fit",
        },
        {
          d: "19 Jul 2026",
          t: "State-based facility matching",
          s: "Connecting offline capacity based on current state",
        },
      ],
      ipStatus: "Filed",
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
