function lateRide(n) {
    var min = n%60;
    var sMin = String(min);
    var hour = (n-min)/60;
    var sHour = String(hour);
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    if(isNaN(Number(sHour[0]))){
        a = 0;
    } else {
        a = Number(sHour[0]);
    }
    if(isNaN(Number(sHour[1]))){
        b = 0;
    } else {
        b = Number(sHour[1]);
    }
    if(isNaN(Number(sMin[0]))){
        c = 0;
    } else {
        c = Number(sMin[0]);
    }
    if(isNaN(Number(sMin[1]))){
        d = 0;
    } else {
        d = Number(sMin[1]);
    }

    return(a+b+c+d);
}