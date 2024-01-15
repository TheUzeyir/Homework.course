import React from 'react'
import './footer.css'


const footer = () => {
  return (
    <div>
        <footer>
        <div className="container">
                <div className="foreign_relations">
                    <ul className='footer_ul'>
                        <h3 className="solution_information">Solutions</h3>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                    <ul className='footer_ul'>
                        <h3 className="support_information">Support</h3>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>
        </div>
    </footer>
    </div>
  )
}

export default footer
