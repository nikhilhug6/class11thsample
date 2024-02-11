const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/collect-information', (req, res) => {
    const { batteryPercentage } = req.body;
    // Process the information as needed
    console.log('Battery Percentage:', batteryPercentage);
    // Respond with a success message
    res.send('Information received and processed successfully.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

