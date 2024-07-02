import React, { useState, useContext, ChangeEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button
} from "@mui/material";
import { AppContext } from '../../services/AppContext';
import { CarType, initialData } from "../../data/mockData";

const ReferenceDataPage: React.FC = () => {
  const [data, setData] = useState<CarType[]>(initialData);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('ReferenceDataPage must be used within an AppProvider');
  }

  const { state } = context;
  const userRole = state.user?.role;

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
  };

  const handleSave = () => {
    setEditIdx(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> | any, idx: number, field: keyof CarType) => {
    const newData = [...data];
    newData[idx] = {
      ...newData[idx],
      [field]: e.target.value as string
    };
    setData(newData);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название типа</TableCell>
            <TableCell>Средняя длина типа</TableCell>
            <TableCell>Средний вес типа</TableCell>
            <TableCell>Дополнительная информация</TableCell>
            {userRole !== 'user' && <TableCell>Действия</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell>
                {editIdx === idx ? (
                  <TextField
                    value={row.name}
                    onChange={(e) => handleChange(e, idx, "name")}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <TextField
                    value={row.length}
                    onChange={(e) => handleChange(e, idx, "length")}
                  />
                ) : (
                  row.length
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <TextField
                    value={row.weight}
                    onChange={(e) => handleChange(e, idx, "weight")}
                  />
                ) : (
                  row.weight
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <TextField
                    value={row.additionalInfo}
                    onChange={(e) => handleChange(e, idx, "additionalInfo")}
                  />
                ) : (
                  row.additionalInfo
                )}
              </TableCell>
              {userRole !== 'user' && (
                <TableCell>
                  {editIdx === idx ? (
                    <Button onClick={handleSave}>Сохранить</Button>
                  ) : (
                    <Button onClick={() => handleEdit(idx)}>Редактировать</Button>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReferenceDataPage;
