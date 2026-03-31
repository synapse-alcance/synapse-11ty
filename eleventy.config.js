import { readFileSync } from "node:fs";
const site = JSON.parse(readFileSync("./src/_data/site.json", "utf-8"));

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	eleventyConfig.addPassthroughCopy({
		"src/assets/css": site.path.prefix + site.path.assets + "/css",
		"src/assets/images": site.path.prefix + site.path.assets + "/images",
		"src/assets/js": site.path.prefix + site.path.assets + "/js",
		"src/assets/webfonts": site.path.prefix + site.path.assets + "/webfonts"
	});
}