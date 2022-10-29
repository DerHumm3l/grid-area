import { GridAreaStyle } from "./gridAreaStyle";

export class GridArea {
  protected columnCount: number = 0;
  protected rowCount: number = 0;
  protected area!: string[][];

  constructor(columnCount: number, rowCount: number) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;

    this.scaffold();
  }

  insert(...elems: any) {}

  getTemplateStyle(): GridAreaStyle {
    return { areas: "a", columns: "b", rows: "c" };
  }

  protected scaffold() {
    this.area = Array.from({ length: this.rowCount }, () =>
      Array.from({ length: this.columnCount }, () => ".")
    );
  }

  protected insertElement(elem: any) {}
}
