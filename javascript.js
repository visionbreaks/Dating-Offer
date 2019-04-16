
var reasons = ['Chick flicks make me emotional',
              'I love the Kardashians',
              'Can we just lay around in sweats and watch \'the notebook\'?',
              'I love crossfit and diet shakes',
              'I love pinning cute clothes',
              'Can we get BDubs?  It\'s our cheat day right?',
              'I love binging Greys Anatomy in my PJ\'s',
              'I\'ll agree with your parents']
function new_reason(){
var random_number = Math.floor(Math.random()*(reasons.length));
}
document.getElementById('reason_display').innerHTML = reasons[random_number]
