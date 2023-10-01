class Character {
    constructor(name,mentalHealth){
        this.name = name
        this.mentalHealth = mentalHealth
    }
}

class Ride {
    constructor(radio,RedLightsPassed,changes){
        this.radio = radio
        this.RedLightsPassed = RedLightsPassed
        this.changes = changes
    }
}

var musics = ["Anissa - Wejdene",
"Daylight - David Kushner","Yoru Ni Kakeru - Yoasobi",
"Enemy - Imagine Dragons","Kawaki wo Ameku - Minami"]
var RedLights = 30
var John = new Character("John",10)
var RideToHome = new Ride(musics,0,0)


while(John.mentalHealth != 0 || Ride.RedLightsPassed != RedLights ) {
    var max = musics.length
    var ChosenMusic = Math.floor(Math.random()*max)
    console.log("La musique passant à la radio est :", RideToHome.radio[ChosenMusic])
    if(ChosenMusic == 1){
        John.mentalHealth -= 1
        RideToHome.RedLightsPassed += 1
        RideToHome.changes += 1
        console.log("Détestant cette musique, John s'enfuit et prend un nouveau taxi.")
    } else {
        RideToHome.RedLightsPassed += 1
    }
    var RemainingRedLights = RedLights - RideToHome.RedLightsPassed
    console.log("Il reste", RemainingRedLights,"feux rouges")

    if(John.mentalHealth == 0){
        console.log("BOUM !\nJohn a explosé car il a trop entendu de Wejdene !")
        break
    } else {
        if(RideToHome.RedLightsPassed == RedLights){
            console.log("John a réussi à rentrer chez lui en seulement", RideToHome.changes,
            "changements de taxi, il lui reste",John.mentalHealth,"de santé mental, tout va bien !")
            break
        }
    }
}