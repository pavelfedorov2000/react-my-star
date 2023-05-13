import { City } from "../enums/City";

export interface Shop {
    id: string;
    city: string;
    address: string;
    schedule: string[];
    phones: string[];
    coordinates: number[];
    code: City.Minsk | City.Brest | City.Baranovichi | City.Ivacevichi | City.Grodno | City.Polotsk | City.Mogilev;
}