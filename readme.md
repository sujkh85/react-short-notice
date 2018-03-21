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
  import {ShortNoticeController, ShortNoticeContainer} from react-short-notice

  class Container extends React.Component {
    componentDidMount(){
      ShortNoticeController.show('inErrorMessage')

      setTimeout(()=>{
        ShortNoticeController.show('shortNotice')
      },2000)

      setTimeout(()=>{
        ShortNoticeController.hide('shortNotice')
      },4000)

      setTimeout(()=>{
        ShortNoticeController.hide('sparkle')
      },6000)
      //all hide short notice
      ShortNoticeController.allHide()
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