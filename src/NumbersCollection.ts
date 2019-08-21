import { SortedAble } from './Sorter';

export class NumberCollection implements SortedAble {
	constructor(public data: number[]) {
		this.data = data;
	}

	swipe(leftIndex: number, rightIndex: number): void {
		const temp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = temp;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	get length(): number {
		return this.data.length;
	}
}
