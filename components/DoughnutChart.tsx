"use client"
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1000, 2000, 3250],
                backgroundColor: ['#0747b6','#2265d8','#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut data={data} options={{
        plugins: {
            legend: {
                display: false
            }
        }
    }}/>
}

export default DoughnutChart
