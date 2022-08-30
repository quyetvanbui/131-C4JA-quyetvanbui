function shoWClicked () {
    alert('Click')
}

function changeText () {
    const p = document.getElementsByTagName('p')[0];
    p.innerHTML ='I changed this text to something';
    p.style.color ='red';
}