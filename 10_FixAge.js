function fixAge(array) {
    let filteredArray = array.filter(number => number >= 18 && number <= 60);
    return filteredArray.length ? filteredArray.join(',') : 'NA';
}