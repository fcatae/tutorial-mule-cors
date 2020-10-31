function updateResponse(uri, textResponse) {
    textResponse.innerText = "(calling the function)";

    getRemoteData(uri)
    .then( res => {
        var title = res.glossary?.title;
        textResponse.innerText = title
    })
    .catch( err => { 
        textResponse.innerText = ('ERROR: ' + err); 
    });
}

async function getRemoteData(url) {
    var response = await fetch(url);

    if( response.status != 200 )
        throw "HTTP status code != 200"

    return await response.json();
}

