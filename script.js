document.addEventListener('DOMContentLoaded', () => {
 const accountBtn = document.querySelector('.btn');
 const userIcon = document.querySelector('.user-icon');

 accountBtn.addEventListener('click', (e) => {
 alert('Create Account button clicked');
 });

 userIcon.addEventListener('click', () => {
 alert('User icon clicked');
 });

 const registrationForm = document.getElementById('registration-form');
 if (registrationForm) {
 registrationForm.addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Registration successful!');
 });
 }
});
