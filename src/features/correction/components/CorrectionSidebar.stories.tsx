import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CorrectionSidebar from './CorrectionSidebar';

const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof CorrectionSidebar> = {
  title: 'Features/Correction/CorrectionSidebar',
  component: CorrectionSidebar,
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

export const CorrectionIntro: Story = {
  args: {},
  parameters: {
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
      router: {
        pathname: '/mypage/addcorrection/correctionIntro',
        query: {},
        asPath: '/mypage/addcorrection/correctionIntro',
      },
    },
  },
  name: 'Correction Intro Page',
};

export const Analyzing: Story = {
  args: {},
  parameters: {
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
      router: {
        pathname: '/mypage/addcorrection/analyzing',
        query: {},
        asPath: '/mypage/addcorrection/analyzing',
      },
    },
  },
  name: 'Analyzing Page',
};

export const AnalyzeFin: Story = {
  args: {},
  parameters: {
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
      router: {
        pathname: '/mypage/addcorrection/analyzefin',
        query: {},
        asPath: '/mypage/addcorrection/analyzefin',
      },
    },
  },
  name: 'Analyze Finished Page',
};

export const ProjectSelect: Story = {
  args: {},
  parameters: {
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
      router: {
        pathname: '/mypage/addcorrection/projectSelect',
        query: {},
        asPath: '/mypage/addcorrection/projectSelect',
      },
    },
  },
  name: 'Project Select Page',
};

export const WithContent: Story = {
  render: () => (
    <div className="flex">
      <CorrectionSidebar />
      <div className="ml-[281px] p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-gray-600">This shows how the sidebar appears alongside main content.</p>
      </div>
    </div>
  ),
  parameters: {
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
      router: {
        pathname: '/mypage/addcorrection/correctionIntro',
        query: {},
        asPath: '/mypage/addcorrection/correctionIntro',
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
      router: {
        pathname: '/mypage/addcorrection/correctionIntro',
        query: {},
        asPath: '/mypage/addcorrection/correctionIntro',
      },
    },
  },
};
