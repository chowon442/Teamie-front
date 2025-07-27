import type { Meta, StoryObj } from '@storybook/react';
import Portal from './Portal';

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'aside'],
      description: 'HTML element type for the portal container',
    },
    containerId: {
      control: 'text',
      description: 'ID for the portal container element',
    },
  },
  args: {
    as: 'div',
    containerId: 'portal-root',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        <h3>Portal Content</h3>
        <p>This content is rendered through a portal!</p>
      </div>
    ),
  },
};

export const Modal: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            maxWidth: '400px',
            width: '90%',
          }}
        >
          <h2 style={{ margin: '0 0 16px 0' }}>Modal Example</h2>
          <p style={{ margin: '0 0 20px 0' }}>
            This is a modal rendered through a portal component.
          </p>
          <button
            style={{
              background: '#81D7D4',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </>
    ),
  },
};

export const CustomContainer: Story = {
  args: {
    containerId: 'custom-portal',
    children: (
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#81D7D4',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        Toast Notification
      </div>
    ),
  },
};
