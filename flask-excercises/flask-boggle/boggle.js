let form = document.querySelector('form')
let input = document.querySelector('input');
let btn = document.querySelector('button')

const guess = input.value

btn.addEventListener('click', sendData);
form.addEventListener('submit', checkGuess);

headers={
  'Content-type':'application/json', 
  'Accept':'application/json'
}

async function sendData(event){
  event.preventDefault();
  res = await axios.post('http://127.0.0.1:5000/', guess, {
    headers: {
      'Content-type':'application/json', 
      'Accept':'application/json'
    }
  })
  console.log(JSON.stringify(input.value));
  console.log(res);
  return checkGuess();
}

function checkGuess(){
  try {
  res = axios.get('http://127.0.0.1:5000/check-guess',{ params: { word: word }});
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.data.title); // your title
    console.log(error.response.status);
    console.log(error.response.headers);
  }
  console.log(res);
}