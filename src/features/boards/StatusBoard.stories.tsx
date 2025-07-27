import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StatusBoard from './StatusBoard';

// Mock data for the board
const mockSteps = [
  {
    id: '1',
    name: '할 일',
    items: [
      {
        id: '1',
        title: '요구사항 분석',
        status: '할 일',
        deadline: '2024-01-15',
        assignee: ['김철수'],
      },
      {
        id: '2',
        title: 'UI 디자인',
        status: '할 일',
        deadline: '2024-01-20',
        assignee: ['이영희'],
      },
    ],
  },
  {
    id: '2',
    name: '진행 중',
    items: [
      {
        id: '3',
        title: '백엔드 API 개발',
        status: '진행 중',
        deadline: '2024-01-25',
        assignee: ['박민수'],
      },
    ],
  },
  {
    id: '3',
    name: '완료',
    items: [
      {
        id: '4',
        title: '프로젝트 계획 수립',
        status: '완료',
        deadline: '2024-01-10',
        assignee: ['홍길동'],
      },
    ],
  },
];

// Mock the Next.js router
const mockRouter = {
  back: fn(),
  forward: fn(),
  refresh: fn(),
  push: fn(),
  replace: fn(),
  prefetch: fn(),
};

const meta: Meta<typeof StatusBoard> = {
  title: 'Features/Boards/StatusBoard',
  component: StatusBoard,
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
  argTypes: {
    projectId: {
      control: 'text',
      description: 'ID of the project',
    },
  },
  args: {
    steps: mockSteps,
    projectId: 'project-1',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: mockSteps,
    projectId: 'project-1',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          상태별 업무 보드
        </h1>
        <Story />
      </div>
    ),
  ],
};

export const EmptyBoard: Story = {
  args: {
    steps: [
      { id: '1', name: '할 일', items: [] },
      { id: '2', name: '진행 중', items: [] },
      { id: '3', name: '완료', items: [] },
    ],
    projectId: 'project-empty',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>빈 상태 보드</h1>
        <Story />
      </div>
    ),
  ],
};

export const FullBoard: Story = {
  args: {
    steps: [
      {
        id: '1',
        name: '할 일',
        items: [
          {
            id: '1',
            title: '요구사항 분석',
            status: '할 일',
            deadline: '2024-01-15',
            assignee: ['김철수'],
          },
          {
            id: '2',
            title: 'UI 디자인',
            status: '할 일',
            deadline: '2024-01-20',
            assignee: ['이영희'],
          },
          {
            id: '3',
            title: '데이터베이스 설계',
            status: '할 일',
            deadline: '2024-01-18',
            assignee: ['박민수'],
          },
        ],
      },
      {
        id: '2',
        name: '진행 중',
        items: [
          {
            id: '4',
            title: '백엔드 API 개발',
            status: '진행 중',
            deadline: '2024-01-25',
            assignee: ['홍길동'],
          },
          {
            id: '5',
            title: '프론트엔드 개발',
            status: '진행 중',
            deadline: '2024-01-30',
            assignee: ['김철수', '이영희'],
          },
        ],
      },
      {
        id: '3',
        name: '완료',
        items: [
          {
            id: '6',
            title: '프로젝트 계획 수립',
            status: '완료',
            deadline: '2024-01-10',
            assignee: ['박민수'],
          },
          {
            id: '7',
            title: '팀 구성',
            status: '완료',
            deadline: '2024-01-12',
            assignee: ['홍길동'],
          },
        ],
      },
    ],
    projectId: 'project-full',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          업무가 많은 보드
        </h1>
        <Story />
      </div>
    ),
  ],
};
