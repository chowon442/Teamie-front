import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AICorrectionSection from './AICorrectionSection';

// 실제 마스터 포트폴리오 데이터
const masterPortfolio = {
  projectName: '언어교환 동아리 운영 및 활성화 프로젝트',
  detailInfo: `배경 및 목적: 단순 언어 학습을 넘어 원어민과의 교류를 통해 실질적인 언어 사용 능력과 문화 이해도 향상을 위한 환경 조성
프로젝트 범위 및 구성: 회장 1명, 부회장 1명, 기획국 3명(본인 포함), 홍보국 2명, 대외협력국 2명으로 구성된 팀에서 1년 간 협업 진행
대상 및 타깃: 책을 통한 학습에 한계를 느끼고, 원어민과의 교류를 통해 실질적인 언어 및 문화 이해도 향상을 원하는 동아리 회원
핵심 목표 및 성과 기준: 평균 행사 참여율 120% 달성, 만족도 조사 '매우 만족' 70% 이상 확보, 동아리 회원 유지율 25% 달성
주요 기술, 방법론 및 툴: 연간/월별 활동 기획안 작성, 기업 연계 프로그램 기획, 변수 대응을 위한 Plan B 시스템 구축`,

  assignedTasks: `기획국장으로서 동아리 연간 활동 계획 수립 및 실행 총괄
기획국 연간 활동계획안 및 월별 정기모임 운영기획안 작성
동아리 전체 회계 관리 및 특별 프로그램 기획/운영 총괄
연간/상반기 운영보고 등 회장단 및 타 부서와의 협력 및 보고 업무 수행
참여자 간의 깊은 친목 형성이 오히려 동아리 활동 참여율 저하로 이어지는 문제 발생
어려움과 극복 과정: 문제 해결을 위해 대외협력국과 협업하여 동아리에서만 제공 가능한 독점적 가치를 만들고자 했다. 기업 연계 프로그램을 바탕으로 '올해 배운 단어로 이력서 쓰기' 특별 프로그램을 기획, 실제 기업의 현직자 첨삭 기회를 제공하여 참여자들의 높은 호응을 이끌어냈다.`,

  keyAchievements: `평균 행사 참여율 전년 대비 104.2% 달성
동아리 회원 유지율 27.1% 달성 (목표치 25% 초과 달성)
'매우 만족' 피드백 63.7% 확보
'이력서 작성' 특별 프로그램, 이전 정기모임 대비 참여율 170% 증가 및 긍정 피드백 72건 확보
기업 연계 프로그램을 통해 참여자들의 실질적인 커리어 개발 기회 제공`,

  insights: `동아리 운영 전반을 총괄하며 예산 관리, 부서 간 협업 조율, 성과 보고 등 프로젝트 관리 역량과 리더십을 길렀다.
참여자 이탈 문제에 직면했을 때, 동아리의 핵심 가치와 참여자에게만 제공할 수 있는 독점적 혜택을 연결하는 프로그램을 기획하며 문제 해결 능력을 향상시켰다.
모든 계획은 변수에 직면할 수 있음을 인지하고, Plan B를 미리 준비하여 현장 변수에 유연하게 대응하는 위기관리 능력을 체득했다.
진정한 언어 학습은 문화적 교류와 관계 형성에서 비롯되며, 커뮤니티의 가치는 참여자에게 제공하는 고유한 경험 설계에 달려있음을 깨달았다.
향후 어떤 프로젝트를 맡게 되더라도, 초기에 다양한 변수를 고려한 시나리오 플래닝을 통해 안정적인 운영 체계를 구축할 것이다.
외부 파트너십을 적극적으로 활용하여 프로젝트의 가치를 높이고 참여자에게 실질적인 혜택을 제공하는 기획을 시도할 것이다.`,
};

// 실제 AI 첨삭 결과
const realReviewResults = [
  {
    line_number: 1,
    original_content: 'projectName: 언어교환 동아리 운영 및 활성화 프로젝트',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 2,
    original_content:
      '배경 및 목적: 단순 언어 학습을 넘어 원어민과의 교류를 통해 실질적인 언어 사용 능력과 문화 이해도 향상을 위한 환경 조성',
    type: 2 as const,
    review_comment:
      "이유: '글로벌 MD' 직무에 필수적인 '문화 이해도' 역량을 보여주는 좋은 배경입니다. 제안: 이 경험을 통해 얻은 특정 국가/문화권에 대한 이해나, 다문화 환경에서의 소통 경험을 간략하게 추가하면 글로벌 역량을 더욱 강조할 수 있습니다.",
  },
  {
    line_number: 3,
    original_content:
      '프로젝트 범위 및 구성: 회장 1명, 부회장 1명, 기획국 3명(본인 포함), 홍보국 2명, 대외협력국 2명으로 구성된 팀에서 1년 간 협업 진행',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 4,
    original_content:
      '대상 및 타깃: 책을 통한 학습에 한계를 느끼고, 원어민과의 교류를 통해 실질적인 언어 및 문화 이해도 향상을 원하는 동아리 회원',
    type: 1 as const,
    review_comment:
      "이유: 동아리 회원이라는 타겟 설정은 MD 직무와의 직접적인 연관성이 낮습니다. 제안: 이 내용을 축소하고, 대신 이 경험을 통해 어떻게 '팬덤'이나 '소비자'의 니즈를 파악하는 역량을 길렀는지 연결하여 서술하는 것을 고려해보세요.",
  },
  {
    line_number: 5,
    original_content:
      "핵심 목표 및 성과 기준: 평균 행사 참여율 120% 달성, 만족도 조사 '매우 만족' 70% 이상 확보, 동아리 회원 유지율 25% 달성",
    type: 2 as const,
    review_comment:
      "이유: 수치 기반의 목표 설정은 레진코믹스의 '데이터 기반 운영' 방식과 일치하는 중요한 역량입니다. 제안: 이 목표들을 설정하기 위해 어떤 데이터를 분석했는지(예: 이전 활동 데이터, 설문조사 등)를 추가하여 분석적 사고를 더욱 부각시키세요.",
  },
  {
    line_number: 6,
    original_content:
      '주요 기술, 방법론 및 툴: 연간/월별 활동 기획안 작성, 기업 연계 프로그램 기획, 변수 대응을 위한 Plan B 시스템 구축',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 7,
    original_content: '기획국장으로서 동아리 연간 활동 계획 수립 및 실행 총괄',
    type: 0 as const,
    review_comment: null,
  },
  {
    line_number: 8,
    original_content: '기획국 연간 활동계획안 및 월별 정기모임 운영기획안 작성',
    type: 2 as const,
    review_comment:
      "이유: JD의 '문서 프로그램 엑셀 활용 능력'과 직접적으로 연결됩니다. 제안: '엑셀을 활용하여 월별 예산 및 성과 추적 대시보드를 만들었다' 와 같이 사용한 툴(Excel, PowerPoint 등)을 명시하여 직무 역량을 구체적으로 어필하세요.",
  },
  {
    line_number: 9,
    original_content: '동아리 전체 회계 관리 및 특별 프로그램 기획/운영 총괄',
    type: 2 as const,
    review_comment:
      "이유: '회계 관리' 경험은 JD의 '공급 매출 정산 업무' 및 'ERP 시스템' 활용과 가장 직접적으로 연결되는 핵심 경험입니다. 제안: 관리했던 예산의 규모, 사용했던 회계 방식이나 툴(엑셀 등)을 구체적으로 명시하고, 이를 통해 어떻게 ERP 시스템을 빠르게 학습하고 기여할 수 있을지 연결하여 강조하세요.",
  },
  {
    line_number: 10,
    original_content: '연간/상반기 운영보고 등 회장단 및 타 부서와의 협력 및 보고 업무 수행',
    type: 2 as const,
    review_comment:
      "이유: '대내/외 원활한 소통 능력'과 '팀워크'라는 핵심 역량을 보여줍니다. 제안: 어떤 방식으로 타 부서와 협력하고 보고했는지(예: 정기 회의, 협업 툴 사용 등) 구체적인 소통 방식을 추가하여 커뮤니케이션 스킬을 강조하세요.",
  },
  {
    line_number: 11,
    original_content:
      '참여자 간의 깊은 친목 형성이 오히려 동아리 활동 참여율 저하로 이어지는 문제 발생',
    type: 1 as const,
    review_comment:
      "이유: 문제 상황이 동아리 내부의 친목 문제로, MD 직무와 직접적인 관련성이 낮습니다. 제안: 이 부분은 과감히 삭제하거나, '참여자 니즈 변화로 인한 참여율 정체 문제 발생'과 같이 비즈니스 관점의 문제로 재정의하여 축약하세요.",
  },
  {
    line_number: 12,
    original_content:
      "어려움과 극복 과정: 문제 해결을 위해 대외협력국과 협업하여 동아리에서만 제공 가능한 독점적 가치를 만들고자 했다. 기업 연계 프로그램을 바탕으로 '올해 배운 단어로 이력서 쓰기' 특별 프로그램을 기획, 실제 기업의 현직자 첨삭 기회를 제공하여 참여자들의 높은 호응을 이끌어냈다.",
    type: 2 as const,
    review_comment:
      "이유: '독점적 가치 제공'과 '기업 연계'는 팬덤 비즈니스 및 파트너사 관리와 유사한 접근 방식입니다. 제안: 이 경험을 '팬덤의 니즈를 파악하고 IP를 활용한 특별 상품(MD)을 기획하여 팬 만족도와 참여를 이끌어내는 과정'에 비유하여 설명하면 MD 직무와의 연관성을 극대화할 수 있습니다.",
  },
];

const detailInfoReviewResults = realReviewResults.slice(0, 6);
const assignedTasksReviewResults = realReviewResults.slice(6, 12);

const meta: Meta<typeof AICorrectionSection> = {
  title: 'Features/Correction/AICorrectionSection',
  component: AICorrectionSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
AI 첨삭 섹션 컴포넌트입니다. 포트폴리오의 각 섹션에 대한 AI 첨삭 결과를 표시합니다.

**실제 마스터 포트폴리오 데이터 사용:**
- 언어교환 동아리 운영 및 활성화 프로젝트
- 레진코믹스 글로벌 MD 직무 기준 첨삭 결과

**첨삭 표시 방식:**
- **Type 0**: 유지 (표시 없음) - 기업/직무와 적절히 연관되어 수정이 필요 없는 상태
- **Type 1**: 축소/제외 권고 (빨간색 하이라이트) - 관련성이 낮거나 불필요한 내용
- **Type 2**: 구체화/강조 권고 (초록색 하이라이트) - 더 강화하면 어필 포인트가 될 수 있는 내용

**주요 기능:**
- 토글 활성화 시 텍스트 라인에 하이라이트 배경 적용
- 첨삭 코멘트를 번호 형태(1., 2.)로 표시
- 실시간 첨삭 결과 확인
- 반응형 레이아웃 지원
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
      control: 'text',
      description: '포트폴리오 원본 내용',
    },
    reviewResults: {
      control: 'object',
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
  },
  args: {
    title: '상세정보',
    content: masterPortfolio.detailInfo,
    reviewResults: detailInfoReviewResults,
    contribution: 90,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '실제 마스터 포트폴리오의 **상세정보** 섹션입니다. 토글을 클릭하여 텍스트 라인에 하이라이트가 적용되는 것을 확인할 수 있습니다.',
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

**빨간색 하이라이트 적용 라인:**
- "동아리 회원" 타겟 설정 → 팬덤/소비자 니즈 파악 역량으로 연결 권고

MD 직무와의 직접적인 연관성이 낮다고 AI가 판단한 내용들이 빨간색 배경으로 하이라이트됩니다. 왼쪽 경계선도 함께 표시되어 시각적으로 구분됩니다.`,
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

**초록색 하이라이트 적용 라인:**
- 문화 이해도 배경 → 글로벌 역량 강조 권고
- 수치 기반 목표 설정 → 데이터 분석 과정 추가 권고

직무와 연관성이 높아 더 강화해야 할 내용들이 초록색 배경으로 하이라이트됩니다. 오른쪽 패널에는 구체적인 개선 방향이 번호와 함께 표시됩니다.`,
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

**하이라이트 색상 구분:**
- 🔴 **빨간색**: 축소/제외 권고 (Type 1)
- 🟢 **초록색**: 구체화/강조 권고 (Type 2)
- ⚪ **표시 없음**: 유지 (Type 0)

레진코믹스 글로벌 MD 직무 기준으로 축소할 부분과 강화할 부분을 동시에 확인하여 포트폴리오 최적화 방향을 파악할 수 있습니다.`,
      },
    },
  },
};

export const AssignedTasksSection: Story = {
  args: {
    title: '담당 업무',
    content: masterPortfolio.assignedTasks,
    reviewResults: assignedTasksReviewResults,
    contribution: 85,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**담당 업무** 섹션입니다. 

**주요 하이라이트 내용:**
- 회계 관리 → ERP 시스템 연결 권고 (초록색)
- 기업 연계 → 파트너십 구축 역량 강조 권고 (초록색)
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
    reviewResults: [
      {
        line_number: 1,
        original_content: '평균 행사 참여율 전년 대비 104.2% 달성',
        type: 0 as const,
        review_comment: null,
      },
      {
        line_number: 2,
        original_content: '동아리 회원 유지율 27.1% 달성 (목표치 25% 초과 달성)',
        type: 0 as const,
        review_comment: null,
      },
      {
        line_number: 3,
        original_content: "'매우 만족' 피드백 63.7% 확보",
        type: 1 as const,
        review_comment:
          '이유: 설정했던 목표치(70%)에 미달한 성과로, 강점으로 어필하기에는 다소 아쉬움이 있습니다. 제안: 다른 강력한 성과들이 충분하므로 이 항목은 제외하여 포트폴리오의 강점을 더욱 집중시키는 것을 권장합니다.',
      },
      {
        line_number: 4,
        original_content:
          "'이력서 작성' 특별 프로그램, 이전 정기모임 대비 참여율 170% 증가 및 긍정 피드백 72건 확보",
        type: 2 as const,
        review_comment:
          "이유: 특정 기획이 가져온 폭발적인 성과를 수치로 증명하는 가장 강력한 부분입니다. 제안: '긍정 피드백 72건'을 주요 키워드(예: '실질적 도움', '독창적 기획')로 분류하여 피드백의 질적 측면도 함께 어필하면 더욱 효과적입니다.",
      },
      {
        line_number: 5,
        original_content: '기업 연계 프로그램을 통해 참여자들의 실질적인 커리어 개발 기회 제공',
        type: 2 as const,
        review_comment:
          "이유: '글로벌 MD' 직무에서 국내외 유통 업체와의 관계 구축 및 관리 능력은 필수적입니다. 제안: '기업 연계'를 어떤 과정(예: 제안서 발송, 미팅, 협상 등)을 통해 성사시켰는지 구체적인 실행 과정을 추가하여 파트너십 구축 역량을 강조하세요.",
      },
    ],
    contribution: 95,
    initialReductionToggle: true,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**주요 성과** 섹션입니다. 

**성과 평가 결과:**
- 목표 미달 성과 → 제외 권고 (빨간색)
- 폭발적 성과 → 질적 분석 추가 권고 (초록색)
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
    reviewResults: [
      {
        line_number: 1,
        original_content:
          '동아리 운영 전반을 총괄하며 예산 관리, 부서 간 협업 조율, 성과 보고 등 프로젝트 관리 역량과 리더십을 길렀다.',
        type: 2 as const,
        review_comment:
          "이유: JD의 핵심 업무와 직결되는 '예산 관리', '협업 조율' 역량을 잘 요약했습니다. 제안: '예산 관리'를 '매출 정산 및 비용 관리'로, '부서 간 협업'을 '유관부서(작가, 현지화팀 등)와의 협업'으로 직무 용어에 맞게 변경하면 전문성을 더할 수 있습니다.",
      },
      {
        line_number: 2,
        original_content:
          '참여자 이탈 문제에 직면했을 때, 동아리의 핵심 가치와 참여자에게만 제공할 수 있는 독점적 혜택을 연결하는 프로그램을 기획하며 문제 해결 능력을 향상시켰다.',
        type: 0 as const,
        review_comment: null,
      },
      {
        line_number: 3,
        original_content:
          '모든 계획은 변수에 직면할 수 있음을 인지하고, Plan B를 미리 준비하여 현장 변수에 유연하게 대응하는 위기관리 능력을 체득했다.',
        type: 2 as const,
        review_comment:
          "이유: MD 수출 과정에서 발생할 수 있는 다양한 변수(통관, 배송 지연 등)에 대한 대응 능력을 어필할 수 있는 좋은 경험입니다. 제안: '현장 변수'를 '수출 과정에서의 잠재적 리스크'에 빗대어 설명하고, Plan B 구축 경험이 어떻게 안정적인 MD 공급에 기여할 수 있을지 연결해보세요.",
      },
      {
        line_number: 4,
        original_content:
          '진정한 언어 학습은 문화적 교류와 관계 형성에서 비롯되며, 커뮤니티의 가치는 참여자에게 제공하는 고유한 경험 설계에 달려있음을 깨달았다.',
        type: 1 as const,
        review_comment:
          "이유: 표현이 다소 추상적이고 일반적인 소회에 가깝습니다. 제안: 이 깨달음을 '팬덤 비즈니스의 핵심은 팬들에게 소속감과 특별한 경험을 제공하는 것'과 같이 레진코믹스의 '팬덤 비즈니스'와 직접적으로 연결되는 구체적인 인사이트로 변경하세요.",
      },
      {
        line_number: 5,
        original_content:
          '향후 어떤 프로젝트를 맡게 되더라도, 초기에 다양한 변수를 고려한 시나리오 플래닝을 통해 안정적인 운영 체계를 구축할 것이다.',
        type: 0 as const,
        review_comment: null,
      },
      {
        line_number: 6,
        original_content:
          '외부 파트너십을 적극적으로 활용하여 프로젝트의 가치를 높이고 참여자에게 실질적인 혜택을 제공하는 기획을 시도할 것이다.',
        type: 2 as const,
        review_comment:
          "이유: '외부 파트너십 활용'은 JD의 '국내외 MD 유통 업체 관리'와 정확히 일치하는 포부입니다. 제안: '레진코믹스의 프리미엄 IP를 활용하여 새로운 글로벌 파트너를 발굴하고, 성공적인 MD 유통 계약을 이끌어내겠다'는 식으로 구체적인 실행 의지를 보여주면 더욱 강력한 인상을 줄 수 있습니다.",
      },
    ],
    contribution: 75,
    initialReductionToggle: true,
    initialConcretizationToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `**배운 점** 섹션입니다. 

**인사이트 평가 결과:**
- 직무 연관 역량 → 용어 구체화 권고 (초록색)
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
