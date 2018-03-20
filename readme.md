# React-Short-Notice

## The planner strongly wanted to make it.

## Caution

in use es6

## Start

```
  npm install react-short-notice --save
```

## File

```
  ShortNoticeContainer.jsx
  ShortNoticeContraller.js
```

## Structure

ShortNoticeContraller.jsx call =>  Listener ShortNoticeContainer.js

[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)


### example

```
  import SNC from 'react-short-notice/ShortNoticeContainer'
  import ShortNoticeContraller from 'react-short-notice/ShortNoticeContraller'

  class Container extends React.Component {
    componentDidMount(){
      ShortNoticeContraller.show('inErrorMessage')

      setTimeout(()=>{
        ShortNoticeContraller.show('shortNotice')
      },2000)

      setTimeout(()=>{
        ShortNoticeContraller.hide('shortNotice')
      },4000)

      setTimeout(()=>{
        ShortNoticeContraller.hide('sparkle')
      },6000)
      //all hide short notice
      ShortNoticeContraller.allHide()
    }

    render(){
      return(
        <div> 
          <SNC id='inErrorMessage' timeout='2000'>
            <span>error message</span>
          </SNC>
          <SNC id='shortNotice'>
            <span>shortNotice</span>
          </SNC>
          <SNC id='sparkle' transition='2s' timeout='2000'>
            <span>shortNotice</span>
          </SNC>
        </div>
      )
    }
  }
```