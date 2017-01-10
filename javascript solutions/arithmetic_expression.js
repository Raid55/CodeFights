function arithmeticExpression(A, B, C) {
    if(A*B==C){
        return(true);
    }else if(A/B==C){
        return(true);
    }else if(A-B==C){
        return(true);
    }else if(A+B==C){
        return(true);
    } else{
        return(false);
    }
}
