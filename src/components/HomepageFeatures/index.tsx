import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "公式ドキュメントベース",
		Svg: require("@site/static/img/Go-Logo_Aqua.svg").default,
		description: <>Go の公式ドキュメントを参考にした実装例を紹介しています。</>,
	},
	{
		title: "公式ドキュメントの翻訳",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>Docusaurusにより、より読みやすい形でドキュメントを提供しています。</>
		),
	},
	{
		title: "公式ドキュメントの補足",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>翻訳したドキュメントを読み解くための補足を合わせて提供しています。</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props) => (
						<Feature key={props.title} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
