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
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/soaps`,
				name: `soaps`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
