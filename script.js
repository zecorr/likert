let total
let final = []
const add = (...num) => num.reduce((acc, curr) => acc + curr)


function updateResult() {
    const resultElement = document.getElementById('result');
    const selectedOption = document.querySelector('input[name="likert"]:checked');
    total = Number(selectedOption.value)
    final.push(total)

    if (final.length == 3){
        resultElement.textContent = (`You scored: ${final.reduce((acc, curr) => acc + curr)} out of 6`)
    } else if (final.length == 2) {
        resultElement.textContent = (`Waiting for third person`)
    } else if (final.length == 1) {
        resultElement.textContent = (`Waiting for second person`)
    } else {
        resultElement.textContent = (`Waiting for first person...`)
    }
    

    // resultElement.textContent = `${selectedOption ? selectedOption.nextSibling.nodeValue.trim() : 'None'}`;
}

