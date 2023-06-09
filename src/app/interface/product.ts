export interface Iproduct
{
    id?: number;
    name: string;
    chitiet: string;
    price: number,
    img: string
    categoryId?: number
}

export interface thanhtoan
{
    name: string,
    sdt: number,
    diachi: string,
    email: string,
    soluong: number,
}