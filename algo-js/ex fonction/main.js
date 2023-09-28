var a = "Jean"
var b = "Paul"
var result = checkName(a,b)

function checkName(nom1, nom2){
    if (nom1 === nom2) {
        return true
    } else {
        return false
    }
}
console.log(result)