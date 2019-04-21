import { graphql } from 'gatsby';

export const DictionarySchema = graphql`
	fragment ContentYamlSchema on ContentYaml {
		homepageTitle
		headerTitle
		headerSubtitle
		datePrefixLabel
	}
`;

export const SiteSchema = graphql`
	fragment SiteSchema on Site {
		siteMetadata {
			title
			author
			description
			siteUrl
		}
	}
`;

export const SoapPostSchema = graphql`
	fragment SoapPostSchema on MarkdownRemark {
		id
		excerpt(pruneLength: 160)
		html
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
	}
`;

export const SoapPosts = graphql`
	fragment SoapPosts on Query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					...SoapPostSchema
				}
			}
		}
	}
`;
