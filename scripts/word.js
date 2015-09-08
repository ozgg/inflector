/**
 * Russian words
 */

function Word(infinitive) {
    this.infinitive = infinitive;
}
Word.prototype.inArray = function (needle, haystack) {
    for (var i in haystack) {
        if (haystack.hasOwnProperty(i) && haystack[i] === needle) {
            return true;
        }
    }

    return false;
};
