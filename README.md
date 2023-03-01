Header.js
```javascript
  home.addEventListener('click',()=>{
      window.history.pushState('','','/web/')
  })
  const urlChange = new CustomEvent('urlchange',{
    detail:{href:'/web/'}
  })
  document.dispatchEvent(urlChange)
```

App.js
```javascript
  window.addEventListener('urlchange',(e)=>{
    console.log(e.detail.href)//'/web/'
  })
```