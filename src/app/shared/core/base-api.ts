import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApi {

    // public static API_URL = 'https://ets.globalair.kz/';
    public static API_URL = 'http://jsonplaceholder.typicode.com/';

	constructor(public http: HttpClient) {}

	private getUrl(url: string = ''): string {
		return BaseApi.API_URL + url;
	}

	public get(url: string = ''): Observable<any> {
		return this.http.get(this.getUrl(url));
	}

	public post(url: string = '', data: any = {}): Observable<any> {
		console.log(data);
		return this.http.post(this.getUrl(url), data);
    }
    
}
