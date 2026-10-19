const workflows = [
  { name: 'New lead to CRM', trigger: 'Webhook', runs: 4210, status: 'Active' },
  { name: 'Invoice paid to Slack', trigger: 'Stripe', runs: 1893, status: 'Active' },
  { name: 'Daily sales report', trigger: 'Schedule', runs: 7, status: 'Paused' },
  { name: 'Support ticket triage', trigger: 'Email', runs: 962, status: 'Active' },
  { name: 'Sync contacts to sheet', trigger: 'Schedule', runs: 0, status: 'Error' },
]

export default function WorkflowTable() {
  return (
    <div className="card table-card">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Trigger</th>
            <th>Runs</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((wf) => (
            <tr key={wf.name}>
              <td>{wf.name}</td>
              <td>{wf.trigger}</td>
              <td>{wf.runs.toLocaleString()}</td>
              <td>
                <span className={`badge badge-${wf.status.toLowerCase()}`}>{wf.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
