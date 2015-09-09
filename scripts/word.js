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
 * Названия падежей для сопоставлением с массивом окончаний
 *
 * @returns {Array}
 */
Object.defineProperty(Word.prototype, 'grammatical_cases', {
    get: function() {
        return ['nominative', 'genitive', 'dative', 'accusative', 'instrumental', 'prepositional']
    }
});

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
 * @param {Number} [size]
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
 * Укоротить слово
 *
 * @param {Number} [size]
 * @returns {string}
 */
Word.prototype.shorten = function(size) {
    return this.infinitive.slice(0, -(size || 1));
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
