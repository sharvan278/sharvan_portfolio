export default function ClubActivities() {
  const activities = [
    {
      role: "Competitive Programming Lead",
      organization: "Google Developer Groups On Campus, CVRCE",
      duration: "October 2024 - October 2025",
      description: "Organized an 8-week series on Data Structures and Algorithms (DSA), spearheaded coding competitions, and fostered algorithmic thinking among students.",
      icon: "GDG"
    },
    {
      role: "Tech Lead",
      organization: "Literary and Debate Club, CVRCE",
      duration: "February 2025 - Present",
      description: "Developed a dynamic web platform for the club, enabling students to showcase talents, access resources, and stay updated on events.",
      icon: "LD"
    },
    {
      role: "Tech S&D Team Lead",
      organization: "Cybernauts",
      duration: "August 2024 - Present",
      description: "Involved in the tech and executive team of Cybernauts, a technical club, including conducting technical events, ideathons, poster presentations, and hackathons.",
      icon: "C"
    }
  ];

  return (
    <section id="club-activities" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Pacifico, cursive', color: '#64FFDA'}}>
          College Club Activities
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>
        
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-8 items-start relative">
            {/* Timeline marker - Circular icon */}
            <div className="flex-shrink-0 relative z-10 -ml-8">
              <div className="w-16 h-16 bg-white rounded-full border-2 border-[#1A2B4C] flex items-center justify-center">
                <div className="text-xs font-bold text-[#1A2B4C]">{activity.icon}</div>
              </div>
            </div>

            {/* Content box */}
            <div className="flex-1 bg-[#1A365D] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">{activity.role}</h3>
              <p className="text-white mb-1">{activity.organization}</p>
              <p className="text-white text-sm mb-4">{activity.duration}</p>
              <p className="text-white text-sm leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}