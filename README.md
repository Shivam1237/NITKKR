# 🎓 NIT Academic Hub

A full-stack MERN web application that provides students with access to previous year question papers, study materials, and interview experiences.

---

## 🚀 Live Demo

* 🌐 Frontend: https://nitkkr-psi.vercel.app
* 🔗 Backend API: https://nitkkr-tkew.onrender.com

---

## 📌 Features

* 🔐 User Authentication (Signup/Login)
* 🔑 JWT-based authentication system
* 🌐 Google OAuth Login
* 📚 Courses section (MCA, B.Tech, MBA, etc.)
* 🎯 Interview Experience section
* 🤖 AI Assistant integration
* 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend:

* React.js (Vite)
* CSS / Tailwind (if used)
* Axios

### Backend:

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT Authentication
* Passport.js (Google OAuth)

---

## ⚙️ Environment Variables

### Backend (.env)

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret

---

### Frontend (.env)

VITE_API_URL=https://nitkkr-tkew.onrender.com

---

## 📂 Project Structure

```
NIT-HUB/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── nit-academic-hub/ (frontend)
│   ├── src/
│   ├── components/
│   └── pages/
│
└── README.md
```

---

## 🧪 Run Locally

### Backend:

```
cd backend
npm install
npm run dev
```

### Frontend:

```
cd nit-academic-hub
npm install
npm run dev
```

---

## 🔥 Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas

---

## 🧠 Learnings

* Handling CORS issues
* Environment variable management
* Deployment on Vercel & Render
* MongoDB Atlas connectivity
* Authentication flow implementation

---

## 👨‍💻 Author

**Shivam Prajapati**

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
