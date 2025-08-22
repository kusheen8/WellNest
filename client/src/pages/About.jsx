import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import wellness from '../utils/Images/wellness.png';

const leafStyles = `
  @keyframes fall {
    0% { transform: translateY(-10%) rotate(0deg); opacity: 0; }
    30% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }

  .leaf {
    position: absolute;
    top: -40px;
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%232e7d32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.004 3.44c-3.193-.66-6.98.357-9.53 2.907C5.19 8.63 4.173 12.417 4.833 15.61a10.44 10.44 0 0 0 2.627 5.07c.276.276.678.398 1.07.322.38-.07.712-.31.9-.656l1.678-3.108c.254-.472.18-1.057-.184-1.446l-1.39-1.462a7.493 7.493 0 0 1 5.845-2.04c.54.048 1.08-.17 1.427-.575l2.492-2.917a1.145 1.145 0 0 0-.094-1.606 10.44 10.44 0 0 0-2.52-1.324Zm.04 3.725-1.656 1.94a9.474 9.474 0 0 0-7.214 2.484c-.078.075-.15.157-.22.24a9.444 9.444 0 0 1 1.637-5.834c1.97-2.083 5.034-3.042 7.453-2.67.604.096 1.18.27 1.726.513a9.47 9.47 0 0 1 1.274.672l-2 .656Z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    animation: fall 12s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  .leaf:nth-child(2) { left: 10%; animation-delay: 1s; }
  .leaf:nth-child(3) { left: 25%; animation-delay: 2.5s; }
  .leaf:nth-child(4) { left: 40%; animation-delay: 4s; }
  .leaf:nth-child(5) { left: 60%; animation-delay: 5.5s; }
  .leaf:nth-child(6) { left: 75%; animation-delay: 6.5s; }
  .leaf:nth-child(7) { left: 90%; animation-delay: 8s; }
`;

const About = () => {
  const featuresRef = useRef(null);
  const [scrollTarget, setScrollTarget] = useState('down');

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollTarget(scrollY > 100 ? 'up' : 'down');
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const scrollTo = () => {
  if (scrollTarget === 'down') {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};


  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff 0%, #e0f2f1 25%, #c8e6c9 100%)',
        fontFamily: "'Segoe UI', sans-serif",
        padding: '60px 20px',
        boxSizing: 'border-box',
      }}
    >
      <style>{leafStyles}</style>

      {/* Falling Leaves */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className="leaf" />
        ))}
      </div>

      {/* Welcome Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{
          textAlign: 'center',
          fontSize: '32px',
          color: '#2e7d32',
          fontWeight: 700,
          marginBottom: '40px',
          zIndex: 1,
          position: 'relative'
        }}
      >
        Welcome to <span style={{ color: '#1b5e20' }}>WellNest</span>
      </motion.h1>

      {/* Centered Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto 50px',
          position: 'relative',
          zIndex: 1,
          gap: '24px',
          padding: '0 10px'
        }}
      >
        <motion.img
          src={wellness}
          alt="WellNest"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            width: '100%',
            maxWidth: '260px',
            borderRadius: '12px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
          }}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            background: 'rgba(255,255,255,0.98)',
            padding: '18px 22px',
            borderRadius: '12px',
            maxWidth: '360px',
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#2e7d32',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            textAlign: 'center',
            border: '1px solid #c8e6c9',
          }}
        >
          <p style={{ margin: 0 }}>
            <strong style={{ color: '#1b5e20' }}>WellNest</strong> helps you log, track, and stay focused on your fitness. Every move matters — we’re here to keep you moving forward.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          textAlign: 'center',
          fontSize: '26px',
          color: '#2e7d32',
          marginTop: '30px',
          marginBottom: '20px',
        }}
      >
        Track Your <span style={{ fontWeight: 'bold' }}>Workouts</span>
      </motion.h2>

      <div
        ref={featuresRef}
        style={{
          display: 'grid',
          gap: '20px',
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 10px',
          zIndex: 1,
          position: 'relative',
        }}
      >
        {[
          {
            title: "Daily Exercise Log",
            text: "Easily record your workouts, reps, and sets in just a few taps."
          },
          {
            title: "Progress Monitoring",
            text: "Track your strength and endurance evolution with clear visuals."
          },
          {
            title: "Goal Tracking",
            text: "Set personal milestones and let your wins keep you going."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.2 }}
            whileHover={{ scale: 1.02 }}
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
              border: '1px solid #c8e6c9',
              textAlign: 'center',
              color: '#333',
            }}
          >
            <h4 style={{ color: '#2e7d32', marginBottom: '10px' }}>{item.title}</h4>
            <p style={{ margin: 0 }}>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Up/Down Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={scrollTo}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 10,
          background: '#2e7d32',
          color: '#fff',
          padding: '12px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        {scrollTarget === 'down' ? <FaChevronDown size={20} /> : <FaChevronUp size={20} />}
      </motion.div>
    </div>
  );
};

export default About;
