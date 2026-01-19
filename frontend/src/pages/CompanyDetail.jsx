import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';
import { companies } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function CompanyDetail() {
  const { companyId } = useParams();
  const company = companies.find(c => c.id === companyId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [companyId]);

  if (!company) {
    return (
      <div className="container" style={{ padding: '120px 40px 80px' }}>
        <Card>
          <CardHeader>
            <CardTitle>Company Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="body-medium" style={{ marginBottom: '24px' }}>
              The company you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button className="btn-primary">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="company-detail-page">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="company-hero-background">
          <img src={company.image} alt={company.name} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/" className="back-link">
            <ArrowLeft style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            Back to Home
          </Link>
          <h1 className="heading-2" style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '16px' }}>
            {company.name}
          </h1>
          <p className="body-large" style={{ color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '60ch' }}>
            {company.tagline}
          </p>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary">
              Visit Website
              <ExternalLink style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
            </Button>
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2 className="heading-4" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
                About {company.name}
              </h2>
              <p className="body-medium" style={{ marginBottom: '32px' }}>
                {company.fullDescription}
              </p>
            </div>
            <div className="overview-image">
              <img src={company.image} alt={company.name} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="products-section">
        <div className="container">
          <h2 className="heading-4" style={{ marginBottom: '40px', textAlign: 'center', color: 'var(--text-primary)' }}>
            Products & Services
          </h2>
          <div className="pixel-pushers-grid">
            {company.products.map((product, index) => (
              <Card key={index} className="product-card">
                <CardHeader>
                  <CardTitle className="heading-6">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-small">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="heading-4" style={{ marginBottom: '40px', color: 'var(--text-primary)' }}>
            Key Features
          </h2>
          <div className="features-grid">
            {company.keyFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <Check style={{ width: '24px', height: '24px', color: 'var(--brand-primary)', marginRight: '12px', flexShrink: 0 }} />
                <p className="body-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section">
        <div className="container">
          <h2 className="heading-4" style={{ marginBottom: '32px', color: 'var(--text-primary)' }}>
            Industries We Serve
          </h2>
          <div className="industries-list">
            {company.industries.map((industry, index) => (
              <div key={index} className="industry-badge">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (if available) */}
      {company.testimonials && company.testimonials.length > 0 && (
        <section className="testimonials-section">
          <div className="container">
            <h2 className="heading-4" style={{ marginBottom: '40px', textAlign: 'center', color: 'var(--text-primary)' }}>
              What Clients Say
            </h2>
            <div className="testimonials-grid">
              {company.testimonials.map((testimonial, index) => (
                <Card key={index} className="testimonial-card">
                  <CardContent style={{ padding: '32px' }}>
                    <p className="body-medium" style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                      "{testimonial.quote}"
                    </p>
                    <p className="body-small" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {testimonial.author}
                    </p>
                    <p className="caption">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies (if available) */}
      {company.caseStudies && company.caseStudies.length > 0 && (
        <section className="case-studies-section">
          <div className="container">
            <h2 className="heading-4" style={{ marginBottom: '48px', textAlign: 'center', color: 'var(--text-primary)' }}>
              Success Stories
            </h2>
            <div className="case-studies-list">
              {company.caseStudies.map((caseStudy, index) => (
                <Card key={index} className="case-study-card">
                  <div className="case-study-image-container">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="case-study-image"
                    />
                  </div>
                  <CardContent style={{ padding: '40px' }}>
                    <h3 className="heading-5" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
                      {caseStudy.title}
                    </h3>
                    
                    <div className="case-study-section">
                      <h4 className="case-study-label">Challenge</h4>
                      <p className="body-small" style={{ marginBottom: '20px' }}>
                        {caseStudy.challenge}
                      </p>
                    </div>
                    
                    <div className="case-study-section">
                      <h4 className="case-study-label">Solution</h4>
                      <p className="body-small" style={{ marginBottom: '20px' }}>
                        {caseStudy.solution}
                      </p>
                    </div>
                    
                    {caseStudy.results && (
                      <div className="case-study-section">
                        <h4 className="case-study-label">Results</h4>
                        <ul className="case-study-results">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="body-small">
                              <Check style={{ width: '20px', height: '20px', color: 'var(--brand-primary)', marginRight: '12px', flexShrink: 0 }} />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {caseStudy.testimonial && (
                      <div className="case-study-testimonial">
                        <p className="body-small" style={{ fontStyle: 'italic', marginBottom: '12px' }}>
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <p className="caption" style={{ color: 'var(--text-primary)' }}>
                          — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-4" style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
              Interested in {company.name}?
            </h2>
            <p className="body-medium" style={{ marginBottom: '32px', maxWidth: '60ch' }}>
              Let's discuss how {company.name} can help your business grow and succeed.
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
