$(document).ready(function(){
    $.ajax({
        url:'https://batman-api.sayna.space/questions',
        datatype:'json',
        success: function(questions){
            console.log(questions);
        },
        error: function(){
            console.log("Problème au niveau du serveur");
        }
    })

});

function showquestions() {
    const question = document.getElementById('phase1');
    question.style.display = 'block';
    const demarrer = document.getElementById('phase0');
    demarrer.style.display = 'none';
    $('#next').show();
}