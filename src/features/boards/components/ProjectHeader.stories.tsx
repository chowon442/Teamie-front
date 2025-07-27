import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProjectHeader from './ProjectHeader';

const meta: Meta<typeof ProjectHeader> = {
  title: 'Features/Boards/ProjectHeader',
  component: ProjectHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    projectName: {
      control: 'text',
      description: 'Name of the project',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the project section is expanded',
    },
  },
  args: {
    onToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: '팀이 프로젝트',
    isOpen: false,
  },
};

export const Expanded: Story = {
  args: {
    projectName: '팀이 프로젝트',
    isOpen: true,
  },
};

export const LongProjectName: Story = {
  args: {
    projectName: '매우 긴 프로젝트 이름이 있는 경우의 예시',
    isOpen: false,
  },
};

export const ShortProjectName: Story = {
  args: {
    projectName: 'ABC',
    isOpen: false,
  },
};

export const Interactive: Story = {
  args: {
    projectName: '인터랙티브 프로젝트',
    isOpen: false,
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
          Click to toggle the project header
        </p>
        <Story />
      </div>
    ),
  ],
};
