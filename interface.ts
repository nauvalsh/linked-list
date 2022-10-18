export interface INodeLL {
  data: number;
  next: any;
}

export interface ILinkedList {
  head: INodeLL | null;
  size: number;

  addAt(data: number, index: number): boolean;
  addFirst(data: number): boolean;
  addLast(data: number): boolean;
  getAt(index: number): number | null;
  removeAt(index: number): boolean;
  printAll(): void;
}
