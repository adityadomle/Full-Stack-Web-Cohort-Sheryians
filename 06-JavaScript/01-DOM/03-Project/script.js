function guessWinner() {
    let arr = ['CSK', 'RCB', 'MI', 'PBKS', 'LSG', 'KKR', 'GT', 'DC', 'SRH', 'RR'];
    let num = Math.floor(Math.random() * arr.length);
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = `🏏 Winner Guess: ${arr[num]}`;
}