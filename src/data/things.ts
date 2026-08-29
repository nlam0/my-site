export type ThingItem = {
	name: string;
	note?: string;
	url?: string;
};

export const things: Record<string, ThingItem[]> = {
	restaurants: [
		{ name: "a place worth the wait, and for what" },
		{ name: "the diner you always end up back at" },
		{ name: "somewhere you took someone once and never forgot" },
		{ name: "the order you get without looking at the menu" },
		{ name: "a place that's since closed" },
	],
	records: [
		{ name: "an album on repeat this year" },
		{ name: "artist, album (year)" },
		{ name: "something loud" },
		{ name: "the record that started it" },
	],
	objects: [
		{ name: "something inherited" },
		{ name: "a tool you reach for daily" },
	],
	books: [
		{ name: "a book you reread" },
		{ name: "something you're mid-way through" },
		{ name: "a book you'd give away" },
	],
	films: [
		{ name: "a film you rewatch every winter" },
		{ name: "one you still think about" },
	],
	buildings: [
		{ name: "a building you think about often" },
		{ name: "a favorite corner of the city" },
	],
	"people on the internet": [
		{ name: "a blog you check too often", url: "https://example.com" },
		{ name: "a newsletter worth the inbox space" },
		{ name: "someone whose taste you trust", url: "https://example.com" },
	],
	links: [
		{ name: "an old bookmark worth keeping", url: "https://example.com" },
		{ name: "something someone sent you", url: "https://example.com" },
		{ name: "a tab that's been open for weeks" },
		{ name: "a tool you'd recommend", url: "https://example.com" },
	],
	"things i want": [
		{ name: "something impractical" },
		{ name: "more time" },
	],
};
