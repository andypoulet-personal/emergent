import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mock';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">{personalInfo.name}</h3>
            <p className="footer-text">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Connect</h4>
            <div className="footer-social">
              <a 
                href={personalInfo.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin style={{ width: '24px', height: '24px' }} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
