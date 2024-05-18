var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin((Math.PI / 180) * parseFloat(screen.value));
}

function cos() {
    screen.value = Math.cos((Math.PI / 180) * parseFloat(screen.value));
}

function tan() {
    screen.value = Math.tan((Math.PI / 180) * parseFloat(screen.value));
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1;
    num = parseInt(screen.value);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
