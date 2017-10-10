import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	animals:Array<Object> = 
	[
		{
			species: 'cat',
			name:'Kitty',
			birth: '01-01-2016'

		},

		{
			species: 'dog',
			name: 'Bully',
			birth: '01-01-2015'

		},

		{
			species: 'snake',
			name: 'Python',
			birth: '01-01-2016'

		},

		{
			species: 'bear',
			name: 'Teddy',
			birth: '01-01-2015'

		},

		{
			species: 'monkey',
			name: 'Tom',
			birth: ''

		},

	];
	
  

  ngOnInit() {
  }

}
