export function getRandomNumber(min, max){
    //TODO return random number in tha range [min-max]
if (min > max) {
    [min,max] = [max,min];
}
return min + Math.round(Math.random() * (max - min));
}
export function getRandomElement(array){
    //TODO return a random element of array
    const index = getRandomNumber(0, array.length - 1);
    return array[index];
}
export function getRandomDate(minYear, maxYear){
    //TODO return random Date object (see constructor of the standart class Date)
    //const date = new Date(year, month, day)
    const year = getRandomNumber(minYear,maxYear);
    const month = getRandomNumber(0, 11);
    
}
