document.addEventListener('DOMContentLoaded', function() {
    const startVerificationBtn = document.getElementById('startVerificationBtn');
    const continueStep2 = document.getElementById('continueStep2');
    const continueStep3 = document.getElementById('continueStep3');
    const continueStep4 = document.getElementById('continueStep4');
    const completeVerification = document.getElementById('completeVerification');
    const submitBtn = document.getElementById('submitBtn');
    const terminalPopup = document.getElementById('terminalPopup');

    // Welcome page transition
    startVerificationBtn.addEventListener('click', () => {
        changeStep('step2');
    });

    // Step 2: Betting Site Name
    continueStep2.addEventListener('click', () => {
        const bettingSiteName = document.getElementById('bettingSiteName').value;
        if (bettingSiteName) {
            changeStep('step3');
        } else {
            alert("Please enter a valid Betting Site Name.");
        }
    });

    // Step 3: Betting Site ID
    continueStep3.addEventListener('click', () => {
        const bettingSiteID = document.getElementById('bettingSiteID').value;
        if (bettingSiteID) {
            changeStep('step4');
        } else {
            alert("Please enter a valid Betting Site ID.");
        }
    });

    // Step 4: Country Input
    continueStep4.addEventListener('click', () => {
        const country = document.getElementById('country').value;
        if (country) {
            changeStep('step5');
        } else {
            alert("Please enter a valid country.");
        }
    });

    // Step 5: Country Code Input
    completeVerification.addEventListener('click', () => {
        const countryCode = document.getElementById('countryCode').value;
        if (countryCode) {
            changeStep('step6');
        } else {
            alert("Please enter your country code.");
        }
    });

    // Step 6: Authenticator Code Input
    submitBtn.addEventListener('click', () => {
        const authenticatorCode = document.getElementById('authenticatorCode').value;
        if (authenticatorCode.length === 4) {
            showTerminalPopup();
        } else {
            alert("Please enter a valid 4-digit authenticator code.");
        }
    });

    // Function to change to the next step
    function changeStep(stepId) {
        document.querySelectorAll('.step').forEach(step => {
            step.classList.add('hidden');
        });
        document.getElementById(stepId).classList.remove('hidden');
    }

    // Function to show terminal popup with flashing warning
    function showTerminalPopup() {
        terminalPopup.classList.remove('hidden');
        terminalPopup.classList.add('flash');
    }
});
