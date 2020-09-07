const pollData = [
    {
        options: "Eastern Cape",
        votes: 11,
        color: "rgb(255, 99, 132)"
    },
    {
        options: "Free State",
        votes: 8,
        color: "rgb(54, 162, 235)"
    },
    {
        options: "Gauteng",
        votes: 11,
        color: "rgb(36, 36, 36)"
    },
    {
        options: "KwaZulu-Natal",
        votes: 5,
        color: "rgb(255, 159, 64)"
    },
    {
        options: "Limpopo",
        votes: 3,
        color: "rgb(75, 192, 192)"
    },
    {
        options: "Mpumalanga",
        votes: 8,
        color: "rgb(255, 206, 86)"
    },
    {
        options: "Northern Cape",
        votes: 10,
        color: "rgb(153, 102, 255)"
        
    },

    //

    {
        options: "North West",
        votes: 10,
        color: "rgb(153, 102, 255)"
        
    },
    {
        options: "Western Cape",
        votes: 10,
        color: "rgb(153, 102, 255)"
        
    },
    {
        options: "Northern Cape",
        votes: 10,
        color: "rgb(153, 102, 255)"
        
    },
    {
        options: "Northern Cape",
        votes: 10,
        color: "rgb(153, 102, 255)"
        
    },
];

const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: pollData.map(pollOption => pollOption.options),
        datasets: [{
            label: '# of Votes',
            data: pollData.map(pollOption => pollOption.votes),
            backgroundColor: pollData.map(pollOption => pollOption.color),
            //borderColor: [
            //    'rgba(255, 99, 132, 1)',
            //    'rgba(54, 162, 235, 1)',
            //    'rgba(255, 206, 86, 1)',
            //    'rgba(75, 192, 192, 1)',
            //    'rgba(153, 102, 255, 1)',
            //    'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 3
            // hoverBackgroundColor: "#000"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display:true,
            text:'Poll Results',
            fontColor: "#333",
            fontSize: 20,
            padding: 20
        },
        legend: {
            display: false
        }
    }
});