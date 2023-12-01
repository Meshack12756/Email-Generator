function generateEmail() {
  
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var regNumber = document.getElementById('regNumber').value;
  
    
    var regNumberRegex = /^[A-Za-z]{3}\d{3}$/;
    if (!regNumberRegex.test(regNumber)) {
      alert('Invalid registration number format. Please use the format: ABC123');
      return;
    }
  
    
    var email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@students.jkuat.ac.ke';
  
    
    document.getElementById('DisplayEmail').innerHTML = email;
    
  }