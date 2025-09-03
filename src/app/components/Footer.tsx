'use client';

import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, List } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

interface FooterProps {
  showPyRun?: boolean;
}

export default function Footer({ showPyRun = true }: FooterProps) {
  const productLinks = showPyRun
    ? ['Documentation', 'Tutorials', 'Examples', 'Data Cockpit', 'PyRun']
    : ['Documentation', 'Tutorials', 'Examples', 'Data Cockpit'];

  return (
    <AntFooter style={{ background: '#001529', color: 'white', padding: '60px 50px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 16 }}>
              <Image
                src="/logo.svg"
                alt="DataPlug Logo"
                width={28}
                height={28}
              />
              <Title level={4} style={{ color: 'white', margin: 0 }}>
                DataPlug
              </Title>
            </div>
            <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
              Cloud-aware data partitioning framework for scientific data.
            </Paragraph>
          </Col>
          <Col xs={24} md={6}>
            <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
              Product
            </Title>
            <List
              size="small"
              dataSource={productLinks}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '4px 0' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</a>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={6}>
            <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
              Community
            </Title>
            <List
              size="small"
              dataSource={['GitHub', 'Discussions', 'Contributing']}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '4px 0' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</a>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={6}>
            <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
              Support
            </Title>
            <List
              size="small"
              dataSource={['Issues', 'Contact', 'License']}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '4px 0' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</a>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0 20px' }} />
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
          © 2025 DataPlug. All rights reserved.
        </div>
      </div>
    </AntFooter>
  );
} 