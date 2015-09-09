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
    this.base = this.shorten();

    if (this.endsWith('це')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['це', 'ца', 'цу', 'це', 'цем', 'це'],
            plural: ['ца', 'ец', 'цам', this.animated ? 'ец' : 'ца', 'цами', 'цах']
        }
    } else if (this.endsWith('че', 'ше', 'ще', 'же')) {
        this.endings = {
            singular: ['е', 'а', 'у', 'е', 'ем', 'е'],
            plural: ['а', '', 'ам', this.animated ? '' : 'а', 'ами', 'ах']
        }
    } else if (this.endsWith('е')) {
        this.endings = {
            singular: ['е', 'я', 'ю', 'е', 'ем', 'и'],
            plural: ['я', 'й', 'ям', this.animated ? 'й' : 'я', 'ями', 'ях']
        }
    } else if (this.endsWith('я')) {
        this.endings = {
            singular: ['я', 'ени', 'еню', 'я', 'енем', 'ени'],
            plural: ['ена', 'ян', 'енам', this.animated ? 'ян' : 'ена', 'енами', 'енах']
        }
    } else if (this.endsWith('о')) {
        this.endings = {
            singular: ['о', 'а', 'у', 'о', 'ом', 'е'],
            plural: ['а', '', 'ам', this.animated ? '' : 'а', 'ами', 'ах']
        }
    }
};
