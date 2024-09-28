function validatePassword() {
    
    let  password = prompt("Enter your password:");

    // Variables to store validation status
    let Letter = /[a-zA-Z]/.test(password);  
    let Numbers = /[0-9]/.test(password);     
    let passlength = password.length >= 6;     

    // Check if all conditions are met
    if (passlength && Letter && Numbers) {
        alert("Password is valid.");
    } else {
        let errorMessage = "Password is invalid for the following reasons:\n";
        if (!isLongEnough) {
            errorMessage += "- Password must be at least 6 characters long.\n";
        }
        if (!hasLetters) {
            errorMessage += "- Password must contain at least one letter.\n";
        }
        if (!hasNumbers) {
            errorMessage += "- Password must contain at least one number.\n";
        }
        alert(errorMessage);
    }
}


validatePassword();

        