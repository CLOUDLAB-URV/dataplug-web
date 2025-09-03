import { ExperimentOutlined } from '@ant-design/icons';

export interface Domain {
  title: string;
  color: string;
  formats: string[];
  description: string;
}

export const domains: Domain[] = [
  {
    title: 'Genomics',
    color: '#1890ff',
    formats: ['FASTA', 'FASTQ', 'VCF'],
    description: 'DNA/RNA sequencing data processing'
  },
  {
    title: 'Geospatial',
    color: '#52c41a',
    formats: ['LiDAR', 'Cloud-Optimized Point Cloud', 'COG'],
    description: 'Spatial data and point clouds'
  },
  {
    title: 'Metabolomics',
    color: '#722ed1',
    formats: ['ImzML'],
    description: 'Imaging mass spectrometry data'
  },
  {
    title: 'Generic',
    color: '#fa8c16',
    formats: ['CSV', 'Raw Text'],
    description: 'Standard data formats'
  },
  {
    title: 'Astronomics',
    color: '#eb2f96',
    formats: ['MeasurementSet'],
    description: 'Astronomical measurement data'
  }
]; 