export type FormValues = {
    name: string;

    email: string;
  
    message: string;
  };

  export interface RegsiserFormProps {
    firstName:string,
    lastName:string,
    userType : string,
    email:string,
    companyName:string,
    password:string
  }
  
  export interface LoginFormProps {
    email: string;
    password: string;
    userType: 'carrier' | 'subcarrier' | 'customer' | 'subCustomer';
  }
  export interface ResetFormProps {
    email:string,
    code:string,
    password:string,
    repetPassword:string
  }