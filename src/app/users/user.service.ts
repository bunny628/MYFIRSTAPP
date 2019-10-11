import { Injectable } from "@angular/core";
import { Users } from "./Models/users";
import { TodosService } from "../todos/todos.service";
import { TodosComponent } from "../todos/todos.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userData = [
    {
      id: "1234",
      firstName: "Vannessa",
      lastName: "Pasa-an",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1235",
      firstName: "Karen",
      lastName: "Carabuena",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1236",
      firstName: "Riche",
      lastName: "Jimenez",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1237",
      firstName: "Jayson",
      lastName: "Custodio",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1238",
      firstName: "Adrian",
      lastName: "Sumagang",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1239",
      firstName: "Rolito",
      lastName: "Valles",
      occupation: "Software Engineer",
      profilePicture: "some url"
    },
    {
      id: "1232",
      firstName: "Selena",
      lastName: "Gomez",
      occupation: "Artist",
      profilePicture: "some url"
    },
    {
      id: "1231",
      firstName: "Conor",
      lastName: "Maynard",
      occupation: "Singer",
      profilePicture: "some url"
    },
    {
      id: "12377",
      firstName: "Kathryn",
      lastName: "Bernardo",
      occupation: "Artist",
      profilePicture: "some url"
    },
    {
      id: "12363",
      firstName: "Daniel",
      lastName: "Padilla",
      occupation: "Artist",
      profilePicture: "some url"
    }
  ];

  getUserData(): Users[] {
    return this.userData;
  }

  // addUser(user: Users): Users {
  //   let id = (
  //     parseInt(this.userData[this.userData.length - 1].id) + 1
  //   ).toString();
  //   user.id = id;
  //   this.userData.push(user);

  //   return user;
  // }

  // getById(id: string) {
  //   const userFound = this.userData.filter(user => {
  //     return (user.id = id);
  //   });
  //   return userFound[0];
  // }

  // updateUser(user: Users): Users {
  //   const found = this.getById(user.id);
  //   found.firstName = user.firstName;
  //   found.lastName = user.lastName;
  //   found.occupation = user.occupation;
  //   found.profilePicture = user.profilePicture;
  //   return found;
  // }

  // deleteUser(id: string): Users {
  //   const userId = this.getById(id);
  //   const index = this.userData.indexOf(userId);
  //   return userId ? this.userData.splice(index, 1)[0] : null;
  // }

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}`);
  }

  loadUserData(page: number, pageSize: number): Users[] {
    --page;
    return this.userData.slice(page * pageSize, (page + 1) * pageSize);
  }

  
}
