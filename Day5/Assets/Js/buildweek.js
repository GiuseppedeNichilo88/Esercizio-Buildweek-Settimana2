function digit(n) {
    document.getElementById('monitor').value = document.getElementById('monitor').value + n;
}

function ar(n) {
    document.getElementById('oper').value = n;
    document.getElementById('last').value = document.getElementById('monitor').value;
    document.getElementById('monitor').value = '';
    document.getElementById('res').value = '';
}

function del() {
    document.getElementById('monitor').value = '';
    document.getElementById('last').value = '';
    document.getElementById('oper').value = '';
    document.getElementById('res').value = '';
}

function result() {
    if (document.getElementById('oper').value == "+") {
        document.getElementById('monitor').value = parseInt(document.getElementById('last').value) + parseInt(document.getElementById('monitor').value);
    } else if (document.getElementById('oper').value == "-") {
        document.getElementById('monitor').value = document.getElementById('last').value - document.getElementById('monitor').value;
    } else if (document.getElementById('oper').value == "*") {
        document.getElementById('monitor').value = document.getElementById('last').value * document.getElementById('monitor').value;
    } else if (document.getElementById('oper').value == "/") {
        document.getElementById('monitor').value = document.getElementById('last').value / document.getElementById('monitor').value;
    }
}

function perc() {
    if (document.getElementById('res').value != 'Y') {
        if (document.getElementById('monitor').value && document.getElementById('oper').value && document.getElementById('last').value) {
            document.getElementById('monitor').value = (document.getElementById('last').value / 100) * document.getElementById('monitor').value;
            if (document.getElementById('oper').value == '*' || document.getElementById('oper').value == '/') {
                document.getElementById('res').value = 'Y';
            }
        }
    }
}