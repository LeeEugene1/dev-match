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

        const homepage = new Homepage(main)
        const signup = new SignupPage(main)

        homepage.render()

        document.addEventListener('urlchange',(e)=>{
            let pathName = e.detail.href
            switch(pathName){
                case '/web/':
                    homepage.render()
                    break
                case '/web/signup':
                    signup.render()
                    break
            }
        })

        
    }
}
export default App