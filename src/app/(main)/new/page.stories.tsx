import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NewPage from './page';

const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof NewPage> = {
  title: 'Pages/Main/NewPage',
  component: NewPage,
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

export const WithInviteSection: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const createButton =
      canvas.querySelector('button[data-testid="create-button"]') ||
      canvas.querySelector('button:contains("+ 생성하기")') ||
      canvas.querySelector('button');
    if (createButton) {
      (createButton as HTMLButtonElement).click();
    }
  },
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
