import request from './request'

export function getTopBanners() {
    return request({
      url: "/banner"
    })
  }


export function getHotRecommends(limit=8) {
    return request({
      url: "/personalized",
      params: {
        limit
      }
    })
  }
  
  export function getNewAlbums(limit=10) {
    return request({
      url: "/album/newest",
      params: {
        limit
      }
    })
  }
  
  export function getTopList(id) {
    return request({
      url: "/playlist/detail",
      params: {
        id
      }
    })
  }
  


  export function getToplistArtist(type){
      return request({
        url:'toplist/artist',
        params:{
          type 
        }
      })
  }



  export function getRadioStation(type){
    return request({
      url:'/personalized/djprogram',
      params:{
       
      }
    })
}