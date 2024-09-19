const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Disable turbo to make mixpanel work
        turbo: false
    }
};
 
module.exports = withNextIntl(nextConfig);