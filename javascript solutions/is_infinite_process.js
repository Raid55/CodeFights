function isInfiniteProcess(a, b) {
    while(a!=b){
        a++;
        b--;
        if(a>b){
            return(true);
        } else{
            continue;
        }
    }
    return(false)
}
