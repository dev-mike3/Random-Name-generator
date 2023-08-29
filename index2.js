const fullName = document.getElementById('names')

const firstName = ["Andrew", "Perez", "Michael", "Samuel", "Divine"]

const lastName = ["Efe", "Chris", "Caleb", "Smith", "Tolu"]




function first(){
    const random = Math.floor(Math.random()*firstName.length)
    let name1 = firstName[random]

    const random2 = Math.floor(Math.random()*lastName.length)
    let name2 = lastName[random2]

   



   return[name1 +" "+name2]
}

function namebtn(){
    const randomName = first()
    fullName.innerHTML = randomName
}