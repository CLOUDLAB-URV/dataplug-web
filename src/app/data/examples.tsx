import {
    FileTextOutlined,
    CloudOutlined,
    ExperimentOutlined,
    DatabaseOutlined,
    RocketOutlined
} from '@ant-design/icons';

export interface FormatExample {
    name: string;
    description: string;
    githubUrl: string;
    icon: React.ReactNode;
}

export interface DomainExamples {
    title: string;
    color: string;
    formats: FormatExample[];
}

export const formatExamples: DomainExamples[] = [
    {
        title: 'Genomics',
        color: '#1890ff',
        formats: [
            {
                name: 'FASTA',
                description: 'DNA/RNA sequences',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/fasta_example.py',
                icon: <FileTextOutlined />
            },
            {
                name: 'FASTQ',
                description: 'Sequencing reads with quality scores',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/fastqgz_example.py',
                icon: <FileTextOutlined />
            },
            {
                name: 'VCF',
                description: 'Variant Call Format',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/vcf_example.py',
                icon: <FileTextOutlined />
            }
        ]
    },
    {
        title: 'Geospatial',
        color: '#52c41a',
        formats: [
            {
                name: 'LiDAR',
                description: 'Point cloud data',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/lidar_example.py',
                icon: <CloudOutlined />
            },
            {
                name: 'Cloud-Optimized Point Cloud',
                description: 'Optimized point cloud formats',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/copc_example.py',
                icon: <CloudOutlined />
            },
            {
                name: 'COG',
                description: 'Cloud Optimized GeoTIFF',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/cog_example.py',
                icon: <CloudOutlined />
            }
        ]
    },
    {
        title: 'Metabolomics',
        color: '#722ed1',
        formats: [
            {
                name: 'ImzML',
                description: 'Imaging mass spectrometry',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/imzml_continuous_example.py',
                icon: <ExperimentOutlined />
            }
        ]
    },
    {
        title: 'Generic',
        color: '#fa8c16',
        formats: [
            {
                name: 'CSV',
                description: 'Comma-separated values',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/csv_example.py',
                icon: <DatabaseOutlined />
            },
            {
                name: 'Raw Text',
                description: 'Plain text files',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/csv_example.py',
                icon: <DatabaseOutlined />
            }
        ]
    },
    {
        title: 'Astronomics',
        color: '#eb2f96',
        formats: [
            {
                name: 'MeasurementSet',
                description: 'Astronomical measurement data',
                githubUrl: 'https://github.com/CLOUDLAB-URV/dataplug/blob/master/examples/ms_example.py',
                icon: <RocketOutlined />
            }
        ]
    }
];

export const allExamplesUrl = 'https://github.com/CLOUDLAB-URV/dataplug/tree/master/examples'; 