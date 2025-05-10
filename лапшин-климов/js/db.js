let database = {
  products: [],
  users: []
};

const DB = {
  init: async () => {
    try {
      const response = await fetch('../db/database.json');
      const data = await response.json();
      database = data;
      localStorage.setItem('database', JSON.stringify(data));
    } catch (error) {
      console.error('Ошибка загрузки базы данных:', error);
      const savedData = localStorage.getItem('database');
      if(savedData) database = JSON.parse(savedData);
    }
  },

  getProducts: () => database.products,
  getUsers: () => database.users,
  addUser: (user) => {
    database.users.push(user);
    localStorage.setItem('database', JSON.stringify(database));
  }
};

export default DB;