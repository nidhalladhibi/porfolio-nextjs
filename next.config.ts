import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};


export default nextConfig;
