let cincoEstrelas = document.querySelectorAll('.cincoEstrelas')
let quatroEstrelas = document.querySelectorAll('.quatroEstrelas')
let tresEstrelas = document.querySelectorAll('.tresEstrelas')
let duasEstrelas = document.querySelectorAll('.duasEstrelas')
let umEstrelas = document.querySelectorAll('.umEstrelas')

let estrela = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='512' height='512' x='0' y='0' viewBox='0 0 511.987 511' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''><g><path fill='#ffc107' d='M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0' data-original='#ffc107' class=''></path></g></svg>"
let estrelaApagada = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='512' height='512' x='0' y='0' viewBox='0 0 511.987 511' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''><g><path fill='#ffc107' d='M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0' data-original='#ffc107' class='' style='fill: rgb(255 255 255 / 30%);'></path></g></svg>"

for (let i = 0; i < cincoEstrelas.length; i++) {
    cincoEstrelas[i].innerHTML = estrela + estrela + estrela + estrela + estrela
}
for (let i = 0; i < quatroEstrelas.length; i++) {
    quatroEstrelas[i].innerHTML = estrela + estrela + estrela + estrela + estrelaApagada
}
for (let i = 0; i < tresEstrelas.length; i++) {
    tresEstrelas[i].innerHTML = estrela + estrela + estrela + estrelaApagada + estrelaApagada
}
for (let i = 0; i < duasEstrelas.length; i++) {
    duasEstrelas[i].innerHTML = estrela + estrela + estrelaApagada + estrelaApagada + estrelaApagada
}
for (let i = 0; i < umEstrelas.length; i++) {
    umEstrelas[i].innerHTML = estrela + estrelaApagada + estrelaApagada + estrelaApagada + estrelaApagada
}
