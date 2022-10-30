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

      const inserted = this.insertElement(elem);

      if (inserted) {
        this.elements.push(elem);
      } else {
        this.rollback(elem);
      }
    });
  }

  getArea() {
    return this.area;
  }

  getTemplateStyle(): GridAreaStyle {
    return { areas: "a", columns: "b", rows: "c" };
  }

  protected scaffold() {
    this.area = Array.from({ length: this.rowCount }, () =>
      Array.from({ length: this.columnCount }, () => ".")
    );
  }

  protected rollback(newElem: GridElement) {
    for (const row of this.area) {
      for (let elem of row) {
        if (elem === newElem.name) {
          elem = ".";
        }
      }
    }
  }

  protected insertElement(elem: GridElement) {
    const colEnd = elem.column + elem.columnSpan;
    const rowEnd = elem.row + elem.rowSpan;

    for (let col = elem.column; col < colEnd; col++) {
      for (let row = elem.row; row < rowEnd; row++) {
        if (this.area[row] || this.area[col][row]) {
          continue;
        }

        if (this.area[row][col] !== ".") {
          return false;
        }

        this.area[row][col] = elem.name;
      }
    }

    return true;
  }
}
