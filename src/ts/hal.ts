export default class HAL {
    public swallow = new Swallow();

    HAL() {
        console.log("Hello. I am H.A.L, short for H.ecking A.ssistant T.hing. I was designed by Soren to maintain the user experience of joesorensen.xyz.")
    }
}

class Swallow {
    getUnladenAirspeedVelocity() {
        console.error("[H.A.L] ERROR. Type of swallow left as undefined. Please define type African or European")
    }
}