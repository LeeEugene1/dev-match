import Header from "./components/Header.js"
import Homepage from "./Homepage.js"
import SignupPage from './SignupPage.js'

class App{
    constructor($body){
        this.$body = $body
        this.render()
    }
    render(){
        new Header(this.$body)
        const main = document.createElement('main')
        main.setAttribute('id', 'content_page')
        this.$body.appendChild(main)
        new SignupPage(main)
        new Homepage(main)
    }
}
export default App