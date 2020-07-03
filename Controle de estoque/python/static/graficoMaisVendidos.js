
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',

    //Define os dados do chart
    data: {
        labels: ['Argila Vermelha', 'Purificante Natural', 'Calêndula', 'Bambu', 'Mel', 'Lama Negra', 'Herbia'],
        
        
        datasets: [{
            label: 'Gráfico de produtos mais vendidos',
            
            backgroundColor: ['green', 'blue', 'yellow','red','pink','black','white'],
            borderColor: 'rgb(255, 99, 132)', //Define as cores das bordas 

            //DADOS QUE IRÁ  INTEGRAR COM O JINJA 2
            data: [50, 10, 5, 30, 45, 67, 190]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


