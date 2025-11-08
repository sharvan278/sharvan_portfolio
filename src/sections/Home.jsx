export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <p className="text-base mb-4 text-white">Welcome to my world</p>
      <h1 className="text-6xl font-bold mb-4" style={{fontFamily: 'Pacifico, cursive', color: '#87CEEB'}}>
        I'm Naraparaju Sharvan
      </h1>
      <p className="text-lg text-white mb-8">GEN AI & ML Engineer</p>
      <div className="flex gap-6">
        <a 
          href="https://drive.google.com/file/d/125CKq6R4QCX4P9L2hHKCuSbtQY9-BOcJ/view?usp=sharing" 
          target="_blank" 
          className="text-purple-400 underline font-medium hover:text-purple-300 transition-colors"
        >
          &lt;CV /&gt;
        </a>
        <a 
          href="#projects" 
          className="text-purple-400 underline font-medium hover:text-purple-300 transition-colors"
        >
          &lt;ProofOfWork /&gt;
        </a>
      </div>
    </section>
  );
}