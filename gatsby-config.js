const netlifyCmsPaths = {
	resolve: `gatsby-plugin-netlify-cms-paths`,
	options: {
		cmsConfig: `/static/admin/config.yml`
	}
};

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
		netlifyCmsPaths,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/soaps`,
				name: `soaps`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/images`,
				name: `images`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [netlifyCmsPaths]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-yaml`
	]
};
