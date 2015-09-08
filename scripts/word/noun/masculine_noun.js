/**
 * Существительное мужского рода
 *
 * @param {String} infinitive
 * @param {Boolean} animated
 * @constructor
 */
function MasculineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
MasculineNoun.prototype = Object.create(Noun.prototype);

/**
 * Слово оканчивается на -ок или -ёк
 *
 * @returns {boolean}
 */
MasculineNoun.prototype.hasLongEnding = function() {
    return (this.ending === 'к') && this.inArray(this.penultimate, ['о', 'ё']);
};

/**
 * Слово одушевлённое и оканчивается на "нин" (англичанин, северянин и так далее).
 *
 * @returns {boolean}
 */
MasculineNoun.prototype.isPerson = function() {
    return (this.infinitive.slice(-3) === 'нин' && this.animated)
};

/**
 * Укоротить корень
 *
 * Обрезает окончание заданной длины и добавляет при необходимости мягкий знак
 *
 * @param {Number} [size] насколько укорачивать (по умолчанию — 1)
 * @param {Boolean} [add] проверять необходимость добавления мягкого знака
 * @returns {string}
 */
MasculineNoun.prototype.shortenRoot = function(size, add) {
    if (!size) {
        size = 1;
    }

    var root = this.infinitive.slice(0, -size);
    if (add && this.penultimate === 'ё') {
        root += 'ь';
    }

    return root;
};

/**
 * Варианты в именительном падеже
 *
 * @returns {Object}
 */
Object.defineProperty(MasculineNoun.prototype, 'nominative', {
    get: function() {
        var root;
        var inflection = Object.create(null);
        var endings = {
            'а': this.soften ? 'и' : 'ы',
            'я': 'и',
            'ь': 'и',
            'о': 'и',
            'е': this.sibilant ? 'и' : 'ы',
            'щ': 'и',
            'й': 'и'
        };
        inflection['singular'] = this.infinitive;
        if (endings.hasOwnProperty(this.ending)) {
            inflection['plural'] = this.shortenRoot() + endings[this.ending];
        } else {
            if (this.hasLongEnding()) {
                root = this.shortenRoot(2, true);
                inflection['plural'] = root + 'ки';
            } else if (this.isPerson()) {
                root = this.shortenRoot(2);
                inflection['plural'] = root + 'е';
            } else {
                inflection['plural'] = this.infinitive + (this.soften ? 'и' : 'ы');
            }
        }

        return inflection;
    }
});

/**
 * Варианты в родительном падеже
 *
 * @returns {Object}
 */
Object.defineProperty(MasculineNoun.prototype, 'genitive', {
    get: function () {
        var root;
        var inflection = Object.create(null);
        var endings = {
            'а': [this.soften ? 'и' : 'ы', ''],
            'я': ['и', 'ь'],
            'ь': ['я', 'ей'],
            'о': ['и', 'ек'],
            'е': [this.soften ? 'я' : 'а', ''],
            'щ': ['а', 'ей'],
            'й': ['я', 'ев']
        };
        if (endings.hasOwnProperty(this.ending)) {
            root = this.shortenRoot();
            inflection['singular'] = root + endings[this.ending][0];
            inflection['plural'] = root + endings[this.ending][1];
        } else {
            if (this.hasLongEnding()) {
                root = this.shortenRoot(2, true);
                inflection['singular'] = root + 'ка';
                inflection['plural'] = root + 'ков';
            } else if (this.isPerson()) {
                root = this.shortenRoot(2);
                inflection['singular'] = root + 'а';
                inflection['plural'] = root;
            } else {
                inflection['singular'] = this.infinitive + 'а';
                inflection['plural'] = this.infinitive + 'ов';
            }
        }

        return inflection;
    }
});


