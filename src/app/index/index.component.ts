import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  click = false
  click2 = false
  kiss = false
  constructor() { }

  ngOnInit() {
  }
  onSelect(){
    console.log("ttttttttt");

  this.kiss = true
}
  onCancel(){
    console.log("ttttttttt");
    this.click = true
  }
  onCancel2(){
    console.log("ttttttttt");
    this.click = false
    this.click2 = true
  }
  cc(){
      this.kiss = false
      this.click = false
      this.click2 = false
  }
}
