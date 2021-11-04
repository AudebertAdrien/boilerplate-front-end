import { Doughnut } from 'react-chartjs-2';

import db from './dataset.json';

function Revenue() {
  const getDate = Object.keys(db.data).map((date) => date);
  getDate.pop();

  const getData = (brand) => {
    const data = [];
    for (let i = 0; i < getDate.length; i++) {
      data.push(db.data[getDate[i]][brand].daily_revenue);
    }
    return data;
  };

  return (
    <div>
      <Doughnut
        data={{
          labels: getDate,
          datasets: [
            {
              label: 'Facebook',
              data: getData('Facebook'),
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
            {
              label: 'GoogleAds',
              data: getData('GoogleAds'),
              backgroundColor: ['rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(54, 162, 235, 1)'],
              borderWidth: 1,
            },
            {
              label: 'Applovin',
              data: getData('Applovin'),
              backgroundColor: ['rgba(255, 206, 86, 0.2)'],
              borderColor: ['rgba(255, 206, 86, 1)'],
              borderWidth: 1,
            },
            {
              label: 'total',
              data: getData('total'),
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 15,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Revenue;
