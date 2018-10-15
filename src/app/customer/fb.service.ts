import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { FacebookLoginProvider, AuthService } from 'angular5-social-login';
@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(private socialSvc: AuthService, private http: HttpClient) { }

    async loginwithfb(): Promise<any> {

        const fbProvider = FacebookLoginProvider.PROVIDER_ID;
        try {
            const userData = await this.socialSvc.signIn(fbProvider);
            console.log('user data => ', userData);
            return this.http.post(`http://localhost:3000/auth/facebook`,
                { access_token: userData.token }, { observe: 'response' }).pipe(map(innerData => {
                    console.log(innerData);
                    const token = innerData['headers'].get('x-auth-token');
                    if (token) {
                        // localStorage.setItem('id_token', token);
                        localStorage.setItem('token',token);
                    }
                })).toPromise();
        } catch (err) {
            console.error('Error thrown while FB login', err);
        }
    }

    isLoggedIn(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
        });
    }

    getCurrentUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.get(`http://localhost:3000/auth/me`).toPromise().then(response => {
                resolve(response);
            }).catch(() => reject());
        });
    }
}
