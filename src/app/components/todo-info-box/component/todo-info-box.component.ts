import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

export type VARIANT_TYPES =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

@Component({
    selector: 'app-todo-info-box',
    templateUrl: './todo-info-box.component.html',
    styleUrls: ['./todo-info-box.component.scss']
})
export class TodoInfoBoxComponent implements OnInit {
removeTodo() {
throw new Error('Method not implemented.');
}
editTodo() {
throw new Error('Method not implemented.');
}
    @Input() loading?: 'dark' | boolean;
    @Input() icon?: {
        content: IconDefinition;
        variant?: VARIANT_TYPES;
    };
    @Input() variant?: VARIANT_TYPES;
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() progressBar?: {
        description?: string;
        level: number;
        variant?: VARIANT_TYPES;
    };

    iconVariant: string;
    progressBarVariant: string;

    @HostBinding('class') class;

    ngOnInit() {
        this.class = `info-box bg-${this.variant}`;
        this.iconVariant = this.icon?.variant || this.variant;
        this.progressBarVariant = this.progressBar?.variant || this.variant;
    }

    public getLoadingPropType(): 'light' | 'dark' {
        return typeof this.loading === 'string' ? this.loading : 'light';
    }
}
