import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  title:string = "first page";
  isDisabled :boolean = false;
  countries:string[] = [];
  childMsg :string = "";


  constructor(){ 
    this.countries = ["India","UAE"];
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  doCheck(){
    alert("button clicked");
  }

  OnChildClick(childMessage:string){
   this.childMsg = childMessage;
  }
}
