import React, { useState, useEffect } from 'react';
import Login from './components/Login';

// Firebase configuration - USING EXACT SAME CONFIG AS WORKING PROJECT
const firebaseConfig = {
  apiKey: "AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",
  authDomain: "digitalliberia-notification.firebaseapp.com",
  projectId: "digitalliberia-notification",
  storageBucket: "digitalliberia-notification.appspot.com",
  messagingSenderId: "537791418352",
  appId: "1:537791418352:web:378b48439b2c9bed6dd735"
};

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
    console.log('Security system login successful:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('securityUser');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            <span>Digital Liberia Security</span>
          </div>
          
          {/* Liberia Flag and Login Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Liberia Flag */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ 
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>
                🇱🇷
              </div>
              <span style={{ 
                color: 'var(--white)', 
                fontSize: '0.9rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Republic of Liberia
              </span>
            </div>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ 
                  color: 'var(--white)', 
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Welcome, Officer {user.profile?.firstName} {user.profile?.lastName}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-glass"
                  style={{ 
                    padding: '0.7rem 1.2rem', 
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="btn btn-security"
                style={{ 
                  padding: '0.7rem 1.5rem', 
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                }}
              >
                🛡️ Security Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {!user ? (
          <div className="hero-section">
            <div className="hero-text">
              <h1>
                National Security
                <br />
                <span style={{ 
                  background: 'var(--security-gradient)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text' 
                }}>
                  Command System
                </span>
              </h1>
              <p>
                Advanced security management platform for Liberian law enforcement, 
                providing real-time threat assessment and coordinated response capabilities.
              </p>

              {/* Enhanced Security Features Grid */}
              <div className="security-features-grid">
                {/* Threat Assessment Card */}
                <div className="security-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="security-feature-icon" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                  }}>📊</div>
                  <div className="security-feature-content">
                    <h4>Threat Assessment</h4>
                    <p>Real-time threat analysis and risk evaluation for national security operations</p>
                  </div>
                </div>

                {/* Surveillance Management Card */}
                <div className="security-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1))',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="security-feature-icon" style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                  }}>📡</div>
                  <div className="security-feature-content">
                    <h4>Surveillance Management</h4>
                    <p>Centralized monitoring and surveillance system coordination</p>
                  </div>
                </div>

                {/* Emergency Response Card */}
                <div className="security-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1))',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="security-feature-icon" style={{
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    boxShadow: '0 8px 25px rgba(239, 68, 68, 0.4)'
                  }}>🚨</div>
                  <div className="security-feature-content">
                    <h4>Emergency Response</h4>
                    <p>Rapid deployment and coordination for emergency security situations</p>
                  </div>
                </div>

                {/* Intelligence Database Card */}
                <div className="security-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.6s'
                }}>
                  <div className="security-feature-icon" style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
                  }}>🔐</div>
                  <div className="security-feature-content">
                    <h4>Intelligence Database</h4>
                    <p>Secure access to classified intelligence and operational data</p>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="btn btn-security"
                >
                  🛡️ Access Security Portal
                </button>
                <button className="btn btn-emergency">
                  🚨 Emergency Alert
                </button>
                <button className="btn btn-intel">
                  📡 Intelligence Feed
                </button>
              </div>
            </div>

            <div className="hero-visual" style={{ position: 'relative' }}>
              <div 
                className="floating"
                style={{
                  background: 'var(--card-bg)',
                  padding: '3rem',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle background pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, 
                    rgba(59, 130, 246, 0.08) 0%, 
                    rgba(139, 92, 246, 0.08) 50%, 
                    rgba(16, 185, 129, 0.08) 100%)`,
                  zIndex: 0
                }}></div>
                
                {/* Security Shield */}
                <div 
                  style={{
                    fontSize: '6rem',
                    marginBottom: '2rem',
                    color: '#3b82f6',
                    filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4))',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                >
                  🛡️
                </div>
                <h3 style={{ 
                  color: '#3b82f6', 
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 2px 4px rgba(59, 130, 246, 0.2)'
                }}>
                  National Security First
                </h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Advanced security solutions protecting the Republic of Liberia
                </p>
                
                {/* Liberia Flag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 1
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🇱🇷</span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#3b82f6',
                    fontWeight: '600'
                  }}>
                    LIBERIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px',
            textAlign: 'center'
          }}>
            <div 
              style={{
                background: 'var(--card-bg)',
                padding: '4rem',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                marginBottom: '3rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.03) 0%, 
                  rgba(139, 92, 246, 0.03) 50%, 
                  rgba(16, 185, 129, 0.03) 100%)`,
                zIndex: 0
              }}></div>
              
              <div 
                style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  background: 'var(--security-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                🎉
              </div>
              <h1 style={{ 
                color: 'var(--text-dark)', 
                marginBottom: '1rem',
                fontSize: '2.5rem',
                fontWeight: '800',
                position: 'relative',
                zIndex: 1
              }}>
                Welcome to Security Portal
              </h1>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                Access advanced security tools and national protection systems
              </p>
              
              {/* Liberia Flag Welcome Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ fontSize: '1.5rem' }}>🇱🇷</span>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#3b82f6',
                  fontWeight: '600'
                }}>
                  Ministry of Security - Republic of Liberia
                </span>
              </div>
              
              {/* Enhanced Security Action Grid for Logged-in Users */}
              <div className="security-action-grid">
                {/* Threat Monitoring Card */}
                <div className="security-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="security-card-icon" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)'
                  }}>📡</div>
                  <h3 className="security-card-title">Threat Monitoring</h3>
                  <p className="security-card-description">
                    Real-time national threat level monitoring and alert systems
                  </p>
                  <button className="btn btn-security">
                    Monitor Threats
                  </button>
                </div>
                
                {/* Operations Management Card */}
                <div className="security-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1))',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="security-card-icon" style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                    boxShadow: '0 15px 30px rgba(139, 92, 246, 0.4)'
                  }}>⚡</div>
                  <h3 className="security-card-title">Operations</h3>
                  <p className="security-card-description">
                    Coordinate and manage active security operations nationwide
                  </p>
                  <button className="btn btn-intel">
                    Manage Operations
                  </button>
                </div>
                
                {/* Intelligence Dashboard Card */}
                <div className="security-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="security-card-icon" style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    boxShadow: '0 15px 30px rgba(16, 185, 129, 0.4)'
                  }}>🔍</div>
                  <h3 className="security-card-title">Intelligence</h3>
                  <p className="security-card-description">
                    Access classified intelligence reports and security briefings
                  </p>
                  <button className="btn btn-security">
                    View Intelligence
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <Login 
          onLoginSuccess={handleLoginSuccess}
          onBack={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;
