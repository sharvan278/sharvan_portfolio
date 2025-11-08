export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen px-8 py-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AWS ML Certification */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☁️</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">AWS Academy Machine Learning Fundamentals</h3>
                <p className="text-sm text-gray-300">
                  Comprehensive certification covering AWS ML services, algorithms, and best practices for machine learning workflows in the cloud environment.
                </p>
              </div>
            </div>
          </article>

          {/* Oracle Certification */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗄️</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">Oracle PL/SQL Certification</h3>
                <p className="text-sm text-gray-300">
                  Professional certification demonstrating expertise in Oracle database programming, stored procedures, and advanced database management techniques.
                </p>
              </div>
            </div>
          </article>

          {/* MongoDB Certification */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍃</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">MongoDB Certification</h3>
                <p className="text-sm text-gray-300">
                  Database certification covering NoSQL database design, operations, optimization, and integration with modern web applications.
                </p>
              </div>
            </div>
          </article>

          {/* Academic Excellence */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">Academic Excellence - CGPA: 8.91/10</h3>
                <p className="text-sm text-gray-300">
                  Maintaining outstanding academic performance in B.Tech Data Science program with focus on ML, Big Data Analytics, and Cloud Computing.
                </p>
              </div>
            </div>
          </article>

          {/* Workshop Leadership */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👨‍🏫</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">Technical Workshop Conductor</h3>
                <p className="text-sm text-gray-300">
                  Conducted sessions on ML workflows, data pipelines, and GenAI tools for 40+ peers in AI/ML Club at CVR College.
                </p>
              </div>
            </div>
          </article>

          {/* Professional Development */}
          <article className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-cyan-300">Professional Internships</h3>
                <p className="text-sm text-gray-300">
                  Successfully completed internships at Model N and Innomatics Research Labs, working on GenAI, ML pipelines, and full-stack development.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}