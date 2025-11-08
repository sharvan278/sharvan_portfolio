
export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="w-full">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Pacifico, cursive'}}>
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-3 max-w-7xl mx-auto px-4" style={{ gap: '2rem' }}>
        {/* Programming Languages Box */}
        <div className="bg-[#2A3B5C] rounded-xl p-6" style={{ border: '2px solid rgba(255, 255, 255, 0.6)' }}>
          <h3 className="text-lg font-bold text-white mb-4 text-center pb-3 border-b border-white/20">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-sm mb-2 mx-auto">JS</div>
              <span className="text-sm text-white">JavaScript</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🐍</div>
              <span className="text-sm text-white">Python</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">K</div>
              <span className="text-sm text-white">Kotlin</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">☕</div>
              <span className="text-sm text-white">Java</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">C</div>
              <span className="text-sm text-white">C</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">TS</div>
              <span className="text-sm text-white">TypeScript</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🐹</div>
              <span className="text-sm text-white">Go</span>
            </div>
          </div>
        </div>

        {/* Frameworks Box */}
        <div className="bg-[#2A3B5C] rounded-xl p-6" style={{ border: '2px solid rgba(255, 255, 255, 0.6)' }}>
          <h3 className="text-lg font-bold text-white mb-4 text-center pb-3 border-b border-white/20">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">EX</div>
              <span className="text-sm text-white">Express</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">N</div>
              <span className="text-sm text-white">Next.js</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🌶️</div>
              <span className="text-sm text-white">Flask</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">⚛️</div>
              <span className="text-sm text-white">React</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">📗</div>
              <span className="text-sm text-white">Node</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">B</div>
              <span className="text-sm text-white">Bootstrap</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🎨</div>
              <span className="text-sm text-white">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Tools Box */}
        <div className="bg-[#2A3B5C] rounded-xl p-6" style={{ border: '2px solid rgba(255, 255, 255, 0.6)' }}>
          <h3 className="text-lg font-bold text-white mb-4 text-center pb-3 border-b border-white/20">
            Tools
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🔥</div>
              <span className="text-sm text-white">Firebase</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🐘</div>
              <span className="text-sm text-white">PostgreSQL</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🍃</div>
              <span className="text-sm text-white">MongoDB</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">☁️</div>
              <span className="text-sm text-white">Cloudflare</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">git</div>
              <span className="text-sm text-white">Git</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">🐳</div>
              <span className="text-sm text-white">Docker</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">☸️</div>
              <span className="text-sm text-white">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
