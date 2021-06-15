async function start(){
var database = firebase.database()
var target = database.ref()
console.log(await target.set('/',() => {

}))
}
start()
