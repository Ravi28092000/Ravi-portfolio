


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUserTie, FaUsers, FaBullhorn, FaRegClock, FaGraduationCap, FaPuzzlePiece, FaProjectDiagram, FaDatabase, FaChartBar, FaRocket, FaUserFriends } from 'react-icons/fa';

const skills = {
  Languages: [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C', level: 75 },
    { name: 'C++', level: 80 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 92 },
  ],
  Frameworks: [
    { name: 'React.js', level: 85 },
  ],
  Tools: [
    { name: 'MySQL', level: 80 },
    { name: 'Tableau', level: 70 },
    { name: 'R', level: 65 },
    { name: 'Spark', level: 60 },
    { name: 'Git', level: 90 },
    { name: 'Google Colab', level: 75 },
  ],
  SoftSkills: [
    { name: 'Leadership', icon: <FaUserTie /> },
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Public Speaking', icon: <FaBullhorn /> },
    { name: 'Time Management', icon: <FaRegClock /> },
  ],
};

const colors = ['#6d5dfc', '#46caff', '#ff6ec4', '#ffd86f', '#00b894', '#fdcb6e'];

const SkillCircle = ({ name, level, color }) => {
  // Detect dark mode from body class
  const isDark = typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  return (
    <div style={{ width: 90, margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgressbar
        value={level}
        text={`${level}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: isDark ? '#f3f3f3' : '#23243a',
          trailColor: isDark ? '#23243a' : '#e0e7ff',
          backgroundColor: isDark ? '#23243a' : '#fff',
        })}
      />
      <span style={{ marginTop: 8, fontWeight: 500, fontSize: '1em', color: isDark ? '#f3f3f3' : '#23243a' }}>{name}</span>
    </div>
  );
};


const Skills = () => {
  const isDark = typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  const textColor = isDark ? '#f3f3f3' : '#23243a';
  // Only keep the infoBlocks version, remove any repeated plain text blocks (if present)
  // About Me: plain text version with padding
  return (
    <section id="skills" className="skills">
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
          marginBottom: '2.5rem',
        }}
      >
        Skills
      </h2>
      {/* Technical & Soft Skills Section */}
      {['Languages', 'Frameworks', 'Tools'].map((category, i) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              background: 'linear-gradient(90deg, #6d5dfc 40%, #46caff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontWeight: 900,
              fontSize: '2em',
              marginBottom: 12,
            }}
          >
            {category}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {skills[category].map((skill, idx) => (
              <SkillCircle
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={colors[(i + idx) % colors.length]}
              />
            ))}
          </div>
        </div>
      ))}
      <div>
        <h3
          style={{
            background: 'linear-gradient(90deg, #6d5dfc 40%, #46caff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontWeight: 900,
            fontSize: '2em',
            marginBottom: 12,
          }}
        >
          Soft Skills
        </h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          {skills.SoftSkills.map((skill, idx) => (
            <li
              key={skill.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(109,93,252,0.08)',
                borderRadius: 12,
                padding: '1rem 1.2rem',
                minWidth: 120,
                boxShadow: '0 2px 12px #6d5dfc11',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.07)';
                e.currentTarget.style.boxShadow = '0 6px 24px #6d5dfc33';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 12px #6d5dfc11';
              }}
            >
              <span style={{ fontSize: 32, color: '#6d5dfc', marginBottom: 8 }}>{skill.icon}</span>
              <span style={{ fontWeight: 500, fontSize: '1em', color: textColor, textAlign: 'center' }}>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

