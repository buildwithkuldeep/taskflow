# 🌟 TaskFlow – MERN Task Manager

### 🔗 **Live Frontend:** https://taskflowkd.netlify.app  

A clean and modern **Task Management Web App** built using the **MERN Stack**, featuring authentication, CRUD operations, priority tagging, and a beautiful dark/light mode UI.

---

## 🚀 Overview

TaskFlow lets users:

- ✅ Register & Login securely  
- ✅ Create tasks  
- ✅ Edit tasks  
- ✅ Delete tasks  
- ✅ Mark tasks completed  
- ✅ View tasks in an organized dashboard  
- ✅ Switch between **Dark Mode / Light Mode**

Perfect project to showcase MERN skills for internships & jobs.

---

## ✨ Features

### 🔐 Authentication
- JWT login & register  
- Password hashed (bcrypt)  
- Protected API routes  

### 📝 Task Management
- Add, Edit, Delete, Update  
- Priority levels: Low, Medium, High  
- Task completion toggle  
- User-specific tasks  

### 🎨 Modern UI
- TailwindCSS styling  
- Responsive design  
- Smooth dashboard layout  
- Dark & Light theme toggle  

### 🛠 Tech Stack
- **Frontend:** React (Vite), TailwindCSS, Context API, Axios  
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose  
- **Deployment:** Netlify + Render  

---

## 📸 Screenshots

### 🔐 Login Page  
![Login](https://via.placeholder.com/900x500?text=Login+Page)

### 📝 Dashboard  
![Dashboard](https://via.placeholder.com/900x500?text=Task+Dashboard)

### 🎨 Create Task  
![Create Task](https://via.placeholder.com/900x500?text=Create+Task)

---

## 🏗 Project Structure

```
taskflow/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── App.jsx
    │   └── main.jsx
```

---

## ⚙️ Backend Setup

### 1️⃣ Install dependencies
```bash
cd backend
npm install
```

### 2️⃣ Create `.env`
```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
```

### 3️⃣ Run backend
```bash
npm run dev
```

---

## 🎨 Frontend Setup

### Install dependencies  
```bash
cd frontend
npm install
```

### Update API base URL  
`src/api/api.js`:
```js
export default axios.create({
  baseURL: "https://your-render-backend-url/api",
});
```

### Run frontend
```bash
npm run dev
```

---

## 📡 API Routes

### 🔐 Auth  
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |

### 📝 Tasks  
| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/tasks` | Get tasks |
| POST | `/api/tasks` | Create |
| GET | `/api/tasks/:id` | Get single |
| PUT | `/api/tasks/:id` | Update |
| DELETE | `/api/tasks/:id` | Delete |

---

## 🚀 Deployment

### 🌐 Frontend → Netlify  
Drag & drop the `dist` folder or connect GitHub.

### 🖥 Backend → Render  
Connect GitHub → Add `.env` → Deploy.

---

## 🔮 Future Enhancements
- Kanban board  
- Task labels  
- Calendar integration  
- Subtasks  
- Notifications  

---

## 👨‍💻 Author

**Kuldeep Kumar**  
A passionate MERN Developer building real-world projects.  

---

## ⭐ Support

If you like the project:

- ⭐ Star this repo  
- 🍴 Fork it  
- 🧑‍💻 Share it  

---

