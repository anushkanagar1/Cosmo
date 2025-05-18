# 📊 Cosmo
This is a React-based web application that includes user authentication (Sign In/Sign Up), a project section, and a leaderboard dashboard with nested views for Points, Streak, and Challenges Completed.

```bash
/src
 ├── Components/
 │   ├── SignIn.jsx
 │   ├── SignUp.jsx
 │   ├── Project.jsx
 │   ├── LeaderBoard.jsx
 │   ├── Points.jsx
 │   ├── Streak.jsx
 │   ├── Challange.jsx
 │   ├── Sidebar.jsx
 │   └── LeaderCompo.jsx
 └── App.jsx
```

## 🚀 Features:
 User Authentication: Sign In and Sign Up screens.
Sidebar Navigation: Persistent sidebar for navigating between dashboard sections.

Leaderboard Section:
Uses nested routes for different leaderboard views.
Displays different metrics: Points, Longest Streak, Challenges Completed.
Keeps the sidebar "Leaderboard" tab highlighted while navigating between sub-sections.
Dynamic User Info: Clicking on the username in the sidebar shows a dropdown with more info.



## Routing Overview:
Uses react-router-dom for routing. Defined routes:
/ → SignIn component
/signup → SignUp component
/project → ProjectsPage compone
/leaderboard → LeaderBoard (parent layout component)
/leaderboard/points → Points
/leaderboard/streak → Streak
/leaderboard/challenge → Challange
