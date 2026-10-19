const stats = [
  { label: 'Active workflows', value: '24', change: '+3' },
  { label: 'Runs this week', value: '18,492', change: '+12%' },
  { label: 'Success rate', value: '98.6%', change: '+0.4%' },
  { label: 'Failed runs', value: '257', change: '-8%' },
]

export default function StatCards() {
  return (
    <div className="stat-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="card stat-card">
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-change">{stat.change} vs last week</span>
        </div>
      ))}
    </div>
  )
}
