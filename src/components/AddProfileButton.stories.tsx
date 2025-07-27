import type { Meta, StoryObj } from '@storybook/react';
import AddProfileButton from './AddProfileButton';

const meta: Meta<typeof AddProfileButton> = {
  title: 'Components/AddProfileButton',
  component: AddProfileButton,
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

export const InContainer: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f8f8',
          minHeight: '300px',
          width: '500px',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>프로필 추가 컴포넌트</h3>
        <Story />
      </div>
    ),
  ],
};

export const WithBackground: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '40px',
          backgroundColor: '#81D7D4',
          minHeight: '350px',
          width: '600px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
