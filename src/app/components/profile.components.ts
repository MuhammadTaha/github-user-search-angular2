import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';


@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.components.html'
  
})
export class ProfileComponent {
 
user:any[];

constructor(private _gitHubService : GithubService){
  this._gitHubService.getUser().subscribe( user =>{
   this.user = user;
  });
}

}
