import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

  state: string = '';
  name: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if(authenticationService.currentUser) {
      this.router.navigateByUrl('/members');
    }
  }


  ngOnInit() {
  }

}
