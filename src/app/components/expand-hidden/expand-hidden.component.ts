import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-hidden',
  templateUrl: './expand-hidden.component.html',
  styleUrls: ['./expand-hidden.component.scss'],
})
export class ExpandHiddenComponent implements OnInit   {

  constructor() { }


  ngOnInit() {
  }

  @Input()
  name: string;

  @Input()
  description: string;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  public isMenuOpen: boolean = false;


  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public broadcastName(name: string): void {
    this.change.emit(name);
  }
}
