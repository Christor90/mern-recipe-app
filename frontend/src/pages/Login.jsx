import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error('Register error:, ', err);
    }
  };

  return (
    // <div className="max-w-md mx-auto p-4 ">
    //   <h1 className="text-2xl font-bold mb-4">Login</h1>
    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <div>
    //       <label className="block text-gray-700">Email</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //         className="w-full p-2 border rounded"
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-gray-700">Password</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //         className="w-full p-2 border rounded"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-600"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-md p-6 border border-gray-200 shadow-md rounded-2xl bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
