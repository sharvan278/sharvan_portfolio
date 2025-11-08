export default function Footer() {
  return (
    <section className="py-16 text-center text-gray-300 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-6 mb-4 text-sm">
          <a href="https://www.linkedin.com/in/sharvan-naraparaju/" target="_blank" className="hover:text-cyan-300 transition">LinkedIn</a>
          <a href="https://github.com/sharvan278" target="_blank" className="hover:text-cyan-300 transition">GitHub</a>
          <a href="mailto:naraparajusharvan01@gmail.com" className="hover:text-cyan-300 transition">Email</a>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} Naraparaju Sharvan. All Rights Reserved.</p>
      </div>
    </section>
  );
}