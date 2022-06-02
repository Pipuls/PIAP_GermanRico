import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { library, icon } from '@fortawesome/fontawesome-svg-core'


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
      console.log('me estas clikeando wacho')
  }
 
}
