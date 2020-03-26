let count = 1;
for (count; count < 8; count++) {
    console.log(count);
    let hash = " ";
    for (let i = 0; i < 8; i++){
        console.log(hash += "#");
    }
}