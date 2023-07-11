import { NAV_ITEMS } from '@/data/constants';
import { Link } from 'react-router-dom';
import Popple from './ui/Popple';

export default function Navbar() {
  return (
    <header className="container mx-auto flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-10">
        <Popple />
        <ul className="flex gap-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex gap-2">
          {/* 관리자 메뉴 임시 생성 */}
          <li>
            <Link to="/admin/survey">관리자</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
