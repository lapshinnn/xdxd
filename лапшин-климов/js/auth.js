import DB from './db.js';

DB.loadDB();

export default {
  register: (name, email, password) => {
    DB.addUser({ id: Date.now(), name, email, password });
    localStorage.setItem('currentUser', email);
  },
  login: (email, password) => {
    const user = DB.getUsers().find(u => u.email === email && u.password === password);
    if (user) localStorage.setItem('currentUser', email);
    return user;
  },
  logout: () => localStorage.removeItem('currentUser'),
  currentUser: () => DB.getUsers().find(u => u.email === localStorage.getItem('currentUser'))
};