// fetch
fetch('data.json')
.then( (response) => {
    if( response.status != 200 )
        throw "HTTP status code != 200"

    return response.json();
})
.then( (text) => {
    console.log(text);
})
.catch( (err) => {
    alert('ERROR: ' + err);
})