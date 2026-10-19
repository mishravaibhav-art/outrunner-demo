const links = ['Dashboard', 'Workflows', 'Integrations', 'Settings']

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <span className="logo">{import.meta.env.VITE_APP_NAME || 'Flowboard'}</span>
        <nav className="nav-links">
          {links.map((link) => (
            <a key={link} href="#" className={link === 'Dashboard' ? 'nav-link active' : 'nav-link'}>
              {link}
            </a>
          ))}
        </nav>
        <button className="btn btn-primary">New workflow</button>
      </div>
    </header>
  )
}
