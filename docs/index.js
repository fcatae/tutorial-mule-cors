function updateResponse(uri, func, textResponse) {
    textResponse.innerText = "(calling the function)";

    func(uri)
    .then( res => {
        var title = res.glossary?.title;
        textResponse.innerText = JSON.stringify(res);
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

async function getRemoteDataWithHeaders(url) {
    var response = await fetch(url, {
            headers: [ ['Authorization', 'Bearer ABC'] ]
        });

    if( response.status != 200 )
        throw "HTTP status code != 200"

    return await response.json();
}
