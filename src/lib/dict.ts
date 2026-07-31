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
      h1: "회사",
      lead:
        "비타니마는 반려동물 AI 회사입니다. 말하지 못하는 아이를 대신해, 곁에 있는 사람의 말을 기록으로 바꾸는 일을 합니다.",

      missionLabel: "미션",
      mission: "말하지 못하는 반려동물을, 세상에서 가장 잘 아는 기술을 만든다",
      visionLabel: "비전",
      vision: "모든 아이가 자기만의 기록을 갖는 것",
      missionBody:
        "평균을 팔던 시장에서, 한 마리를 학습하는 회사. 이것이 비타니마의 자리입니다. 어려운 부분은 우리가 맡고 보호자에게는 결과만 남기는 것 — 산업의 구조를 이렇게 다시 짜는 방식을 우리는 AX라고 부릅니다. 반려동물은 그 방식이 가장 필요한 자리였습니다.",

      storyEyebrow: "OUR PATH",
      storyH2: "여기까지 온 길",
      storyLead:
        "비타니마의 방법은 책상에서 나온 것이 아닙니다. 물류 현장에서 같은 모양의 문제를 만났고, 한 번 풀어봤고, 그 방법을 지금 반려동물에서 다시 쓰고 있습니다.",
      story: [
        {
          y: "2019",
          k: "01",
          t: "현장에 있었습니다",
          d: "창고와 차량을 직접 운영하는 수출입 3PL을 했습니다. 그곳에서 매일 본 것은 전화와 팩스와 이메일이었습니다. 트럭 기사는 하루 2시간 30분을 일하고 4시간을 기다렸는데, 그 4시간은 어느 시스템에도 남지 않았습니다. 현장에 있는 사람만 아는 정보가 시스템 밖에 있었습니다.",
        },
        {
          y: "2022",
          k: "02",
          t: "구조를 바꿔봤습니다",
          d: "㈜이지로지를 세워, 흩어져 있던 내륙운송 과정을 한곳으로 모으고 현황을 자동으로 공유하는 시스템을 만들었습니다. 어려운 부분을 우리가 떠안고 쓰는 쪽에는 결과만 남기는 방식이었습니다.",
          metrics: [
            { n: "83%", l: "포워더사 관리 업무 단축" },
            { n: "71%", l: "불필요한 대기 시간 단축" },
            { n: "17%", l: "내륙운송 비용 절감" },
          ],
          note: "포워더 고객사 150곳 · 450개 프로젝트 파일럿 결과. 이용 고객사 설문에서 슈퍼휴먼 PMF 83%, 정식 출시 시 사용 희망 94%.",
          learn:
            "여기서 확인한 것은 기능이 아니라 방향이었습니다. 복잡함을 만드는 쪽이 떠안으면, 쓰는 사람의 하루가 실제로 바뀐다는 것.",
        },
        {
          y: "2026",
          k: "03",
          t: "같은 방법을, 다른 현장에서",
          d: "2023년, 개인적인 사정으로 이지로지를 끝까지 가져가지 못했습니다. 물류를 정리하면서 오래 마음에 두고 있던 문제로 방향을 돌렸습니다. 두 마리와 함께 살면서 계속 이상하다고 생각하던 것이 있었습니다. 우리 아이가 어떤지 알 방법이 병원에 가는 것뿐이라는 것. 매일 곁에 있는 사람은 저인데, 남는 기록은 아팠던 날뿐이었습니다. 물류에서 검증한 방법을 그대로 가져와 AnimAI를 만들었습니다.",
        },
      ],
      storyClose:
        "현장이 달라졌을 뿐 방법은 같습니다. 시스템 밖에 있던 사람의 말을 안으로 들이고, 어려운 부분은 우리가 맡는 것.",

      valuesH2: "우리가 지키는 것",
      values: [
        {
          n: "01",
          t: "현장에서 시작한다",
          d: "책상에서 정의한 문제는 대체로 틀립니다. 쓰는 사람 옆에서 본 것만 문제로 인정합니다.",
        },
        {
          n: "02",
          t: "복잡함은 우리가 삼킨다",
          d: "어려운 부분을 사용자에게 넘기지 않습니다. 우리 쪽이 복잡해지는 것을 선택합니다.",
        },
        {
          n: "03",
          t: "오래 남을 것을 만든다",
          d: "유행하는 기능이 아니라, 시간이 지날수록 값이 커지는 기록과 관계를 만듭니다.",
        },
        {
          n: "04",
          t: "만들고 나서 말한다",
          d: "계획을 발표하기보다 돌아가는 것을 먼저 내놓습니다.",
        },
      ],

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

      nameH2: "이름",
      nameBody:
        "Vita(생명)와 Anima(영혼)를 붙였습니다. 살아 있다는 것, 그리고 그것을 살아 있게 하는 것. 이름이 곧 우리가 하는 일입니다. 서비스 이름 AnimAI도 여기서 나왔습니다 — Anima에서 AI로.",

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
      name: "김훈기",
      role: "대표이사 · Founder",
      greetingLead:
        "저는 기술을 먼저 배운 사람이 아니라, 현장을 먼저 겪은 사람입니다.",
      greeting: [
        "7년 동안 네 번 창업했습니다. 무역중개로 시작해 창고와 차량을 직접 굴리는 물류 회사를 운영했고, 세 개 법인에서 누적 70억 원의 매출을 만들었습니다. 외부 투자는 받지 않았습니다.",
        "그 시간 동안 배운 것은 기술이 아니라 사람이 어디서 막히는지였습니다. 매출이 멈춰도 임대료와 차량과 인건비는 매달 나갔습니다. 2020년에는 코로나가, 2022년에는 전쟁이 왔고 계획은 두 번 다 깨졌습니다. 두 번 다 숫자를 만들어냈습니다. 그때 알게 된 것은 산업의 어려움이 대부분 기술의 문제가 아니라 구조의 문제라는 사실이었습니다.",
        "2022년에는 그 생각을 실제로 시험해봤습니다. ㈜이지로지를 세워 흩어져 있던 내륙운송 과정을 한곳으로 모으고, 현황이 자동으로 공유되게 만들었습니다. 포워더 고객사 150곳과 450개 프로젝트를 대상으로 한 파일럿에서 관리 업무는 83%, 불필요한 대기 시간은 71% 줄었습니다. 기능이 뛰어나서가 아니라, 어려운 부분을 우리 쪽이 떠안았기 때문이었습니다.",
        "비타니마를 시작한 이유도 같습니다. 반려동물을 키우면서, 우리 아이가 어떤지 알 방법이 병원에 가는 것뿐이라는 게 이상했습니다. 매일 곁에 있는 사람은 저인데, 남는 기록은 아팠던 날뿐이었습니다. 어려운 건 보호자가 감당하고 있었습니다.",
        "AI가 그 자리를 대신할 수 있다고 생각합니다. 사람이 전문 지식을 배우지 않아도, 절차를 익히지 않아도, 평소 하던 말만으로 결과를 얻을 수 있게 하는 것. 그렇게 산업의 구조를 다시 짜는 일을 AX라고 부르고, 저는 그 방법을 반려동물에 쓰기로 했습니다.",
        "지금은 기획과 개발과 운영을 직접 합니다. 만들어놓고 이야기하는 편을 택했습니다. AnimAI는 이미 운영 중이고, 매일 쓰는 분들이 계십니다. 다음 이야기는 그다음에 드리겠습니다.",
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
      tagline: "우리 아이를 기억하는 AI",
      lead:
        "반려동물 보호자를 위한 앱입니다. 매일 하는 말과 기록이 그 아이만의 데이터가 되고, 시간이 지날수록 그 아이에 대해서만 정확해집니다.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",

      whyH2: "왜 만들었나",
      whyTime:
        "아이의 시간은 우리보다 훨씬 빠르게 흐릅니다. 그래서 시행착오로 흘려보내는 몇 달이 아깝습니다.",
      whyBefore: "우리 아이가 어떤지 알려면 병원에 가야 했습니다.",
      whyBody:
        "매일 곁에 있는 사람은 보호자인데, 남는 기록은 아팠던 날뿐이었습니다. 그사이의 평범한 하루가 사실은 가장 중요한 데이터인데도 어디에도 쌓이지 않았습니다. AnimAI는 보호자가 원래 하던 말을 그대로 기록으로 바꿉니다. 따로 배우거나 입력할 것이 없습니다.",

      featureH2: "무엇을 하나",
      features: [
        {
          t: "매일의 기록",
          d: "사진 한 장과 한 줄이면 그날이 남습니다. 쌓이면 그 아이의 일대기가 됩니다.",
        },
        {
          t: "전담 AI 상담",
          d: "우리 아이를 아는 AI가 답합니다. 진단이 필요한 질문은 가까운 동물병원으로 연결합니다.",
        },
        {
          t: "매일의 맞춤 추천",
          d: "그 아이의 상태와 그날의 기록을 바탕으로 오늘 볼 것을 골라 드립니다.",
        },
        {
          t: "건강과 일정",
          d: "예방접종 · 구충 · 검진 일정을 챙기고, 체중과 사료량을 종에 맞게 계산합니다.",
        },
        {
          t: "동네 시설과 예약",
          d: "미용 · 유치원 · 호텔 · 병원을 찾고 앱에서 바로 예약합니다.",
        },
        {
          t: "보호자 커뮤니티",
          d: "같은 고민을 하는 이웃들의 하루를 보고, 우리 아이 이야기를 남깁니다.",
        },
      ],

      bizH2: "AnimAI Biz",
      bizTagline: "반려동물 사업자를 위한 대시보드",
      bizBody:
        "미용실 · 유치원 · 호텔 · 병원이 예약과 고객을 관리하는 웹 도구입니다. 무료로 시작할 수 있고, 앱에서 들어오는 예약이 그대로 연결됩니다.",
      bizLink: "gangji-manage.kr",

      roadH2: "앞으로",
      roadNote:
        "순서는 매출 크기가 아니라 의존 관계입니다. 앞의 둘이 신호와 공급을 만들고, 뒤의 셋이 그 위에 섭니다.",
      road: [
        {
          n: "01",
          role: "신호",
          t: "웨어러블 태그",
          d: "아이의 하루를 24시간 해상도로 받습니다. 지금도 앱과 스마트폰 센서로 신호를 받고 있고, 태그는 그 해상도를 올리는 장치입니다.",
        },
        {
          n: "02",
          role: "공급",
          t: "사업자 대시보드",
          d: "오프라인 접점이자 유통망. 현재 운영 중입니다.",
        },
        {
          n: "03",
          role: "확장",
          t: "맞춤 커머스",
          d: "그 아이에게 맞는 상품만 제안하고, 구매 이후의 변화를 다시 받아 확인합니다.",
        },
        {
          n: "04",
          role: "확장",
          t: "보험 중개",
          d: "생애 기록이 쌓인 개체는 보험이 가장 필요한 시점을 압니다.",
        },
        {
          n: "05",
          role: "확장",
          t: "노령 집중 케어",
          d: "관찰 주기를 좁히고 병원과 나눌 기록을 정리해 드립니다.",
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
      h1: "같이 만들 사람을 찾습니다",
      lead:
        "비타니마는 작은 팀입니다. 그래서 한 사람이 맡는 범위가 넓고, 만든 것이 바로 사용자에게 갑니다.",

      whyH2: "여기서 일한다는 것",
      why: [
        {
          t: "만든 게 다음 주에 돌아간다",
          d: "결재 단계가 없습니다. 아침에 정한 것이 저녁에 배포되는 일이 흔합니다.",
        },
        {
          t: "쓰는 사람을 직접 본다",
          d: "사용자 문의를 팀원이 직접 읽습니다. 중간에 요약해주는 사람이 없습니다.",
        },
        {
          t: "범위를 스스로 정한다",
          d: "무엇을 만들지까지 같이 정합니다. 시킨 것만 하는 자리는 없습니다.",
        },
      ],

      lookH2: "이런 분을 찾습니다",
      roles: [
        {
          t: "프로덕트 엔지니어",
          s: "React Native · TypeScript",
          d: "앱 전반을 함께 만듭니다. 화면 하나를 처음부터 끝까지 책임지는 일에 익숙하신 분.",
        },
        {
          t: "AI 엔지니어",
          s: "LLM · 데이터 파이프라인",
          d: "말에서 의미를 뽑아내는 부분을 맡습니다. 프롬프트 설계와 평가 체계를 같이 만듭니다.",
        },
        {
          t: "프로덕트 디자이너",
          s: "UX · UI",
          d: "복잡한 것을 덜어내는 일을 좋아하시는 분. 직접 만드는 것까지 하시면 더 좋습니다.",
        },
        {
          t: "사업 개발",
          s: "제휴 · 오프라인",
          d: "반려동물 시설과 브랜드를 직접 만나 연결합니다. 현장을 즐기시는 분.",
        },
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
      h1: "문의",
      lead:
        "어떤 용건이든 아래 주소 한 통이면 닿습니다. 영업일 기준 2일 안에 답장드립니다.",
      emailLabel: "이메일",
      phoneLabel: "전화",
      types: [
        { t: "투자 · IR", d: "라운드 관련 자료는 요청 주시면 개별 전달드립니다." },
        { t: "사업 제휴", d: "상품 · 시설 · 보험 · 데이터 협업." },
        { t: "시설 입점", d: "대시보드는 무료로 시작할 수 있습니다." },
        { t: "취재 · 채용", d: "인터뷰 요청과 지원은 같은 주소로 보내주세요." },
      ],
      infoH2: "회사 정보",
      mailBtn: "메일 보내기",
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
      h1: "Company",
      lead:
        "Vitanima is a companion animal AI company. On behalf of an animal that cannot speak, we turn what the person beside them says into a record.",

      missionLabel: "Mission",
      mission:
        "Build the technology that understands animals who cannot speak, better than anything else",
      visionLabel: "Vision",
      vision: "Every animal with a record of their own",
      missionBody:
        "A market that sold the average; a company that learns one animal. We take on the hard part and leave the caregiver with the result — rebuilding an industry's structure this way is what we call AX. Companion animals was the field that needed it most.",

      storyEyebrow: "OUR PATH",
      storyH2: "How we got here",
      storyLead:
        "Our method didn't come from a desk. We met the same problem on a logistics floor, solved it once there, and are now applying it in the companion animal field.",
      story: [
        {
          y: "2019",
          k: "01",
          t: "We were on the floor",
          d: "We ran an import/export 3PL with our own warehouse and trucks. What we saw every day was phone calls, faxes and email. A driver would work two and a half hours and wait four — and those four hours appeared in no system anywhere. What only the people on the floor knew was sitting outside the system.",
        },
        {
          y: "2022",
          k: "02",
          t: "We rebuilt the structure",
          d: "We founded EasyLogi to pull the scattered inland haulage process into one place and share status automatically. We took on the hard part and left the people using it with the result.",
          metrics: [
            { n: "83%", l: "Less admin time for forwarders" },
            { n: "71%", l: "Less unnecessary waiting" },
            { n: "17%", l: "Lower inland haulage cost" },
          ],
          note: "From a pilot across 150 forwarder clients and 450 projects. In a customer survey, 83% Superhuman PMF and 94% intent to use at launch.",
          learn:
            "What that confirmed wasn't a feature set. It was a direction: when the side creating the complexity absorbs it, the user's day actually changes.",
        },
        {
          y: "2026",
          k: "03",
          t: "The same method, a different field",
          d: "In 2023, personal circumstances meant we couldn't carry EasyLogi through. Winding down the logistics work, we turned to a problem that had been on our minds for a long time. Living with two dogs, something had always seemed wrong: the only way to know how they were doing was to go to a clinic. I was the one beside them every day, and the only record that existed was of the days they were ill. We brought the method we had validated in logistics straight across, and built AnimAI.",
        },
      ],
      storyClose:
        "Only the field changed; the method is the same. Bring what people say in from outside the system, and take on the hard part ourselves.",

      valuesH2: "What we hold to",
      values: [
        {
          n: "01",
          t: "Start on the ground",
          d: "Problems defined at a desk are usually wrong. Only what we've seen beside a user counts as a problem.",
        },
        {
          n: "02",
          t: "We take on the complexity",
          d: "We don't hand the hard part to users. We choose to be the complicated side.",
        },
        {
          n: "03",
          t: "Build what lasts",
          d: "Not trending features, but records and relationships that grow more valuable with time.",
        },
        {
          n: "04",
          t: "Build first, talk after",
          d: "We'd rather ship something working than announce a plan.",
        },
      ],

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

      nameH2: "The name",
      nameBody:
        "Vita (life) and Anima (soul). Being alive, and what keeps it alive. The name is the work. Our service name, AnimAI, comes from the same root — from Anima to AI.",

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
      name: "Hunki Kim",
      role: "CEO · Founder",
      greetingLead:
        "I didn't learn the technology first. I met the ground first.",
      greeting: [
        "Four companies in seven years. I started in trade brokerage, then ran a logistics company with its own warehouse and trucks, and built ₩7.0B in cumulative revenue across three of them — without outside investment.",
        "What I learned in those years wasn't technology. It was where people get stuck. Rent, vehicles and payroll went out every month whether or not revenue came in. COVID arrived in 2020, the war in 2022, and the plan broke both times. Both times we delivered the numbers. What I took from it is that most of what makes an industry hard is structural, not technical.",
        "In 2022 I put that to the test. I founded EasyLogi to pull the scattered inland haulage process into one place and share status automatically. Across a pilot with 150 forwarder clients and 450 projects, admin time fell by 83% and unnecessary waiting by 71% — not because the features were clever, but because we took the hard part onto our side.",
        "Vitanima began the same way. Living with my own dogs, it struck me as strange that the only way to know how they were doing was to go to a clinic. I was the one beside them every day, and yet the only record that existed was of the days they were ill. The difficulty sat with the caregiver.",
        "I believe AI can take that seat. No specialist knowledge to learn, no procedure to master — just ordinary words, and a result. Rebuilding an industry's structure that way is what we call AX, and companion animals is where I chose to apply it.",
        "Today I handle product, engineering and operations myself. I'd rather build first and talk after. AnimAI is already live, with people using it every day. The rest of the story comes after that.",
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
      tagline: "An AI that remembers your animal",
      lead:
        "An app for the people who live with companion animals. What you say and record each day becomes data about that one animal, and over time it grows accurate about them in particular.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",

      whyH2: "Why we built it",
      whyTime:
        "An animal's years pass far faster than ours. Months lost to trial and error are months that matter.",
      whyBefore: "Knowing how your animal was doing meant going to the clinic.",
      whyBody:
        "The caregiver is there every day, and yet the only record that exists is of the days the animal was ill. The ordinary days in between are the most valuable data there is, and nothing was collecting them. AnimAI turns what a caregiver already says into that record. Nothing extra to learn or type.",

      featureH2: "What it does",
      features: [
        {
          t: "A daily record",
          d: "One photo and one line keeps the day. Enough of them becomes a life story.",
        },
        {
          t: "A dedicated AI",
          d: "An AI that knows your animal answers. Anything needing a diagnosis is routed to a nearby clinic.",
        },
        {
          t: "Daily recommendations",
          d: "Chosen from that animal's state and the day's records.",
        },
        {
          t: "Health and schedules",
          d: "Vaccinations, deworming and check-ups tracked; weight and food portions calculated by species.",
        },
        {
          t: "Local facilities",
          d: "Find grooming, daycare, hotels and clinics — and book from the app.",
        },
        {
          t: "A community",
          d: "See how neighbours' days went, and leave your own animal's story.",
        },
      ],

      bizH2: "AnimAI Biz",
      bizTagline: "A dashboard for pet businesses",
      bizBody:
        "A web tool for groomers, daycares, hotels and clinics to manage bookings and customers. Free to start, with app bookings flowing straight in.",
      bizLink: "gangji-manage.kr",

      roadH2: "What comes next",
      roadNote:
        "The order is dependency, not revenue. The first two produce signal and supply; the last three stand on them.",
      road: [
        {
          n: "01",
          role: "Signal",
          t: "Wearable tag",
          d: "A day at 24-hour resolution. Signal already arrives through the app and phone sensors; the tag raises the resolution.",
        },
        {
          n: "02",
          role: "Supply",
          t: "Business dashboard",
          d: "An offline touchpoint and distribution layer. Live today.",
        },
        {
          n: "03",
          role: "Extension",
          t: "Fitted commerce",
          d: "Only products that suit that animal, with post-purchase change read back as confirmation.",
        },
        {
          n: "04",
          role: "Extension",
          t: "Insurance brokerage",
          d: "An animal with a lifetime record shows when coverage matters most.",
        },
        {
          n: "05",
          role: "Extension",
          t: "Senior care",
          d: "A tighter observation cycle, and records worth bringing to the clinic.",
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
        "Vitanima is a small team. One person covers a wide range, and what you make goes straight to users.",

      whyH2: "What it's like here",
      why: [
        {
          t: "What you build ships next week",
          d: "There is no approval chain. Deciding in the morning and deploying in the evening is common.",
        },
        {
          t: "You see the users yourself",
          d: "Team members read support messages directly. Nobody summarises them for you.",
        },
        {
          t: "You set your own scope",
          d: "We decide what to build together. There is no seat here for doing only what you're told.",
        },
      ],

      lookH2: "Roles we're open to",
      roles: [
        {
          t: "Product engineer",
          s: "React Native · TypeScript",
          d: "Build the app with us. Comfortable owning a screen from start to finish.",
        },
        {
          t: "AI engineer",
          s: "LLM · data pipelines",
          d: "Own the part that pulls meaning out of language, including prompt design and evaluation.",
        },
        {
          t: "Product designer",
          s: "UX · UI",
          d: "Someone who enjoys removing complexity. Building it yourself is a plus.",
        },
        {
          t: "Business development",
          s: "Partnerships · offline",
          d: "Meet pet facilities and brands in person. For people who enjoy the ground.",
        },
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
      h1: "Contact",
      lead:
        "One address reaches us, whatever the subject. We reply within two business days.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      types: [
        {
          t: "Investment · IR",
          d: "Round materials are shared individually on request.",
        },
        { t: "Partnership", d: "Product, facility, insurance or data collaboration." },
        { t: "List your facility", d: "The dashboard is free to start." },
        { t: "Press · careers", d: "Interview requests and applications go to the same address." },
      ],
      infoH2: "Company information",
      mailBtn: "Send email",
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
