import path from "path";
import { fileURLToPath } from "url";

// `@tailwindcss/postcss` defaults `base` to `process.cwd()`.
// In this repo it ends up being `/Users/weblib/Desktop`, which breaks
// module resolution for `tailwindcss`. Pin it to this project directory.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: projectRoot,
    },
  },
};

export default config;
