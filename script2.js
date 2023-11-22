let currentStep = 1;

    function nextStep(next) {
        document.getElementById(`step${currentStep}`).classList.remove('active-step');
        currentStep = next;
        document.getElementById(`step${currentStep}`).classList.add('active-step');
    }

    function prevStep(prev) {
        document.getElementById(`step${currentStep}`).classList.remove('active-step');
        currentStep = prev;
        document.getElementById(`step${currentStep}`).classList.add('active-step');
    }

    function downloadQR() {
        // Lógica para generar y descargar el QR (¡Aún necesitas implementar esto!)
        alert('¡QR descargado!');
    }

