import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DeleteButton from './DeleteButton';

const meta: Meta<typeof DeleteButton> = {
  title: 'Components/DeleteButton',
  component: DeleteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalTitle: { control: 'text' },
    confirmText: { control: 'text' },
    cancelText: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    onDelete: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onDelete: fn(),
  },
};

export const CustomText: Story = {
  args: {
    onDelete: fn(),
    modalTitle: '정말로 삭제하시겠습니까?',
    confirmText: '삭제',
    cancelText: '취소',
  },
};

export const WithCustomClass: Story = {
  args: {
    onDelete: fn(),
    className: 'bg-red-100 p-2 rounded',
  },
};
