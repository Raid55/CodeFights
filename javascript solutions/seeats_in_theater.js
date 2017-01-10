function seatsInTheater(nCols, nRows, col, row) {
    var colConv = col - 1;
    var selecCol = nCols - colConv;
    var selecRow =  nRows - row;
    var rating = selecCol*selecRow;
    return(rating);
}
