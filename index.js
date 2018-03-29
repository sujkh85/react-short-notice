import React, {Component} from 'react';

export class ShortNoticeContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      isShow:false,
      id:this.props.id ? this.props.id : 'empty'
    }

    this.timer = null
    this.onListener = this.onListener.bind(this)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this) 
    this.allHide = this.allHide.bind(this)
  }

  onListener(e){
    const {type} = e.detail;
    
    switch (type) {
      case 'show':
        this.show(e.detail.payload)
        break;
      case 'hide':
        this.hide(e.detail.payload);
        break;
      case 'allHide':
        this.allHide()
        break;
      default:
        break;
    }
  }

  show(payload){
    const {id} = this.state
    const {timeout} = this.props
    if(id === payload.id){
      this.setState({
        isShow:true
      },()=>{
        if(timeout){
          this.timer = setTimeout(() => {
            this.setState({
              isShow:false
            })
          }, timeout*1);
        }
      })
    }
  }

  hide(payload){
    const {id} = this.state
    if(id === payload.id){
      this.setState({
        isShow:false
      })
    }
  }

  allHide(){
    const {isShow} = this.state
    if(isShow === true){
      this.setState({
        isShow:false
      })
    }
  }

  componentWillMount() {
    window.addEventListener('short-notice',this.onListener, false);
  }

  componentWillUnmount() {
    if(this.timer){
      clearTimeout(this.timer)
      timer = null
    }
    window.removeEventListener('short-notice',this.onListener, false);
  }

  render(){
    const {isShow} = this.state
    const {transition} = this.props
    if(transition){
      return(
        <div style={{transition:`all ${transition}`,opacity:isShow?1:0}}>
          {this.props.children}
        </div>
      )
    }
    else {
      return isShow ? this.props.children : null
    }
  }
}


export class ShortNoticeController {
  static show(id){
    let event = new CustomEvent('short-notice', {
      detail: {
        type:'show',
        payload:{
          id:id
        }
      }
    });
    window.dispatchEvent(event);
  }

  static hide(id){
    let event = new CustomEvent('short-notice', {
      detail: {
        type:'hide',
        payload:{
          id:id
        }
      }
    });
    window.dispatchEvent(event);
  }
  static allHide(){
    let event = new CustomEvent('short-notice', {
      detail: {
        type:'allHide',
        payload:{}
      }
    });
    window.dispatchEvent(event);
  }
}


export default {ShortNoticeContainer, ShortNoticeController}