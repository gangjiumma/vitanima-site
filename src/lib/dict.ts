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
      eyebrow: "PET HEALTH AIoT",
      h1: ["매일의 기록으로", "건강 변화를 먼저 보고,", "보험까지 연결합니다"],
      lead: [
        "비타니마는 Care Tag가 관찰한 활동과 수면 변화, 보호자의 대화와 건강기록을 Lifetime Log에 쌓습니다.",
        "평소와 다른 변화를 더 일찍 확인하고, 쌓인 기록을 건강관리와 보험에 활용할 수 있도록 만듭니다.",
      ],
      ctaPrimary: "AnimAI 시작하기",
      ctaSecondary: "어떻게 작동하나요",

      heroFlow: [
        {
          k: "01",
          en: "CARE TAG",
          t: "변화를 감지합니다",
          d: "보호자가 보지 못한 시간의 활동과 수면 변화를 기록합니다.",
        },
        {
          k: "02",
          en: "ANIMAI",
          t: "묻고 해석합니다",
          d: "생활신호와 보호자의 말을 함께 보고, 평소와 다른 변화가 있었는지 확인합니다.",
        },
        {
          k: "03",
          en: "LIFETIME LOG",
          t: "시간순으로 기록합니다",
          d: "대화, 생활신호, 건강기록을 한 아이의 장기 기록으로 쌓습니다.",
        },
      ],
      heroFlowCenter:
        "관찰한 신호와 보호자의 설명이 한 아이의 Lifetime Log가 됩니다.",

      problemEyebrow: "WHY IT MATTERS",
      problemH2: ["아픈 날보다,", "평소의 작은 변화가 먼저 보입니다"],
      problemSub:
        "치료와 보험은 문제가 생긴 뒤 시작되지만, 변화는 그 전부터 쌓입니다.",
      problemLead: [
        "병원 기록과 보험 기록은 대부분 문제가 생긴 이후에 만들어집니다.",
        "하지만 밥을 덜 먹은 날, 잠을 자주 깬 날, 산책이 짧아진 날처럼 작은 변화는 그보다 먼저 시작됩니다.",
      ],
      problemQuote: "그래서 비타니마는 아픈 날이 아니라 평소부터 기록합니다.",
      timelineLabel: "기존에 주로 확인하는 정보",
      timeline: ["견종", "나이", "병력", "가입·청구 기록"],
      timelineSubLabel: "Vitanima가 함께 기록하는 정보",
      timelineSub: "활동 · 수면 · 식사 · 배변 · 보호자의 대화 · 병원 기록",
      timelineNew: "한 아이에게 실제로 쌓인 시간을 기준으로 계속 업데이트합니다.",

      prodEyebrow: "NOW AVAILABLE",
      prodTag: "운영 중",
      prodH2: "AnimAI",
      prodTagline: ["대화와 기록을 연결하는", "반려동물 AI 엔진"],
      prodBody: [
        "보호자가 걱정이나 변화를 말하면 AnimAI는 중요한 내용을 찾아 Lifetime Log의 해당 시점에 기록합니다.",
        "이전 대화와 건강기록을 함께 보고, 전에 걱정했던 일이 어떻게 되었는지 다시 묻습니다.",
        "Care Tag가 연결되면 같은 시간의 활동과 수면 신호까지 함께 확인합니다.",
      ],
      prodNote:
        "Care Tag가 없어도 대화와 건강기록을 기반으로 Lifetime Log는 계속 쌓입니다.",
      prodLink: "AnimAI 자세히 보기",
      iosBtn: "App Store",
      androidBtn: "Google Play",

      loopEyebrow: "THE LOOP",
      loopH2: ["AnimAI는 챗봇이 아니라", "기록을 업데이트하는 AI 엔진입니다"],
      loopSub:
        "한 번의 대화를 답변으로 끝내지 않고, 중요한 내용을 기록하고 이전 기록과 연결한 뒤 다음 질문에 다시 사용합니다.",
      loopCenter: ["Lifetime Log"],
      loopCenterSub: "우리 아이의 평생 기록",
      loopCenterNote: "Loop 관련 특허 3건 출원 · 실제 코드 가동 중",
      loopSteps: [
        { k: "01", t: "보호자 입력", d: "" },
        { k: "02", t: "주요 요소 추출", d: "" },
        { k: "03", t: "Lifetime Log 정렬", d: "" },
        { k: "04", t: "누적 이력 반영", d: "" },
        { k: "05", t: "능동질의", d: "" },
        { k: "06", t: "신뢰도 교정", d: "" },
      ],
      loopExampleQuote: "요즘 밤에 자꾸 뒤척여요.",
      loopExampleRows: [
        { k: "중요한 요소 추출", v: "뒤척임 / 밤 / 최근 며칠" },
        { k: "Lifetime Log", v: "해당 시점의 기록에 정렬" },
        { k: "다음 확인", v: "어제 말씀하신 뒤척임은 오늘도 계속되나요?" },
      ],
      loopBody:
        "보호자의 답은 단순한 대화 기록이 아니라 기존 기록의 신뢰도를 조정하고 다음 질문에 활용됩니다.",
      loopLink: "Loop 기술 자세히 보기",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["보호자가 못 보는 시간은", "Care Tag가 기록합니다"],
      signalSub: "활동과 수면 변화를 기록하는 BLE 웨어러블 태그입니다.",
      signalBody: [
        "집에서는 Home Station, 외출 중에는 보호자의 앱을 통해 Care Tag 신호를 수집합니다.",
        "활동량이나 수면 패턴이 평소와 달라지면 AnimAI가 보호자에게 실제 상황을 확인하고, 그 설명을 Lifetime Log에 함께 기록합니다.",
      ],
      signalQuote: [
        "Care Tag는 활동량 숫자를 보여주는 데서 끝나지 않습니다.",
        "생활신호와 보호자의 설명을 같은 시간에 연결해 한 아이의 기록으로 만듭니다.",
      ],
      signalTagAlt: "Care Tag를 착용한 강아지와 고양이",
      signalTimeline: [
        { d: "2026.08", t: "내부 파일럿 진행 중" },
        {
          d: "2026.09~10",
          t: "활성 사용자 20명 대상 파일럿 및 ODM · KC 인증 착수",
        },
        { d: "NEXT", t: "추가 파일럿을 통해 누적 300대 검증" },
        { d: "THEN", t: "검증 후 정식 출시" },
      ],
      signalTimelineNote:
        "Pre-A 이후 배변, 급식, 체중 등 Home Device 확장 예정",
      signalLink: "기술 자세히 보기",

      insEyebrow: "FROM RECORD TO INSURANCE",
      insBadge: "보험 비교견적 서비스 준비 중",
      insH2: ["쌓인 기록으로", "우리 아이에게 맞는 보험을 비교합니다"],
      insSub:
        "품종과 나이만 다시 입력하는 비교가 아니라, 이미 쌓인 우리 아이의 기록에서 시작합니다.",
      insItems: [
        {
          n: "01",
          t: "기록에서 견적을 시작합니다",
          d: "품종, 나이, 병력, 예방이력 등 Lifetime Log에 이미 있는 정보를 다시 활용합니다.",
        },
        {
          n: "02",
          t: "보험료와 보장조건을 함께 비교합니다",
          d: "여러 상품을 한 곳에서 확인하고 우리 아이를 기준으로 비교할 수 있도록 준비하고 있습니다.",
        },
        {
          n: "03",
          t: "보험 이력도 다시 기록됩니다",
          d: "가입, 청구, 갱신 결과를 Lifetime Log에 다시 연결해 보험 이력을 따로 관리해야 하는 불편을 줄입니다.",
        },
      ],
      insFlow: [
        "Lifetime Log",
        "우리 아이 기준 비교견적",
        "가입",
        "청구",
        "갱신",
      ],
      insFlowBack: "Lifetime Log",
      insFlowNote: "평소의 기록이 보험 가입 전과 후를 계속 이어줍니다.",
      insLink: "보험 서비스 준비 현황 보기",
      bizNote:
        "제휴 펫 업장은 Care Tag를 직접 체험하고 만날 수 있는 지역 접점으로 확장할 예정입니다.",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "이미 작동하고 있습니다",
      proofs: [
        { n: "2,142명", l: "사용자" },
        { n: "1,116명", l: "정식 회원" },
        { n: "420개", l: "Lifetime Log" },
        { n: "3건", l: "Loop 관련 특허 출원" },
      ],
      proofNote: "* 2026.08.25 기준",

      trackH2: ["이제 Care Tag와", "보험 채널을 검증합니다"],
      trackLead:
        "가동 중인 AnimAI와 Lifetime Log에 Care Tag를 더하고, 실제 사용자의 생활기록이 건강관리와 보험으로 이어지는지를 검증합니다.",
      trackMetricsLabel: "NEXT 12 MONTHS",
      trackMetrics: [
        { n: "2,000대", l: "Care Tag 판매 목표" },
        { n: "750~1,000명", l: "유료 관찰 구독 목표" },
        { n: "300건", l: "펫보험 가입 목표" },
      ],
      trackNote: "* 위 수치는 현재 실적이 아니라 향후 12개월 목표입니다.",
      trackLink: "비타니마가 걸어온 길",

      ctaH2: ["매일의 기록이", "건강관리에서 보험까지 이어집니다"],
      ctaLead:
        "비타니마는 반려동물의 생활신호와 보호자의 대화, 건강기록을 Lifetime Log에 쌓아 평소와 다른 변화를 확인하고 보험에 활용할 수 있는 기록을 만듭니다.",
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
        "비타니마는 한 아이에게 쌓이는 대화와 생활신호를 기록해, 시간이 지날수록 우리 아이를 더 잘 이해하는 Lifetime AIoT를 만드는 회사입니다.",
        "기기가 생활을 관찰하고, Lifetime Log가 시간을 쌓고, AnimAI가 그 기록을 기억하고 다시 사용합니다.",
      ],
      heroFlow: [
        { t: "Care Tag", d: "생활을 관찰합니다" },
        { t: "Lifetime Log", d: "시간을 쌓습니다" },
        { t: "AnimAI", d: "기록을 다시 씁니다" },
      ],
      heroFlowCenter: "시간이 쌓일수록 우리 아이를 더 잘 아는 AI",

      missionLabel: "MISSION",
      mission: ["한 아이의 평소를 기록하고,", "시간이 지날수록 더 잘 이해하는 기술을 만듭니다"],
      missionBody:
        "같은 견종과 나이라도 성향, 기호, 알레르기, 생활습관과 변화는 모두 다릅니다. 비타니마는 평균적인 정보보다 한 아이에게 실제로 쌓인 기록을 기준으로 이해하는 기술을 만듭니다.",
      visionLabel: "VISION",
      vision: ["모든 반려동물이", "자기만의 Lifetime AI를 갖는 것"],
      visionBody:
        "한 번 입력한 정보로 끝나는 AI가 아니라, 대화와 생활신호가 평생 이어지고 그 시간이 다시 다음 질문과 선택에 쓰이는 AI를 만듭니다.",
      turnBody: ["한 번의 답보다,", "한 아이에게 쌓인 시간이 더 중요합니다"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["여섯 마리를 키워도,", "다음 아이는 또 처음이었습니다"],
      whySub: "같은 견종이어도, 아이마다 전혀 달랐습니다.",
      whyBody: [
        "30년 동안 여섯 마리의 강아지와 함께하며 잘 안다고 생각했습니다. 하지만 새로운 아이가 올 때마다 성향도, 알레르기도, 기호도, 건강 변화도 달랐습니다.",
        "먼저 키운 아이에게서 얻은 경험이 다음 아이에게 그대로 이어지지 않았고, 사료부터 행동, 병원과 생활 방식까지 다시 찾아보고 다시 물어야 했습니다.",
        "보호자에게는 몇 달의 시행착오일 수 있지만, 반려동물의 생애에서는 결코 짧은 시간이 아니었습니다.",
      ],
      whyQuote: "경험이 있어도, 우리 아이에게 맞는 답은 다시 찾아야 했습니다.",
      whyLoop: ["검색한다", "후기를 본다", "좋다는 걸 써본다", "안 맞으면 바꾼다", "다시 검색한다"],
      whyClose: "Vitanima는 이 경험이 다음 선택에 이어지게 만들기 위해 시작됐습니다.",

      storyEyebrow: "OUR PATH",
      storyH2: "여기까지 온 길",
      storyLead: [
        "비타니마는 처음부터 반려동물 산업에서 시작한 회사가 아닙니다.",
        "무역과 물류 현장에서 반복되는 문제를 직접 겪고, 그것을 시스템으로 바꾸는 일을 해왔습니다. 그리고 지금은 같은 실행 방식으로 한 아이의 시간이 다음 선택에 이어지게 만드는 일을 하고 있습니다.",
      ],
      story: [
        {
          y: "2018–2020",
          k: "FIELD",
          t: "현장에서 시작했습니다",
          d: "무역과 국제 물류 현장에서 고객과 직접 부딪히며 문제를 해결했습니다. 반복되는 확인과 전달, 정보의 단절이 현장의 시간을 얼마나 많이 쓰게 만드는지 배웠습니다.",
          note: "GN누리 · GN로지텍 · GN밸류홀딩스",
        },
        {
          y: "2022–2023",
          k: "BUILD",
          t: "반복되는 일을 시스템으로 바꿨습니다",
          d: "물류 현장의 반복 업무를 소프트웨어로 처리하는 SaaS를 직접 만들었습니다. 사람이 매번 확인하고 전달하던 과정을 시스템이 대신하도록 만드는 경험을 쌓았습니다.",
          note: "이지로지 · 물류 SaaS 개발",
        },
        {
          y: "2026",
          k: "VITANIMA",
          t: "같은 질문을 반려생활에서 다시 만났습니다",
          d: "보호자가 이미 알고 있는 우리 아이의 경험도 다음 질문과 선택에 충분히 이어지지 않고 있었습니다. 그래서 보호자의 말을 기록으로 만들고, 생활신호와 함께 한 아이의 시간 위에 쌓는 Vitanima를 시작했습니다.",
          note: "",
        },
        {
          y: "2026 · NOW",
          k: "EXECUTE",
          t: "아이디어보다 먼저 작동하게 만들었습니다",
          d: "AnimAI와 Lifetime Log를 실제 사용자에게 공개하고, B2B Dashboard와 인프라를 구축했습니다. Loop 관련 특허 3건을 출원하고, Care Tag의 1대 집중 파일럿까지 진행하고 있습니다.",
          note: "",
          metrics: [
            { n: "iOS · Android", l: "AnimAI 출시" },
            { n: "3건", l: "Loop 관련 특허 출원" },
            { n: "Pilot", l: "Care Tag 1대 집중 테스트" },
          ],
        },
      ],
      storyClose: ["산업은 달라졌지만,", "문제를 푸는 방식은 같습니다"],
      storyCloseBody:
        "사용자가 이미 알고 있는 것을 기술이 이어받고, 반복되는 과정에 쓰이던 시간을 줄이는 것. 산업은 달라져도 Vitanima가 문제를 푸는 방식은 같습니다.",

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
          t: "시간이 쌓일수록 더 잘 알아야 합니다",
          d: "한 번 쓰고 끝나는 기능이 아니라, 기록이 쌓일수록 우리 아이를 더 잘 이해하는 서비스를 만듭니다.",
        },
        {
          n: "04",
          t: "먼저 만들고 결과로 말합니다",
          d: "계획만 설명하기보다 직접 만들고, 실제 사용자의 반응과 데이터로 확인합니다.",
        },
      ],

      nameH2: "OUR NAME",
      nameLines: [
        { k: "VITA", v: "생명" },
        { k: "ANIMA", v: "마음 · 생기" },
      ],
      nameCompound: "VITANIMA",
      nameBody:
        "생명을 더 오래 이해하고 기억하는 기술을 만들겠다는 방향을 담은 이름입니다.",
      nameProductLabel: "AnimAI",
      nameProductSub: "Vitanima가 만드는 보호자용 AI 서비스",
      nameProductBody:
        "Vitanima는 회사 이름이고, AnimAI는 보호자가 사용하는 앱과 AI 서비스의 이름입니다.",

      factsH2: "법인 정보",
      facts: [
        { k: "법인명", v: "주식회사 비타니마 (Vitanima Inc.)" },
        { k: "대표이사", v: "김훈기" },
        { k: "사업 분야", v: "반려동물 Lifetime AIoT · 데이터 플랫폼" },
        { k: "주요 제품·서비스", v: "AnimAI · AnimAI Biz · Care Tag (파일럿)" },
        { k: "전화", v: "010-2358-5248" },
        { k: "이메일", v: "cs@vitanima.kr" },
        { k: "사업자등록번호", v: "284-88-02356" },
        { k: "통신판매업신고번호", v: "제2026-인천연수구-1470호" },
        { k: "설립일", v: "2022년 8월 30일" },
        { k: "주소", v: "인천광역시 연수구 테크노파크로 111번길 5, 8층" },
      ],

      historyH2: "연혁",
      historyNote: "* GN누리 이하는 Vitanima 이전 사업 및 창업 경력입니다.",
      history: [
        {
          y: "2026–현재",
          t: "주식회사 비타니마",
          d: "반려동물 AIoT AnimAI 개발 및 운영",
          sub: "AnimAI · Lifetime Log 운영 / Care Tag 파일럿",
        },
        {
          y: "2022–2023",
          t: "주식회사 이지로지",
          d: "물류 SaaS 개발 (現 비타니마)",
          sub: "",
        },
        {
          y: "2019–2025",
          t: "GN로지텍 주식회사",
          d: "물류 ODCY · 수출입 3PL · 창고·운송",
          sub: "",
        },
        {
          y: "2019–2020",
          t: "GN밸류홀딩스 주식회사",
          d: "펫택시 중개 플랫폼 모시개냥 개발",
          sub: "",
        },
        { y: "2018–2025", t: "GN누리", d: "무역중개 · 중앙아시아", sub: "" },
      ],

      ctaH2: ["비타니마가 만드는", "Lifetime AIoT를 만나보세요"],
      ctaLead:
        "AnimAI와 Lifetime Log는 이미 실제 사용자와 함께 작동하고 있습니다. 이제 Care Tag의 생활신호를 연결해, 보호자가 보지 못한 시간까지 한 아이의 기록으로 쌓아가고 있습니다.",
      ctaNote: "Home Device는 향후 확장 예정입니다.",
      ctaBtn: "AnimAI 알아보기",
      ctaBtn2: "대표 이야기 보기",
    },
    ceo: {
      eyebrow: "FOUNDER & CEO",
      kicker: "현장에서 문제를 찾고, 직접 만들어 검증해왔습니다.",
      h1: ["저는 기술보다", "문제를 먼저 봅니다"],
      intro: [
        "기술은 문제를 해결하기 위한 방법입니다.",
        "저는 먼저 현장에서 사람들이 어디에 시간을 쓰고 있는지 봅니다. 그리고 반복되는 문제를 직접 만들고, 운영하고, 사용자 반응으로 확인합니다.",
        "Vitanima도 같은 방식으로 시작했습니다.",
      ],
      name: "김훈기",
      role: "대표 · Founder · 기획 · 개발",

      startEyebrow: "THE STARTING POINT",
      startH2: ["여섯 마리를 키워도,", "다음 아이는 또 처음이었습니다"],
      startSub: "같은 견종이어도, 아이마다 전혀 달랐습니다.",
      startBody: [
        "30년 동안 여섯 마리의 강아지와 함께하며 반려동물을 잘 안다고 생각했습니다. 하지만 새로운 아이가 올 때마다 성향도, 알레르기도, 좋아하는 것도, 몸의 반응도 달랐습니다.",
        "특히 다섯 번째 아이를 수술 후 합병증으로 떠나보내면서 생각이 달라졌습니다. 이전까지 쌓은 경험이 다음 아이에게 그대로 이어지는 것은 아니었습니다.",
        "사료부터 생활습관, 행동, 건강 변화까지 새로운 아이가 올 때마다 다시 찾아보고 다시 배워야 했습니다.",
      ],
      startQuote: ["여섯 번의 경험이 일곱 번째 아이에게", "그대로 이어지지 않았습니다"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["제가 알고 있던 경험을,", "AI가 이어서 기억하게 만들고 싶었습니다"],
      whyBody: [
        "보호자는 우리 아이를 가장 오래 보고 가장 많은 것을 알고 있습니다. 하지만 그 경험은 대화가 끝나거나 서비스가 바뀌면 다시 설명해야 했습니다.",
        "그래서 평균을 추천하는 AI가 아니라, 보호자가 말한 경험과 생활의 변화를 한 아이의 시간 위에 계속 쌓는 AI를 만들기로 했습니다.",
        "그렇게 AnimAI와 Lifetime Log를 만들었고, 이제 Care Tag의 생활신호까지 연결하고 있습니다.",
      ],
      whyQuote: ["목표는 더 많은 답을 주는 것이 아니라,", "우리 아이를 다시 설명해야 하는 일을 줄이는 것입니다"],

      execEyebrow: "EXECUTION BEFORE VITANIMA",
      execH2: ["문제를 직접 겪고,", "사업으로 해결해왔습니다"],
      execLead:
        "Vitanima 이전에도 현장에서 문제를 찾고, 직접 사업과 제품으로 해결하는 일을 반복해왔습니다.",
      execMetrics: [
        { n: "4번", l: "Vitanima 이전 창업" },
        { n: "7년+", l: "무역 · 국제물류 사업 경험" },
        { n: "70억 원", l: "이전 사업체 누적 매출" },
      ],
      execNote:
        "* 외부투자 없이 운영한 Vitanima 이전 사업체 기준이며, Vitanima의 매출이 아닙니다.",

      careerH2: "경력",
      career: [
        {
          y: "2018–2025",
          t: "GN누리",
          r: "창업 · 대표",
          d: "무역중개 · 중앙아시아",
        },
        {
          y: "2019–2025",
          t: "GN로지텍",
          r: "창업 · 대표",
          d: "물류 ODCY · 수출입 3PL · 창고·운송",
        },
        {
          y: "2019–2020",
          t: "GN밸류홀딩스",
          r: "창업 · 대표",
          d: "펫택시 중개 플랫폼 '모시개냥' 개발",
        },
        {
          y: "2022–2023",
          t: "이지로지",
          r: "창업 · 대표",
          d: "물류 SaaS 개발",
        },
        {
          y: "2026–현재",
          t: "Vitanima",
          r: "대표 · 기획 · 개발",
          d: "반려동물 Lifetime AIoT AnimAI 개발",
        },
      ],

      againEyebrow: "BUILDING AGAIN",
      againH2: ["사고 이후 다시 시작했고,", "3개월 만에 제품을 시장에 내놓았습니다"],
      againBody: [
        "이지로지 운영 중 사고로 프로젝트를 종료했고, 영구 장애가 남았습니다. 이후 다시 창업해 Vitanima를 시작했습니다.",
        "아이디어를 오래 설명하기보다 먼저 작동하게 만들었습니다. AnimAI를 출시하고 실제 사용자에게 공개한 뒤, 사용자 반응을 보며 Lifetime Log와 Loop를 계속 고도화하고 있습니다.",
      ],

      firstEyebrow: "VITANIMA · FIRST 3 MONTHS",
      firstH2: ["기획부터 개발, 영업과 파일럿까지", "직접 실행했습니다"],
      firstGrid: [
        { n: "01", t: "AnimAI 출시", d: "iOS · Android" },
        { n: "02", t: "Lifetime Log · Loop", d: "실제 코드 가동" },
        { n: "03", t: "AnimAI Biz", d: "B2B Dashboard 개발" },
        { n: "04", t: "특허 3건", d: "Loop 관련 출원" },
        { n: "05", t: "초기 고객 확보", d: "사용자 확보 · B2B 영업" },
        { n: "06", t: "Care Tag", d: "1대 집중 파일럿 진행" },
      ],
      firstNote: "지금도 대표가 기획·개발·백엔드·인프라를 직접 맡고 있습니다.",

      howEyebrow: "HOW I BUILD",
      howH2: ["기술보다 먼저,", "문제와 사용자를 봅니다"],
      how: [
        {
          n: "01",
          en: "FIELD FIRST",
          t: "현장에서 시작합니다",
          d: "책상에서 가정한 문제보다 실제 사용자가 반복해서 겪는 문제를 먼저 봅니다.",
        },
        {
          n: "02",
          en: "BUILD FIRST",
          t: "먼저 만들어봅니다",
          d: "설명만 하기보다 작동하는 제품을 만들고 실제 사용자의 반응으로 확인합니다.",
        },
        {
          n: "03",
          en: "KEEP LEARNING",
          t: "출시 후에도 계속 바꿉니다",
          d: "서비스는 출시할 때 완성되는 것이 아니라, 데이터와 사용자의 반응이 쌓이면서 더 좋아져야 한다고 믿습니다.",
        },
      ],

      globalEyebrow: "GLOBAL EXECUTION",
      globalH2: ["해외 시장에서도", "직접 만나고 실행할 수 있습니다"],
      global: [
        {
          k: "Education",
          t: "리츠메이칸 아시아태평양대학교",
          d: "국제경영 학사 · 일본 소재",
        },
        {
          k: "Communication",
          t: "Japanese · English",
          d: "일본어·영어 원어민 수준 커뮤니케이션",
        },
        {
          k: "Business",
          t: "무역 · 국제 물류",
          d: "해외 파트너십과 현지 사업 실행 경험",
        },
      ],
      globalBody: "일본에서의 초기 파트너 탐색과 미팅도 대표가 직접 진행할 계획입니다.",
      globalNote:
        "* 유통·마케팅·인증·투자/BD 파트너 후보군을 검토 중이며, 현재 계약 또는 공식 파트너십을 의미하지 않습니다.",

      closeEyebrow: "FROM THE FOUNDER",
      closeH2: ["우리 아이에게 쌓인 시간이", "사라지지 않게 만들겠습니다"],
      closeBody: [
        "보호자가 한 번 말한 경험이 다음 질문에 이어지고, 기기가 기록한 생활신호가 그때의 상황과 함께 남도록 만들고 있습니다.",
        "한 아이의 기록이 한 달, 일 년, 평생 쌓일수록 그 아이를 더 잘 이해하는 AI. 그것이 Vitanima가 만들고 있는 Lifetime AIoT입니다.",
      ],
      sign: "(주)비타니마 대표이사 김훈기",

      ctaH2: "이미 작동하는 AnimAI를 확인해보세요",
      ctaBtn: "AnimAI 알아보기",
      ctaBtn2: "회사 알아보기",
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "운영 중",
      h1: "AnimAI",
      tagline: ["대화로 시작해,", "한 아이의 시간을 쌓는 AI"],
      lead: [
        "보호자가 걱정과 변화를 말하면, 그 내용은 Lifetime Log에 시간순으로 쌓입니다.",
        "AnimAI는 이전 기록을 보고 다시 묻고, 새로 확인한 답을 다시 기록에 반영합니다. Care Tag가 연결되면 같은 시간의 활동·수면 신호까지 함께 봅니다.",
      ],
      leadNote: "Care Tag가 없어도 대화만으로 Lifetime Log는 계속 쌓입니다.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: [
        "AnimAI · Lifetime Log · 대화 기반 Loop 운영 중",
        "Care Tag · 2026.08 1대 집중 테스트 진행 중",
      ],

      whyH2: "왜 만들었나",
      whyLead: ["같은 변화도,", "이유는 아이마다 다릅니다"],
      whySub:
        "우리 아이의 이유를 모르면, AI도 결국 평균적인 답을 하게 됩니다.",
      whyBody: [
        "같은 '활동량 감소'라도 비가 와서 산책을 못 간 것인지, 전날 많이 움직여 쉬는 것인지, 몸이 불편한 것인지는 아이마다 다릅니다.",
        "숫자와 한 번의 질문만으로는 그 이유를 알기 어렵습니다. 그래서 AnimAI는 보호자의 말과 이전 기록을 함께 봅니다.",
      ],
      whyQuote: ["평균을 보는 대신,", "우리 아이에게 쌓인 기록을 봅니다"],

      featureH2: "AnimAI가 돕는 것",
      features: [
        {
          t: "처음 만난 아이를 더 빨리 이해",
          d: "성향, 기호, 알레르기, 생활습관을 처음부터 다시 알아가는 시간을 줄입니다.",
        },
        {
          t: "평소와 다른 변화를 더 일찍 확인",
          d: "활동, 수면, 식사처럼 평소와 달라진 변화를 이전 기록과 함께 살펴봅니다.",
        },
        {
          t: "지금 우리 아이에게 필요한 것",
          d: "나이와 견종만이 아니라 기호, 생활, 이전 반응을 바탕으로 상품·사료·간식 선택을 돕습니다.",
        },
        {
          t: "우리 아이에게 맞는 서비스",
          d: "아이의 성향과 생활에 맞는 병원, 미용실, 호텔, 유치원을 찾는 것을 돕습니다.",
        },
      ],
      subFeatures: [
        {
          t: "시설 탐색·예약",
          d: "미용실·유치원·호텔·병원 등 필요한 시설을 찾고 예약·문의로 이어집니다.",
        },
        {
          t: "보호자 커뮤니티",
          d: "비슷한 고민을 가진 보호자의 경험을 살펴보고 우리 아이의 이야기를 나눕니다.",
        },
      ],

      flowEyebrow: "HOW IT WORKS",
      flowH2: ["한 번의 대화가", "다음 질문의 기준이 됩니다"],
      flowSteps: [
        {
          n: "01",
          label: "말합니다",
          badge: "",
          main: "요즘 밤에 자꾸 뒤척여요.",
          isQuote: true,
          sub: "보호자가 걱정과 변화를 말합니다.",
        },
        {
          n: "02",
          label: "기록합니다",
          badge: "LIFETIME LOG",
          main: "뒤척임 · 밤 · 최근 며칠",
          isQuote: false,
          sub: "말한 내용을 해당 시간의 기록에 정리하고, 이전 대화·건강기록과 함께 봅니다.",
        },
        {
          n: "03",
          label: "다시 묻습니다",
          badge: "ANIMAI",
          main: "어제 말씀하신 뒤척임은 오늘도 계속되나요?",
          isQuote: true,
          sub: "보호자가 매번 다시 꺼내지 않아도 이전 기록을 보고 먼저 확인합니다.",
        },
      ],
      flowBody:
        "AnimAI는 한 번 받은 답을 저장하고 끝내지 않습니다. 새로 확인된 내용을 이전 기록에 반영하고, 다음 질문에 다시 사용합니다.",
      flowChain: ["말함", "기억함", "다시 물음", "더 잘 알게 됨"],

      logEyebrow: "LIFETIME LOG",
      logH2: ["대화와 기록이", "한 아이의 시간으로 이어집니다"],
      logBody: [
        "Lifetime Log는 대화, 생활신호, 건강기록이 시간에 따라 쌓이는 우리 아이의 평생 기록입니다.",
        "새로운 정보가 확인되면 단순히 최신 정보로 저장하는 것이 아니라, 실제 변화가 시작된 시점과 이전 기록에 다시 연결합니다.",
      ],
      logInputs: [
        { t: "대화", d: "보호자가 말한 걱정과 변화" },
        { t: "생활신호", d: "Care Tag의 행동·수면 변화" },
        { t: "건강기록", d: "병원 기록 · 처방전 등" },
      ],
      logResult: "Lifetime Log",
      logResultSub: "우리 아이의 평생 기록",
      logQuote: "시간이 쌓일수록, 우리 아이만의 기준이 생깁니다.",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["보호자가 못 보는 시간은", "Care Tag가 기록합니다"],
      signalSub:
        "첫 제품은 행동과 수면 변화를 기록하는 BLE 웨어러블 태그입니다.",
      signalBody: [
        "보호자는 우리 아이를 가장 잘 알지만, 하루 24시간을 모두 볼 수는 없습니다.",
        "Care Tag가 행동과 수면 변화를 기록하면, AnimAI는 그 신호를 보호자의 대화와 같은 Lifetime Log에서 함께 봅니다.",
      ],
      signalQuote: [
        "Care Tag는 숫자를 보여주는 데서 끝나지 않습니다.",
        "생활신호를 보호자의 설명과 함께 한 아이의 기록으로 연결합니다.",
      ],
      signalTagAlt: "Care Tag를 착용한 강아지와 고양이",
      signalTimeline: [
        { d: "2026.08", t: "1대 집중 테스트 진행 중" },
        { d: "2026.09", t: "앱 사용이 활발한 유저 30명부터 파일럿" },
        { d: "NEXT", t: "최대 200대까지 단계적 확대" },
        { d: "THEN", t: "검증 기준 충족 후 상용화" },
      ],
      signalTimelineNote:
        "검증 기준 충족 후 ODM·인증·패키징을 거쳐 정식 출시합니다.",
      signalHomeNote:
        "2차 개발 예정 · 배변량, 급식량, 체중 등 Home Device로 신호원을 확장합니다.",

      subEyebrow: "OBSERVATION SUBSCRIPTION",
      subH2: ["Care Tag의 기록이", "지속적인 관찰로 이어집니다"],
      subBody:
        "Care Tag와 Lifetime Log를 바탕으로 평소와 달라진 변화를 계속 확인하는 관찰 구독을 준비하고 있습니다.",
      subNote: "월 3,000원 계획 · 가격 및 구성은 현재 계획 기준입니다.",

      bizH2: "AnimAI Biz",
      bizBadge: "가동 중 · LIVE",
      bizTagline: ["예약·고객·결제·알림장을", "한 화면에서 관리하는 사업자 대시보드"],
      bizBody: [
        "AnimAI Biz는 미용실·유치원·호텔·병원 등 반려동물 업장의 예약, 고객관리, 결제와 현장 업무를 한 화면에서 관리합니다.",
        "운영 업무를 줄이는 데서 끝나지 않고, AnimAI 보호자에게 매장을 노출하고 앱과 연결합니다.",
      ],
      bizFeatures: [
        "예약·고객관리",
        "결제",
        "AI 알림장",
        "매장 노출·AI 자동화",
        "AnimAI 앱 연동",
      ],
      bizFeaturesSub: ["이용권·할인권", "AI 마케팅"],
      bizFlow: [
        "AnimAI에서 시설 탐색",
        "예약·문의",
        "대시보드에서 고객 확인",
        "서비스 이용",
        "현장 결제",
        "보호자 앱과 연결",
      ],
      bizLink: "AnimAI Biz 알아보기",

      ctaH2: ["시간이 쌓일수록,", "우리 아이를 더 잘 알게 됩니다"],
      ctaLead:
        "AnimAI는 보호자의 대화를 Lifetime Log에 쌓고, 이전 기록을 기억해 다시 묻습니다. Care Tag의 생활신호까지 연결되면 보호자가 보지 못한 시간도 같은 기록 위에서 이어집니다.",
      ctaBtn: "AnimAI 시작하기",
      ctaBtn2: "기술 자세히 보기",
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: ["기기와 대화를", "한 아이의 시간 위에 연결합니다"],
      lead: [
        "센서는 무엇이 달라졌는지를 기록할 수 있습니다. 하지만 그 변화가 왜 생겼는지는 생활의 맥락 없이는 알기 어렵습니다.",
        "AnimAI는 보호자의 대화와 건강기록을 Lifetime Log에 먼저 쌓고, Care Tag의 생활신호를 같은 시간 위에 연결합니다.",
      ],
      leadNote:
        "센서가 '무슨 변화가 있었는지' 기록하고, 보호자의 답이 '왜 그랬는지' 채웁니다.",
      heroBeforeLabel: "기존 방식",
      heroBefore: ["생활신호", "패턴 판별", "일반 기준과 비교"],
      heroAfterLabel: "VITANIMA",
      heroAfter: ["보호자의 말", "Lifetime Log", "생활신호 연결"],
      heroAfterNote: "기록 → 이력 반영 → 다음 질문",

      realEyebrow: "THE REAL PROBLEM",
      realH2: ["신호만으로는", "이유를 알 수 없습니다"],
      realCase: [
        {
          k: "센서가 감지한 것",
          v: "활동량 20% 감소",
          sub: "",
          extra: [],
          tone: "neutral",
        },
        {
          k: "개체 기록이 없는 AI",
          v: "이 나이대 강아지에게 나타날 수 있는 변화입니다.",
          sub: "평균에 가까운 해석",
          extra: [],
          tone: "old",
        },
        {
          k: "보호자가 아는 실제 상황",
          v: "어제 토해서 오늘 쉬게 했어요.",
          sub: "",
          extra: ["비가 와서 산책을 못 갔어요.", "다리가 아파서 병원에 다녀왔어요."],
          tone: "new",
        },
      ],
      realBody: [
        "같은 '활동량 20% 감소'라는 신호도 아이와 상황에 따라 전혀 다른 의미일 수 있습니다.",
        "센서는 변화가 있었다는 사실을 알려주지만, 그 이유까지 스스로 확정할 수는 없습니다.",
      ],
      realQuote: ["문제는 신호의 양이 아니라,", "그 신호가 우리 아이에게 무엇을 의미하는가입니다"],

      invH2: ["보호자의 말과 생활신호를", "같은 시간 위에 놓습니다"],
      invBeforeLabel: "기존 방식",
      invBefore: ["신호를 모은다", "패턴을 판별한다", "일반 기준과 비교한다"],
      invAfterLabel: "VITANIMA",
      invAfter: [
        { t: "보호자가 말한다", s: "" },
        { t: "중요한 요소를 찾는다", s: "증상 · 시간 · 대상 · 행동" },
        { t: "Lifetime Log에 시간순으로 기록한다", s: "" },
        { t: "이전 기록과 관련 신호를 연결한다", s: "" },
      ],
      invBody: [
        "보호자의 자연스러운 발화에서 증상·시간·대상·행동을 찾고, 그 내용을 Lifetime Log의 해당 시점에 기록합니다.",
        "Care Tag가 연결되면 같은 시점의 활동·수면 신호도 함께 정렬합니다.",
      ],

      loopEyebrow: "THE LOOP",
      loopH2: ["기록이 다시", "다음 질문으로 돌아옵니다"],
      loopBody: [
        "AnimAI는 한 번의 질문과 답변으로 끝나지 않습니다.",
        "보호자가 말한 내용을 시간에 맞춰 기록하고, 이전 대화·건강기록과 함께 보며 우리 아이에 대한 이해를 업데이트합니다.",
        "새로 확인된 답은 다시 Lifetime Log에 반영되고, 필요한 경우 AnimAI가 먼저 확인합니다.",
      ],
      loopCenter: ["Lifetime Log"],
      loopCenterSub: "우리 아이의 평생 기록",
      loopCenterNote: "Loop 관련 특허 3건 출원",
      loopStatus: "현재 대화 기반 S1~S6 전체 가동 중",
      loopStatusNote:
        "Care Tag 연결 후 S3에 활동·수면 신호를 추가하고, 실제 파일럿 데이터에 맞춰 S2~S5를 중심으로 고도화합니다.",
      loopSteps: [
        { k: "S1", t: "보호자 입력", d: "보호자가 걱정과 변화를 말합니다.", s: "가동 중" },
        {
          k: "S2",
          t: "요소 추출",
          d: "증상·시간·대상·행동처럼 기록에 필요한 요소를 찾습니다.",
          s: "가동 중",
        },
        {
          k: "S3",
          t: "Lifetime Log 정렬",
          d: "대화와 건강기록을 해당 시점에 정리하고, 태그 연결 후에는 같은 시점의 활동·수면 신호도 함께 정렬합니다.",
          s: "가동 중",
          sub: "Tag signal 확장 중",
        },
        {
          k: "S4",
          t: "누적 이력 반영",
          d: "이전 대화, 건강기록과 생활 변화를 함께 보며 아이별 상태와 기록을 업데이트합니다.",
          s: "가동 중",
        },
        {
          k: "S5",
          t: "능동질의",
          d: "이전 기록과 변화를 바탕으로 AnimAI가 필요한 내용을 먼저 확인합니다.",
          s: "가동 중",
        },
        {
          k: "S6",
          t: "신뢰도 교정",
          d: "보호자의 새로운 답을 기존 기록에 다시 반영하고 다음 질문에 활용합니다.",
          s: "가동 중",
        },
      ],

      caseEyebrow: "A REAL USE CASE",
      caseH2: ["보호자의 말 한마디가", "다음 질문의 기준이 됩니다"],
      caseSub:
        "나중에 확인된 정보도 실제 변화가 시작된 시점으로 돌아가 기록합니다.",
      caseNote: "표시된 날짜는 실제 사건 시점이며, 숫자는 Loop 처리 순서입니다.",
      caseSteps: [
        {
          n: "①",
          when: "TODAY",
          t: "보호자가 말합니다",
          quote: "어제 자는데 많이 뒤척였어. 왜 그러지?",
          lines: [],
          chips: ["뒤척임", "밤", "최근", "마음이"],
          stage: "S1 보호자 입력 → S2 주요 요소 추출",
          retro: false,
        },
        {
          n: "②",
          when: "D+1",
          t: "AnimAI가 이전 걱정을 기억하고 묻습니다",
          quote:
            "어제 말씀하신 뒤척임 때문에 병원에는 다녀오셨나요? 처방전이나 진료기록이 있다면 보여주세요. 함께 기록해둘게요.",
          lines: ["보호자 — \u201C다리가 문제래. 일주일 전부터 조금씩 그랬던 것 같아.\u201D"],
          chips: [],
          stage: "S5 능동질의 → S6 보호자 답변",
          retro: false,
        },
        {
          n: "③",
          when: "D-7",
          retroLabel: "소급 정렬",
          t: "새로 알게 된 내용을 실제 시작 시점으로 돌려놓습니다",
          quote: "",
          lines: [
            "D+1에서 확인한 다리 통증, 시작 시점과 병원 기록을 D-7의 Lifetime Log에 다시 정리합니다.",
          ],
          chips: ["다리 통증", "시작 추정 · 7일 전", "병원 방문 확인", "처방전·진료기록 연결"],
          stage: "S2 → S3 → S4",
          retro: true,
        },
        {
          n: "④",
          when: "D+3",
          t: "생활신호도 같은 기록 위에서 확인합니다",
          quote: "최근 활동량이 평소보다 줄었어요. 지난번 다리 통증은 지금 괜찮아졌나요?",
          lines: [
            "태그가 연결된 이후 활동량 감소나 야간 움직임 증가가 관찰되면, 기존 Lifetime Log와 함께 확인합니다.",
          ],
          chips: [],
          stage: "웨어러블 신호 → Lifetime Log 확인 → S5 능동질의",
          retro: false,
        },
      ],
      caseQuote: [
        "AnimAI는 새로 알게 된 내용을 최신 정보로만 저장하지 않습니다.",
        "실제 변화가 시작된 시간으로 돌아가 이전 기록에 다시 연결합니다.",
      ],

      signalEyebrow: "SIGNAL LAYER",
      signalH2: ["보호자가 못 보는 시간의", "생활신호를 더합니다"],
      signalBody: [
        "대화 기반 Loop는 Care Tag가 없어도 작동합니다.",
        "Care Tag가 연결되면 행동과 수면 변화를 같은 Lifetime Log에 추가하고, 보호자의 설명과 함께 그 의미를 확인합니다.",
      ],
      signalItems: [
        {
          t: "Care Tag",
          d: "행동·수면 변화를 기록하는 BLE 웨어러블 신호원",
          s: "2026.08 · 1대 집중 테스트 진행 중",
          sub: "가속도계 · BLE",
        },
        {
          t: "Home Station",
          d: "보호자가 외출 중에도 집 안에서 Care Tag 신호 수집을 이어가기 위한 게이트",
          s: "구독 연계 수집 게이트 계획",
          sub: "",
        },
        {
          t: "Home Device",
          d: "배변량 · 급식량 · 체중 등 태그로 보기 어려운 집 안 생활신호",
          s: "2차 개발 예정",
          sub: "",
        },
      ],
      signalQuote: [
        "우리는 숫자를 보여주는 트래커를 만드는 것이 아닙니다.",
        "생활신호를 한 아이의 시간과 의미에 연결합니다.",
      ],

      briefEyebrow: "TECH BRIEF",
      briefH2: "센서 신호만으로 행동을 확정하지 않습니다",
      briefBody: [
        "Care Tag의 가속도계가 움직임 패턴을 감지하고, 보호자가 실제 행동을 확인하면 그 아이의 기준으로 다시 기록합니다.",
        "같은 움직임도 아이마다 다를 수 있기 때문에 파일럿 데이터와 보호자의 확인으로 판별 기준을 계속 보정합니다.",
      ],
      briefItems: [
        { t: "수면·휴식", d: "움직임 변화 · 자세" },
        { t: "걷기", d: "주기성 · 진폭" },
        { t: "뛰기·놀이", d: "고강도 · 불규칙 움직임" },
        { t: "몸 털기", d: "짧은 고강도 회전 진동" },
      ],
      briefNote:
        "* 대표 신호 패턴 예시 · 실제 판별 기준은 파일럿 데이터와 보호자 확인으로 계속 보정합니다.",

      moatEyebrow: "WHY IT GETS HARDER TO COPY",
      moatH2: ["차별점은 모델이 아니라,", "아이별 기준 데이터입니다"],
      moatSub:
        "모델과 센서는 살 수 있어도, 한 아이에게 쌓인 시간은 살 수 없습니다.",
      moatSteps: [
        { k: "1개월", t: "기본 정보와 자주 묻는 질문", d: "우리 아이에 대한 초기 기록이 쌓입니다." },
        { k: "6개월", t: "생활 패턴", d: "식사, 수면, 산책, 예민한 점이 보이기 시작합니다." },
        { k: "1년", t: "반복되는 변화", d: "변화와 보호자의 대응이 시간에 따라 남습니다." },
        { k: "평생", t: "아이별 기준 데이터", d: "기기·기록·AI가 우리 아이만의 누적 자산이 됩니다." },
      ],
      moatQuote: [
        "사용 기간이 길어질수록 Lifetime Log가 쌓이고,",
        "우리 아이의 기준도 더 정교해집니다.",
      ],

      ipH2: "Loop 관련 특허 3건 출원",
      ip: [
        {
          n: "01",
          t: "보호자의 말을 기록으로 바꾸는 구조",
          no: "출원 10-2026-0131258",
          s: "실제 코드 가동 중 · 2026.07~",
        },
        {
          n: "02",
          t: "상품 사용 후 변화를 다시 기록하는 구조",
          no: "출원 10-2026-0132350",
          s: "커머스로 이어지는 기반",
        },
        {
          n: "03",
          t: "상태에 맞는 시설을 연결하는 구조",
          no: "출원 10-2026-0132351",
          s: "B2B로 이어지는 기반",
        },
      ],
      ipNote: "* 3건 모두 출원 상태입니다.",

      guardH2: "AI는 진단하지 않습니다",
      guardBody: [
        "AnimAI는 수의사의 진단과 처방을 대신하지 않습니다.",
        "AnimAI가 하는 일은 보호자의 대화와 생활신호, 이전 기록을 바탕으로 평소와 다른 변화를 확인하고, 필요한 정보를 보호자가 더 잘 정리할 수 있도록 돕는 것입니다.",
        "진단과 치료가 필요한 경우에는 동물병원에서 수의사의 확인을 받도록 안내합니다.",
      ],

      ctaH2: ["시간이 쌓일수록,", "우리 아이의 기준이 정교해집니다"],
      ctaLead:
        "AnimAI는 보호자의 대화를 Lifetime Log에 쌓고, Care Tag의 생활신호를 같은 시간 위에 연결합니다.",
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
      tagline: "반려동물의 일상을 기록하고 건강과 보험으로 연결하는 AIoT",
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
      eyebrow: "PET HEALTH AIoT",
      h1: [
        "Everyday records that catch",
        "health changes earlier,",
        "and carry through to insurance",
      ],
      lead: [
        "Vitanima accumulates the activity and sleep changes the Care Tag observes, along with the caregiver's conversations and health records, into the Lifetime Log.",
        "It helps confirm what differs from the usual earlier, and makes that accumulated record usable for health care and insurance.",
      ],
      ctaPrimary: "Start with AnimAI",
      ctaSecondary: "How it works",

      heroFlow: [
        {
          k: "01",
          en: "CARE TAG",
          t: "It detects change",
          d: "Records activity and sleep changes from the hours a caregiver cannot see.",
        },
        {
          k: "02",
          en: "ANIMAI",
          t: "It asks and interprets",
          d: "Reads life signals alongside what the caregiver said, and confirms whether something differed from the usual.",
        },
        {
          k: "03",
          en: "LIFETIME LOG",
          t: "It records chronologically",
          d: "Conversation, life signals and health records build one animal's long-term record.",
        },
      ],
      heroFlowCenter:
        "Observed signals and the caregiver's account become one animal's Lifetime Log.",

      problemEyebrow: "WHY IT MATTERS",
      problemH2: ["Before the sick day,", "the small changes show first"],
      problemSub:
        "Treatment and insurance begin after something goes wrong. The changes accumulate before that.",
      problemLead: [
        "Clinic records and insurance records are mostly created after a problem appears.",
        "But the small changes — a day they ate less, a night they kept waking, a walk cut short — start earlier than that.",
      ],
      problemQuote:
        "So Vitanima records from the ordinary days, not the sick ones.",
      timelineLabel: "What is usually checked",
      timeline: ["Breed", "Age", "Medical history", "Policy & claim records"],
      timelineSubLabel: "What Vitanima records alongside",
      timelineSub:
        "Activity · sleep · meals · toileting · the caregiver's words · clinic records",
      timelineNew:
        "Continuously updated against the time actually accumulated for one animal.",

      prodEyebrow: "NOW AVAILABLE",
      prodTag: "Live",
      prodH2: "AnimAI",
      prodTagline: ["A companion animal AI engine", "connecting conversation and record"],
      prodBody: [
        "When a caregiver mentions a worry or a change, AnimAI finds what matters and records it at that point in the Lifetime Log.",
        "It reads earlier conversations and health records together, and asks again how a previous worry turned out.",
        "Once a Care Tag is connected, it also checks activity and sleep signals from the same hours.",
      ],
      prodNote:
        "Even without a Care Tag, the Lifetime Log keeps accumulating from conversation and health records.",
      prodLink: "More about AnimAI",
      iosBtn: "App Store",
      androidBtn: "Google Play",

      loopEyebrow: "THE LOOP",
      loopH2: [
        "AnimAI is not a chatbot.",
        "It is an engine that updates the record.",
      ],
      loopSub:
        "Rather than ending a conversation with an answer, it records what matters, connects it to earlier records, and uses it again in the next question.",
      loopCenter: ["Lifetime Log"],
      loopCenterSub: "One animal's lifetime record",
      loopCenterNote: "3 Loop-related patents filed · running in production",
      loopSteps: [
        { k: "01", t: "Caregiver input", d: "" },
        { k: "02", t: "Element extraction", d: "" },
        { k: "03", t: "Lifetime Log alignment", d: "" },
        { k: "04", t: "Accumulated history applied", d: "" },
        { k: "05", t: "Active enquiry", d: "" },
        { k: "06", t: "Confidence correction", d: "" },
      ],
      loopExampleQuote: "She keeps tossing and turning at night lately.",
      loopExampleRows: [
        { k: "Key elements", v: "Restlessness / night / recent days" },
        { k: "Lifetime Log", v: "Aligned to records from that period" },
        {
          k: "Next check-in",
          v: "Is the restlessness you mentioned yesterday continuing today?",
        },
      ],
      loopBody:
        "A caregiver's answer is not just a chat log. It adjusts the confidence of existing records and informs the next question.",
      loopLink: "More about the Loop",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["The hours you cannot see,", "the Care Tag records"],
      signalSub:
        "A BLE wearable tag that records activity and sleep changes.",
      signalBody: [
        "At home the Home Station collects Care Tag signals; while out, the caregiver's app does.",
        "When activity or sleep patterns differ from the usual, AnimAI checks the actual situation with the caregiver and records that account in the Lifetime Log.",
      ],
      signalQuote: [
        "The Care Tag does not stop at showing activity numbers.",
        "It connects life signals and the caregiver's account at the same point in time, into one animal's record.",
      ],
      signalTagAlt: "A dog and a cat wearing the Care Tag",
      signalTimeline: [
        { d: "Aug 2026", t: "Internal pilot in progress" },
        {
          d: "Sep–Oct 2026",
          t: "Pilot with 20 active users; ODM and KC certification begins",
        },
        { d: "NEXT", t: "Further pilots toward 300 units validated" },
        { d: "THEN", t: "Launch after validation" },
      ],
      signalTimelineNote:
        "After Pre-A, expansion to Home Devices for toileting, feeding and weight",
      signalLink: "More about the technology",

      insEyebrow: "FROM RECORD TO INSURANCE",
      insBadge: "Insurance comparison service in preparation",
      insH2: [
        "Comparing insurance that fits your animal,",
        "from the record already accumulated",
      ],
      insSub:
        "Not a comparison where you re-enter breed and age, but one that starts from your animal's existing record.",
      insItems: [
        {
          n: "01",
          t: "Quotes start from the record",
          d: "Breed, age, medical history and preventive care already in the Lifetime Log are reused.",
        },
        {
          n: "02",
          t: "Premiums and coverage compared together",
          d: "We are preparing a place to review multiple products and compare them against your animal.",
        },
        {
          n: "03",
          t: "Insurance history is recorded too",
          d: "Enrolment, claims and renewals reconnect to the Lifetime Log, so insurance history isn't managed separately.",
        },
      ],
      insFlow: [
        "Lifetime Log",
        "Comparison against your animal",
        "Enrolment",
        "Claims",
        "Renewal",
      ],
      insFlowBack: "Lifetime Log",
      insFlowNote:
        "Everyday records carry through, before and after enrolment.",
      insLink: "See how the insurance service is progressing",
      bizNote:
        "Partner pet businesses will expand as local touchpoints where caregivers can try the Care Tag in person.",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "It is already working",
      proofs: [
        { n: "2,142", l: "Users" },
        { n: "1,116", l: "Registered members" },
        { n: "420", l: "Lifetime Logs" },
        { n: "3", l: "Loop-related patents filed" },
      ],
      proofNote: "* As of 25 August 2026",

      trackH2: ["Now validating the Care Tag", "and the insurance channel"],
      trackLead:
        "We are adding the Care Tag to the live AnimAI and Lifetime Log, and validating whether real users' everyday records carry through to health care and insurance.",
      trackMetricsLabel: "NEXT 12 MONTHS",
      trackMetrics: [
        { n: "2,000", l: "Care Tag units, sales target" },
        { n: "750–1,000", l: "Paid observation subscriptions, target" },
        { n: "300", l: "Pet insurance enrolments, target" },
      ],
      trackNote:
        "* These are twelve-month targets, not current results.",
      trackLink: "The path we took",

      ctaH2: [
        "Everyday records carry through,",
        "from health care to insurance",
      ],
      ctaLead:
        "Vitanima accumulates an animal's life signals, the caregiver's conversations and health records into the Lifetime Log — confirming what differs from the usual, and building a record usable for insurance.",
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
        "Vitanima records the conversations and life signals that accumulate for one animal, building a Lifetime AIoT that understands them better as time passes.",
        "The device observes daily life, the Lifetime Log accumulates time, and AnimAI remembers that record and uses it again.",
      ],
      heroFlow: [
        { t: "Care Tag", d: "It observes daily life" },
        { t: "Lifetime Log", d: "It accumulates time" },
        { t: "AnimAI", d: "It uses the record again" },
      ],
      heroFlowCenter: "An AI that knows your animal better as time accumulates",

      missionLabel: "MISSION",
      mission: [
        "Record what is normal for one animal,",
        "and understand them better as time passes",
      ],
      missionBody:
        "Even at the same breed and age, temperament, preferences, allergies, habits and changes all differ. Vitanima builds technology that reads from the record actually accumulated for one animal, rather than from average information.",
      visionLabel: "VISION",
      vision: ["Every companion animal", "with a Lifetime AI of their own"],
      visionBody:
        "Not an AI that ends with what you entered once, but one where conversation and life signals continue for a lifetime, and that time feeds the next question and the next choice.",
      turnBody: [
        "More than any single answer,",
        "the time accumulated for one animal matters",
      ],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["Six dogs in,", "and the next one was new again"],
      whySub: "Even at the same breed, every animal was entirely different.",
      whyBody: [
        "Over thirty years with six dogs, we thought we knew. But each new arrival differed in temperament, allergies, preferences and how their health changed.",
        "What we learned from an earlier animal did not carry over to the next. From food to behaviour, clinics to daily routine, we had to search and ask all over again.",
        "For a caregiver it may be a few months of trial and error. In an animal's life, that is never a short time.",
      ],
      whyQuote:
        "Even with experience, the answer that fit our animal had to be found again.",
      whyLoop: [
        "Search",
        "Read reviews",
        "Try what people recommend",
        "Switch if it doesn't fit",
        "Search again",
      ],
      whyClose:
        "Vitanima began so that this experience carries into the next choice.",

      storyEyebrow: "OUR PATH",
      storyH2: "How we got here",
      storyLead: [
        "Vitanima did not start out in the companion animal industry.",
        "We met repeating problems first-hand on trade and logistics floors, and turned them into systems. Now we apply the same way of working so that one animal's time carries into the next choice.",
      ],
      story: [
        {
          y: "2018–2020",
          k: "FIELD",
          t: "We started on the ground",
          d: "On trade and international logistics floors, we solved problems face to face with customers. We learned how much time repeated checking, relaying and broken information take from a working day.",
          note: "GN Nuri · GN Logitech · GN Value Holdings",
        },
        {
          y: "2022–2023",
          k: "BUILD",
          t: "We turned what repeats into a system",
          d: "We built SaaS that handled repetitive logistics work in software, and learned how to make a system take over what people had been checking and relaying by hand.",
          note: "EasyLogi · logistics SaaS",
        },
        {
          y: "2026",
          k: "VITANIMA",
          t: "We met the same question again, living with animals",
          d: "What a caregiver already knew about their animal was not carrying into the next question or choice either. So we started Vitanima, turning what caregivers say into record and accumulating it, alongside life signals, on one animal's timeline.",
          note: "",
        },
        {
          y: "2026 · NOW",
          k: "EXECUTE",
          t: "We made it work before we talked about it",
          d: "AnimAI and the Lifetime Log are open to real users, with a B2B dashboard and infrastructure in place. We have filed three Loop-related patents and are running a focused single-unit pilot of the Care Tag.",
          note: "",
          metrics: [
            { n: "iOS · Android", l: "AnimAI launched" },
            { n: "3", l: "Loop-related patents filed" },
            { n: "Pilot", l: "Care Tag single-unit test" },
          ],
        },
      ],
      storyClose: ["The industry changed.", "The way we solve it did not."],
      storyCloseBody:
        "Have technology take over what users already know, and cut the time spent on what repeats. The industry may change; the way Vitanima solves problems does not.",

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
          t: "The more time accumulates, the better we should know",
          d: "Not a feature used once, but a service that understands your animal better as the record grows.",
        },
        {
          n: "04",
          t: "Build first, let results speak",
          d: "Rather than explain a plan, we build it and check against real user response and data.",
        },
      ],

      nameH2: "OUR NAME",
      nameLines: [
        { k: "VITA", v: "Life" },
        { k: "ANIMA", v: "Heart · spirit" },
      ],
      nameCompound: "VITANIMA",
      nameBody:
        "A name that holds our direction: to build technology that understands and remembers life for longer.",
      nameProductLabel: "AnimAI",
      nameProductSub: "The caregiver-facing AI service Vitanima builds",
      nameProductBody:
        "Vitanima is the company name; AnimAI is the name of the app and AI service caregivers use.",

      factsH2: "Corporate information",
      facts: [
        { k: "Legal name", v: "Vitanima Inc. (주식회사 비타니마)" },
        { k: "CEO", v: "Hunki Kim" },
        { k: "Field", v: "Companion animal Lifetime AIoT · data platform" },
        {
          k: "Products & services",
          v: "AnimAI · AnimAI Biz · Care Tag (pilot)",
        },
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
      historyNote:
        "* GN Nuri and below are prior businesses and founding experience, before Vitanima.",
      history: [
        {
          y: "2026–present",
          t: "Vitanima Inc.",
          d: "Building and running the companion animal AIoT, AnimAI",
          sub: "AnimAI · Lifetime Log live / Care Tag pilot",
        },
        {
          y: "2022–2023",
          t: "EasyLogi Inc.",
          d: "Logistics SaaS (now Vitanima)",
          sub: "",
        },
        {
          y: "2019–2025",
          t: "GN Logitech Inc.",
          d: "Logistics ODCY · import/export 3PL · warehouse & trucking",
          sub: "",
        },
        {
          y: "2019–2020",
          t: "GN Value Holdings Inc.",
          d: "Pet taxi brokerage platform",
          sub: "",
        },
        { y: "2018–2025", t: "GN Nuri", d: "Trade brokerage · Central Asia", sub: "" },
      ],

      ctaH2: ["Meet the Lifetime AIoT", "Vitanima is building"],
      ctaLead:
        "AnimAI and the Lifetime Log are already working with real users. Now we are connecting the Care Tag's life signals, so even the hours a caregiver cannot see become part of one animal's record.",
      ctaNote: "Home Device is planned as a future expansion.",
      ctaBtn: "About AnimAI",
      ctaBtn2: "Read from the CEO",
    },
    ceo: {
      eyebrow: "FOUNDER & CEO",
      kicker: "Finding problems on the ground, building and validating them myself.",
      h1: ["I look at the problem", "before the technology"],
      intro: [
        "Technology is a way to solve a problem.",
        "I look first at where people on the ground are spending their time. Then I build the recurring problem away myself, run it, and check it against how users respond.",
        "Vitanima started the same way.",
      ],
      name: "Hunki Kim",
      role: "CEO · Founder · Product · Engineering",

      startEyebrow: "THE STARTING POINT",
      startH2: ["Six dogs in,", "and the next one was new again"],
      startSub: "Even at the same breed, every animal was entirely different.",
      startBody: [
        "Over thirty years with six dogs, I thought I understood animals. But each new arrival differed in temperament, allergies, what they liked, and how their body responded.",
        "Losing our fifth to post-operative complications changed how I saw it. What I had learned before did not simply carry over to the next animal.",
        "From food to habits, behaviour to changes in health — with every new arrival I had to search and learn it all over again.",
      ],
      startQuote: [
        "Six animals' worth of experience did not",
        "carry over to the seventh",
      ],

      whyEyebrow: "WHY VITANIMA",
      whyH2: [
        "I wanted the AI to carry",
        "the experience I already had",
      ],
      whyBody: [
        "The caregiver has watched their animal longest and knows the most. Yet that experience had to be explained again whenever a conversation ended or a service changed.",
        "So rather than an AI that recommends the average, I decided to build one that keeps accumulating what a caregiver has said, and how life changes, on one animal's timeline.",
        "That became AnimAI and the Lifetime Log — and now we are connecting the Care Tag's life signals as well.",
      ],
      whyQuote: [
        "The goal is not to give more answers,",
        "but to reduce having to explain our animal again",
      ],

      execEyebrow: "EXECUTION BEFORE VITANIMA",
      execH2: ["I met the problems myself,", "and solved them as businesses"],
      execLead:
        "Before Vitanima, I repeatedly found problems on the ground and solved them through businesses and products of my own.",
      execMetrics: [
        { n: "4", l: "Companies founded before Vitanima" },
        { n: "7+ yrs", l: "Trade · international logistics" },
        { n: "₩7.0B", l: "Cumulative revenue, prior businesses" },
      ],
      execNote:
        "* Figures are for prior businesses run without outside investment, not Vitanima's revenue.",

      careerH2: "Career",
      career: [
        { y: "2018–2025", t: "GN Nuri", r: "Founder · CEO", d: "Trade brokerage · Central Asia" },
        {
          y: "2019–2025",
          t: "GN Logitech",
          r: "Founder · CEO",
          d: "Logistics ODCY · import/export 3PL · warehouse & trucking",
        },
        {
          y: "2019–2020",
          t: "GN Value Holdings",
          r: "Founder · CEO",
          d: "Pet taxi brokerage platform",
        },
        { y: "2022–2023", t: "EasyLogi", r: "Founder · CEO", d: "Logistics SaaS" },
        {
          y: "2026–present",
          t: "Vitanima",
          r: "CEO · Product · Engineering",
          d: "Building the companion animal Lifetime AIoT, AnimAI",
        },
      ],

      againEyebrow: "BUILDING AGAIN",
      againH2: [
        "I started again after an accident,",
        "and shipped a product within three months",
      ],
      againBody: [
        "An accident during EasyLogi ended the project and left me with a permanent disability. I founded again afterwards, and started Vitanima.",
        "Rather than explain an idea at length, I made it work first. AnimAI launched and opened to real users, and we keep developing the Lifetime Log and the Loop against how they respond.",
      ],

      firstEyebrow: "VITANIMA · FIRST 3 MONTHS",
      firstH2: [
        "From product and engineering to sales and pilot,",
        "I executed it directly",
      ],
      firstGrid: [
        { n: "01", t: "AnimAI launched", d: "iOS · Android" },
        { n: "02", t: "Lifetime Log · Loop", d: "Running in production" },
        { n: "03", t: "AnimAI Biz", d: "B2B dashboard built" },
        { n: "04", t: "3 patents", d: "Loop-related, filed" },
        { n: "05", t: "Early customers", d: "User acquisition · B2B sales" },
        { n: "06", t: "Care Tag", d: "Single-unit focused pilot" },
      ],
      firstNote:
        "Product, engineering, backend and infrastructure are still handled directly by the founder.",

      howEyebrow: "HOW I BUILD",
      howH2: ["Before the technology,", "I look at the problem and the user"],
      how: [
        {
          n: "01",
          en: "FIELD FIRST",
          t: "I start on the ground",
          d: "Rather than a problem assumed at a desk, I look first at what real users hit repeatedly.",
        },
        {
          n: "02",
          en: "BUILD FIRST",
          t: "I build it first",
          d: "Rather than explain, I build something that works and check it against how users respond.",
        },
        {
          n: "03",
          en: "KEEP LEARNING",
          t: "I keep changing it after launch",
          d: "A service is not finished at launch. I believe it has to get better as data and user response accumulate.",
        },
      ],

      globalEyebrow: "GLOBAL EXECUTION",
      globalH2: ["I can meet and execute", "in overseas markets directly"],
      global: [
        {
          k: "Education",
          t: "Ritsumeikan Asia Pacific University",
          d: "BA in International Management · based in Japan",
        },
        {
          k: "Communication",
          t: "Japanese · English",
          d: "Native-level communication in Japanese and English",
        },
        {
          k: "Business",
          t: "Trade · international logistics",
          d: "Experience with overseas partnerships and on-the-ground execution",
        },
      ],
      globalBody:
        "Early partner discovery and meetings in Japan will also be handled directly by the founder.",
      globalNote:
        "* Candidates across distribution, marketing, certification and investment/BD are under review; this does not indicate any current contract or formal partnership.",

      closeEyebrow: "FROM THE FOUNDER",
      closeH2: [
        "I will make sure the time accumulated",
        "for your animal does not disappear",
      ],
      closeBody: [
        "We are building so that an experience a caregiver mentions once carries into the next question, and so that life signals recorded by a device remain alongside the situation they came from.",
        "An AI that understands an animal better as their record accumulates over a month, a year, a lifetime. That is the Lifetime AIoT Vitanima is building.",
      ],
      sign: "Hunki Kim, CEO, Vitanima Inc.",

      ctaH2: "See AnimAI, already working",
      ctaBtn: "About AnimAI",
      ctaBtn2: "About the company",
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "Live",
      h1: "AnimAI",
      tagline: ["Starts with conversation,", "accumulates one animal's time"],
      lead: [
        "When a caregiver mentions a worry or a change, it accumulates in the Lifetime Log in chronological order.",
        "AnimAI looks at earlier records, asks again, and folds each newly confirmed answer back in. Once a Care Tag is connected, it also sees activity and sleep signals from the same hours.",
      ],
      leadNote:
        "Even without a Care Tag, the Lifetime Log keeps accumulating from conversation alone.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: [
        "AnimAI · Lifetime Log · conversation-based Loop live",
        "Care Tag · focused single-unit test in progress, Aug 2026",
      ],

      whyH2: "Why we built it",
      whyLead: ["The same change,", "for entirely different reasons"],
      whySub:
        "Without knowing your animal's reason, an AI ends up giving an average answer.",
      whyBody: [
        "The same 'drop in activity' could mean rain kept them from a walk, or they are resting after an active day, or something is wrong. It differs with every animal.",
        "Numbers and a single question rarely reveal the reason. So AnimAI reads what the caregiver said alongside the earlier record.",
      ],
      whyQuote: [
        "Instead of looking at the average,",
        "we look at what has accumulated for your animal",
      ],

      featureH2: "What AnimAI helps with",
      features: [
        {
          t: "Understand a new animal sooner",
          d: "Less time relearning temperament, preferences, allergies and habits from scratch.",
        },
        {
          t: "Notice changes from the usual earlier",
          d: "Activity, sleep and meals that differ from the usual, read alongside earlier records.",
        },
        {
          t: "What your animal needs now",
          d: "Not age and breed alone — preferences, daily life and past reactions help with choosing products, food and treats.",
        },
        {
          t: "Services that suit your animal",
          d: "Helps find clinics, groomers, hotels and daycares that suit their temperament and routine.",
        },
      ],
      subFeatures: [
        {
          t: "Find & book facilities",
          d: "Find groomers, daycares, hotels and clinics, and continue to booking or enquiry.",
        },
        {
          t: "Caregiver community",
          d: "See how other caregivers handled similar worries, and share your animal's story.",
        },
      ],

      flowEyebrow: "HOW IT WORKS",
      flowH2: ["One conversation becomes", "the basis for the next question"],
      flowSteps: [
        {
          n: "01",
          label: "You speak",
          badge: "",
          main: "She keeps tossing and turning at night lately.",
          isQuote: true,
          sub: "The caregiver mentions a worry or a change.",
        },
        {
          n: "02",
          label: "It records",
          badge: "LIFETIME LOG",
          main: "Restlessness · night · recent days",
          isQuote: false,
          sub: "What was said is organised into the record for that period, and read with earlier conversations and health records.",
        },
        {
          n: "03",
          label: "It asks again",
          badge: "ANIMAI",
          main: "Is the restlessness you mentioned yesterday continuing today?",
          isQuote: true,
          sub: "You don't have to raise it again — it checks first, from the earlier record.",
        },
      ],
      flowBody:
        "AnimAI does not store one answer and stop. It folds what is newly confirmed into the earlier record, and uses it again in the next question.",
      flowChain: ["Speak", "Remember", "Ask again", "Know better"],

      logEyebrow: "LIFETIME LOG",
      logH2: ["Conversation and records", "become one animal's timeline"],
      logBody: [
        "The Lifetime Log is your animal's lifetime record, where conversation, life signals and health records accumulate over time.",
        "When something new is confirmed, it isn't simply saved as the latest state — it reconnects to when the change actually began and to the earlier record.",
      ],
      logInputs: [
        { t: "Conversation", d: "Worries and changes the caregiver mentions" },
        { t: "Life signals", d: "Behaviour and sleep changes from the Care Tag" },
        { t: "Health records", d: "Clinic records, prescriptions and more" },
      ],
      logResult: "Lifetime Log",
      logResultSub: "One animal's lifetime record",
      logQuote:
        "As time accumulates, a baseline unique to your animal takes shape.",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["The hours you cannot see,", "the Care Tag records"],
      signalSub:
        "The first product is a BLE wearable tag that records behaviour and sleep changes.",
      signalBody: [
        "Caregivers know their animals best, but nobody can watch all 24 hours.",
        "As the Care Tag records behaviour and sleep changes, AnimAI reads those signals in the same Lifetime Log as the caregiver's conversation.",
      ],
      signalQuote: [
        "The Care Tag does not stop at showing numbers.",
        "It connects life signals, with the caregiver's account, into one animal's record.",
      ],
      signalTagAlt: "A dog and a cat wearing the Care Tag",
      signalTimeline: [
        { d: "Aug 2026", t: "Focused test on one unit, in progress" },
        { d: "Sep 2026", t: "Pilot starting with 30 highly active users" },
        { d: "NEXT", t: "Phased expansion up to 200 units" },
        { d: "THEN", t: "Commercialisation once validation criteria are met" },
      ],
      signalTimelineNote:
        "Once validation criteria are met, launch follows ODM, certification and packaging.",
      signalHomeNote:
        "Planned for second-phase development · expanding signal sources to Home Devices for toileting, feeding and weight.",

      subEyebrow: "OBSERVATION SUBSCRIPTION",
      subH2: ["The Care Tag's records", "continue as ongoing observation"],
      subBody:
        "Building on the Care Tag and the Lifetime Log, we are preparing an observation subscription that keeps checking what differs from the usual.",
      subNote:
        "Planned at ₩3,000/month · pricing and composition are current plans.",

      bizH2: "AnimAI Biz",
      bizBadge: "LIVE",
      bizTagline: [
        "Bookings, customers, payments and care notes",
        "managed on one screen",
      ],
      bizBody: [
        "AnimAI Biz manages bookings, customers, payments and floor operations for groomers, daycares, hotels and clinics on a single screen.",
        "It doesn't stop at cutting admin work — it exposes the business to AnimAI caregivers and connects to the app.",
      ],
      bizFeatures: [
        "Bookings & customers",
        "Payments",
        "AI care notes",
        "Listing exposure & AI automation",
        "AnimAI app integration",
      ],
      bizFeaturesSub: ["Passes & vouchers", "AI marketing"],
      bizFlow: [
        "Find a facility in AnimAI",
        "Book or enquire",
        "Customer appears on the dashboard",
        "Service visit",
        "Pay on site",
        "Connected back to the app",
      ],
      bizLink: "About AnimAI Biz",

      ctaH2: ["As time accumulates,", "you know your animal better"],
      ctaLead:
        "AnimAI accumulates a caregiver's conversation into the Lifetime Log, remembers earlier records and asks again. Once the Care Tag's life signals connect, the hours you couldn't watch continue on that same record.",
      ctaBtn: "Start with AnimAI",
      ctaBtn2: "More about the technology",
    },
    tech: {
      eyebrow: "TECHNOLOGY",
      h1: ["Connecting device and conversation", "on one animal's timeline"],
      lead: [
        "A sensor can record that something changed. Why it changed is hard to know without the context of daily life.",
        "AnimAI first accumulates the caregiver's conversation and health records in the Lifetime Log, then connects the Care Tag's life signals onto the same timeline.",
      ],
      leadNote:
        "The sensor records 'what changed'; the caregiver's answer fills in 'why'.",
      heroBeforeLabel: "Conventional",
      heroBefore: ["Life signal", "Pattern detection", "Compared to a general baseline"],
      heroAfterLabel: "VITANIMA",
      heroAfter: ["The caregiver speaks", "Lifetime Log", "Life signals connected"],
      heroAfterNote: "Record → history applied → next question",

      realEyebrow: "THE REAL PROBLEM",
      realH2: ["Signals alone can't tell you", "why"],
      realCase: [
        {
          k: "What the sensor saw",
          v: "Activity down 20%",
          sub: "",
          extra: [],
          tone: "neutral",
        },
        {
          k: "AI without a per-animal record",
          v: "A change that can occur in dogs of this age.",
          sub: "An answer close to the average",
          extra: [],
          tone: "old",
        },
        {
          k: "What the caregiver knows",
          v: "She vomited yesterday, so I let her rest today.",
          sub: "",
          extra: [
            "It rained, so we skipped the walk.",
            "Her leg hurt, so we went to the clinic.",
          ],
          tone: "new",
        },
      ],
      realBody: [
        "The same 'activity down 20%' can mean entirely different things depending on the animal and the situation.",
        "A sensor tells you something changed. It cannot settle the reason on its own.",
      ],
      realQuote: [
        "The problem is not the volume of signal,",
        "but what that signal means for your animal.",
      ],

      invH2: [
        "Putting a caregiver's words and life signals",
        "on the same timeline",
      ],
      invBeforeLabel: "Conventional",
      invBefore: [
        "Collect signals",
        "Detect a pattern",
        "Compare to a general baseline",
      ],
      invAfterLabel: "VITANIMA",
      invAfter: [
        { t: "The caregiver speaks", s: "" },
        { t: "Key elements are identified", s: "Symptom · time · subject · behaviour" },
        { t: "Recorded chronologically in the Lifetime Log", s: "" },
        { t: "Connected to earlier records and related signals", s: "" },
      ],
      invBody: [
        "From natural speech we identify symptom, time, subject and behaviour, and record it at the corresponding point in the Lifetime Log.",
        "Once a Care Tag is connected, activity and sleep signals from the same period are aligned alongside.",
      ],

      loopEyebrow: "THE LOOP",
      loopH2: ["The record comes back", "as the next question"],
      loopBody: [
        "AnimAI does not end with one question and one answer.",
        "What the caregiver said is recorded against time and read together with earlier conversations and health records, updating our understanding of that animal.",
        "Each newly confirmed answer folds back into the Lifetime Log, and where needed AnimAI checks first.",
      ],
      loopCenter: ["Lifetime Log"],
      loopCenterSub: "One animal's lifetime record",
      loopCenterNote: "3 Loop-related patents filed",
      loopStatus: "S1–S6 currently running, conversation-based",
      loopStatusNote:
        "Once a Care Tag is connected, activity and sleep signals join S3, and S2–S5 are refined against real pilot data.",
      loopSteps: [
        { k: "S1", t: "Caregiver input", d: "The caregiver mentions a worry or a change.", s: "Live" },
        {
          k: "S2",
          t: "Element extraction",
          d: "Symptom, time, subject and behaviour — the elements a record needs.",
          s: "Live",
        },
        {
          k: "S3",
          t: "Lifetime Log alignment",
          d: "Conversation and health records are organised at that point in time; once a tag is connected, activity and sleep signals from the same period align alongside.",
          s: "Live",
          sub: "Tag signal expanding",
        },
        {
          k: "S4",
          t: "Accumulated history applied",
          d: "Earlier conversations, health records and changes are read together to update that animal's state and record.",
          s: "Live",
        },
        {
          k: "S5",
          t: "Active enquiry",
          d: "From earlier records and changes, AnimAI checks what it needs first.",
          s: "Live",
        },
        {
          k: "S6",
          t: "Confidence correction",
          d: "The caregiver's new answer folds back into the record and informs the next question.",
          s: "Live",
        },
      ],

      caseEyebrow: "A REAL USE CASE",
      caseH2: ["A single remark becomes", "the basis for the next question"],
      caseSub:
        "Information confirmed later is recorded back at the point the change actually began.",
      caseNote:
        "Dates mark when events happened; numbers mark the order of Loop processing.",
      caseSteps: [
        {
          n: "①",
          when: "TODAY",
          t: "The caregiver speaks",
          quote: "She was really restless in her sleep last night. Why would that be?",
          lines: [],
          chips: ["Restlessness", "Night", "Recently", "Maeum"],
          stage: "S1 caregiver input → S2 element extraction",
          retro: false,
        },
        {
          n: "②",
          when: "D+1",
          t: "AnimAI remembers the earlier worry and asks",
          quote:
            "Did you visit the clinic about the restlessness you mentioned? If you have a prescription or records, share them and I'll keep them together.",
          lines: [
            "Caregiver — \u201CIt's her leg. I think it started about a week ago.\u201D",
          ],
          chips: [],
          stage: "S5 active enquiry → S6 caregiver answer",
          retro: false,
        },
        {
          n: "③",
          when: "D-7",
          retroLabel: "Retroactive alignment",
          t: "The new information is placed back at the actual starting point",
          quote: "",
          lines: [
            "The leg pain confirmed at D+1, its estimated onset and the clinic record are organised back into the Lifetime Log at D-7.",
          ],
          chips: [
            "Leg pain",
            "Onset estimated · 7 days ago",
            "Clinic visit confirmed",
            "Prescription & records linked",
          ],
          stage: "S2 → S3 → S4",
          retro: true,
        },
        {
          n: "④",
          when: "D+3",
          t: "Life signals are read on the same record",
          quote:
            "Activity has been lower than usual recently. Is the leg pain from before doing better now?",
          lines: [
            "Once a tag is connected, drops in activity or increased night movement are read together with the existing Lifetime Log.",
          ],
          chips: [],
          stage: "Wearable signal → Lifetime Log → S5 active enquiry",
          retro: false,
        },
      ],
      caseQuote: [
        "AnimAI does not store new information only as the latest state.",
        "It goes back to when the change began and reconnects it to the earlier record.",
      ],

      signalEyebrow: "SIGNAL LAYER",
      signalH2: ["Adding life signals from", "the hours you cannot see"],
      signalBody: [
        "The conversation-based Loop works without a Care Tag.",
        "Once connected, behaviour and sleep changes join the same Lifetime Log, and their meaning is confirmed alongside the caregiver's account.",
      ],
      signalItems: [
        {
          t: "Care Tag",
          d: "A BLE wearable signal source recording behaviour and sleep changes",
          s: "Aug 2026 · focused single-unit test in progress",
          sub: "Accelerometer · BLE",
        },
        {
          t: "Home Station",
          d: "A gate to continue collecting Care Tag signals at home while the caregiver is out",
          s: "Planned as a subscription-linked collection gate",
          sub: "",
        },
        {
          t: "Home Device",
          d: "Toileting, feeding and weight — signals a tag cannot easily see",
          s: "Planned for second-phase development",
          sub: "",
        },
      ],
      signalQuote: [
        "We are not building a tracker that shows numbers.",
        "We connect life signals to one animal's time and meaning.",
      ],

      briefEyebrow: "TECH BRIEF",
      briefH2: "We do not settle behaviour from sensor signal alone",
      briefBody: [
        "The Care Tag's accelerometer detects movement patterns; when the caregiver confirms the actual behaviour, it is recorded against that animal's own baseline.",
        "The same movement can differ between animals, so detection criteria are continuously corrected with pilot data and caregiver confirmation.",
      ],
      briefItems: [
        { t: "Sleep · rest", d: "Movement variation · posture" },
        { t: "Walking", d: "Periodicity · amplitude" },
        { t: "Running · play", d: "High intensity · irregular movement" },
        { t: "Shaking off", d: "Short, high-intensity rotational vibration" },
      ],
      briefNote:
        "* Representative signal patterns · actual detection criteria are continuously corrected with pilot data and caregiver confirmation.",

      moatEyebrow: "WHY IT GETS HARDER TO COPY",
      moatH2: ["The difference is not the model,", "but per-animal baseline data"],
      moatSub:
        "You can buy models and sensors. You cannot buy the time accumulated for one animal.",
      moatSteps: [
        {
          k: "1 month",
          t: "Basic information and frequent questions",
          d: "Early records about your animal accumulate.",
        },
        {
          k: "6 months",
          t: "Patterns of daily life",
          d: "Meals, sleep, walks and sensitivities begin to show.",
        },
        {
          k: "1 year",
          t: "Recurring changes",
          d: "Changes and the caregiver's responses remain across time.",
        },
        {
          k: "Lifetime",
          t: "Per-animal baseline data",
          d: "Device, record and AI become an asset unique to your animal.",
        },
      ],
      moatQuote: [
        "The longer it is used, the more the Lifetime Log accumulates —",
        "and the more precise your animal's baseline becomes.",
      ],

      ipH2: "3 Loop-related patents filed",
      ip: [
        {
          n: "01",
          t: "Turning a caregiver's words into record",
          no: "Filed 10-2026-0131258",
          s: "Running in production · from Jul 2026",
        },
        {
          n: "02",
          t: "Recording change after product use",
          no: "Filed 10-2026-0132350",
          s: "Foundation for commerce",
        },
        {
          n: "03",
          t: "Connecting facilities suited to a state",
          no: "Filed 10-2026-0132351",
          s: "Foundation for B2B",
        },
      ],
      ipNote: "* All three are at filing stage.",

      guardH2: "The AI does not diagnose",
      guardBody: [
        "AnimAI does not stand in for a veterinarian's diagnosis or prescription.",
        "What AnimAI does is confirm what differs from the usual, drawing on conversation, life signals and earlier records, and help the caregiver organise the information that matters.",
        "Where diagnosis or treatment is needed, it guides the caregiver to have a veterinarian check at a clinic.",
      ],

      ctaH2: ["As time accumulates,", "your animal's baseline grows more precise"],
      ctaLead:
        "AnimAI accumulates the caregiver's conversation in the Lifetime Log, and connects the Care Tag's life signals onto the same timeline.",
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
      tagline: "Recording everyday life, connecting health and insurance",
      product: "Services",
      company: "Company",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Dict = (typeof dict)["ko"];
export const getDict = (lang: Lang): Dict => dict[lang] as unknown as Dict;
