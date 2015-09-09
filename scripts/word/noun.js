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

/**
 * Подготовить варианты склонений.
 * Переопределяется в дочерних классах. Метод должен выставлять this.base и this.endings
 */
Noun.prototype.prepareInflection = function () {
    // Overload in child classes
};

/**
 * Просклонять
 *
 * @returns {Object}
 */
Noun.prototype.inflect = function () {
    var inflection = {singular: Object.create(null), plural: Object.create(null)};

    this.base = this.infinitive;
    this.endings = {
        singular: ['', '', '', '', '', ''],
        plural: ['', '', '', '', '', '']
    };

    this.prepareInflection();

    ['singular', 'plural'].forEach(function (number) {
        this.endings[number].forEach(function (ending, index) {
            inflection[number][this.grammatical_cases[index]] = this.base + ending;
        }, this);
    }, this);

    return inflection;
};
