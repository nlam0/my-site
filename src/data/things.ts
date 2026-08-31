export type ThingItem = {
	name: string;
	meta?: string;
	note?: string;
	caption?: string;
	url?: string;
	image?: string;
	color?: string;
};

export const things: Record<string, ThingItem[]> = {
	restaurants: [
		{
			name: "Dinner Party",
			meta: "Clinton Hill, Brooklyn",
			caption: "the candles",
			image: "/images/things/dinner-party.jpg",
		},
		{
			name: "Bong",
			meta: "Crown Heights, Brooklyn",
		},
	],
	records: [
		{
			name: "All I Needed",
			meta: "Nate Sib",
			note: "2026",
			caption: "Reborn track 7",
			image: "/images/things/all-i-needed.jpg",
		},
	],
	books: [
		{
			name: "The Topeka School",
			meta: "Ben Lerner",
			note: "2019",
		},
		{
			name: "Dictee",
			meta: "Theresa Hak Kyung Cha",
			note: "1982",
			color: "#c1595a",
			caption: "postmodernity",
			image: "/images/things/dictee.jpg",
		},
	],
	coffee: [
		{
			name: "Maru",
			meta: "Williamsburg",
			note: "Kemi Blend",
			caption: "brought to you by LA",
			image: "/images/things/maru.jpg",
		},
		{
			name: "Fa San",
			meta: "Lower East Side",
			note: "red bean memory",
		},
	],
};

// Categories whose items are titles of a work (album, book, film) and so
// are set in italics; everything else (places, objects, people) is roman.
export const italicCategories = new Set(["records", "books", "films"]);
