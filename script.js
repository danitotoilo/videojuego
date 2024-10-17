const initialQuestions = [
    {
        description: "Pregunta 1: Escribe una función en C++ que solicite el nombre del usuario y lo imprima.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            char nombre[50];
            printf("Digite su nombre:");
            scanf("%s", nombre);
            printf("Hola %s", nombre);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa `char` para definir el nombre del usuario.",
            "Pista 2: Usa `scanf` para capturar el nombre.",
            "Pista 3: Usa `printf` para mostrar el nombre con un mensaje."
        ]
    },
    // Aquí puedes agregar las otras 4 preguntas iniciales
    {
        description: "Pregunta 2: Escribe una función en C++ que solicite un número y lo imprima.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            int numero;
            printf("Digite un número:");
            scanf("%d", &numero);
            printf("El número es %d", numero);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa `int` para definir el número.",
            "Pista 2: Usa `scanf` para capturar el número.",
            "Pista 3: Usa `printf` para mostrar el número con un mensaje."
        ]
    },
    {
        description: "Pregunta 3: Escribe una función en C++ que solicite dos números para hacer una multiplicación.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            int num1, num2, res;
            printf("Digite el primer número:");
            scanf("%d", &num1);
            printf("Digite el segundo número:");
            scanf("%d", &num2);
            res = num1 * num2;
            printf("El resultado de la multiplicación es %d", res);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa `int` para definir los números.",
            "Pista 2: Usa `scanf` para capturar los números.",
            "Pista 3: Usa `printf` para mostrar el resultado de la multiplicación."
        ]
    },
    {
        description: "Pregunta 4: Escribe una función en C++ que solicite la base y la altura de un triángulo y calcule su área.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            float base, altura, area;
            printf("Digite la base del triángulo:");
            scanf("%f", &base);
            printf("Digite la altura del triángulo:");
            scanf("%f", &altura);
            area = (base * altura) / 2;
            printf("El área del triángulo es %f", area);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa `float` para definir base, altura y área.",
            "Pista 2: Usa `scanf` para capturar base y altura.",
            "Pista 3: Usa `printf` para mostrar el área calculada."
        ]
    },
    {
        description: "Pregunta 5: Escribe una función en C++ que solicite el año de nacimiento del usuario y calcule su edad.",
        correctAnswer: function(code) {
            const correctCode = `
            #include"stdio.h"
            main()
            {
            int nacimiento, edad;
            printf("Digite su año de nacimiento:");
            scanf("%d", &nacimiento);
            edad = 2024 - nacimiento;
            printf("Su edad es %d", edad);
            }
            `;
            return compareCode(correctCode, code);
        },
        hints: [
            "Pista 1: Usa `int` para definir el año de nacimiento y la edad.",
            "Pista 2: Usa `scanf` para capturar el año de nacimiento.",
            "Pista 3: Usa `printf` para mostrar la edad calculada."
        ]
    }
];

let initialPhase = true;  // Variable para controlar si estamos en las 5 preguntas iniciales

// Modificar la función checkAnswer para que maneje las 5 preguntas y luego la transición a los niveles
function checkAnswer() {
    const code = document.getElementById('code-input').value.trim();

    if (initialPhase) {
        const question = initialQuestions[currentLevel];
        if (question.correctAnswer(code)) {
            currentLevel++;
            attempts = 0;

            if (currentLevel < initialQuestions.length) {
                alert('¡Correcto! Vamos a la siguiente pregunta.');
                loadInitialQuestion();
            } else {
                initialPhase = false;
                showPracticeTransition(); // Mostrar transición después de las preguntas iniciales
            }
        } else {
            attempts++;
            if (attempts >= 5) {
                changeImages(imagesLose); // Cambiar imágenes a las de derrota
                endGame('Perdiste 😢 siguelo intentando', 'stevetriste.png');
            } else {
                document.getElementById('feedback').textContent = 'Respuesta incorrecta. Intentos restantes: ' + (5 - attempts);
            }
        }
    } else {
        const level = levels[currentLevel - initialQuestions.length]; // Ajustar el índice para los niveles
        if (level.correctAnswer(code)) {
            currentLevel++;
            attempts = 0;

            if (currentLevel < initialQuestions.length + levels.length) {
                alert('¡Correcto! Vamos al siguiente nivel.');
                loadLevel();
            } else {
                changeImages(imagesWin); // Cambiar imágenes a las de victoria
                endGame('Ganaste 😊 Muchas gracias', 'steve-steve-dance.gif');
            }
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
}

// Mostrar transición después de las preguntas iniciales
function showPracticeTransition() {
    document.getElementById('level-description').textContent = 'Ahora pondremos a prueba la práctica';
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('code-input').style.display = 'none';
    document.getElementById('controls').style.display = 'none';

    // Crear botón "Comenzar Niveles"
    const startLevelsButton = document.createElement('button');
    startLevelsButton.textContent = 'Comenzar niveles';
    startLevelsButton.onclick = function() {
        currentLevel = 0;  // Reiniciar el nivel para los niveles
        loadLevel();  // Cargar el primer nivel
        document.getElementById('code-input').style.display = 'block';  // Mostrar el input de código
        document.getElementById('controls').style.display = 'block';  // Mostrar los controles
        startLevelsButton.remove();  // Eliminar el botón después de hacer clic
    };
    document.getElementById('game-container').appendChild(startLevelsButton);
}

function loadInitialQuestion() {
    const question = initialQuestions[currentLevel];
    document.getElementById('level-description').textContent = question.description;
    document.getElementById('code-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint').textContent = '';
    hintsUsed = 0; // Restablece pistas para cada pregunta
}
