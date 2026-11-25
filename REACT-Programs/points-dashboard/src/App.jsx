import "./App.css";

const activities = [
  { title: "Completed daily challenge", detail: "Today, 10:42 AM", points: "+50" },
  { title: "Earned a weekly bonus", detail: "Yesterday, 4:15 PM", points: "+120" },
  { title: "Profile achievement unlocked", detail: "Nov 18, 2:30 PM", points: "+30" },
];

const stateValues = [
  { label: "Current level", value: "Level 8" },
  { label: "Points to next level", value: "240" },
  { label: "Active streak", value: "6 days" },
  { label: "Weekly goal", value: "4 / 5 days" },
];

function App() {
  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">YOUR OVERVIEW</p>
          <h1>Dashboard</h1>
        </div>
        <button className="action-button">＋ New action</button>
      </header>

      <section className="summary-grid" aria-label="Dashboard summary">
        <article className="card points-card">
          <p className="card-label">Total points</p>
          <p className="points-value">2,460 <span>pts</span></p>
          <p className="muted">↑ 180 points this week</p>
        </article>

        <article className="card counter-card">
          <p className="card-label">Action counter</p>
          <p className="metric-value">12</p>
          <p className="muted">Actions completed this month</p>
        </article>

        <article className="card profile-card">
          <div className="avatar" aria-hidden="true">JD</div>
          <div>
            <p className="card-label">User profile</p>
            <h2>Jordan Davis</h2>
            <p className="muted">Member since January 2025</p>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="card activity-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">RECENT UPDATES</p>
              <h2>Activity information</h2>
            </div>
            <button className="text-button">View all</button>
          </div>

          <ul className="activity-list">
            {activities.map((activity) => (
              <li className="activity-item" key={activity.title}>
                <span className="activity-icon" aria-hidden="true">✓</span>
                <div className="activity-copy">
                  <strong>{activity.title}</strong>
                  <span>{activity.detail}</span>
                </div>
                <strong className="activity-points">{activity.points}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="card state-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AT A GLANCE</p>
              <h2>Current state</h2>
            </div>
          </div>

          <div className="state-list">
            {stateValues.map((item) => (
              <div className="state-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;