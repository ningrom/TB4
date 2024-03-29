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

    // Pembatas
    tapeCells.push(new Cell("1"));

    
    // Memasukkan 0 atau 1 sejumlah num2
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

    // Pembatas
    tapeCells.push(new Cell("1"));

    // Blank symbol di akhir tape
    tapeCells.push(new Cell("B"));
    tapeCells.push(new Cell("B"));
}

// Show answer
function showAns() {
    // Pembagian
    let ans = Math.floor(num1.value / num2.value);

    // Menampilkan jawaban
    let ansField = document.getElementById("ans");
    ansField.textContent = ans;
}

// next move button
function executeNextMove() {
    // Pembagian
    // if exist
    if (tapeCells[0]) {
        // Deactivate 
        curCell = document.getElementsByClassName("active");
        for (i = 0; i < curCell.length; i++) {
            curCell[i].className = curCell[i].className.replace(" active", "");
        }

        // STATE 0
        if (state == 0) {
            // 0 / 0 , R to state 1
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 1);
            }
            // 1 / 1 , R to state 6
            else if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 6);
            }
        }

        // STATE 1
        else if (state == 1) {
            // 0 / 0 , R to state 1
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 1);
            }
            // C / C , R to state 2
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 2);
            }
        }

        // STATE 2
        else if (state == 2) {
            // 0 / 0, L to state 3
            if (tapeCells[it].symbol == "0") {
                move("0", -1, 3);
            }
            // 1 / 1, L to state 4
            else if (tapeCells[it].symbol == "-0") {
                move("-0", -1, 4);
            }
        }

        // STATE 3
        else if (state == 3) {
            // 0 / 0, L to state 3
            if (tapeCells[it].symbol == "0") {
                move("0", -1, 3);
            }
            // C / C, L to state 3
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 3);
            }
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 12);
            }
        }

        // STATE 4
        else if (state == 4) {
            // C / C, L to state 5
            if (tapeCells[it].symbol == "1") {
                move("1", -1, 5);
            }
        }

        // STATE 5
        else if (state == 5) {
            // 0 / 1, L to state 5
            if (tapeCells[it].symbol == "0") {
                move("-0", -1, 5);
            }
            // B / B, R to state 25
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 25);
            }
        }

        // STATE 6
        else if (state == 6) {
            // 1 / 1, R to state 6
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 6);
            }
            // C / C, R to state 7
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 7);
            }
        }

        // STATE 7
        else if (state == 7) {
            // 0 / 1, R to state 10
            if (tapeCells[it].symbol == "0") {
                move("-0", 1, 10);
            }
            // 1 / 1, R to state 8
            else if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 8);
            }
        }

        // STATE 8
        else if (state == 8) {
            // 1 / 1, R to state 8
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 8);
            }
            // C / C, R to state 8
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 8);
            }
            // B / B, L to state 9
            else if (tapeCells[it].symbol == "B") {
                move("B", -1, 9);
            }
        }

        // STATE 9
        else if (state == 9) {
            // 1 / 0, L to state 9
            if (tapeCells[it].symbol == "-0") {
                move("0", -1, 9);
            }
            // C / C, L to state 9
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 9);
            }
            // B / B, R to state 12
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 12);
            }
        }

        // STATE 10
        else if (state == 10) {
            // 0 / 1, R to state 10
            if (tapeCells[it].symbol == "0") {
                move("-0", 1, 10);
            }
            // C / C, R to state 10
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 10);
            }
            // B / B, L to state 11
            else if (tapeCells[it].symbol == "B") {
                move("B", -1, 11);
            }
        }

        // STATE 11
        else if (state == 11) {
            // 1 / 1, L to state 11
            if (tapeCells[it].symbol == "-0") {
                move("-0", -1, 11);
            }
            // C / C, L to state 11
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 11);
            }
            // B / B, R to state 25
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 25);
            }
        }

        // STATE 12
        else if (state == 12) {
            // 0/0,R to state 12
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 12);
            }
            // C/C,R to state 13
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 13);
            }
        }

        // STATE 13
        else if (state == 13) {
            // 0 / 0, R to state 13
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 13);
            }
            // C / C,L to state 14
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 14);
            }
        }

        // STATE 14
        else if (state == 14) {
            // 0 / X, L to state 15
            if (tapeCells[it].symbol == "0") {
                move("X", -1, 15);
            }
            // C / C, R to state 19
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 19);
            }
        }

        // STATE 15
        else if (state == 15) {
            // 0 / 0, L to state 15
            if (tapeCells[it].symbol == "0") {
                move("0", -1, 15);
            }
            // C / C, L to state 16
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 16);
            }
        }

        // STATE 16
        else if (state == 16) {
            // Y / Y, L to state 16
            if (tapeCells[it].symbol == "Y") {
                move("Y", -1, 16);
            }
            // 0 / Y, R to state 17
            else if (tapeCells[it].symbol == "0") {
                move("Y", 1, 17);
            }
            // B / B, R to state 22
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 22);
            }
        }

        // STATE 17
        else if (state == 17) {
            // Y / Y, R to state 17
            if (tapeCells[it].symbol == "Y") {
                move("Y", 1, 17);
            }
            // C / C, R to state 18
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 18);
            }
        }

        // STATE 18
        else if (state == 18) {
            // 0 / 0, R to state 18
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 18);
            }
            // X / X, L to state 14
            else if (tapeCells[it].symbol == "X") {
                move("X", -1, 14);
            }
        }

        // STATE 19
        else if (state == 19) {
            // X / 0, R to state 19
            if (tapeCells[it].symbol == "X") {
                move("0", 1, 19);
            }
            // C / C, R to state 20
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 20);
            }
        }

        // STATE 20
        else if (state == 20) {
            // 0 / 0, R to state 20
            if (tapeCells[it].symbol == "0") {
                move("0", 1, 20);
            }
            // B / 0, L to state 21
            else if (tapeCells[it].symbol == "B") {
                move("0", -1, 21, 1);
            }
        }

        // STATE 21
        else if (state == 21) {
            // 0 / 0, L to state 21
            if (tapeCells[it].symbol == "0") {
                move("0", -1, 21);
            }
            // C / C, L to state 14
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 14);
            }
        }

        // STATE 22
        else if (state == 22) {
            // Y / B, R to state 22
            if (tapeCells[it].symbol == "Y") {
                move("B", 1, 22);
            }
            // C / B, R to state 23
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 23);
            }
        }

        // STATE 23
        else if (state == 23) {
            // 0 / B, R to state 23
            if (tapeCells[it].symbol == "0") {
                move("B", 1, 23);
            }
            // X / B, R to state 23
            else if (tapeCells[it].symbol == "X") {
                move("B", 1, 23);
            }
            // C / B, R to state 24
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 24);
            }
        }

        // STATE 24 (FINAL STATE)
        else if (state == 24) {
            reachedEndState();
        }

        // STATE 25
        else if (state == 25) {
            // 1/1,R to state 25
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 25);
            }
            // C/C,R to state 26
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 26);
            }
        }

        // STATE 26
        else if (state == 26) {
            // 1 / 1, R to state 26
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 26);
            }
            // C / C, L to state 27
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 27);
            }
        }

        // STATE 27
        else if (state == 27) {
            // 1 / X, L to state 28
            if (tapeCells[it].symbol == "-0") {
                move("X", -1, 28);
            }
            // C / C, R to state 32
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 32);
            }
        }

        // STATE 28
        else if (state == 28) {
            // 1 / 1, L to state 28
            if (tapeCells[it].symbol == "-0") {
                move("-0", -1, 28);
            }
            // C / C, L to state 16
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 29);
            }
        }

        // STATE 29
        else if (state == 29) {
            // Y / Y, L to state 29
            if (tapeCells[it].symbol == "Y") {
                move("Y", -1, 29);
            }
            // 1 / Y, R to state 30
            else if (tapeCells[it].symbol == "-0") {
                move("Y", 1, 30);
            }
            // B / B, R to state 35
            else if (tapeCells[it].symbol == "B") {
                move("B", 1, 35);
            }
        }

        // STATE 30
        else if (state == 30) {
            // Y / Y, R to state 30
            if (tapeCells[it].symbol == "Y") {
                move("Y", 1, 30);
            }
            // C / C, R to state 31
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 31);
            }
        }

        // STATE 31
        else if (state == 31) {
            // 1 / 1, R to state 31
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 31);
            }
            // X / X, L to state 27
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 27);
            }
        }

        // STATE 32
        else if (state == 32) {
            // X / 1, R to state 32
            if (tapeCells[it].symbol == "1") {
                move("-0", 1, 32);
            }
            // C / C, R to state 33
            else if (tapeCells[it].symbol == "1") {
                move("1", 1, 33);
            }
        }

        // STATE 33
        else if (state == 33) {
            // 1 / 1, R to state 33
            if (tapeCells[it].symbol == "-0") {
                move("-0", 1, 33);
            }
            // B / 1, L to state 34
            else if (tapeCells[it].symbol == "B") {
                move("-0", -1, 34, 1);
            }
        }

        // STATE 34
        else if (state == 34) {
            // 1 / 1, L to state 34
            if (tapeCells[it].symbol == "-0") {
                move("-0", -1, 34);
            }
            // C / C, L to state 27
            else if (tapeCells[it].symbol == "1") {
                move("1", -1, 27);
            }
        }

        // STATE 35
        else if (state == 35) {
            // Y / B, R to state 35
            if (tapeCells[it].symbol == "Y") {
                move("B", 1, 35);
            }
            // C / B, R to state 36
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 36);
            }
        }

        // STATE 36
        else if (state == 36) {
            // 1 / B, R to state 36
            if (tapeCells[it].symbol == "-0") {
                move("B", 1, 36);
            }
            // X / B, R to state 36
            else if (tapeCells[it].symbol == "X") {
                move("B", 1, 36);
            }
            // C / B, R to state 24
            else if (tapeCells[it].symbol == "1") {
                move("B", 1, 24);
            }
        }
    }
}