export interface ITable {
  title: string;
  itens: IBillItem[];
  openTable: boolean;
}

export interface IBillItem {
  name: string;
  amount: number;
  price: number;
}
