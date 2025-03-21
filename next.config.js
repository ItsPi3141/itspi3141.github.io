const nextConfig = {
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

module.exports = nextConfig;
