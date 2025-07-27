import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ReductionToggle from './ReductionToggle';

const meta: Meta<typeof ReductionToggle> = {
  title: 'Features/Correction/ReductionToggle',
  component: ReductionToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onRToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRToggle: fn(),
  },
};

export const WithCallback: Story = {
  args: {
    onRToggle: (value: boolean) => {
      console.log('Toggle state:', value);
    },
  },
};

export const InContainer: Story = {
  args: {
    onRToggle: fn(),
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
          클릭하여 축소 제거 기능을 토글할 수 있습니다
        </p>
        <Story />
      </div>
    ),
  ],
};
