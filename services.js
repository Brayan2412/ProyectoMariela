const numero=(collback,num)=>{
    if (num) {
        collback(1)
    }else{
        collback(2)
    }
}

numero((n)=>{
    console.log(n);
},true)