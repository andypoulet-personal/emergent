import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="container" style={{ padding: '120px 40px 80px' }}>
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="heading-2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Let's Connect
          </h1>
          <p className="body-large" style={{ maxWidth: '60ch', margin: '0 auto' }}>
            Reach out to discuss partnerships, opportunities, or to learn more about the companies I work with.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <Card className="contact-form-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitSuccess && (
                <div style={{ 
                  display: 'flex', 
                  gap: '12px', 
                  padding: '16px', 
                  backgroundColor: 'rgba(217, 251, 6, 0.1)',
                  border: '1px solid var(--brand-primary)',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  alignItems: 'center'
                }}>
                  <CheckCircle style={{ width: '24px', height: '24px', color: 'var(--brand-primary)' }} />
                  <p className="body-small" style={{ color: 'var(--text-primary)' }}>
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Calendly Widget */}
          <Card className="calendly-card">
            <CardHeader>
              <CardTitle>Schedule a Call</CardTitle>
              <CardDescription>
                Book a time that works best for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="calendly-widget-container">
                <InlineWidget 
                  url={contactInfo.calendlyUrl}
                  styles={{ 
                    height: '700px',
                    minWidth: '320px'
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
