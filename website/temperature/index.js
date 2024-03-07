
const myinput = document.getElementById("myinput");
const to_fahrenheit = document.getElementById("to_fahrenheit");
const to_celsius = document.getElementById("to_celsius");
const result = document.getElementById("result");
let temp;


function converter(){
    if(to_fahrenheit.checked){

        temp = Number(myinput.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "℉";
    }

    else if (to_celsius.checked){
        temp = Number(myinput.value);
        temp = (5/9) * (temp - 32);
        result.textContent = temp.toFixed(1) + "℃";
    }
    else{
        result.textContent = "Select the Unit for convertion";
    }

}