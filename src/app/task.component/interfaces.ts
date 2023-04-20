export interface IResultArray {
  firstCount: number;
  secondCount: number;
  result: number | string;
  selection: SelectionValue;
}
export type SelectionValue = 'perimeter' | 'square' | 'hypotenuse' | 'more' | 'less';
