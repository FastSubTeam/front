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
    label: '임차대행',
    href: '/rent',
  },
  {
    label: '프로모션대행',
    href: '/promotion',
  },
];

export const ADMIN_NAV_ITEMS = [
  {
    label: 'menu 1',
    href: '/admin',
  },
  {
    label: 'menu 2',
    href: '/admin',
  },
  {
    label: '수요조사',
    href: '/admin/survey',
  },
];

// 이메일 유효성 정규식
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 비밀번호 8자리 이상
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;