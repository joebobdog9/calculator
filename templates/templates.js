
var GPS = new Promise((res, rej) => {
    // if gps successful, resolve with coordinates
    // else reject with error

    navigator.geolocation.getCurrentPosition(
        (gpsData) => res({ lat: gpsData.coords.latitude, lon: gpsData.coords.longitude }),
        (error) => rej(error.message)
    )
})