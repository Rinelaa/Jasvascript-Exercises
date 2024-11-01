var checkIfInstanceOf=function(obj, classFunction){
    if(obj === null ||typeof classFunction !=='function'){
    return false; 
    }

    let objPrototype= Object.getPrototypeOf(obj);
while(objPrototype !==null){
    if(objPrototype === classFunction.prototype){
        return true;
    }
    objPrototype= Object.getPrototypeOf(objPrototype);
    }
    return false;
};
    const example1 = () => {
        class Animal {}
        class Dog extends Animal {}
        return checkIfInstanceOf(new Dog(), Animal); 
    };
    const example2 = () => {
        return checkIfInstanceOf(new Date(), Date); 
    };
    const example3= () =>{
        return checkIfInstanceOf(5,Number);
    }
    const example4=()=>{
        return checkIfInstanceOf(Date(), Date);
    }
    console.log("Example1:", example1());
    console.log("Example2:", example2());
    console.log("Example3", example3());
    console.log("Example4", example4());
    
