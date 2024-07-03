import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../services/AppContext';
import { users } from '../../data/mockData';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('LoginPage must be used within an AppProvider');
  }

  const { updateUser } = context;

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      updateUser(user);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="90vh">
      <Box width="100%" maxWidth="400px" padding="16px" boxShadow={3} borderRadius="8px">
        <Typography variant="h4" gutterBottom>Введите логин и пароль</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Логин"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Авторизоваться
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
