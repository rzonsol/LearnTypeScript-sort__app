export interface SortedAble {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swipe(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
	constructor(public collection: SortedAble) {
		this.collection = collection;
	}

	sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swipe(j, j + 1);
				}
			}
		}
	}
}
