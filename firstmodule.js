let content = document.querySelector("#content")

let firstModule = (() => {
    function first () {
        let header = document.createElement("header")
        content.append(header)

        let h3 = document.createElement("header")
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

        

    }
    return first
})()

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

    