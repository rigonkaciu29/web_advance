function showMesage(){
    alert("this mesage is from a function")
}

showMesage()

function sum(number1, number2){
    return number1+number2
}

console.log(sum(5, 5));

function toCelcius(f){
    return (5/9)*(f-32)
}

console.log("54 fareinheit is equale to "+ toCelcius(54)+ "celsius");

function dsFunction(){
    localvar="Digital school"
    alert(localvar)
}


function toSeconds(minutes){
    return minutes*60
}

console.log(toSeconds(7));