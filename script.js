let expression = "";
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                expression = eval(expression);
                document.querySelector('input').value = expression;
            } catch (error) {
                document.querySelector('input').value = 'Error';
            }
        } else if (e.target.innerHTML === 'C') {
            expression = "";
            document.querySelector('input').value = expression;
        } else if (e.target.innerHTML === 'AC') {
            expression = "";
            document.querySelector('input').value = expression;
        } else {
            console.log(e.target);
            if (e.target.innerHTML === 'x') {
                expression += '*';
            } else {
                expression = expression + e.target.innerHTML;
            }
            document.querySelector('input').value = expression;
        }
    });
});
