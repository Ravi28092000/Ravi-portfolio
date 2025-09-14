
import { FaUniversity, FaCode, FaProjectDiagram, FaDatabase, FaTable, FaBolt, FaUsers } from 'react-icons/fa';
import { SiApachespark } from 'react-icons/si';
import { motion } from 'framer-motion';

const aboutPoints = [
  {
    icon: <FaUniversity />,
    title: 'Education',
    desc: 'B.Tech in Computer Science from Lovely Professional University',
    color: '#6d5dfc',
  },
  {
    icon: <FaCode />,
    title: 'Problem Solver',
    desc: 'I thrive on solving problems and coding challenges',
    color: '#46caff',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Scalable Projects',
    desc: 'Love building scalable, real-world projects',
    color: '#ff6ec4',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Science Tools',
    desc: 'MySQL',
    color: '#00b894',
  },
  {
    icon: <FaTable />,
    title: 'Data Visualization',
    desc: 'Tableau',
    color: '#ffd86f',
  },
  {
    icon: <SiApachespark />,
    title: 'Big Data',
    desc: 'Spark',
    color: '#fdcb6e',
  },
  {
    icon: <FaBolt />,
    title: 'Hackathons',
    desc: 'Multiple hackathons and coding competitions',
    color: '#ff6ec4',
  },
  {
    icon: <FaUsers />,
    title: 'Team & Solo',
    desc: 'Skilled in both solo and team environments',
    color: '#46caff',
  },
];

const About = () => (
  <section id="about" className="about">
    <h2
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
      About Me
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
      {aboutPoints.map((point, i) => (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ scale: 1.07, boxShadow: `0 6px 24px ${point.color}55` }}
          style={{
            background: 'rgba(109,93,252,0.08)',
            borderRadius: 16,
            padding: '1.2rem 1.5rem',
            minWidth: 220,
            maxWidth: 270,
            boxShadow: '0 2px 12px #6d5dfc11',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#23243a',
            fontWeight: 500,
            cursor: 'pointer',
            border: `2px solid ${point.color}22`,
          }}
        >
          <span style={{ fontSize: 38, color: point.color, marginBottom: 10 }}>{point.icon}</span>
          <span style={{ fontWeight: 700, fontSize: '1.1em', marginBottom: 6 }}>{point.title}</span>
          <span style={{ fontSize: '0.98em', color: '#6d5dfc' }}>{point.desc}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default About;
