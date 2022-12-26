// let a = 6 
// for (let i = 0; i <= a.lenth; i++){

// }

function divisorSum( n)
{
    sum = 0;
    for (let i = 1; i <= n; ++i)
        sum += (n / i) * i;
    return sum;
}
 