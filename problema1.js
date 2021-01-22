
var a = ['enyky', 'benyky', 'yely', 'varennyky']
var max = 0;
for (let i = 0; i < a.length; i++) {
    aux = a[i].length;
    if (max < aux) {
        var max = a[i].length;
        var cad = a[i];
    }

}
for (let j = 0; j < a.length; j++) {
    aux = a[j].length;
    if (aux == max)
        console.log(a[j]);

}
