export interface User
{
    id?: number,

    name: string;

    email: string;
    password: string;
    confirmPassword: string
    role: string | number;


}
export interface Login
{

    id?: number,

    email: string;
    password: string;


}
export interface LoginResponse
{
    accessToken: string;
    user: User
}