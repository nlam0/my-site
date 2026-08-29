export type RecentItem = {
	verb: string;
	title: string;
	href?: string;
	prefix?: string;
	descriptor?: string;
	descriptorLinkText?: string;
	descriptorHref?: string;
	suffix?: string;
	date?: string;
};

export const recently: RecentItem[] = [
	{
		verb: "completed",
		prefix: "a BA in",
		title: "Urban Studies",
		href: "https://bulletin.columbia.edu/columbia-college/departments-instruction/urban-studies/",
		suffix: "at Columbia University",
		date: "05.20.2026",
	},
	{
		verb: "wrote",
		title: "Garden Song",
		descriptor: "a poem for Quarto Magazine",
		descriptorLinkText: "Quarto",
		descriptorHref: "https://quartomagazine.com/poetry/2026/3/2/garden-song-by-nick-lam-ac5sg",
		date: "03.09.2026",
	},
	{
		verb: "created",
		title: "breath",
		href: "/breath-zine.pdf",
		descriptor: "a zine for Columbia's Histories of the Bronx course",
		date: "12.14.2025",
	},
];
