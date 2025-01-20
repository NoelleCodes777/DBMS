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



       /*
      const tb = document.querySelector('tbody')
      const form = document.querySelector('form')
      const programSelect = document.getElementById('programs')
      const previous = document.querySelector('.previous')
      const Next = document.querySelector('.Next')

      function createEl(arg) {
          return document.createElement(arg)
      }

      async function fetchStudents() {
          try {
              const body = await fetch("https://dbms-dxyg.onrender.com/students")
              const data = await body.json()
              console.log(data)
              data.map(x => {
                  const newDate = new Date(x.dob)
                  const date = new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: "numeric",
                      day: "numeric"
                  }).format(newDate)

                  const row = createEl('tr')
                  const fName = createEl('td')
                  const lName = createEl('td')
                  const dob = createEl('td')
                  const program = createEl('td')
                  const year = createEl('td')
                  const action = createEl('td')

                  fName.innerText = x.fName
                  lName.innerText = x.lName
                  dob.innerText = date
                  program.innerText = x.program
                  year.innerText = x.year
                  action.innerHTML = `<a class="action" href="update.html?id=${x._id}">View more</a>`

                  row.appendChild(fName)
                  row.appendChild(lName)
                  row.appendChild(dob)
                  row.appendChild(program)
                  row.appendChild(year)
                  row.appendChild(action)
                  tb.appendChild(row)
              })
          } catch (err) {
              console.log(err)
          }
      }

      fetchStudents()

      form.addEventListener('submit', async e => {
          e.preventDefault()

          try {
              const formData = new FormData(e.target)
              const data = JSON.stringify(Object.fromEntries(formData))
              console.log(data)
              const res = await fetch("https://dbms-dxyg.onrender.com/students", {
                  method: "POST",
                  headers: {
                      'Content-Type': "application/json"
                  },
                  body: data
              })

              const dt = await res.json()

              window.location.reload();

          } catch (err) {
              console.log(err)
          }
      })



     async  function filterStudentsByProgram() {

        const selectedProgram = programSelect.value;
         
        const filteredStudents = students.filter(student => student.program === selectedProgram);

        fetchStudents(filteredStudents);

     }


        programSelect.addEventListener('change', filterStudentsByProgram);
    */


