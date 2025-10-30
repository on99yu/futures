import { useState } from "react";

export default function LoginPage(){

    const [isLoading, setIsLoading] = useState(false);
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">관리자 로그인</h2>

        <input
          type="email"
          placeholder="이메일"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
    )
}