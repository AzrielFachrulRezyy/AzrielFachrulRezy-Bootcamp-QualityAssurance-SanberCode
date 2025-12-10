module.exports = {
  validUser: {
    username: "Admin",
    password: "admin123",
  },
  invalidPassword: {
    username: "Admin",
    password: "salah123",
  },
  invalidUsername: {
    username: "AdminXYZ",
    password: "admin123",
  },
  emptyUser: {
    username: "",
    password: "admin123",
  },
  emptyPassword: {
    username: "Admin",
    password: "",
  },
};
