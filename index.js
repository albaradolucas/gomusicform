const pass_field = document.querySelector('.pass-key')
const showBtn = document.querySelector('.show')
const username = document.getElementById('username')
const register = document.getElementById('register')

showBtn.addEventListener('click', function () {
  if (pass_field.type === 'password') {
    pass_field.type = 'text'
    showBtn.textContent = 'HIDE'
    showBtn.style.color = '#736CED'
  } else {
    pass_field.type = 'password'
    showBtn.textContent = 'SHOW'
    showBtn.style.color = '#222'
  }
})

let valor = ''

username.addEventListener('input', (e) => {
  valor = e.target.value
})

register.addEventListener('click', (e) => {
  localStorage.setItem('username', valor)
})
