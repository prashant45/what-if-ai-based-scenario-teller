# 🗳️ what-if-ai-based-scenario-teller

What-If AI is an intelligent scenario generator that lets users explore creative “what if” situations using artificial intelligence.
You can type any hypothetical question—like “What if humans lived underwater?”—and the AI instantly generates a detailed and imaginative scenario describing how that world might look.

---

## 🚀 Features

### 👥 Voter Side

* Face-based identity verification using webcam.
* Secure voting interface — voters cannot see results.
* Simple, mobile-friendly UI.
* One vote per verified user.



---

## 🧠 Tech Stack

| Component           | Technology                                |
| ------------------- | ----------------------------------------- |
| Backend             | Python (Flask)                            |
| Frontend            | HTML, CSS, JavaScript                     |
| API key source      | open ai                                   |
| Deployment          | Localhost or cloud (Render, Heroku, etc.) |

---

## 🛠️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/what-if-ai-based-scenario-teller.git
cd what-if-ai-based-scenario-teller
```

### 2️⃣ Install Dependencies

Make sure you have Python 3.8+ installed.



*(For faster testing, you can mock DeepFace verification if needed.)*

### 3️⃣ Run the Application

```bash
python app.py
```

Then open your browser and go to:

```
http://127.0.0.1:5000
```

---

## 🧩 Project Structure

```
what-if-ai-based-scenario-teller/
│
├── app.py                    # Flask backend
├── static/                   # Optional: for CSS/JS files
├── templates/                # HTML templates
│   ├── index.html            # Face verification + ID input
│   ├── voting.html           # Main voting/admin page
│
├── uploads/                  # Stored user photos (auto-created)
└── README.md                 # You are here
```

---


## 📸 How It Works

1. a login page is intiated at first for one to log in
2. a web ui pops up,where one can question thier fantasies
3. the api fetches the answere and delivers to the user
4. hence the poject

---


---

## 🧾 Future Improvements

* addding voice over to it.
* picture to depict the scenes.
  

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```
4. Push and open a Pull Request.

---

## 🧑‍💻 Author

**PRASHANT HIREGOUDRA**
📧 [[prashant01589209w@gmail.com](mailto:YourEmail@example.com)]
🌐 [GitHub Profile Link]

---

## 🪪 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---
