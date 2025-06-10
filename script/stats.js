let charts = [];

function initCharts() {
    const isLight = document.body.classList.contains('lightmode');

    const barCtx = document.getElementById('barChartCanvas').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Incidents',
                data: [0, 4, 3, 1, 4, 0, 0, 1, 2, 3, 1, 4],
                backgroundColor: '#3B82F6'
            }]
        },
        options: getChartOptions('Incidents')
    });
    charts.push(barChart);

    const pieCtx = document.getElementById('pieChartCanvas').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Building Fire', 'Vehicle Accident', 'Gas Leak', 'Medical Emergency'],
            datasets: [{
                label: 'Incident types',
                data: [11, 3, 7, 2],
                backgroundColor: [
                    '#3B82F6', 
                    '#10B981', 
                    '#F59E0B', 
                    '#EF4444'
                ],
                borderColor: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                borderWidth: 1
            }]
        },
        options: getChartOptions('Incident types', true)
    });
    charts.push(pieChart);

    const teamCtx = document.getElementById('teamChartCanvas').getContext('2d');
    const teamChart = new Chart(teamCtx, {
        type: 'bar',
        data: {
            labels: ['Alpha Team', 'Bravo Team', 'Charlie Team', 'Delta Team'],
            datasets: [{
                label: 'Incidents handled',
                data: [6, 3, 2, 6],
                backgroundColor: '#10B981'
            }]
        },
        options: getChartOptions('Incidents handled')
    });
    charts.push(teamChart);
}

function getChartOptions(title, isPie = false) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        scales: isPie ? {} : {
            x: {
                ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-clr') },
                grid: { color: 'transparent' }
            },
            y: {
                ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-clr') },
                grid: { color: getComputedStyle(document.documentElement).getPropertyValue('--chart-grid') }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-clr'),
                    font: { size: 14 }
                },
                position: isPie ? 'bottom' : 'top'
            },
            title: {
                display: !!title,
                text: title,
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-clr'),
                font: { size: 16 }
            }
        }
    };
}

document.addEventListener('DOMContentLoaded', initCharts);
