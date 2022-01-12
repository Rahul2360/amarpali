function chessboard() {
    const white_piece = ['&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814'];
    const W_Pawn = '&#9817';
    const black_piece = ['&#9820', '&#9822', '&#9821', '&#9813', '&#9819', '&#9821', '&#9822', '&#9820'];
    const B_Pawn = '&#9823';
    var chessboard = document.getElementById("chessboard");

    for (var i = 0; i < 8; i++) {
        var tr = chessboard.appendChild(document.createElement("div"));
        for (var j = 0; j < 8; j++) {
            var span = document.createElement("span");
            var color = ((j + i) % 2 == 0) ? "#cecece" : "#fff";
            span.style.cssText = `background: ${color}`;
            if (i == 0) {
                span.innerHTML += '<span class="piece" id="' + i + j + '">' + white_piece[j] + '</span>';
            } else if (i == 1) {
                span.innerHTML += '<span class="piece" id="' + i + j + '">' + W_Pawn + '</span>';
            } else if (i == 6) {
                span.innerHTML += B_Pawn;
            } else if (i == 7) {
                span.innerHTML += black_piece[j];
            } else {}
            tr.appendChild(span);
        }
    }
}
chessboard()