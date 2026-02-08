type NavbarProps = {
  setPage: (page: "home" | "login" | "register") => void;
};
const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <nav className="navbar">

      <div className="left-side">
        <h2>Bookswap</h2>

        <div className="dock">
          <button onClick={() => setPage("home")}>
            {/* HOME SVG */}
            <svg viewBox="0 0 24 24" className="icon">
              <polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="dock-label">Home</span>
          </button>

          <button>
            {/* INBOX SVG */}
            <svg viewBox="0 0 24 24" className="icon">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="dock-label">Inbox</span>
          </button>

          <button>
            {/* SETTINGS SVG */}
            <svg viewBox="0 0 24 24" className="icon">
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="dock-label">Settings</span>
          </button>
        </div>
      </div>

      {/* SEARCH -> EXTREMA DREAPTA */}
      <div className="right-side">
  <div className="auth-buttons">
    <button className="login-btn" onClick={() => setPage("login")}>
      Login
    </button>

    <button className="register-btn" onClick={() => setPage("register")}>
      Sign Up
    </button>
  </div>

  <input
    type="text"
    placeholder="Caută cărți..."
    className="input"
  />
</div>

    </nav>
  );
};

export default Navbar;