import React, {Component} from 'react'
import Modal from '../Modal'



const StreamDelete = () =>{

  const actions = (
    <div>
      <button className="ui primary button">Cancel</button>
      <button className="ui red button">Delete</button>
    </div>
  )

    return(
      <div>
        <Modal title='Delete Stream'
         content='Are you sure you want to delete this stream?'
         actions={actions}/>
      </div>
    )
}

export default StreamDelete
