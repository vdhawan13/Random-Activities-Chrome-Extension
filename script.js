
fetch('https://www.boredapi.com/api/activity')
    .then(a => a.json())
    .then(NewsData => {
        const NewsText = "Activity:- "+NewsData.activity+"<br>"+"\nType of activity:- "+ NewsData.type+"<br>"+"\nParticipants:- "+ NewsData.participants;
        const NewsElement = document.getElementById('NewsElement');

        NewsElement.innerHTML = NewsText;
    })
