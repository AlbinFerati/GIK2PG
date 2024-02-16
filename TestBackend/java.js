// Klientens JavaScript
document.getElementById('submitForm').addEventListener('click', function() {
    var selectedOptions = []; // Samla in användarens val här

    // Skicka data till servern
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedOptions: selectedOptions })
    })
    .then(response => {
        if (response.ok) {
            alert('Formuläret skickades framgångsrikt!');
        } else {
            alert('Det uppstod ett fel vid skickande av formuläret.');
        }
    })
    .catch(error => console.error('Fel:', error));
});

// Node.js-server
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware för att tolka JSON och urlencoded-data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Hantera POST-begäran från klienten
app.post('/submit', (req, res) => {
    const selectedOptions = req.body.selectedOptions;

    // Förbered och skicka e-postmeddelande
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'din.email@gmail.com', // Ändra till din e-postadress
            pass: 'dittlösenord' // Ändra till ditt e-postlösenord
        }
    });

    const mailOptions = {
        from: 'din.email@gmail.com', // Ändra till din e-postadress
        to: 'mottagarens.email@example.com', // Ändra till mottagarens e-postadress
        subject: 'Formulärsvaren',
        text: 'Valda svar: ' + selectedOptions.join(', ') // Skapa meddelandetext med användarens val
        // Du kan också bifoga bilderna här om de finns som filer eller länkar
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Fel vid skickande av e-post:', error);
            res.status(500).send('Ett fel uppstod vid skickande av e-post.');
        } else {
            console.log('E-post skickat:', info.response);
            res.sendStatus(200);
        }
    });
});

// Starta servern
app.listen(port, () => console.log(`Servern lyssnar på port ${port}`));
