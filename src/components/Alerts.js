import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) => {
        const curr = word.toLowerCase()
        return curr.charAt(0).toUpperCase()+curr.slice(1)
    }
  return (
    props.alrt && <div class={`alert alert-${props.alrt.title} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alrt.title)}</strong>: {props.alrt.message}
    </div>
  )
}
