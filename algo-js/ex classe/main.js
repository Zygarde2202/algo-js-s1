class Pokemon {
    constructor(name,attack,defense,hp,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky() {
        let luck = Math.random()
        if(this.luck < luck ){
            return true
        } else {
            return false
        }
    }
    
    attackPokemon(poke){
        let degats = this.attack - poke.defense
        if (degats < 0){
            degats = 1
        } 
        return degats
     }
}
    

luckYve = Math.random()
luckXer = Math.random()
var Yveltal = new Pokemon("Yveltal",131,96,126,luckYve)
var Xerneas = new Pokemon("Xerneas",131,96,126,luckXer)
console.log(Yveltal)
console.log(Xerneas)

while(Yveltal.hp > 0 && Xerneas.hp > 0){
    if (Yveltal.isLucky() == true){
        degatsAXer = Yveltal.attackPokemon(Xerneas)
        console.log(Xerneas.name, " possède ", Xerneas.hp," HP mais il a subi ", degatsAXer," dégats")
        Xerneas.hp -= degatsAXer
        if(Xerneas.hp < 0){
            Xerneas.hp = 0
        }
        console.log("Il reste ", Xerneas.hp, "HP à ",Xerneas.name)
        if (Xerneas.hp <= 0){
            console.log(Xerneas.name, " a été mis K.O !")
            break
        }
        continue
    } else {
        console.log("L'attaque de ",Yveltal.name," a échouée.")
        if(Xerneas.isLucky() == true){
            degatsAYve = Xerneas.attackPokemon(Yveltal)
            console.log(Yveltal.name, " possède ", Yveltal.hp," HP mais il a subi ", degatsAYve," dégats")
            Yveltal.hp -= degatsAYve
            if(Yveltal.hp < 0){
                Yveltal.hp = 0
            }
            console.log("Il reste ", Yveltal.hp, " HP à ",Yveltal.name)
            if (Yveltal.hp <= 0){
                console.log(Yveltal.name, " a été mis K.O !")
                break
            }
            continue
        } else {
            console.log("L'attaque de ",Xerneas.name," a échouée.")
            continue
        }
    }
}