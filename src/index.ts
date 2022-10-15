import { GridArea } from "./gridArea";

const gridArea = new GridArea(5, 5);
const { rows } = gridArea.getTemplateStyle();

console.log("Hello World");
console.log(rows);
