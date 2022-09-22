let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date(); //Função que pega a data atual Date()
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //Realizando o calculo por que cada segunda é equivalente a 6 graus, então 6 graus * 60 regundos = 360, então a gente divide a quantidade de gaus pelo grau por segundo e multiplica pelo segundo atual, depois diminui 90 para o ponteiro começar no 12hrs/00hrs pois o 00hrs por padrão do js é no 15min nosso
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

//Função para dizer que sempre que for menor que 10, sempre irá colocar um 0 na frente ficando assim > 00:00:00 e não assim > 00:00:0
function fixZero(time) {
    // if(time < 10) {
    //     return '0'+time;
    // } else {
    //     return time;
    // }

    //Simplicação do if acima: retorna time se time for menor que 10 coloca o zero na frente do time se não retorna o proprio time
    return time < 10 ? `0${time}` : time;

}



setInterval(updateClock, 1000); //Cria um intervalo infinito de 1 em 1 segundo.
updateClock(); //Roda a função depois do setInterval para que alem de ser atualizado de 1 em 1 segundo, sejá atualiza instantanemante já que entre 1 segundo e outro 1 segunda a função do relogio vai rodar