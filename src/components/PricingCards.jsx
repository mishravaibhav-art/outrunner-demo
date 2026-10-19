const plans = [
  { name: 'Starter', price: '$0', features: ['5 workflows', '1,000 runs / month', 'Community support'] },
  { name: 'Team', price: '$29', features: ['Unlimited workflows', '50,000 runs / month', 'Email support'], featured: true },
  { name: 'Business', price: '$99', features: ['Unlimited workflows', '500,000 runs / month', 'Priority support'] },
]

export default function PricingCards() {
  return (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <div key={plan.name} className={plan.featured ? 'card pricing-card featured' : 'card pricing-card'}>
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-price">
            {plan.price}
            <span className="plan-period"> / month</span>
          </p>
          <ul className="plan-features">
            {plan.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button className={plan.featured ? 'btn btn-primary' : 'btn btn-secondary'}>Choose {plan.name}</button>
        </div>
      ))}
    </div>
  )
}
