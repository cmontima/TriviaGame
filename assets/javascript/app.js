// Variables
var time = 0;

var stopwatch = {
    reset: function () {
        stopwatch.time = 0;
        $("#display").text("00:00");
    },
}

var questions = ["1. Question A", "2. Question B", "3. Question C", "4. Question D", "5. QUestion E"]



// Functions
function reset() {
    time = 0;
    $("#display").text("00:00");
}

function timer() {
    intervalId = setInterval(count, 60000);
}

function count() {
    time++;
    var converted = timeConverter(time);
    $("#display").text(converted);
}

function timeConverter(timer) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


setTimeout(fiveSeconds, 1000 * 5);


$(document).ready(function () {

    timeConverter();
    console.log(timeConverter);


    $("#done-quiz").on("click", function () {
        reset();
    });
});



// necesitamos en la primera pantalla un boton para empezar el juego
// al dalr click al boton aparece otra pantalla con las pregunta de opciones multiple
// necesitamos un reloj que empiece a contar el tiempo para contestar el quiz
// al acabarse el tiempo se debe cambiar la pantalla con los resultados
// debe llevar un boton (terminar) en caso de contestar todo antes de que se acabe el tiempo
