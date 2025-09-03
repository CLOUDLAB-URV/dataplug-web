'use client';

import React from 'react';
import { Layout, Row, Col, Typography, Space, Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

interface HeaderProps {
  showPyRun?: boolean;
}

export default function Header({ showPyRun = true }: HeaderProps) {
  return (
    <AntHeader style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0f0f0',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      padding: '0 50px',
      height: '80px'
    }}>
      <Row justify="space-between" align="middle" style={{ height: '100%' }}>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Image
              src={getAssetPath("/logo.svg")}
              alt="DataPlug Logo"
              width={90}
              height={90}
              style={{ marginTop: '-5px' }}
            />
            <Title level={2} style={{ margin: 0, color: '#1890ff', fontSize: '28px' }}>
              DataPlug
            </Title>
          </div>
        </Col>
        <Col>
          <Space size="large">
            <a href="#features" style={{ color: '#666' }}>Features</a>
            <a href="#domains" style={{ color: '#666' }}>Domains</a>
            <a href="#examples" style={{ color: '#666' }}>Examples</a>
            <a href="#cockpit" style={{ color: '#666' }}>Data Cockpit</a>
            {showPyRun && <a href="#pyrun" style={{ color: '#666' }}>PyRun</a>}
            <a href="#architecture" style={{ color: '#666' }}>Architecture</a>
            <Link href="/docs">
              <Button type="primary" icon={<BookOutlined />}>
                Get Started
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </AntHeader>
  );
} 