import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "めんだこの技術部屋",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://tech.unit-code.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "yamaga-sh", // Usually your GitHub org/user name.
	projectName: "tech-blog", // Usually your repo name.

	onBrokenLinks: "throw",
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
			title: "めんだこの技術部屋",
			logo: {
				alt: "mendako",
				src: "img/mendako.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "goSidebar",
					position: "left",
					label: "Go言語",
				},
				{
					type: "docSidebar",
					sidebarId: "typescriptSidebar",
					position: "left",
					label: "TypeScript",
				},
				{
					type: "docSidebar",
					sidebarId: "reactSidebar",
					position: "left",
					label: "React",
				},
				{
					type: "docSidebar",
					sidebarId: "awsSidebar",
					position: "left",
					label: "AWS",
				},
				{
					type: "docSidebar",
					sidebarId: "architectureSidebar",
					position: "left",
					label: "Software Architecture",
				},
				{
					href: "https://github.com/sh-yamaga",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/sh-yamaga",
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
