# React + Vite
<h1>📊 Cosmo</h1>
This is a React-based web application that includes user authentication (Sign In/Sign Up), a project section, and a leaderboard dashboard with nested views for Points, Streak, and Challenges Completed.

/src<br>
 ├── Components/<br>
 │   ├── SignIn.jsx<br>
 │   ├── SignUp.jsx<br>
 │   ├── Project.jsx<br>
 │   ├── LeaderBoard.jsx<br>
 │   ├── Points.jsx<br>
 │   ├── Streak.jsx<br>
 │   ├── Challange.jsx<br>
 │   ├── Sidebar.jsx<br>
 │   └── LeaderCompo.jsx<br>
 └── App.jsx<br>


 <h2>🚀 Features:</h2>
 User Authentication: Sign In and Sign Up screens.<br>
Sidebar Navigation: Persistent sidebar for navigating between dashboard sections.<br><br>

Leaderboard Section:<br>
Uses nested routes for different leaderboard views.<br>
Displays different metrics: Points, Longest Streak, Challenges Completed.<br>
Keeps the sidebar "Leaderboard" tab highlighted while navigating between sub-sections.<br>
Dynamic User Info: Clicking on the username in the sidebar shows a dropdown with more info.<br>



<h2>Routing Overview:</h2>
Uses react-router-dom for routing. Defined routes:
/ → SignIn component<br>
/signup → SignUp component
/project → ProjectsPage compone<br>
/leaderboard → LeaderBoard (parent layout component)<br>
/leaderboard/points → Points<br>
/leaderboard/streak → Streak<br>
/leaderboard/challenge → Challange


