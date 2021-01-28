//Zadanie 1
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function HelloCounter()
{
    for(i=1; i<=15; i++)
    {
        console.log("Cześć po raz " + i);
        await sleep(3000);
    }
}

HelloCounter();

//Zadanie 2
var array = ['item1', 'item2', 'item3', 'item4', 'item5'];

const arr = [1, 2, 3, 4, 5];
setTimeout(function () {
  console.log(arr);
  let i = 0;
  let items = setInterval(function () {
    if (i < arr.length) {
      console.log(arr[i]);
      i++;
    } else {
      clearInterval(items);
    }
  }, 3000);
}, 2000);