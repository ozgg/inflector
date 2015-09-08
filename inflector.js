/**
 * Russian words inflection
 */

function Word(infinitive) {
    this.infinitive = infinitive;
}
Word.prototype.inArray = function(needle, haystack) {
    for (var i in haystack) {
        if (haystack.hasOwnProperty(i) && haystack[i] === needle) {
            return true;
        }
    }

    return false;
};

function Noun(infinitive, animated) {
    Word.call(this, infinitive);
    this.animated = Boolean(animated);
}
Noun.prototype = Object.create(Word.prototype);
Object.defineProperty(Noun.prototype, 'ending', {
    get: function() {
        return this.infinitive.slice(-1);
    }
});
Object.defineProperty(Noun.prototype, 'penultimate', {
    get: function() {
        return this.infinitive.slice(-2).substring(0, 1);
    }
});
Object.defineProperty(Noun.prototype, 'sibilant', {
    get: function() {
        return this.inArray(this.penultimate, ['ж', 'ш', 'щ', 'ч', 'ц']);
    }
});
Object.defineProperty(Noun.prototype, 'soften', {
    get: function() {
        return this.inArray(this.penultimate, ['г', 'к', 'ш', 'ж']);
    }
});

function MasculineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
MasculineNoun.prototype = Object.create(Noun.prototype);
MasculineNoun.prototype.genitive = function() {
    var root;
    var inflection = {};
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
        inflection['plural']   = root + endings[this.ending][1];
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
            endings = ['на', 'ну', 'на', 'ном', 'не'];
            plurals = ['е', '', 'ам', '', 'ами', 'ах'];
        } else {
            soften  = in_array(ending, ['г', 'к']);
            root    = donor;
            endings = ['а', 'у', animated ? 'а' : '', 'ом', 'е'];
            plurals = [soften ? 'и' : 'ы', 'ов', 'ам', animated ? 'ов' : (soften ? 'и' : 'ы'), 'ами', 'ах'];
        }
    }

    return inflection;
};

function FeminineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
FeminineNoun.prototype = Object.create(Noun.prototype);

function NeuterNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
NeuterNoun.prototype = Object.create(Noun.prototype);
