class ContentTitle{
    constructor($main, $title){
        this.$main = $main
        this.$title = $title
    }
    render(){
        // const div = document.createElement('div')
        // div.setAttribute('class','content_title')

        // const h1 = document.createElement('h1')
        // h1.innerText=this.$title

        // div.appendChild(h1)
        // this.$main.appendChild(div)
        this.$main.innerHTML = `
            <div class="content_title">
                <h1>${this.$title}</h1>
            </div>
        `

    }
}
export default ContentTitle