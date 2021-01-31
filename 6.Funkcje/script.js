//Zadanie1
function managedTo(){
    console.log("Udało się!")
}
 managedTo();

 //Zadanie 2
 function printParametr(x){
     console.log(x);
 }
 printParametr("test");
 printParametr(1234);

//Zadanie 3
function returnArray(arr){
    return arr;
}

console.log(returnArray([1,2,3,4,5]));

//Zadanie 4
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function StringCounter(stringToPrint)
{
    for(i=1; i<=5; i++)
    {
        console.log(stringToPrint);
        await sleep(3000);
    }
    console.log("Koniec");
}

StringCounter("Hello");

