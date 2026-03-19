function AboutSection({ profile, highlights }) {
  return (
    <section id="about" className="split-section">
      <article className="panel intro-panel">
        <p className="section-kicker">About Me</p>
        <h2>I like building products that look polished and behave clearly.</h2>
        <p className="about-copy">{profile.about}</p>
        <div className="about-points">
          {profile.aboutPoints.map((item) => (
            <div key={item} className="about-point">
              <span className="about-mark" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="panel intro-panel">
        <p className="section-kicker">Technical Highlights</p>
        <h2>Work that balances product thinking and engineering discipline.</h2>
        <div className="highlight-list">
          {highlights.map((item, index) => (
            <div key={item} className="highlight-card">
              <span className="highlight-index">0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default AboutSection;
