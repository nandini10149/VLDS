# VLDS - Vital Life Data System

A comprehensive health tracking web application built with Flask and Python. VLDS allows users to monitor their health metrics, track progress, and achieve their wellness goals.

## 🌟 Features

- **User Authentication**: Secure registration and login system
- **Health Records**: Track weight, blood pressure, heart rate, and blood sugar levels
- **BMI Calculator**: Automatic BMI calculation based on measurements
- **Personal Profile**: Manage health information and wellness goals
- **Analytics Dashboard**: Interactive charts and data visualization
- **Health Tips**: Personalized wellness advice
- **Responsive Design**: Beautiful UI with Bootstrap 5
- **Data Security**: Encrypted passwords and secure sessions

## 🛠️ Technology Stack

- **Backend**: Flask, Flask-SQLAlchemy, Flask-Login
- **Database**: SQLite (easily upgradable to PostgreSQL)
- **Frontend**: HTML5, Bootstrap 5, JavaScript
- **Charts**: Chart.js
- **Forms**: WTForms with validation
- **Security**: Werkzeug password hashing

## 📋 Prerequisites

- Python 3.8+
- pip (Python package manager)
- Virtual environment (recommended)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/nandini10149/VLDS.git
cd VLDS
```

### 2. Create Virtual Environment
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application
```bash
python main.py
```

The application will start at `http://localhost:5000`

## 📁 Project Structure

```
VLDS/
├── app/
│   ├── __init__.py          # App factory
│   ├── models.py            # Database models
│   ├── forms.py             # WTForms definitions
│   └── routes.py            # Application routes
├── templates/               # HTML templates
│   ├── base.html
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── health_records.html
│   ├── profile.html
│   ├── analytics.html
│   └── about.html
├── static/
│   └── css/
│       └── style.css        # Custom CSS
├── config.py                # Configuration
├── main.py                  # Entry point
└── requirements.txt         # Dependencies
```

## 🎯 Usage Guide

### 1. Register a New Account
- Click "Sign Up" on the home page
- Fill in your details (username, email, password)
- Create your account

### 2. Complete Your Profile
- Go to Profile page
- Add your personal information
- Set your health goals

### 3. Add Health Records
- Navigate to Health Records
- Enter your current measurements
- Save your record

### 4. Track Progress
- View your Dashboard for quick stats
- Check Analytics for detailed charts
- Monitor trends over time

## 📊 Health Metrics Tracked

- **Weight** (kg)
- **Blood Pressure** (Systolic/Diastolic)
- **Heart Rate** (bpm)
- **Blood Sugar** (mg/dL)
- **BMI** (calculated automatically)

## 🔒 Security Features

- Encrypted password storage using Werkzeug
- Secure session management with Flask-Login
- CSRF protection with Flask-WTF
- User authentication required for protected routes
- Database ORM to prevent SQL injection

## 🌐 API Routes

### Authentication
- `GET /auth/register` - Registration page
- `POST /auth/register` - Submit registration
- `GET /auth/login` - Login page
- `POST /auth/login` - Submit login
- `GET /auth/logout` - Logout user

### Main
- `GET /` - Home page
- `GET /dashboard` - User dashboard
- `GET /about` - About page

### Health
- `GET /health/profile` - User profile
- `POST /health/profile` - Update profile
- `GET /health/records` - Health records list
- `POST /health/records` - Add new record
- `POST /health/record/<id>/delete` - Delete record
- `GET /health/analytics` - Analytics dashboard

## 💡 Sample Data

On first run, the application automatically loads sample health tips in these categories:
- Nutrition
- Exercise
- Mental Health

## 🔄 Future Enhancements

- [ ] Email notifications
- [ ] Export data to PDF
- [ ] Mobile app
- [ ] Doctor appointments booking
- [ ] Medication reminders
- [ ] Social features (share progress)
- [ ] AI-powered health insights

## 📝 Database Models

### User
- username, email, password_hash
- first_name, last_name, age
- height, target_weight
- timestamps

### HealthRecord
- weight, blood_pressure, heart_rate
- blood_sugar, notes
- user_id (foreign key)
- timestamp

### HealthTip
- title, content
- category
- timestamp

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Author

**Nandini Sharma**
- GitHub: [@nandini10149](https://github.com/nandini10149)

## 📧 Support

For support, issues, or questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Flask documentation
- Bootstrap for responsive design
- Chart.js for data visualization

---

**Made with ❤️ for your health and wellness**

Start tracking your health today with VLDS!
