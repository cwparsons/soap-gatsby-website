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
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'GTM-PFPS5CL',
				includeInDevelopment: true
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: 'static/images/icon.png',
				name: `Soaps by Mami.`,
				short_name: `Soaps by Mami.`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#583894`,
				display: `standalone`
			}
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
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
