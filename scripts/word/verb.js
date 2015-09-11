function Verb(infinitive) {
    Word.call(this, infinitive);
}

Verb.prototype = Object.create(Word.prototype);

Verb.inflect = function() {
    var inflection, passive;

    if (this.endsWith('овать')) {
        
    }

    return inflection;
};