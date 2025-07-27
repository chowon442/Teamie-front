import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AIGenerationSection from './AIGenerationSection';

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof AIGenerationSection> = {
  title: 'Features/AIMasterPortfolio/AIGenerationSection',
  component: AIGenerationSection,
  parameters: {
    layout: 'centered',
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
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const InContainer: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '40px',
          backgroundColor: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          AI 마스터 포트폴리오
        </h1>
        <Story />
      </div>
    ),
  ],
};

export const WithBackground: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '60px',
          backgroundColor: '#f0f8ff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#333',
            }}
          >
            AI와 함께하는 포트폴리오 생성
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Teamie의 AI 기술을 활용하여 개인 맞춤형 마스터 포트폴리오를 쉽고 빠르게 만들어보세요.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
