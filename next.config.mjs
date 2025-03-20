/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['plus.unsplash.com', 'images.unsplash.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'aceternity.com',
			},
		],
		unoptimized: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.glb$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/models/',
					outputPath: 'static/models/',
					name: '[name].[hash].[ext]',
				},
			},
		});

		return config;
	},
};

export default nextConfig;
