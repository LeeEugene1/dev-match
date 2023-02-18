window.addEventListener('load',()=>{
    drawTable()
})
const drawTable = (page=1) => {
    const perOption = document.querySelector('#per')
    // const getPer = 
    const perIdx = perOption.options.selectedIndex
    const per = perOption.options[perIdx].value
    console.log(per)
    fetch('./src/data.json')
    .then(data => data.json())
    .then(data => {
        const tableContent = document.querySelector('#table tbody')
        tableContent.innerHTML = ``
        const min = (page * per) - per//6,7,8,9,10
        const max = page * per//10
        for(let i=min; i<max; i++){
            const {name, title, email, role} = data[i]
            const newTr = document.createElement('tr')
            newTr.innerHTML = `
                <td>${name}</td>
                <td>${title}</td>
                <td>${email}</td>
                <td>${role}</td>
            `
            tableContent.appendChild(newTr)
        }
        return {data,page}
    })
    .then(({data,page}) => {
        drawPagination(data, page)
    })
}

const drawPagination = (data, page=1) => {
    pageWrap = document.querySelector('#pagination')
    pageWrap.innerHTML = ``
    for(let i = 0; i<data.length / 5; i++){
        const newBtn = document.createElement('button')
        newBtn.setAttribute('data-page',i+1)
        if(page === i+1){
            newBtn.style.color = 'red'
        }
        newBtn.innerText = i + 1
        pageWrap.appendChild(newBtn)
    }

    const btns = document.querySelectorAll('#pagination button')
    btns.forEach(each => {
        each.addEventListener('click',()=>{
            const page = each.getAttribute('data-page')
            drawTable(page,5)
        })
    })
}