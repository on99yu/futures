
import KanjiTable from "../../components/KanjiTable";
import { Link } from "react-router-dom";
export default function TradingRecords() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-16">
        <h1 className="text-2xl font-bold mb-4">한자 관리 페이지</h1>
        <button className="mb-4 px-4 py-2  text-white rounded hover:bg-blue-700 bg-blue-500">
          <Link to="/admin/kanji/upload">한자 업로드 하러가기</Link>
        </button>
      </div>
      {/* <KanjiTable words={safeWords} /> */}
      <KanjiTable/>
    </div>
  );
}
