import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-blue-600 text-white p-6 pl-16">
     <nav className="relative flex space-x-6 gap-6 items-center">
      <div className="space-x-4">
        <Link to="/" className="text-2xl font-bold hover:underline">나를 위한 선물</Link>
        <Link to="/about" className="hover:underline">트레이딩 기록</Link>
        <Link to="/dashboard" className="hover:underline">랏수 계산기</Link>
        <Link to="/login"  className="absolute hover:underline right-16">로그인</Link>
      </div>
    </nav>
    </header>
  );
}