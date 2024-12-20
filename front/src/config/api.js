let API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

if (API_URL.endsWith("/")) {
  API_URL = API_URL.slice(0, -1);
}

export const endpoints = {
  auth: {
    register: `${API_URL}/api/auth/register`, // Matches POST /api/auth/register
    login: `${API_URL}/api/auth/login`, // Matches POST /api/auth/login
    logout: `${API_URL}/api/auth/logout`, // Added logout endpoint, not currently in your auth routes
  },
  users: {
    profile: `${API_URL}/api/users/:id`, // Matches GET /api/users/:id (Profile of user by ID)
    update: `${API_URL}/api/users/:id`, // Matches PUT /api/users/:id (Update user by ID)
    create: `${API_URL}/api/users/`, // Matches POST /api/users (Create a new user)
    list: `${API_URL}/api/users/`, // Matches GET /api/users (Get all users)
    delete: `${API_URL}/api/users/:id`, // Matches DELETE /api/users/:id (Delete user by ID)
  },
};

export { API_URL };

export const metadata = {
  title: "Team Finder",
  description: "A simple authentication system",
};
