//Zadanie 1
let a = 1;
let b = 4;
if(a>b)
    console.log("a jest większa");
else 
    console.log("b jest większe");

//Zadanie 2
let x = 1;
let y = 3;
let z = 7;

if(x>y & x>z)
    console.log("x jest największe");
else if(y>z)
    console.log("y jest największa");
else
    console.log("z jest największe");

//Zadanie 3
for(i = 0; i<10; i++)
    console.log("Lubię JavaScript");

//Zadanie 4
let result = 0;
for(i=1; i<=10;i++)
    result += i;
console.log(result);

//Zadanie 5
var n = 5;
for(i=0; i<=n; i++)
    if(i%2 == 0)
        console.log(i + " - parzysta");
    else
        console.log(i + " - nieparzysta");

//Zadanie 6
for(i = 0; i< 2; i++)
    for(j = 0; j<5; j++)
        console.log("i= " + i + ", j= " + j);

//Zadanie 7
console.log(0);
for(i = 1; i <= 100; i++)
{
if(i%15 == 0)
    console.log("FizzBuzz");
if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

//Zadanie 8
//a)
for(i = 1; i <= 5; i++)
{
    var resultPic = "";
    for(j = 0; j < i; j++)
    {
        resultPic += "*";
    }
    console.log(resultPic);
}
//b)
for(i = 1; i <= 5; i++)
{
    var resultPic = '';
    for(j = 5-i; j > 0; j--)
    {
        resultPic += " ";
    }
    for(k = 0; k<=2*(i-1); k++)
    {
        if(k%2 == 0)
            resultPic += "*";
        else
            resultPic += " ";
    }
    console.log(resultPic);
}

//c)
for(i = 1; i <= 5; i++)
{
    var resultPic = '';
    for(j = 5-i; j > 0; j--)
    {
        resultPic += " ";
    }
    for(k = 0; k<=2*(i-1); k++)
    {
        resultPic += "*";
    }
    console.log(resultPic);
}

//d)
for(i = 1; i <= 5; i++)
{
    var resultPic = '';
    for(j = 0; j < i; j++)
    {
        resultPic += "*";
    }
    for(j = i; j<5; j++)
    {
        resultPic += j;
    }
    console.log(resultPic);
}
console.log("-----")
for(i = 0; i < 5; i++)
{
    var resultPic = '';
    for(j = 5-i; j > 0; j--)
    {
        resultPic += "*";
    }
    for(j = 5-i; j<5; j++)
    {
        resultPic += j;
    }
    console.log(resultPic);
}

//e)
for(i = 1; i <= 5; i++)
{
    var resultPic = '';
    for(j = 5-i; j > 0; j--)
    {
        resultPic += " ";
    }
    for(k = 0; k<=2*(i-1); k++)
    {
        if(k%2 == 0)
            resultPic += "*";
        else
            resultPic += " ";
    }
    console.log(resultPic);
}
for(i=0; i<3; i++)
{
    console.log("    *")
}