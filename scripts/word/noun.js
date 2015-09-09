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

/**
 * Существительное мужского рода
 *
 * @param {String} infinitive
 * @param {Boolean} animated
 * @constructor
 */
function MasculineNoun(infinitive, animated) {
    Noun.call(this, infinitive, animated);
}
MasculineNoun.prototype = Object.create(Noun.prototype);

/**
 * Подготовить варианты склонений
 */
MasculineNoun.prototype.prepareInflection = function () {
    if (this.endsWith('ька')) {
        this.base = this.shorten(3);
        this.endings = {
            singular: ['ька', 'ьки', 'ьке', this.animated ? 'ьку' : 'ька', 'ькой', 'ьке'],
            plural: ['ьки', 'ек', 'ькам', this.animated ? 'ек' : 'ьки', 'ьками', 'ьках']
        };
    } else if (this.endsWith('нин') && this.animated) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ин', 'ина', 'ину', 'ина', 'ином', 'ине'],
            plural: ['е', '', 'ам', '', 'ами', 'ах']
        };
    } else if (this.endsWith('мёк')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ёк', 'ёка', 'ёку', this.animated ? 'ёка' : 'ёк', 'ёком', 'ёке'],
            plural: ['ёки', 'ёков', 'ёкам', this.animated ? 'ёков' : 'ёки', 'ёками', 'ёках']
        };
    } else if (this.endsWith('ок')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ок', 'ка', 'ку', this.animated ? 'ка' : 'ок', 'ком', 'ке'],
            plural: ['ки', 'ков', 'кам', this.animated ? 'ков' : 'ки', 'ками', 'ках']
        };
    } else if (this.endsWith('ёк')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ёк', 'ька', 'ьку', this.animated ? 'ька' : 'ёк', 'ьком', 'ьке'],
            plural: ['ьки', 'ьков', 'ькам', this.animated ? 'ьков' : 'ьки', 'ьками', 'ьках']
        };
    } else if (this.endsWith('ще')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ще', 'ща', 'щу', 'ще', 'щем', 'ще'],
            plural: ['щи', 'щей', 'щам', this.animated ? 'щей' : 'щи', 'щами', 'щах']
        };
    } else if (this.endsWith('ья')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ья', 'ьи', 'ье', this.animated ? 'ью' : 'ья', 'ьёй', 'ье'],
            plural: ['ьи', 'ей', 'ьям', this.animated ? 'ей' : 'ьи', 'ьями', 'ьях']
        };
    } else if (this.endsWith('ко')) {
        this.base = this.shorten(2);
        this.endings = {
            singular: ['ко', 'ки', 'ке', this.animated ? 'ку' : 'ко', 'кой', 'ке'],
            plural: ['ки', 'ек', 'кам', this.animated ? 'ек' : 'ки', 'ками', 'ках']
        };
    } else if (this.endsWith('а')) {
        this.base = this.shorten();
        this.endings = {
            singular: ['а', 'ы', 'е', this.animated ? 'у' : 'а', 'ой', 'е'],
            plural: ['ы', '', 'ам', this.animated ? '' : 'ы', 'ами', 'ах']
        };
    } else if (this.endsWith('я')) {
        this.base = this.shorten();
        this.endings = {
            singular: ['я', 'и', 'е', this.animated ? 'ю' : 'я', 'ей', 'е'],
            plural: ['и', 'ей', 'ям', this.animated ? 'ей' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('ь')) {
        this.base = this.shorten();
        this.endings = {
            singular: ['ь', 'я', 'ю', this.animated ? 'я' : 'ь', 'ём', 'е'],
            plural: ['и', 'ях', 'ям', this.animated ? 'ей' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('й')) {
        this.base = this.shorten();
        this.endings = {
            singular: ['й', 'я', 'ю', this.animated ? 'я' : 'й', 'ем', 'е'],
            plural: ['и', 'ев', 'ям', this.animated ? 'ев' : 'и', 'ями', 'ях']
        };
    } else if (this.endsWith('ж', 'ш', 'щ')) {
        this.endings = {
            singular: ['', 'а', 'у', this.animated ? 'а' : '', 'ем', 'е'],
            plural: ['и', 'ей', 'ам', this.animated ? 'ей' : 'и', 'ами', 'ах']
        };
    } else {
        var soften = this.endsWith('г', 'к');
        this.endings = {
            singular: ['', 'а', 'у', this.animated ? 'а' : '', 'ом', 'е'],
            plural: [soften ? 'и' : 'ы', 'ов', 'ам', this.animated ? 'ов' : (soften ? 'и' : 'ы'), 'ами', 'ах']
        };
    }
};

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
