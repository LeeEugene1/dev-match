class Header{
    constructor($header){
        this.$header = $header
        this.render()

    }
    render(){
        this.$header.innerHTML = `
            <div class="header header_left">
                <span class="menu_name" id="menu_home">HOME</span>
            </div>
            <div class="header header_right">
                <span class="menu_name" id="menu_signup">SIGNUP</span>
            </div>
        `
        //click home
        const home = document.querySelector('#menu_home')
        home.addEventListener('click',()=>{
            window.history.pushState('','','/web/')
            const urlChange = new CustomEvent('urlchange',{
                detail:{href:'/web/'}
            })
            document.dispatchEvent(urlChange)
        })
        //click signup
        const signup = document.querySelector('#menu_signup')
        signup.addEventListener('click',()=>{
            window.history.pushState('','','/web/signup')
            const urlChange = new CustomEvent('urlchange',{
                detail:{href:'/web/signup'}
            })
            document.dispatchEvent(urlChange)
        })
    }
}
export default Header