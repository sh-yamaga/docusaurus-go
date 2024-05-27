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
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

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
			],
			copyright: `Copyright © ${new Date().getFullYear()} unit-code`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
