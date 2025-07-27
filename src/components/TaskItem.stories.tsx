import type { Meta, StoryObj } from '@storybook/react';
import TaskItem from './TaskItem';

const meta: Meta<typeof TaskItem> = {
  title: 'Components/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    projectId: { control: 'text' },
    title: { control: 'text' },
    status: {
      control: 'select',
      options: ['시작 전', '진행 중', '완료'],
    },
    deadline: { control: 'text' },
    assignee: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    projectId: '123',
    id: 1,
    title: '기획서 초안 작성',
    status: '진행 중',
    deadline: '2024-05-04',
    assignee: ['홍길동', '이순신'],
  },
};

export const NotStarted: Story = {
  args: {
    projectId: '123',
    id: 2,
    title: '요구사항 정리 및 분석',
    status: '시작 전',
    deadline: '2024-05-07',
    assignee: ['김철수'],
  },
};

export const Completed: Story = {
  args: {
    projectId: '123',
    id: 3,
    title: 'UI/UX 디자인 완료',
    status: '완료',
    deadline: '2024-04-30',
    assignee: ['박영희', '이미연'],
  },
};

export const NoDeadline: Story = {
  args: {
    projectId: '123',
    id: 4,
    title: '추가 기능 검토',
    status: '시작 전',
    deadline: '',
    assignee: [],
  },
};

export const LongTitle: Story = {
  args: {
    projectId: '123',
    id: 5,
    title: '매우 긴 제목을 가진 태스크입니다. 이 제목은 여러 줄에 걸쳐서 표시될 수 있습니다.',
    status: '진행 중',
    deadline: '2024-05-15',
    assignee: ['김수빈', '김태화', '두현우'],
  },
};

export const MultipleAssignees: Story = {
  args: {
    projectId: '123',
    id: 6,
    title: '팀 협업 태스크',
    status: '진행 중',
    deadline: '2024-05-20',
    assignee: ['김수빈', '김태화', '두현우', '유호인', '이예린'],
  },
};
