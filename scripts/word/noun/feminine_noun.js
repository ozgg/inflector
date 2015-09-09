/**
 * Существительное женского рода
 *
 * @param {String} infinitive
 * @param {Boolean} animated
 * @constructor
 */
function FeminineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
FeminineNoun.prototype = Object.create(Noun.prototype);

FeminineNoun.prototype.prepareInflection = function() {
    this.base = this.shorten();

    if (this.endsWith('ца')) {
        this.endings = {
            singular: ['а', 'ы', 'е', 'у', 'ей', 'е'],
            plural: ['ы', '', 'ам', this.animated ? '' : 'ы', 'ами', 'ах']
        }
    } else if (this.endsWith('ья')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ья', 'ьи', 'ье', 'ью', 'ьями', 'ьях'],
            plural: ['ьи', 'ей', 'ьям', this.animated ? 'ей' : 'ьи', 'ьями', 'ьях']
        }
    } else if (this.endsWith('жь')) {
        this.endings = {
            singular: ['ь', 'и', 'и', 'ь', 'ью', 'и'],
            plural: ['и', 'ей', 'ам', this.animated ? 'ей' : 'и', 'ами', 'ах']
        }
    } else if (this.endsWith('йа', 'ша', 'ща', 'жа', 'ча')) {
        this.endings = {
            singular: ['а', 'и', 'е', 'у', 'ей', 'е'],
            plural: ['и', '', 'ам', this.animated ? '' : 'и', 'ами', 'ах']
        }
    } else if (this.endsWith('а')) {
        this.endings = {
            singular: ['а', 'ы', 'е', 'у', 'ой', 'е'],
            plural: ['ы', '', 'ам', this.animated ? '' : 'ы', 'ами', 'ах']
        }
    } else if (this.endsWith('я')) {
        this.endings = {
            singular: ['я', 'и', 'е', 'ю', 'ей', 'е'],
            plural: ['и', 'ь', 'ям', this.animated ? 'ь' : 'и', 'ями', 'ях']
        }
    } else if (this.endsWith('ь')) {
        this.endings = {
            singular: ['ь', 'и', 'и', 'ь', 'ью', 'и'],
            plural: ['и', 'ей', 'ям', this.animated ? 'ей' : 'и', 'ями', 'ях']
        }
    }
};
