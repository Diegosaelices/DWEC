const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();


    let tableBody = ``;
    users.forEach((user, index) => {


        tableBody += `
        <tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'><button onclick="mostrarInfo(); listInfo(${user.id});" style="text-decoration: underline; background-color: white; border: none">${user.username}</button></td>
        <td class='centered'>${user.email}</td>
        <td class='centered'><button onclick="mostrarUserInfo(); listUserPost(${user.id});" style="text-decoration: underline; background-color: white; border: none">Mostrar POST</button></td>
        </tr>`;


    });


    document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});




async function listInfo(id) {

return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((response) => response.json())
.then((users) => {
let tableBody = `
    <td style= "text-align: center">${users.id}</td>
    <td style= "text-align: center">${users.name}</td>
    <td style= "text-align: center">${users.username}</td>
    <td style= "text-align: center">${users.email}</td>
    <td style= "text-align: center">${users.address.street}</td>
    <td style= "text-align: center">${users.phone}</td>
    <td style= "text-align: center">${users.website}</td>
    <td style= "text-align: center">$${users.company.name}</td>
    `;

document.getElementById("tableBody_Info").innerHTML = tableBody;
tableBody_Info.innerHTML = tableBody;
})
}

window.addEventListener("load", function () {
    listInfo();
});


const listPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await response.json();


    let tableBody = ``;


    post.forEach((user, index) => {
        if(user.id <= 5){
            

        tableBody += `<tr>
        <td class='centered'><button onclick="mostrarInfo()" listInfo(${user.id}); style="text-decoration: underline; background-color: white; border: none">${user.userId}</button></td>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.title}</td>
        <td class='centered'>${user.body}</td>
        </tr>`;
           
        } else {
            tableBody += ``
        }

        


    });


    document.getElementById("tableBody_POST").innerHTML = tableBody;
    tableBody_POST.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listPost();
});




async function listUserPost(userId) {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((response) => response.json())
        .then((users) => {
        let tableBody = `
        <td style= "text-align: center">${users.userId}</td>
        <td style= "text-align: center">${users.id}</td>
        <td style= "text-align: center">${users.title}</td>
        <td style= "text-align: center">${users.body}</td>
            `;

        


        document.getElementById("tableBody_UserPost").innerHTML = tableBody;
        tableBody_UserPost.innerHTML = tableBody;
        })
    }
        
        window.addEventListener("load", function () {
            listInfo();
        });     





function mostrarUser(){
document.getElementById("mostrar").style.display = "block";
document.getElementById("mostrar1").style.display = "none"
document.getElementById("mostrar2").style.display = "none"
document.getElementById("mostrar3").style.display = "none"
}

function mostrarPOST(){
document.getElementById("mostrar1").style.display = "block";
document.getElementById("mostrar2").style.display = "none"
document.getElementById("mostrar").style.display = "none"
document.getElementById("mostrar3").style.display = "none"
}

function mostrarInfo(){
document.getElementById("mostrar2").style.display = "block"
document.getElementById("mostrar").style.display = "none"
document.getElementById("mostrar1").style.display = "none"
document.getElementById("mostrar3").style.display = "none"

}

function mostrarUserInfo(){
document.getElementById("mostrar3").style.display = "block"
document.getElementById("mostrar2").style.display = "none"
document.getElementById("mostrar").style.display = "none"
document.getElementById("mostrar1").style.display = "none"
}