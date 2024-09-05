import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, Box } from '@mui/material';

const scooterData = [
  { Manufacturer: 'Ather', Model: '450X', Speed: 53, Range: 127, Price: 75580 },
  { Manufacturer: 'Ather', Model: 'S1 Pro', Speed: 53, Range: 73, Price: 56363 },
  { Manufacturer: 'Ather', Model: 'Photon HX', Speed: 58, Range: 101, Price: 96830 },
  { Manufacturer: 'Ather', Model: 'Chetak', Speed: 88, Range: 83, Price: 146045 },
  { Manufacturer: 'Ather', Model: 'iQube', Speed: 90, Range: 71, Price: 88949 },
  { Manufacturer: 'Ola Electric', Model: '450X', Speed: 87, Range: 73, Price: 114372 },
  { Manufacturer: 'Ola Electric', Model: 'S1 Pro', Speed: 53, Range: 63, Price: 120678 },
  { Manufacturer: 'Ola Electric', Model: 'Photon HX', Speed: 54, Range: 85, Price: 75362 },
  { Manufacturer: 'Ola Electric', Model: 'Chetak', Speed: 84, Range: 84, Price: 91679 },
  { Manufacturer: 'Ola Electric', Model: 'iQube', Speed: 42, Range: 63, Price: 111671 },
  { Manufacturer: 'Hero Electric', Model: '450X', Speed: 61, Range: 67, Price: 131299 },
  { Manufacturer: 'Hero Electric', Model: 'S1 Pro', Speed: 56, Range: 86, Price: 93871 },
  { Manufacturer: 'Hero Electric', Model: 'Photon HX', Speed: 45, Range: 127, Price: 89538 },
  { Manufacturer: 'Hero Electric', Model: 'Chetak', Speed: 74, Range: 66, Price: 89505 },
];

function Recommendations() {
  const [speed, setSpeed] = useState('');
  const [price, setPrice] = useState('');
  const [range, setRange] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = () => {
    let filteredData = [];
    if (speed && price && range) {
      filteredData = scooterData.filter(scooter =>
        scooter.Speed >= parseInt(speed, 10) &&
        scooter.Price <= parseInt(price, 10) &&
        scooter.Range >= parseInt(range, 10)
      );
    } else if (speed && price) {
      filteredData = scooterData.filter(scooter =>
        scooter.Speed >= parseInt(speed, 10) &&
        scooter.Price <= parseInt(price, 10)
      );
    } else if (speed && range) {
      filteredData = scooterData.filter(scooter =>
        scooter.Speed >= parseInt(speed, 10) &&
        scooter.Range >= parseInt(range, 10)
      );
    } else if (price && range) {
      filteredData = scooterData.filter(scooter =>
        scooter.Price <= parseInt(price, 10) &&
        scooter.Range >= parseInt(range, 10)
      );
    } else if (speed) {
      filteredData = scooterData.filter(scooter =>
        scooter.Speed >= parseInt(speed, 10)
      );
    } else if (price) {
      filteredData = scooterData.filter(scooter =>
        scooter.Price <= parseInt(price, 10)
      );
    } else if (range) {
      filteredData = scooterData.filter(scooter =>
        scooter.Range >= parseInt(range, 10)
      );
    } else {
      // When no inputs are provided, or invalid data is entered
      filteredData = [];
    }
    setRecommendations(filteredData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Scooter Recommendations
      </Typography>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Minimum Speed (km/h)"
          variant="outlined"
          type="number"
          value={speed}
          onChange={e => setSpeed(e.target.value)}
        />
        <TextField
          label="Maximum Price (₹)"
          variant="outlined"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          label="Minimum Range (km)"
          variant="outlined"
          type="number"
          value={range}
          onChange={e => setRange(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Find Scooters
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {recommendations.length > 0 ? (
          recommendations.map((scooter, index) => (
            <Card key={index} sx={{ mb: 2, p: 2 }}>
              <Typography variant="h6">{scooter.Manufacturer} {scooter.Model}</Typography>
              <Typography variant="body1">Speed: {scooter.Speed} km/h</Typography>
              <Typography variant="body1">Range: {scooter.Range} km</Typography>
              <Typography variant="body1">Price: ₹{scooter.Price}</Typography>
            </Card>
          ))
        ) : (
          <Typography>No recommendations found based on your criteria.</Typography>
        )}
      </Box>
    </Container>
  );
}

export default Recommendations;
