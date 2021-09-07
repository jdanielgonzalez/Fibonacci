let n;
document.open();
let fibo = [0,1];
do
{
    n = prompt("ingrese el n-esimo termino de la sucesion");
    n=parseInt(n);
}
while(n<=0);

for(let i=2; i <= n; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
}

let lim=0;

if(n===1){lim=1;}
if(n!==1){lim=fibo.length-1;}

for(let i=0;i<lim;i++)
{
    document.write(fibo[i]+"<br/>");	
}
document.close();
