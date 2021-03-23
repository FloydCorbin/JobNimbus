/*JobNimbus_FloydCorbin*/

/* 
Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. Please unit test with the following use cases (and any others you choose to ensure functionality):

Test string - Expected result
{} - True
}{ - False (closed bracket can't proceed all open brackets.)
{{} - False (one bracket pair was not closed)
"" - True. (no brackets in the string will return True)
*/

function bracketCheck(input) {
    let count = 0;

    for (i = 0; i < input.length; i++) {

        if (input[i] == "{") {
            count++;
        } else if (input[i] == "}" && count == 0) {
            return false;
        } else if (input[i] == "}" && count > 0) {
            count--;
        } else {
            return true;
        }
    }

    if (count == 0) {
        return true;
    } else {
        return false;
    };
};

console.log("{} returns " + bracketCheck("{}"));
console.log("}{ returns " + bracketCheck("}{"));
console.log("{{} returns " + bracketCheck("{{}"));
console.log('"" returns ' + bracketCheck('""'));