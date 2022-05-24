const addition = (num1:number,num2:number):number =>{
    return num1+ num2
}
console.log(addition(5,6))

const addNumberOrText = (input1:number|string,input2:number|string)=>{
    if(typeof input1==='number' && typeof input2 === 'number'){
        return input1 + input2
    }
    return input1.toString() + input2.toString()
}

console.log(addNumberOrText(2,'5'))

const userData = [{id:1,name:'Vivek',lastName:'B',age:27,role:'admin',address:'tvm'}]

type Role = 'admin' | 'developer' | 'tester'

interface UserDetails {
    id:number;
    name:string;
    lasName:string;
    age:number;
    role: Role;
    address?:string;
}

const enterUserData = (data:UserDetails):object=>{
    const entry = {id:data.id,name:data.name,lastName:data.lasName,age:data.age,role:data.role,address:data.address===undefined?'':data.address}
    userData.push(entry)
    return entry
}

console.log(enterUserData({
    id:userData.length+1,
    name:'Kevin',
    lasName:'T',
    age:26,
    role:'developer'
}))

const getUserName = (id:number):string=>{
    const index = userData.findIndex((item)=>item.id = id)
    return userData[index].name
}


console.log(getUserName(1))

const calucations = (num1:number,num2:number,cb:(a:number,b:number)=>number):number=>{

return cb(num1,num2)
}
console.log(calucations(6,7,addition))