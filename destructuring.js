const details={
    name:"Dhivya",
    city:"Erode",
    age:21,
}
const dpt={
   name:"oviya",
   city:"coimbatore"
}


 //aliasing and default
 const{name:Nname,city:ucity="Not found" }=dpt
 console.log(Nname,ucity);

 //spread operator
let obj={};
obj={...dpt};
console.log(obj);

//rest operator
 let{name,...res}=details;
 console.log(res);

//assign
let assign_object={}
assign_object= Object.assign(details);
console.log(assign_object);