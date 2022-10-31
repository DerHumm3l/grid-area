import { GridArea } from "./gridArea";

const gridArea = new GridArea(5, 5);
gridArea.insert(
  { column: 0, row: 0, rowSpan: 1, columnSpan: 1, name: "elem0" },
  { column: 0, row: 1, columnSpan: 2, rowSpan: 1, name: "elem1" },
  { column: 0, row: 2, columnSpan: 3, rowSpan: 1, name: "elem2" },
  { column: 2, row: 0, columnSpan: 2, rowSpan: 2, name: "elem3" },
  { column: 1, row: 0, columnSpan: 1, rowSpan: 2, name: "elem4" }
);

const arr = gridArea.getArea();
console.dir(arr);
