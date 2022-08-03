export interface PostApi{
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface UserApi{
    id: number;
    name: string;
    userName: string;
    email: string;
    address: AddressApi;
    phone: string;
    website: string;
    company: CompanyApi;
}

export interface AddressApi{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: AddressGeoApi;
}

export interface AddressGeoApi{
    lat: string;
    lng: string;
}

export interface CompanyApi{
    name: string;
    catchPhrase: string;
    bs: string;
}