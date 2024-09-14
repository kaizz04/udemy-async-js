const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;

setTimeout(()=>{console.log('time out complete')},2000);


for(let i=0;i< 100000000;i++){
  result+=i;

}
console.log(result);
