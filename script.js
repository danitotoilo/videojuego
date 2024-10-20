const levels = [
    {
        description: "Nivel 1:  cual es el archivo de cabecera que siempre debe estar.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: empieza con #",
            "Pista 2: utiliza las comillas despues de la primera palabra",
            "Pista 3: dentro de las comillas se utiliza un .h",
        ]
    },
    {
        description: "Nivel 2: Especificador de tipo de datos decimal y enteros.",
        correctAnswer: function(code) {
            const correctCode = `
             %f y %d
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: es una letra de cada tipo(el decimal, y entero)",
            "Pista 2: se utiliza el % en cada tipo",
            "Pista 3: se utiliza para definir el tipo de datos que una variable puede almacenar.",
        ]
    },
    {
        description: "Nivel 3: se utilizan para interactuar con el usuario a través de la entrada y salida estándar.",
        correctAnswer: function(code) {
            const correctCode = `
            printf y scanf
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Primero pones la salida de datos y luego la entrada de datos",
            "Pista 2: la salida de datos lo utilizas para decir,´Salida de datos´(´Ingrese un número´)",
            "Pista 3: la entrada de datos lo utilizas para decir,´entrada de datos´(´%d´, &num1)",
        ]
    },
    {
        description: "Nivel 4: ¿Cuál es el nombre de la función que actúa como punto de entrada en un programa en C?",
        correctAnswer: function(code) {
            const correctCode = `
            main()
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Esta función es obligatoria en todos los programas en C.",
            "Pista 2: Su ejecución comienza cuando se inicia el programa.",
            "Pista 3: Su declaración más común incluye la palabra clave int",
        ]
    },
    {
        description: "Nivel 5: ¿Qué operador se utiliza en C para obtener la dirección de una variable?",
        correctAnswer: function(code) {
            const correctCode = `
            &
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Es un símbolo que se usa antes del nombre de la variable.",
            "Pista 2: Se utiliza comúnmente al trabajar con punteros.",
            "Pista 3: Este operador también se utiliza para denotar una referencia.",
        ]
    },
    // Tus niveles actuales (6, 7, 8)
    {
        description: "¡Se ha aumentado la dificultad!, ahora tienes que armar estructuras, solo son 3 niveles ¡Tu puedes!.  Nivel 6: Escribe una función en lenguaje C que solicite dos numeros para hacer una suma.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int num1, num2, res;
            printf("Ingrese el primer número: ");
            scanf("%d", &num1);
            printf("Ingrese el segundo número: ");
            scanf("%d", &num2);
            res= num1+num2
            printf("el resultado de la suma es %d", res);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: ["Pista 1: se utiliza int para definir tres cosas, los dos numeros y el resultado.",
            "Pista 2: tienes que decir: Ingrese el primer número: , y despues dices: Ingrese el segundo número:",
            "Pista 3: al final para mostrar el resultado tienes que decir: 'el resultado de la suma es %d', res.",
        ]
    },
    {
        description: "Nivel 7: Escribe una función en lenguaje C que necesita el area de un triangulo.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            float base, altura, res;
            printf("digite la base del triangulo");
            scanf("%f",& base);
            printf("digite la altura del triangulo");
            scanf("%f",& altura);
            res=(base*altura)/2;
            printf("el area del triangulo es %f",res);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: se utiliza float para definir tres cosas, la base, altura y el resultado.",
            "Pista 2: tienes que decir: digite la base del triangulo, y despues dices: digite la altura del triangulo.",
            "Pista 3: al final para mostrar el resultado tienes que decir: 'el area del triangulo es %f',res.",
        ]
    },
    {
        description: "Nivel 8: Escribe una función en lenguaje C que solicite dos números, multiplicarlos por 4, y luego elevarlos al cuadrado, y decir cuál número es el mayor, cuál número es el menor, o si los dos números son iguales.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            int num1, num2, res1, res2;
            printf("digite un numero");
            scanf("%d",& num1);
            printf("digite un segundo numero");
            scanf("%d",& num2);
            res1=(num1*4)*(num1*4);
            res2=(num2*4)*(num2*4);
            if(res1>res2){
            printf("el primer numero %d", res1);
            printf ("es mayor al segundo numero %d", res2);
            }
            if(res1<res2){
            printf("el primer numero %d", res1);
            printf ("es menor al segundo numero %d", res2);
            }
            if (res1==res2){
            printf("el primer numero %d", res1);
            printf ("es iguqal al segundo numero %d", res2);
            }
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: se utiliza int para definir cuatro cosas, los dos numeros y los dos resultados para luego compararlos.",
            "Pista 2: tienes que hacer dos operaciones que son las siguientes: res1=(num1*4)*(num1*4) y res2=(num2*4)*(num2*4).",
            "Pista 3: tienes que crear 3 if, si el primer numero es mayor al segundo, si el primer numero es menor al segundo o si el primero numero es igual al segundo.",
        ]
    }
];


let currentLevel = 0;
let attempts = 0;
let hintsUsed = 0;



function compareCode(correctCode, userCode) {
    const cleanCorrectCode = correctCode.replace(/\s+/g, '').trim();
    const cleanUserCode = userCode.replace(/\s+/g, '').trim();
    return cleanCorrectCode === cleanUserCode;
}

const imagesInitial = {
    left: 'lobo-removebg-preview.png',
    right: 'creeper.png'
};

const imagesWin = {
    left: 'gano lobo.gif', // Cambiar por tus imágenes de victoria
    right: 'perdio.gif'
};

const imagesLose = {
    left: 'lobo perdio.png', // Cambiar por tus imágenes de derrota
    right: 'gano.gif'
};

function changeImages(images) {
    document.getElementById('left-image').src = images.left;
    document.getElementById('right-image').src = images.right;
}

function checkAnswer() {
    const code = document.getElementById('code-input').value.trim();
    const level = levels[currentLevel];

    if (level.correctAnswer(code)) {
        currentLevel++;
        attempts = 0;

        // Cambia la imagen de Steve temporalmente al avanzar de nivel
        document.getElementById('steve').src = 'stevefeliz.png';

        // Usamos setTimeout para esperar un poco antes de mostrar el mensaje y cargar el siguiente nivel
        setTimeout(() => {
            if (currentLevel < levels.length) {
                alert('¡Correcto! Avanzas al siguiente nivel.');
                loadLevel(); // Carga el siguiente nivel después de la alerta
            } else {
                changeImages(imagesWin); // Cambiar imágenes a las de victoria
                endGame('Ganaste 😊 Muchas gracias', 'steve-steve-dance.gif');
            }
        }, 50);
    } else {
        attempts++;
        if (attempts >= 5) {
            changeImages(imagesLose); // Cambiar imágenes a las de derrota
            endGame('Perdiste 😢 siguelo intentando', 'stevetriste.png');
        } else {
            document.getElementById('feedback').textContent = 'Respuesta incorrecta. Intentos restantes: ' + (5 - attempts);
        }
    }
}

function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('level-description').textContent = level.description;
    document.getElementById('code-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint').textContent = '';
    hintsUsed = 0; // Restablece pistas para cada nivel
    document.getElementById('restart-button').style.display = 'none'; // Ocultar botón de reinicio
    document.getElementById('show-instructions').style.display = 'block'; // Mostrar botón de instrucciones

    // Restaurar la imagen normal de Steve al cargar el nivel
    document.getElementById('steve').src = 'stevenormal.png';
}


function useHint() {
    const level = levels[currentLevel];
    if (hintsUsed < 3) {
        document.getElementById('hint').textContent = '' + level.hints[hintsUsed];
        hintsUsed++;
    } else {
        document.getElementById('hint').textContent = 'No tienes más pistas disponibles.';
    }
}

function toggleInstructions() {
    const instructions = document.getElementById('instructions');
    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}

function endGame(message, steveImage) {
    document.getElementById('level-description').textContent = message;
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('steve').src = steveImage;
    document.getElementById('code-input').style.display = 'none';
    document.getElementById('controls').style.display = 'none';
    document.getElementById('restart-button').style.display = 'block';
    document.getElementById('show-instructions').style.display = 'none'; // Ocultar botón de instrucciones
    document.getElementById('instructions').style.display = 'none';

    // Pausar el audio inicial y ocultarlo
    const initialAudio = document.getElementById('initial-audio');
    if (initialAudio) {
        initialAudio.pause();        // Pausar el audio
        initialAudio.currentTime = 0; // Reiniciar el tiempo del audio
        initialAudio.style.display = 'none'; // Ocultar la barra de audio
    }

    // Reproducir el audio de victoria o derrota según corresponda
    const endAudio = document.createElement('audio');
    endAudio.id = 'end-audio';
    endAudio.loop = true;

    if (message.includes('Ganaste')) {
        endAudio.src = 'Y2meta.app - Aqua - Barbie Girl (Lyrics) (128 kbps).mp3'; // Ruta del audio de victoria
    } else {
        endAudio.src = 'Y2meta.app - música para sentirse derrotado sin copyright (128 kbps).mp3';  // Ruta del audio de derrota
    }

    endAudio.play();
    document.body.appendChild(endAudio); // Añadir el audio de victoria o derrota al DOM
    if (message.includes('Ganaste')) {
        document.getElementById('left-image').src = 'gano lobo.gif';
        document.getElementById('right-image').src = 'perdio.gif';
    } else {
        document.getElementById('left-image').src = 'lobo perdio.png';
        document.getElementById('right-image').src = 'gano.gif';
    }
}

function restartGame() {
    currentLevel = 0;
    attempts = 0;
    document.getElementById('steve').src = 'stevenormal.png';
    document.getElementById('code-input').style.display = 'block';
    document.getElementById('controls').style.display = 'block';
    loadLevel();
    
    // Volver a las imágenes originales
    changeImages(imagesInitial);
    
    const endAudio = document.getElementById('end-audio');
    if (endAudio) {
        endAudio.pause();
        endAudio.currentTime = 0; 
        endAudio.remove(); 
    }

    const initialAudio = document.getElementById('initial-audio');
    if (initialAudio) {
        initialAudio.currentTime = 0; 
        initialAudio.style.display = 'block'; 
        initialAudio.loop = true; 
    }

    document.getElementById('restart-button').style.display = 'none';
}

// Inicializa las imágenes al cargar la página
window.onload = function() {
    loadLevel();
    changeImages(imagesInitial); // Asegúrate de que se carguen las imágenes iniciales
};
