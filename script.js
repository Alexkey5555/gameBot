let question;
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
function gameBot(num) {
    let count = 10;
    let attempt;
    function two() {
        let answer = prompt('Угадай число от 1 до 100');
        if (answer === null) {
            alert('Игра окончена');
            return;
        }
        question = parseFloat(answer);
        if (question === num) {
            attempt = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
            if (attempt === true) {
                gameBot(Math.floor(Math.random() * 100));
            }
            else {
                alert('Игра окончена');
                return;
            }
        }
        else if (count == 1) {
            attempt = confirm('Попытки закончились, хотите сыграть еще?')
            if (attempt === true) {
                gameBot(Math.floor(Math.random() * 100));
            }
            else {
                alert('Игра окончена');
                return;
            }
        }
        else if (!isNumber(question)) {
            alert('Введите число');
            two()
        }
        else if (question > num) {
            count--;
            alert('Загаданное число меньше, осталось попыток ' + count);
            two()
        }
        else if (question < num) {
            count--;
            alert('Загаданное число больше, осталось попыток ' + count);
            two()
        }
    }
    two()
}
gameBot(Math.floor(Math.random() * 100));