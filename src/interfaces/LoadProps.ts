type TruckTypeProps = "տենտ" | "ռեֆ";
type LoadTypeProps = "ամբողջակսն" | "հավաքական";
type ContactTypeProps = string | number;

export interface LoadProps {
  id:string;
  age: string;
  date: string;
  truckType: TruckTypeProps;
  loadType: LoadTypeProps;
  pickup: string;
  delivery: string;
  distance: number;
  company: string;
  contact: ContactTypeProps;
  length : number | null;
  weight : number | null;
  rate : number |null;
  status:string
}
