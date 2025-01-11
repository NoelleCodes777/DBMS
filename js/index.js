google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Impact' ],
          ['2014',  500   ],
          ['2015',  1000   ],
          ['2016',  1000    ],
          ['2017',  800   ],
          ['2018',  1500   ],
          ['2019',  1500    ],
          ['2020',  2000   ],
          ['2021',  1500   ],
          ['2022',  2500    ],
          ['2023',  1000   ],
          ['2024',  4000   ]
          
        ]);

        var options = {
          title: 'No. of Students Impact by year',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},

          vAxis: {title: 'No. of students', minValue: 1000}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

 
      // Students

     
         

  // UPDATE AND DELETE



       