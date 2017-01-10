function phoneCall(min1, min2_10, min11, s) {
    var min = 0;
    var c = s;
    if(c-min1 < 0){
        return(min)
    } else if (c-min1 >=0){
        min++;
        c=c-min1;
    }
    for(var i = 2;i<=10;i++){
        if(c>=min2_10) {
            min++;
            c=c-min2_10;
        } else {
            return(min);
        }
    }
    while(c>=min11){
        min++;
        c=c-min11;
    }
    return(min);
}

