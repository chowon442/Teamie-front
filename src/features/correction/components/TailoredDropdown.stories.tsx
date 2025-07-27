import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TailoredDropdown from './TailoredDropdown';

const meta: Meta<typeof TailoredDropdown> = {
  title: 'Features/Correction/TailoredDropdown',
  component: TailoredDropdown,
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

export const OpenState: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector('button');
    if (button) {
      button.click();
    }
  },
  name: 'Dropdown Open State',
};

export const WithInteraction: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Click the dropdown to see all available options: 수업, 동아리, 대외활동, 프로젝트, 기타',
      },
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
