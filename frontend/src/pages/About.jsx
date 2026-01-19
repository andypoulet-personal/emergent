import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Users, TrendingUp, Award } from 'lucide-react';
import { personalInfo, recommendations } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="heading-2" style={{ color: 'var(--text-primary)', marginBottom: '16px', textAlign: 'center' }}>
            About Andy Poulet
          </h1>
          <p className="body-large" style={{ maxWidth: '70ch', margin: '0 auto', textAlign: 'center' }}>
            {personalInfo.about.headline}
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="about-summary">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-main-content">
              <h2 className="heading-4" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
                My Journey
              </h2>
              <p className="body-medium" style={{ marginBottom: '24px' }}>
                {personalInfo.about.summary}
              </p>
              <div className="philosophy-card">
                <h3 className="heading-5" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
                  My Philosophy
                </h3>
                <p className="body-medium" style={{ fontStyle: 'italic' }}>
                  "{personalInfo.about.philosophy}"
                </p>
              </div>
            </div>

            <div className="about-stats">
              <Card className="stat-card">
                <CardContent style={{ padding: '32px', textAlign: 'center' }}>
                  <Database style={{ width: '48px', height: '48px', color: 'var(--brand-primary)', margin: '0 auto 16px' }} />
                  <h3 className="heading-4" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>5,000+</h3>
                  <p className="body-small">Music Festivals Curated</p>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent style={{ padding: '32px', textAlign: 'center' }}>
                  <Users style={{ width: '48px', height: '48px', color: 'var(--brand-primary)', margin: '0 auto 16px' }} />
                  <h3 className="heading-4" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>25+</h3>
                  <p className="body-small">Countries Reached</p>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent style={{ padding: '32px', textAlign: 'center' }}>
                  <TrendingUp style={{ width: '48px', height: '48px', color: 'var(--brand-primary)', margin: '0 auto 16px' }} />
                  <h3 className="heading-4" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>25+</h3>
                  <p className="body-small">Years of Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          {personalInfo.about.expertise.map((area, index) => (
            <div key={index} className="expertise-area">
              <h2 className="heading-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
                {area.title}
              </h2>
              <p className="caption" style={{ marginBottom: '24px' }}>
                {area.subtitle}
              </p>
              <p className="body-medium" style={{ marginBottom: '32px' }}>
                {area.description}
              </p>
              
              <div className="expertise-highlights">
                {area.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <Award style={{ width: '24px', height: '24px', color: 'var(--brand-primary)', marginRight: '16px', flexShrink: 0 }} />
                    <p className="body-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <div className="container">
          <h2 className="heading-4" style={{ marginBottom: '48px', textAlign: 'center', color: 'var(--text-primary)' }}>
            Recommendations
          </h2>
          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <Card key={index} className="recommendation-card">
                <CardContent style={{ padding: '40px' }}>
                  <div className="recommendation-header">
                    <img 
                      src={rec.image} 
                      alt={rec.name}
                      className="recommendation-avatar"
                    />
                    <div className="recommendation-info">
                      <h3 className="heading-6" style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {rec.name}
                      </h3>
                      <p className="caption" style={{ marginBottom: '2px' }}>
                        {rec.title}
                      </p>
                      <p className="caption" style={{ color: 'var(--brand-primary)' }}>
                        {rec.company}
                      </p>
                      {rec.date && (
                        <p className="caption" style={{ marginTop: '8px', fontStyle: 'italic' }}>
                          {rec.date}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="body-small" style={{ marginTop: '24px', whiteSpace: 'pre-line', lineHeight: '1.7' }}>
                    {rec.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-4" style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
              Let's Work Together
            </h2>
            <p className="body-medium" style={{ marginBottom: '32px', maxWidth: '60ch' }}>
              Whether you're looking for strategic advisory support, industry connections, or partnership opportunities in the festival and events sector, I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
