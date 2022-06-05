document.getElementById('nostalgia').onclick = nostalgiaultra
document.getElementById('orange').onclick = channelorange
document.getElementById('blond').onclick = blond
// document.getElementById('novacane').onclick = novacane
// document.getElementById('pyramid').onclick = pyramid
// document.getElementById('nike').onclick = nike


function nostalgiaultra() {
  document.querySelector('body').style.backgroundImage = 'url(file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/nubackground.jpeg)'
  document.querySelector('body').style.color = 'white'
  novacane.play('file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/Frank_Ocean_Novacane.mp3')
}

function channelorange() {
    document.querySelector('body').style.backgroundImage = 'url(file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/cobackground.jpeg'
    document.querySelector('body').style.color = 'white'
    pyramid.play('file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/Frank_Ocean_Pyramid.mp3')
}

function blond() {
  document.querySelector('body').style.backgroundImage = 'url(file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/frankocean.0.0.webp)'
  document.querySelector('body').style.color = 'white'
  nike.play('file:///Users/mohamed/Desktop/WEBDEV/HOMEWORK/class12-homework/fo/Frank_Ocean_Nike.mp3')
}
