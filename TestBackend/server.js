const express = require('express');
const nodemailer = require('nodemailer');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const pool = mariadb.createPool({
    host: 'your_database_host',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'your_database_name'
});

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

    pool.getConnection()
        .then(conn => {
            const sql = `
                INSERT INTO your_table_name (firstName, lastName, phoneNumber, email, rightArmStrength, leftArmStrength, rightLegStrength, leftLegStrength, rightHandStrength, leftHandStrength, markedHelpMed, otherHelpMed, checkedHelpMedInVehicle, hasCustomCar, userRoleInCar, markedVehicles, otherVehicle, dontKnowVehicle)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [firstName, lastName, phoneNumber, email, rightArmStrength, leftArmStrength, rightLegStrength, leftLegStrength, rightHandStrength, leftHandStrength, JSON.stringify(markedHelpMed), otherHelpMed, JSON.stringify(checkedHelpMedInVehicle), hasCustomCar, userRoleInCar, JSON.stringify(markedVehicles), otherVehicle, dontKnowVehicle];
            return conn.query(sql, values)
                .then(result => {
                    conn.release(); // Release the connection
                    console.log('Data successfully inserted into database.');
                    
                    // Configure transporter to send email
                    const transporter = nodemailer.createTransport({
                        service: 'hotmail',
                        auth: {
                            user: 'fotbollskungen_albin@hotmail.com',
                            pass: 'albinii123'
                        }
                    });

                    // Create email message
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
                            <!-- Other data here -->
                        `
                    };

                    // Send email message
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error);
                            res.status(500).send('Det uppstod ett fel vid sändning av e-post och insättning av data i databasen.');
                        } else {
                            console.log('E-post skickad: ' + info.response);
                            res.status(200).send('Formulärinlämning framgångsrikt. Tack!');
                        }
                    });
                })
                .catch(err => {
                    conn.release(); // Release the connection in case of error
                    console.error('Error inserting data into database:', err);
                    res.status(500).send('Det uppstod ett fel vid insättning av data i databasen.');
                });
        })
        .catch(err => {
            console.error('Error connecting to database:', err);
            res.status(500).send('Det uppstod ett fel vid anslutning till databasen.');
        });
});

app.all('/send-email', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});
