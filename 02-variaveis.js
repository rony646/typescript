function showWithVar() {
    var text = 'test';
    if (true) {
        var text = 'test 2'; // Sobrescrevendo variavel
    }
    console.log(text);
}
function showWithLet() {
    var text = 'test';
    if (true) {
        var text_1 = 'test 2'; // Sobrescrevendo variavel
    }
    console.log(text);
}
showWithLet();
