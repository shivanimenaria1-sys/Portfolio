import {
  Code2,
  Database,
  Layout,
  Server,
  Settings,
  Terminal,
} from "lucide-react";

const ICON_MAP = {
  JS: Code2,
  UI: Layout,
  API: Server,
  DB: Database,
  DEV: Settings,
  CS: Terminal,
};

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="panel">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>A stack shaped around full-stack delivery and data-driven systems.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => {
          const Icon = ICON_MAP[group.symbol] || Code2;
          return (
            <article
              key={group.title}
              className="skill-card"
              style={{ "--skill-delay": `${index * 80}ms` }}
            >
              <div className="skill-heading">
                <span className="skill-symbol">
                  <Icon size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
