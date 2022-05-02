function display(string){
    const cityname = string.slice(0,3)
    if(cityname ==='Los' || cityname == 'New'){
        return string;
    }
    else{
        return '';
    }
}

console.log(display('Newyork'));
console.log(display('wellington'))