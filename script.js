const display = document.querySelector('.calculator-screen');

const buttons = document.querySelectorAll(".calculator-keys>button");

let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = [];
let sum = [];
let cacheValue =  "";
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        switch(operator) {
            case '+':
                button.addEventListener('click', (e) => {

                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); // zmieniamy przecinek na kropkę
                        cache.push('+'); // zapisujemy operator
                        cacheValue = ""; // czyszczenie aktualnej wartości
                        display.innerText = ""; // czyszczenie ekranu
                    }
                });

                break;

            case '-':
                button.addEventListener('click', (e) => {

                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); // zmieniamy przecinek na kropkę
                        cache.push('-'); // zapisujemy operator
                        cacheValue = ""; // czyszczenie aktualnej wartości
                        display.innerText = ""; // czyszczenie ekranu
                    }
                });

                break;

            case '*':
                button.addEventListener('click', (e) => {

                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); // zmieniamy przecinek na kropkę
                        cache.push('*'); // zapisujemy operator
                        cacheValue = ""; // czyszczenie aktualnej wartości
                        display.innerText = ""; // czyszczenie ekranu
                    }
                });

                break;

            case '/':
                button.addEventListener('click', (e) => {

                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); // zmieniamy przecinek na kropkę
                        cache.push('/'); // zapisujemy operator
                        cacheValue = ""; // czyszczenie aktualnej wartości
                        display.innerText = ""; // czyszczenie ekranu
                    }
                });

                break;

        }
    }else if(button.classList.contains('decimal')) {

        button.addEventListener('click', (e) => {
            if (!cacheValue.includes(',')) { // sprawdzamy aby przecinek nie był dodany dwa razy
                setDisplayValue(e.target.value);
            }
        });

    }else if(button.classList.contains('all-clear')) {

        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay();
            cache = [];
        });

    }else if(button.classList.contains('equal-sign')) {

        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            equal();
            sum = [];
        });

    }else {

        buttonNum.push(button);
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value);
            console.log(e.target.value);
        });

    }

});

function setDisplayValue(value) {
    display.innerText += value;  // dodajemy wartość do wyświetlacza
    console.log("value:"+value)  // logujemy wartość w konsoli
    cacheValue += value;  // dodajemy wartość do cache
}

function clearDisplay() {
    display.innerText = "";  // czyścimy wyświetlacz
    cacheValue = "";  // czyścimy zmienną cacheValue
}

let test = true;  // zmienna testowa

function add(a) {
    cache.push(a);  // dodajemy liczbę do cache
    console.log(cache);  // logujemy zawartość cache
    if(cache.length >= 2) {  // sprawdzamy czy mamy co najmniej dwie liczby w cache
        clearDisplay();  // czyścimy wyświetlacz
        let sum = cache[0] + cache[1];  // dodajemy dwie liczby
        cache = [];  // czyścimy cache
        cache.push(sum);  // zapisujemy wynik w cache
        setDisplayValue(cache);  // wyświetlamy wynik
    }
    else {
        clearDisplay();  // jeśli mamy tylko jedną liczbę, czyścimy wyświetlacz
    }
}

function subtract(a) {
    cache.push(a);  // dodajemy liczbę do cache
    console.log(cache);  // logujemy zawartość cache
    if(cache.length >= 2) {  // sprawdzamy czy mamy co najmniej dwie liczby w cache
        clearDisplay();  // czyścimy wyświetlacz
        let sum = cache[0] - cache[1];  // odejmujemy dwie liczby
        cache = [];  // czyścimy cache
        cache.push(sum);  // zapisujemy wynik w cache
        setDisplayValue(cache);  // wyświetlamy wynik
    }
    else {
        clearDisplay();  // jeśli mamy tylko jedną liczbę czyścimy wyświetlacz
    }
}

function multiplication(a) {
    cache.push(a);  // dodajemy liczbę do cache
    console.log(cache);  // logujemy zawartość cache
    if(cache.length >= 2) {  // sprawdzamy czy mamy co najmniej dwie liczby w cache
        clearDisplay();  // czyścimy wyświetlacz
        let sum = cache[0] * cache[1];  // mnożymy dwie liczby
        cache = [];  // czyścimy cache
        cache.push(sum);  // zapisujemy wynik w cache
        setDisplayValue(cache);  // wyświetlamy wynik
    }
    else {
        clearDisplay();  // jeśli mamy tylko jedną liczbę, czyścimy wyświetlacz
    }
}

function fission(a) {
    cache.push(a);  // dodajemy liczbę do cache
    console.log(cache);  // logujemy zawartość cache
    if(cache.length >= 2) {  // sprawdzamy, czy mamy co najmniej dwie liczby w cache
        clearDisplay();  // czyścimy wyświetlacz
        let sum = cache[0] / cache[1];  // dzielimy dwie liczby
        cache = [];  // czyścimy cache
        cache.push(sum);  // zapisujemy wynik w cache
        setDisplayValue(cache);  // wyświetlamy wynik
    }
    else {
        clearDisplay();  // jeśli mamy tylko jedną liczbę, czyścimy wyświetlacz
    }
}

function equal() {
    if (cache.length >= 2 && cacheValue !== "") {
        cache.push(parseFloat(cacheValue.replace(',', '.'))); // zmieniamy przecinek na kropkę

        const num1 = cache[0]; // pierwsza liczba
        const operator = cache[1]; // operator
        const num2 = cache[2]; // druga liczba

        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "błąd";
        }

        // wyświetlamy wynik na ekranie
        display.innerText = result.toString().replace('.', ','); // zmieniamy kropkę na przecinek

        // czyszczenie cache i zapisanie wyniku do dalszych obliczeń
        cache = [result]; // zapisujemy wynik jako pierwszą liczbę dla następnych operacji
        cacheValue = result.toString().replace('.', ','); // zmieniamy kropkę na przecinek
    }
}
