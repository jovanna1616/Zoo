import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	animals:Array<Object> = 
	[
		new Animal('cat', 'Kitty', '02-09-2017'),
		new Animal('dog', 'Bully', '01-09-2017'),
		new Animal('snake', 'Python', ''),
		new Animal('bear', 'Teddy', '02-10-2017'),
		new Animal('fish', 'Rocky', ''),

	];
	
  removeAnimal(index) {
	  return this.animals.splice(index, 1);
  }

  ngOnInit() {

	  // console.log(this.animals);
  }

}
