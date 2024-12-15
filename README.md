# Team Finder

A web application that helps university students find teammates for academic projects, research work, and other activities based on their academic profiles and interests.

## Features

- 🔍 Explore other students' profiles
- 📊 View academic details and skills
- 🔄 Filter and pagination system
- 🤝 Connect with potential teammates

## Tech Stack

### Frontend (/front)
- React.js
- Axios for API calls
- React Router for navigation
- CSS for styling

### Backend (/back)
- Node.js with Express
- MongoDB for database
- JWT for authentication
- REST API endpoints

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Omar7001-B/team-finder.git
```

2. Install Backend Dependencies
```bash
cd back
npm install
```

3. Install Frontend Dependencies
```bash
cd front
npm install
```

### Environment Setup

Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Create a `.env` file in the frontend directory with the following variable:
```
NEXT_PUBLIC_API_URL=your_backend_api_url
```

## Project Structure

```
university-team-finder/
├── front/                # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/       # Page components
│   │   └── services/    # API services
│   └── package.json
│
└── back/                 # Backend Express application
    ├── models/          # MongoDB models
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    └── package.json
```

## API Endpoints

- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/users` - Get list of users
- GET `/api/users/:id` - Get specific user profile

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
