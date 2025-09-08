import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'teste-tecnico-be220',
  webDir: 'www',
  plugins: {
    Keyboard: { resizeOnFullScreen: false },
  }
};

export default config;
