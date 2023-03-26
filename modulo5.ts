/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
    // TODO Define the properties
  private _items:number;

  private _sortOrder:"crescente"|"decrescente";

    // TODO Define the constructor
  constructor (items:number, sortOrder:"crescente"|"decrescente"){
    this._items=items;
    this._sortOrder=sortOrder;
  }

    // TODO Define the accessors
  get items(){
    return this._items;
  }

  set items(items){
    this._items=items;
  }

  get sortOrder(){
    return this._sortOrder;
  }

  set sortOrder(sortOrder){
    this._sortOrder=sortOrder;
  }
    // TODO Define the methods
private sortDescending = (a: number, b: number) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0; }
}

  private sortAscending = (a: number, b: number) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

  buildArray(items: number, sortOrder: 'crescente' | 'decrescente'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this.items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (sortOrder === 'crescente') {
        return randomNumbers.sort(this.sortAscending);
    } else {
        return randomNumbers.sort(this.sortDescending);
    }
  }
  
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'crescente');
let testArray2 = new BuildArray(8, 'decrescente');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
