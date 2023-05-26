import React from 'react'
import { Draggable as DraggableCustom } from 'react-draggable'

export default function Draggable({ children }) {
  const eventLogger = (e, data) => {
    console.log('Event: ', e)
    console.log('Data: ', data)
  }
  return (
    <Draggable
      axis='x'
      handle='.handle'
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      // onStart={handleStart}
      // onDrag={handleDrag}
      // onStop={handleStop}
    >
      {children}
    </Draggable>
  )
}
