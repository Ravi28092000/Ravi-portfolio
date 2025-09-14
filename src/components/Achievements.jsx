
import { FaTrophy, FaCode, FaRocket } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy />, title: 'Hackathon participant', desc: 'Code-a-thon and others', aos: 'fade-up',
  },
  {
    icon: <FaRocket />, title: 'Projects deployed', desc: 'React, ML, and APIs', aos: 'fade-up',
  },
  {
    icon: <FaCode />, title: 'Consistent improvement', desc: 'via coding contests', aos: 'fade-up',
  },
];

const Achievements = () => (
  <section id="achievements" className="achievements">
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
      Achievements & Activities
    </h2>
    <div className="achieve-cards">
      {achievements.map((a, i) => (
        <div className="achieve-card glass-card" data-aos={a.aos} data-aos-delay={i * 100} key={a.title}>
          <span className="achieve-icon">{a.icon}</span>
          <div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
