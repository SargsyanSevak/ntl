
import { TruckProps } from "../interfaces/TruckProps";

export const testTrucks:TruckProps[] = [
    {
        id:'1',
        age: '00:01',
        date: '07/07',
        truckType: 'տենտ',
        loadType: 'հավաքական',
        pickup: 'Մոսկվա',
        delivery: '',
        distance: null,
        company: 'Գլոբալ Տրանս',
        contact: '+37477 32-32-32',
        length : null,
        weight : null,
        rate :null ,
        status:'open'
    },
    {
        id:'2',
        age: '00:02',
        date: '07/07',
        truckType: 'տենտ',
        loadType: 'հավաքական',
        pickup: 'Վանաձոր',
        delivery: 'Կրասնոդար',
        distance: 2300,
        company: 'Վիպ տրանսպորտ',
        contact: '+37477 32-32-32',
        length : 86,
        weight : 23000,
        rate : 3500,
        status:'open'
    },
    {
        id:'3',
        age: '00:03',
        date: '07/07',
        truckType: 'տենտ',
        loadType: 'հավաքական',
        pickup: 'Մարտունի',
        delivery: 'Եկատերինբուրգ',
        distance: 2300,
        company: 'ՆԹԼ լոգիստիկս',
        contact: '+37477 32-32-32',
        length : 86,
        weight : null,
        rate : 3500,
        status:'open'
    },
]