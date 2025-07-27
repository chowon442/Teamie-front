import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CorrectionRequestStartButton from './CorrectionRequestStartButton';

const meta: Meta<typeof CorrectionRequestStartButton> = {
  title: 'Features/Correction/CorrectionRequestStartButton',
  component: CorrectionRequestStartButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalTitle: {
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
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onStart: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onStart: fn(),
  },
};

export const CustomModal: Story = {
  args: {
    onStart: fn(),
    modalTitle: '사용자 정의 모달 제목',
    confirmText: '확인',
    cancelText: '취소',
  },
};

export const WithCustomClass: Story = {
  args: {
    onStart: fn(),
    className: 'custom-correction-button',
  },
};

export const CreditUsage: Story = {
  args: {
    onStart: fn(),
    modalTitle: '10 Credit을 사용하여',
    confirmText: '사용',
    cancelText: '취소',
  },
};

export const Interactive: Story = {
  args: {
    onStart: fn(),
  },
  play: async ({ canvasElement }) => {
    // This story can be used to test modal interactions
  },
};
