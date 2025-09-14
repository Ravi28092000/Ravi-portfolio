
import { FaJava, FaPython, FaReact, FaBook } from 'react-icons/fa';
import { SiTableau, SiR, SiMysql } from 'react-icons/si';

const experienceData = [
  {
    title: 'Intern @ PlanetSpark',
    date: 'Apr–Jun 2025',
    description: 'Java, Python, React.js, MySQL, Tableau',
    icons: [<FaJava />, <FaPython />, <FaReact />, <SiMysql />, <SiTableau />],
  },
];

const certs = [
  { name: 'Tableau (Coursera)', icon: <SiTableau /> },
  { name: 'R Programming (Coursera)', icon: <SiR /> },
  { name: 'Java (Great Learning)', icon: <FaJava /> },
  { name: 'DSA self paced (Geeksforgeeks)', icon: <FaBook /> },
  { name: 'Full stack development bootcamp (Geeksforgeeks)', icon: <FaBook /> },
];

const Experience = () => (
  <section id="experience" className="experience">
    <h2 data-aos="fade-right"
      style={{
        background: 'linear-gradient(90deg, #6d5dfc 40%, #46caff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontWeight: 900,
        fontSize: '2.2em',
        margin: 0,
        marginBottom: 18,
      }}
    >
      Experience & Certifications
    </h2>
    <div className="exp-cards">
      {experienceData.map((exp, i) => (
        <div className="exp-card glass-card" data-aos="zoom-in-up" data-aos-delay={i * 100} key={exp.title}>
          <div className="exp-icons">{exp.icons.map((icon, idx) => <span key={idx}>{icon}</span>)}</div>
          <h3>{exp.title}</h3>
          <span className="exp-date">{exp.date}</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
    <div className="cert-cards">
      <h3 data-aos="fade-left"
        style={{
          background: 'linear-gradient(90deg, #6d5dfc 40%, #46caff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontWeight: 900,
          fontSize: '2em',
          margin: 0,
          marginBottom: 12,
        }}
      >
        Certifications
      </h3>
      <div className="cert-list">
        {certs.map((cert, i) => (
          <div className="cert-card glass-card" data-aos="flip-left" data-aos-delay={i * 100} key={cert.name}>
            <span className="cert-icon">{cert.icon}</span>
            <span>{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
