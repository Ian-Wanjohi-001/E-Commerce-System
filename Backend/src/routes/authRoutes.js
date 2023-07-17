import { loginUser, registerUser, getUsers } from "../controllers/authRoutesControllers.js";

const authRoutes = (app) => {
  // Register user
  app.route('/auth/register')
    .post(registerUser);

  // Login user
  app.route('/auth/login')
    .post(loginUser);

  // Fetch all users
  app.route('/auth/users')
    .get(getUsers);
};

export default authRoutes;
