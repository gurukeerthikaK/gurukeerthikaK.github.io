const APIURL = "https://api.github.com/users/";
const search = document.getElementById("search");
const form = document.getElementById("forms");
const main = document.getElementById("main");

async function get_user_details(username){
    const data = await fetch(APIURL + username);
    const waiting_data = await data.json();
    console.log(waiting_data);

    const data_into_html = `
    <p>Name:${waiting_data.name}
    <p>Login:${waiting_data.login}
    <p>Id:${waiting_data.id}
    <p>Public_repos:${waiting_data.public_repos}
    <p>Followers:${waiting_data.followers}
    <p>Following:${waiting_data.following}
    <p>Id:${waiting_data.id}
    <p>Created at: ${waiting_data.created_at}</p>
    `;
    main.innerHTML = data_into_html;}

    document.getElementById("forms").addEventListener('submit',load)
        function load(e){
        e.preventDefault();
        const user_name_value =search.value;
        if(user_name_value){
            get_user_details(user_name_value);
            search.value = ""


        }
    }


