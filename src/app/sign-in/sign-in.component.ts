import { Component, OnInit } from
 '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
   // we set dialog result as true on click on confirm button,
   // then we can get dialog result from caller code
   this.result = true;
   this.close();
 }

}
