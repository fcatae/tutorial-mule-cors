function updateResponse(textResponse) {
    textResponse.innerText = 1;

    getRemoteData('data.json')
    .then( res => {
        var title = res.glossary?.title;
        textResponse.innerText = title
    })
    .catch( err => { alert('ERROR: ' + err); });
}

async function getRemoteData(url) {
    var response = await fetch(url);

    if( response.status != 200 )
        throw "HTTP status code != 200"

    return await response.json();
}

