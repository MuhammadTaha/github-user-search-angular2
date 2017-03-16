import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.components.html'
  
})
export class ProfileComponent {
 
constructor(private _gitHubService : GithubService){
  this._gitHubService.getUser.subscribe( user =>{
   console.log(user);
  });
}

}
