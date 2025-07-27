import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import TailoredPortfolio from './page';

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof TailoredPortfolio> = {
  title: 'Pages/Main/MyPage/TailoredPortfolio',
  component: TailoredPortfolio,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        push: mockRouter.push,
        replace: mockRouter.replace,
        back: mockRouter.back,
        forward: mockRouter.forward,
        refresh: mockRouter.refresh,
        prefetch: mockRouter.prefetch,
      },
    },
    docs: {
      description: {
        component: `
**AI 첨삭 포트폴리오 페이지**

실제 마스터 포트폴리오를 레진코믹스 글로벌 MD 직무 기준으로 AI가 첨삭한 결과를 보여줍니다.

**실제 프로젝트:**
- 언어교환 동아리 운영 및 활성화 프로젝트
- 기획국장으로서 1년간 동아리 운영 총괄
- 참여율 170% 증가, 72건 긍정 피드백 등 정량적 성과 달성

**AI 첨삭 시스템:**
- **Type 0**: 유지 (표시 없음) - 7개 라인
- **Type 1**: 축소/제외 권고 (빨간색 하이라이트) - 4개 라인  
- **Type 2**: 구체화/강조 권고 (초록색 하이라이트) - 12개 라인

**주요 개선사항:**
- 토글 활성화 시 텍스트 라인에 하이라이트 배경 적용
- 첨삭 코멘트를 번호 형태(1., 2.)로 표시
- 레진코믹스 글로벌 MD 직무 특성 반영
- 기업 분석 정보 및 JD 입력 기능
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '실제 마스터 포트폴리오 데이터를 사용한 기본 AI 첨삭 페이지입니다. "언어교환 동아리 운영 및 활성화 프로젝트"에 대한 레진코믹스 글로벌 MD 직무 기준 첨삭 결과를 확인할 수 있습니다.',
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
          '모바일 화면에서의 AI 첨삭 페이지입니다. 반응형 레이아웃이 적용되어 컨텐츠가 세로 배치로 변경됩니다.',
      },
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: '태블릿 화면에서의 AI 첨삭 페이지입니다.',
      },
    },
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: '데스크탑 화면에서의 AI 첨삭 페이지입니다.',
      },
    },
  },
};

export const WithReductionHighlights: Story = {
  args: {},
  decorators: [
    (Story) => {
      // Mock useState to show reduction highlights
      const originalUseState = React.useState;
      (React as any).useState = (initial: any) => {
        if (typeof initial === 'boolean' && initial === false) {
          // 첫 번째 boolean state (toggleROn)는 true로 설정
          return [true, fn()];
        }
        return originalUseState(initial);
      };

      return <Story />;
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `**Type 1 첨삭 (축소/제외 권고)** 하이라이트가 표시된 상태입니다. 

**빨간색 하이라이트 적용 내용:**
- "동아리 회원" 타겟 설정 → 팬덤/소비자 니즈 파악 역량으로 연결 권고
- 친목 문제 → 비즈니스 관점의 문제로 재정의 권고
- 목표 미달 성과 → 제외하여 강점 집중 권고
- 추상적 표현 → 팬덤 비즈니스와 연결된 구체적 인사이트로 변경 권고

실제 AI가 MD 직무와의 연관성이 낮다고 판단한 내용들이 빨간색 배경으로 하이라이트되며, 왼쪽 경계선과 함께 시각적으로 구분됩니다.`,
      },
    },
  },
};

export const WithConcretizationHighlights: Story = {
  args: {},
  decorators: [
    (Story) => {
      // Mock useState to show concretization highlights
      let callCount = 0;
      const originalUseState = React.useState;
      (React as any).useState = (initial: any) => {
        if (typeof initial === 'boolean' && initial === false) {
          callCount++;
          if (callCount === 1) {
            // 첫 번째 호출 (toggleROn)은 false
            return [false, fn()];
          } else if (callCount === 2) {
            // 두 번째 호출 (toggleCOn)은 true
            return [true, fn()];
          }
        }
        return originalUseState(initial);
      };

      return <Story />;
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `**Type 2 첨삭 (구체화/강조 권고)** 하이라이트가 표시된 상태입니다.

**초록색 하이라이트 적용 내용:**
- **글로벌 역량**: 문화 이해도, 다문화 소통 경험 추가
- **데이터 기반 운영**: 목표 설정 시 사용한 분석 데이터 명시
- **직무 연관 툴**: 엑셀, PowerPoint 등 사용 툴 구체화  
- **회계/정산 경험**: ERP 시스템 학습 가능성과 연결
- **파트너십 구축**: 기업 연계 과정의 구체적 실행 방법
- **폭발적 성과**: 170% 참여율 증가, 72건 피드백의 질적 분석

실제 AI가 강화 권고한 핵심 역량들이 초록색 배경으로 하이라이트되며, 오른쪽 패널에는 구체적인 개선 방향이 번호와 함께 표시됩니다.`,
      },
    },
  },
};

export const WithAllHighlights: Story = {
  args: {},
  decorators: [
    (Story) => {
      // Mock useState to show all highlights
      const originalUseState = React.useState;
      (React as any).useState = (initial: any) => {
        if (typeof initial === 'boolean' && initial === false) {
          // 모든 boolean state를 true로 설정
          return [true, fn()];
        }
        return originalUseState(initial);
      };

      return <Story />;
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `**모든 첨삭 하이라이트가 활성화**된 상태입니다. 

**AI 첨삭 통계:**
- Type 0 (유지): 7개 라인 - 적절한 내용으로 수정 불필요
- Type 1 (축소/제외): 4개 라인 - MD 직무와 연관성 낮음
- Type 2 (구체화/강조): 12개 라인 - 더 강화하면 어필 포인트

**하이라이트 색상 구분:**
- 🔴 **빨간색**: 축소/제외 권고 (Type 1)
- 🟢 **초록색**: 구체화/강조 권고 (Type 2)
- ⚪ **표시 없음**: 유지 (Type 0)

레진코믹스 글로벌 MD 직무 기준으로 축소할 부분과 강화할 부분을 동시에 확인하여 포트폴리오 최적화 방향을 파악할 수 있습니다.`,
      },
    },
  },
};

export const WithFilledCompanyAnalysis: Story = {
  args: {},
  decorators: [
    (Story) => {
      // 기업 분석 정보와 JD를 실제 데이터로 채우기
      React.useEffect(() => {
        // 기업 분석 정보 textarea 채우기
        const textareas = document.querySelectorAll('textarea');
        if (textareas[0]) {
          textareas[0].value = `**레진코믹스 기업 분석**

• 글로벌 웹툰 플랫폼 및 IP 기반 비즈니스 전개
• 프리미엄 웹툰 콘텐츠로 차별화된 팬덤 비즈니스 구축
• 국내외 MD(굿즈) 유통을 통한 수익 다각화 추진
• 데이터 기반 운영으로 팬 니즈 분석 및 맞춤형 상품 기획
• 글로벌 확장을 위한 현지화 및 파트너십 전략 중시

**핵심 가치:**
- 팬덤 중심의 IP 생태계 구축
- 창작자와 팬을 연결하는 플랫폼 역할
- 지속가능한 콘텐츠 비즈니스 모델`;
        }

        // JD textarea 채우기
        if (textareas[1]) {
          textareas[1].value = `**글로벌 MD 직무 요구사항**

[필수 역량]
• 글로벌 MD 기획 및 유통 관리 경험
• 공급 매출 정산 업무 수행 능력
• ERP 시스템 활용 가능한 분
• 문서 프로그램(엑셀, 파워포인트) 활용 능력
• 대내/외 원활한 소통 능력 및 팀워크

[우대 사항]  
• 해외 MD 유통 경험자
• 팬덤 비즈니스 이해도가 높은 분
• 글로벌 시장 트렌드 분석 경험
• 다국어 가능자 (영어, 일어 등)
• IP 기반 상품 기획 경험

[주요 업무]
• 국내외 MD 유통 업체 발굴 및 관리
• MD 공급 계약 체결 및 정산 업무
• 글로벌 시장 MD 트렌드 분석
• 팬덤 니즈 기반 MD 기획 참여`;
        }
      }, []);

      return <Story />;
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `**기업 분석 정보와 JD가 실제 데이터로 채워진 상태**입니다.

레진코믹스의 핵심 비즈니스 모델과 글로벌 MD 직무의 요구사항이 구체적으로 명시되어 있어, AI 첨삭이 어떤 기준으로 이루어졌는지 맥락을 이해할 수 있습니다.

**주요 매칭 포인트:**
- 팬덤 비즈니스 ↔ 동아리 회원 관리
- 데이터 기반 운영 ↔ 수치 목표 설정
- ERP 시스템 ↔ 회계 관리 경험
- 글로벌 확장 ↔ 문화 이해도
- 파트너십 전략 ↔ 기업 연계 프로그램`,
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    // 스크롤하여 첨삭 섹션으로 이동
    setTimeout(() => {
      const correctionSection = canvas.querySelector('[class*="AI 첨삭 내용"]');
      if (correctionSection) {
        correctionSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);

    // 3초 후 축소/제외 토글 활성화
    setTimeout(() => {
      const reductionToggles = canvas.querySelectorAll('img[alt="축소 제거 토글"]');
      if (reductionToggles[0]) {
        (reductionToggles[0] as HTMLElement).click();
      }
    }, 3000);

    // 6초 후 구체화/강조 토글 활성화
    setTimeout(() => {
      const concretizationToggles = canvas.querySelectorAll('img[alt="구체화 토글"]');
      if (concretizationToggles[0]) {
        (concretizationToggles[0] as HTMLElement).click();
      }
    }, 6000);

    // 9초 후 두 번째 섹션 토글들 활성화
    setTimeout(() => {
      const reductionToggles = canvas.querySelectorAll('img[alt="축소 제거 토글"]');
      const concretizationToggles = canvas.querySelectorAll('img[alt="구체화 토글"]');

      if (reductionToggles[1]) {
        (reductionToggles[1] as HTMLElement).click();
      }
      if (concretizationToggles[1]) {
        (concretizationToggles[1] as HTMLElement).click();
      }
    }, 9000);
  },
  parameters: {
    docs: {
      description: {
        story: `**실제 마스터 포트폴리오 데이터로 하이라이트 인터랙티브 데모**를 시연합니다.

**데모 시퀀스:**
1. 첨삭 섹션으로 자동 스크롤
2. 첫 번째 섹션: Type 1 토글 → 빨간색 하이라이트 표시
3. 첫 번째 섹션: Type 2 토글 → 초록색 하이라이트 표시  
4. 다른 섹션들의 토글도 순차적으로 활성화

**하이라이트 기능 특징:**
- 텍스트 라인별 정확한 배경 하이라이트 적용
- 왼쪽 경계선으로 시각적 구분 강화
- 번호로 정리된 첨삭 코멘트 표시
- 부드러운 트랜지션 효과

완성도 높은 포트폴리오 첨삭 시스템의 실제 동작을 확인할 수 있습니다.`,
      },
    },
  },
};
