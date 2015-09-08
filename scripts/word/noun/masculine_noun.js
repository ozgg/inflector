/**
 * Russian masculine noun
 *
 * @param infinitive [String]
 * @param animated [Boolean]
 * @constructor
 */
function MasculineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
MasculineNoun.prototype = Object.create(Noun.prototype);

/**
 * Word in nominative case
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
            inflection['plural'] = this.infinitive.slice(0, -1) + endings[this.ending];
        } else {
            if ((this.ending === 'к') && this.inArray(this.penultimate, ['о', 'ё'])) {
                root = this.infinitive.slice(0, -2);
                if (this.penultimate === 'ё') {
                    root += 'ь';
                }
                inflection['plural'] = root + 'ки';
            } else if (this.ending === 'н' && this.penultimate === 'и' && this.animated) {
                root = donor.slice(0, -2);
                inflection['plural'] = root + 'е';
            } else {
                inflection['plural'] = this.infinitive + (this.soften ? 'и' : 'ы');
            }
        }

        return inflection;
    }
});

/**
 * Word in genitive case
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
            root = this.infinitive.slice(0, -1);
            inflection['singular'] = root + endings[this.ending][0];
            inflection['plural'] = root + endings[this.ending][1];
        } else {
            if ((this.ending === 'к') && this.inArray(this.penultimate, ['о', 'ё'])) {
                root = this.infinitive.slice(0, -2);
                if (this.penultimate === 'ё') {
                    root += 'ь';
                }
                inflection['singular'] = root + 'ка';
                inflection['plural'] = root + 'ков';
            } else if (this.ending === 'н' && this.penultimate === 'и' && this.animated) {
                root = donor.slice(0, -2);
                inflection['singular'] = root + 'на';
                inflection['plural'] = root;
            } else {
                inflection['singular'] = this.infinitive + 'а';
                inflection['plural'] = this.infinitive + 'ов';
            }
        }

        return inflection;
    }
});


