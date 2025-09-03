'use client';

import React from 'react';
import { Typography, Space, Button } from 'antd';
import { RocketOutlined, PlayCircleOutlined, DatabaseOutlined, CloudOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';

const { Title, Paragraph, Text } = Typography;

export default function HeroSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
      padding: '120px 50px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite',
        zIndex: 1
      }} />

      {/* Floating particles */}
      <div className="animate-particle" style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '3px',
        height: '3px',
        background: 'rgba(100, 200, 255, 0.8)',
        borderRadius: '50%',
        pointerEvents: 'none',
        boxShadow: '0 0 10px rgba(100, 200, 255, 0.5)'
      }} />
      <div className="animate-particle" style={{
        position: 'absolute',
        top: '70%',
        right: '20%',
        width: '5px',
        height: '5px',
        background: 'rgba(255, 100, 200, 0.6)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animationDelay: '3s',
        boxShadow: '0 0 15px rgba(255, 100, 200, 0.4)'
      }} />
      <div className="animate-particle" style={{
        position: 'absolute',
        top: '40%',
        left: '85%',
        width: '2px',
        height: '2px',
        background: 'rgba(200, 255, 100, 0.7)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animationDelay: '6s',
        boxShadow: '0 0 8px rgba(200, 255, 100, 0.3)'
      }} />

      {/* Main content container */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', width: '100%' }}>

        {/* Large Logo Section */}
        <div className="animate-fade-in-up" style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              margin: '0 auto',
              filter: 'drop-shadow(0 0 30px rgba(100, 200, 255, 0.3))'
            }}>
              <Image
                src="/logo.svg"
                alt="DataPlug Logo"
                width={200}
                height={200}
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                  animation: 'logoGlow 3s ease-in-out infinite alternate'
                }}
              />
            </div>
          </div>

          {/* Logo glow effect */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 4s ease-in-out infinite',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Title Section */}
        <Title
          level={1}
          style={{
            color: 'white',
            marginBottom: 24,
            fontSize: '3.5rem',
            fontWeight: 700,
            textShadow: '0 0 20px rgba(100, 200, 255, 0.5)',
            letterSpacing: '2px'
          }}
          className="animate-fade-in-up"
        >
          <Text style={{
            background: 'linear-gradient(45deg, #64c8ff, #ff64c8, #64ffc8)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1em'
          }}>
            DataPlug
          </Text>
          <br />
          <Text style={{
            color: '#64c8ff',
            fontSize: '0.6em',
            fontWeight: 300,
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}
            className="animate-glow"
          >
            Cloud-Aware Data Partitioning
          </Text>
        </Title>

        {/* Subtitle */}
        <Paragraph
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: 800,
            margin: '0 auto 50px',
            lineHeight: '1.6',
            fontWeight: 300
          }}
          className="animate-fade-in-up"
        >
          Revolutionizing data partitioning for unstructured scientific data in cloud environments.
          <br />
          <Text style={{ color: '#64c8ff', fontWeight: 500 }}>
            Zero-cost re-partitioning with parallel access and elastic workloads.
          </Text>
        </Paragraph>

        {/* Feature highlights */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '50px',
          flexWrap: 'wrap'
        }} className="animate-fade-in-up">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255,255,255,0.8)'
          }}>
            <DatabaseOutlined style={{ fontSize: '20px', color: '#64c8ff' }} />
            <span>Cloud-Native</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255,255,255,0.8)'
          }}>
            <CloudOutlined style={{ fontSize: '20px', color: '#64c8ff' }} />
            <span>Elastic Scaling</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255,255,255,0.8)'
          }}>
            <RocketOutlined style={{ fontSize: '20px', color: '#64c8ff' }} />
            <span>High Performance</span>
          </div>
        </div>

        {/* Action Buttons */}
        <Space size="large" className="animate-fade-in-up">
          <Link href="/docs">
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              className="animate-float"
              style={{
                animationDelay: '0.3s',
                background: 'linear-gradient(45deg, #64c8ff, #ff64c8)',
                border: 'none',
                height: '50px',
                padding: '0 30px',
                fontSize: '16px',
                fontWeight: 600,
                boxShadow: '0 8px 25px rgba(100, 200, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(100, 200, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(100, 200, 255, 0.3)';
              }}
            >
              Get Started
            </Button>
          </Link>
          <Button
            size="large"
            icon={<PlayCircleOutlined />}
            className="animate-float"
            style={{
              animationDelay: '0.6s',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(100, 200, 255, 0.5)',
              color: 'white',
              height: '50px',
              padding: '0 30px',
              fontSize: '16px',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(100, 200, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(100, 200, 255, 0.8)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(100, 200, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Watch Demo
          </Button>
        </Space>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes logoGlow {
          0% { filter: brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(100, 200, 255, 0.3)); }
          100% { filter: brightness(1.4) contrast(1.2) drop-shadow(0 0 30px rgba(100, 200, 255, 0.6)); }
        }
      `}</style>
    </section>
  );
} 