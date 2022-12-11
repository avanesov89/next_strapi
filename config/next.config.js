const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.yoursite.com"
  : "https://localhost:1337";

	module.exports = {
		images: {
			remotePatterns: [
				{
					protocol: 'http',
					hostname: 'localhost:1337',
				},
			],
			allowFutureImage: true,
		},
	}