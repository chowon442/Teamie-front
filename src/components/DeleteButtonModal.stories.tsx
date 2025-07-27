import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DeleteButtonModal from './DeleteButtonModal';

const meta: Meta<typeof DeleteButtonModal> = {
  title: 'Components/DeleteButtonModal',
  component: DeleteButtonModal,
  parameters: {
    layout: 'centered',
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
    title: '정말 삭제하시겠습니까?',
  },
};

export const CustomText: Story = {
  args: {
    title: '프로젝트를 삭제하시겠습니까?',
    confirmText: '삭제',
    cancelText: '취소',
  },
};

export const LongTitle: Story = {
  args: {
    title: '이 작업은 되돌릴 수 없습니다. 정말로 이 항목을 영구적으로 삭제하시겠습니까?',
    confirmText: '확인',
    cancelText: '취소',
  },
};
