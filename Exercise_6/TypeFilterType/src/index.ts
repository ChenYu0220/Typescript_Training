import { KFilter } from "./Filter";

type Fruit = 'apple'|'banana'|'orange';
type Fruits = ['apple','banana','orange','cherry'];
type OnlyFruits = KFilter<Fruits,Fruit>;
