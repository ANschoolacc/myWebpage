document.getElementById('contactbtn').addEventListener ('click', () => {
  document.getElementById('contactinfo').hidden = false;
  document.getElementById('welcome').hidden = true;
  document.getElementById('aboutme').hidden = true;
  document.getElementById('myprojects').hidden = true;
  document.getElementById('work').hidden = true;
} )

document.getElementById('aboutbtn').addEventListener ('click', () => {
  document.getElementById('aboutme').hidden = false;
  document.getElementById('welcome').hidden = true;
  document.getElementById('contactinfo').hidden = true;
  document.getElementById('myprojects').hidden = true;
  document.getElementById('work').hidden = true;
} )

document.getElementById('projectbtn').addEventListener ('click', () => {
  document.getElementById('myprojects').hidden = false;
  document.getElementById('welcome').hidden = true;
  document.getElementById('aboutme').hidden = true;
  document.getElementById('contactinfo').hidden = true;
  document.getElementById('work').hidden = true;
} )

document.getElementById('workbtn').addEventListener ('click', () => {
  document.getElementById('work').hidden = false;
  document.getElementById('welcome').hidden = true;
  document.getElementById('aboutme').hidden = true;
  document.getElementById('contactinfo').hidden = true;
  document.getElementById('myprojects').hidden = true;
} )
