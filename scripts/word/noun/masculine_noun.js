function MasculineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
MasculineNoun.prototype = Object.create(Noun.prototype);
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
