const Christmas = new Date();
Christmas.setFullYear(Christmas.getFullYear(), 11, 25);
console.log(Christmas);

const today = new Date();
// today.getFullYear(today.getFullYear(),today.getMonth(),today.getDate());
console.log(today);

if (today.getMonth()==11 && today.getDate()>25)
    { Christmas.setFullYear(Christmas.getFullYear()+1);
    }

//코딩에서의 시간
// 1일 = 1000*60*60*24
// 1시간 = 1000*60*60
// 1분 = 1000*60
// 1초 = 1000


    //christmas-today의 값이 밀리미초이기 때문에 하루밀리미초로 나눠서 얻은 값.
const oneDay = 1000*60*60*24;
const leftDays = Christmas - today;
const LeftDays= Math.ceil(leftDays/oneDay);
console.log(`Christmas is ${LeftDays} days away!`);