import ContentTitle from "./components/ContentTitle.js"

class Homepage{
    constructor($main){
       this.$main = $main
    }
    render(){
        const title = new ContentTitle(this.$main, 'Home')
        title.render()
    }
}
export default Homepage