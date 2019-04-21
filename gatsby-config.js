module.exports = {
	siteMetadata: {
		title: `Soaps by Mami`,
		author: `Christopher Parsons`,
		description: `A sample of Mami's soaps.`,
		siteUrl: `https://chrisandmami.com/`,
		social: {
			twitter: `cwlparsons`
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/soaps`,
				name: `soaps`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`
	]
};
