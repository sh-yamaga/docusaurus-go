import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "Go Tips",
	tagline: "webエンジニア めんだこの技術部屋",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://go.tech.unit-code.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "sh-yamaga", // Usually your GitHub org/user name.
	projectName: "docusaurus-go", // Usually your repo name.

	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "ja",
		locales: ["ja"],
	},

	presets: [
		[
			"@docusaurus/preset-classic",
			{
				// Debug defaults to true in dev, false in prod
				debug: undefined,
				// Will be passed to @docusaurus/theme-classic.
				theme: {
					customCss: ["./src/css/custom.css"],
				},
				// Will be passed to @docusaurus/plugin-content-docs (false to disable)
				docs: {
					sidebarPath: "./sidebars.ts",
					showLastUpdateTime: true,
				},
				// Will be passed to @docusaurus/plugin-content-blog (false to disable)
				blog: {
					showReadingTime: true,
				},
				// Will be passed to @docusaurus/plugin-content-pages (false to disable)
				pages: {},
				// Will be passed to @docusaurus/plugin-sitemap (false to disable)
				sitemap: {},
				// Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
				gtag: {
					trackingID: "G-9487XNRNFL",
					anonymizeIP: true,
				},
				// Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)
				// googleTagManager: {},
				// DEPRECATED: Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
				// googleAnalytics: {},
			},
		],
	],

	// plugins: [[]],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "GoTips",
			logo: {
				alt: "めんだこ",
				src: "img/mendako.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tipsSidebar",
					position: "left",
					label: "Tips",
				},
				{
					type: "docSidebar",
					sidebarId: "effectiveGoSidebar",
					position: "left",
					label: "Effective Go",
				},
				{
					href: "https://github.com/sh-yamaga/docusaurus-go",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Community",
					items: [
						{
							label: "Twitter",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
				{
					title: "Other Docs",
					items: [
						{
							label: "tsx.tech.unit-code.com",
							href: "https://tsx.tech.unit-code.com",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} unit-code.com`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
