# Teamie Frontend Storybook

이 Storybook에는 Teamie 프론트엔드 프로젝트의 UI 컴포넌트들이 포함되어 있습니다.

## 설치된 컴포넌트 스토리

### 기본 컴포넌트 (Components)

- **BackButton** - 뒤로가기 버튼 컴포넌트
- **DeleteButton** - 삭제 기능이 있는 버튼 (모달 포함)
- **ToggleButton** - 두 옵션 간 전환 버튼
- **Searchbar** - 검색바 컴포넌트
- **AddProfileButton** - 프로필 추가 드롭다운 버튼
- **TaskItem** - 태스크 아이템 카드 컴포넌트
- **DayPicker** - 날짜 선택 캘린더 컴포넌트
- **ProfileDropdown** - 프로필 드롭다운 메뉴

### 피처별 컴포넌트 (Features)

- **ReductionToggle** - 축소 제거 토글 버튼 (Correction 피처)

## Storybook 실행

```bash
pnpm run storybook
```

Storybook은 http://localhost:6006 에서 실행됩니다.

## 스토리 빌드

```bash
pnpm run build-storybook
```

## 컴포넌트 사용 예시

각 컴포넌트는 다양한 상태와 props를 가진 여러 스토리들로 구성되어 있습니다:

- **Default**: 기본 상태의 컴포넌트
- **Variants**: 다양한 props 조합
- **Interactive**: 상호작용 예시
- **In Container**: 실제 사용 환경을 모방한 데코레이터

## 추가 컴포넌트 스토리 생성

새로운 컴포넌트의 스토리를 생성하려면:

1. 컴포넌트와 같은 폴더에 `ComponentName.stories.tsx` 파일 생성
2. 다음과 같은 기본 구조 사용:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import YourComponent from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // props에 대한 controls 정의
  },
  args: {
    // 기본 args
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
```

## 주의사항

- Next.js 의존성이 있는 컴포넌트들은 `parameters.nextjs` 설정이 포함되어 있습니다
- Tailwind CSS 스타일이 적용되어 있습니다
- 일부 컴포넌트는 mock 함수(`fn()`)를 사용하여 상호작용을 시뮬레이션합니다

## 설치된 애드온

- `@storybook/addon-docs` - 자동 문서화
- `@storybook/addon-a11y` - 접근성 검사
- `@storybook/addon-vitest` - 테스트 통합
- `@chromatic-com/storybook` - 시각적 회귀 테스트
