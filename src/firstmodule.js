
let firstModule = (() => {
    function first () {

        let content = document.querySelector("#content")

        let header = document.createElement("header")
        content.append(header)

        let h3 = document.createElement("h3")
        header.append(h3)
        h3.classList.add("headline")
        h3.textContent = "Some Restaurant Name"

        let main = document.createElement("main")
        content.append(main)

        let copy = document.createElement("div")
        copy.classList.add("copy")
        main.append(copy)

        let copyPara = document.createElement("p")
        copy.append(copyPara)
        copyPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis consequuntur eveniet vel cumque doloribus nemo quaerat facilis fugit natus, neque ea commodi a, distinctio blanditiis nobis, cupiditate reiciendis enim?"
        copyPara.classList.add("copy-para")

        let divImage = document.createElement("div")
        main.append(divImage)
        divImage.classList.add("image")

        let image = document.createElement("img")
        divImage.append(image)
        image.src= "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"


    }
    return {first}
})()




export default firstModule

/*
    <header>
        <h3 class="headline">Some Restaurant Name</h3>
    </header>
    <main>
        <div class="copy">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis consequuntur eveniet vel cumque doloribus nemo quaerat facilis fugit natus, neque ea commodi a, distinctio blanditiis nobis, cupiditate reiciendis enim?</p>
        </div>

        <div class="image"> 
        <img src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg" alt="" srcset="">
        </div>   
    </main>
    <footer>

    </footer>
    */

    