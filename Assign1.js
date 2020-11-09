//1) LET & CONST
let name="Rajnish";
const company="Eternus";


class Employee{
 name=name;
  company=company;
// 2) Arrow Function
details=()=>{console.log(this.name,this.company);}
}


//3) classes
class Skills extends Employee{
  constructor(){
    super();
    this.skills=['C','C++']
  }
  
  sk(){console.log(this.skills);}
  
  adds(skill){
    //4) Spread and rest
    const newSkills=[...this.skills,skill];
    console.log(newSkills);
    
    //5) Destructuring
    [skill1]=this.skills;
    console.log('First Skill: '+skill1);
  }
}

//6) ARRAY FUNCTIONS

//const numbers=[1,2,3];
//const multarray=numbers.map((num)=>{return num*2;});
//console.log(multarray);


const employee=new Skills();
employee.details();
employee.sk();
employee.adds("Python");