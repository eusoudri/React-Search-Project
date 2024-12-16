declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare interface Window {
    bootstrap?: {
      Tooltip: new (element: HTMLElement) => void;
    };
  }
