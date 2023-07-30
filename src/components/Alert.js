import React from 'react'

export default function Alert({alert}) {
    function capitalize(word){
     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
  return (
    
      alert && <div className={`alert alert-${alert.type}`} role="alert">
  <strong>{capitalize(alert.type)}:</strong>{alert.message}
</div>
  )
}
