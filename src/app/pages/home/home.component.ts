// dashboard.component.ts
import { Todo } from '@/shared/models/todo.model';
import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TodosApiService } from '@services/todos.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public todos: Array<Todo>;

    constructor(public todoApiService: TodosApiService,
        
    ) {

    }

    ngOnInit(): void {
        this.todoApiService.getAllUserTodos(1).subscribe((result) => {
            this.todos = result;
        })
    }

    faEnvelope = faEnvelope;
}
