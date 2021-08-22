import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  // Custom event
  onClick() {
    this.btnClick.emit();
  }

}
