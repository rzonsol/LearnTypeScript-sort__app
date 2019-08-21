export abstract class Sorter {
	abstract length: number;
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swipe(leftIndex: number, rightIndex: number): void;

	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swipe(j, j + 1);
				}
			}
		}
	}
}
