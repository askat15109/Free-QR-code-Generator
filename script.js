document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const text = document.getElementById('qrText').value;  // Get the input text
    const qrImage = document.getElementById('qrImage');  // The div where the QR code will be displayed
    const downloadLink = document.getElementById('downloadLink');  // The download link for the QR code
    const qrPreview = document.getElementById('qrPreview');  // The QR preview section

    // Clear previous QR code
    qrImage.innerHTML = '';

    if (text === '') {
        alert('Please enter some text or a URL');
        return;
    }

    // Generate QR code using qrcode.js
    QRCode.toDataURL(text, {
        errorCorrectionLevel: 'H', // Error correction level (optional)
        type: 'image/png' // Output type as PNG image
    }, function(error, url) {
        if (error) {
            console.error(error);
            alert('Failed to generate QR code');
        } else {
            // QR code generated successfully
            // Set the generated QR code image URL to display
            qrImage.innerHTML = `<img src="${url}" alt="QR Code" />`;

            // Set the download link to the QR code image
            downloadLink.href = url;

            // Show the QR code preview section
            qrPreview.style.display = 'block';

            // Confetti animation on successful QR code generation
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0.5, y: 0.5 }
            });
        }
    });
});
