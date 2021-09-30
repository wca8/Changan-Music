export function getKeywords(props){
    let arr = props.location.search.split("=");
    let res = decodeURI(arr[1]);
    return res
  }