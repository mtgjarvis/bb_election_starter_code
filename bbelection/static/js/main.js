
document.addEventListener("DOMContentLoaded", function() {
    const candidates = document.querySelector('.candidates');
    let candidatesRequest = axios.get('https://bb-election-api.herokuapp.com/');
    candidatesRequest.then(function(response){
        for (let i = 0; i < response.data['candidates'].length; i++){
            console.log(response.data['candidates'][i]);
            let candidate = response.data['candidates'][i];
            let candidateEntry = document.createElement('li');
            candidateEntry.innerHTML = `${candidate['name']} - ${candidate['votes']} Votes`;
            candidates.appendChild(candidateEntry)

            const voteForm = document.createElement('form')
            voteForm.method = 'POST'
            voteForm.action = `https://bb-election-api.herokuapp.com/vote?id=${candidatesRequest.id}`
            voteForm.setAttribute('name', 'id')
        
            const voteButton = document.createElement('button')
            voteButton.type = 'submit'
            voteButton.value = 'Vote'
            voteButton.textContent = "VOTE"
        
            voteForm.appendChild(voteButton)
            candidates.appendChild(voteForm)
        
            voteButton.addEventListener('click', (e) => {
                e.preventDefault()
                let vote = axios.post(`https://bb-election-api.herokuapp.com/vote?id=${candidatesRequest.id}`)
                .then(function(response) {
                    console.log('___Voted')
                });
            });
        };
    })
 
});