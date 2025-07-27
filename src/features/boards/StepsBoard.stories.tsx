import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StepsBoard from './StepsBoard';

// Mock data for the board
const mockSteps = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: '검토',
    items: [],
  },
  {
    id: 4,
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

const meta: Meta<typeof StepsBoard> = {
  title: 'Features/Boards/StepsBoard',
  component: StepsBoard,
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
          단계별 업무 보드 (드래그 앤 드롭 지원)
        </h1>
        <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
          업무 카드를 드래그하여 다른 단계로 이동할 수 있습니다.
        </p>
        <Story />
      </div>
    ),
  ],
};

export const EmptySteps: Story = {
  args: {
    steps: [
      { id: 1, name: '백로그', items: [] },
      { id: 2, name: '할 일', items: [] },
      { id: 3, name: '진행 중', items: [] },
      { id: 4, name: '완료', items: [] },
    ],
    projectId: 'project-empty',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>빈 단계 보드</h1>
        <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
          각 단계에서 "업무 추가" 버튼을 클릭하여 새 업무를 추가할 수 있습니다.
        </p>
        <Story />
      </div>
    ),
  ],
};

export const ManyTasks: Story = {
  args: {
    steps: [
      {
        id: 1,
        name: '백로그',
        items: [
          {
            id: '1',
            title: '사용자 인증 구현',
            status: '백로그',
            deadline: '2024-02-01',
            assignee: ['김철수'],
          },
          {
            id: '2',
            title: '데이터베이스 최적화',
            status: '백로그',
            deadline: '2024-02-05',
            assignee: ['이영희'],
          },
          {
            id: '3',
            title: '모바일 반응형 적용',
            status: '백로그',
            deadline: '2024-02-10',
            assignee: ['박민수'],
          },
        ],
      },
      {
        id: 2,
        name: '할 일',
        items: [
          {
            id: '4',
            title: 'API 문서 작성',
            status: '할 일',
            deadline: '2024-01-28',
            assignee: ['홍길동'],
          },
          {
            id: '5',
            title: '단위 테스트 작성',
            status: '할 일',
            deadline: '2024-01-30',
            assignee: ['김철수', '이영희'],
          },
        ],
      },
      {
        id: 3,
        name: '진행 중',
        items: [
          {
            id: '6',
            title: '메인 페이지 개발',
            status: '진행 중',
            deadline: '2024-01-25',
            assignee: ['박민수'],
          },
        ],
      },
      {
        id: 4,
        name: '완료',
        items: [
          {
            id: '7',
            title: '프로젝트 세팅',
            status: '완료',
            deadline: '2024-01-15',
            assignee: ['홍길동'],
          },
          {
            id: '8',
            title: '기본 레이아웃 구성',
            status: '완료',
            deadline: '2024-01-20',
            assignee: ['김철수'],
          },
        ],
      },
    ],
    projectId: 'project-many',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          업무가 많은 단계 보드
        </h1>
        <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
          다양한 단계에 많은 업무들이 있는 상태입니다.
        </p>
        <Story />
      </div>
    ),
  ],
};
