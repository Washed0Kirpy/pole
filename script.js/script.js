const nabidka = ["CPU", "GPU", "RAM"];

function vypis(array, output){
    document.getElementById(output).innerHTML = "";
    for(let i = 0; i < array.length; i++){
        document.getElementById(output).innerHTML += i+1 + ". " + array[i] + "<br>";
    }
}

function Add(){

    const input = document.getElementById("add-component")

}

vypis(nabidka, "content")