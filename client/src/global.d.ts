// For CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// For fonts
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';

// For other files
declare module '*.mp4';
declare module '*.webm';
declare module '*.json';
declare module '*.pdf';