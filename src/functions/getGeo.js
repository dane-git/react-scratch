
export const getGeo = () => {
  console.log('getGeo')
  return new Promise((resolve, reject) => {
    let apos = {}
    console.log('getGeo Promise')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        apos = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        console.log(apos)
        resolve(apos)
      });
    }
    else {
      // Browser doesn't support Geolocation
      reject(err => { console.log(err) });
    }
  }
  )
}