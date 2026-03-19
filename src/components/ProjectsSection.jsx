function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading projects-heading">
        <p className="section-kicker">Projects</p>
        <h2>Projects I have built across machine learning, AI, and full-stack product workflows.</h2>
        <p className="projects-intro">
          These projects reflect how I approach engineering problems: understand the use
          case, build a clean implementation, and make the final product practical for
          real users rather than just technically complete.
        </p>
      </div>

      <div className="projects-story panel">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-entry project-entry-${project.accent}`}
          >
            <div className="project-entry-meta">
              <span className="project-entry-number">0{index + 1}</span>
              <div className="project-entry-stack">
                {project.stack.join(" • ")}
              </div>
            </div>

            <div className="project-entry-body">
              <h3>{project.title}</h3>
              <p className="project-entry-copy">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
