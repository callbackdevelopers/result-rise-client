import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useFirebase } from "../../context/UserContext";

import { useRouter } from "next/router";



const ResultChart = () => {


  const data = {
    labels: [ 'bangla', 'english', 'math', 'physics', 'chemestry', 'biology'
    
  ],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }



  return (
    <div>
      <Bar height={400}
       width={600}
        data={data}
        options={{
            maintainAspectRatio: false
          }}
      />
    </div>
  );
};
export default ResultChart;
