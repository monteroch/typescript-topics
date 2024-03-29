var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZepCodeValidator = /** @class */ (function () {
    function ZepCodeValidator() {
    }
    ZepCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZepCodeValidator;
}());
//some samples to try
var strings = ["Hello", "99587", "101"];
//Validators to use 
var validators = {};
validators["ZIP code"] = new ZepCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
//show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'" + s + "' " + (isMatch ? "matches" : "does not match") + " '" + name_1 + "'. ");
    }
}
