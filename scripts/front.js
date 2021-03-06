$(document).ready(function () {
    // Вывод склонений существительных
    $('#noun_check').on('click', function () {
        var noun;
        var infinitive = $('#noun_infinitive').val();
        var animated = $('#noun_animated').is(':checked');
        var gender = $('input[name=noun_gender]:checked').val();
        switch (gender) {
            case 'masculine':
                noun = new MasculineNoun(infinitive, animated);
                break;
            case 'feminine':
                noun = new FeminineNoun(infinitive, animated);
                break;
            case 'neuter':
                noun = new NeuterNoun(infinitive, animated);
                break;
            case 'plural':
                noun = new PluralNoun(infinitive, animated);
                break;
        }
        if (noun) {
            var inflection = noun.inflect();
            var number, grammatical_case;
            for (number in inflection) {
                if (inflection.hasOwnProperty(number)) {
                    for (grammatical_case in inflection[number]) {
                        //noinspection JSUnfilteredForInLoop
                        $('#noun_' + grammatical_case + '_' + number).html(inflection[number][grammatical_case]);
                    }
                }
            }
        }
    });

    // Вывод склонений прилагательных
    $('#adjective_check').on('click', function () {
        var infinitive = $('#adjective_infinitive').val();
        var qualitative = $('#adjective_qualitative').is(':checked');
        var adjective = new Adjective(infinitive, qualitative);
        if (adjective) {
            var inflection = adjective.inflect();
            var gender, grammatical_case;
            for (gender in inflection) {
                if (inflection.hasOwnProperty(gender)) {
                    for (grammatical_case in inflection[gender]) {
                        //noinspection JSUnfilteredForInLoop
                        $('#adjective_' + grammatical_case + '_' + gender).html(inflection[gender][grammatical_case]);
                    }
                }
            }
            $('#adjective_comparative').html(inflection['comparative']);
        }
    });

    // Проверка флексии глаголов несовершенного вида
    $('#verb_check').on('click', function () {
        var infinitive = $('#verb_infinitive').val();
        var verb = new Verb(infinitive);
        if (verb) {
            var inflection = verb.inflect();
            for (var type in inflection) {
                if (inflection.hasOwnProperty(type)) {
                    $('#verb_' + type).html(inflection[type]);
                }
            }
        }
    });

    // Проверка флексии глаголов совершенного вида
    $('#perfect_verb_check').on('click', function () {
        var infinitive = $('#perfect_verb_infinitive').val();
        var verb = new PerfectVerb(infinitive);
        if (verb) {
            var inflection = verb.inflect();
            for (var type in inflection) {
                if (inflection.hasOwnProperty(type)) {
                    $('#perfect_verb_' + type).html(inflection[type]);
                }
            }
        }
    });
});
