import { Link } from "react-router-dom";
export default function NavBar() {

  return (
      <header className="bg-gray-100 p-4 shadow">
        <nav className="flex justify-start pl-8 space-x-10">
          <Link to="/admin" className="hover:text-blue-500">관리자 홈</Link>
          <Link to="/admin/kanji" className="hover:text-blue-500" >한자 관리</Link>
        </nav>
      </header>
  );
}