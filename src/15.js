function difference(){
    const num = document.querySelector('.difference').value;
    const write = document.querySelector('.differenceResult');
    if(num <= 13){
        const result = 13 -num;
        console.log(result);
        write.innerHTML = result;
    }
    else{
        const result2 = 2*(num -13);
        console.log(result2);
        write.innerHTML = result2;
    }
}
