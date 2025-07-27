import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CorrectionStartModal from './CorrectionStartModal';

const meta: Meta<typeof CorrectionStartModal> = {
  title: 'Features/Correction/CorrectionStartModal',
  component: CorrectionStartModal,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title text',
    },
    confirmText: {
      control: 'text',
      description: 'Confirm button text',
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text',
    },
    onConfirm: {
      action: 'confirmed',
      description: 'Callback when confirm button is clicked',
    },
    onCancel: {
      action: 'cancelled',
      description: 'Callback when cancel button is clicked',
    },
  },
  args: {
    onConfirm: fn(),
    onCancel: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '6 Credit을 사용하여',
    onConfirm: fn(),
    onCancel: fn(),
  },
};

export const CustomCredits: Story = {
  args: {
    title: '10 Credit을 사용하여',
    confirmText: '사용',
    cancelText: '취소',
    onConfirm: fn(),
    onCancel: fn(),
  },
};

export const LongTitle: Story = {
  args: {
    title: '15 Credit을 사용하여 고급 AI 분석',
    confirmText: '진행',
    cancelText: '돌아가기',
    onConfirm: fn(),
    onCancel: fn(),
  },
};

export const ShortTitle: Story = {
  args: {
    title: '3 Credit',
    confirmText: 'OK',
    cancelText: 'No',
    onConfirm: fn(),
    onCancel: fn(),
  },
};

export const Mobile: Story = {
  args: {
    title: '6 Credit을 사용하여',
    onConfirm: fn(),
    onCancel: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {
    title: '6 Credit을 사용하여',
    onConfirm: fn(),
    onCancel: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  args: {
    title: '6 Credit을 사용하여',
    onConfirm: fn(),
    onCancel: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
