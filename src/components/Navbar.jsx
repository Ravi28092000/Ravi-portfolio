import DarkModeToggle from './DarkModeToggle';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img 
        src="/RaviKiran_PassportPhoto.jpg" 
        alt="Ravi Kiran" 
        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #6d5dfc33' }}
      />
      <h1 style={{ margin: 0 }}>Ravi Kiran</h1>
    </div>

    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="nav-contact">
      <a href="mailto:rkr393092@gmail.com">📧 Email</a>
  <a href="https://github.com/Ravi28092000" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
  <a href="https://www.linkedin.com/in/ravi-kiran-35a7171ba/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
    </div>

    <div className="nav-right">
      <DarkModeToggle />
    </div>
  </nav>
);

export default Navbar;

