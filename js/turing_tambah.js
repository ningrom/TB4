let num1 = document.getElementById("num1");     // Number 1
let num2 = document.getElementById("num2");     // Number 2

// tampilkan tape
function execute() {
    // Clear
    executeClear();

    // Enable speed option
    enableSpeed();

    // Enable button play, nextmove, clear
    enableButton(0);
    enableButton(2);
    enableButton(3);

    // Disable button pause
    disableButton(1);

    // Menambah blank symbol di awal
    tapeCells.push(new Cell("B"));
    tapeCells.push(new Cell("B"));
    tmTape.childNodes[1].className += " active";
    it = 2; // Awal head
    state = 0; // Awal state

    // Memasukkan 0 atau 1 sejumlah num1
    if (num1.value < 0) {
        for (i = 0; i > num1.value; i--) {
            tapeCells.push(new Cell("-0"));  // 1 sebagai negatif
        }
    }
    else if (num1.value > 0) {
        for (i = 0; i < num1.value; i++) {
            tapeCells.push(new Cell("0"));  // 0 sebagai positif
        }
    }

    tapeCells.push(new Cell("1"));

    if (num2.value < 0) {
        for (i = 0; i > num2.value; i--) {
            tapeCells.push(new Cell("-0"));  // 1 sebagai negatif
        }
    }
    else if (num2.value > 0) {
        for (i = 0; i < num2.value; i++) {
            tapeCells.push(new Cell("0"));  // 0 sebagai positif
        }
    }
    tapeCells.push(new Cell("1"));

    // Blank symbol di akhir tape
    tapeCells.push(new Cell("B"));
    tapeCells.push(new Cell("B"));
}

// Show answer
function showAns() {
    // Penjumlahan
    let ans = +num1.value + +num2.value;

    // Menampilkan jawaban
    let ansField = document.getElementById("ans");
    ansField.textContent = ans;
}

// next move button
function executeNextMove() {
    // Penjumlahan
    // if exist
    if (tapeCells[0]) {
        // Deactivate 
        curCell = document.getElementsByClassName("active");
        for (i = 0; i < curCell.length; i++) {
            curCell[i].className = curCell[i].className.replace(" active", "");
        }

        // STATE 0
        if (state == 0) {
            // 0 / 0, R to state 1
            if (tapeCells[it].symbol == "0") {
                move("B", 1, 1);
            }
            else if (tapeCells[it].symbol == "-0") {
                move("B", 1, 1);
            }
            // 1 / 1, R to state 11
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 2);
            }

        }

        // STATE 1
        else if (state == 1) {
            // 0 / 0, R to state 1
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 1);
            }
            // X / X, R to state 2
            else if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 2);
            }
            else if (tapeCells[it].symbol == "1") {
                move("0", 1, 2);
            }
        }

        // STATE 2
        else if (state == 2) {
            // 0 / 0, R to state 3
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 2);
            }
            // 1 / Y, L to state 6
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 3);
            }
        }

        // STATE 3
        // else if (state == 3) {
        //     // 0 / 0, R to state 3
        //     if (tapeCells[it].symbol == "0") {
        //         move("0", -1, 3);
        //     }
        //     else if (tapeCells[it].symbol == "-0") {
        //         move("-0", -1, 3);
        //     }
        //     // B / B, L to state 4
        //     else if (tapeCells[it].symbol == "1") {
        //         move("1", -1, 4);
        //     }
        // }

        // // STATE 4
        // else if (state == 4) {
        //     // 0 / B, L to state 5
        //     if (tapeCells[it].symbol == "0") {
        //         move("0", -1, 4);
        //     }
        //     else if (tapeCells[it].symbol == "X") {
        //         move("X", 1, 0);
        //     }
        // }

        // // STATE 5
        // else if (state == 5) {
        //     // 0 / 0, L to state 5
        //     if (tapeCells[it].symbol == "B") {
        //         move("0", -1, 3);
        //     }
        //     // X / 0, L to state 10
        //     else if (tapeCells[it].symbol == "-0") {
        //         move("0", -1, 3);
        //     }
        // }

        // // STATE 6
        // else if (state == 6) {
        //     // X / X, L to state 6
        //     if (tapeCells[it].symbol == "B") {
        //         move("B", 1, 6);
        //     }
        //     // 0 / Y, R to state 7
        //     else if (tapeCells[it].symbol == "0") {
        //         move("0", 1, 6);
        //     }
        //     else if (tapeCells[it].symbol == "B") {
        //         move("B", -1, 7);
        //     }
        // }

        // // STATE 7
        else if (state == 3) {
            // X / X, R to state 7

            reachedEndState();
        }

        // // STATE 8
        // else if (state == 8) {
        //     // X / B, L to state 8
        //     if (tapeCells[it].symbol == "B") {
        //         move("B", -1, 6);
        //     }
        // }
        
       
    }
}