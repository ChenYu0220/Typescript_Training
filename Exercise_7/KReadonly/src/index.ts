import { DeepReadonly } from "./DeepReadonly";

interface Person {
    name: string;
    address: {
      city: string;
    };
  }
  type ReadonlyPerson = DeepReadonly<Person>;