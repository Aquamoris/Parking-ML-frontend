import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AlgorithmPage: React.FC = () => {
    const [parkingSpots, setParkingSpots] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [freeSpots, setFreeSpots] = useState<number | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!image) {
            alert('Пожалуйста, загрузите изображение парковки.');
            return;
        }

        const formData = new FormData();
        formData.append('photo', image);

        try {
            const response = await axios.post('http://127.0.0.1:8000/cam', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const { vehicle_count } = await response.data;
            setFreeSpots(parkingSpots - vehicle_count);
        } catch (error) {
            console.error('Ошибка при отправке изображения', error);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div style={{ margin: '20px', width: '700px' }}>
            <Typography variant="h4">Алгоритм определения свободных мест на парковке</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" style={{ marginTop: '20px' }}>
                <TextField
                    label="Количество мест на парковке"
                    type="number"
                    value={parkingSpots}
                    onChange={(e) => setParkingSpots(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                    required
                />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span" style={{ marginTop: '10px', marginRight: '30px' }}>
                        Загрузить изображение парковки
                    </Button>
                </label>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                    Отправить
                </Button>
                {imagePreview && (
                    <Box mt={2}>
                        <Typography variant="h6">Предварительный просмотр изображения:</Typography>
                        <img src={imagePreview} alt="Предварительный просмотр" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </Box>
                )}
                {freeSpots !== null && (
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Количество свободных мест: {freeSpots}
                    </Typography>
                )}
            </Box>
        </div>
    );
};

export default AlgorithmPage;
