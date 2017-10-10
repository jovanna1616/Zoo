import { Sector } from './sector';

export class Animal{

	species: string;
	name:string;
	birth: string;
	sector:Sector;

	constructor(animalSpecies, animalName, animalBirth, animalSector) {
		this.species = animalSpecies;
		this.name = animalName;
		this.birth = animalBirth;
		this.sector = animalSector;
	}
	
	
}
