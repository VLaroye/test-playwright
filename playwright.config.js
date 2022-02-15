// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'
    // default 'list' when running locally
    reporter: process.env.CI ? 'github' : 'list',
    retries: 1,
    use: {
        trace: 'on-first-retry',
    },
};
module.exports = config;