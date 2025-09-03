import {
  UploadOutlined,
  BarChartOutlined,
  SettingOutlined,
  ApiOutlined,
  SearchOutlined,
  DesktopOutlined,
  CloudOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

export interface DataCockpitFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DataCockpitWorkflow {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const dataCockpitFeatures: DataCockpitFeature[] = [
  {
    icon: <UploadOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Upload & Browse',
    description: 'Upload local files directly into any S3 bucket and browse existing datasets from AWS Open Data Registry'
  },
  {
    icon: <SearchOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    title: 'Explore Collections',
    description: 'Explore curated public and Metaspace collections for scientific data discovery'
  },
  {
    icon: <BarChartOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
    title: 'Performance Benchmarking',
    description: 'Run benchmarks across configurable batch sizes to discover optimal throughput'
  },
  {
    icon: <SettingOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
    title: 'One-Click Partitioning',
    description: 'Partition a variety of scientific data types into chunks or batches with one click'
  },
  {
    icon: <DesktopOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />,
    title: 'Jupyter Integration',
    description: 'Integrate seamlessly into Jupyter notebooks for elastic, parallel workloads'
  }
];

export const dataCockpitWorkflow: DataCockpitWorkflow[] = [
  {
    title: 'Upload',
    description: 'Upload your local files directly into any S3 bucket',
    icon: <UploadOutlined />
  },
  {
    title: 'Browse',
    description: 'Browse existing buckets or public datasets from AWS Open Data Registry',
    icon: <SearchOutlined />
  },
  {
    title: 'Benchmark',
    description: 'Run benchmarks across configurable batch sizes to find optimal throughput',
    icon: <BarChartOutlined />
  },
  {
    title: 'Process & Partition',
    description: 'Process & partition your data with one click, displaying progress entirely in-notebook',
    icon: <SettingOutlined />
  },
  {
    title: 'Retrieve Slices',
    description: 'Retrieve partitions via get_data_slices() for downstream processing',
    icon: <ApiOutlined />
  }
];

export const dataCockpitInstallation = 'pip install cloud_data_cockpit';

export const dataCockpitInstallationWithExtras = 'pip install cloud_data_cockpit[geospatial]'; 