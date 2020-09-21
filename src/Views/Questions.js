import React from 'react'
import ItemModal from '../components/Modals/ItemModal'
import ItemTable from '../components/Tables/ItemTable'
import PackageTable from '../components/Tables/PackageTable'

function Questions() {
  return (
    <div className="mRwey">
      <div className="QrYSs">
        <div className="cRDmY"></div>
        <div className="cRDmY"></div>
        <div className="cRDmY"></div>
      </div>
      <div className="BaYsa">
        <div className="cRDmY p-4">
        <h3>Packages</h3>
          <hr />
          <PackageTable />
        </div>
        <div className="cRDmY p-4">
        <h3>Item</h3>
          <hr />
          {/* <ItemModal /> */}
          <ItemTable />
        </div>
      </div>
    </div>
  )
}

export default Questions