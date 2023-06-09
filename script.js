// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer () {
    const respuesta = fetch ('https://yesno.wtf/api');
    const data = respuesta.json();
    mostrarRespuesta(data.answer);

}


function mostrarRespuesta (answer) {
    const answerDiv = document.getElementById('answer');
    answerDiv.textContent = answer;

    setTimeout(() => {
        answerDiv.textContent = '';
    }, 5000);

}

// const fetchAnswerBoton = document.getElementById('button');
// fetchAnswerBoton.addEventListener('click', fetchAnswer);





