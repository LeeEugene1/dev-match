class Table{
    constructor(data){
        this.data = data
        this.render(data)
        console.log(data)
    }
    displayTableHead = () => {
        const thead = document.createElement('thead')
        const theadTr = document.createElement('tr')
        for(let i=0; i<Object.keys(this.data[0]).length; i++){
            const th = document.createElement('th')
            th.innerText = Object.keys(this.data[0])[i]
            theadTr.appendChild(th)
        }

        thead.appendChild(theadTr)

        return thead
    }
    displayTableData = (data) => {
        const tbody = document.createElement('tbody')
        
        for(let i = 0; i<data.length; i++){
            const newTr = document.createElement('tr')
            const {name, title, email, role} = data[i]
            newTr.innerHTML = `
                <td>${name}</td>
                <td>${title}</td>
                <td>${email}</td>
                <td>${role}</td>
            `
            tbody.appendChild(newTr)
        }

        return tbody
    }
    render(data){
        const table = document.createElement('table')
        const thead = this.displayTableHead()
        const tbody = this.displayTableData(data)
        table.appendChild(thead)
        table.appendChild(tbody)
        document.getElementById('table').innerHTML = ''
        document.getElementById('table').appendChild(table)
    }
}
export default Table