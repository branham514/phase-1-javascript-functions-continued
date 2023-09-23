function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
 console.log(saturdayFun());

 function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());

function wrapAdjective(adjective = "*"){

    return function(message){
        return `You are ${adjective}${message}${adjective}!`
    };

}
wrapAdjective('*')('a hard worker')('*')
wrapAdjective('||')("a dedicated programmer")('||')
