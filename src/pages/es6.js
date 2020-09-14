import React from 'react';
import ReactEmbedGist from 'react-embed-gist';



export const ES6 = () => {
    let styles = {
        marginTop: 76,
        marginLeft: 38,
        marginRight: 38,
        marginBottom: 38
    };
    function add(a, b) { return a + b; }
    function minus(a, b) { return a - b; }
    function multiply(a, b) { return a * b; }
    function divide(a, b) {
        if (b == 0) {
            return "Erorr divide by zero";
        }
        return a / b;
    }
    function square(a, b) { return a ** b; }
    function min(a, b) { return a < b ? a : b; }
    function max(a, b) { return a > b ? a : b; }

    function showPrompt(e) {
        e.preventDefault();
        let isValid = false;
        let firstNum;
        let secondNum;
        let operator;
        do {
            firstNum = prompt("Masukkan angka pertama", "");
            if (isNaN(firstNum)) {
                alert("Nilai tidak valid. Mohon masukkan lagi")
            } else {
                isValid = true;
            }
        } while (!isValid);
        isValid = false;
        do {
            secondNum = prompt("Masukkan angka kedua", "");
            if (isNaN(secondNum)) {
                alert("Nilai tidak valid. Mohon masukkan lagi")
            } else {
                isValid = true;
            }
        } while (!isValid);
        isValid = false;
        do {
            operator = prompt("Masukkan operator. Masukkan + untuk tambah,"
                + " - untuk kurang, * untuk kali, / untuk bagi, ^ untuk pangkat, max untuk maksimum, min untuk minimum", " ");
            if (operator.trim() == '+' || operator.trim() == '-' || operator.trim() == '*'
                || operator.trim() == '/' || operator.trim() == 'max' || operator.trim() == 'min'
                || operator.trim() == '^') {
                isValid = true;
            } else {
                alert("Mohon masukkan operator yang valid.")
            }
        } while (!isValid);

        firstNum = +firstNum;
        secondNum = +secondNum;
        let res;
        switch (operator.trim()) {
            case '+':
                res = add(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case '-':
                res = minus(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case '*':
                res = multiply(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case '/':
                res = divide(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case '^':
                res = square(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case 'min':
                res = min(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            case 'max':
                res = max(firstNum, secondNum);
                alert(`Hasilnya adalah ${res}`);
                break;
            default:
                alert("Kesalahahan terjadi. Coba lagi nanti")
        }
    }

    return (
        <div style={styles}>
            <h1>Tugas ES6</h1>
            <br></br>
            <button onClick={e => showPrompt(e)} className="btn btn-primary">Calculator ES6</button>
            <ReactEmbedGist gist="ydhnwb/b4a5a1b8cea0fe49785745ca4e77eabb" />

        </div>
    )
}