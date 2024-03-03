interface Lengthy {
  length: number;
}
function countDescription<T extends Lengthy>(element: T): [T, string] {
  let descrition = `got no value`;
  if (element.length === 1) {
    descrition = `got 1 element`;
  } else if (element.length > 1) {
    descrition = `got  ` + element.length + ` element`;
  }

  return [element, descrition];
}

console.log(countDescription([`Coooking`, `STLOO WOO`]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value of ` + obj[key];
}

extractAndConvert({ name: `robin` }, `name`);

class DataStorage<T extends string | number | object> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem(`NOKIA`);
textStorage.addItem(`PATAYA`);
textStorage.removeItem(`NOKIA`);
console.log(textStorage.getItems());

const item = { name: `Robin`, age: 21 };
const numberStorage = new DataStorage<number>();
const objStorage = new DataStorage<object>();

objStorage.addItem(item);
objStorage.addItem({ name: `Hapiz soib`, age: 24 });
objStorage.removeItem(item);
console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  name: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = name;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = [`Robin`, `Hafiz soib`];
