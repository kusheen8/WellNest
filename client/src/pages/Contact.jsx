import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../utils/Images/contact.png'; // Ensure this path is correct

const Contact = () => {
  return (
    <div style={{
      padding: '60px 20px',
      backgroundColor: '#f7fdf9',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#2e7d32',
          borderBottom: '3px solid #a5d6a7',
          paddingBottom: '12px',
          maxWidth: '400px',
          margin: 'auto',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        CONTACT US
      </motion.div>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '40px',
          maxWidth: '1000px',
          margin: '60px auto',
          background: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }} // Faster
          style={{ flex: '1 1 300px', textAlign: 'center' }}
        >
          <img src={contactImage} alt="Contact" style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '10px',
          }} />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }} // Faster
          style={{ flex: '2 1 400px', color: '#555', fontSize: '16px' }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', color: '#388e3c' }}>Our Office</h3>
            <p style={{ lineHeight: '1.6' }}>
              123 Wellness Street<br />
              Bengaluru, Karnataka, India
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Tel: +91 98765 432XX<br />
              Email: <a href="mailto:contact@wellnest.com" style={{ color: '#2e7d32', textDecoration: 'none' }}>contact@wellnest.com</a>
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', color: '#388e3c' }}>Careers at WellNest</h3>
            <p style={{ marginBottom: '16px' }}>
              Learn more about our teams and job openings.
            </p>
            <motion.button
              whileHover={{
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              style={{
                border: '2px solid #2e7d32',
                padding: '10px 24px',
                fontSize: '15px',
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                color: '#2e7d32',
                borderRadius: '6px',
                fontWeight: '500',
              }}
            >
              Explore Us
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

