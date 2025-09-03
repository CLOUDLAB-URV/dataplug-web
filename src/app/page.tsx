'use client';

import React from 'react';
import {
  Layout,
  Menu,
  Button,
  Typography,
  Row,
  Col,
  Card,
  Space,
  Divider,
  Statistic,
  List,
  Avatar,
  Tag,
  Steps,
  Carousel,
  Alert,
  Timeline,
  Badge
} from 'antd';
import {
  CloudOutlined,
  DatabaseOutlined,
  PartitionOutlined,
  RocketOutlined,
  GithubOutlined,
  BookOutlined,
  PlayCircleOutlined,
  CheckCircleOutlined,
  ApiOutlined,
  GlobalOutlined,
  ExperimentOutlined,
  SafetyCertificateOutlined,
  DesktopOutlined,
  UploadOutlined,
  SearchOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  CodeOutlined,
  MonitorOutlined,
  CloudServerOutlined,
  RocketOutlined as RocketIcon
} from '@ant-design/icons';
import Link from 'next/link';
import { features } from './data/features';
import { domains } from './data/domains';
import { dataCockpitFeatures, dataCockpitWorkflow, dataCockpitInstallation } from './data/dataCockpit';
import { pyrunFeatures, pyrunIntegration, pyrunUrl, pyrunDescription } from './data/pyrun';
import { formatExamples, allExamplesUrl } from './data/examples';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const frameworks = [
    { name: 'PySpark', icon: '🔥' },
    { name: 'Dask', icon: '⚡' },
    { name: 'Ray', icon: '🚀' },
    { name: 'Any Python', icon: '🐍' }
  ];

  const steps = [
    {
      title: 'Pre-processing',
      description: 'Build lightweight indexes decoupled from raw objects',
      icon: <DatabaseOutlined />
    },
    {
      title: 'Data Slicing',
      description: 'Create lazy-evaluated partitions with metadata',
      icon: <PartitionOutlined />
    },
    {
      title: 'Parallel Access',
      description: 'Multiple workers perform HTTP GET Byte-range requests',
      icon: <CloudOutlined />
    },
    {
      title: 'Evaluation',
      description: 'Data accessed only when needed, not before',
      icon: <CheckCircleOutlined />
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

      <Content style={{ marginTop: 64 }}>
        <HeroSection />

        <FeaturesSection />

        {/* Data Cockpit Section */}
        <section id="cockpit" style={{ padding: '80px 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div style={{ marginBottom: 32 }}>
                  <Badge.Ribbon text="Official" color="green">
                    <Title level={2} style={{ marginBottom: 16 }}>
                      Meet Data Cockpit
                    </Title>
                  </Badge.Ribbon>
                  <Paragraph style={{ fontSize: '18px', color: '#666', marginBottom: 24 }}>
                    An interactive IPython widget built on top of the DataPlug framework.
                    Upload, browse, benchmark, and partition your scientific data with a beautiful interface.
                  </Paragraph>
                  <Space size="large">
                    <Button type="primary" size="large" icon={<DesktopOutlined />}>
                      <a href="https://github.com/ubenabdelkrim/DataCockpit" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        View Repository
                      </a>
                    </Button>
                    <Button size="large" icon={<BookOutlined />}>
                      <a href="https://github.com/ubenabdelkrim/DataCockpit/tree/main" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        Documentation
                      </a>
                    </Button>
                  </Space>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <Card
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    height: '100%'
                  }}
                  styles={{
                    body: {
                      padding: '40px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <DesktopOutlined style={{ fontSize: '64px', color: 'white', marginBottom: 24 }} />
                    <Title level={3} style={{ color: 'white', marginBottom: 16 }}>
                      Interactive Jupyter Widget
                    </Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
                      Built on top of DataPlug&apos;s cloud-aware partitioning, Data Cockpit provides
                      an end-to-end Jupyter UI for seamless data processing.
                    </Paragraph>
                    <div style={{ marginTop: 16 }}>
                      <Text code style={{ color: 'white', fontSize: '14px' }}>
                        {dataCockpitInstallation}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Data Cockpit Features */}
        <section style={{ padding: '60px 50px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: 48 }}>
              What Data Cockpit Adds
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {dataCockpitFeatures.map((feature, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card
                    hoverable
                    style={{ textAlign: 'center', height: '100%' }}
                    styles={{
                      body: {
                        padding: '24px 16px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }
                    }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      {feature.icon}
                    </div>
                    <Title level={5} style={{ marginBottom: 12 }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                      {feature.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* PyRun Section */}
        <section id="pyrun" style={{ padding: '80px 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div style={{ marginBottom: 32 }}>
                  <Badge.Ribbon text="Platform" color="blue">
                    <Title level={2} style={{ marginBottom: 16 }}>
                      PyRun Cloud Platform
                    </Title>
                  </Badge.Ribbon>
                  <Paragraph style={{ fontSize: '18px', color: '#666', marginBottom: 24 }}>
                    {pyrunDescription}
                  </Paragraph>
                  <Space size="large">
                    <Button type="primary" size="large" icon={<RocketIcon />}>
                      <a href={pyrunUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        Try PyRun
                      </a>
                    </Button>
                    <Button size="large" icon={<GlobalOutlined />}>
                      <a href={pyrunUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        Visit Platform
                      </a>
                    </Button>
                  </Space>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <Card
                  style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    border: 'none',
                    height: '100%'
                  }}
                  styles={{
                    body: {
                      padding: '40px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <RocketIcon style={{ fontSize: '64px', color: 'white', marginBottom: 24 }} />
                    <Title level={3} style={{ color: 'white', marginBottom: 16 }}>
                      Serverless Python Execution
                    </Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
                      Focus on your code, not the setup. PyRun provides an integrated environment
                      with automated scaling and powerful framework support.
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* PyRun Features */}
        <section style={{ padding: '60px 50px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: 48 }}>
              Why Choose PyRun?
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {pyrunFeatures.map((feature, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card
                    hoverable
                    style={{ textAlign: 'center', height: '100%' }}
                    styles={{
                      body: {
                        padding: '24px 16px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }
                    }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      {feature.icon}
                    </div>
                    <Title level={5} style={{ marginBottom: 12 }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                      {feature.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* PyRun Integration */}
        <section style={{ padding: '80px 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: 48 }}>
              Seamless Integration with DataPlug & Data Cockpit
            </Title>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Timeline
                  items={pyrunIntegration.map((step, index) => ({
                    color: '#1890ff',
                    children: (
                      <div>
                        <Title level={5} style={{ marginBottom: 8 }}>
                          {step.title}
                        </Title>
                        <Paragraph style={{ color: '#666', margin: 0 }}>
                          {step.description}
                        </Paragraph>
                      </div>
                    ),
                    dot: step.icon
                  }))}
                />
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Complete Workflow" style={{ height: '100%' }}>
                  <List
                    dataSource={[
                      'Write Python code with DataPlug and Data Cockpit',
                      'Deploy to PyRun cloud platform',
                      'Execute with automatic scaling',
                      'Monitor performance in real-time',
                      'Scale from simple scripts to massive computations'
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                        {item}
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Data Cockpit Workflow */}
        <section style={{ padding: '80px 50px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: 48 }}>
              Your Workflow with Data Cockpit
            </Title>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Timeline
                  items={dataCockpitWorkflow.map((step, index) => ({
                    color: '#1890ff',
                    children: (
                      <div>
                        <Title level={5} style={{ marginBottom: 8 }}>
                          {step.title}
                        </Title>
                        <Paragraph style={{ color: '#666', margin: 0 }}>
                          {step.description}
                        </Paragraph>
                      </div>
                    ),
                    dot: step.icon
                  }))}
                />
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Why Data Cockpit?" style={{ height: '100%' }}>
                  <List
                    dataSource={[
                      'Built on DataPlug\'s Cloud-Aware Partitioning',
                      'Pre-processes data in read-only fashion',
                      'Exploits S3 byte-range reads for parallel access',
                      'Supports multiple scientific domains',
                      'Allows re-partitioning with different strategies',
                      'Zero-cost data movement'
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                        {item}
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Domains Section */}
        <section id="domains" style={{ padding: '80px 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
              Supported Domains
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {domains.map((domain, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card
                    hoverable
                    style={{ height: '100%' }}
                    styles={{
                      body: {
                        padding: '24px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                      }
                    }}
                  >
                    <div style={{ textAlign: 'center', marginBottom: 16 }}>
                      <Avatar
                        size={64}
                        style={{ backgroundColor: domain.color, marginBottom: 16 }}
                        icon={<ExperimentOutlined />}
                      />
                      <Title level={4} style={{ margin: '16px 0 8px' }}>
                        {domain.title}
                      </Title>
                      <Paragraph style={{ color: '#666', fontSize: '14px', marginBottom: 16 }}>
                        {domain.description}
                      </Paragraph>
                    </div>
                    <Space direction="vertical" style={{ width: '100%', alignItems: 'center' }}>
                      {domain.formats.map((format, formatIndex) => (
                        <Tag key={formatIndex} color={domain.color} style={{ margin: '2px' }}>
                          {format}
                        </Tag>
                      ))}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" style={{ padding: '80px 50px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
              Format Examples
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#666', marginBottom: 48 }}>
              Explore real examples for each supported format. Each example includes working code and sample data.
            </Paragraph>

            {formatExamples.map((domain, domainIndex) => (
              <div key={domainIndex} style={{ marginBottom: 60 }}>
                <div style={{
                  background: `linear-gradient(135deg, ${domain.color}20 0%, ${domain.color}10 100%)`,
                  padding: '24px',
                  borderRadius: '12px',
                  marginBottom: 32,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: domain.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>
                    {domain.formats[0]?.icon}
                  </div>
                  <div>
                    <Title level={3} style={{ margin: 0, color: domain.color }}>
                      {domain.title}
                    </Title>
                    <Text style={{ color: '#666' }}>
                      {domain.formats.length} format{domain.formats.length > 1 ? 's' : ''} available
                    </Text>
                  </div>
                </div>

                <Row gutter={[24, 24]} justify="center">
                  {domain.formats.map((format, formatIndex) => (
                    <Col xs={24} sm={12} lg={8} xl={6} key={formatIndex}>
                      <Card
                        hoverable
                        style={{
                          height: '220px',
                          background: 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          overflow: 'hidden'
                        }}
                        styles={{
                          body: {
                            padding: '24px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%',
                          gap: '16px'
                        }}>
                          <div>
                            <Tag color={domain.color} style={{ fontSize: '12px', padding: '4px 8px' }}>
                              {domain.title}
                            </Tag>
                          </div>

                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '24px',
                            color: domain.color,
                            justifyContent: 'center'
                          }}>
                            {format.icon}
                            <Title level={4} style={{ margin: 0, fontSize: '18px' }}>
                              {format.name}
                            </Title>
                          </div>

                          <Paragraph style={{
                            color: '#666',
                            fontSize: '14px',
                            margin: 0,
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: '1.4',
                            textAlign: 'center'
                          }}>
                            {format.description}
                          </Paragraph>

                          <Tag
                            color={domain.color}
                            style={{
                              fontSize: '14px',
                              padding: '8px 16px',
                              cursor: 'pointer',
                              border: 'none',
                              borderRadius: '6px',
                              textAlign: 'center'
                            }}
                            onClick={() => window.open(format.githubUrl, '_blank')}
                          >
                            View Examples
                          </Tag>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Button
                type="primary"
                size="large"
                icon={<GithubOutlined />}
                onClick={() => window.open(allExamplesUrl, '_blank')}
              >
                View All Examples
              </Button>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" style={{ padding: '80px 50px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
              How It Works
            </Title>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Steps
                  direction="vertical"
                  current={-1}
                  items={steps.map((step, index) => ({
                    title: step.title,
                    description: step.description,
                    icon: step.icon,
                    status: 'finish'
                  }))}
                />
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Compatible Frameworks" style={{ height: '100%' }}>
                  <Row gutter={[16, 16]}>
                    {frameworks.map((framework, index) => (
                      <Col span={12} key={index}>
                        <Card
                          size="small"
                          style={{ textAlign: 'center', background: '#f8f9fa' }}
                        >
                          <div style={{ fontSize: '24px', marginBottom: 8 }}>
                            {framework.icon}
                          </div>
                          <Text strong>{framework.name}</Text>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '60px 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={8}>
                <Statistic
                  title="Data Formats"
                  value={10}
                  suffix="+"
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic
                  title="Zero Cost"
                  value={100}
                  suffix="%"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic
                  title="Parallel Access"
                  value="∞"
                  valueStyle={{ color: '#722ed1' }}
                />
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '80px 50px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          textAlign: 'center',
          color: 'white'
        }}>
          <Title level={2} style={{ color: 'white', marginBottom: 24 }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto 40px' }}>
            Join the community of scientists and engineers using DataPlug, Data Cockpit, and PyRun for efficient data partitioning.
          </Paragraph>
          <Space size="large">
            <Link href="/docs">
              <Button type="primary" size="large" icon={<BookOutlined />}>
                View Documentation
              </Button>
            </Link>
            <Button
              size="large"
              icon={<DesktopOutlined />}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              <a href="https://github.com/ubenabdelkrim/DataCockpit" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                Try Data Cockpit
              </a>
            </Button>
            <Button
              size="large"
              icon={<RocketIcon />}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              <a href={pyrunUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                Try PyRun
              </a>
            </Button>
            <Button
              size="large"
              icon={<GithubOutlined />}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              <a href="https://github.com/CLOUDLAB-URV/dataplug" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                GitHub Repository
              </a>
            </Button>
          </Space>
        </section>

        {/* Alert Section */}
        <section style={{ padding: '40px 50px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Alert
              message="Complete Ecosystem: DataPlug + Data Cockpit + PyRun"
              description="DataPlug provides the core engine for efficient data partitioning, Data Cockpit offers the user-friendly interface, and PyRun delivers the cloud platform for seamless execution."
              type="success"
              showIcon
              icon={<BulbOutlined />}
              style={{ textAlign: 'center' }}
            />
          </div>
        </section>
      </Content>

      <Footer />
    </Layout>
  );
}
