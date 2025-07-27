import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DashboardPage from './page';

// Mock the Next.js router and params
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

// Mock useParams hook
jest.mock('next/navigation', () => ({
  useParams: () => ({
    projectId: 'mock-project-1',
  }),
}));

const meta: Meta<typeof DashboardPage> = {
  title: 'Pages/Main/Projects/DashboardPage',
  component: DashboardPage,
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

export const StepView: Story = {
  args: {},
  name: 'Step별 보기',
};

export const StatusView: Story = {
  args: {},
  name: '진행 상태별 보기',
  decorators: [
    (Story) => {
      // Mock to show status view by default
      const originalUseState = React.useState;
      React.useState = (initial: any) => {
        if (typeof initial === 'boolean' && initial === true) {
          return [false, fn()]; // Show status view instead of step view
        }
        return originalUseState(initial);
      };

      return <Story />;
    },
  ],
};
