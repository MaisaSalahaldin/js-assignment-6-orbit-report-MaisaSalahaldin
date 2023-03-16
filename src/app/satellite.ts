import { ReturnStatement } from "@angular/compiler";

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
   zebraStripes(array):boolean{
if(array.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris'){
	return true
}
else 
return false;
   }
	isSpaceDebris(): boolean {
		if(this.type.toLowerCase()==='space debris')
		return true;
		else
		return false
   }

}

// TODO 3a: fix isSpaceDebris check
