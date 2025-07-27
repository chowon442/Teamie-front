import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StepHeader from './StepHeader';

const meta: Meta<typeof StepHeader> = {
  title: 'Features/Boards/StepHeader',
  component: StepHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stepName: {
      control: 'text',
      description: 'Name of the step',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the step section is expanded',
    },
    showDelete: {
      control: 'boolean',
      description: 'Whether to show delete button on hover',
    },
  },
  args: {
    onToggle: fn(),
    onDelete: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stepName: '진행 중',
    isOpen: false,
    showDelete: false,
  },
};

export const Expanded: Story = {
  args: {
    stepName: '진행 중',
    isOpen: true,
    showDelete: false,
  },
};

export const WithDeleteButton: Story = {
  args: {
    stepName: '완료',
    isOpen: false,
    showDelete: true,
  },
};

export const LongStepName: Story = {
  args: {
    stepName: '매우 긴 단계 이름이 있는 경우',
    isOpen: false,
    showDelete: false,
  },
};

export const HoverInteraction: Story = {
  args: {
    stepName: '검토 중',
    isOpen: false,
    showDelete: true,
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Hover over the header to see delete button (when showDelete is true)
        </p>
        <Story />
      </div>
    ),
  ],
};

export const MultipleSteps: Story = {
  decorators: [
    () => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: 'fit-content',
        }}
      >
        <StepHeader stepName="할 일" isOpen={false} onToggle={fn()} showDelete={false} />
        <StepHeader stepName="진행 중" isOpen={true} onToggle={fn()} showDelete={false} />
        <StepHeader
          stepName="완료"
          isOpen={false}
          onToggle={fn()}
          showDelete={true}
          onDelete={fn()}
        />
      </div>
    ),
  ],
};
