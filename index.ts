// you passed a args in any function and that function will returned whatever is passed

function identity(args: number): number {
  return args;
}

// but the problem in any type is it will return any of type
function identity_(args: any): any {
  return args;
}

function identity_1<T>(args: T): T {
  return args;
}

console.log(identity_1<string>("122"));
console.log(identity_1<number>(122));

const mixedArrayType: (string | number)[] = ["hello", 10];

class Vehical {
  public name: string;

  constructor(n: string) {
    this.name = n;
  }

  printName() {
    console.log(this.name);
  }
}

const a = new Vehical("honda");
a.printName();
