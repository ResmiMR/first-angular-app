import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input("country") countryName:string = "";
@Output() childMessage = new EventEmitter<string>();

msg:string = "";

sendMsg(selCountry:string){
this.msg = "You selected the country : ".concat(selCountry);
this.childMessage.emit(this.msg);
}

}
