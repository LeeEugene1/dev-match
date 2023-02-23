import Table from "./src/Table.js"

class Pagination{
    constructor(data){
        this.data = data
        this.render();
    }
    setPaginationBtns = (maxPageCnt,pagePerCnt,currentPage) => {
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
                this.paginationBtnClicked(maxPageCnt,pagePerCnt,currentPage)
            })
        })
    }
    
    paginationBtnClicked = (maxPageCnt,pagePerCnt,currentPage) => {
        let start//data's first index
        let end//data's last index
        // 1번클릭시 데이터 0,4인덱스 목록표시
        // 2번클릭시 데이터 5,9인덱스
        // const updatedCurrentPage = e.target.getAttribute('data-page')
        // this.paginationBtnsStyle(updatedCurrentPage)

        //데잍터가공?
        // new Table(this.data)
        // new Pagination(this.data)
        paginationBtnStyle(maxPageCnt,currentPage)
    }
    
    paginationBtnStyle = (maxPageCnt,currentPage) => {
        const btns = document.querySelectorAll('#pagination button')
        btns.forEach(each => {
            if(each.getAttribute('data-page') === String(currentPage)){
                each.classList.add('active')
            }else{
                each.classList.remove('active')
            }
        })
    }
    
    render(){
        let currentPage = 1
        let pagePerCnt = 5
        let maxPageCnt = this.data.length
        this.setPaginationBtns(maxPageCnt,pagePerCnt,currentPage)
    }
}

export default Pagination