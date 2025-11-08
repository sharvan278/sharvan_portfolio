export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Pacifico, cursive'}}>
          Internship Experience
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* ServiceNow Experience */}
        <div className="bg-[#2C405A] rounded-xl p-8">
          <div className="flex gap-8 items-start mb-6">
            {/* Left Container - Logo Circle */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{background: '#2d5016'}}>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-white">servicenow</div>
                </div>
              </div>
            </div>
            
            {/* Right Container - Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">ServiceNow</h3>
              <p className="text-white mb-1">Hyderabad, India</p>
              <p className="text-white text-sm mb-4">June 2025 - August 2025</p>

              <div className="space-y-2">
                <p className="text-white text-sm">→ Automated the Transfer of Information (TOI) content creation process by leveraging work record data and code change details specific to each product/service and release version.</p>
                <p className="text-white text-sm">→ Implemented a multi-agent workflow that simultaneously auto-generates 14 structured content sections, with a scalable architecture that supports seamless integration of new content sections.</p>
              </div>
            </div>
          </div>

          {/* Images Section - Below text content */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/modeln-3.jpg" alt="Certificate" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/modeln-1.jpg" alt="Recognition" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/modeln-2.jpg" alt="Team" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>

        {/* Innomatics Research Labs Experience */}
        <div className="bg-[#2C405A] rounded-xl p-8">
          <div className="flex gap-8 items-start mb-6">
            {/* Left Container - Logo Circle */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                I
              </div>
            </div>
            
            {/* Right Container - Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Innomatics Research Labs</h3>
              <p className="text-white mb-1">Hyderabad, India</p>
              <p className="text-white text-sm mb-4">January 2025 - March 2025</p>

              <div className="space-y-2">
                <p className="text-white text-sm">→ Built MERN-based billing and booking systems with secure authentication and role-based access control.</p>
                <p className="text-white text-sm">→ Optimized backend API and database performance achieving 30% faster response time and improved API scalability.</p>
              </div>
            </div>
          </div>

          {/* Images Section - Below text content */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/innomatics-1.jpg" alt="Innomatics" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/innomatics-2.jpg" alt="Innomatics" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/experience/innomatics-1.jpg" alt="Innomatics" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}