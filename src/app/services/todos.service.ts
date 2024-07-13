import { Todo } from "@/shared/models/todo.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodosApiService {
    constructor(private http: HttpClient) { }

    public getAllUserTodos(userId: number): Observable<Array<Todo>> {
        return this.http.get<Array<Todo>>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    }
}