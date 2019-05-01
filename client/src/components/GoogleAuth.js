import React, {Component} from 'react'

class GoogleAuth extends Component{

  state = {
    isSignedIn: null
  }


  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        client_id: '951358901456-m6n9rac87saoti5sogibhopudhi60137.apps.googleusercontent.com',
        scope: 'email'
      }).then( res =>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
      })
    })
  }

  renderAuthButton(){
    if(this.state.isSignedIn === null){
       return <div>IDK</div>
    }else if(this.state.isSignedIn){
        return  <div>Signed in</div>
    }else{
      return <div>Not signed in</div>
    }
  }

  render(){


    return(
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth
