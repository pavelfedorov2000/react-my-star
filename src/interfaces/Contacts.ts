interface Address {
    index?: string;
    city?: string;
    street: string;
}

export interface Contacts {
    phones: string[];
    email: string;
    address: Address;
    schedule: string[];
    shop_address: Address;
}