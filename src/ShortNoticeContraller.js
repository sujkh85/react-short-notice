
export default class ShortNoticeContraller {
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
}