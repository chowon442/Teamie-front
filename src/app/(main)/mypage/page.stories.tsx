import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import MyPage from './page';

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

// Mock the useToggle hook
jest.mock('@/features/mypage/hooks/useToggle', () => ({
  __esModule: true,
  default: () => ({
    selected: 'project',
    setSelected: fn(),
  }),
}));

const meta: Meta<typeof MyPage> = {
  title: 'Pages/Main/MyPage',
  component: MyPage,
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
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const WithProToggle: Story = {
  args: {},
  decorators: [
    (Story) => {
      // Mock useState to show pro toggle
      const originalUseState = React.useState;
      React.useState = (initial: any) => {
        if (typeof initial === 'boolean' && initial === false) {
          return [true, fn()]; // Show toggle
        }
        return originalUseState(initial);
      };

      return <Story />;
    },
  ],
};
