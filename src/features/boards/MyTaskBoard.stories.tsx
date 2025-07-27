import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MyTaskBoard from './MyTaskBoard';

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof MyTaskBoard> = {
  title: 'Features/Boards/MyTaskBoard',
  component: MyTaskBoard,
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
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>내 업무 보드</h1>
        <Story />
      </div>
    ),
  ],
};

export const WithContainer: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '40px',
          backgroundColor: '#ffffff',
          border: '1px solid #e7e7e7',
          borderRadius: '8px',
          margin: '20px',
          minHeight: '80vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            borderBottom: '2px solid #e7e7e7',
            paddingBottom: '15px',
          }}
        >
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>내 업무 현황</h1>
          <div style={{ fontSize: '14px', color: '#666' }}>홍길동님의 담당 업무들</div>
        </div>
        <Story />
      </div>
    ),
  ],
};
