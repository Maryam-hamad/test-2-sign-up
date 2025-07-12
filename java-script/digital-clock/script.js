const hourContainer= document.getElementById('hour')
const minutesContainer= document.getElementById('minutes')
const secondsContainer= document.getElementById('seconds')
const hourDisplay= document.querySelector('.clock')
const colors = ['midnightblue', 'teal', 'darkgreen', 'crimson', 'purple', 'orange', 'black'];


const now =new Date();
const hour=now.getHours();
const minutes = now.getMinutes();  
const seconds = now.getSeconds(); 

function updateClock(){
  const now= new Date()
  const hour=now.getHours().toString().padStart(2,'0')
  const minutes=now.getMinutes().toString().padStart(2,'0')
  const seconds=now.getSeconds().toString().padStart(2,'0')


  hourContainer.textContent=hour;
  minutesContainer.textContent=minutes;
  secondsContainer.textContent=seconds;

  // const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // hourDisplay.style.backgroundColor = randomColor;
}

// //  Call it once to show time immediately
// updateClock();


// Call it again every second
setInterval(updateClock, 1000);
