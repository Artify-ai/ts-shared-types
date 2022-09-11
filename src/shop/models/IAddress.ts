export default interface IAddress {
    first_name: string;
    last_name: string;
    company?: string;
    street: string;
    street_line_2?: string;
    country: string;
    city: string;
    state: string;
    zip: string;
}