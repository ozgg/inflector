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

Adjective.prototype.inflect = function () {
    var endings, l;
    var base = this.shorten(2);
    var cases = this.grammatical_cases.concat(['short']);
    var comparative = base + 'ее';
    var inflection = {
        masculine: Object.create(null),
        feminine: Object.create(null),
        neuter: Object.create(null),
        plural: Object.create(null)
    };
    if (!this.qualitative && this.endsWith('ий') && !this.endsWith('гий', 'кий')) {
        endings = {
            masculine: ['ий', 'ьего', 'ьему', 'ьего', 'ьим', 'ьем', ''],
            feminine: ['ья', 'ьей', 'ьей', 'ью', 'ьей', 'ьей', ''],
            neuter: ['ье', 'ьего', 'ьему', 'ьего', 'ьим', 'ьем', ''],
            plural: ['ьи', 'ьих', 'ьим', 'ьих', 'ьими', 'ьих', '']
        }
    } else if (this.endsWith('ний')) {
        endings = {
            masculine: ['ий', 'его', 'ему', 'его', 'им', 'ем', 'ь'],
            feminine: ['яя', 'ей', 'ей', 'юю', 'ей', 'ей', 'я'],
            neuter: ['ее', 'его', 'ему', 'его', 'им', 'ем', 'е'],
            plural: ['ие', 'их', 'им', 'их', 'ими', 'их', 'и']
        };
    } else if (this.endsWith('ший', 'жий', 'щий', 'чий')) {
        endings = {
            masculine: ['ий', 'его', 'ему', 'его', 'им', 'ем', ''],
            feminine: ['ая', 'ей', 'ей', 'ую', 'ей', 'ей', 'а'],
            neuter: ['ее', 'его', 'ему', 'его', 'им', 'ем', 'е'],
            plural: ['ие', 'их', 'им', 'их', 'ими', 'их', 'и']
        };
    } else if (this.endsWith('кий', 'гий')) {
        l = this.infinitive.slice(-3, -2);
        base = this.shorten(3);
        comparative = base + l + 'ее';
        endings = {
            masculine: [l + 'ий', l + 'ого', l + 'ому', l + 'ого', l + 'им', l + 'ом', 'о' + l],
            feminine: [l + 'ая', l + 'ой', l + 'ой', l + 'ую', l + 'ой', l + 'ой', 'о' + l + 'а'],
            neuter: [l + 'ое', l + 'ого', l + 'ому', l + 'ого', l + 'им', l + 'ом', 'о' + l + 'о'],
            plural: [l + 'ие', l + 'их', l + 'им', l + 'их', l + 'ими', l + 'их', 'о' + l + 'и']
        };
    } else if (this.endsWith('ный')) {
        base = this.shorten(3);
        comparative = base + 'нее';
        endings = {
            masculine: ['ный', 'ного', 'ному', 'ного', 'ным', 'ном', 'ен'],
            feminine: ['ная', 'ной', 'ной', 'ную', 'ной', 'ной', 'на'],
            neuter: ['ное', 'ного', 'ному', 'ного', 'ным', 'ном', 'но'],
            plural: ['ные', 'ных', 'ным', 'ных', 'ными', 'ных', 'ны']
        }
    } else if (this.endsWith('ый')) {
        endings = {
            masculine: ['ый', 'ого', 'ому', 'ого', 'ым', 'ом', ''],
            feminine: ['ая', 'ой', 'ой', 'ую', 'ой', 'ой', 'а'],
            neuter: ['ое', 'ого', 'ому', 'ого', 'ым', 'ом', 'о'],
            plural: ['ые', 'ых', 'ым', 'ых', 'ыми', 'ых', 'ы']
        }
    } else if (this.endsWith('ой')) {
        endings = {
            masculine: ['ой', 'ого', 'ому', 'ого', 'ым', 'ом', ''],
            feminine: ['ая', 'ой', 'ой', 'ую', 'ой', 'ой', 'а'],
            neuter: ['ое', 'ого', 'ому', 'ого', 'ым', 'ом', 'о'],
            plural: ['ые', 'ых', 'ым', 'ых', 'ыми', 'ых', 'ы']
        }
    }

    ['masculine', 'feminine', 'neuter', 'plural'].forEach(function (gender) {
        endings[gender].forEach(function (ending, index) {
            inflection[gender][cases[index]] = base + ending;
        }, this);
    }, this);
    inflection['comparative'] = this.qualitative ? (comparative || '') : '';

    return inflection;
};
