// import Pagination from "./Pagenation"

window.addEventListener('load',()=>{
    drawTable()
})
const drawTable = (currentPage=1) => {
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
        const min = (currentPage * per) - per//6,7,8,9,10
        const max = currentPage * per//10
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
        return {data,currentPage,per}
    })
    .then(({data,currentPage,per}) => {
        let maxPageCnt = data.length//25
        // let per = 5//optionChecked 5
        const newPage = new Pagination()
        newPage.render(maxPageCnt,per,currentPage)
        newPage.paginationBtnsStyle(currentPage)
        //drawPagination(data, page)
    })
}
