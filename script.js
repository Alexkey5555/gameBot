let question;
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
function gameBot(num) {


    function two() {
        question = parseFloat(prompt('Угадай число от 1 до 100'));
        if (question === num) {
            alert('Поздравляю, Вы угадали!!! ' + 'Число: ' + question)
        }
        else if (!isNumber(question)) {
            alert('Введите число');
            two()
        }
        else if (question > num) {
            alert('Загаданное число меньше');
            two()
        }
        else if (question < num) {
            alert('Загаданное число больше');
            two()
        }
        else if (question === num) {
            alert('Поздравляю, Вы угадали!!! ' + 'Число: ' + question)
        }
    }
    two()
}

gameBot(Math.floor(Math.random() * 100));