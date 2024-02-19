const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        rightArmStrength,
        leftArmStrength,
        rightLegStrength,
        leftLegStrength,
        rightHandStrength,
        leftHandStrength,
        markedHelpMed,
        otherHelpMed,
        checkedHelpMedInVehicle,
        hasCustomCar,
        userRoleInCar,
        markedVehicles,
        otherVehicle,
        dontKnowVehicle
    } = req.body;

    // Konfigurera transportör för att skicka e-post
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fotbollskungen_albin@hotmail.com',
            pass: 'albinii123'
        }
    });

    // Skapa e-postmeddelandet
    const mailOptions = {
        from: 'fotbollskungen_albin@hotmail.com',
        to: 'fotbollskungen_albin@hotmail.com',
        subject: 'Formulärinlämning från din webbplats',
        html: `
            <p>Förnamn: ${firstName}</p>
            <p>Efternamn: ${lastName}</p>
            <p>Telefonnummer: ${phoneNumber}</p>
            <p>E-post: ${email}</p>
            <p>Höger arms styrka: ${rightArmStrength}</p>
            <p>Vänster arms styrka: ${leftArmStrength}</p>
            <p>Höger bens styrka: ${rightLegStrength}</p>
            <p>Vänster bens styrka: ${leftLegStrength}</p>
            <p>Höger hands styrka: ${rightHandStrength}</p>
            <p>Vänster hands styrka: ${leftHandStrength}</p>
            <p>Märkta hjälpmedel: ${markedHelpMed.join(', ')}</p>
            <p>Andra hjälpmedel: ${otherHelpMed}</p>
            <p>Valda hjälpmedel i fordon: ${JSON.stringify(checkedHelpMedInVehicle)}</p>
            <p>Har anpassad bil: ${hasCustomCar}</p>
            <p>Användarroll i bilen: ${userRoleInCar}</p>
            <p>Märkta fordon: ${markedVehicles.join(', ')}</p>
            <p>Andra fordon: ${otherVehicle}</p>
            <p>Vet ej fordon: ${dontKnowVehicle}</p>
            <!-- Andra data här -->
        `
    };

    // Skicka e-postmeddelandet
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Det uppstod ett fel vid sändning av e-post.');
        } else {
            console.log('E-post skickad: ' + info.response);
            res.status(200).send('Formulärinlämning framgångsrikt. Tack!');
        }
    });
});

app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});
