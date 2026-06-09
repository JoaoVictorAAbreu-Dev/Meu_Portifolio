import { execSync } from "node:child_process";

const repositoryName =
  process.env.GITHUB_REPOSITORY_NAME || process.env.npm_package_name || "site-portifolio";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER || "JoaoVictorAAbreu-Dev";

const env = {
  ...process.env,
  VITE_BASE_PATH: `/${repositoryName}/`,
  VITE_SITE_URL: `https://${repositoryOwner}.github.io/${repositoryName}`,
};

const command = process.platform === "win32" ? "npm.cmd run build" : "npm run build";

try {
  execSync(command, {
    env,
    stdio: "inherit",
  });
} catch (error) {
  process.exit(error.status ?? 1);
}
