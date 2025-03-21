import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["three"],
	experimental: {
		turbo: {
			rules: {
				"*.glsl": {
					loaders: ["raw-loader"],
					as: "*.js",
				},
			},
		},
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.glsl$/,
			use: ["raw-loader"],
		});
		return config;
	},
};

export default nextConfig;
