$(function () {

    // jQuery methods go here...

    $('#translateButton').click((e) => {

        var input = $('#roman').val().toUpperCase();

        $(".result").text(romanToInteger(input));

        console.log(romanToInteger(input))

    })




    function romanToInteger(roman) {

        var regexRomanChecker = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

        if(!regexRomanChecker.test(roman)){
            return "That's not a roman numeral."
        }
    
        
        // set result to zero
        var result = 0
        // split the string into an array
        var romanArray = roman.split("")
        // do the following for each item in romanArray
        romanArray.forEach(function (numeral, index) {

            var letter = numeral
            // references the next index
            var nextLetter = romanArray[index + 1]

            // edge cases that begin with I
            if (letter === 'I' && nextLetter === 'V') {
                result += 4
                // we must remove the first index, so that it doesn't get factored twice
                romanArray.splice(0, 1)
            } else if (letter === 'I' && nextLetter === 'X') {
                result += 9
                romanArray.splice(0, 1)
                // if a V or X dont come after I, it will be added as 1
            } else if (letter === 'I') {
                result += 1
            }

            // edge cases that begin with X
            if (letter === 'X' && nextLetter === 'L') {
                result += 40
                romanArray.splice(0, 1)
            } else if (letter === 'X' && nextLetter === 'C') {
                result += 90
                romanArray.splice(0, 1)
            } else if (letter === 'X') {
                result += 10
            }

            // edge cases that begin with C
            if (letter === 'C' && nextLetter === 'D') {
                result += 400
                romanArray.splice(0, 1)
            } else if (letter === 'C' && nextLetter === 'M') {
                result += 900
                romanArray.splice(0, 1)
            } else if (letter === 'C') {
                result += 100
            }

            // add remaining letters individually...
            if (letter === 'V') {
                result += 5
            } else if (letter === 'L') {
                result += 50
            } else if (letter === 'D') {
                result += 500
            } else if (letter === 'M') {
                result += 1000
            }

        })
        return result
        console.log(`RESULT: ${result}`)

    }










});