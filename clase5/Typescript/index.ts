export class Team {
    id:number;
    name:string;
    constructor(id:number , name:string){
        this.id=id;
        this.name=name;
    }
}

export class TeamEquipo extends Team
{
    level: number=1;

}

export interface ITeam{
    count: number;
    address : string;
}

export class Team2 implements ITeam{
    count: number;
    address: string;

}


let team = new Team(1 ,"River Plate");
let teamE =new TeamEquipo(2,"juventud");

console.log(team);
console.log(teamE);


/****************************************** */


