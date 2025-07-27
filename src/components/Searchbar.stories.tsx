import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Searchbar } from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'Components/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
  args: {
    onChange: fn(),
    onFilterClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '검색어를 입력하세요.',
    onChange: fn(),
    onFilterClick: fn(),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: '프로젝트를 검색해보세요.',
    onChange: fn(),
    onFilterClick: fn(),
  },
};

export const WithoutFilter: Story = {
  args: {
    placeholder: '검색어를 입력하세요.',
    onChange: fn(),
    // onFilterClick을 제공하지 않음
  },
};

export const InContainer: Story = {
  args: {
    placeholder: '검색어를 입력하세요.',
    onChange: fn(),
    onFilterClick: fn(),
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', backgroundColor: '#f8f8f8', width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
