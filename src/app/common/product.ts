export interface Iproduct
{
    id?: number;
    name: string;
    chitiet: string;
    price: number,
    img: string
}
export interface User
{
    user: string;
    lastname: string;
    firstname: string;
    password: string;
    comfirmPassword: string

}
export interface Login
{
    user: string;
    password: string;


}
export interface LoginResponse
{
    token: string;
    user: User;
}
export interface thanhtoan
{
    name: string,
    sdt: number,
    diachi: string,
    email: string,
    soluong: number,
}