import React from 'react'

function Channels() {
  let students = [{ size: 60 }]
  let channel = [{ size: students[0].size / 20 }]
  var text = ''
  for (let i = 0; i < 5; i++) {
    text += 'The number is ' + i + '<br>'
  }
  console.log(channel[0].size)

  return (
    <div className="FHseYW">
      <div className="BaYsb">
        <div className="cRDmY">{text}</div>
        <div className="cRDmY text-center">under maintenance</div>
      </div>
    </div>
  )
}

export default Channels