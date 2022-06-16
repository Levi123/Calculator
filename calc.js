let a = ''; //first number
let b = ''; //second number
let sign = ''; //operation sign
let finish = false; 

const numbers  = ['0','1','2','3','4','5','6','7','8','9','.'];
const actions = ['-', '+', '/', '×'];

//screen
const out = document.querySelector('.screen p');

//clear 
function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0;
    //console.log(out.textContent, 'Finish')
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttonsMain').onclick = (event) => {
    //press no button
    if(!event.target.classList.contains('btn')) return;
    // press button clearAll AC
    if(event.target.classList.contains('ac')) return;
    console.log(event.target.textContent)

    out.textContent = '';
    const key = event.target.textContent;

    if (numbers.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign)
            out.textContent = a;
        } else if (a !== '' && b !=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    if (actions.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign)
        return;
    }

    if (key === '%'){
        if (b === ''){
            a = a / 100;
        }
        switch (sign) {
            case '+':
                b = (a*b)/100;
                out.textContent = b;
                break;
            case '-':
                b = (a*b)/100;
                out.textContent = b;
                break;
            case '×':
                b = (b/100);
                out.textContent = b;
                break;
            case '/':
                b = (b/100);
                out.textContent = b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a,b, sign)
    }

    if (key === '='){
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '×':
                a = a * b;
                break;
            case '/':
                if (b === '0'){
                    out.textContent = 'Помилка';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign)
    }
};

