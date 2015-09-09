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
 * Просклонять слово
 *
 * @returns {Object}
 */
MasculineNoun.prototype.inflect = function () {
    var base, endings;
    var inflection = {singular: Object.create(null), plural: Object.create(null)};
    if (this.endsWith('ька')) {
        base = this.shorten(3);
        endings = {
            singular: ['ька', 'ьки', 'ьке', this.animated ? 'ьку' : 'ька', 'ькой', 'ьке'],
            plural: ['ьки', 'ек', 'ькам', this.animated ? 'ек' : 'ьки', 'ьками', 'ьках']
        };
    } else if (this.endsWith('нин') && this.animated) {
        base = this.shorten(2);
        endings = {
            singular: ['ин', 'ина', 'ину', 'ина', 'ином', 'ине'],
            plural: ['е', '', 'ам', '', 'ами', 'ах']
        };
    } else if (this.endsWith('мёк')) {
        base = this.shorten(2);
        endings = {
            singular: ['ёк', 'ёка', 'ёку', this.animated ? 'ёка' : 'ёк', 'ёком', 'ёке'],
            plural: ['ёки', 'ёков', 'ёкам', this.animated ? 'ёков' : 'ёки', 'ёками', 'ёках']
        };
    } else if (this.endsWith('ок')) {
        base = this.shorten(2);
        endings = {
            singular: ['ок', 'ка', 'ку', this.animated ? 'ка' : 'ок', 'ком', 'ке'],
            plural: ['ки', 'ков', 'кам', this.animated ? 'ков' : 'ки', 'ками', 'ках']
        };
    } else if (this.endsWith('ёк')) {
        base = this.shorten(2);
        endings = {
            singular: ['ёк', 'ька', 'ьку', this.animated ? 'ька' : 'ёк', 'ьком', 'ьке'],
            plural: ['ьки', 'ьков', 'ькам', this.animated ? 'ьков' : 'ьки', 'ьками', 'ьках']
        };
    } else if (this.endsWith('ще')) {
        base = this.shorten(2);
        endings = {
            singular: ['ще', 'ща', 'щу', 'ще', 'щем', 'ще'],
            plural: ['щи', 'щей', 'щам', this.animated ? 'щей' : 'щи', 'щами', 'щах']
        };
    } else if (this.endsWith('ья')) {
        base = this.shorten(2);
        endings = {
            singular: ['ья', 'ьи', 'ье', this.animated ? 'ью' : 'ья', 'ьёй', 'ье'],
            plural: ['ьи', 'ей', 'ьям', this.animated ? 'ей' : 'ьи', 'ьями', 'ьях']
        };
    } else if (this.endsWith('ко')) {
        base = this.shorten(2);
        endings = {
            singular: ['ко', 'ки', 'ке', this.animated ? 'ку' : 'ко', 'кой', 'ке'],
            plural: ['ки', 'ек', 'кам', this.animated ? 'ек' : 'ки', 'ками', 'ках']
        };
    } else if (this.endsWith('а')) {
        base = this.shorten();
        endings = {
            singular: ['а', 'ы', 'е', this.animated ? 'у' : 'а', 'ой', 'е'],
            plural: ['ы', '', 'ам', this.animated ? '' : 'ы', 'ами', 'ах']
        };
    } else if (this.endsWith('я')) {
        base = this.shorten();
        endings = {
            singular: ['я', 'и', 'е', this.animated ? 'ю' : 'я', 'ей', 'е'],
            plural: ['и', 'ей', 'ям', this.animated ? 'ей' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('ь')) {
        base = this.shorten();
        endings = {
            singular: ['ь', 'я', 'ю', this.animated ? 'я' : 'ь', 'ём', 'е'],
            plural: ['и', 'ях', 'ям', this.animated ? 'ей' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('й')) {
        base = this.shorten();
        endings = {
            singular: ['й', 'я', 'ю', this.animated ? 'я' : 'й', 'ем', 'е'],
            plural: ['и', 'ев', 'ям', this.animated ? 'ев' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('ж', 'ш', 'щ')) {
        base = this.infinitive;
        endings = {
            singular: ['', 'а', 'у', this.animated ? 'а' : '', 'ем', 'е'],
            plural: ['и', 'ей', 'ам', this.animated ? 'ей' : 'и', 'ами', 'ах']
        };
    } else {
        var soften = this.endsWith('г', 'к');
        base = this.infinitive;
        endings = {
            singular: ['', 'а', 'у', this.animated ? 'а' : '', 'ом', 'е'],
            plural: [soften ? 'и' : 'ы', 'ов', 'ам', this.animated ? 'ов' : (soften ? 'и' : 'ы'), 'ами', 'ах']
        };
    }

    ['singular', 'plural'].forEach(function(number) {
        endings[number].forEach(function (ending, index) {
            inflection[number][this.grammatical_cases[index]] = base + ending;
        }, this);
    }, this);

    return inflection;
};
