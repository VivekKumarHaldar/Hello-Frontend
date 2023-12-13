let winningNumber = 19;
let UserGuss = prompt(" Guss a number");
if(UserGuss == 19)
{
    console.log("Your guss is right");
}else if(UserGuss > 19)
{
    console.log(UserGuss + " is to high");

}else
{
    console.log(UserGuss+" is to low");
}