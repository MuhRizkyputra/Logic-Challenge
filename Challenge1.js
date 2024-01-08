function sum() {
    let sumAll = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumAll = sumAll + arguments[i]
    }
    console.log(sumAll)
}

sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);
sum(17, 18, 20, 27, 30);