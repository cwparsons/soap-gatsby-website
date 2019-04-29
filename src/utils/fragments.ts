import { graphql } from 'gatsby';

export interface IContentYaml {
	datePrefixLabel: string;
	headerSubtitle: string;
	headerTitle: string;
	homepageTitle: string;
}

export const ContentYamlSchema = graphql`
	fragment ContentYamlSchema on ContentYaml {
		datePrefixLabel
		headerSubtitle
		headerTitle
		homepageTitle
	}
`;

export interface ISiteSchema {
	author: string;
	descriptoin: string;
	siteUrl: string;
	title: string;
}

export const SiteSchema = graphql`
	fragment SiteSchema on Site {
		siteMetadata {
			author
			description
			siteUrl
			title
		}
	}
`;

export interface ISoapRecipe {
	fields: {
		slug: string;
	};
	frontmatter: {
		date: string;
		image: {
			childImageSharp: {
				fluid: any;
			};
		};
		subtitle: string;
		title: string;
	};
	excerpt: string;
	html: string;
	id: string;
}

export const SoapRecipeSchema = graphql`
	fragment SoapRecipeSchema on MarkdownRemark {
		fields {
			slug
		}
		frontmatter {
			date(formatString: "MMMM Do, YYYY")
			image {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			subtitle
			title
		}
		excerpt(pruneLength: 160)
		html
		id
	}
`;

export const SoapRecipes = graphql`
	fragment SoapRecipes on Query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					...SoapRecipeSchema
				}
			}
		}
	}
`;
