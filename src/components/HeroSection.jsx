import StatCard from "./StatCard";

function HeroSection({
  profile,
  focusIndex,
  heroGlow,
  onHeroPointerMove,
  onHeroPointerReset,
}) {
  return (
    <section
      className="hero panel"
      onMouseMove={onHeroPointerMove}
      onMouseLeave={onHeroPointerReset}
      style={{
        "--hero-x": `${heroGlow.x}%`,
        "--hero-y": `${heroGlow.y}%`,
        "--hero-tilt-x": `${heroGlow.tiltX}deg`,
        "--hero-tilt-y": `${heroGlow.tiltY}deg`,
      }}
    >
      <div className="hero-spotlight" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-summary">{profile.summary}</p>

        <div className="focus-ticker" aria-live="polite">
          <span className="focus-ticker-label">Currently shaping</span>
          <strong>{profile.focusAreas[focusIndex]}</strong>
        </div>

        <div className="hero-badges">
          {profile.focusAreas.map((area) => (
            <span key={area} className="hero-badge">
              {area}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href={profile.resumePath} download>
            Download Resume
          </a>
          <a
            className="button button-secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button-secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero-aside">
        <div className="signal-card">
          <p className="signal-label">Focused On</p>
          <div className="signal-grid">
            {profile.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="stat-grid">
          {profile.heroStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </aside>
    </section>
  );
}

export default HeroSection;
