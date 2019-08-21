import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([11, 3, -4, 1]);
numberCollection.sort();
console.log(numberCollection.data);

const strings = new CharactersCollection('xdfca');
strings.sort();
console.log(strings.data);

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(20);
linkedList.add(100);
linkedList.add(-200);

linkedList.sort();
linkedList.print();
