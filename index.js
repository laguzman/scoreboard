let home_counter = document.getElementById("home_counter")
let guest_counter = document.getElementById("guest_counter")
home_counter.textContent = 0
guest_counter.textContent = 0
let contg= 0
let conth= 0
function add1g() {
    contg+=1
    guest_counter.textContent = contg
}

function add2g() {
    contg+=2
    guest_counter.textContent = contg
}
function add3g() {
    contg+=3
    guest_counter.textContent = contg
}

function add1h() {
    conth+=1
    home_counter.textContent = conth
}

function add2h() {
    conth+=2
    home_counter.textContent = conth
}
function add3h() {
    conth+=3
    home_counter.textContent = conth
}

function new_game() {
    conth = 0
    contg = 0
    home_counter.textContent = 0
    guest_counter.textContent = 0
}