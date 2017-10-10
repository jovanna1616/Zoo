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

	animals: Array<Animal> = [];

	newAnimal: Animal = new Animal('', '', '', '');
	
  
  	addAnimal() {
			this.animals.push(this.newAnimal);
			this.newAnimal = new Animal('', '', '', '');
  	}

	removeAnimal(index) {
		return this.animals.splice(index, 1);
	}


	moveToTop(index: number) {
		const element = this.animals[index];
		this.animals.splice(index, 1);
		this.animals.splice(0, 0, element);
	}

	listOfAnimals(sector) {
		for (let i = 0; i < this.animals.length; i++){

			if(this.animals[i].sector === sector){
				alert(this.animals[i].name);
			}

		}
		
	}

  ngOnInit() {

  }

}
