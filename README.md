# Hospital Management System - Backend

A Node.js/Express backend API for the Hospital Management System with MongoDB integration.

## Features

- **Authentication**: JWT-based user authentication and authorization
- **Patient Management**: CRUD operations for patient records
- **Doctor Management**: Doctor profiles and availability management
- **Appointment System**: Booking and scheduling appointments
- **User Roles**: Admin, Doctor, and Patient role-based access
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs for password hashing
- CORS enabled

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nadish2507/hospital_backend.git
cd hospital_backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/hospital_management
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `POST /api/doctors` - Create new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Appointments
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

## Project Structure

```
├── config/
│   └── db.js           # Database connection
├── models/
│   ├── User.js         # User model
│   ├── Patient.js      # Patient model
│   ├── Doctor.js       # Doctor model
│   └── Appointment.js  # Appointment model
├── routes/
│   ├── authRoutes.js   # Authentication routes
│   ├── patientRoutes.js # Patient routes
│   ├── doctorRoutes.js # Doctor routes
│   └── appointmentRoutes.js # Appointment routes
├── seedDoctors.js      # Database seeding script
└── server.js           # Main server file
```

## Environment Variables

Create a `.env` file with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.