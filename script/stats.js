let barCtx = document.getElementById('barChartCanvas').getContext('2d');

let barChart = new Chart(barCtx, {
    type:'bar',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label:'Incidents',
            data:[0, 4, 3, 1, 4, 0, 0, 1, 2, 3, 1, 4],
            backgroundColor:'#3B82F6'
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            x:{
                ticks:{
                    color:'white',
                    font:{
                        size:18
                    }
                },
            },
            y:{
                ticks:{
                    color:'white',
                    font:{
                        size:18
                    }
                }
            },
        },
        plugins:{
                legend:{
                    labels:{
                        color:'white',
                        font:{
                            size:18
                        },
                    }
                }
            }
    }
});

let pieCtx = document.getElementById('pieChartCanvas').getContext('2d');

let pieChart = new Chart(pieCtx, {
    type:'pie',
    data: {
        labels: ['Building Fire', 'Vehicle Accident', 'Gas Leak', 'Medical Emergency'],
        datasets: [{
            label: 'Incident types',
            data:[
                11,
                3,
                7,
                2
                ],
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                legend:{
                    position: 'bottom',
                    labels:{
                        color:'white',
                        font:{
                            size:18
                        },
                        padding:25
                    }
                }
            }
        }
});

let barCtx1 = document.getElementById('teamChartCanvas').getContext('2d');

let barChart1 = new Chart(barCtx1, {
    type:'bar',
    data:{
        labels:['Alpha Team', 'Bravo Team', 'Charlie Team', 'Delta Team'],
        datasets:[{
            label:'Incidents handled',
            data:[6, 3, 2, 6],
            backgroundColor:'#10B981'
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            x:{
                ticks:{
                    color:'white',
                    font:{
                        size:18
                    }
                },
            },
            y:{
                ticks:{
                    color:'white',
                    font:{
                        size:18
                    }
                }
            },
        },
        plugins:{
                legend:{
                    labels:{
                        color:'white',
                        font:{
                            size:18
                        },
                    }
                }
            }
    }
});