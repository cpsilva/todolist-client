import {Component} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {environment} from 'environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private router: Router,
    ) {
        this.router.events.subscribe((event: Event) => {
            if (
                event instanceof NavigationEnd &&
                environment.NODE_ENV === 'production'
            ) { }
        });
    }
}
