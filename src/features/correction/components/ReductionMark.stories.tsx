import type { Meta, StoryObj } from '@storybook/react';
import ReductionMark from './ReductionMark';

const meta: Meta<typeof ReductionMark> = {
  title: 'Features/Correction/ReductionMark',
  component: ReductionMark,
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

export const WithText: Story = {
  render: () => (
    <div className="flex items-center">
      <span className="text-gray-700">Sample text with reduction mark</span>
      <ReductionMark />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="max-w-md p-4 border rounded-lg">
      <p className="text-gray-800">
        어려움과 극복 과정: 회원 간 친분 형성 후 공식 활동 참여율이 저하되는 문제가 발생했습니다.
        이를 해결하기 위해 대외협력국과 협력하여 기업 연계 프로그램을 유치, 동아리에서만 가능한
        '이력서 작성' 프로그램을 기획했습니다.
        <ReductionMark />
      </p>
    </div>
  ),
};

export const MultipleMarks: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2">
        <span>First marked text</span>
        <ReductionMark />
      </div>
      <div className="flex items-center gap-2">
        <span>Second marked text</span>
        <ReductionMark />
      </div>
      <div className="flex items-center gap-2">
        <span>Third marked text</span>
        <ReductionMark />
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-4">
        <span>Reduction Mark:</span>
        <ReductionMark />
      </div>
      <div className="flex items-center gap-4">
        <span>Concretization Mark:</span>
        <div className="flex ml-[12px]">
          <div className="bg-[#97D099] w-[4px] h-[34px] rounded-l-[4px]"></div>
          <div className="bg-[#F5FBF5] px-[12px] py-[4px] rounded-r-[4px]"></div>
        </div>
      </div>
    </div>
  ),
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
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
