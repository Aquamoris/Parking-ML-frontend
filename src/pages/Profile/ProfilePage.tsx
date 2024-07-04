import React, { useState, useContext } from 'react';
import { AppContext } from '../../services/AppContext';
import { carsData } from '../../data/mockData';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button } from '@mui/material';

const ProfilePage: React.FC = () => {
  const context = useContext(AppContext);
  const [editIdx, setEditIdx] = useState<number | null>(null);

  if (!context) {
    throw new Error('ProfilePage must be used within an AppProvider');
  }

  const { state } = context;
  const userRole = state.user?.role;
  const handleEdit = (idx: number) => {
    setEditIdx(idx);
  };

  const handleSave = (idx: number, newNumber: string, newType: string) => {
    const updatedCarsData = [...carsData];
    updatedCarsData[idx] = { ...updatedCarsData[idx], number: newNumber, type: newType };
    setEditIdx(null); 
  };

  return (
    <div style={{
      marginLeft: '20px',
      width: "500px",
    }}>
      <Typography variant="h4">Профиль пользователя</Typography>
      <Typography variant="h5">Имя: {state.user?.name}</Typography>
      <Typography variant="h5">Роль: {state.user?.role}</Typography>

      {userRole == 'user' && (<div>
        <Typography
          variant="h6"
          style={{ marginTop: '30px' }}
        >
          Мои автомобили
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Номер</TableCell>
                <TableCell>Тип</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carsData.map((car, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {editIdx === idx ? (
                      <TextField
                        value={car.number}
                        onChange={(e) => handleSave(idx, e.target.value, car.type)} // Пример, как можно обновить номер
                      />
                    ) : (
                      car.number
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === idx ? (
                      <TextField
                        value={car.type}
                        onChange={(e) => handleSave(idx, car.number, e.target.value)} // Пример, как можно обновить тип
                      />
                    ) : (
                      car.type
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === idx ? (
                      //@ts-ignore
                      <Button onClick={() => handleSave(car.number, car.type, idx)}>Сохранить</Button>
                    ) : (
                      <Button onClick={() => handleEdit(idx)}>Редактировать</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>)}
    </div>
  );
};

export default ProfilePage;