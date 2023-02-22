
class Pagination{
    constructor(maxPageCnt,pagePerCnt,currentPage){
        this.maxPageCnt = maxPageCnt
        this.pagePerCnt = pagePerCnt
        this.currentPage = currentPage
    }
    setPagenationBtns = (maxPageCnt,pagePerCnt,currentPage) => {
        let pageWrap = document.querySelector('#pagination')
        pageWrap.innerHTML = ``
        for(let i = 0; i< maxPageCnt / pagePerCnt; i++){
            const newBtn = document.createElement('button')
            newBtn.setAttribute('data-page',i+1)
            newBtn.innerText = i + 1
            pageWrap.appendChild(newBtn)
            
        }

        const btns = document.querySelectorAll('#pagination button')
        btns.forEach(each => {
            each.addEventListener('click',(e)=>{
                this.paginationBtnsClicked(e)
            })
        })
    }
    
    paginationBtnsClicked = (e) => {
        const updatedCurrentPage = e.target.getAttribute('data-page')
        this.paginationBtnsStyle(updatedCurrentPage)
        drawTable(updatedCurrentPage)
    }
    
    paginationBtnsStyle = (updatedCurrentPage) => {
        const btns = document.querySelectorAll('#pagination button')
        btns.forEach(each => {
            if(each.getAttribute('data-page') === String(updatedCurrentPage)){
                each.classList.add('active')
            }else{
                each.classList.remove('active')
            }
        })
    }
}