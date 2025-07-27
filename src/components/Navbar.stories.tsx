import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Navbar from './Navbar';

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        push: mockRouter.push,
        replace: mockRouter.replace,
        back: mockRouter.back,
        forward: mockRouter.forward,
        refresh: mockRouter.refresh,
        prefetch: mockRouter.prefetch,
      },
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

export const WithBackground: Story = {
  args: {},
  decorators: [
    (Story: any) => (
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Story />
        <div style={{ padding: '20px' }}>
          <p>Sample content below navbar...</p>
        </div>
      </div>
    ),
  ],
};
