import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Sidebar from './Sidebar';

// Mock the Next.js router and hooks
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
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

export const HomeMenuActive: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/home',
        query: {},
        asPath: '/home',
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>Main Content Area</h2>
          <p>Sidebar is shown on the left with home menu active</p>
        </div>
      </div>
    ),
  ],
};

export const ProjectMenuActive: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/projects/123',
        query: { projectId: '123' },
        asPath: '/projects/123',
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>Project Content Area</h2>
          <p>Sidebar is shown on the left with project menu active</p>
        </div>
      </div>
    ),
  ],
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/home',
        query: {},
        asPath: '/home',
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', height: '100vh', width: '375px' }}>
        <Story />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>Mobile View</h2>
          <p>Sidebar collapsed on mobile</p>
        </div>
      </div>
    ),
  ],
};
