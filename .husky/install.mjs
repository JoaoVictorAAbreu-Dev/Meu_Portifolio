import { existsSync } from "node:fs";
import { execSync } from "node:child_process";

if (existsSync(".git")) {
  execSync("npx husky", { stdio: "inherit" });
}
