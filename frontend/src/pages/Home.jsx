import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import { personalInfo, companies } from '../data/mock';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Professional business collaboration"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="body-large" style={{ color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '40ch' }}>
            {personalInfo.tagline}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <Button className="btn-primary">Get In Touch</Button>
            </Link>
            <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary">
                <Linkedin style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                LinkedIn Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="heading-4" style={{ marginBottom: '32px', color: 'var(--text-primary)' }}>
              Who I Am
            </h2>
            <p className="body-medium" style={{ marginBottom: '24px' }}>
              {personalInfo.bio.intro}
            </p>
            <p className="body-medium" style={{ marginBottom: '24px' }}>
              {personalInfo.bio.career}
            </p>
            <p className="body-medium">
              {personalInfo.bio.current}
            </p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-section">
        <div className="container">
          {/* Banner showcasing services */}
          <div className="companies-banner">
            <div className="companies-banner-grid">
              <div className="banner-image-item">
                <img src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Cashless Payment Technology" />
                <div className="banner-overlay">
                  <span className="banner-label">Cashless Payments</span>
                </div>
              </div>
              <div className="banner-image-item">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Event & Festival Management" />
                <div className="banner-overlay">
                  <span className="banner-label">Event Management</span>
                </div>
              </div>
              <div className="banner-image-item">
                <img src="https://images.unsplash.com/photo-1760037028485-d00dd2b8f6f0?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Sports Marketing" />
                <div className="banner-overlay">
                  <span className="banner-label">Sports Marketing</span>
                </div>
              </div>
              <div className="banner-image-item">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Fan Engagement Technology" />
                <div className="banner-overlay">
                  <span className="banner-label">Fan Engagement</span>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="heading-4" style={{ marginBottom: '48px', marginTop: '64px', textAlign: 'center', color: 'var(--text-primary)' }}>
            Companies I Work With
          </h2>
          <div className="pixel-pushers-grid">
            {companies.map((company) => (
              <Link 
                to={`/company/${company.id}`} 
                key={company.id}
                className="company-card"
              >
                <div className="company-card-image">
                  <img 
                    src={company.image} 
                    alt={company.name}
                  />
                  <div className="company-card-overlay"></div>
                </div>
                <div className="company-card-content">
                  <h3 className="heading-5" style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {company.name}
                  </h3>
                  <p className="caption" style={{ marginBottom: '16px' }}>
                    {company.tagline}
                  </p>
                  <p className="body-small" style={{ marginBottom: '20px' }}>
                    {company.description}
                  </p>
                  <div className="company-card-link">
                    <span className="link-text">Learn More</span>
                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-4" style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
              Let's Connect
            </h2>
            <p className="body-medium" style={{ marginBottom: '32px', maxWidth: '60ch' }}>
              Interested in learning more about how these innovative companies can help your business grow? 
              I'd love to discuss opportunities and explore how we can work together.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
