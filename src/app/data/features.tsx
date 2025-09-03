import {
  CloudOutlined,
  DatabaseOutlined,
  PartitionOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  RocketOutlined
} from '@ant-design/icons';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <CloudOutlined style={{ fontSize: '36px', color: '#3b82f6', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' }} />,
    title: 'Cloud-Native',
    description: 'Specifically targets cold raw data in object storage (e.g. Amazon S3). Exploits S3 byte-range reads for parallel high-bandwidth access.'
  },
  {
    icon: <SafetyOutlined style={{ fontSize: '36px', color: '#10b981', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' }} />,
    title: 'Read-Only Processing',
    description: 'Pre-processes data in read-only fashion. Indexes and metadata stored decoupled from raw objects, keeping cold data as-is.'
  },
  {
    icon: <RocketOutlined style={{ fontSize: '36px', color: '#8b5cf6', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))' }} />,
    title: 'Zero-Cost Partitioning',
    description: 'Lazy-evaluated partitions with zero-cost re-partitioning. Serializable for distributed computing environments like PySpark, Dask, or Ray.'
  }
]; 