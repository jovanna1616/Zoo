import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { Sector } from './sector';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	sectors: Array<Object> = 
	[
		'sector1', 'sector2', 'sector3'
	];

	animals: Array<Object> = [];

	newAnimal: Object = new Animal('', '', '', '');
	
  
  	addAnimal() {
		this.animals.push(this.newAnimal);
		this.newAnimal = new Animal('', '', '', '');
  	}

	removeAnimal(index) {
		return this.animals.splice(index, 1);
	}


	moveToTop(index, toIndex) {
		var toIndex: any = this.animals[0];
		var element = this.animals[index];
		this.animals.splice(index, 1);
		this.animals.splice(toIndex, 0, element);
	}

  ngOnInit() {

	  // console.log(this.animals);
  }

}
