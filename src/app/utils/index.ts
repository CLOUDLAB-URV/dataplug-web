import { COLORS, GRADIENTS } from '../config/constants';

export const getGradientStyle = (gradient: keyof typeof GRADIENTS) => ({
  background: GRADIENTS[gradient]
});

export const getColorStyle = (color: keyof typeof COLORS) => ({
  color: COLORS[color]
});

export const getBackgroundColorStyle = (color: keyof typeof COLORS) => ({
  backgroundColor: COLORS[color]
});

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

// Utility function to handle asset paths for GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dataplug-web' : '';
  return `${basePath}${path}`;
}; 