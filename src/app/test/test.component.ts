import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public stringInterpolation = 'Este é um teste!';

  public isDisabled = false;

  public myBindingProperty: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public disableButton(){
    if(this.isDisabled)
      this.isDisabled = false;
    else
      this.isDisabled = true;
  }

  public processClick(input: string){
    console.log(`This button was clicked! ${input}`);
  }
}
