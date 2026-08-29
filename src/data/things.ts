export type ThingItem = {
	name: string;
	meta?: string;
	note?: string;
	url?: string;
};

export const things: Record<string, ThingItem[]> = {
	restaurants: [
		{
			name: "Dinner Party",
			meta: "Clinton Hill, Brooklyn",
			note: "the candles",
		},
	],
	records: [{ name: "All I Needed", meta: "Nate Sib", note: "2026" }],
	coffee: [{ name: "Maru", meta: "Williamsburg", note: "Kemi Blend" }],
};

// Categories whose items are titles of a work (album, book, film) and so
// are set in italics; everything else (places, objects, people) is roman.
export const italicCategories = new Set(["records", "books", "films"]);
