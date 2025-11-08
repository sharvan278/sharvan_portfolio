export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Pacifico, cursive'}}>
          Projects
        </h2>
      </div>

      {/* Major Project - Grocera */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-[#2A3B5C] rounded-xl p-6">
          <div className="flex gap-6 items-start">
            {/* Left: Project Image - Smaller */}
            <div className="flex-shrink-0">
              <img 
                src="/images/projects/grocera-thumb.jpg" 
                alt="Grocera Project" 
                className="w-48 h-36 object-cover rounded-lg"
              />
            </div>
            
            {/* Right: Project Details */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white">Grocera</h3>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">N</div>
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">TS</div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed mb-4">
                Engineered an ML-powered grocery optimization system reducing waste by 27%, using demand forecasting & smart alerts. Trained Random Forest & XGBoost models achieving 92% forecasting accuracy.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://grocera-2.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href="https://github.com/sharvan278/GROCERA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minor Projects Section */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {/* StayEase Project */}
          <div className="bg-[#2A3B5C] rounded-xl p-6">
            <div className="flex gap-4 items-start">
              {/* Left: Small Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/projects/stayease-thumb.jpg" 
                  alt="StayEase" 
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              
              {/* Right: Project Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-white">StayEase</h4>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">N</div>
                    <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white text-[10px] font-bold">TS</div>
                    <div className="w-5 h-5 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">⚛</div>
                    <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center text-white text-xs">≈</div>
                  </div>
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Property booking platform with secure authentication and maps integration. Built with MERN stack.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for future projects */}
          <div className="bg-[#2A3B5C] rounded-xl p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-xl mb-3 mx-auto">
                ➕
              </div>
              <h4 className="text-lg font-bold text-gray-400 mb-2">More Coming Soon</h4>
              <p className="text-gray-500 text-sm">
                Currently working on exciting new projects. Stay tuned for updates!
              </p>
            </div>
          </div>

          <div className="bg-[#2A3B5C] rounded-xl p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-xl mb-3 mx-auto">
                🚀
              </div>
              <h4 className="text-lg font-bold text-gray-400 mb-2">Future Project</h4>
              <p className="text-gray-500 text-sm">
                Innovative solutions in development. Check back for the latest updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}