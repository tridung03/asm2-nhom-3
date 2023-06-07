import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginResponse, User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';
  private name: string | undefined;

  constructor(private http: HttpClient) { }
  singup(body: User): Observable<User> {
    return this.http.post<User>("http://localhost:3000/signup", body);
  }
  login(credentials: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/signin`, credentials);

  }
  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get<User>(url);
  }
  remove(id: number): Observable<User> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete<User>(url);
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }
  getUsername(): string {
    // Trả về tên người dùng đã đăng ký
    // Bạn có thể lấy thông tin từ Local Storage hoặc từ bất kỳ nguồn dữ liệu nào khác
    const name = localStorage.getItem('name');
    return name ? name : '';
  }
  logout(): void {
    this.name = undefined;
    // Thực hiện các thao tác đăng xuất
    // Ví dụ: xóa token từ Local Storage, xóa thông tin người dùng đã lưu trữ, đặt trạng thái đăng nhập về false, vv.
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    // Các thao tác khác liên quan đến việc đăng xuất
  }

  isLoggedIn(): boolean
  // kieemr tra xem nguowi dung da nhap vao hay ch 
  {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    // Ví dụ: kiểm tra sự tồn tại của token xác thực trong Local Storage
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Trả về true nếu có token xác thực, ngược lại trả về false
  }
  editUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user)
  }

}
