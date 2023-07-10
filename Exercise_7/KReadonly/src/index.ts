import { DeepReadonly } from "./DeepReadonly";
import { Person } from "./Person";


  type ReadonlyPerson = DeepReadonly<Person>;

  let a: ReadonlyPerson = {name: "123", address:{city: "456"}};

//   a.name = "abc" // 报错

  console.log(a)
