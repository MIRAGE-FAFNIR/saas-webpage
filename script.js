function setBilling(type, btn) {
  document.querySelectorAll('.toggle button')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (type === 'annual') {
    document.getElementById('starter').innerHTML = "$37 <span>/ month</span>";
    document.getElementById('pro').innerHTML = "$108 <span>/ month</span>";
    document.getElementById('premium').innerHTML = "$255 <span>/ month</span>";
  } else {
    document.getElementById('starter').innerHTML = "$47 <span>/ month</span>";
    document.getElementById('pro').innerHTML = "$135 <span>/ month</span>";
    document.getElementById('premium').innerHTML = "$319 <span>/ month</span>";
  }
}
