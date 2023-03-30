const AirPlane = {
    name: false,
    takeOff() {
            return AirPlane.name = true
    },
    land(){
            return AirPlane.name = false
    },
    //get 
    isFlying() {
        return AirPlane.name
    },
}
console.log(AirPlane.isFlying())
AirPlane.takeOff()
console.log(AirPlane.isFlying())
AirPlane.land()
console.log(AirPlane.isFlying())
AirPlane.land()
console.log(AirPlane.isFlying())