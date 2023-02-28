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
    }
}
export default Header