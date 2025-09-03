'use client';

import React from 'react';
import {
    Layout,
    Typography,
    Row,
    Col,
    Card,
    Space,
    Divider,
    Button,
    List,
    Tag,
    Alert,
    Steps,
    Collapse,
    Tabs,
    Timeline,
    Badge
} from 'antd';
import {
    BookOutlined,
    CodeOutlined,
    ApiOutlined,
    RocketOutlined,
    CloudOutlined,
    DatabaseOutlined,
    PartitionOutlined,
    ExperimentOutlined,
    SafetyCertificateOutlined,
    GithubOutlined,
    DesktopOutlined,
    UploadOutlined,
    SearchOutlined,
    BarChartOutlined,
    SettingOutlined,
    CheckCircleOutlined,
    BulbOutlined,
    CloudServerOutlined,
    MonitorOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { dataCockpitInstallation, dataCockpitInstallationWithExtras } from '../data/dataCockpit';
import { pyrunUrl } from '../data/pyrun';
import { formatExamples, allExamplesUrl } from '../data/examples';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function DocsPage() {
    const installationSteps = [
        {
            title: 'Install DataPlug',
            description: 'pip install git+https://github.com/CLOUDLAB-URV/dataplug',
            content: 'Install the latest version of DataPlug directly from GitHub'
        },
        {
            title: 'Import the library',
            description: 'from dataplug import CloudObject',
            content: 'Import DataPlug in your Python script'
        },
        {
            title: 'Initialize',
            description: 'co = CloudObject.from_s3(DataFormat, "s3://bucket/path")',
            content: 'Create a CloudObject instance for your data'
        }
    ];

    const dataCockpitInstallationSteps = [
        {
            title: 'Install Data Cockpit',
            description: dataCockpitInstallation,
            content: 'Install Data Cockpit using pip'
        },
        {
            title: 'Install with Geospatial Extras',
            description: dataCockpitInstallationWithExtras,
            content: 'Optional: Install with geospatial support'
        },
        {
            title: 'Import in Jupyter',
            description: 'import cloud_data_cockpit',
            content: 'Import in your Jupyter notebook'
        },
        {
            title: 'Launch Widget',
            description: 'cockpit = DataCockpit()',
            content: 'Launch the interactive widget'
        }
    ];

    const pyrunInstallation = [
        {
            title: 'Visit PyRun Platform',
            description: 'Go to pyrun.cloud',
            content: 'Access the PyRun cloud platform'
        },
        {
            title: 'Sign up for PyRun',
            description: 'Create account at pyrun.cloud',
            content: 'Register for PyRun cloud platform'
        },
        {
            title: 'Connect AWS Account',
            description: 'Configure your AWS credentials',
            content: 'Link your AWS account for cloud execution'
        },
        {
            title: 'Deploy Your Code',
            description: 'Write Python code and deploy',
            content: 'Deploy Python scripts to the cloud'
        }
    ];

    const codeExample = `import logging
import math

from dataplug import CloudObject
from dataplug.formats.genomics.fasta import FASTA, partition_chunks_strategy
from dataplug.util import setup_logging

def main():
    setup_logging(logging.DEBUG)
    FASTA.debug()

    # Localhost minio config
    minio = {"endpoint_url": "http://127.0.0.1:9000",
             "role_arn": "arn:aws:iam::123456789012:role/S3Access"}

    co = CloudObject.from_s3(FASTA, "s3://genomics/fasta_sample.fasta",
                             s3_config={"endpoint_url": "http://127.0.0.1:9000",
                                        "role_arn": "arn:aws:iam::123456789012:role/S3Access"})

    # Perform preprocessing in 4 parallel jobs (chunk size = total size / 4)
    parallel_config = {"verbose": 10}
    chunk_size = math.ceil(co.size / 4)
    co.preprocess(parallel_config=parallel_config, chunk_size=chunk_size)

    print(f"FASTA file has {co.attributes.num_sequences} sequences")
    data_slices = co.partition(partition_chunks_strategy, num_chunks=8)

    for data_slice in data_slices:
        batch = data_slice.get().decode('utf-8')
        print(batch)
        print('---')`;

    const dataCockpitExample = `from cloud_data_cockpit import DataCockpit
import lithops

# Launch Data Cockpit widget in Jupyter notebook (widget appears automatically)
# Select the dataset, choose number of chunks, and click "Process Data"
cockpit = DataCockpit()

def process_data_slice(slice_metadata):
    # Retrieve and decode the data slice from the provided metadata on the fly.
    data_slice = slice_metadata.get()
    # Process the data slice (for example, summing a specific column)
    return sum(data_slice["column_of_interest"])

slices_metadata = cockpit.get_data_slices()
fexec = lithops.FunctionExecutor()
fexec.map(process_data_slice, slices_metadata)
results = fexec.get_result()
print("Results:", results)`;

    const pyrunExample = `# my_script.py
import dataplug
import lithops

from dataplug import CloudObject
from dataplug.formats.genomics.fasta import FASTA, partition_chunks_strategy

def process_data_slice(slice_metadata):
    # Retrieve and decode the data slice from the provided metadata on the fly.
    data_slice = slice_metadata.get()
    # Process the data slice (for example, counting sequences)
    return len(data_slice.split('>')) - 1

# Load and process data
co = CloudObject.from_s3(FASTA, "s3://my-bucket/data.fasta")
co.preprocess(parallel_config={"verbose": 10})

# Create data slices
data_slices = co.partition(partition_chunks_strategy, num_chunks=8)

# Process in parallel with Lithops (PyRun handles scaling)
fexec = lithops.FunctionExecutor()
fexec.map(process_data_slice, data_slices)
results = fexec.get_result()

print(f"Processed {len(results)} slices")
print(f"Total sequences: {sum(results)}")`;

    const pysparkExample = `from pyspark.sql import SparkSession
import dataplug

spark = SparkSession.builder.appName("DataPlug").getOrCreate()

# Create DataPlug slices
from dataplug import CloudObject
from dataplug.formats.genomics.fasta import FASTA, partition_chunks_strategy

co = CloudObject.from_s3(FASTA, "s3://bucket/data.fasta")
co.preprocess(parallel_config={"verbose": 10})
data_slices = co.partition(partition_chunks_strategy, num_chunks=8)

# Convert to RDD and process
rdd = spark.sparkContext.parallelize(data_slices)
results = rdd.map(lambda slice: len(slice.get().split('>')) - 1).collect()`;

    const daskExample = `import dask.bag as db
import dataplug

# Create DataPlug slices
from dataplug import CloudObject
from dataplug.formats.genomics.fasta import FASTA, partition_chunks_strategy

co = CloudObject.from_s3(FASTA, "s3://bucket/data.fasta")
co.preprocess(parallel_config={"verbose": 10})
data_slices = co.partition(partition_chunks_strategy, num_chunks=8)

# Convert to Dask Bag and process
bag = db.from_sequence(data_slices)
results = bag.map(lambda slice: len(slice.get().split('>')) - 1).compute()`;

    const dataCockpitFeatures = [
        {
            icon: <UploadOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
            title: 'Upload & Browse',
            description: 'Upload local files directly into any S3 bucket and browse existing datasets'
        },
        {
            icon: <SearchOutlined style={{ fontSize: '20px', color: '#52c41a' }} />,
            title: 'Explore Collections',
            description: 'Explore curated public and Metaspace collections for scientific data discovery'
        },
        {
            icon: <BarChartOutlined style={{ fontSize: '20px', color: '#722ed1' }} />,
            title: 'Performance Benchmarking',
            description: 'Run benchmarks across configurable batch sizes to discover optimal throughput'
        },
        {
            icon: <SettingOutlined style={{ fontSize: '20px', color: '#fa8c16' }} />,
            title: 'One-Click Partitioning',
            description: 'Partition a variety of scientific data types into chunks or batches with one click'
        },
        {
            icon: <DesktopOutlined style={{ fontSize: '20px', color: '#eb2f96' }} />,
            title: 'Jupyter Integration',
            description: 'Integrate seamlessly into Jupyter notebooks for elastic, parallel workloads'
        }
    ];

    const pyrunFeatures = [
        {
            icon: <CodeOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
            title: 'Effortless Execution',
            description: 'Write standard Python and run it seamlessly in the cloud'
        },
        {
            icon: <CloudServerOutlined style={{ fontSize: '20px', color: '#52c41a' }} />,
            title: 'Integrated & Automated',
            description: 'VS Code-like web interface with automated runtime builds'
        },
        {
            icon: <ThunderboltOutlined style={{ fontSize: '20px', color: '#722ed1' }} />,
            title: 'Scalable & Versatile',
            description: 'Built-in support for Lithops (FaaS) and Dask'
        },
        {
            icon: <MonitorOutlined style={{ fontSize: '20px', color: '#fa8c16' }} />,
            title: 'Real-Time Monitoring',
            description: 'Detailed metrics for CPU, memory, disk, and network usage'
        }
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Header */}
            <Header style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #f0f0f0',
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                padding: '0 50px'
            }}>
                <Row justify="space-between" align="middle" style={{ height: '100%' }}>
                    <Col>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                                <Image
                                    src="/logo.svg"
                                    alt="DataPlug Logo"
                                    width={28}
                                    height={28}
                                />
                                <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
                                    DataPlug
                                </Title>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Space size="large">
                            <Link href="/" style={{ color: '#666' }}>Home</Link>
                            <Button type="primary" icon={<BookOutlined />}>
                                Documentation
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Header>

            <Content style={{ marginTop: 64 }}>
                <div style={{ padding: '40px 50px' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                        <Title level={1} style={{ marginBottom: 40 }}>
                            Documentation
                        </Title>

                        <Tabs defaultActiveKey="1" size="large">
                            <TabPane tab="Quick Start" key="1">
                                <Row gutter={[32, 32]}>
                                    <Col xs={24} lg={12}>
                                        <Card title="DataPlug Installation" style={{ marginBottom: 24 }}>
                                            <Steps
                                                direction="vertical"
                                                current={-1}
                                                items={installationSteps.map((step, index) => ({
                                                    title: step.title,
                                                    description: step.description,
                                                    status: 'finish'
                                                }))}
                                            />
                                        </Card>
                                    </Col>
                                    <Col xs={24} lg={12}>
                                        <Card title="Basic Usage" style={{ marginBottom: 24 }}>
                                            <pre style={{
                                                background: '#f6f8fa',
                                                padding: '16px',
                                                borderRadius: '8px',
                                                overflow: 'auto',
                                                fontSize: '14px',
                                                lineHeight: '1.5'
                                            }}>
                                                <code>{codeExample}</code>
                                            </pre>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>

                            <TabPane tab="Data Cockpit" key="2">
                                <Alert
                                    message="Interactive Jupyter Widget"
                                    description="Data Cockpit is the user-friendly interface built on top of DataPlug's core engine."
                                    type="info"
                                    showIcon
                                    icon={<DesktopOutlined />}
                                    style={{ marginBottom: 24 }}
                                />

                                <Row gutter={[32, 32]}>
                                    <Col xs={24} lg={12}>
                                        <Card title="Data Cockpit Installation" style={{ marginBottom: 24 }}>
                                            <Steps
                                                direction="vertical"
                                                current={-1}
                                                items={dataCockpitInstallationSteps.map((step, index) => ({
                                                    title: step.title,
                                                    description: step.description,
                                                    status: 'finish'
                                                }))}
                                            />
                                        </Card>
                                    </Col>
                                    <Col xs={24} lg={12}>
                                        <Card title="Data Cockpit Usage" style={{ marginBottom: 24 }}>
                                            <pre style={{
                                                background: '#f6f8fa',
                                                padding: '16px',
                                                borderRadius: '8px',
                                                overflow: 'auto',
                                                fontSize: '14px',
                                                lineHeight: '1.5'
                                            }}>
                                                <code>{dataCockpitExample}</code>
                                            </pre>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card title="Data Cockpit Features" style={{ marginBottom: 24 }}>
                                    <Row gutter={[16, 16]}>
                                        {dataCockpitFeatures.map((feature, index) => (
                                            <Col xs={24} sm={12} lg={6} key={index}>
                                                <Card size="small" style={{ textAlign: 'center' }}>
                                                    <div style={{ marginBottom: 8 }}>
                                                        {feature.icon}
                                                    </div>
                                                    <Title level={5} style={{ marginBottom: 4 }}>
                                                        {feature.title}
                                                    </Title>
                                                    <Paragraph style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                                                        {feature.description}
                                                    </Paragraph>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card>

                                <Card title="Why Data Cockpit?" style={{ marginBottom: 24 }}>
                                    <Row gutter={[24, 24]}>
                                        <Col xs={24} lg={12}>
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
                                        </Col>
                                        <Col xs={24} lg={12}>
                                            <Card title="Workflow" size="small">
                                                <Timeline
                                                    items={[
                                                        { children: 'Upload local files to S3' },
                                                        { children: 'Browse existing datasets' },
                                                        { children: 'Run performance benchmarks' },
                                                        { children: 'Process with optimal settings' },
                                                        { children: 'Get data slices for processing' }
                                                    ]}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>

                            <TabPane tab="PyRun" key="3">
                                <Alert
                                    message="Cloud Computing Platform"
                                    description="PyRun is the cloud platform that integrates DataPlug and Data Cockpit for seamless execution."
                                    type="success"
                                    showIcon
                                    icon={<RocketOutlined />}
                                    style={{ marginBottom: 24 }}
                                />

                                <Row gutter={[32, 32]}>
                                    <Col xs={24} lg={12}>
                                        <Card title="PyRun Installation" style={{ marginBottom: 24 }}>
                                            <Steps
                                                direction="vertical"
                                                current={-1}
                                                items={pyrunInstallation.map((step, index) => ({
                                                    title: step.title,
                                                    description: step.description,
                                                    status: 'finish'
                                                }))}
                                            />
                                        </Card>
                                    </Col>
                                    <Col xs={24} lg={12}>
                                        <Card title="PyRun with DataPlug" style={{ marginBottom: 24 }}>
                                            <pre style={{
                                                background: '#f6f8fa',
                                                padding: '16px',
                                                borderRadius: '8px',
                                                overflow: 'auto',
                                                fontSize: '14px',
                                                lineHeight: '1.5'
                                            }}>
                                                <code>{pyrunExample}</code>
                                            </pre>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card title="PyRun Features" style={{ marginBottom: 24 }}>
                                    <Row gutter={[16, 16]}>
                                        {pyrunFeatures.map((feature, index) => (
                                            <Col xs={24} sm={12} lg={6} key={index}>
                                                <Card size="small" style={{ textAlign: 'center' }}>
                                                    <div style={{ marginBottom: 8 }}>
                                                        {feature.icon}
                                                    </div>
                                                    <Title level={5} style={{ marginBottom: 4 }}>
                                                        {feature.title}
                                                    </Title>
                                                    <Paragraph style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                                                        {feature.description}
                                                    </Paragraph>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card>

                                <Card title="Complete Ecosystem" style={{ marginBottom: 24 }}>
                                    <Row gutter={[24, 24]}>
                                        <Col xs={24} lg={12}>
                                            <List
                                                dataSource={[
                                                    'DataPlug: Core data partitioning engine',
                                                    'Data Cockpit: Interactive Jupyter interface',
                                                    'PyRun: Cloud execution platform',
                                                    'Seamless integration across all components',
                                                    'Automatic scaling and resource management',
                                                    'Real-time monitoring and performance insights'
                                                ]}
                                                renderItem={(item) => (
                                                    <List.Item>
                                                        <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                                                        {item}
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                        <Col xs={24} lg={12}>
                                            <Card title="Deployment Workflow" size="small">
                                                <Timeline
                                                    items={[
                                                        { children: 'Write Python code with DataPlug' },
                                                        { children: 'Use Data Cockpit for exploration' },
                                                        { children: 'Deploy to PyRun cloud platform' },
                                                        { children: 'Execute with automatic scaling' },
                                                        { children: 'Monitor performance in real-time' }
                                                    ]}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>

                            <TabPane tab="Data Formats" key="4">
                                <Alert
                                    message="Supported Formats"
                                    description="DataPlug supports multiple scientific data formats. Click on any format to view examples and usage instructions."
                                    type="info"
                                    showIcon
                                    icon={<DatabaseOutlined />}
                                    style={{ marginBottom: 24 }}
                                />

                                {formatExamples.map((domain, domainIndex) => (
                                    <div key={domainIndex} style={{ marginBottom: '32px' }}>
                                        {/* Domain Header */}
                                        <div style={{
                                            textAlign: 'center',
                                            marginBottom: '20px',
                                            padding: '12px',
                                            background: `linear-gradient(135deg, ${domain.color}15 0%, ${domain.color}05 100%)`,
                                            borderRadius: '8px',
                                            border: `1px solid ${domain.color}20`
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px'
                                            }}>
                                                <div style={{
                                                    fontSize: '20px',
                                                    color: domain.color
                                                }}>
                                                    {domain.formats[0].icon}
                                                </div>
                                                <Title level={4} style={{
                                                    margin: 0,
                                                    color: domain.color,
                                                    fontSize: '18px'
                                                }}>
                                                    {domain.title}
                                                </Title>
                                            </div>
                                            <Paragraph style={{
                                                margin: '6px 0 0 0',
                                                color: '#666',
                                                fontSize: '12px'
                                            }}>
                                                {domain.formats.length} format{domain.formats.length > 1 ? 's' : ''} available
                                            </Paragraph>
                                        </div>

                                        {/* Domain Cards */}
                                        <Row gutter={[12, 12]} justify="center">
                                            {domain.formats.map((format, formatIndex) => (
                                                <Col xs={24} sm={12} md={8} lg={6} key={formatIndex}>
                                                    <Link href={format.githubUrl} target="_blank">
                                                        <Card
                                                            hoverable
                                                            style={{
                                                                textAlign: 'center',
                                                                borderColor: domain.color,
                                                                borderWidth: '2px',
                                                                height: '160px',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                overflow: 'hidden',
                                                                background: `linear-gradient(135deg, ${domain.color}05 0%, ${domain.color}02 100%)`
                                                            }}
                                                            styles={{
                                                                body: {
                                                                    padding: '10px',
                                                                    height: '100%',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    justifyContent: 'space-between',
                                                                    overflow: 'hidden'
                                                                }
                                                            }}
                                                        >
                                                            <div style={{
                                                                flex: 1,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'space-between',
                                                                overflow: 'hidden',
                                                                gap: '8px'
                                                            }}>
                                                                <div style={{ overflow: 'hidden' }}>
                                                                    {/* Icon */}
                                                                    <div style={{
                                                                        marginBottom: '10px',
                                                                        textAlign: 'center'
                                                                    }}>
                                                                        <div style={{
                                                                            fontSize: '20px',
                                                                            color: domain.color,
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            height: '28px'
                                                                        }}>
                                                                            {format.icon}
                                                                        </div>
                                                                    </div>

                                                                    {/* Title */}
                                                                    <div style={{ marginBottom: '6px' }}>
                                                                        <Title level={5} style={{
                                                                            margin: 0,
                                                                            fontSize: '13px',
                                                                            lineHeight: '1.2',
                                                                            textAlign: 'center',
                                                                            color: '#262626'
                                                                        }}>
                                                                            {format.name}
                                                                        </Title>
                                                                    </div>

                                                                    {/* Description */}
                                                                    <div style={{
                                                                        padding: '0 2px'
                                                                    }}>
                                                                        <Paragraph style={{
                                                                            fontSize: '10px',
                                                                            color: '#666',
                                                                            margin: 0,
                                                                            lineHeight: '1.3',
                                                                            textAlign: 'center',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            display: '-webkit-box',
                                                                            WebkitLineClamp: 2,
                                                                            WebkitBoxOrient: 'vertical',
                                                                            minHeight: '26px'
                                                                        }}>
                                                                            {format.description}
                                                                        </Paragraph>
                                                                    </div>
                                                                </div>

                                                                {/* Button */}
                                                                <div style={{
                                                                    marginTop: 'auto',
                                                                    paddingTop: '4px'
                                                                }}>
                                                                    <Tag color={domain.color} style={{
                                                                        fontSize: '9px',
                                                                        alignSelf: 'center',
                                                                        textAlign: 'center',
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        width: '100%',
                                                                        flexShrink: 0,
                                                                        padding: '3px 10px',
                                                                        height: '24px',
                                                                        borderRadius: '3px',
                                                                        fontWeight: '500'
                                                                    }}>
                                                                        View Examples
                                                                    </Tag>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}

                                <Card title="All Examples" style={{ marginTop: 24 }}>
                                    <Row gutter={[24, 24]}>
                                        <Col xs={24}>
                                            <Link href={allExamplesUrl} target="_blank">
                                                <Card hoverable style={{ textAlign: 'center' }}>
                                                    <GithubOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: 12 }} />
                                                    <Title level={5}>Browse All Examples</Title>
                                                    <Paragraph style={{ fontSize: '12px' }}>Complete collection on GitHub</Paragraph>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>


                            <TabPane tab="Examples" key="6">
                                <Alert
                                    message="Format-Specific Examples"
                                    description="Browse examples for each supported data format. Each example includes complete code, sample data, and usage instructions."
                                    type="info"
                                    showIcon
                                    icon={<CodeOutlined />}
                                    style={{ marginBottom: 24 }}
                                />

                                {formatExamples.map((domain, domainIndex) => (
                                    <div key={domainIndex} style={{ marginBottom: '40px' }}>
                                        {/* Domain Header */}
                                        <div style={{
                                            textAlign: 'center',
                                            marginBottom: '24px',
                                            padding: '16px',
                                            background: `linear-gradient(135deg, ${domain.color}15 0%, ${domain.color}05 100%)`,
                                            borderRadius: '12px',
                                            border: `1px solid ${domain.color}20`
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '12px'
                                            }}>
                                                <div style={{
                                                    fontSize: '24px',
                                                    color: domain.color
                                                }}>
                                                    {domain.formats[0].icon}
                                                </div>
                                                <Title level={3} style={{
                                                    margin: 0,
                                                    color: domain.color,
                                                    fontSize: '20px'
                                                }}>
                                                    {domain.title}
                                                </Title>
                                            </div>
                                            <Paragraph style={{
                                                margin: '8px 0 0 0',
                                                color: '#666',
                                                fontSize: '14px'
                                            }}>
                                                {domain.formats.length} format{domain.formats.length > 1 ? 's' : ''} available
                                            </Paragraph>
                                        </div>

                                        {/* Domain Cards */}
                                        <Row gutter={[16, 16]} justify="center">
                                            {domain.formats.map((format, formatIndex) => (
                                                <Col xs={24} sm={12} md={8} lg={6} key={formatIndex}>
                                                    <Link href={format.githubUrl} target="_blank">
                                                        <Card
                                                            hoverable
                                                            style={{
                                                                textAlign: 'center',
                                                                borderColor: domain.color,
                                                                borderWidth: '2px',
                                                                height: '200px',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                overflow: 'hidden',
                                                                background: `linear-gradient(135deg, ${domain.color}05 0%, ${domain.color}02 100%)`
                                                            }}
                                                            styles={{
                                                                body: {
                                                                    padding: '12px',
                                                                    height: '100%',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    justifyContent: 'space-between',
                                                                    overflow: 'hidden'
                                                                }
                                                            }}
                                                        >
                                                            <div style={{
                                                                flex: 1,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'space-between',
                                                                overflow: 'hidden',
                                                                gap: '12px'
                                                            }}>
                                                                <div style={{ overflow: 'hidden' }}>
                                                                    {/* Icon */}
                                                                    <div style={{
                                                                        marginBottom: '12px',
                                                                        textAlign: 'center'
                                                                    }}>
                                                                        <div style={{
                                                                            fontSize: '24px',
                                                                            color: domain.color,
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            height: '36px'
                                                                        }}>
                                                                            {format.icon}
                                                                        </div>
                                                                    </div>

                                                                    {/* Title */}
                                                                    <div style={{ marginBottom: '8px' }}>
                                                                        <Title level={4} style={{
                                                                            margin: 0,
                                                                            fontSize: '15px',
                                                                            lineHeight: '1.2',
                                                                            textAlign: 'center',
                                                                            color: '#262626'
                                                                        }}>
                                                                            {format.name}
                                                                        </Title>
                                                                    </div>

                                                                    {/* Description */}
                                                                    <div style={{
                                                                        padding: '0 4px'
                                                                    }}>
                                                                        <Paragraph style={{
                                                                            fontSize: '12px',
                                                                            color: '#666',
                                                                            margin: 0,
                                                                            lineHeight: '1.4',
                                                                            textAlign: 'center',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            display: '-webkit-box',
                                                                            WebkitLineClamp: 3,
                                                                            WebkitBoxOrient: 'vertical',
                                                                            minHeight: '32px'
                                                                        }}>
                                                                            {format.description}
                                                                        </Paragraph>
                                                                    </div>
                                                                </div>

                                                                {/* Button */}
                                                                <div style={{
                                                                    marginTop: 'auto',
                                                                    paddingTop: '6px'
                                                                }}>
                                                                    <Tag color={domain.color} style={{
                                                                        fontSize: '11px',
                                                                        alignSelf: 'center',
                                                                        textAlign: 'center',
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        width: '100%',
                                                                        flexShrink: 0,
                                                                        padding: '5px 14px',
                                                                        height: '28px',
                                                                        borderRadius: '5px',
                                                                        fontWeight: '500'
                                                                    }}>
                                                                        View Example
                                                                    </Tag>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}

                                <Card title="All Examples" style={{ marginTop: 24 }}>
                                    <Row gutter={[24, 24]}>
                                        <Col xs={24} md={12}>
                                            <Link href={allExamplesUrl} target="_blank">
                                                <Card hoverable style={{ textAlign: 'center' }}>
                                                    <GithubOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: 16 }} />
                                                    <Title level={4}>Browse All Examples</Title>
                                                    <Paragraph>Complete collection of DataPlug examples on GitHub</Paragraph>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Card style={{ textAlign: 'center' }}>
                                                <CodeOutlined style={{ fontSize: '32px', color: '#52c41a', marginBottom: 16 }} />
                                                <Title level={4}>Getting Started</Title>
                                                <Paragraph>Start with the basic examples and work your way up to complex workflows</Paragraph>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>

                            <TabPane tab="API Reference" key="7">
                                <Row gutter={[24, 24]}>
                                    <Col xs={24} md={8}>
                                        <Card title="CloudObject" extra={<ApiOutlined />}>
                                            <Paragraph>
                                                Main entry point for DataPlug operations. Handles initialization and configuration.
                                            </Paragraph>
                                            <Text code>co = CloudObject.from_s3(DataFormat, &quot;s3://...&quot;)</Text>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card title="Preprocessing" extra={<DatabaseOutlined />}>
                                            <Paragraph>
                                                Pre-processes data to create reusable indexes for efficient partitioning.
                                            </Paragraph>
                                            <Text code>co.preprocess(parallel_config=&#123;&quot;backend&quot;: &quot;dask&quot;&#125;)</Text>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card title="Data Slices" extra={<PartitionOutlined />}>
                                            <Paragraph>
                                                Lazy-evaluated partitions that can be serialized for distributed computing.
                                            </Paragraph>
                                            <Text code>data_slices = co.partition(strategy, num_batches)</Text>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>

                        <Divider />

                        <Alert
                            message="Performance Tips"
                            description="Experiment with different chunk sizes, use multiple workers, ensure high-bandwidth connection to S3, and monitor memory usage for optimal performance."
                            type="info"
                            showIcon
                            icon={<SafetyCertificateOutlined />}
                            style={{ marginBottom: 24 }}
                        />

                        <Row gutter={[24, 24]}>
                            <Col xs={24} md={12}>
                                <Link href="https://github.com/CLOUDLAB-URV/dataplug" target="_blank">
                                    <Card hoverable style={{ textAlign: 'center' }}>
                                        <RocketOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: 16 }} />
                                        <Title level={4}>GitHub Repository</Title>
                                        <Paragraph>Official DataPlug repository with source code and examples</Paragraph>
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs={24} md={12}>
                                <Link href={pyrunUrl} target="_blank">
                                    <Card hoverable style={{ textAlign: 'center' }}>
                                        <CodeOutlined style={{ fontSize: '32px', color: '#52c41a', marginBottom: 16 }} />
                                        <Title level={4}>PyRun Platform</Title>
                                        <Paragraph>Cloud platform for executing DataPlug workflows</Paragraph>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Content>

            <Footer style={{ background: '#001529', color: 'white', padding: '40px 50px 20px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                    <Space size="large">
                        <a href="https://github.com/CLOUDLAB-URV/dataplug" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            <GithubOutlined /> DataPlug GitHub
                        </a>
                        <a href="https://github.com/ubenabdelkrim/DataCockpit" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            <DesktopOutlined /> Data Cockpit
                        </a>
                        <a href={pyrunUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            <RocketOutlined /> PyRun Platform
                        </a>
                    </Space>
                    <div style={{ marginTop: 16, color: 'rgba(255,255,255,0.5)' }}>
                        © 2024 DataPlug. All rights reserved.
                    </div>
                </div>
            </Footer>
        </Layout>
    );
} 