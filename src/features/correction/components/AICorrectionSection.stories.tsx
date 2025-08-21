import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import AICorrectionSection from './AICorrectionSection';

// 실제 마스터 포트폴리오 데이터
const masterPortfolio = {
  projectName: '언어교환 동아리 운영 및 활성화 프로젝트',
  detailInfo: `- 배경 및 목적: 단순 언어 학습을 넘어 원어민과의 교류를 통해 실질적인 언어 사용 능력과 문화 이해도 향상을 위한 환경 조성
- 프로젝트 범위 및 구성: 회장 1명, 부회장 1명, 기획국 3명(본인 포함), 홍보국 2 명, 대외협력국 2명으로 구성된 팀에서 1년 간 협업 진행
- 대상 및 타깃: 책을 통한 학습에 한계를 느끼고, 원어민 과의 교류를 통해 실질적인 언어 및 문화 이해도 향상을 원하는 동아리 회원
- 핵심 목표 및 성과 기준: 평균 행사 참여율 120% 달성, 만족도 조사 '매우 만족' 70% 이상 확보, 동아리 회원 유지율 25% 달성
- 주요 기술, 방법론 및 툴: 연간/월별 활동 기획안 작성, 기업 연계 프로그램 기획, 변수 대응을 위한 Plan B 시스템 구축`,

  assignedTasks: `[동아리 연간 활동 기획 및 운영 총괄]
- 기획국장으로서 동아리 연간 활동 계획 수립 및 실행 총괄
- 기획국 연간 활동계획안 및 월별 정기모임 운영기획안 작성
- 동아리 전체 회계 관리 및 특별 프로그램 기획/운영 총괄
- 연간/상반기 운영보고 등 회장단 및 타 부서와의 협력 및 보고 업무 수행

[참여자 관계 심화 및 참여율 제고]
- 참여자 간의 깊은 친목 형성이 오히려 동아리 활동 참여율 저하로 이어지는 문제 발생
- 어려움과 극복 과정: 문제 해결을 위해 대외협력국과 협업하여 동아리에서만 제공 가능한 독점적 가치를 만들고자 했다. 기업 연계 프로그램을 바탕으로 '올해 배운 단어로 이력서 쓰기' 특별 프로그램을 기획, 실제 기업의 현직자 첨삭 기회를 제공하여 참여자들의 높은 호응을 이끌어냈다.`,

  keyAchievements: `- 평균 행사 참여율 전년 대비 104.2% 달성
- 동아리 회원 유지율 27.1% 달성 (목표치 25% 초과 달성)
- '매우 만족' 피드백 63.7% 확보
- '이력서 작성' 특별 프로그램, 이전 정기모임 대비 참여율 170% 증가 및 긍정 피드백 72건 확보
- 기업 연계 프로그램을 통해 참여자들의 실질적인 커리어 개발 기회 제공`,

  insights: `- 동아리 운영 전반을 총괄하며 예산 관리, 부서 간 협업 조율, 성과 보고 등 프로젝트 관리 역량과 리더십을 길렀다.
- 참여자 이탈 문제에 직면했을 때, 동아리의 핵심 가치와 참여자에게만 제공할 수 있는 독점적 혜택을 연결하는 프로그램을 기획하며 문제 해결 능력을 향상시켰다.
- 모든 계획은 변수에 직면할 수 있음을 인지하고, Plan B를 미리 준비하여 현장 변수에 유연하게 대응하는 위기관리 능력을 체득했다.
- 진정한 언어 학습은 문화적 교류와 관계 형성에서 비롯되며, 커뮤니티의 가치는 참여자에게 제공하는 고유한 경험 설계에 달려있음을 깨달았다.
- 향후 어떤 프로젝트를 맡게 되더라도, 초기에 다양한 변수를 고려한 시나리오 플래닝을 통해 안정적인 운영 체계를 구축할 것이다.
- 외부 파트너십을 적극적으로 활용하여 프로젝트의 가치를 높이고 참여자에게 실질적인 혜택을 제공하는 기획을 시도할 것이다.`,
};

// 실제 AI 첨삭 결과 - detailInfo 섹션
const detailInfoReviewResults = [
  {
    line_number: 'detailInfo_1',
    original_content:
      '- 배경 및 목적: 단순 언어 학습을 넘어 원어민과의 교류를 통해 실질적인 언어 사용 능력과 문화 이해도 향상을 위한 환경 조성',
    type: 2 as const,
    review_comment:
      '글로벌 MD 직무에 필수적인 문화 이해도와 언어 역량을 보여주는 좋은 배경입니다. 이 경험을 통해 얻은 특정 국가 문화에 대한 이해나 비즈니스 커뮤니케이션 역량 향상 경험을 추가하여 강조하세요.',
  },
  {
    line_number: 'detailInfo_2',
    original_content:
      '- 프로젝트 범위 및 구성: 회장 1명, 부회장 1명, 기획국 3명(본인 포함), 홍보국 2 명, 대외협력국 2명으로 구성된 팀에서 1년 간 협업 진행',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'detailInfo_3',
    original_content:
      '- 대상 및 타깃: 책을 통한 학습에 한계를 느끼고, 원어민 과의 교류를 통해 실질적인 언어 및 문화 이해도 향상을 원하는 동아리 회원',
    type: 1 as const,
    review_comment:
      '타겟 설정이 MD 직무의 고객/팬덤 분석과 직접적인 연관성이 낮습니다. 이 내용을 축소하고, 대신 팬덤의 니즈를 파악하는 역량과 연결하여 서술하는 것을 고려해보세요.',
  },
  {
    line_number: 'detailInfo_4',
    original_content:
      "- 핵심 목표 및 성과 기준: 평균 행사 참여율 120% 달성, 만족도 조사 '매우 만족' 70% 이상 확보, 동아리 회원 유지율 25% 달성",
    type: 2 as const,
    review_comment:
      '수치 기반의 목표 설정은 레진코믹스의 데이터 기반 운영 방식과 일치하는 중요한 역량입니다. 이 목표 설정을 위해 어떤 데이터를 분석했는지(예: 이전 활동 데이터) 추가하여 분석적 사고를 부각시키세요.',
  },
  {
    line_number: 'detailInfo_5',
    original_content:
      '- 주요 기술, 방법론 및 툴: 연간/월별 활동 기획안 작성, 기업 연계 프로그램 기획, 변수 대응을 위한 Plan B 시스템 구축',
    type: 0 as const,
    review_comment: null,
  },
];

// 사용자가 JSON을 입력해 미리보기할 수 있도록 하는 유틸리티
type SectionKey = 'detailInfo' | 'assignedTasks' | 'keyAchievements' | 'insights';

interface LineReview {
  line_number: string;
  original_content: string;
  type: 0 | 1 | 2;
  review_comment: string | null;
}

interface SectionData {
  lines: LineReview[];
  field_summary?: string;
}

interface InputJson {
  detailInfo?: SectionData;
  assignedTasks?: SectionData;
  keyAchievements?: SectionData;
  insights?: SectionData;
}

type ExtraArgs = { section?: SectionKey; inputJson?: InputJson };
type StoryArgs = ComponentProps<typeof AICorrectionSection> & ExtraArgs;

const SECTION_TITLES: Record<SectionKey, string> = {
  detailInfo: '상세정보',
  assignedTasks: '담당 업무',
  keyAchievements: '주요 성과',
  insights: '배운 점',
};

const FIELD_SUMMARIES_FALLBACK: Record<SectionKey, { summary: string; contribution: number }> = {
  detailInfo: {
    summary:
      "프로젝트 배경과 목표 설정은 글로벌 MD 직무와 연결점이 많습니다. '문화 이해도'를 '글로벌 시장 및 팬덤 문화 이해'로 구체화하세요. 수치 기반 목표 설정을 레진코믹스의 '데이터 기반 운영'과 연결하여 강조하세요. '기업 연계 프로그램' 기획 경험을 '신규 파트너사 발굴 및 협업' 역량으로 발전시키세요.",
    contribution: 90,
  },
  assignedTasks: {
    summary:
      "담당 업무가 글로벌 MD의 운영 관리 업무와 잘 맞는 구조를 보여줍니다. '회계 관리' 경험을 'ERP를 활용한 매출 정산' 능력으로 구체화하세요. '기획안 작성' 경험을 'Excel, PowerPoint를 활용한 사업 계획 및 성과 보고' 역량으로 강조하세요. 문제 해결 과정을 '팬덤 니즈 분석 및 IP 기반 상품 기획' 사례로 재구성하세요.",
    contribution: 85,
  },
  keyAchievements: {
    summary:
      "정량적 성과 제시는 우수하나 웹툰 IP 비즈니스와의 연관성 강화가 필요합니다. '참여율 증가'를 '팬덤 확장 및 참여도 증진' 관점에서 재해석하세요. '특별 프로그램 성공' 사례를 '특정 타겟을 노린 MD 상품 기획 및 판매 성공' 사례로 연결하세요. '기업 연계' 성과를 '신규 유통 채널 확보' 또는 '파트너십 구축'의 관점에서 서술하세요.",
    contribution: 95,
  },
  insights: {
    summary:
      "전반적으로 프로젝트 관리와 문제 해결 역량은 잘 드러나지만 글로벌 비즈니스 인사이트가 부족합니다. '프로젝트 관리' 역량을 '글로벌 MD 상품의 기획-생산-유통 전 과정 관리' 능력으로 확장시키세요. 'Plan B' 경험을 '해외 수출입 과정의 리스크(통관, 물류 등) 관리' 능력으로 구체화하세요. '외부 파트너십'에 대한 포부를 '레진코믹스 IP를 활용한 신규 글로벌 시장 개척' 계획으로 발전시키세요.",
    contribution: 75,
  },
};

function buildPropsFromJson(data: InputJson, section: SectionKey) {
  const sec = data?.[section];
  if (!sec || !Array.isArray(sec.lines)) {
    throw new Error('선택한 섹션 데이터가 올바르지 않습니다.');
  }
  const content = sec.lines.map((l) => l.original_content).join('\n');
  const reviewResults = sec.lines as LineReview[];
  const fieldSummary = sec.field_summary ?? '';
  return { title: SECTION_TITLES[section], content, reviewResults, fieldSummary };
}

// assignedTasks 섹션
const assignedTasksReviewResults = [
  {
    line_number: 'assignedTasks_1',
    original_content: '- 기획국장으로서 동아리 연간 활동 계획 수립 및 실행 총괄',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'assignedTasks_2',
    original_content: '- 기획국 연간 활동계획안 및 월별 정기모임 운영기획안 작성',
    type: 2 as const,
    review_comment:
      'JD의 문서 프로그램 활용 능력과 직접적으로 연결되는 경험입니다. Excel, PowerPoint 등 사용한 툴을 명시하여 직무 역량을 구체적으로 어필하세요.',
  },
  {
    line_number: 'assignedTasks_3',
    original_content: '- 동아리 전체 회계 관리 및 특별 프로그램 기획/운영 총괄',
    type: 2 as const,
    review_comment:
      "회계 관리 경험은 JD의 '공급 매출 정산 업무'와 직접 연결되는 핵심 경험입니다. 관리한 예산 규모나 사용한 회계 방식(엑셀 등)을 명시하여 ERP 시스템 학습 능력을 강조하세요.",
  },
  {
    line_number: 'assignedTasks_4',
    original_content: '- 연간/상반기 운영보고 등 회장단 및 타 부서와의 협력 및 보고 업무 수행',
    type: 2 as const,
    review_comment:
      '대내외 소통 능력과 팀워크 역량을 보여주는 좋은 사례입니다. 정기 회의, 협업 툴 사용 등 구체적인 소통 및 보고 방식을 추가하여 커뮤니케이션 스킬을 강조하세요.',
  },
  {
    line_number: 'assignedTasks_5',
    original_content:
      '- 참여자 간의 깊은 친목 형성이 오히려 동아리 활동 참여율 저하로 이어지는 문제 발생',
    type: 1 as const,
    review_comment:
      "문제 상황이 MD 직무와 직접적인 관련성이 낮은 동아리 내부 문제입니다. '참여자 니즈 변화로 인한 참여율 정체'와 같이 비즈니스 관점의 문제로 재정의하여 축약하세요.",
  },
  {
    line_number: 'assignedTasks_6',
    original_content:
      "- 어려움과 극복 과정: 문제 해결을 위해 대외협력국과 협업하여 동아리에서만 제공 가능한 독점적 가치를 만들고자 했다. 기업 연계 프로그램을 바탕으로 '올해 배운 단어로 이력서 쓰기' 특별 프로그램을 기획, 실제 기업의 현직자 첨삭 기회를 제공하여 참여자들의 높은 호응을 이끌어냈다.",
    type: 2 as const,
    review_comment:
      '독점적 가치 제공과 기업 연계는 팬덤 비즈니스 및 파트너사 관리와 유사한 접근 방식입니다. 이 경험을 팬덤 니즈를 파악하고 IP를 활용한 특별 MD를 기획하는 과정에 비유하여 설명하면 직무 연관성을 극대화할 수 있습니다.',
  },
];

// keyAchievements 섹션
const keyAchievementsReviewResults = [
  {
    line_number: 'keyAchievements_1',
    original_content: '- 평균 행사 참여율 전년 대비 104.2% 달성',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'keyAchievements_2',
    original_content: '- 동아리 회원 유지율 27.1% 달성 (목표치 25% 초과 달성)',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'keyAchievements_3',
    original_content: "- '매우 만족' 피드백 63.7% 확보",
    type: 1 as const,
    review_comment:
      '설정했던 목표치(70%)에 미달한 성과로, 강점으로 어필하기에는 아쉬움이 있습니다. 다른 강력한 성과들이 있으므로 이 항목은 제외하여 강점을 집중시키는 것을 권장합니다.',
  },
  {
    line_number: 'keyAchievements_4',
    original_content:
      "- '이력서 작성' 특별 프로그램, 이전 정기모임 대비 참여율 170% 증가 및 긍정 피드백 72건 확보",
    type: 2 as const,
    review_comment:
      '특정 기획이 가져온 폭발적인 성과를 수치로 증명하는 가장 강력한 부분입니다. 긍정 피드백을 주요 키워드로 분류하여 피드백의 질적 측면도 함께 어필하면 효과적입니다.',
  },
  {
    line_number: 'keyAchievements_5',
    original_content: '- 기업 연계 프로그램을 통해 참여자들의 실질적인 커리어 개발 기회 제공',
    type: 2 as const,
    review_comment:
      '기업 연계 경험은 MD 유통 업체 관리 능력의 기반이 될 수 있습니다. 어떤 과정(제안서 발송, 미팅 등)을 통해 파트너십을 구축했는지 구체화하여 협상 및 관리 역량을 강조하세요.',
  },
];

// insights 섹션
const insightsReviewResults = [
  {
    line_number: 'insights_1',
    original_content:
      '- 동아리 운영 전반을 총괄하며 예산 관리, 부서 간 협업 조율, 성과 보고 등 프로젝트 관리 역량과 리더십을 길렀다.',
    type: 2 as const,
    review_comment:
      "프로젝트 관리 역량을 잘 요약했지만, MD 직무 용어로 변경하면 더욱 전문적으로 보입니다. '예산 관리'를 '매출/비용 관리'로, '부서 간 협업'을 '유관부서/파트너사 협업'으로 재구성하세요.",
  },
  {
    line_number: 'insights_2',
    original_content:
      '- 참여자 이탈 문제에 직면했을 때, 동아리의 핵심 가치와 참여자에게만 제공할 수 있는 독점적 혜택을 연결하는 프로그램을 기획하며 문제 해결 능력을 향상시켰다.',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'insights_3',
    original_content:
      '- 모든 계획은 변수에 직면할 수 있음을 인지하고, Plan B를 미리 준비하여 현장 변수에 유연하게 대응하는 위기관리 능력을 체득했다.',
    type: 2 as const,
    review_comment:
      "위기관리 능력은 MD 수출 과정의 리스크 관리에 필수적입니다. 이 경험을 '수출 과정의 통관/배송 지연 등 잠재 리스크 관리'와 연결하여 직무 기여도를 어필하세요.",
  },
  {
    line_number: 'insights_4',
    original_content:
      '- 진정한 언어 학습은 문화적 교류와 관계 형성에서 비롯되며, 커뮤니티의 가치는 참여자에게 제공하는 고유한 경험 설계에 달려있음을 깨달았다.',
    type: 1 as const,
    review_comment:
      "표현이 다소 추상적이고 일반적인 소회에 가깝습니다. 이 깨달음을 '팬덤 비즈니스의 핵심은 팬들에게 고유한 경험을 제공하는 것'과 같이 직무와 직접 연결되는 인사이트로 변경하세요.",
  },
  {
    line_number: 'insights_5',
    original_content:
      '- 향후 어떤 프로젝트를 맡게 되더라도, 초기에 다양한 변수를 고려한 시나리오 플래닝을 통해 안정적인 운영 체계를 구축할 것이다.',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 'insights_6',
    original_content:
      '- 외부 파트너십을 적극적으로 활용하여 프로젝트의 가치를 높이고 참여자에게 실질적인 혜택을 제공하는 기획을 시도할 것이다.',
    type: 2 as const,
    review_comment:
      "외부 파트너십 활용 포부는 JD의 '유통 업체 관리'와 정확히 일치합니다. '레진코믹스의 프리미엄 IP를 활용해 신규 글로벌 파트너를 발굴하겠다'는 식으로 구체적인 실행 의지를 보여주세요.",
  },
];

const meta: Meta<StoryArgs> = {
  title: 'Features/Correction/AICorrectionSection',
  component: AICorrectionSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
AI 포트폴리오 첨삭 시스템 컴포넌트입니다. 채용 전문가이자 포트폴리오 첨삭 전문가의 관점에서 마스터 포트폴리오를 기업의 채용 정보(JD)와 기업 분석 정보에 맞춰 줄 단위로 세밀하게 첨삭하고 결과를 표시합니다.

**AI 첨삭 시스템 특징:**
- 채용 전문가 + 포트폴리오 첨삭 전문가 역할 수행
- 기업 적합성, 직무 적합성, 내용 품질 3가지 기준으로 평가
- 줄 단위 분석: "-"로 시작하는 각 항목을 하나의 줄로 간주하여 첨삭
- 필드별 독립적 줄 번호 부여 (예: detailInfo_1, assignedTasks_2)

**포트폴리오 구조 (4개 필드):**
- **detailInfo**: 프로젝트 배경, 목적, 범위, 대상, 목표, 방법론 등
- **assignedTasks**: 담당 업무와 수행 과정
- **keyAchievements**: 주요 성과와 결과
- **insights**: 배운 점과 성장 포인트

**첨삭 타입 분류:**
- **Type 0**: 유지 (표시 없음) - 기업/직무와 적절히 연관되어 수정 불필요
- **Type 1**: 축소/제외 권고 (빨간색) - 관련성이 낮거나 일반적/추상적인 내용
- **Type 2**: 구체화/강조 권고 (초록색) - 기업 핵심 가치/JD 필수 요구사항과 매칭되는 강화 가능한 내용

**첨삭 코멘트 형식:**
- "[이유 한 문장]. [제안 한 문장]." 형식으로 구체적이고 실행 가능한 개선 방안 제공

**JSON 출력 형식:**
\`\`\`json
{
  "detailInfo": {
    "lines": [
      {
        "line_number": "detailInfo_1",
        "original_content": "- 원본 줄 내용",
        "type": 0,
        "review_comment": null
      }
    ],
    "field_summary": "필드별 총평 - 전체적인 개선 방향과 최대 3개의 구체적 추천사항"
  }
}
\`\`\`

**필드별 총평:**
- 줄 단위 평가에 포함되지 않은 필드 전체 개선 방향 제시
- "[필드 평가 한 문장]. [추천 1]. [추천 2]. [추천 3]." 형식
- 평가 표현: "~와 잘 맞는", "~와 연결점을 찾을 수 있는", "~와 거리가 먼" 등

**주요 기능:**
- 토글 활성화 시 텍스트 라인에 첨삭 타입별 하이라이트 배경 적용
- 첨삭 코멘트를 번호 형태(1., 2.)로 체계적 표시
- 필드별 총평과 줄 단위 첨삭을 동시 제공
- 실시간 첨삭 결과 확인 및 반응형 레이아웃 지원
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션 제목',
    },
    content: {
      control: { type: 'text', disable: true },
      description: '포트폴리오 원본 내용',
    },
    reviewResults: {
      control: { type: 'object', disable: true },
      description: 'AI 첨삭 결과 데이터',
    },
    contribution: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: '기여도 퍼센트',
    },
    initialReductionToggle: {
      control: 'boolean',
      description: '축소/제외 토글 초기 상태',
    },
    initialConcretizationToggle: {
      control: 'boolean',
      description: '구체화/강조 토글 초기 상태',
    },
    section: {
      control: { type: 'select' },
      options: ['detailInfo', 'assignedTasks', 'keyAchievements', 'insights'],
      description: '미리볼 섹션 선택',
    },
    inputJson: {
      control: 'object',
      description:
        '아래 형식의 JSON을 붙여넣으면 해당 섹션을 렌더링합니다. { detailInfo|assignedTasks|keyAchievements|insights: { lines: [...], field_summary: "..." } }',
    },
  },
  args: {
    title: '상세정보',
    content: masterPortfolio.detailInfo,
    reviewResults: detailInfoReviewResults,
    fieldSummary:
      "프로젝트 배경과 목표 설정은 글로벌 MD 직무와 연결점이 많습니다. '문화 이해도'를 '글로벌 시장 및 팬덤 문화 이해'로 구체화하세요. 수치 기반 목표 설정을 레진코믹스의 '데이터 기반 운영'과 연결하여 강조하세요. '기업 연계 프로그램' 기획 경험을 '신규 파트너사 발굴 및 협업' 역량으로 발전시키세요.",
    contribution: 90,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: 'detailInfo',
    inputJson: undefined,
  },
  render: (args) => {
    // JSON 입력을 우선 사용, 없거나 파싱 실패 시 섹션별 더미 데이터로 폴백
    let title = SECTION_TITLES[args.section as SectionKey];
    let content = masterPortfolio.detailInfo;
    let reviewResults = detailInfoReviewResults as LineReview[];
    let fieldSummary = FIELD_SUMMARIES_FALLBACK[args.section as SectionKey].summary;
    let contribution = FIELD_SUMMARIES_FALLBACK[args.section as SectionKey].contribution;

    try {
      if (args.inputJson) {
        const props = buildPropsFromJson(args.inputJson as InputJson, args.section as SectionKey);
        title = props.title;
        content = props.content;
        reviewResults = props.reviewResults;
        fieldSummary = props.fieldSummary;
      } else {
        // 섹션별 기본 데이터 선택
        switch (args.section as SectionKey) {
          case 'detailInfo':
            content = masterPortfolio.detailInfo;
            reviewResults = detailInfoReviewResults as LineReview[];
            break;
          case 'assignedTasks':
            content = masterPortfolio.assignedTasks;
            reviewResults = assignedTasksReviewResults as LineReview[];
            break;
          case 'keyAchievements':
            content = masterPortfolio.keyAchievements;
            reviewResults = keyAchievementsReviewResults as LineReview[];
            break;
          case 'insights':
            content = masterPortfolio.insights;
            reviewResults = insightsReviewResults as LineReview[];
            break;
        }
      }
    } catch (e) {
      // 파싱 오류 시 폴백 유지
      console.warn('입력 JSON 파싱 오류: ', e);
    }

    return (
      <AICorrectionSection
        title={title}
        content={content}
        reviewResults={reviewResults}
        fieldSummary={fieldSummary}
        contribution={args.contribution ?? contribution}
        initialReductionToggle={args.initialReductionToggle}
        initialConcretizationToggle={args.initialConcretizationToggle}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `이 스토리는 사용자가 JSON을 직접 입력하여 미리볼 수 있도록 구성되었습니다. 

1) 우측 Controls의 section으로 섹션을 선택하세요. 
2) inputJson 컨트롤에 JSON을 붙여넣으면 해당 데이터로 렌더링됩니다. 
3) 미입력/에러 시 섹션별 기본 예시 데이터로 표시됩니다.`,
      },
    },
  },
};

export const WithReductionHighlight: Story = {
  args: {
    initialReductionToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**Type 1 첨삭 (축소/제외 권고)** 하이라이트가 활성화된 상태입니다. 

**축소/제외 권고 기준:**
- 기업/직무와 관련성이 낮거나 없는 내용
- 지나치게 일반적이거나 추상적인 표현
- 중복되거나 불필요하게 장황한 설명
- 해당 직무 수준에 맞지 않는 내용

**빨간색 하이라이트 적용 예시:**
- "동아리 회원" 타겟 설정 → 팬덤/소비자 니즈 파악 역량으로 연결 권고
- 일반적인 학습 목적 → 글로벌 비즈니스 커뮤니케이션 역량 개발로 재구성 권고

채용 전문가 관점에서 기업과 직무에 부적합하다고 판단된 내용들이 빨간색 배경과 왼쪽 경계선으로 시각적으로 구분됩니다.`,
      },
    },
  },
};

export const WithConcretizationHighlight: Story = {
  args: {
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**Type 2 첨삭 (구체화/강조 권고)** 하이라이트가 활성화된 상태입니다.

**구체화/강조 권고 기준:**
- 기업의 핵심 가치/역량과 직접적으로 연결되는 내용
- JD의 필수 요구사항과 매칭되는 경험
- 더 구체화하면 강력한 어필 포인트가 될 수 있는 내용
- 정량적 성과로 표현 가능한 내용

**초록색 하이라이트 적용 예시:**
- 문화 이해도 배경 → 글로벌 역량 강조 및 구체적 국가/문화권 명시 권고
- 수치 기반 목표 설정 → 데이터 분석 과정과 근거 추가 권고
- 회계 관리 경험 → ERP 시스템 연결 및 예산 규모 구체화 권고

기업과 직무에 최적화된 강력한 어필 포인트로 발전 가능한 내용들이 초록색 배경으로 하이라이트되며, 구체적인 강화 방향이 번호와 함께 표시됩니다.`,
      },
    },
  },
};

export const WithAllHighlights: Story = {
  args: {
    initialReductionToggle: true,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**모든 첨삭 하이라이트가 활성화**된 상태입니다. 

**첨삭 타입별 색상 구분:**
- 🔴 **빨간색 (Type 1)**: 축소/제외 권고 - 기업/직무 관련성 낮음, 추상적 표현
- 🟢 **초록색 (Type 2)**: 구체화/강조 권고 - 핵심 역량 매칭, 강화 가능한 내용
- ⚪ **표시 없음 (Type 0)**: 유지 - 적절한 연관성과 구체성을 갖춘 상태

**AI 첨삭 프로세스:**
1. 기업/직무 핵심 키워드 추출 및 분석
2. 필드별 줄 단위 분석 (detailInfo, assignedTasks, keyAchievements, insights)
3. 각 줄을 기업/직무 키워드와 매칭하여 첨삭 타입 결정
4. "[이유 한 문장]. [제안 한 문장]." 형식의 구체적 개선 방안 제시

채용 전문가 관점에서 레진코믹스 글로벌 MD 직무에 최적화된 포트폴리오 방향을 한눈에 파악할 수 있습니다.`,
      },
    },
  },
};

export const AssignedTasksSection: Story = {
  args: {
    title: '담당 업무',
    content: masterPortfolio.assignedTasks,
    reviewResults: assignedTasksReviewResults,
    fieldSummary:
      "담당 업무가 글로벌 MD의 운영 관리 업무와 잘 맞는 구조를 보여줍니다. '회계 관리' 경험을 'ERP를 활용한 매출 정산' 능력으로 구체화하세요. '기획안 작성' 경험을 'Excel, PowerPoint를 활용한 사업 계획 및 성과 보고' 역량으로 강조하세요. 문제 해결 과정을 '팬덤 니즈 분석 및 IP 기반 상품 기획' 사례로 재구성하세요.",
    contribution: 85,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**담당 업무** 섹션입니다. 

**AI 첨삭 필드별 총평:**
담당 업무가 글로벌 MD의 운영 관리 업무와 잘 맞는 구조를 보여줍니다. '회계 관리' 경험을 'ERP를 활용한 매출 정산' 능력으로 구체화하세요. '기획안 작성' 경험을 'Excel, PowerPoint를 활용한 사업 계획 및 성과 보고' 역량으로 강조하세요. 문제 해결 과정을 '팬덤 니즈 분석 및 IP 기반 상품 기획' 사례로 재구성하세요.

**주요 하이라이트 내용 (Type 분포: 2/4/0):**
- 문서 프로그램 활용 → Excel, PowerPoint 구체화 권고 (초록색)
- 회계 관리 → ERP 시스템 연결 권고 (초록색)
- 협력 및 보고 → 커뮤니케이션 스킬 강조 권고 (초록색)
- 기업 연계 → 팬덤 MD 기획 과정 연결 권고 (초록색)
- 친목 문제 → 비즈니스 관점으로 재정의 권고 (빨간색)

직무 핵심 역량과 연결되는 경험들에 대한 AI 첨삭을 하이라이트로 시각적으로 확인할 수 있습니다.`,
      },
    },
  },
};

export const KeyAchievementsSection: Story = {
  args: {
    title: '주요 성과',
    content: masterPortfolio.keyAchievements,
    reviewResults: keyAchievementsReviewResults,
    fieldSummary:
      "정량적 성과 제시는 우수하나 웹툰 IP 비즈니스와의 연관성 강화가 필요합니다. '참여율 증가'를 '팬덤 확장 및 참여도 증진' 관점에서 재해석하세요. '특별 프로그램 성공' 사례를 '특정 타겟을 노린 MD 상품 기획 및 판매 성공' 사례로 연결하세요. '기업 연계' 성과를 '신규 유통 채널 확보' 또는 '파트너십 구축'의 관점에서 서술하세요.",
    contribution: 95,
    initialReductionToggle: true,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**주요 성과** 섹션입니다. 

**AI 첨삭 필드별 총평:**
정량적 성과 제시는 우수하나 웹툰 IP 비즈니스와의 연관성 강화가 필요합니다. '참여율 증가'를 '팬덤 확장 및 참여도 증진' 관점에서 재해석하세요. '특별 프로그램 성공' 사례를 '특정 타겟을 노린 MD 상품 기획 및 판매 성공' 사례로 연결하세요. '기업 연계' 성과를 '신규 유통 채널 확보' 또는 '파트너십 구축'의 관점에서 서술하세요.

**성과 평가 결과 (Type 분포: 2/1/2):**
- 목표 미달 성과(63.7%) → 제외 권고 (빨간색)
- 폭발적 성과(170% 증가) → 질적 분석 추가 권고 (초록색)
- 파트너십 성과 → 구체적 과정 명시 권고 (초록색)

정량적 성과 중 목표 달성도에 따라 하이라이트 색상이 구분되어 표시됩니다.`,
      },
    },
  },
};

export const InsightsSection: Story = {
  args: {
    title: '배운 점',
    content: masterPortfolio.insights,
    reviewResults: insightsReviewResults,
    fieldSummary:
      "전반적으로 프로젝트 관리와 문제 해결 역량은 잘 드러나지만 글로벌 비즈니스 인사이트가 부족합니다. '프로젝트 관리' 역량을 '글로벌 MD 상품의 기획-생산-유통 전 과정 관리' 능력으로 확장시키세요. 'Plan B' 경험을 '해외 수출입 과정의 리스크(통관, 물류 등) 관리' 능력으로 구체화하세요. '외부 파트너십'에 대한 포부를 '레진코믹스 IP를 활용한 신규 글로벌 시장 개척' 계획으로 발전시키세요.",
    contribution: 75,
    initialReductionToggle: true,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**배운 점** 섹션입니다. 

**AI 첨삭 필드별 총평:**
전반적으로 프로젝트 관리와 문제 해결 역량은 잘 드러나지만 글로벌 비즈니스 인사이트가 부족합니다. '프로젝트 관리' 역량을 '글로벌 MD 상품의 기획-생산-유통 전 과정 관리' 능력으로 확장시키세요. 'Plan B' 경험을 '해외 수출입 과정의 리스크(통관, 물류 등) 관리' 능력으로 구체화하세요. '외부 파트너십'에 대한 포부를 '레진코믹스 IP를 활용한 신규 글로벌 시장 개척' 계획으로 발전시키세요.

**인사이트 평가 결과 (Type 분포: 2/1/3):**
- 직무 연관 역량 → MD 용어로 구체화 권고 (초록색)
- 위기관리 능력 → MD 수출 리스크와 연결 권고 (초록색)
- 추상적 표현 → 팬덤 비즈니스와 연결 권고 (빨간색)
- 파트너십 포부 → 구체적 실행 의지 표현 권고 (초록색)

추상적인 표현과 직무 연관 인사이트가 하이라이트 색상으로 구분됩니다.`,
      },
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story:
          '모바일 화면에서의 AI 첨삭 섹션입니다. 반응형 레이아웃이 적용되어 세로 배치로 변경되며, 하이라이트 기능은 동일하게 작동합니다.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    // 2초 후 축소/제외 토글 활성화
    setTimeout(() => {
      const reductionToggle = canvas.querySelector('img[alt="축소 제거 토글"]');
      if (reductionToggle) {
        (reductionToggle as HTMLElement).click();
      }
    }, 2000);

    // 4초 후 구체화/강조 토글 활성화
    setTimeout(() => {
      const concretizationToggle = canvas.querySelector('img[alt="구체화 토글"]');
      if (concretizationToggle) {
        (concretizationToggle as HTMLElement).click();
      }
    }, 4000);
  },
  parameters: {
    docs: {
      description: {
        story: `**실제 마스터 포트폴리오 데이터로 하이라이트 기능을 시연**합니다.

**인터랙션 시퀀스:**
1. 2초 후: Type 1 토글 → 빨간색 하이라이트 표시
2. 4초 후: Type 2 토글 → 초록색 하이라이트 표시

텍스트 라인별로 정확하게 적용되는 하이라이트 배경과 번호로 정리된 첨삭 코멘트를 통해 완성도 높은 포트폴리오 첨삭 기능을 확인할 수 있습니다.`,
      },
    },
  },
};
