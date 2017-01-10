function willYou(young, beautiful, loved) {
    var contra= false;
    if (loved){
        contra= !young || !beautiful;
    }else {
        contra=young&&beautiful
    }
    return(contra);
}
