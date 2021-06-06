import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/classes/user';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-alpha-pagination',
  templateUrl: './alpha-pagination.component.html',
  styleUrls: ['./alpha-pagination.component.scss']
})
export class AlphaPaginationComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() onClick = new EventEmitter<string>();
  alphas: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.alphas = Helper.generateAlphabet();
  }

  onChange(char: string) {
    this.onClick.emit(char);
  }

}
