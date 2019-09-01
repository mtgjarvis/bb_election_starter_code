document.addEventListener("DOMContentLoaded", function() {
    const getRoot = document.querySelector('.get_root');

    getRoot.addEventListener('click', () => {
        axios.get('https://bb-election-api.herokuapp.com/').then(function(response) {
            console.log("works")
        });
    })

});
