let menu = (() => {
    function generateMenu(){
        let content = document.querySelector("#content")

        let menu = document.createElement("div")
        menu.classList.add("menu")
        content.append(menu)
        
        let menuWrapper = document.createElement("div")
        menu.append(menuWrapper)
        menuWrapper.classList.add("wrapper")

        /// item 1
        let menuItem1 = document.createElement("div")
        menuWrapper.append(menuItem1)
        menuItem1.classList.add("menu-item")

        let menuImageWrapper = document.createElement("div")
        menuItem1.append(menuImageWrapper)
        menuImageWrapper.classList.add("menu-image")

        let menuImage1 = document.createElement("img")
        menuImage1.src = "https://cdn.pixabay.com/photo/2020/04/17/08/23/eat-5053825_960_720.jpg"
        menuImageWrapper.append(menuImage1)

        let menuText1 = document.createElement("p")
        menuItem1.append(menuText1)
        menuText1.textContent = "Sample text" 

        /// item 2

        let menuItem2 = document.createElement("div")
        menuWrapper.append(menuItem2)
        menuItem2.classList.add("menu-item")

        let menuImageWrapper2 = document.createElement("div")
        menuItem2.append(menuImageWrapper)
        menuImageWrapper2.classList.add("menu-image")

        let menuImage2 = document.createElement("img")
        menuImage2.src = "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg"
        menuImageWrapper2.append(menuImage2)

        let menuText2 = document.createElement("p")
        menuItem2.append(menuText2)
        menuText2.textContent = "Sample text" 

        /// item 3

        let menuItem3 = document.createElement("div")
        menuWrapper.append(menuItem3)
        menuItem3.classList.add("menu-item")

        let menuImageWrapper3 = document.createElement("div")
        menuItem3.append(menuImageWrapper3)
        menuImageWrapper3.classList.add("menu-image")

        let menuImage3 = document.createElement("img")
        menuImage3.src = "https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286_960_720.jpg"
        menuImageWrapper3.append(menuImage3)

        let menuText3 = document.createElement("p")
        menuItem3.append(menuText3)
        menuText3.textContent = "Sample text" 

        /// item 4

        let menuItem4 = document.createElement("div")
        menuWrapper.append(menuItem4)
        menuItem4.classList.add("menu-item")

        let menuImageWrapper4 = document.createElement("div")
        menuItem4.append(menuImageWrapper4)
        menuImageWrapper4.classList.add("menu-image")

        let menuImage4 = document.createElement("img")
        menuImage4.src = "https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg"
        menuImageWrapper4.append(menuImage4)

        let menuText4 = document.createElement("p")
        menuItem4.append(menuText4)
        menuText4.textContent = "Sample text" 

        // item 5

        let menuItem5 = document.createElement("div")
        menuWrapper.append(menuItem5)
        menuItem5.classList.add("menu-item")

        let menuImageWrapper5 = document.createElement("div")
        menuItem5.append(menuImageWrapper5)
        menuImageWrapper5.classList.add("menu-image")

        let menuImage5 = document.createElement("img")
        menuImage5.src = "https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748_960_720.jpg"
        menuImageWrapper5.append(menuImage5)

        let menuText5 = document.createElement("p")
        menuItem5.append(menuText5)
        menuText5.textContent = "Sample text" 

        // item 6

        let menuItem6 = document.createElement("div")
        menuWrapper.append(menuItem6)
        menuItem6.classList.add("menu-item")

        let menuImageWrapper6 = document.createElement("div")
        menuItem6.append(menuImageWrapper6)
        menuImageWrapper5.classList.add("menu-image")

        let menuImage6 = document.createElement("img")
        menuImage6.src = "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg"
        menuImageWrapper6.append(menuImage6)

        let menuText6 = document.createElement("p")
        menuItem6.append(menuText6)
        menuText6.textContent = "Sample text" 
    }

    return{
        generateMenu
    }
})()



export default menu




/*
    <div class="menu">
        <div class="wrapper">
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2020/04/17/08/23/eat-5053825_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
            <div class="menu-item">
                <div class="menu-image">
                <img src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg" alt="" srcset="">
                </div>
                <p>sample text</p>
            </div>
        </div>
    </div>
    */
