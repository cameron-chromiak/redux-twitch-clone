import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import Modal from '../Modal'
import history from '../../history'


class StreamDelete extends Component{

  componentDidMount(props){
    this.props.fetchStream(this.props.match.params.id)

  }

  renderContent(){
    if(!this.props.stream){
      return 'Do you want to delete this stream?'
    }
    return(
        <div>
          Are you sure you want to delete <b> {this.props.stream.title} </b>
        </div>
    )
  }

   renderActions(){
     const {id} = this.props.match.params

      return(
    <div>
      <button  onClick={() => this.props.deleteStream(id) }className="ui red button">Delete</button>
      <Link to='/' className="ui primary button">Cancel</Link>
    </div>)
  }

  render(){
    return(
        <Modal title='Delete Stream'
         content={this.renderContent()}
         actions={this.renderActions()}
         onDismiss={() => history.push('/')}/>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)

// takes title, renderContent, actions and onDismiss as props
