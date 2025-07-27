import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css'; // Tailwind CSS 스타일 import

// Pretendard 폰트 정의
const pretendardFontFace = `
@font-face {
  font-family: 'Pretendard';
  src: url('../src/app/fonts/PretendardVariable.woff2') format('woff2');
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
}
`;

// 폰트 스타일을 헤드에 추가
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = pretendardFontFace;
  document.head.appendChild(style);

  // body에 Pretendard 폰트 적용
  document.body.style.fontFamily = 'Pretendard, system-ui, -apple-system, sans-serif';
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    // 배경 설정 (옵션)
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'gray',
          value: '#f8f8f8',
        },
      ],
    },
  },

  // 전역 decorators
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Pretendard, system-ui, -apple-system, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
