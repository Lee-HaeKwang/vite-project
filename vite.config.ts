import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // 1. .env 파일이 들어있는 폴더 경로 지정
  const envDir = path.resolve(__dirname, "env");

  // 2. 해당 경로에서 .env + .env.local 등을 불러옴
  const env = loadEnv(mode, envDir);

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@types": path.resolve(__dirname, "src/types"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@theme": path.resolve(__dirname, "src/theme"),
        "@layout": path.resolve(__dirname, "src/layout"),
        "@routes": path.resolve(__dirname, "src/routes"),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env),
    },
    envDir,
  };
});
