import {
  CodeOutlined,
  CloudServerOutlined,
  ThunderboltOutlined,
  MonitorOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  CloudOutlined,
  RocketOutlined
} from '@ant-design/icons';

export interface PyRunFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PyRunIntegration {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const pyrunFeatures: PyRunFeature[] = [
  {
    icon: <CodeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Effortless Execution',
    description: 'Write standard Python and run it seamlessly in the cloud. PyRun automatically handles server management, scaling, and resource optimization.'
  },
  {
    icon: <CloudServerOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    title: 'Integrated & Automated',
    description: 'VS Code-like web interface with automatic credential management. Data Cockpit handles all AWS/S3 configurations, so you only focus on data processing.'
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
    title: 'Scalable & Versatile',
    description: 'Built-in, first-class support for powerful frameworks like Lithops (FaaS) and Dask. Scale from simple scripts to massively parallel computations.'
  },
  {
    icon: <MonitorOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
    title: 'Real-Time Monitoring',
    description: 'Gain instant insights into job performance with detailed metrics for CPU, memory, disk, network usage, and task execution timelines.'
  }
];

export const pyrunIntegration: PyRunIntegration[] = [
  {
    title: 'DataPlug Integration',
    description: 'Seamless integration with DataPlug for efficient data partitioning and processing',
    icon: <DatabaseOutlined />
  },
  {
    title: 'Data Cockpit Interface',
    description: 'Built-in Data Cockpit widget with automatic credential management for seamless data access',
    icon: <DesktopOutlined />
  },
  {
    title: 'Cloud-Native Execution',
    description: 'Execute DataPlug workflows directly in the cloud with automatic scaling',
    icon: <CloudOutlined />
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Monitor DataPlug and Data Cockpit operations with detailed performance metrics',
    icon: <MonitorOutlined />
  }
];

export const pyrunUrl = 'https://pyrun.cloud/';
export const pyrunDescription = 'Effortless Cloud Computing for Python. Experience true Serverless Python. Run scalable workloads for data processing, AI, and distributed computing without managing complex cloud infrastructure. Data Cockpit automatically obtains credentials for DataPlug to access your data, so you can focus purely on processing data without any configuration overhead.'; 