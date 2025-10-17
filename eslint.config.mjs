import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",
      // Disable Next.js image optimization warnings
      "@next/next/no-img-element": "off",
      // Disable React hooks dependency warnings
      "react-hooks/exhaustive-deps": "off",
      // Allow any type usage
      "@typescript-eslint/no-explicit-any": "off",
      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "off",
      // Allow require statements
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];

export default eslintConfig;
