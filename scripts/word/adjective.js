/**
 * Имя прилагательное
 */

/**
 * Прилагательное
 *
 * @param {String} infinitive
 * @param {Boolean} qualitative
 * @constructor
 */
function Adjective(infinitive, qualitative) {
    Word.call(this, infinitive);
    this.qualitative = Boolean(qualitative);
}
Adjective.prototype = Object.create(Word.prototype);

Adjective.prototype.inflect = function() {
    var inflection = {
        masculine: {},
        feminine: {},
        neuter: {},
        plural: {}
    };

    return inflection;
};