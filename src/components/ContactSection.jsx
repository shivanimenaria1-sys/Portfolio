import { useState } from "react";
import { Copy, Check } from "lucide-react";

function ContactSection({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="panel contact-panel">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Available for internships, collaborations, and portfolio conversations.</h2>
      </div>
      <ul className="contact-list contact-grid">
        <li style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Email</span>
            <button
              onClick={handleCopyEmail}
              className="copy-button"
              title="Copy email"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)" }}
            >
              {copied ? <Check size={16} color="var(--teal)" /> : <Copy size={16} />}
            </button>
          </div>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {copied && <span className="copy-feedback">Copied!</span>}
        </li>
        <li>
          <span>Phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            shivani-menaria-681a13346
          </a>
        </li>
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            Open GitHub Profile
          </a>
        </li>
        <li>
          <span>Resume</span>
          <a href={profile.resumePath} download>
            Download PDF Resume
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactSection;
