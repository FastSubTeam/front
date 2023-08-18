import { createTheme } from '@mui/material/styles';

export const API_BASE_URL = 'http://15.164.205.25:8080';

export const NAV_ITEMS = [
  {
    label: '팝업스토어',
    href: '/store',
  },
  {
    label: '공간찾기',
    href: '/search',
  },
  {
    label: '회원 커뮤니티',
    href: '/community',
  },
  // {
  //   label: '임차대행',
  //   href: '/rent',
  // },
  // {
  //   label: '프로모션대행',
  //   href: '/promotion',
  // },
];

export const ADMIN_NAV_ITEMS = [
  {
    label: 'menu 1',
    href: '/admin',
    children: [], // 하위 메뉴 href
  },
  {
    label: 'menu 2',
    href: '/admin/menu2',
    children: [],
  },
  {
    label: '수요조사',
    href: '/admin/survey',
    children: ['/admin/survey/detail'],
  },
];

// 이메일 유효성 정규식
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 비밀번호 8자리 이상
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// 페이지네이션 상수
export const ITEMS_COUNT_PER_COMMUNITY_PAGE: number = 10;
export const PAGE_RANGE_DISPLAY: number = 5;

// 전체 이벤트 조회
export const COUNT_PER_EVENTS_PAGE = 12;

// 모든 이벤트 조회 페이지 테마 생성
export const EVENTS_THEME = createTheme({
  palette: {
    primary: {
      main: 'rgb(0 201 167)', // 커스텀 primary 색상
    },
    secondary: {
      main: '#fff',
    },
  },
});

// 수요조사 연령대 옵션
export const AGE_OPTIONS = [
  {
    id: 10,
    content: '10대',
  },
  {
    id: 20,
    content: '20대',
  },
  {
    id: 30,
    content: '30대',
  },
  {
    id: 40,
    content: '40대',
  },
  {
    id: 50,
    content: '50대 이상',
  },
];
