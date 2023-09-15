# React + TypeScript + Vite
## Framer-motion, Scss (sass), Styled Components

### Issues

1. Hover-effect library not working with typescript 
Fix: install vite-plugin-dts
added the file declaring the module now working. 
Also added configuration to include TypeScript declaration files
like so: "include": ["src/*.d.ts"]