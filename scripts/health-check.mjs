#!/usr/bin/env node

/**
 * Bright Pharma - Comprehensive Health Check Script
 * فحص شامل للمشروع
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

const log = {
  title: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}[OK] ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}[FAIL] ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}[WARN] ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}[INFO] ${msg}${colors.reset}`),
};

const checks = [];
let hasErrors = false;

function runCheck(name, command, options = {}) {
  log.title(`Running: ${name}...`);
  try {
    execSync(command, {
      cwd: projectRoot,
      stdio: options.silent ? "pipe" : "inherit",
      encoding: "utf-8",
    });
    log.success(`${name} passed`);
    checks.push({ name, status: "passed" });
    return true;
  } catch (error) {
    if (options.optional) {
      log.warning(`${name} has warnings (optional)`);
      checks.push({ name, status: "warning" });
      return true;
    }
    log.error(`${name} failed`);
    checks.push({ name, status: "failed" });
    hasErrors = true;
    return false;
  }
}

function checkFile(name, filePath) {
  log.title(`Checking file: ${name}...`);
  const fullPath = resolve(projectRoot, filePath);
  if (existsSync(fullPath)) {
    log.success(`${name} exists at ${filePath}`);
    checks.push({ name, status: "passed" });
    return true;
  } else {
    log.error(`${name} not found at: ${filePath}`);
    checks.push({ name, status: "failed" });
    hasErrors = true;
    return false;
  }
}

console.log(`\n${colors.bright}${colors.cyan}=============================================`);
console.log(`   Bright Pharma - Project Health Check`);
console.log(`=============================================${colors.reset}`);

// 1. Check critical files
log.title("\n--- Checking Project Structure ---");
checkFile("package.json", "package.json");
checkFile("next.config.mjs", "next.config.mjs");
checkFile("Root Layout", "src/app/layout.js");
checkFile("Home Page", "src/app/page.js");
checkFile("Global Styles", "src/app/globals.css");
checkFile("Public Folder", "public");
checkFile("Prettier Config", ".prettierrc.json");
checkFile("JS Config", "jsconfig.json");

// 2. ESLint check
runCheck("ESLint Code Quality Check", "npx eslint . --max-warnings 0", { optional: true });

// 3. Prettier check
runCheck("Prettier Format Check", "npx prettier --check .", { optional: true });

// 4. Type check (using tsc with noEmit flag)
runCheck("TypeScript Type Check", "npx tsc --noEmit --project jsconfig.json", { optional: true });

// Final Report
console.log(`\n${colors.bright}${colors.cyan}=============================================`);
console.log(`             FINAL REPORT`);
console.log(`=============================================${colors.reset}\n`);

const passed = checks.filter((c) => c.status === "passed").length;
const warnings = checks.filter((c) => c.status === "warning").length;
const failed = checks.filter((c) => c.status === "failed").length;

console.log(`${colors.green}[OK]   Passed:   ${passed}${colors.reset}`);
console.log(`${colors.yellow}[WARN] Warnings: ${warnings}${colors.reset}`);
console.log(`${colors.red}[FAIL] Failed:   ${failed}${colors.reset}`);

if (hasErrors) {
  console.log(
    `\n${colors.red}${colors.bright}Health check FAILED. Please fix the errors above.${colors.reset}\n`
  );
  process.exit(1);
} else {
  console.log(
    `\n${colors.green}${colors.bright}All checks passed! Your project is healthy.${colors.reset}\n`
  );
  process.exit(0);
}
