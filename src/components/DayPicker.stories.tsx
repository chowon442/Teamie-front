import type { Meta, StoryObj } from '@storybook/react';
import DayPicker from './DayPicker';

const meta: Meta<typeof DayPicker> = {
  title: 'Components/DayPicker',
  component: DayPicker,
  parameters: {
    layout: 'centered',
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

export const InModal: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const WithTitle: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>마감일 선택</h3>
        <Story />
      </div>
    ),
  ],
};
