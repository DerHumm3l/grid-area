import { GridAreaStyle } from "./gridAreaStyle";
import { GridElement } from "./gridElement";

export class GridArea {
  protected columnCount: number = 0;
  protected rowCount: number = 0;
  protected elements: GridElement[] = [];
  protected area!: string[][];

  constructor(columnCount: number, rowCount: number) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;

    this.scaffold();
  }

  insert(...elems: GridElement[]) {
    elems.forEach((elem) => {
      if (!elem) {
        return;
      }

      // validate elem

      this.insertElement(elem);
      this.elements.push(elem);
    });
  }

  getTemplateStyle(): GridAreaStyle {
    return { areas: "a", columns: "b", rows: "c" };
  }

  protected scaffold() {
    this.area = Array.from({ length: this.rowCount }, () =>
      Array.from({ length: this.columnCount }, () => ".")
    );
  }

  protected insertElement(elem: GridElement) {
    const colEnd = elem.column + elem.columnSpan;
    const rowEnd = elem.row + elem.rowSpan;

    for (let col = elem.column; col < colEnd; col++) {
      for (let row = elem.row; row < rowEnd; row++) {
        this.area[row][col] = elem.name;
      }
    }
  }
}
