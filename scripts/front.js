// Вывод склонений существительных
$(document).ready(function () {
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
});