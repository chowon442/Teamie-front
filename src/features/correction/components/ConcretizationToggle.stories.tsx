import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import ConcretizationToggle from './ConcretizationToggle';

const meta: Meta<typeof ConcretizationToggle> = {
  title: 'Features/Correction/ConcretizationToggle',
  component: ConcretizationToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onCToggle: {
      action: 'toggled',
      description: 'Callback function when toggle state changes',
    },
  },
  args: {
    onCToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCToggle: fn(),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [toggleState, setToggleState] = useState(false);

    const handleToggle = (value: boolean) => {
      setToggleState(value);
      args.onCToggle(value);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <ConcretizationToggle onCToggle={handleToggle} />
        <p className="text-sm text-gray-600">
          Current state: {toggleState ? 'ON (Concretization)' : 'OFF (UnEdited)'}
        </p>
      </div>
    );
  },
};

export const WithContext: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <ConcretizationToggle onCToggle={args.onCToggle} />
      <div className="flex">
        <div className="bg-[#97D099] w-[4px] h-[34px] rounded-l-[4px]"></div>
        <div className="w-[260px] h-[34px] bg-[#97D0991A] px-[12px] py-[4px] rounded-r-[4px]">
          <p className="text-[18px]">내용을 더 구체화하여 강조하세요.</p>
        </div>
      </div>
    </div>
  ),
  args: {
    onCToggle: fn(),
  },
};

export const Mobile: Story = {
  args: {
    onCToggle: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop: Story = {
  args: {
    onCToggle: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
