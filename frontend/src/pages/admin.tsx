export default function Admin(){
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        window.dispatchEvent(new Event("tokenChange"));
        window.location.href="/";
    };

    return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">관리자 페이지</h1>
      <div className="bg-gray-100 p-4 rounded">
        <p><strong>이름:</strong> {username}</p>
        <p><strong>이메일:</strong> {email}</p>
        <button onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >로그아웃</button>
      </div>
    </div>
    )
}