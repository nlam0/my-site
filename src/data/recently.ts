export type RecentItem = {
	verb: string;
	title: string;
	href?: string;
	descriptor?: string;
	date?: string;
};

export const recently: RecentItem[] = [
	{
		verb: "wrote",
		title: "title of an essay or post",
		href: "https://example.com",
		date: "01.15.2026",
	},
	{
		verb: "wrote",
		title: "another piece of writing",
		href: "https://example.com",
		date: "09.08.2025",
	},
	{
		verb: "wrote",
		title: "a third piece worth linking",
		href: "https://example.com",
		date: "03.02.2025",
	},
	{
		verb: "built",
		title: "project one",
		href: "https://example.com",
		descriptor: "a short descriptor of the project, written in apposition",
		date: "04.12.2024",
	},
	{
		verb: "designed",
		title: "project two",
		href: "https://example.com",
		descriptor: "another descriptor, naming who it was for or what it explored",
		date: "09.03.2023",
	},
	{
		verb: "shipped",
		title: "project three",
		href: "https://example.com",
		descriptor: "a third descriptor, kept plain and specific",
		date: "01.22.2022",
	},
];
