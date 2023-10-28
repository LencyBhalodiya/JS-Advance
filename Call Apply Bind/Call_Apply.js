const user1 = {
    name: 'mohit',
    age: 8,
    about: function(hobby,actor){
        console.log(this.name,this.age,hobby,actor)
    }
}

const user2 = {
    name : 'lency',
    age: 9.
}

// both call and apply method takes argument and invokes the this keyword of the function which is called and takes values from the argument 
// difference between call and apply method is apply takes parameter in any array while call method takes individual parameter

user1.about.call(user2,'volleyBall','Sushant')
user1.about.apply(user2,['Basketball','beach']) 
