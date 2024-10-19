const levels = [
    {
        description: "Nivel 1: Escribe una función en C++ que solicite dos enteros y los sume.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int a, b;
            printf("Digite el primer número: ");
            scanf("%d", &a);
            printf("Digite el segundo número: ");
            scanf("%d", &b);
            printf("La suma es: %d", a + b);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Se utiliza int para definir dos números.",
            "Pista 2: Usa scanf para leer los números.",
            "Pista 3: Muestra el resultado con printf.",
        ]
    },
    {
        description: "Nivel 2: Escribe una función en C++ que solicite tres enteros y calcule el producto.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int a, b, c;
            printf("Digite el primer número: ");
            scanf("%d", &a);
            printf("Digite el segundo número: ");
            scanf("%d", &b);
            printf("Digite el tercer número: ");
            scanf("%d", &c);
            printf("El producto es: %d", a * b * c);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Define tres números enteros.",
            "Pista 2: Usa scanf para leer los números.",
            "Pista 3: Muestra el producto con printf.",
        ]
    },
    {
        description: "Nivel 3: Escribe una función en C++ que solicite cuatro números decimales y calcule el promedio.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            float a, b, c, d, promedio;
            printf("Digite el primer número: ");
            scanf("%f", &a);
            printf("Digite el segundo número: ");
            scanf("%f", &b);
            printf("Digite el tercer número: ");
            scanf("%f", &c);
            printf("Digite el cuarto número: ");
            scanf("%f", &d);
            promedio = (a + b + c + d) / 4;
            printf("El promedio es: %f", promedio);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa float para los números.",
            "Pista 2: Lee los números con scanf y formato %f.",
            "Pista 3: Calcula el promedio dividiendo por 4.",
        ]
    },
    {
        description: "Nivel 4: Escribe una función en C++ que solicite un número entero y determine si es positivo o negativo.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int num;
            printf("Digite un número: ");
            scanf("%d", &num);
            if (num > 0) {
            printf("El número es positivo");
            } else if (num < 0) {
            printf("El número es negativo");
            } else {
            printf("El número es cero");
            }
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa int para definir el número.",
            "Pista 2: Usa un if para comprobar si es positivo o negativo.",
            "Pista 3: Considera también el caso en que el número sea cero.",
        ]
    },
    {
        description: "Nivel 5: Escribe una función en C++ que solicite un número entero y determine si es par o impar.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int num;
            printf("Digite un número: ");
            scanf("%d", &num);
            if (num % 2 == 0) {
            printf("El número es par");
            } else {
            printf("El número es impar");
            }
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa int para definir el número.",
            "Pista 2: Usa el operador % para verificar si es par o impar.",
            "Pista 3: Muestra el resultado con printf.",
        ]
    },
    // Tus niveles actuales (6, 7, 8)
    {
        description: "Nivel 6: Escribe una función en lenguaje C que solicite dos numeros para hacer una suma.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main() {
            int num1, num2;
            printf("Ingrese el primer número: ");
            scanf("%d", &num1);
            printf("Ingrese el segundo número: ");
            scanf("%d", &num2);
            printf("La suma es: %d", num1 + num2);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: ["Pista 1: se utiliza int para definir tres cosas, los dos numeros y el resultado.",
            "Pista 2: tienes que decir: digite un numero, y despues dices: digite un segundo numero.",
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
