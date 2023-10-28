    const user1 = {
        name: 'mohit',
        age: 8,
        about: function(hobby,actor){
            console.log(this.name,this.age,hobby,actor)
        }
    }


// const myFunc = user1.about
// myFunc() 
 // ! it gives undefined since this keyword isn't binded here but if you did user1.about() then this keyword is binded to parent object

 //solution

 const myFunc = user1.about.bind(user1);
 myFunc('VB','sushant');