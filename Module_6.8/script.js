let powNum = (x, n) => {

    let res = 1;

    for (let i = 0; i < n; i++)
        res *= x;
    
    console.log(res);
}


powNum(3, 3);