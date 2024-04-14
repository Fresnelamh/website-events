/*const signInBtnLink=document.querySelector('.signInBtn-link');
const signUpBtnLink=document.querySelector('.signUpBtn-link');
const wrapper=document.querySelector('.wrapper');

signUpBtnLinkgnUpBtnLin.addEventListener('click', ()=> { wrapper.classList.toogle('active');
});
signInLinkgnUpBtnLin.addEventListener('click', ()=> { wrapper.classList.toogle('active');
});*/


/*const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});*/
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInFormWrapper = document.querySelector('.form-wrapper.sign-in');
const signUpFormWrapper = document.querySelector('.form-wrapper.sign-up');

signUpBtnLink.addEventListener('click', () => {
    signInFormWrapper.style.transform = 'translateY(-450px)';
    signUpFormWrapper.style.transform = 'translateY(0)';
});

signInBtnLink.addEventListener('click', () => {
    signInFormWrapper.style.transform = 'translateY(0)';
    signUpFormWrapper.style.transform = 'translateY(-450px)';
});

