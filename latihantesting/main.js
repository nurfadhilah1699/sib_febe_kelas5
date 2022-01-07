const a;
try {
    a += [1,2];
    console.log(a);
    throw Error();
} catch(e) {
    console.log('adsd');
}finally{
    a += [2,3,4];
    throw Error();
    a += [1,3,4];
}
console.log(a);