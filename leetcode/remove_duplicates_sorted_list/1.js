var removeDuplisctes = function (num) {
    const size = num.length;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        // console.log(num[fastP]);
        if (num[fastP] !== num[slowP]) {
            slowP++;
            num[slowP] = num[fastP];
        }
    }
    return slowP + 1;
}

console.log(removeDuplisctes([0, 0, 1, 1, 2, 2, 2, 3, 3, 4]));