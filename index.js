
function submitData(name, email){
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
    name, email}),
};
return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object.id);
        document.body.append(object.id);
    })
    .catch(function (error){
        // alert('Unauthorized Access');
        console.log("TESTING", error.message);
        document.body.innerHTML = 'Unauthorized Access'
    });
};