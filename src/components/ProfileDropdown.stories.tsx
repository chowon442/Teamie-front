import type { Meta, StoryObj } from '@storybook/react';
import ProfileDropdown from './ProfileDropdown';

const meta: Meta<typeof ProfileDropdown> = {
  title: 'Components/ProfileDropdown',
  component: ProfileDropdown,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
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

export const InNavbar: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#81D7D4',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '300px',
        }}
      >
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
          backgroundColor: '#f8f8f8',
          minHeight: '200px',
          width: '400px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '14px',
            color: '#666',
          }}
        >
          프로필 아이콘을 클릭하여 드롭다운을 확인하세요
        </p>
        <Story />
      </div>
    ),
  ],
};
