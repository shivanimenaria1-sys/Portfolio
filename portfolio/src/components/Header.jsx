function Header({ navigation, profile, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <span className="brand-mark">SM</span>
        <span className="brand-copy">
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </span>
      </a>

      <nav className="nav">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label="Toggle dark theme"
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
