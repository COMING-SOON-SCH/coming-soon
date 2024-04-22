import React, { useState } from "react";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log("id:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-96 p-8 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">COMING SOON</h2>
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="관리자 아이디"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="관리자 비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="w-full bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
