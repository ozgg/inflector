/**
 * Russian noun prototype
 */

/**
 * Russian noun
 *
 * @param infinitive [String]
 * @param animated [Boolean]
 * @constructor
 */
function Noun(infinitive, animated) {
    Word.call(this, infinitive);
    this.animated = Boolean(animated);
}

Noun.prototype = Object.create(Word.prototype);
Object.defineProperty(Noun.prototype, 'ending', {
    get: function () {
        return this.infinitive.slice(-1);
    }
});
Object.defineProperty(Noun.prototype, 'penultimate', {
    get: function () {
        return this.infinitive.slice(-2).substring(0, 1);
    }
});
Object.defineProperty(Noun.prototype, 'sibilant', {
    get: function () {
        return this.inArray(this.penultimate, ['ж', 'ш', 'щ', 'ч', 'ц']);
    }
});
Object.defineProperty(Noun.prototype, 'soften', {
    get: function () {
        return this.inArray(this.penultimate, ['г', 'к', 'ш', 'ж']);
    }
});


function FeminineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
FeminineNoun.prototype = Object.create(Noun.prototype);

function NeuterNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
NeuterNoun.prototype = Object.create(Noun.prototype);
