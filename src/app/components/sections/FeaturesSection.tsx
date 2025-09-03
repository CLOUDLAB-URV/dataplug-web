'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { features } from '../../data/features';

const { Title, Paragraph } = Typography;

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="features" style={{
      padding: '120px 50px 100px',
      background: `
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%),
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
      `
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <Title level={2} style={{
            marginBottom: '20px',
            fontSize: '3rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Core Capabilities
          </Title>
          <Paragraph style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Advanced data partitioning technology designed for modern cloud infrastructure
          </Paragraph>
        </div>

        <Row gutter={[40, 40]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <div style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease-out ${index * 0.2}s`
              }}>
                <Card
                  hoverable
                  style={{
                    textAlign: 'center',
                    height: '320px',
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  styles={{
                    body: {
                      padding: '50px 30px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 20px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    borderRadius: '20px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '36px'
                    }}>
                      {feature.icon}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                      borderRadius: '20px'
                    }} className="animate-pulse" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Title level={4} style={{
                      marginBottom: '16px',
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1e293b'
                    }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{
                      color: '#64748b',
                      margin: 0,
                      fontSize: '16px',
                      lineHeight: '1.6',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {feature.description}
                    </Paragraph>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
} 