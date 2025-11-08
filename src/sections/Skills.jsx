
import { useState } from 'react';

export default function Skills() {
  // Classified to match your latest grouping (3 main cards with sub-groups)
  const programmingLanguages = [
    { icon: '🐍', label: 'Python', color: 'bg-blue', devicon: 'devicon-python-plain' },
    { icon: '☕', label: 'Java', color: 'bg-orange', devicon: 'devicon-java-plain' },
    { icon: 'C', label: 'C', color: 'bg-gray' },
    { icon: 'JS', label: 'JavaScript', color: 'bg-yellow', devicon: 'devicon-javascript-plain' },
    { icon: 'SQL', label: 'SQL', color: 'bg-purple' },
  ];

  const frameworksLibrariesSections = [
    {
      title: 'Machine Learning / AI',
      items: [
        { icon: 'TF', label: 'TensorFlow', color: 'bg-orange' },
        { icon: 'sk', label: 'Scikit-learn', color: 'bg-blue' },
        { icon: 'XG', label: 'XGBoost', color: 'bg-purple' },
        { icon: '⛓️', label: 'LangChain', color: 'bg-gray', img: '/images/logos/langchain.png' },
        { icon: 'LG', label: 'LangGraph', color: 'bg-cyan', img: '/images/logos/langgraph.png' },
        { icon: '🧠', label: 'ANN', color: 'bg-cyan' },
        { icon: '🖼️', label: 'CNN', color: 'bg-cyan' },
        { icon: '🧱', label: 'Feature Engineering', color: 'bg-purple' },
        { icon: '📏', label: 'Model Evaluation', color: 'bg-gray' },
        { icon: '✅', label: 'Feature Selection', color: 'bg-purple' },
        { icon: '💬', label: 'Prompt Engineering', color: 'bg-gray' },
        { icon: '🧠', label: 'Vector Stores', color: 'bg-blue' },
      ],
    },
    {
      title: 'Web / Backend',
      items: [
        { icon: '🍃', label: 'MongoDB', color: 'bg-green', devicon: 'devicon-mongodb-plain' },
        { icon: 'EX', label: 'Express', color: 'bg-gray' },
        { icon: '⚛️', label: 'React', color: 'bg-cyan' },
        { icon: '📗', label: 'Node.js', color: 'bg-green' },
        { icon: '⚡', label: 'FastAPI', color: 'bg-black' },
        { icon: '🔗', label: 'REST APIs', color: 'bg-blue' },
      ],
    },
  ];

  const toolsPlatformsSections = [
    {
      title: 'Cloud / DevOps',
      items: [
        { icon: 'AWS', label: 'AWS', color: 'bg-orange' },
        { icon: '🐳', label: 'Docker (Beginner)', color: 'bg-blue' },
      ],
    },
    {
      title: 'Data / Analytics',
      items: [
        { icon: '🐼', label: 'Pandas', color: 'bg-gray' },
        { icon: 'NP', label: 'NumPy', color: 'bg-blue' },
        { icon: '📊', label: 'Power BI', color: 'bg-yellow' },
        { icon: 'ST', label: 'Streamlit', color: 'bg-green' },
      ],
    },
    {
      title: 'Version Control',
      items: [
        { icon: 'git', label: 'Git', color: 'bg-orange', devicon: 'devicon-git-plain' },
      ],
    },
  ];

  const SkillIcon = ({ it }) => {
    const [imgFailed, setImgFailed] = useState(false);
    const canShowImg = !!it.img && !imgFailed;
    const hasDevicon = !!it.devicon;

    return (
      <div className={`skill-icon ${it.color}`}>
        {canShowImg ? (
          <img
            src={it.img}
            alt={`${it.label} logo`}
            onError={() => setImgFailed(true)}
          />
        ) : hasDevicon ? (
          <i className={it.devicon} aria-hidden="true" />
        ) : (
          it.icon
        )}
      </div>
    );
  };

  const renderGroup = (title, items) => (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <div className="skill-grid">
        {items.map((it) => (
          <div className="skill-item" key={`${title}-${it.label}`}>
            <SkillIcon it={it} />
            <span className="skill-label">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGroupedCard = (title, sections) => (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      {sections.map((section) => (
        <div key={`${title}-${section.title}`} className="mt-4">
          <h4 className="text-lg font-semibold mb-2 text-white-50">{section.title}</h4>
          <div className="skill-grid">
            {section.items.map((it) => (
              <div className="skill-item" key={`${title}-${section.title}-${it.label}`}>
                <SkillIcon it={it} />
                <span className="skill-label">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills">
      <div className="w-full">
        <div className="mb-16 text-center">
          <h2>Technical Skills</h2>
        </div>

        <div className="grid">
          {renderGroup('Programming Languages', programmingLanguages)}
          {renderGroupedCard('Frameworks / Libraries', frameworksLibrariesSections)}
          {renderGroupedCard('Tools / Platforms', toolsPlatformsSections)}
        </div>
      </div>
    </section>
  );
}
