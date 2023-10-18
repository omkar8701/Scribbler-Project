
function signupmodal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}
function closesignupmodal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
}



function singin(){
    document.querySelector('.overlay').classList.add('showOver');
    document.querySelector('.signinform').classList.add('showsignin');
}
function closesignin(){
    document.querySelector('.overlay').classList.remove('showOver');
    document.querySelector('.signinform').classList.remove('showsignin');
}

function create(){
    document.querySelector('.overlay').classList.add('showOver');
    document.querySelector('.createpost').classList.add('showcreate');
}
function closecreate(){
    document.querySelector('.overlay').classList.remove('showOver');
    document.querySelector('.createpost').classList.remove('showcreate');
}


