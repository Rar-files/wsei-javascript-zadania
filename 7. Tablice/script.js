let tab = [1,'dwa',3,'cztery', 5];
console.log(tab[0]+tab[1]);
console.log(tab[tab.length-1]);
console.log(tab);
tab.forEach()

const arr = ["foo", "bbb", 2, 17, "str", 12];

//punkt1
console.log(arr[0]);
console.log(arr[1]);

//punkt2
console.log(arr[arr.length - 1]);

//punkt3
arr.forEach(a => console.log(a));

//punkt4
arr.forEach((a, i) => {
    if (i % 2 == 0) console.log(a);
})

//punkt5
arr.forEach(a => {
    if (typeof a === "string") console.log(a);
})

//punkt6
arr.forEach(a => {
    if (typeof a === "number") console.log(a);
})

let tab = [1,2,3,4,5,6];

function avgTab(tab)
{
    let AVG = tab[0];
    for(i=1; i<tab.length; i++)
    {
        if(i%2==0)
        {
        AVG+=tab[i];
        AVG/=2;
        }
    }
    return AVG;
}

console.log(avgTab(tab));

function func6(array) {

    var newArray = array.filter(a=> a % 2 === 0);
    var result = newArray.reduce((a, b) => a + b , 0) / newArray.length;

    console.log(result);
}

func6([1,2,3,4,5,6,7,8,9,10])

let arr = [5, 3, 1, 55, 33, 11];

function sortowanie(arr) {
    let newArray = arr.sort((a, b) => a- b);
    console.log(newArray);
}

sortowanie(arr);

let arr = [5, 3, 1, 55, 33, 11];

function delateValue(id, delateValue)
{
    let newArr = [];
    id.forEach(a => {if(a!=delateValue) newArr.push(a)})
    return newArr;
}

console.log(delateValue(arr, 33));