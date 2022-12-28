function sum(a, b) { // вычисление суммы
    return a + b;
    }
    function sub(a, b) { // вычисление разности
    return a - b;
    }
    function multiply(a, b) { // вычисление произведения
    return a*b;
    }
    function division(a, b) { // вычисление деления
    return a/b;
    }
    function exponentiation (a, b) { // вычисление возведения в степень
    return a**b;
    }
    function hypotenuse (a, b) { // вычисление гипотенузы
    return Math.sqrt(a**2+b**2);
    }
    function first_argument (a, b) { // вычисление величины угла при 1-м арг-те
    return (180/Math.PI) * (Math.atan(a/b));
    }
    function second_argument (a, b) { // вычисление величины угла при 2-м арг-те
    return 180 - 90 - (180/Math.PI) * (Math.atan(a/b));
    }

    export {sum, sub, multiply, division, exponentiation, hypotenuse, first_argument, second_argument};
    
