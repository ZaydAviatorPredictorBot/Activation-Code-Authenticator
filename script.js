function showStep(currentId, nextId) {
    document.getElementById(currentId).classList.add("hidden");
    document.getElementById(nextId).classList.remove("hidden");
}

document.getElementById("startVerificationBtn").addEventListener("click", () => {
    showStep("welcomeScreen", "step2");
});

document.getElementById("continueStep2").addEventListener("click", () => {
    showStep("step2", "step3");
});

document.getElementById("continueStep3").addEventListener("click", () => {
    showStep("step3", "step4");
});

document.getElementById("continueStep4").addEventListener("click", () => {
    showStep("step4", "step5");
});

document.getElementById("completeVerification").addEventListener("click", () => {
    showStep("step5", "step6");
});

document.getElementById("submitBtn").addEventListener("click", () => {
    showStep("step6", "terminalPopup");
});
