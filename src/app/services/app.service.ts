import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { sleep } from '@/utils/helpers';
import { User } from '@/shared/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class AppService {
    public user: User | null;

    constructor(private router: Router, private toastr: ToastrService, public httpClient: HttpClient) { }

    async loginByAuth({ username, password }) {
        try {
            console.log('username', username)
            await this.loginWithEmail(username, password);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Login success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            await sleep(500);
            const user = await this.getAuthStatus();
            if (user) {
                this.user = user as User;
            } else {
                this.logout();
            }
        } catch (error) {
            this.logout();
            this.toastr.error(error.message);
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('gatekeeper_token');
        this.user = null;
        this.router.navigate(['/login']);
    }

    async registerWithEmail(email: string, password: string) {
        try {

            return this.httpClient.post(`${environment.BASE_URL}/user/register`, { email, password })
                .subscribe((result: User) => {
                    localStorage.setItem(
                        'authentication',
                        JSON.stringify({ profile: { username: email, token: result.token } })
                    );
                    this.user = result;
                    this.router.navigate(['/']);
                    return result;
                })

        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async loginWithEmail(email: string, password: string) {
        try {
            return this.httpClient.post(`${environment.BASE_URL}/user/login`, { email, password })
                .subscribe((result: User) => {
                    localStorage.setItem(
                        'authentication',
                        JSON.stringify({ profile: { username: email, token: result.token } })
                    );
                    this.user = result;
                    this.router.navigate(['/']);
                    return result;
                })
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    getAuthStatus = async () => {
        return new Promise((res) => {
            try {
                let authentication = localStorage.getItem('authentication');
                if (authentication) {
                    authentication = JSON.parse(authentication);
                    return res(authentication);
                }
                return res(undefined);
            } catch (error) {
                return res(undefined);
            }
        });
    };
}
