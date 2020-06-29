import Set from "./Set.js";
const set = new Set();
const set2 = new Set();
set.add("Rafa");
set.add("Martina");
set2.add("Rafaela");
set2.add("Cata");
set2.add("Mari");
set2.add("Martina");

console.log(set.union(set2));
