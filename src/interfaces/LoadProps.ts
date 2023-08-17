type TruckTypeProps = "տենտ" | "ռեֆ" | "կոնտեյներ" | "ավիա";
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

export interface AddLoadProps {
  date: string
  truckType: TruckTypeProps;
  loadType: LoadTypeProps;
  pickup: string;
  delivery: string;
  length? : number | null;
  weight? : number | null;
  rate? : number | null;
}
