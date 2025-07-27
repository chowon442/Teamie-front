import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ToggleButton from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
  },
  args: {
    onToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftLabel: '왼쪽',
    rightLabel: '오른쪽',
    onToggle: fn(),
  },
};

export const ProjectStatus: Story = {
  args: {
    leftLabel: '진행중',
    rightLabel: '완료',
    onToggle: fn(),
  },
};

export const ViewMode: Story = {
  args: {
    leftLabel: '리스트',
    rightLabel: '카드',
    onToggle: fn(),
  },
};

export const LongLabels: Story = {
  args: {
    leftLabel: '매우 긴 왼쪽 라벨',
    rightLabel: '매우 긴 오른쪽 라벨',
    onToggle: fn(),
  },
};
