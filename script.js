document.addEventListener('DOMContentLoaded', () => {
 const accountBtn = document.querySelector('.btn');
 const userIcon = document.querySelector('.user-icon');

 if (accountBtn) {
 accountBtn.addEventListener('click', (e) => {
 alert('Create Account button clicked');
 });
 }

 if (userIcon) {
 userIcon.addEventListener('click', () => {
 alert('User icon clicked');
 });
 }

 const registrationForm = document.getElementById('registration-form');
 if (registrationForm) {
 registrationForm.addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Registration successful!');
 });
 }
});
