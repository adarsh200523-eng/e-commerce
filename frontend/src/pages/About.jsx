import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px' }}>
      {/* About Adarsh Section */}
      <div style={containerStyle}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Adarsh</h2>
        <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Founder & Developer</h3>

        <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 20px auto' }}>
          Hi! I'm Adarsh, a passionate MERN stack developer dedicated to creating amazing e-commerce experiences. With expertise in MongoDB, Express.js, React, and Node.js, I build scalable and performant web applications that solve real-world problems.
        </p>

        <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 30px auto' }}>
          I believe in clean code, user-centric design, and continuous learning. When I'm not coding, I'm exploring new technologies and sharing knowledge with the community. Let's build something amazing together!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', color: '#3b82f6' }}>💼 LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(148, 163, 184, 0.2)', borderColor: '#94a3b8', color: '#94a3b8' }}>🐙 GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={socialBtnStyle}>✖️ Twitter</a>
        </div>
      </div>

      {/* About ShopNest Section */}
      <div style={{ ...containerStyle, marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#fff' }}>About ShopNest</h2>

        <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 20px auto' }}>
          <strong style={{ color: '#f97316' }}>ShopNest</strong> is a modern, full-featured e-commerce platform built with cutting-edge MERN stack technology. We're committed to providing the best online shopping experience with a seamless interface, secure payments, and reliable service.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px', maxWidth: '700px', margin: '30px auto' }}>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>🛍️ Wide Selection</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Browse thousands of products across multiple categories, all in one place.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>💳 Secure Payments</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Shop with confidence using Razorpay's secure payment gateway.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>⚡ Fast & Reliable</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Experience lightning-fast performance and 99.9% uptime.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>👥 Community First</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Join our growing community of satisfied customers and sellers.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>📱 Mobile Ready</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Shop anytime, anywhere on any device with our responsive design.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
            <h4 style={{ color: '#f97316', marginBottom: '10px' }}>📞 Support Team</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Get help whenever you need it with our dedicated support team.</p>
          </div>
        </div>

        <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 20px auto', fontStyle: 'italic' }}>
          Thank you for being part of the ShopNest family. We're constantly innovating to make your shopping experience better!
        </p>
      </div>
    </div>
  );
};

export default About;
