import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function main() {

  const ref = useRef()
  const pass = useRef()
  const [from, setform] = useState({
    email: "", username: "", password: ""
  })
  const [savepass, setsavepass] = useState([])

  useEffect(() => {
    let passowrd = localStorage.getItem('passowrd')
    if (passowrd) {
      setsavepass(JSON.parse(passowrd))
    }


  }, [])

  const handalcahnge = (e) => {
    setform({ ...from, [e.target.name]: e.target.value })
  }

  const save = () => {

    if (from.email.length > 3 && from.username.length > 3 && from.password.length > 3) {

      setsavepass([...savepass, { ...from, id: uuidv4() }])
      localStorage.setItem('passowrd', JSON.stringify([...savepass, { ...from, id: uuidv4() }]))
      console.log([...savepass, from])
      setform({ email: "", username: "", password: "" })

      toast('save successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    }
    else {
      toast("Please fill all the fields");
    }
  }

  const passowrdShow = () => {

    if (ref.current.src.includes("hide.png")) {
      alert("The Password is Show");
      ref.current.src = "src/assets/view.png";
      pass.current.type = "text";
    } else {
      ref.current.src = "src/assets/hide.png";
      pass.current.type = "password";
    }
  };

  const handaldelete = (id) => {

    let c = confirm('Are you sure you want to delete this item?')
    if (c) {
      setsavepass([...savepass.filter((item) => item.id !== id)])
      localStorage.setItem('passowrd', JSON.stringify([...savepass.filter((item) => item.id !== id)]))
      console.log(id)
    }
    toast('Delete successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  };

  const handaledit = (id) => {
    setform(savepass.filter((item) => item.id === id)[0])
    setsavepass([...savepass.filter((item) => item.id !== id)])




  }

  const copytext = (text) => {
    toast('Copied ' + text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text)

  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* 3D Background with animated gradients */}
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-40 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 py-8 px-4">
          <div className="max-w-6xl mx-auto">

            {/* 3D Header Section */}
            <div className="text-center mb-3 transform perspective-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-3 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-x-5 hover:rotate-y-5" style={{ transformStyle: 'preserve-3d' }}>
                  <p className="text-lg text-white/80 font-light">Your own Password Manager</p>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* 3D Form Section */}
            <div className="mb-8 transform perspective-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500" style={{ transformStyle: 'preserve-3d' }}>

                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                      <div className="w-7 h-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      Add New Password
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Site Input with 3D effect */}
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-white/90 mb-2 transform transition-all duration-300 group-focus-within:text-cyan-300">
                        Website/Service
                      </label>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-50 transition-opacity duration-300"></div>
                        <input
                          onChange={handalcahnge}
                          value={from.email}
                          name="email"
                          type="text"
                          placeholder="Site"
                          className="relative w-full h-12 px-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl outline-none text-white placeholder-white/50 transition-all duration-300 focus:border-cyan-400 focus:bg-white/20 focus:shadow-2xl focus:scale-[1.02] hover:border-white/40"
                        />
                      </div>
                    </div>

                    {/* Username and Password Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Username Input */}
                      <div className="relative group">
                        <label className="block text-sm font-semibold text-white/90 mb-2 transform transition-all duration-300 group-focus-within:text-purple-300">
                          Username
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-50 transition-opacity duration-300"></div>
                          <input
                            onChange={handalcahnge}
                            value={from.username}
                            name="username"
                            type="text"
                            placeholder="UserName"
                            className="relative w-full h-12 px-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl outline-none text-white placeholder-white/50 transition-all duration-300 focus:border-purple-400 focus:bg-white/20 focus:shadow-2xl focus:scale-[1.02] hover:border-white/40"
                          />
                        </div>
                      </div>

                      {/* Password Input */}
                      <div className="relative group">
                        <label className="block text-sm font-semibold text-white/90 mb-2 transform transition-all duration-300 group-focus-within:text-pink-300">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-50 transition-opacity duration-300"></div>
                          <input
                            onChange={handalcahnge}
                            value={from.password}
                            name="password"
                            type="password"
                            ref={pass}
                            placeholder="Password"
                            className="relative w-full h-12 px-6 pr-16 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl outline-none text-white placeholder-white/50 transition-all duration-300 focus:border-pink-400 focus:bg-white/20 focus:shadow-2xl focus:scale-[1.02] hover:border-white/40"
                          />
                          <button
                            type="button"
                            onClick={passowrdShow}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
                          >
                            <img src="src/assets/hide.png" alt="" className="h-5 w-5" ref={ref} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 3D Add Button */}
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={save}
                        className="group relative px-10 py-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Add Password
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Password Display Section */}
            {savepass.length === 0 ? (
              <div className="transform perspective-1000">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-20 text-center shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
                    <div className="text-white/60 mb-6">
                      <svg className="w-24 h-24 mx-auto mb-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-white/80 mb-4">NOT SAVE ANY ITEMS</h3>
                    <p className="text-xl text-white/60">Add your first password to get started with secure storage.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="transform perspective-1000">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500">

                    {/* 3D Header */}
                    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <h2 className="relative text-3xl font-bold text-white flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        Saved Passwords ({savepass.length})
                      </h2>
                    </div>

                    {/* Desktop 3D Table */}
                    <div className="hidden md:block">
                      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="px-8 py-6 text-left text-sm font-bold text-white/90 uppercase tracking-wider">
                                Site
                              </th>
                              <th className="px-8 py-6 text-left text-sm font-bold text-white/90 uppercase tracking-wider">
                                UserName
                              </th>
                              <th className="px-8 py-6 text-left text-sm font-bold text-white/90 uppercase tracking-wider">
                                Password
                              </th>
                              <th className="px-8 py-6 text-left text-sm font-bold text-white/90 uppercase tracking-wider">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {savepass.map((item, index) => (
                              <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group">
                                <td className="px-8 py-3">
                                  <div className="flex items-center space-x-4">
                                    <a
                                      href="item.email"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-300 hover:underline"
                                    >
                                      {item.email}
                                    </a>
                                    <button
                                      onClick={() => copytext(item.email)}
                                      className="p-3 text-white/60 hover:text-cyan-400 hover:bg-cyan-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform"
                                    >
                                      <img src="src/assets/copy.png" alt="" className="w-5 h-5" />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-8 py-3">
                                  <div className="flex items-center space-x-4">
                                    <span className="text-white font-medium text-lg">{item.username}</span>
                                    <button
                                      onClick={() => copytext(item.username)}
                                      className="p-3 text-white/60 hover:text-purple-400 hover:bg-purple-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform"
                                    >
                                      <img src="src/assets/copy.png" alt="" className="w-5 h-5" />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-8 py-3">
                                  <div className="flex items-center space-x-4">
                                    <span className="text-white font-mono text-lg">{item.password}</span>
                                    <button
                                      onClick={() => copytext(item.password)}
                                      className="p-3 text-white/60 hover:text-pink-400 hover:bg-pink-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform"
                                    >
                                      <img src="src/assets/copy.png" alt="" className="w-5 h-5" />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-8 py-3">
                                  <div className="flex items-center space-x-3">
                                    <button
                                      onClick={() => handaledit(item.id)}
                                      className="p-3 text-white/60 hover:text-blue-400 hover:bg-blue-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                                    >
                                      <img src="src/assets/edit-text.png" alt="" className="w-6 h-6" />
                                    </button>
                                    <button
                                      onClick={() => handaldelete(item.id)}
                                      className="p-3 text-white/60 hover:text-red-400 hover:bg-red-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                                    >
                                      <img src="src/assets/delete.png" alt="" className="w-6 h-6" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Mobile 3D Cards */}
                    <div className="md:hidden p-6 space-y-6">
                      {savepass.map((item, index) => (
                        <div key={index} className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:rotate-1">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <a
                                  href="item.email"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-cyan-400 hover:text-cyan-300 font-bold text-xl"
                                >
                                  {item.email}
                                </a>
                                <button
                                  onClick={() => copytext(item.email)}
                                  className="p-2 text-white/60 hover:text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all duration-300"
                                >
                                  <img src="src/assets/copy.png" alt="" className="w-4 h-4" />
                                </button>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-white/70 text-sm">Username:</span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium">{item.username}</span>
                                  <button
                                    onClick={() => copytext(item.username)}
                                    className="p-2 text-white/60 hover:text-purple-400 hover:bg-purple-400/20 rounded-lg transition-all duration-300"
                                  >
                                    <img src="src/assets/copy.png" alt="" className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-white/70 text-sm">Password:</span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-mono">{item.password}</span>
                                  <button
                                    onClick={() => copytext(item.password)}
                                    className="p-2 text-white/60 hover:text-pink-400 hover:bg-pink-400/20 rounded-lg transition-all duration-300"
                                  >
                                    <img src="src/assets/copy.png" alt="" className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              <div className="flex justify-end space-x-2 pt-4 border-t border-white/10">
                                <button
                                  onClick={() => handaledit(item.id)}
                                  className="p-3 text-white/60 hover:text-blue-400 hover:bg-blue-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform"
                                >
                                  <img src="src/assets/edit-text.png" alt="" className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handaldelete(item.id)}
                                  className="p-3 text-white/60 hover:text-red-400 hover:bg-red-400/20 rounded-xl transition-all duration-300 hover:scale-110 transform"
                                >
                                  <img src="src/assets/delete.png" alt="" className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default main