import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
	constructor(public data: string) {
		super();
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
		);
	}
	swipe(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split('');
		const temp = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = temp;
		this.data = characters.join('');
	}
	get length() {
		return this.data.length;
	}
}
