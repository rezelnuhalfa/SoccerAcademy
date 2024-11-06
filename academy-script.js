document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('academy-registration-form');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();  

        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');
        const positionInput = document.getElementById('position');
        const addressInput = document.getElementById('address');
        const achievementInput = document.getElementById('achievement');

        const name = nameInput.value;
        const age = parseInt(ageInput.value);
        const position = positionInput.value;
        const address = addressInput.value;
        const achievement = achievementInput.value;

       
        if (age >= 5 && age <= 17) {
            
            localStorage.setItem('name', name);
            localStorage.setItem('age', age);
            localStorage.setItem('position', position);
            localStorage.setItem('address', address);
            localStorage.setItem('achievement', achievement);

           
            window.location.href = 'test.html';  
        } else {
            alert("Usia harus antara 5 hingga 17 tahun.");
        }
    });
});
