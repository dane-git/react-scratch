
export const geoFetch = ((local) => {
  return new Promise((resolve, reject) => {
    console.log('getFecth Promise')
    console.log(local)
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${local.lat},${local.long}`)
      .then(result => result.json()
        .then(final => {
          console.log(final)
          resolve(final)
        }
        )
      )
  })
})