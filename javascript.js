
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

var pics = [<img src = 'https://user-images.githubusercontent.com/49587941/56246047-ec619d00-606e-11e9-9a58-8f52023cfb0e.jpg'>,
           img src = 'https://user-images.githubusercontent.com/49587941/56246158-3054a200-606f-11e9-902d-c5ae83ec9f93.jpg']

function new_pic()
var random_num2 = Math.floor(Math.random()*(pics.length))
}
document.getElementById('pic_display').innerHTML = pics[random_num2]
document.getElementById('reason_display').innerHTML = reasons[random_number]
