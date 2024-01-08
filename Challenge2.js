function deretKaskus(n) {

    let array = []
    for (let i = 0; i <= n; i++) {
        if ((i * 3) % 5 === 0 && (i * 3) % 6 === 0) {
            array.push('KASKUS')
        } else if ((i * 3) % 6 === 0) {
            array.push('KUS')
        } else if ((i * 3) % 5 === 0) {
            array.push('KAS')
        } else {
            array.push((i * 3));
        }
    } return array;

}

console.log(deretKaskus(10));
