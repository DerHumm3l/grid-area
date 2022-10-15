import { GridAreaStyle } from "./gridAreaStyle";

export class GridArea {
  protected columnCount: number = 0;
  protected rowCount: number = 0;

  constructor(columnCount: number, rowCount: number) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
  }

  insert(...elems: any) {}

  getTemplateStyle(): GridAreaStyle {
    return { areas: "a", columns: "b", rows: "c" };
  }

  protected insertElement(elem: any) {}
}
