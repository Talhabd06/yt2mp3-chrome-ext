chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url
    const input = document.getElementById('input')

    input.value = url;
   
    console.log(url)
})
const btn = document.getElementById('convert')

btn.addEventListener('click', () =>{
 const download = document.getElementById('file')
 const stutus = document.querySelector('.stutus')

 stutus.style.display="flex"
  

 setTimeout( () =>{
    stutus.style.display="none"
    download.classList.add('display');
}, 5000);

});

document.getElementsByTagName("BODY")[0].onclick = function(e) {
  e = e || event      
  var target = e.target || e.srcElement    
  if (target.nodeName != 'A') return        
  var href = target.href    
  chrome.tabs.create({url: href});
  return false;   
}

