interface IPageConfig {
	url: string;
	[x: string]: string;
}

interface IPagesConfig {
	[x: string]: IPageConfig;
}

interface IConfig {
	pages: IPagesConfig;
}
