import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    // private username:string;
    // private client_id = '';
    // private client_secret = '';

    private username = 'MuhammadTaha';
    private client_id = '72ee6a1035c5b1d2954b';
    private client_secret='a3f7c0a8e9da3fe41e20feaf0902b3d7b249334d';


    constructor(private _http:Http){
        console.log('Github Service Ready.....');
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username
        +'?client_id='+this.client_id+
        '&client_secret='+this.client_secret
        )
        .map(res => {res.json()});
    }
}