
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';
import ResumeDownload from './ResumeDownload';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';


const contactLinks = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91-8651607608',
    href: 'tel:+918651607608',
    color: '#6d5dfc',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'rkr393092@gmail.com',
    href: 'mailto:rkr393092@gmail.com',
    color: '#6d5dfc',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Ravi28092000',
    href: 'https://github.com/Ravi28092000',
    color: '#23243a',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ravi-kiran-35a7171ba',
    href: 'https://www.linkedin.com/in/ravi-kiran-35a7171ba/',
    color: '#46caff',
  },
];

const Contact = () => (
  <section id="contact" className="contact">
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
      Contact Me
    </h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      style={{ fontSize: '1.08em', marginBottom: 0 }}
      className="contact-intro"
    >
      If you'd like to{' '}
      <motion.span
        whileHover={{ color: '#6d5dfc', background: 'rgba(109,93,252,0.08)', borderRadius: 8, padding: '0 4px' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ fontWeight: 600, cursor: 'pointer' }}
      >collaborate</motion.span>,{' '}
      <motion.span
        whileHover={{ color: '#46caff', background: 'rgba(70,202,255,0.08)', borderRadius: 8, padding: '0 4px' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ fontWeight: 600, cursor: 'pointer' }}
      >discuss a project</motion.span>, or just{' '}
      <motion.span
        whileHover={{ color: '#ff7eb3', background: 'rgba(255,126,179,0.08)', borderRadius: 8, padding: '0 4px' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ fontWeight: 600, cursor: 'pointer' }}
      >say hello</motion.span>
      — I'm always open to new opportunities.
    </motion.p>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', margin: '2rem 0' }}>
      {contactLinks.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, boxShadow: '0 6px 24px #6d5dfc33' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(109,93,252,0.08)',
            borderRadius: 16,
            padding: '1.2rem 2rem',
            minWidth: 180,
            boxShadow: '0 2px 12px #6d5dfc11',
            textDecoration: 'none',
            color: link.color,
            fontWeight: 600,
            fontSize: '1.1em',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: 38, marginBottom: 10 }}>{link.icon}</span>
          <span style={{ color: '#23243a', fontWeight: 700 }}>{link.label}</span>
          <span style={{ color: '#6d5dfc', fontSize: '0.98em', marginTop: 4 }}>{link.value}</span>
        </motion.a>
      ))}
    </div>

    <ResumeDownload />

    {/* 🔽 Enhanced QR Codes Section */}
    <motion.div
      className="qr-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="qr-header">
        <span className="qr-icon">📱</span>
        <h3>Scan to connect with me</h3>
      </div>
      <div className="qr-grid">
        <motion.div
          className="qr-item"
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #6d5dfc44' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="qr-label">
            <span className="qr-label-icon">📄</span>
            <span>Resume</span>
          </div>
          <QRCode value="/Ravi_Kiran_Resume.pdf" size={128} bgColor="transparent" fgColor="#6d5dfc" />
        </motion.div>
        <motion.div
          className="qr-item"
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #23243a44' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="qr-label">
            <span className="qr-label-icon">🐙</span>
            <span>GitHub</span>
          </div>
          <QRCode value="https://github.com/Ravi28092000" size={128} bgColor="transparent" fgColor="#23243a" />
        </motion.div>
        <motion.div
          className="qr-item"
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #46caff44' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="qr-label">
            <span className="qr-label-icon">🔗</span>
            <span>LinkedIn</span>
          </div>
          <QRCode value="https://www.linkedin.com/in/ravi-kiran-35a7171ba/" size={128} bgColor="transparent" fgColor="#46caff" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Contact;


