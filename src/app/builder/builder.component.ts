import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  personality = ['Friendly', 'Grouchy',
            'Nerdy', 'Narcissistic'];

  career = ['Programmer', 'Professional Gamer', 'Con Artist', 'Fireman'];

  model = new Character('Tyler', this.personality[0], this.career[0]);

  submitted = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
