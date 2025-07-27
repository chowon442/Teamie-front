import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AddTaskButton from './AddTaskButton';

const meta: Meta<typeof AddTaskButton> = {
  title: 'Features/Boards/AddTaskButton',
  component: AddTaskButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stepName: {
      control: 'text',
      description: 'Name of the step where task will be added',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    stepName: '진행 중',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stepName: '진행 중',
  },
};

export const TodoStep: Story = {
  args: {
    stepName: '할 일',
  },
};

export const DoneStep: Story = {
  args: {
    stepName: '완료',
  },
};

export const WithCustomClass: Story = {
  args: {
    stepName: '검토 중',
    className: 'shadow-lg',
  },
};

export const InContainer: Story = {
  args: {
    stepName: '진행 중',
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        <h3 style={{ marginBottom: '16px', fontWeight: 'bold' }}>진행 중</h3>
        <Story />
      </div>
    ),
  ],
};
