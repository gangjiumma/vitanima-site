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
      title: "㈜비타니마 — 소상공인과 중소기업의 AX를 돕습니다",
      description:
        "현장의 기록이 다음 단계로 이어지게 만듭니다. 물류·제조 현장의 Flowstamp와 반려동물 AI 서비스 AnimAI를 만드는 AX 솔루션 회사, 주식회사 비타니마.",
      keywords: [
        "비타니마",
        "Vitanima",
        "Flowstamp",
        "플로우스탬프",
        "AX 솔루션",
        "중소기업 AI",
        "현장 보고 자동화",
        "물류 SaaS",
        "수출입 물류 소프트웨어",
        "AnimAI",
        "애니마이",
        "반려동물 AI",
      ],
    },
    nav: {
      about: "회사",
      ceo: "대표",
      flowstamp: "Flowstamp",
      animai: "AnimAI",
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
      flowstampUrl: "https://www.flowstamp.kr",
      salesEmail: "cs@vitanima.kr",
      dashboardUrl: "https://www.animai.kr/business",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "운영 중",
      more: "자세히 보기",
    },

    home: {
      eyebrow: "WHAT WE BUILD",
      h1: ["기록이 다음 일에", "바로 쓰이게 만듭니다"],
      lead: [
        "비타니마는 현장과 일상에서 생기는 정보를 AI로 정리하고, 다음 업무와 판단에 바로 쓸 수 있는 제품을 만듭니다.",
        "물류 현장의 보고와 운송을 연결하는 Flowstamp와 반려동물의 일상·건강기록을 쌓는 AnimAI를 운영하고 있습니다.",
      ],
      ctaPrimary: "Flowstamp 도입 문의",
      ctaSecondary: "두 서비스 보기",
      heroMarks: ["FLOWSTAMP", "ANIMAI"],

      problemEyebrow: "THE PROBLEM",
      problemH2: ["같은 정보를", "다시 찾고, 다시 묻고, 다시 옮깁니다"],
      problemSub:
        "정보가 없는 게 아닙니다. 이미 있는 기록이 다음 업무와 판단에 그대로 쓰이지 않는 것이 문제입니다.",
      problemLead: [
        "물류 현장에서는 작업자가 사진을 찍어 카톡으로 보내고, 사무실이 다시 찾아 정리해 거래처에 전달합니다. 같은 정보가 사람 손을 여러 번 거칩니다.",
        "반려생활에서도 비슷합니다. 보호자가 알고 있는 변화와 병원 기록이 흩어져 있어, 필요할 때마다 다시 찾고 다시 설명해야 합니다.",
      ],
      problemQuote: "비타니마는 이미 생긴 기록을 다시 옮기지 않아도 되게 만듭니다.",

      wayEyebrow: "HOW WE WORK",
      wayH2: ["두 서비스는", "같은 방식으로 만듭니다"],
      waySub:
        "한 번 남긴 기록을 다시 입력하거나 설명하지 않아도, 다음 업무와 판단에 그대로 쓸 수 있게 만듭니다.",
      wayCols: ["기록이 생김", "AI가 정리·확인", "다시 활용"],
      wayRows: [
        {
          name: "Flowstamp",
          field: "물류 · 제조 · 유통",
          status: "현장 검증 완료",
          live: true,
          steps: [
            "현장에서 기록한다",
            "사무실과 AI가 확인한다",
            "거래처 보고·운송으로 이어진다",
          ],
        },
        {
          name: "AnimAI",
          field: "반려동물",
          status: "운영 중",
          live: true,
          steps: [
            "보호자와 기기가 기록한다",
            "AI가 시간순으로 정리한다",
            "다음 상담과 보험에 다시 쓴다",
          ],
        },
      ],

      fsEyebrow: "FLOWSTAMP",
      fsBadge: "현장 검증 완료",
      fsH2: ["현장이 찍고, 사무실이 확인하고,", "거래처가 받습니다"],
      fsSub:
        "현장 사진과 작업기록이 보고·알림·이력·청구까지 이어지는 물류 운영 솔루션입니다.",
      fsBody: [
        "현장은 큰 버튼과 사진 몇 장으로 작업을 보고합니다. 사무실이 확인하면 거래처에 이메일과 알림이 자동으로 전달됩니다.",
        "거래처는 로그인 없이 링크 하나로 사진과 진행상황을 확인합니다. 견적부터 청구, 통계, 필요한 운송 배차까지 한 화면에서 처리할 수 있습니다.",
      ],
      fsMetrics: [
        { n: "98%", l: "현장 보고시간 단축", sub: "60분 → 1분" },
        { n: "90%", l: "고객 보고시간 단축", sub: "60분 → 5분" },
        { n: "0건", l: "자료 전달 누락", sub: "현장보고 100건 기준" },
      ],
      fsMetricsNote:
        "* GN로지텍 2개월 실사용 · 거래처 20곳 · 현장보고 100건 기준",
      fsConsoleAlt: "Flowstamp 사무실 화면 — 작업 진행과 AI 업무 도우미",
      fsLink: "Flowstamp 자세히 보기",
      fsSiteLink: "flowstamp.kr",

      aiEyebrow: "ANIMAI",
      aiBadge: "운영 중",
      aiH2: ["반려동물의 평소를 기록하고,", "평소와 다른 변화를 놓치지 않게 합니다"],
      aiBody: [
        "보호자와 나눈 대화, 진료기록, 생활기록을 Lifetime Log에 시간순으로 쌓습니다. AnimAI는 이전 기록을 기억하고 필요한 내용을 다시 확인합니다.",
        "Care Tag를 연결하면 보호자가 보지 못한 시간의 활동과 수면도 함께 기록합니다. 쌓인 기록이 앞으로 펫보험 할인과 가입조건 개선으로 이어지도록 준비하고 있습니다.",
      ],
      aiMetrics: [
        { n: "2,142명", l: "사용자" },
        { n: "1,116명", l: "정식 회원" },
        { n: "420개", l: "Lifetime Log" },
      ],
      aiMetricsNote: "* 2026.08.25 기준",
      aiLink: "AnimAI 자세히 보기",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "말보다 먼저 만들었습니다",
      proofs: [
        { n: "7년", l: "무역 · 물류 사업 운영" },
        { n: "70억 원", l: "이전 사업체 누적 매출" },
        { n: "3건", l: "특허 출원" },
        { n: "2개", l: "운영 중인 서비스" },
      ],
      proofNote:
        "* 누적매출은 외부 투자 없이 운영한 비타니마 이전 사업체 기준이며, 비타니마의 매출이 아닙니다.",
      proofLink: "대표 소개 보기",

      ctaH2: ["Flowstamp를 실제 현장에", "적용해보고 싶다면 이야기해주세요"],
      ctaLead:
        "작업 양식 구성부터 기존 이력 입력, 직원 교육까지 도입 과정을 함께합니다. 투자·제휴 문의도 편하게 보내주세요.",
      ctaBtn: "Flowstamp 도입 문의",
      ctaBtn2: "투자 · 제휴 문의",

      newsH2: "소식",
      newsLink: "전체 보기",
      newsEmpty: "아직 등록된 소식이 없습니다.",
    },
    flowstamp: {
      eyebrow: "FLOWSTAMP",
      badge: "현장 검증 완료",
      h1: "Flowstamp",
      tagline: ["현장이 찍고, 사무실이 확인하고,", "거래처가 받습니다"],
      lead: [
        "사진 한 장이 보고·알림·이력·청구까지 이어지는 현장 운영 솔루션입니다.",
        "수출입 물류를 시작으로 제조, 유통 등 현장 사진을 고객에게 보내는 모든 업종으로 넓혀갑니다.",
      ],
      heroBtn: "도입 문의",
      siteBtn: "flowstamp.kr",
      consoleAlt: "Flowstamp 사무실 화면 — 작업 진행과 AI 업무 도우미",

      whyH2: "왜 만들었나",
      whyLead: ["같은 정보를", "사람이 서너 번 옮깁니다"],
      whyBody: [
        "현장 직원이 사진을 찍어 단톡방에 올리면, 사무실이 그걸 찾아 거래처에 다시 전달합니다. 거래처는 진행 상황을 묻는 전화를 걸고, 월말에는 엑셀로 명세서를 만듭니다.",
        "7년간 창고와 운송을 운영하며 같은 문제를 매일 겪었습니다. 기술이 부족해서가 아니라, 현장이 아는 것을 다음 사람이 이어받지 못하는 구조였습니다.",
      ],
      whyQuote: "Flowstamp는 이 '옮기는 일'을 없앱니다.",

      featureH2: "무엇을 하나",
      features: [
        {
          n: "01",
          t: "현장 보고 — 찍으면 끝",
          d: "홈 화면이 오늘 할 일 목록입니다. 카드에서 바로 보고하고, 사무실이 지정한 촬영 항목이 체크리스트로 뜹니다. 컨테이너 사진을 찍으면 번호를 자동으로 읽어 채웁니다.",
        },
        {
          n: "02",
          t: "사무실 확인 — 도장 한 번",
          d: "현장 보고가 올라오면 내용과 사진을 확인하고 거래처 알림을 보냅니다. 문장은 AI가 초안을 쓰고 사람이 확정합니다.",
        },
        {
          n: "03",
          t: "거래처 링크 — 로그인 없이 한눈에",
          d: "거래처 담당자는 링크 하나로 진행 단계와 사진 타임라인, 서류, 이동 경로를 봅니다. 열람 여부도 사무실에 표시됩니다.",
        },
        {
          n: "04",
          t: "작업 양식 — 우리 회사 순서대로",
          d: "수출·수입 컨테이너 등 기본 양식을 제공하고, 단계와 입력칸을 회사에 맞게 바꿉니다. 설명을 쓰면 AI가 양식 초안을 만듭니다.",
        },
        {
          n: "05",
          t: "견적 — 안전운임 고시 내장",
          d: "화물자동차 안전운임 고시를 내장해 법정 운임을 계산하고 근거를 자동으로 기재합니다. 고객이 링크에서 수락하면 작업 건이 생성됩니다.",
        },
        {
          n: "06",
          t: "청구·통계 — 월말 엑셀이 사라집니다",
          d: "완료된 작업을 모아 거래명세표를 이메일과 링크로 보냅니다. 매출과 미수, 작업 소요 기간은 통계로 정리됩니다.",
        },
      ],

      aiH2: "AI는 제안만, 확정은 사람이",
      aiBody: [
        "서류 요약, 작업지시 초안, 양식 초안, 컨테이너 번호 인식, 패킹리스트 추출은 AI가 돕습니다.",
        "금액과 운임 계산, 검증, 상태 판단은 전부 코드가 처리합니다. 틀린 번호가 거래처에 나가는 사고를 구조적으로 막습니다.",
      ],
      aiOrderAlt: "AI 작업지시 추천 화면",
      aiQuote: "보고와 알림은 지워지지 않는 기록입니다. 정정은 새 기록으로 남습니다.",

      clientH2: ["거래처는 링크 하나로", "전부 봅니다"],
      clientBody: [
        "진행 단계, 사진 타임라인, 서류, 이동 경로를 로그인 없이 확인합니다.",
        "\u201C지금 어디까지 됐어요?\u201D 전화가 줄어듭니다.",
      ],
      clientAlt: "거래처가 보는 진행 상황 화면",

      proofEyebrow: "VALIDATION",
      proofH2: ["현장에서 2개월,", "실제 업무로 검증했습니다"],
      proofMetrics: [
        { n: "98%", l: "현장 보고 소요시간", sub: "60분 → 1분" },
        { n: "90%", l: "고객 보고 소요시간", sub: "60분 → 5분" },
        { n: "0건", l: "자료 전달 누락", sub: "보고 100건 기준" },
      ],
      proofItems: [
        { k: "적용 현장", v: "1곳 (GN로지텍 · 대표 운영 물류 창고)" },
        { k: "보고를 받은 거래처", v: "20곳" },
        { k: "처리한 현장 보고", v: "100건" },
        { k: "적용 기간", v: "2026.07~ 2개월" },
      ],
      proofNote:
        "* 대표가 운영하는 물류 현장에 직접 적용해 얻은 결과이며, 외부 고객사 도입 실적은 아닙니다. 현재 첫 외부 도입을 준비하고 있습니다.",

      whoH2: "누구를 위한 것인가",
      who: [
        {
          t: "수출입 물류 · 창고 · 운송",
          d: "화주와 포워더에게 적입·적출·씰링·반입 사진을 매일 보고하는 곳",
          now: true,
        },
        {
          t: "제조 · 공장",
          d: "자재 입고부터 가공, 검수, 납품까지 과정을 고객에게 알려야 하는 곳",
          now: false,
        },
        {
          t: "도소매 · 유통",
          d: "입고와 검수, 출고 상태를 거래처와 공유해야 하는 곳",
          now: false,
        },
      ],
      whoNote: "업종 차이는 작업 양식으로 흡수합니다.",

      howH2: "도입은 이렇게 진행합니다",
      howSteps: [
        { n: "01", t: "도입 문의", d: "현장과 업무 흐름을 듣고 맞는지 함께 확인합니다." },
        { n: "02", t: "작업 양식 구성", d: "회사의 작업 순서대로 단계와 촬영 항목을 만듭니다." },
        { n: "03", t: "기존 이력 이관", d: "거래처와 담당자, 최근 작업·청구 이력을 옮겨 넣습니다." },
        { n: "04", t: "직원 교육", d: "사무실과 현장 직원이 바로 쓸 수 있도록 교육합니다." },
      ],
      howNote:
        "고객이 준비할 것은 사업자등록증·통장사본, 세금계산서 내역, 작업 대장, 거래처·직원 명단 네 가지입니다. 나머지는 저희가 합니다.",

      ctaH2: ["현장의 사진이", "거래처까지 가는 길을 줄여보세요"],
      ctaLead:
        "작업 양식 구성부터 기존 이력 입력, 직원 교육까지 함께 진행합니다.",
      ctaBtn: "도입 문의",
      ctaBtn2: "문의 페이지로",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["현장이 아는 것을,", "다음 사람이 이어받게 합니다"],
      lead: [
        "비타니마는 소상공인과 중소기업의 AX(AI 전환)를 돕는 회사입니다.",
        "물류·제조 현장의 Flowstamp와 반려동물의 AnimAI, 두 서비스를 만들고 있습니다. 산업은 다르지만 푸는 문제는 하나입니다.",
      ],
      heroFlow: [
        { t: "현장", d: "기록이 만들어지는 곳" },
        { t: "확인 · 해석", d: "사람과 AI가 함께" },
        { t: "받는 쪽", d: "거래처 · 다음 판단" },
      ],
      heroFlowCenter: "옮기는 일을 없애면, 현장의 시간이 남습니다",

      missionLabel: "MISSION",
      mission: ["사람이 옮기던 정보를,", "시스템이 잇게 만듭니다"],
      missionBody:
        "현장에서 만들어진 기록이 사무실과 거래처로, 보호자의 말이 다음 판단으로 이어지지 않는 것은 기술이 부족해서가 아닙니다. 옮기는 사람이 필요한 구조 때문입니다. 비타니마는 그 구조를 바꿉니다.",
      visionLabel: "VISION",
      vision: ["작은 회사도", "큰 회사처럼 일하는 것"],
      visionBody:
        "대기업은 시스템을 직접 만들어 씁니다. 소상공인과 중소기업도 같은 수준의 도구를 쓸 수 있어야 합니다. 현장에 맞고, 바로 쓸 수 있고, 감당할 수 있는 가격으로.",
      turnBody: ["기술이 아니라,", "일하는 방식을 바꿉니다"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["7년간 현장에서,", "같은 문제를 매일 겪었습니다"],
      whySub: "창고와 차량을 직접 운영하며 본 것은 늘 같았습니다.",
      whyBody: [
        "작업은 끝났는데 정보는 늦게 도착했습니다. 현장 직원이 사진을 찍어 단톡방에 올리면, 사무실이 그걸 찾아 거래처에 다시 전달했습니다.",
        "거래처는 진행 상황을 묻는 전화를 걸었고, 월말이면 엑셀로 명세서를 만들었습니다. 같은 정보를 사람이 서너 번 옮기고 있었습니다.",
        "사람을 더 뽑는 대신 시스템을 만들기로 했습니다. 그렇게 만든 것이 Flowstamp이고, 같은 방법을 반려생활에 적용한 것이 AnimAI입니다.",
      ],
      whyQuote: "문제는 사람이 아니라, 사람이 옮겨야만 하는 구조였습니다.",
      whyLoop: ["현장이 찍는다", "단톡방에 올린다", "사무실이 찾는다", "거래처에 전달한다", "전화가 온다"],
      whyClose: "Vitanima는 이 반복을 없애기 위해 시작됐습니다.",

      storyEyebrow: "OUR PATH",
      storyH2: "여기까지 온 길",
      storyLead: [
        "비타니마는 처음부터 반려동물 산업에서 시작한 회사가 아닙니다.",
        "무역과 물류 현장에서 반복되는 문제를 직접 겪고, 그것을 시스템으로 바꾸는 일을 해왔습니다. 그리고 지금은 같은 실행 방식으로 반려동물의 일상을 기록으로 만드는 일을 하고 있습니다.",
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
          t: "두 산업에서 같은 문제를 풉니다",
          d: "반려동물을 키우면서 같은 문제를 다시 봤습니다. 보호자가 아는 것도 다음 판단으로 이어지지 않았습니다. 물류 현장에는 Flowstamp를, 반려생활에는 AnimAI를 만들어 같은 방법을 적용하고 있습니다.",
          note: "",
        },
        {
          y: "2026 · NOW",
          k: "EXECUTE",
          t: "두 서비스를 모두 시장에 내놓았습니다",
          d: "AnimAI를 출시해 2,142명이 쓰고 있고, Flowstamp는 대표가 운영하는 물류 현장에 2개월간 적용해 검증을 마쳤습니다. 특허 3건을 출원했고, 지금은 Flowstamp의 첫 외부 도입을 준비하고 있습니다.",
          note: "",
          metrics: [
            { n: "Flowstamp", l: "현장 검증 완료" },
            { n: "AnimAI", l: "운영 중 · 2,142명" },
            { n: "3건", l: "특허 출원" },
          ],
        },
      ],
      storyClose: ["산업은 달라졌지만,", "문제를 푸는 방식은 같습니다"],
      storyCloseBody:
        "사용자가 이미 알고 있는 것을 기술이 이어받고, 반복되는 과정에 쓰이던 시간을 줄이는 것. 산업은 달라져도 Vitanima가 문제를 푸는 방식은 같습니다.",

      buildEyebrow: "WHAT WE BUILD",
      buildH2: ["두 산업에서,", "같은 방법으로 만듭니다"],
      buildSub:
        "현장이 남긴 기록을 다음 단계가 그대로 이어받게 하는 것. 두 서비스의 구조는 같습니다.",
      build: [
        {
          n: "01",
          t: "Flowstamp",
          s: "현장 검증 완료",
          live: true,
          d: "물류·제조·유통 현장의 사진 보고가 사무실 확인을 거쳐 거래처까지 자동으로 전달됩니다. 견적부터 청구, 통계까지 한 바퀴로 이어집니다.",
        },
        {
          n: "02",
          t: "AnimAI",
          s: "운영 중",
          live: true,
          d: "보호자의 대화에서 중요한 내용을 찾아 Lifetime Log에 기록하고, 이전 기록과 연결해 다시 확인하는 반려동물 AI 서비스입니다.",
        },
      ],
      buildNote:
        "Flowstamp는 수출입 물류를 시작으로 제조·유통까지, AnimAI는 Care Tag와 보험 연계까지 넓혀갑니다.",

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
          t: "기록이 쌓일수록 더 잘 알아야 합니다",
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
        { k: "사업 분야", v: "중소기업 AX 솔루션 · AI SaaS · 데이터 플랫폼" },
        {
          k: "주요 제품·서비스",
          v: "Flowstamp (현장 검증 완료) · AnimAI (운영 중)",
        },
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
          d: "중소기업 AX 솔루션 개발 및 운영",
          sub: "Flowstamp 현장 검증 완료 / AnimAI 운영 중",
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

      ctaH2: ["비타니마가 만드는", "두 서비스를 확인해보세요"],
      ctaLead:
        "Flowstamp는 현장 검증을 마치고 첫 외부 도입을 준비하고 있고, AnimAI는 2,142명이 쓰고 있습니다.",
      ctaNote: "",
      ctaBtn: "Flowstamp 알아보기",
      ctaBtn2: "대표 이야기 보기",
    },
    ceo: {
      eyebrow: "FOUNDER & CEO",
      kicker: "현장에서 문제를 찾고, 직접 만들어 검증해왔습니다.",
      h1: ["저는 기술보다", "문제를 먼저 봅니다"],
      intro: [
        "기술은 문제를 해결하기 위한 방법입니다.",
        "저는 먼저 현장에서 사람들이 어디에 시간을 쓰고 있는지 봅니다. 그리고 반복되는 문제를 직접 만들고, 운영하고, 사용자 반응으로 확인합니다.",
        "Vitanima도 같은 방식으로 시작했습니다. 물류 현장에는 Flowstamp를, 반려생활에는 AnimAI를 만들어 직접 검증하고 있습니다.",
      ],
      name: "김훈기",
      role: "대표 · Founder · 기획 · 개발",

      startEyebrow: "THE STARTING POINT",
      startH2: ["기술이 부족해서가", "아니었습니다"],
      startSub: "7년간 창고와 차량을 직접 운영하며 매일 본 것입니다.",
      startBody: [
        "작업은 끝났는데 정보는 늦게 도착했습니다. 현장 직원이 사진을 찍어 단톡방에 올리면, 사무실이 그걸 찾아 거래처에 다시 전달했습니다.",
        "거래처는 진행 상황을 묻는 전화를 걸었고, 필요한 사진이 빠지면 현장에 다시 확인해야 했습니다. 월말이면 엑셀로 명세서를 만들었습니다.",
        "현장에는 답을 아는 사람이 분명히 있었습니다. 다만 그 사람이 아는 것이 다음 사람에게 제대로 닿지 않았습니다.",
      ],
      startQuote: ["문제는 사람이 아니라,", "사람이 옮겨야만 하는 구조였습니다"],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["사람을 더 뽑는 대신,", "시스템을 만들기로 했습니다"],
      whyBody: [
        "현장에서 반복되는 확인과 전달을 소프트웨어가 대신하게 만들었습니다. 사진 한 장을 찍으면 사무실 확인을 거쳐 거래처까지 자동으로 가는 구조입니다.",
        "그게 Flowstamp이고, 지금 제가 운영하는 물류 현장에서 매일 쓰고 있습니다. 고객 보고까지 걸리던 시간이 크게 줄었습니다.",
        "반려동물을 키우면서 같은 문제를 다시 봤습니다. 보호자가 아는 것도 다음 판단으로 이어지지 않았습니다. 그래서 같은 방법으로 AnimAI를 만들었습니다.",
      ],
      whyQuote: ["목표는 더 좋은 기술이 아니라,", "사람이 옮기던 일을 없애는 것입니다"],

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
        { y: "2018–2025", t: "GN누리", r: "창업 · 대표", d: "무역중개 · 중앙아시아" },
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
          d: "펫택시 중개 플랫폼 '모시개냥' 개발 · 반려동물 서비스 첫 시도",
        },
        { y: "2022–2023", t: "이지로지", r: "창업 · 대표", d: "물류 SaaS 개발" },
        {
          y: "2026–현재",
          t: "Vitanima",
          r: "대표 · 기획 · 개발",
          d: "반려동물 헬스케어 AIoT · AnimAI · Care Tag 개발",
        },
      ],

      petEyebrow: "PET INDUSTRY EXPERIENCE",
      petH2: ["반려동물 산업은", "이번이 처음이 아닙니다"],
      petBody: [
        "2019년 GN밸류홀딩스에서 반려동물 이동 서비스인 펫택시 중개 플랫폼 '모시개냥'을 만들었습니다.",
        "그때 보호자들이 이동, 병원, 미용 같은 상황에서 어떤 정보를 반복해서 설명해야 하는지 직접 보았습니다.",
        "그 경험이 지금 Vitanima에서 만들고 있는 기록 구조의 출발점이 되었습니다.",
      ],

      firstEyebrow: "VITANIMA · WHAT I BUILT",
      firstH2: ["기획부터 개발, 영업까지", "직접 실행하고 있습니다"],
      firstGrid: [
        { n: "01", t: "Flowstamp 개발", d: "웹 · 모바일 · 현장 검증 완료" },
        { n: "02", t: "AnimAI 출시", d: "iOS · Android · 2,142명" },
        { n: "03", t: "특허 3건", d: "출원 완료" },
        { n: "04", t: "AI OCR · 자동 보고", d: "실제 코드 가동" },
        { n: "05", t: "Care Tag", d: "내부 파일럿 진행 중" },
        { n: "06", t: "현장 영업", d: "첫 외부 도입 준비 중" },
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
      closeH2: ["현장의 기록이", "다음 사람에게 닿게 만들겠습니다"],
      closeBody: [
        "작은 회사일수록 사람이 정보를 옮기는 데 시간을 많이 씁니다. 그 시간을 돌려주는 것이 제가 만들고 싶은 것입니다.",
        "물류 현장에서 시작했지만, 같은 문제는 제조와 유통, 반려생활에도 있습니다. 한 번에 하나씩, 실제로 쓰이는 것을 확인하며 넓혀가겠습니다.",
      ],
      sign: "(주)비타니마 대표이사 김훈기",

      ctaH2: "이미 작동하는 두 서비스를 확인해보세요",
      ctaBtn: "Flowstamp 알아보기",
      ctaBtn2: "회사 알아보기",
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "운영 중",
      h1: "AnimAI",
      tagline: ["대화와 기록을 연결하는", "반려동물 AI 서비스"],
      lead: [
        "보호자가 걱정과 변화를 말하면, AnimAI는 중요한 내용을 찾아 Lifetime Log의 해당 시점에 기록합니다.",
        "이전 대화와 건강기록을 함께 보고 다시 확인하며, Care Tag가 연결되면 같은 시간의 활동·수면 신호까지 함께 봅니다.",
      ],
      leadNote: "Care Tag가 없어도 대화와 건강기록만으로 Lifetime Log는 계속 쌓입니다.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: [
        "AnimAI · Lifetime Log · 대화 기반 Loop 운영 중",
        "Care Tag · 2026.08 내부 파일럿 진행 중",
        "보험 비교견적 · 서비스 준비 중",
      ],

      whyH2: "왜 만들었나",
      whyLead: ["같은 변화도,", "이유는 아이마다 다릅니다"],
      whySub: "우리 아이의 이유를 모르면, AI도 결국 평균적인 답을 하게 됩니다.",
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
        { t: "생활신호", d: "Care Tag의 활동·수면 변화" },
        { t: "건강기록", d: "병원 기록 · 처방전 등" },
      ],
      logResult: "Lifetime Log",
      logResultSub: "우리 아이의 평생 기록",
      logQuote: "시간이 쌓일수록, 우리 아이만의 기준이 생깁니다.",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["보호자가 못 보는 시간은", "Care Tag가 기록합니다"],
      signalSub: "활동과 수면 변화를 기록하는 BLE 웨어러블 태그입니다.",
      signalBody: [
        "집에서는 Home Station, 외출 중에는 보호자의 앱을 통해 Care Tag 신호를 수집합니다.",
        "활동량이나 수면 패턴이 평소와 달라지면 AnimAI가 보호자에게 실제 상황을 확인하고, 그 설명을 Lifetime Log에 함께 기록합니다.",
      ],
      signalQuote: [
        "Care Tag는 숫자를 보여주는 데서 끝나지 않습니다.",
        "생활신호를 보호자의 설명과 함께 한 아이의 기록으로 연결합니다.",
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
        "검증 기준 충족 후 ODM · 인증 · 패키징을 거쳐 정식 출시합니다.",
      signalHomeNote:
        "Pre-A 이후 · 배변량, 급식량, 체중 등 Home Device로 신호원을 확장합니다.",

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
      insFlow: ["Lifetime Log", "우리 아이 기준 비교견적", "가입", "청구", "갱신"],
      insFlowBack: "Lifetime Log",
      insFlowNote: "평소의 기록이 보험 가입 전과 후를 계속 이어줍니다.",
      insLink: "보험 서비스 준비 현황 보기",

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
      bizNote:
        "제휴 펫 업장은 Care Tag를 직접 체험하고 만날 수 있는 지역 접점으로 확장할 예정입니다.",
      bizLink: "AnimAI Biz 알아보기",

      ctaH2: ["매일의 기록이", "건강관리에서 보험까지 이어집니다"],
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
          sub: "Care Tag 신호 확장 예정",
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
          stage: "생활신호 → Lifetime Log 확인 → S5 능동질의",
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
        "Care Tag가 연결되면 활동과 수면 변화를 같은 Lifetime Log에 추가하고, 보호자의 설명과 함께 그 의미를 확인합니다.",
      ],
      signalItems: [
        {
          t: "Care Tag",
          d: "활동·수면 변화를 기록하는 BLE 웨어러블 신호원",
          s: "2026.08 · 내부 파일럿 진행 중",
          sub: "가속도계 · BLE",
        },
        {
          t: "Home Station",
          d: "집에서 Care Tag 신호 수집을 이어가기 위한 게이트. 외출 중에는 보호자의 앱을 통해 수집합니다.",
          s: "Care Tag와 함께 검증 예정",
          sub: "",
        },
        {
          t: "Home Device",
          d: "배변량 · 급식량 · 체중 등 태그로 보기 어려운 집 안 생활신호",
          s: "Pre-A 이후 확장 예정",
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

      insEyebrow: "RECORD FOR INSURANCE",
      insBadge: "보험 비교견적 서비스 준비 중",
      insH2: ["같은 기록이", "보험에서도 사용됩니다"],
      insSub:
        "보험은 새로운 데이터가 아니라, 이미 쌓인 Lifetime Log 위에서 시작합니다.",
      insBody: [
        "보험 비교견적에는 보통 품종, 나이, 병력, 예방이력이 필요합니다.",
        "이 정보는 이미 Lifetime Log에 기록되어 있기 때문에, 보호자가 처음부터 다시 입력하지 않아도 됩니다.",
        "가입 이후의 청구와 갱신 결과도 같은 기록에 다시 연결해 보험 이력을 따로 관리하지 않아도 되도록 준비하고 있습니다.",
      ],
      insFlow: ["Lifetime Log", "비교견적", "가입", "청구 · 갱신"],
      insFlowBack: "Lifetime Log",
      insFlowNote: "평소의 기록이 보험 가입 전과 후를 계속 이어줍니다.",
      insLink: "보험 서비스 준비 현황 보기",

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
        "AnimAI는 보호자의 대화를 Lifetime Log에 쌓고, Care Tag의 생활신호를 같은 시간 위에 연결합니다. 그 기록은 건강관리와 보험에서 다시 사용됩니다.",
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
          t: "Flowstamp 도입",
          en: "Flowstamp",
          d: "현장 운영 솔루션 도입 및 데모 문의",
          email: "cs@vitanima.kr",
        },
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
      tagline: "소상공인과 중소기업의 AX를 돕는 회사",
      product: "서비스",
      company: "회사",
      rights: "All rights reserved.",
    },
  },

  en: {
    meta: {
      title: "Vitanima — AX for small businesses and SMEs",
      description:
        "Making what the field records carry through to the next step. Vitanima builds Flowstamp for logistics and manufacturing sites, and AnimAI for life with companion animals.",
      keywords: [
        "Vitanima",
        "Flowstamp",
        "AX solution",
        "SME AI",
        "field reporting software",
        "logistics SaaS",
        "AnimAI",
        "pet AI",
      ],
    },
    nav: {
      about: "Company",
      ceo: "CEO",
      flowstamp: "Flowstamp",
      animai: "AnimAI",
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
      flowstampUrl: "https://www.flowstamp.kr",
      salesEmail: "cs@vitanima.kr",
      dashboardUrl: "https://www.animai.kr/business",
      iosUrl: "https://apps.apple.com/kr/app/id6760122477",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.gangjiunni.app",
      live: "Live",
      more: "Read more",
    },

    home: {
      eyebrow: "WHAT WE BUILD",
      h1: ["Records that go straight", "into the next job"],
      lead: [
        "Vitanima builds products that organise what happens on the ground and in daily life, so it can be used in the next task or decision right away.",
        "We run Flowstamp, which connects field reporting and transport in logistics, and AnimAI, which builds a record of an animal's daily life and health.",
      ],
      ctaPrimary: "Enquire about Flowstamp",
      ctaSecondary: "See both services",
      heroMarks: ["FLOWSTAMP", "ANIMAI"],

      problemEyebrow: "THE PROBLEM",
      problemH2: ["The same information —", "found again, asked again, moved again"],
      problemSub:
        "The information exists. The problem is that records already made don't get used in the next task or decision.",
      problemLead: [
        "On a logistics site, a worker photographs the job and sends it by messenger; the office finds it again, tidies it up and forwards it to the client. The same information passes through several pairs of hands.",
        "It's similar with companion animals. What the caregiver knows and what the clinic recorded sit apart, so both have to be found and explained again each time.",
      ],
      problemQuote:
        "Vitanima makes it unnecessary to move a record that already exists.",

      wayEyebrow: "HOW WE WORK",
      wayH2: ["Both services", "are built the same way"],
      waySub:
        "Record it once, and use it in the next task or decision without entering or explaining it again.",
      wayCols: ["A record is made", "AI organises & confirms", "Used again"],
      wayRows: [
        {
          name: "Flowstamp",
          field: "Logistics · manufacturing · distribution",
          status: "Field-validated",
          live: true,
          steps: [
            "Recorded on site",
            "The office and AI confirm",
            "Carries into client reporting and transport",
          ],
        },
        {
          name: "AnimAI",
          field: "Companion animals",
          status: "Live",
          live: true,
          steps: [
            "The caregiver and device record",
            "AI organises it chronologically",
            "Used again in consultation and insurance",
          ],
        },
      ],

      fsEyebrow: "FLOWSTAMP",
      fsBadge: "Field-validated",
      fsH2: ["The field photographs, the office confirms,", "the client receives"],
      fsSub:
        "A logistics operations solution where field photos and job records carry through to reporting, notification, history and invoicing.",
      fsBody: [
        "The field reports a job with one large button and a few photos. Once the office confirms, an email and a notification go to the client automatically.",
        "Clients check photos and progress from one link, without logging in. Quotes, invoicing, statistics and the transport dispatch you need are handled on one screen.",
      ],
      fsMetrics: [
        { n: "98%", l: "Less time to field report", sub: "60 min → 1 min" },
        { n: "90%", l: "Less time to client report", sub: "60 min → 5 min" },
        { n: "0", l: "Missing documents", sub: "across 100 field reports" },
      ],
      fsMetricsNote:
        "* Two months of real use at GN Logitech · 20 client companies · 100 field reports",
      fsConsoleAlt: "Flowstamp office view — job progress and the AI assistant",
      fsLink: "More about Flowstamp",
      fsSiteLink: "flowstamp.kr",

      aiEyebrow: "ANIMAI",
      aiBadge: "Live",
      aiH2: [
        "Recording what is normal for an animal,",
        "so changes from it don't go unnoticed",
      ],
      aiBody: [
        "Conversations with the caregiver, clinic records and daily life accumulate chronologically in the Lifetime Log. AnimAI remembers earlier records and checks back on what matters.",
        "Connect a Care Tag and the activity and sleep from hours nobody watched are recorded too. We are preparing for that record to lead to pet insurance discounts and better enrolment terms.",
      ],
      aiMetrics: [
        { n: "2,142", l: "Users" },
        { n: "1,116", l: "Registered members" },
        { n: "420", l: "Lifetime Logs" },
      ],
      aiMetricsNote: "* As of 25 August 2026",
      aiLink: "More about AnimAI",

      proofEyebrow: "VITANIMA TODAY",
      proofH2: "We built it before we talked about it",
      proofs: [
        { n: "7 yrs", l: "Running trade and logistics" },
        { n: "₩7.0B", l: "Cumulative revenue, prior businesses" },
        { n: "3", l: "Patents filed" },
        { n: "2", l: "Services in operation" },
      ],
      proofNote:
        "* Cumulative revenue is for prior businesses run without outside investment, not Vitanima's revenue.",
      proofLink: "Meet the founder",

      ctaH2: ["Want to try Flowstamp", "on your own site? Let's talk."],
      ctaLead:
        "We work through the rollout with you — job templates, migrating existing history, training your staff. Investment and partnership enquiries are welcome too.",
      ctaBtn: "Enquire about Flowstamp",
      ctaBtn2: "Investment & partnership",

      newsH2: "News",
      newsLink: "See all",
      newsEmpty: "No news yet.",
    },
    flowstamp: {
      eyebrow: "FLOWSTAMP",
      badge: "Field-validated",
      h1: "Flowstamp",
      tagline: [
        "The field photographs, the office confirms,",
        "the client receives",
      ],
      lead: [
        "An operations solution where a single photo carries through to reporting, notification, history and invoicing.",
        "Starting with import/export logistics, extending to manufacturing, distribution and any industry that sends field photos to customers.",
      ],
      heroBtn: "Enquire",
      siteBtn: "flowstamp.kr",
      consoleAlt: "Flowstamp office view — job progress and the AI assistant",

      whyH2: "Why we built it",
      whyLead: ["The same information,", "moved by hand three or four times"],
      whyBody: [
        "A worker photographs the job and posts it to a group chat; the office digs it out and forwards it to the client. The client calls to ask where things stand, and at month end someone builds a statement in a spreadsheet.",
        "We ran warehouses and trucking for seven years and met this every day. Not for lack of technology, but because what the field knew never reached the next person.",
      ],
      whyQuote: "Flowstamp removes the carrying.",

      featureH2: "What it does",
      features: [
        {
          n: "01",
          t: "Field reporting — photograph and done",
          d: "The home screen is today's job list. Report straight from a card, with the office's required shots shown as a checklist. Photograph a container and its number is read and filled in automatically.",
        },
        {
          n: "02",
          t: "Office confirmation — one stamp",
          d: "When a report arrives, review the content and photos and send the client notification. AI drafts the wording; a person confirms it.",
        },
        {
          n: "03",
          t: "Client link — everything, without logging in",
          d: "The client sees progress, a photo timeline, documents and the route from one link. Whether it was opened shows on the office side.",
        },
        {
          n: "04",
          t: "Job templates — in your company's order",
          d: "Standard templates for export and import containers, with stages and fields adjusted to your company. Describe it and AI drafts the template.",
        },
        {
          n: "05",
          t: "Quotes — statutory freight rates built in",
          d: "Korea's statutory trucking rate schedule is built in, calculating the legal rate and recording the basis automatically. When the client accepts from the link, a job is created.",
        },
        {
          n: "06",
          t: "Invoicing & statistics — no more month-end spreadsheet",
          d: "Completed jobs are gathered into a statement sent by email and link. Revenue, receivables and job duration are compiled as statistics.",
        },
      ],

      aiH2: "AI suggests. People decide.",
      aiBody: [
        "AI helps with document summaries, work order drafts, template drafts, container number recognition and packing list extraction.",
        "Amounts, freight calculation, validation and status decisions are all handled by code. A wrong number reaching a client is prevented structurally.",
      ],
      aiOrderAlt: "AI work order suggestion",
      aiQuote:
        "Reports and notifications cannot be edited or deleted. Corrections are added as new records.",

      clientH2: ["Clients see everything", "from one link"],
      clientBody: [
        "Progress, photo timeline, documents and route — without logging in.",
        "The \u201Cwhere are we at?\u201D calls go away.",
      ],
      clientAlt: "The progress view a client sees",

      proofEyebrow: "VALIDATION",
      proofH2: ["Two months in the field,", "validated in real operations"],
      proofMetrics: [
        { n: "98%", l: "Time to field report", sub: "60 min → 1 min" },
        { n: "90%", l: "Time to client report", sub: "60 min → 5 min" },
        { n: "0", l: "Missing documents", sub: "across 100 reports" },
      ],
      proofItems: [
        { k: "Sites in use", v: "1 (GN Logitech · the founder's logistics warehouse)" },
        { k: "Client companies receiving reports", v: "20" },
        { k: "Field reports processed", v: "100" },
        { k: "Period", v: "Two months from July 2026" },
      ],
      proofNote:
        "* Results from applying it directly at the logistics site the founder operates, not from external customer deployments. We are preparing the first external rollout.",

      whoH2: "Who it is for",
      who: [
        {
          t: "Import/export logistics · warehousing · trucking",
          d: "Where stuffing, unstuffing, sealing and gate-in photos are reported daily to shippers and forwarders",
          now: true,
        },
        {
          t: "Manufacturing",
          d: "Where material receipt, processing, inspection and delivery must be reported to customers",
          now: false,
        },
        {
          t: "Wholesale · distribution",
          d: "Where inbound, inspection and outbound status must be shared with partners",
          now: false,
        },
      ],
      whoNote: "Differences between industries are absorbed by job templates.",

      howH2: "How a rollout works",
      howSteps: [
        { n: "01", t: "Enquiry", d: "We listen to your site and workflow and check the fit together." },
        { n: "02", t: "Job templates", d: "We build stages and required shots in your company's order." },
        { n: "03", t: "Migrating history", d: "Clients, contacts and recent job and billing history are moved in." },
        { n: "04", t: "Staff training", d: "Office and field staff are trained to start straight away." },
      ],
      howNote:
        "You prepare four things: business registration and bank details, tax invoice records, your job ledger, and client and staff lists. We handle the rest.",

      ctaH2: [
        "Shorten the path from a field photo",
        "to your client",
      ],
      ctaLead:
        "We handle job templates, migrating your existing history and training your staff.",
      ctaBtn: "Enquire",
      ctaBtn2: "Go to contact",
    },
    about: {
      eyebrow: "COMPANY",
      h1: ["Making what the field knows", "reach the next person"],
      lead: [
        "Vitanima helps small businesses and SMEs with AX — the shift to AI.",
        "We build two services: Flowstamp for logistics and manufacturing sites, and AnimAI for life with companion animals. Different industries, one problem.",
      ],
      heroFlow: [
        { t: "Field", d: "Where the record is made" },
        { t: "Check & interpret", d: "People and AI together" },
        { t: "Receiving side", d: "Clients · the next decision" },
      ],
      heroFlowCenter: "Remove the carrying, and the field gets its time back",

      missionLabel: "MISSION",
      mission: [
        "Let the system carry",
        "what people have been carrying",
      ],
      missionBody:
        "Records made in the field don't reach the office and the client, and what a caregiver says doesn't reach the next decision — not for lack of technology, but because the structure needs someone to carry it. Vitanima changes that structure.",
      visionLabel: "VISION",
      vision: ["Small companies working", "the way large ones do"],
      visionBody:
        "Large companies build their own systems. Small businesses and SMEs should have tools of the same standard — fitted to their site, usable straight away, at a price they can carry.",
      turnBody: ["We don't change the technology.", "We change how people work."],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["Seven years on the ground,", "meeting the same problem daily"],
      whySub:
        "Running warehouses and trucks ourselves, what we saw was always the same.",
      whyBody: [
        "The work was done, but the information arrived late. A worker would photograph the job and post it to a group chat; the office would dig it out and forward it to the client.",
        "The client would call to ask where things stood, and at month end someone built a statement in a spreadsheet. The same information was being carried by hand three or four times.",
        "Instead of hiring more people, we built a system. That became Flowstamp — and applying the same method to life with animals became AnimAI.",
      ],
      whyQuote:
        "The problem was never the people. It was a structure that required carrying.",
      whyLoop: [
        "The field photographs",
        "Posts to a group chat",
        "The office digs it out",
        "Forwards to the client",
        "The phone rings",
      ],
      whyClose: "Vitanima began to remove this loop.",

      storyEyebrow: "OUR PATH",
      storyH2: "How we got here",
      storyLead: [
        "Vitanima did not start out in the companion animal industry.",
        "We met repeating problems first-hand on trade and logistics floors, and turned them into systems. Now we apply the same way of working to turn an animal's everyday life into a record.",
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
          t: "Solving one problem across two industries",
          d: "Living with our own animals, we met the same problem again — what a caregiver knew didn't reach the next decision either. We built Flowstamp for logistics sites and AnimAI for life with animals, applying the same method to both.",
          note: "",
        },
        {
          y: "2026 · NOW",
          k: "EXECUTE",
          t: "Both services are out in the market",
          d: "AnimAI launched and 2,142 people use it; Flowstamp was applied for two months at the logistics site the founder operates and has completed field validation. Three patents are filed, and we are preparing Flowstamp's first external rollout.",
          note: "",
          metrics: [
            { n: "Flowstamp", l: "Field-validated" },
            { n: "AnimAI", l: "Live · 2,142 users" },
            { n: "3", l: "Patents filed" },
          ],
        },
      ],
      storyClose: ["The industry changed.", "The way we solve it did not."],
      storyCloseBody:
        "Have technology take over what users already know, and cut the time spent on what repeats. The industry may change; the way Vitanima solves problems does not.",

      buildEyebrow: "WHAT WE BUILD",
      buildH2: ["Two industries,", "built the same way"],
      buildSub:
        "Making the record left by the field carry straight into the next step. Both services share that structure.",
      build: [
        {
          n: "01",
          t: "Flowstamp",
          s: "Field-validated",
          live: true,
          d: "Photo reports from logistics, manufacturing and distribution sites pass through office confirmation and reach the client automatically. Quotes through invoicing and statistics connect in one loop.",
        },
        {
          n: "02",
          t: "AnimAI",
          s: "Live",
          live: true,
          d: "A companion animal AI service that finds what matters in a caregiver's conversation, records it in the Lifetime Log, and connects it to earlier records to check again.",
        },
      ],
      buildNote:
        "Flowstamp extends from import/export logistics into manufacturing and distribution; AnimAI into the Care Tag and insurance.",

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
          t: "The more the record accumulates, the better we should know",
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
        { k: "Field", v: "SME AX solutions · AI SaaS · data platform" },
        {
          k: "Products & services",
          v: "Flowstamp (field-validated) · AnimAI (live)",
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
          d: "Building and running AX solutions for SMEs",
          sub: "Flowstamp field-validated / AnimAI live",
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

      ctaH2: ["See the two services", "Vitanima is building"],
      ctaLead:
        "Flowstamp has completed field validation and is preparing its first external rollout; AnimAI is used by 2,142 people.",
      ctaNote: "",
      ctaBtn: "About Flowstamp",
      ctaBtn2: "Read from the CEO",
    },
    ceo: {
      eyebrow: "FOUNDER & CEO",
      kicker: "Finding problems on the ground, building and validating them myself.",
      h1: ["I look at the problem", "before the technology"],
      intro: [
        "Technology is a way to solve a problem.",
        "I look first at where people on the ground are spending their time. Then I build the recurring problem away myself, run it, and check it against how users respond.",
        "Vitanima started the same way. We built Flowstamp for logistics sites and AnimAI for life with animals, and we validate both ourselves.",
      ],
      name: "Hunki Kim",
      role: "CEO · Founder · Product · Engineering",

      startEyebrow: "THE STARTING POINT",
      startH2: ["It was never about", "a lack of technology"],
      startSub:
        "Seven years running warehouses and trucks myself, this is what I saw every day.",
      startBody: [
        "The work was done, but the information arrived late. A worker would photograph the job and post it to a group chat; the office would dig it out and forward it to the client.",
        "The client would call to ask where things stood, and if a photo was missing someone had to go back to the field. At month end, a statement was built in a spreadsheet.",
        "Someone on the floor always knew the answer. It just never reached the next person properly.",
      ],
      startQuote: [
        "The problem was never the people.",
        "It was a structure that required carrying.",
      ],

      whyEyebrow: "WHY VITANIMA",
      whyH2: ["Instead of hiring more people,", "I built a system"],
      whyBody: [
        "I had software take over the checking and relaying that repeated on the floor. Photograph the job once, and it passes through office confirmation to the client automatically.",
        "That is Flowstamp, and it runs every day at the logistics site I operate. The time it took to report to a client has fallen sharply.",
        "Living with my own animals, I met the same problem again — what a caregiver knows doesn't reach the next decision. So I built AnimAI the same way.",
      ],
      whyQuote: [
        "The goal is not better technology,",
        "but removing the carrying people had to do.",
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
          d: "Pet taxi brokerage platform · first venture in companion animals",
        },
        { y: "2022–2023", t: "EasyLogi", r: "Founder · CEO", d: "Logistics SaaS" },
        {
          y: "2026–present",
          t: "Vitanima",
          r: "CEO · Product · Engineering",
          d: "Companion animal healthcare AIoT · AnimAI · Care Tag",
        },
      ],

      petEyebrow: "PET INDUSTRY EXPERIENCE",
      petH2: ["This is not my first venture", "in companion animals"],
      petBody: [
        "In 2019, at GN Value Holdings, I built a pet taxi brokerage platform for animal transport.",
        "That was where I saw first-hand which information caregivers had to explain over and over — for transport, clinics, grooming.",
        "That experience became the starting point for the record structure we are building at Vitanima today.",
      ],

      firstEyebrow: "VITANIMA · WHAT I BUILT",
      firstH2: [
        "From product and engineering to sales,",
        "I am executing it directly",
      ],
      firstGrid: [
        { n: "01", t: "Built Flowstamp", d: "Web · mobile · field-validated" },
        { n: "02", t: "Launched AnimAI", d: "iOS · Android · 2,142 users" },
        { n: "03", t: "3 patents", d: "Filed" },
        { n: "04", t: "AI OCR · auto reporting", d: "Running in production" },
        { n: "05", t: "Care Tag", d: "Internal pilot in progress" },
        { n: "06", t: "Field sales", d: "Preparing the first external rollout" },
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
        "I will make what the field records",
        "reach the next person",
      ],
      closeBody: [
        "The smaller the company, the more time people spend carrying information by hand. Giving that time back is what I want to build.",
        "We started on logistics floors, but the same problem exists in manufacturing, distribution and life with animals. One at a time, confirming it is genuinely used, we will widen it.",
      ],
      sign: "Hunki Kim, CEO, Vitanima Inc.",

      ctaH2: "See the two services, already working",
      ctaBtn: "About Flowstamp",
      ctaBtn2: "About the company",
    },
    animai: {
      eyebrow: "SERVICE",
      tag: "Live",
      h1: "AnimAI",
      tagline: ["A companion animal AI service", "connecting conversation and record"],
      lead: [
        "When a caregiver mentions a worry or a change, AnimAI finds what matters and records it at that point in the Lifetime Log.",
        "It reads earlier conversations and health records together and checks again; once a Care Tag is connected, it also sees activity and sleep signals from the same hours.",
      ],
      leadNote:
        "Even without a Care Tag, the Lifetime Log keeps accumulating from conversation and health records alone.",
      iosBtn: "App Store",
      androidBtn: "Google Play",
      siteBtn: "animai.kr",
      status: [
        "AnimAI · Lifetime Log · conversation-based Loop live",
        "Care Tag · internal pilot in progress, Aug 2026",
        "Insurance comparison · service in preparation",
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
        { t: "Life signals", d: "Activity and sleep changes from the Care Tag" },
        { t: "Health records", d: "Clinic records, prescriptions and more" },
      ],
      logResult: "Lifetime Log",
      logResultSub: "One animal's lifetime record",
      logQuote:
        "As time accumulates, a baseline unique to your animal takes shape.",

      signalEyebrow: "CARE TAG · PILOT IN PROGRESS",
      signalH2: ["The hours you cannot see,", "the Care Tag records"],
      signalSub: "A BLE wearable tag that records activity and sleep changes.",
      signalBody: [
        "At home the Home Station collects Care Tag signals; while out, the caregiver's app does.",
        "When activity or sleep patterns differ from the usual, AnimAI checks the actual situation with the caregiver and records that account in the Lifetime Log.",
      ],
      signalQuote: [
        "The Care Tag does not stop at showing numbers.",
        "It connects life signals, with the caregiver's account, into one animal's record.",
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
        "Once validation criteria are met, launch follows ODM, certification and packaging.",
      signalHomeNote:
        "After Pre-A · expanding signal sources to Home Devices for toileting, feeding and weight.",

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
      insFlowNote: "Everyday records carry through, before and after enrolment.",
      insLink: "See how the insurance service is progressing",

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
      bizNote:
        "Partner pet businesses will expand as local touchpoints where caregivers can try the Care Tag in person.",
      bizLink: "About AnimAI Biz",

      ctaH2: [
        "Everyday records carry through,",
        "from health care to insurance",
      ],
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
          sub: "Care Tag signal planned",
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
          stage: "Life signal → Lifetime Log → S5 active enquiry",
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
        "Once connected, activity and sleep changes join the same Lifetime Log, and their meaning is confirmed alongside the caregiver's account.",
      ],
      signalItems: [
        {
          t: "Care Tag",
          d: "A BLE wearable signal source recording activity and sleep changes",
          s: "Aug 2026 · internal pilot in progress",
          sub: "Accelerometer · BLE",
        },
        {
          t: "Home Station",
          d: "A gate to continue collecting Care Tag signals at home; while out, the caregiver's app collects them.",
          s: "To be validated alongside the Care Tag",
          sub: "",
        },
        {
          t: "Home Device",
          d: "Toileting, feeding and weight — signals a tag cannot easily see",
          s: "Expansion planned after Pre-A",
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

      insEyebrow: "RECORD FOR INSURANCE",
      insBadge: "Insurance comparison service in preparation",
      insH2: ["The same record", "is used for insurance too"],
      insSub:
        "Insurance starts not from new data, but from the Lifetime Log already accumulated.",
      insBody: [
        "Insurance comparison usually requires breed, age, medical history and preventive care.",
        "That information is already in the Lifetime Log, so the caregiver does not have to enter it from scratch.",
        "We are preparing so that claims and renewals after enrolment reconnect to the same record, and insurance history need not be managed separately.",
      ],
      insFlow: ["Lifetime Log", "Comparison", "Enrolment", "Claims · renewal"],
      insFlowBack: "Lifetime Log",
      insFlowNote: "Everyday records carry through, before and after enrolment.",
      insLink: "See how the insurance service is progressing",

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
        "AnimAI accumulates the caregiver's conversation in the Lifetime Log, and connects the Care Tag's life signals onto the same timeline. That record is then used again in health care and insurance.",
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
          t: "Flowstamp",
          en: "Flowstamp",
          d: "Rollout and demo enquiries for the field operations solution",
          email: "cs@vitanima.kr",
        },
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
      tagline: "AX for small businesses and SMEs",
      product: "Services",
      company: "Company",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Dict = (typeof dict)["ko"];
export const getDict = (lang: Lang): Dict => dict[lang] as unknown as Dict;
