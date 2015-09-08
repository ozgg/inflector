/**
 * Слово
 */

/**
 * Слово
 *
 * @param {String} infinitive форма в инфинитиве
 * @constructor
 */
function Word(infinitive) {
    this.infinitive = infinitive;
}

/**
 * Есть ли строка в массиве?
 *
 * @param {string} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
Word.prototype.inArray = function (needle, haystack) {
    for (var i in haystack) {
        if (haystack.hasOwnProperty(i) && haystack[i] === needle) {
            return true;
        }
    }

    return false;
};

/**
 * Получить окончание слова заданной длины (по умолчанию — 1)
 *
 * @param {Number} size
 * @returns {string}
 */
Word.prototype.ending = function(size) {
    if (!size) {
        size = 1;
    }

    return this.infinitive.slice(-parseInt(size));
};

/**
 * Буква шипящая?
 *
 * @param {String} letter
 * @returns {boolean}
 */
Word.prototype.isSibilant = function(letter) {
    return this.inArray(letter, ['ж', 'ш', 'щ', 'ч', 'ц']);
};

/**
 * Слово оканчивается на один из перечисленных вариантов?
 *
 * @returns {boolean}
 */
Word.prototype.endsWith = function() {
    return Array.prototype.slice.call(arguments).some(function(variant) {
        return this.ending(variant.length) === variant;
    }, this);
};