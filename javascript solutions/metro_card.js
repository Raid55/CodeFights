function metroCard(lastNumberOfDays) {
    switch(lastNumberOfDays){
        case 28:
            return([31]);
            break;
        case 30:
            return([31]);
            break;
        case 31:
            return([28,30,31]);
    }
}
