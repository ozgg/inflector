/**
 * Существительное среднего рода
 *
 * @param {String} infinitive
 * @param {Boolean} animated
 * @constructor
 */
function NeuterNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
NeuterNoun.prototype = Object.create(Noun.prototype);

NeuterNoun.prototype.prepareInflection = function() {
};