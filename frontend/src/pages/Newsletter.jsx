import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ExternalLink, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Newsletter() {
  const [newsletters, setNewsletters] = useState([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { newsletterId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsletters();
  }, []);

  useEffect(() => {
    if (newsletterId && newsletters.length > 0) {
      const newsletter = newsletters.find(n => n._id === newsletterId);
      setSelectedNewsletter(newsletter);
    }
  }, [newsletterId, newsletters]);

  const fetchNewsletters = async () => {
    try {
      const response = await axios.get(`${API}/newsletters?limit=20`);
      setNewsletters(response.data.newsletters);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (selectedNewsletter) {
    return <NewsletterDetail newsletter={selectedNewsletter} />;
  }

  return (
    <div className="newsletter-page">
      {/* Hero Section */}
      <section className="newsletter-hero">
        <div className="newsletter-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&q=85" 
            alt="Newsletter" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="heading-2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Newsletter
          </h1>
          <p className="body-large" style={{ color: '#ffffff', maxWidth: '60ch' }}>
            Weekly insights on festivals, live events, and the technologies shaping the entertainment industry
          </p>
        </div>
      </section>

      {/* Newsletter List */}
      <section className="newsletter-list-section">
        <div className="container">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p className="body-medium">Loading newsletters...</p>
            </div>
          ) : newsletters.length === 0 ? (
            <Card>
              <CardContent style={{ padding: '64px 32px', textAlign: 'center' }}>
                <p className="body-large" style={{ marginBottom: '16px' }}>
                  No newsletters published yet
                </p>
                <p className="body-small">
                  Check back soon for weekly insights and industry updates
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="newsletter-grid">
              {newsletters.map((newsletter) => (
                <Card key={newsletter._id} className="newsletter-card">
                  <CardHeader>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                      <Calendar style={{ width: '16px', height: '16px' }} />
                      <span className="caption">{formatDate(newsletter.publish_date)}</span>
                    </div>
                    <CardTitle className="heading-5" style={{ marginBottom: '12px' }}>
                      {newsletter.title}
                    </CardTitle>
                    <CardDescription>
                      <p className="body-small" style={{ lineHeight: '1.6' }}>
                        {newsletter.preview_text}
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {newsletter.tags && newsletter.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        {newsletter.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">
                            <Tag style={{ width: '12px', height: '12px', marginRight: '4px' }} />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Link to={`/newsletter/${newsletter._id}`} style={{ flex: 1 }}>
                        <Button className="btn-primary" style={{ width: '100%' }}>
                          Read More
                        </Button>
                      </Link>
                      {newsletter.linkedin_url && (
                        <a href={newsletter.linkedin_url} target="_blank" rel="noopener noreferrer">
                          <Button className="btn-secondary">
                            <ExternalLink style={{ width: '20px', height: '20px' }} />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function NewsletterDetail({ newsletter }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="newsletter-detail-page">
      <section className="newsletter-detail-hero">
        <div className="container">
          <Link to="/newsletter" className="back-link">
            <ArrowLeft style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            Back to All Newsletters
          </Link>
          
          <div style={{ marginTop: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-secondary)' }}>
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span className="caption">{formatDate(newsletter.publish_date)}</span>
            </div>
            
            <h1 className="heading-2" style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>
              {newsletter.title}
            </h1>
            
            {newsletter.tags && newsletter.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {newsletter.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
                    <Tag style={{ width: '12px', height: '12px', marginRight: '4px' }} />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {newsletter.linkedin_url && (
              <a href={newsletter.linkedin_url} target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary">
                  <ExternalLink style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                  View on LinkedIn
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="newsletter-content-section">
        <div className="container">
          <Card className="newsletter-content-card">
            <CardContent style={{ padding: '48px' }}>
              <div 
                className="newsletter-content"
                dangerouslySetInnerHTML={{ __html: newsletter.full_content.replace(/\n/g, '<br />') }}
              />
            </CardContent>
          </Card>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/newsletter">
              <Button className="btn-primary">
                View All Newsletters
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
