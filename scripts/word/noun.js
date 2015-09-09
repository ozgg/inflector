/**
 * Имя существительное
 */

/**
 * Существительное
 *
 * @param {String} infinitive
 * @param {Boolean} animated
 * @constructor
 */
function Noun(infinitive, animated) {
    Word.call(this, infinitive);
    this.animated = Boolean(animated);
}
Noun.prototype = Object.create(Word.prototype);

function FeminineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
FeminineNoun.prototype = Object.create(Noun.prototype);

function NeuterNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
NeuterNoun.prototype = Object.create(Noun.prototype);
