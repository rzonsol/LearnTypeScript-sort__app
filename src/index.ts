import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([11, 3, -4, 1]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const strings = new CharactersCollection('xdfca');
const sorterString = new Sorter(strings);
sorterString.sort();
console.log(strings.data);
