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
        document.addEventListener('urlchange',(e)=>{
            let pathName = e.detail.href
            switch(pathName){
                case '/web/':
                    console.log('hp')
                    Homepage.render()
                    break
                case '/web/signup':
                    console.log('si')
                    SignupPage.render()
                    break
                default:
            }
        })

        
    }
}
export default App