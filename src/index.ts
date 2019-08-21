import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([11, 3, -4, 1]);
// const sorter = new Sorter(numberCollection);
numberCollection.sort();
console.log(numberCollection.data);

const strings = new CharactersCollection('xdfca');
// const sorterString = new Sorter(strings);
strings.sort();
console.log(strings.data);

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(20);
linkedList.add(100);
linkedList.add(-200);

// const linkedListSorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
