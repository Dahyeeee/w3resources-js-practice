// Write a JavaScript program to find the types of a given angle.
// Types of angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

const Angle ={
    Acute : 'Acute angle',
    Right : 'Right angle',
    Obtuse : 'Obtuse angle',
    Strainght : 'Straight angle'
};


function figureOutTypeOfAngle(num){
    if(num <90 && num >0){
        return Angle.Acute;
    }
    else if(num === 90){
        return Angle.Right;
    }
    else if(num>90 && num <180){
        return Angle.Obtuse;
    }
    else if(num === 180){
        return Angle.Strainght;
    }
}

console.log(figureOutTypeOfAngle(89));