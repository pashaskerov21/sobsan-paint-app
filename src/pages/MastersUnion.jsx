import React from 'react'
import MasterForms from '../components/masters/MasterForms'
import MastersInfo from '../components/masters/MastersInfo'

function MastersUnion() {
  return (
    <section className="masters-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4">
            <MasterForms/>
          </div>
          <div className="col-12 col-lg-6 col-lg-8">
            <MastersInfo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MastersUnion
