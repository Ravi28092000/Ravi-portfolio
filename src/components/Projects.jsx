import { FaBrain, FaMusic, FaCloudSun, FaComments, FaShoppingCart } from 'react-icons/fa';

const projects = [
  {
    title: 'IPC Predictor',
    tech: ['Python', 'NLP', 'Scikit-learn'],
    description: 'ML model predicting IPC sections with 92% accuracy, reducing legal research time by 65%.'
  },
  {
    title: 'React Music Player',
    tech: ['React.js', 'Spotify API', 'Redis'],
    description: 'Dynamic playlists and audio analytics with 40% latency reduction.'
  },
  {
    title: 'Weather Forecast App',
    tech: ['JavaScript', 'OpenWeather API'],
    description: 'Location-based weather app handling 5K+ daily requests with 99% uptime.'
  },
  {
    title: 'Chatting App',
    tech: ['React.js'],
    description: 'Real-time chat app built in a team of 3 during Programming Pathshala.'
  },
  {
    title: 'Ecommerce website',
    tech:['React.js', 'Javascript', 'HTML', 'CSS'],
    description: 'Developed a full-featured ecommerce website with user authentication, product listings, and a shopping cart using React.js, enhancing user experience and engagement.'
  }
];

const Projects = () => (
  <section id="projects" className="projects">
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
      Projects
    </h2>
    {projects.map((proj, idx) => (
      <div key={idx} className="project-card">
        <h3>
          {proj.title === 'IPC Predictor' && (
            <FaBrain style={{ color: '#6d5dfc', marginRight: 8, verticalAlign: 'middle' }} />
          )}
          {proj.title === 'React Music Player' && (
            <FaMusic style={{ color: '#46caff', marginRight: 8, verticalAlign: 'middle' }} />
          )}
          {proj.title === 'Weather Forecast App' && (
            <FaCloudSun style={{ color: '#fbbf24', marginRight: 8, verticalAlign: 'middle' }} />
          )}
          {proj.title === 'Chatting App' && (
            <FaComments style={{ color: '#6ee7b7', marginRight: 8, verticalAlign: 'middle' }} />
          )}
          {proj.title === 'Ecommerce website' && (
            <FaShoppingCart style={{ color: '#ff7eb3', marginRight: 8, verticalAlign: 'middle' }} />
          )}
          {proj.title}
        </h3>
        <p>{proj.description}</p>
        <p><strong>Tech Stack:</strong> {proj.tech.join(', ')}</p>
      </div>
    ))}
  </section>
);

export default Projects;
