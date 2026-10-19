import Navbar from './components/Navbar.jsx'
import StatCards from './components/StatCards.jsx'
import WorkflowTable from './components/WorkflowTable.jsx'
import PricingCards from './components/PricingCards.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="section">
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Overview of your automations this week.</p>
          <StatCards />
        </section>

        <section className="section">
          <h2 className="section-title">Workflows</h2>
          <WorkflowTable />
        </section>

        <section className="section">
          <h2 className="section-title">Plans</h2>
          <PricingCards />
        </section>
      </main>
    </>
  )
}
