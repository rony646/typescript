function showWithVar() {
    var text = 'test'
    if(true) {
        var text = 'test 2' // Sobrescrevendo variavel
    }
    console.log(text)
}

function showWithLet() {
    let text = 'test'
    if(true) {
         let text = 'test 2'
    }
    console.log(text)
}


showWithLet()