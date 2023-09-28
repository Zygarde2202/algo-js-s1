var names = []
names.push("Vincent")
names.push("Paul")
names.push("Arthur")

for (var i = 0; i < names.length; i++ ) {
    names[i] += " va à la pêche"
    /*console.log(names[i])*/
}

names.forEach((noms) => console.log(noms))
