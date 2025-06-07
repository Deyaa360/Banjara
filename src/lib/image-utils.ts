/**
 * Utility function to handle image paths for GitHub Pages deployment
 * Adds the base path when in production
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === 'production') {
    return `/Banjara/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}

/**
 * Get the base path for the application
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/Banjara' : '';
}