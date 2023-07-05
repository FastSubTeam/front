import { RiKakaoTalkFill } from 'react-icons/ri';

interface KakoaButtonProps {
  disabled: boolean;
}

export default function KakoaButton({ disabled }: KakoaButtonProps) {
  return (
    <a
      href="https://kauth.kakao.com/oauth/authorize?client_id=921fbdc50a1c510a40df3bebfcf15573&redirect_uri=http://localhost:5173/auth/kakao/callback&response_type=code"
      className={`${disabled ? 'pointer-events-none' : ''}`}
    >
      <button
        disabled={disabled}
        className="flex w-full items-center justify-center rounded-md border-2 border-[#ffe812] bg-[#ffe812] px-3 py-2 font-bold ring-black ring-offset-2 transition hover:opacity-80 focus:ring-2 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
        type="button"
      >
        <div className="flex items-center gap-2">
          <RiKakaoTalkFill size={20} />
          <span>카카오 로그인 하기</span>
        </div>
      </button>
    </a>
  );
}
