type UserRole = 'user' | 'editor' | 'superadmin';

interface User {
  name: string;
  username: string;
  password: string;
  role: UserRole;
}

export interface CarType {
  id: number;
  name: string;
  length: string;
  weight: string;
  additionalInfo: string;
}

export const users: User[] = [
  { username: 'user1', password: 'password1', name: 'User One', role: 'user' },
  { username: 'user2', password: 'password2', name: 'User Two', role: 'editor' },
  { username: 'admin', password: 'adminpass', name: 'Admin User', role: 'superadmin' },
];



export const initialData: CarType[] = [
  {
    id: 1,
    name: "Легковой автомобиль",
    length: "4.5 м",
    weight: "1.5 т",
    additionalInfo: "Максимальная скорость 180 км/ч, 5 мест"
  },
  {
    id: 2,
    name: "Лёгкий грузовик",
    length: "6.0 м",
    weight: "3.5 т",
    additionalInfo: "Грузоподъёмность 1.5 т, 2 оси"
  },
  {
    id: 3,
    name: "Грузовик",
    length: "12 м",
    weight: "20 т",
    additionalInfo: "Грузоподъёмность до 20 т, 3 оси"
  },
  {
    id: 4,
    name: "Автобус",
    length: "14 м",
    weight: "18 т",
    additionalInfo: "Вместимость 50 пассажиров, городской"
  }
];


export const carsData = [
  { number: 'A123BC', type: 'Легковой автомобиль' },
  { number: 'B456DE', type: 'Лёгкий грузовик' },
  { number: 'C789FG', type: 'Грузовик' },
  { number: 'D321GH', type: 'Автобус' },
];