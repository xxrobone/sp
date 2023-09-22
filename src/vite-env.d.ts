/// <reference types="vite/client" />

declare module 'hover-effect' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const HoverEffect: any; 
    export default HoverEffect;
  }

  // had to add for css types
  declare module "*.styles" {
    const value: {[key: string]: string};
    export default value;
  }