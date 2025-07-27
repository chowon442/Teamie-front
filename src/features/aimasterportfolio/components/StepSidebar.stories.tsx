import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StepSidebar from './StepSidebar';

// Mock steps data
const mockSteps = [
  { id: 1, title: '기본 정보 입력' },
  { id: 2, title: '프로젝트 선택' },
  { id: 3, title: '자기소개 작성' },
  { id: 4, title: '포트폴리오 생성' },
];

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof StepSidebar> = {
  title: 'Features/AIMasterPortfolio/StepSidebar',
  component: StepSidebar,
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
  },
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Current active step (0-based index)',
    },
  },
  args: {
    steps: mockSteps,
    goToStep: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
  args: {
    currentStep: 0,
    steps: mockSteps,
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Step 1: 기본 정보 입력
          </h1>
          <p>현재 첫 번째 단계에 있습니다.</p>
        </div>
      </div>
    ),
  ],
};

export const MiddleStep: Story = {
  args: {
    currentStep: 2,
    steps: mockSteps,
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Step 3: 자기소개 작성
          </h1>
          <p>현재 세 번째 단계에 있습니다. 이전 단계들은 완료 상태로 표시됩니다.</p>
        </div>
      </div>
    ),
  ],
};

export const LastStep: Story = {
  args: {
    currentStep: 3,
    steps: mockSteps,
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Step 4: 포트폴리오 생성
          </h1>
          <p>현재 마지막 단계에 있습니다. 모든 이전 단계가 완료되었습니다.</p>
        </div>
      </div>
    ),
  ],
};

export const InteractiveFlow: Story = {
  args: {
    currentStep: 1,
    steps: mockSteps,
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            인터랙티브 단계 사이드바
          </h1>
          <p style={{ marginBottom: '20px' }}>
            사이드바에서 단계를 클릭하면 해당 단계로 이동할 수 있습니다.
          </p>
          <div
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
              Step 2: 프로젝트 선택
            </h2>
            <p>현재 두 번째 단계의 내용이 여기에 표시됩니다.</p>
          </div>
        </div>
      </div>
    ),
  ],
};
