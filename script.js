
const submitBtn = document.querySelector('#submitBtn');

const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zipCodeInput = document.querySelector('#zipCode');
const passwordInput = document.querySelector('#password');
const passwordConfrimInput = document.querySelector('#passwordConfrim');

emailInput.addEventListener('input', function (e) {
  if(emailInput.validity.typeMismatch){
    emailInput.setCustomValidity('please enter a valid email address');
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity('');
  }
});

countryInput.addEventListener('input', function (e) {
  if(countryInput.validity.valueMissing){
    countryInput.setCustomValidity('please enter a valid country name');
    countryInput.reportValidity();
  } else {
    countryInput.setCustomValidity('');
  }
});

zipCodeInput.addEventListener('input', function (e) {
  if(zipCodeInput.validity.patternMismatch){
    zipCodeInput.setCustomValidity('please enter a valid post code');
    zipCodeInput.reportValidity();
  } else {
    zipCodeInput.setCustomValidity('');
  }
});

passwordInput.addEventListener('input', function (e) {

})


submitBtn.addEventListener('click', console.log('i got clicked'));
