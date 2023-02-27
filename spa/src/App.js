class App {
    constructor($app){
        this.$app = $app
        this.render()
    }
    async render(){
        // try {
        //     const res = await fetch('./src/data.json')
        //     if(res.ok){//status 200
        //         let data = await res.json()
        //         new Table(data)
        //         new Pagination(data)
        //     }else{//404
        //         alert('Something went wrong.')
        //     }
        // } catch (error) {//500~
        //     alert('Something went wrong. Please try again.')
        //     console.log(error)
        // }
    }
}
export default App