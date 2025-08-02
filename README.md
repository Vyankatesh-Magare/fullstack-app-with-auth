# Codveda Internship - Level 2

A full-stack web application demonstrating advanced features including React frontend, JWT authentication, role-based authorization, and enhanced database integration.

## 🚀 Features

### Task 1: React Frontend with Modern JavaScript Framework
- **Component-based Architecture**: Built with React functional components and hooks
- **State Management**: Context API for global state management
- **Modern UI**: Beautiful interface with Tailwind CSS and Lucide React icons
- **Responsive Design**: Mobile-first responsive design
- **Form Handling**: React Hook Form for efficient form management
- **Loading States**: Proper loading indicators and error handling

### Task 2: Authentication and Authorization
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Role-based Access Control**: User and Admin roles with protected routes
- **Secure Token Storage**: HTTP-only cookies and localStorage
- **Session Management**: Automatic token validation and refresh
- **Input Validation**: Server-side validation with express-validator

### Task 3: Enhanced Database Integration
- **MongoDB with Mongoose**: Robust database integration
- **Data Validation**: Comprehensive validation before saving
- **Database Indexing**: Optimized queries with proper indexing
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Error Handling**: Proper error handling and user feedback
- **Security Features**: Rate limiting, helmet, and CORS protection

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security middleware
- **express-rate-limit** - Rate limiting
- **cookie-parser** - Cookie handling

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## 📁 Project Structure

```
Task 2/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── auth/      # Authentication components
│   │   │   └── ...        # Other components
│   │   ├── contexts/      # React contexts
│   │   └── ...
│   ├── package.json
│   └── ...
├── models/                 # Database models
├── routes/                 # API routes
├── middleware/             # Custom middleware
├── config.env             # Environment variables
├── package.json
├── server.js              # Main server file
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or Atlas)
- npm or yarn

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd "Task 2"
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   - Copy `config.env` and update the values:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/codveda_level2
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRE=24h
   NODE_ENV=development
   ```

5. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Or use MongoDB Atlas with the connection string

### Running the Application

#### Development Mode (Both Frontend and Backend)
```bash
npm run dev:full
```

#### Backend Only
```bash
npm run dev
```

#### Frontend Only
```bash
npm run client
```

#### Production Build
```bash
npm run build
npm start
```

## 🔐 Authentication

### User Registration
- Navigate to `/register`
- Fill in name, email, and password
- Password must be at least 6 characters
- Email must be valid format

### User Login
- Navigate to `/login`
- Enter email and password
- JWT token is stored securely

### Role-based Access
- **User Role**: Can access dashboard and profile
- **Admin Role**: Can access user management and all user features

## 📊 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/me` - Update user profile

### User Management Routes (Admin Only)
- `GET /api/users` - Get all users (paginated)
- `GET /api/users/:id` - Get specific user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🎨 Frontend Features

### Dashboard
- User statistics and account information
- Quick actions and system information
- Role-based content display

### Profile Management
- Edit personal information
- View account details
- Security information display

### User Management (Admin)
- View all users with pagination
- Search and filter functionality
- Create, edit, and delete users
- Role and status management

### Authentication Pages
- Modern login and registration forms
- Form validation and error handling
- Password visibility toggle
- Responsive design

## 🔒 Security Features

### Backend Security
- **Helmet**: Security headers
- **Rate Limiting**: Prevent abuse
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Server-side validation
- **Password Hashing**: bcryptjs with salt
- **JWT Security**: Secure token handling

### Frontend Security
- **Protected Routes**: Role-based access control
- **Token Management**: Secure token storage
- **Form Validation**: Client-side validation
- **Error Handling**: User-friendly error messages

## 🗄️ Database Features

### User Model
- **Fields**: name, email, password, role, isActive, lastLogin
- **Indexes**: email (unique), role
- **Validation**: Email format, password length, name length
- **Hooks**: Password hashing on save
- **Methods**: Password comparison, JWT generation

### Database Optimization
- **Indexing**: Proper indexes for performance
- **Validation**: Comprehensive data validation
- **Error Handling**: Mongoose error handling
- **Relationships**: Prepared for future expansion

## 🧪 Testing the Application

### 1. Create an Admin User
```bash
# Using the registration form or API
POST /api/auth/register
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "password123"
}
```

### 2. Test User Features
- Login with different users
- Update profile information
- Test role-based access

### 3. Test Admin Features
- Access user management
- Create, edit, delete users
- Filter and search users

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

### Backend Deployment
1. Set environment variables
2. Build the application
3. Deploy to your preferred platform (Heroku, Vercel, etc.)

### Frontend Deployment
1. Run `npm run build`
2. Deploy the `build` folder to your hosting service

## 🔧 Customization

### Adding New Features
1. Create new routes in `routes/`
2. Add corresponding frontend components
3. Update authentication middleware if needed
4. Add database models if required

### Styling
- Modify `client/src/App.css` for custom styles
- Update Tailwind configuration in `client/tailwind.config.js`
- Add new components in `client/src/components/`

## 📝 License

This project is created for educational purposes as part of the Codveda Internship program.

## 🤝 Contributing

This is a learning project. Feel free to explore the code and understand the implementation of modern full-stack development practices.

---

**Level 2 Complete!** 🎉

This implementation demonstrates:
- ✅ React frontend with component-based architecture
- ✅ JWT authentication with role-based authorization
- ✅ Enhanced database integration with MongoDB
- ✅ Modern UI/UX with responsive design
- ✅ Security best practices
- ✅ Comprehensive error handling
- ✅ Scalable code structure 