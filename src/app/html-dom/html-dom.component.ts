import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-dom',
  templateUrl: './html-dom.component.html',
  styleUrls: ['./html-dom.component.scss']
})
export class HtmlDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("myBtn").addEventListener("click", this.myFunction);
    document.getElementById("myBtn").addEventListener("mouseover", this.displayDate);
    document.getElementById("myBtn").addEventListener("mouseout", this.removeDate);

    
    document.getElementById("date").addEventListener("click", this.displayDate);

  }

  changeText(id) {
    id.innerHTML = "I don't know"
  }

  displayDate() {
    document.getElementById("data").innerHTML = Date();
  }

  removeDate() {
    document.getElementById("data").innerHTML = "";
  }

  displayTime() {
    document.getElementById("demo").innerHTML = Date();
  }

  myFunction() {
    alert ("Hello World!");
  }

}
