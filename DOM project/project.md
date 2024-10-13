Project Related to DOM

## project 1
<!-- [click me]() -->
```javascript

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach((button)=>{
  // console.log(button);
  button.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // if(e.target.id==='grey'){
    //   body.style.backgroundColor=e.target.id;
    // }else if(e.target.id==='white'){
    //   body.style.backgroundColor=e.target.id;
    // }if(e.target.id==='blue'){
    //   body.style.backgroundColor=e.target.id;
    // }if(e.target.id==='yellow'){
    //   body.style.backgroundColor=e.target.id;
    // }
    body.style.backgroundColor=e.target.id;
  })
})
```

Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} : Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi} : Normal Range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} : Overweight</span>`;
    }
  }
});


```