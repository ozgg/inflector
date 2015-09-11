/**
 * Глагол несоверщенного вида
 *
 * @param {String} infinitive
 * @constructor
 */
function Verb(infinitive) {
    Word.call(this, infinitive);
}
Verb.prototype = Object.create(Word.prototype);

/**
 * Просклонять
 *
 * @returns {Object}
 */
Verb.inflect = function () {
    var soften;
    var passive = this.endsWith('ся', 'сь');
    var suffix = passive ? ['ся', 'сь', 'шись'] : ['', '', ''];
    var inflection = {};
    var base = '';
    var endings = [];
    var types = [
        'imperative', 'gerund', 'gerund_past',
        'first_singular', 'first_plural',
        'second_singular', 'single_plural',
        'third_singular', 'third_plural',
        'past_masculine', 'past_feminine', 'past_neuter', 'past_plural'
    ];

    if (this.endsWith('овать', 'оваться')) {
        base = this.shorten(passive ? 7 : 5);
        endings = [
            'уй' + suffix[0], 'уя' + suffix[1], 'овав' + suffix[3],
            'ую' + suffix[1], 'уем' + suffix[0],
            'уешь' + suffix[0], 'уете' + suffix[1],
            'ует' + suffix[0], 'уют' + suffix[0],
            'овал' + suffix[0], 'овала' + suffix[1], 'овало' + suffix[1], 'овали' + suffix[1]
        ];
    } else if (this.endsWith('ить', 'иться')) {
        base = this.shorten(passive ? 5 : 3);
        soften = !this.inArray(base.slice(-1), ['ж', 'ш', 'ч', 'щ']);
        endings = [
            'и' + suffix[1], (soften ? 'я' : 'а') + suffix[1], 'ив' + suffix[3],
            (soften ? 'ю' : 'у') + suffix[1], 'им' + suffix[0],
            'ишь' + suffix[0], 'ите' + suffix[1],
            'ит' + suffix[0], (soften ? 'ят' : 'ат') + suffix[0],
            'ил' + suffix[0], 'ила' + suffix[1], 'ило' + suffix[1], 'или' + suffix[1]
        ];
    } else if (this.endsWith('ть', 'ться')) {
        base = this.shorten(passive ? 4 : 2);
        endings = [
            'й' + suffix[0], 'я' + suffix[1], 'в' + suffix[3],
            'ю' + suffix[1], 'ем' + suffix[0],
            'ешь' + suffix[0], 'ете' + suffix[1],
            'ет' + suffix[0], 'ют' + suffix[0],
            'л' + suffix[0], 'ла' + suffix[1], 'ло' + suffix[1], 'ли' + suffix[1]
        ];
    } else if (this.endsWith('чь', 'чься')) {
        base = this.shorten(passive ? 4 : 2);
        endings = [
            'ки' + suffix[1], 'ча' + suffix[1], 'ча' + suffix[3],
            'ку' + suffix[0], 'чём' + suffix[0],
            'чёшь' + suffix[0], 'чёте' + suffix[1],
            'чёт' + suffix[0], 'кут' + suffix[0],
            'к' + suffix[0], 'кла' + suffix[1], 'кло' + suffix[1], 'кли' + suffix[1]
        ];
    } else if (this.endsWith('ти', 'сь')) {
        base = this.shorten(passive ? 4 : 2);
        endings = [
            'и' + suffix[1], 'я' + suffix[1], 'ши' + suffix[1],
            'у' + suffix[1], 'ём' + suffix[0],
            'ёшь' + suffix[0], 'ёте' + suffix[1],
            'ёт' + suffix[0], 'ут' + suffix[0],
            '' + suffix[0], 'ла' + suffix[1], 'ло' + suffix[1], 'ли' + suffix[1]
        ];
    }

    for (var i = 0; i < types.length; i++) {
        inflection[types[i]] = base + (endings[i] || '');
    }

    return inflection;
};