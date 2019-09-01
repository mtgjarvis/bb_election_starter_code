
document.addEventListener("DOMContentLoaded", function() {
    const candidates = document.querySelector('.candidates');
    const candidatesRequest = axios.get('https://bb-election-api.herokuapp.com/');
    candidatesRequest.then(function(response){
        for (let i = 0; i < response.data['candidates'].length; i++){
            console.log(response.data['candidates'][i]);
            let candidate = response.data['candidates'][i];
            let candidateEntry = document.createElement('li');
            candidateEntry.innerHTML = `${candidate['name']} - ${candidate['votes']} Votes`;
            candidates.appendChild(candidateEntry)
        };
    })
});