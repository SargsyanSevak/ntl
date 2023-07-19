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
  length : number;
  weight : number;
  rate : number;
  status:string
}
