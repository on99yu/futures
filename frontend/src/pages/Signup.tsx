import { useState} from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.BACKEND_API_URL;

export default function Singup(){

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: username, password: password, email: email }),
                }
                )
            if(!res.ok){
                const data = await res.json();
                throw new Error(data.error|| "회원가입 실패");
            }   
        }catch(err){
            if(err instanceof Error){
                setError(err.message);
            }else{
                setError("알 수 없는 오류가 발생했습니다.");
            }
        }finally{
            setIsLoading(false)
        }
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="text"
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <div id="buttons" className="space-y-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "회원가입 중..." : "회원가입"}
        </button>
        <Link to="/login"className="text-blue-500 hover:underline">로그인 하러가기</Link>
        </div>
      </form>
    </div>
    )
}
    