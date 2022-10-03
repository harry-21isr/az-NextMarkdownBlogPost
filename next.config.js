/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {

	if (phase == PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			swcMinify: true,

			env: {
				mongodb_username: "harry",
				mongodb_password: "THEWANTED-20",
				mongodb_clustername: "cluster0",
				mongodb_database: "contact",
			},
		};
	}
  return {
    env: {
      mongodb_username: "harry",
      mongodb_password: "THEWANTED-20",
      mongodb_clustername: "cluster0",
      mongodb_database: "contact",
    },
  }
};

/* here dev or production variables will be replace by next js */

module.exports = nextConfig;
