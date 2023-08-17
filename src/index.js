module.exports = function toReadable (number) {
    let obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'one hundred',
        '200': 'two hundred',
        '300': 'three hundred',
        '400': 'four hundred',
        '500': 'five hundred',
        '600': 'six hundred',
        '700': 'seven hundred',
        '800': 'eight hundred',
        '900': 'nine hundred'
    };
    
    const str = number + '';
    const arr = str.split(''); 
    
    if (arr.length == 1){
        const res = arr.map(i => obj[i]);
        return res.join(' ');
    } else if (arr.length == 2) {
        if (arr[0] == 1) {
            const furstNumber = arr[0] + arr[1];
            const newArr = [];
            newArr.push(furstNumber);
            const res = newArr.map(i => obj[i]);
            return res.join(' ');
        } else {
            arr[0] = arr[0] * 10;
            const res = arr.map(i => obj[i]);
            return res.join(' ').replace(/ zero/ig, '');
        }
    } else if (arr.length == 3) {
        if (arr[1] == 1) {
            const newArr = [];
            arr[0] = arr[0] * 100;
            newArr.push(arr[0]);
            const firstNumber = arr[1] + arr[2];
            newArr.push(firstNumber);
            console.log(newArr);
            const res = newArr.map(i => obj[i]);
            return res.join(' ');
        } 
        else {
            arr[0] = arr[0] * 100;
            arr[1] = arr[1] * 10;
            const res = arr.map(i => obj[i]);
            return res.join(' ').replace(/ zero/ig, '').replace(/zero /ig, '');
        }
    }
}



