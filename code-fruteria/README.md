# 🍌 Code Fruteria 🍎 — *Refreshed & Full-Stack Ready!*

> 🚀 **New & Improved:**  
> • Switched from mock login to real Node.js + JWT backend  
> • Clean project structure: `frontend/` + `backend/`  
> • Ant Design-based UI with drag-and-drop grid panels  
> • Better state management and user experience  
> • Easy setup with `npm run install-all` and `npm run dev`

> ⚠️ **Note:** This project runs best on **Node.js v16.14.2**.  
> If you’re using a different version, you might end up with banana peels in your stack trace.

---

## 🥝 Getting Started

1. **Clone this repo**  
   (_Unzip if you're using the zip version_)  
   ```bash
   git clone https://github.com/yourname/code-fruteria.git
   cd code-fruteria
   ```

2. **Install dependencies**  
   (_Don’t worry, no actual fruit required._)
   ```bash
   npm run install-all
   ```

3. **Start both frontend and backend**  
   (_Let the fruit fiesta begin!_)
   ```bash
   npm run dev
   ```

### 🍇 What You'll Get

- 🥭 Frontend (React 18 + Vite + AntD + AG Grid)
  - Runs on `http://localhost:3000`
- 🍒 Backend (Express + JWT)
  - Runs on `http://localhost:4000`
  - Handles login with token response

---

## 🍊 Mock Login

- Check out `backend/auth.js` for a taste of our authentication magic.
- Try logging in as:
  - **admin** / **1234**
- _Yes, our security is softer than an overripe peach._
- Feel free to plug in a real database if you’re feeling fancy.

> 💡 **Pro Tip**: Once logged in, a token is stored in `localStorage` — automatically logs you in and protects routes.

---

## 🍍 Scripts You Can Peel

From the root folder:

| Command               | What It Does                                 |
|------------------------|----------------------------------------------|
| `npm run install-all`  | Installs frontend (with legacy deps) + backend |
| `npm run dev`          | Starts both frontend and backend servers      |
| `cd frontend && npm run dev` | Start frontend alone (React)        |
| `cd backend && node index.js` | Start backend API manually (Express)  |

---

## 🍏 Folder Juiciness

```bash
code-fruteria/
├── frontend/       # Vite + React 18 + Ant Design + AG Grid
├── backend/        # Express API with dummy JWT auth
├── package.json    # Monorepo commands
└── README.md       # You are here 🍹
```

---

## 🍉 Bonus Ideas

- Add dark/light mode toggle (already exists! 🌗)
- Add persistent login using JWT from backend ✅
- Replace mock user DB with real DB (MongoDB / Supabase / JSON file?)

---

🍋 _May your bugs be squashed and your fruits be fresh._

—  
Made with ❤️ and React.