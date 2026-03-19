import { useAnimatedNumber } from "../hooks/useAnimatedNumber";

function EducationSection({ education, certifications, gpaValue, onGpaChange }) {
  const animatedGpa = useAnimatedNumber(education.scoreValue, 2, 1200);
  const gpaProgress = (Math.min(gpaValue, education.scoreMax) / education.scoreMax) * 100;

  return (
    <section id="education" className="split-section">
      <article className="panel timeline-panel">
        <p className="section-kicker">Education</p>
        <h2>{education.school}</h2>
        <div className="timeline-entry">
          <span className="timeline-line" />
          <div>
            <h3>{education.degree}</h3>
            <p>{education.duration}</p>
            <strong>
              {education.scoreLabel}: {animatedGpa.toFixed(2)} / {education.scoreMax}
            </strong>
            <div className="gpa-meter">
              <label htmlFor="gpa-slider">Interactive GPA View</label>
              <input
                id="gpa-slider"
                type="range"
                min="0"
                max={education.scoreMax}
                step="0.01"
                value={gpaValue}
                onChange={(event) => onGpaChange(Number(event.target.value))}
              />
              <div className="gpa-meter-values">
                <span>0.00</span>
                <span>
                  {gpaValue.toFixed(2)} / {education.scoreMax}
                </span>
              </div>
              <div className="gpa-track" aria-hidden="true">
                <span className="gpa-fill" style={{ width: `${gpaProgress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="panel awards-panel">
        <p className="section-kicker">Certifications & Awards</p>
        <h2>Validated learning with strong academic consistency.</h2>
        <ul className="award-list">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default EducationSection;
