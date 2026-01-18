import React from 'react'

function Navbar() {
     return (
    <div className="relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Main navbar */}
      <div className="relative bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative flex justify-between items-center px-6 py-4">
          {/* Logo Section with 3D effect */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1" style={{transformStyle: 'preserve-3d'}}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-md opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-xl shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  &lt;Pass<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">OP</span>&gt;
                </h1>
              </div>
            </div>
          </div>

          {/* GitHub Button with 3D effect */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
            <a href="https://github.com/bhautik2005/PassOp">
            <button className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 group" >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  <img 
                    src="src/assets/IconBrandGithub.svg" 
                    alt="GitHub" 
                    className="relative h-6 w-6 invert transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                  />
                </div>
                <span className="font-semibold text-lg tracking-wide transition-all duration-300 group-hover:text-gray-200">
                  GitHub
                </span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
              </div>
            </button>
            </a>
          </div>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      </div>
    </div>
  );
}

export default Navbar