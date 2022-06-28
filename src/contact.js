let contact = (() => {
    function contactInfo (){
        let content = document.querySelector("#content")
        
        let contact = document.createElement("div")
        contact.classList.add("contact")
        content.append(contact)

        let form = document.createElement("form")
        contact.append(form)

        let legend = document.createElement("legend")
        form.append(legend)
        legend.textContent = "Contact Us!"

        let fieldset = document.createElement("fieldset")
        form.append(fieldset)

        let nameDiv = document.createElement("div")
        fieldset.append(nameDiv)
        nameDiv.classList.add("name")

        let nameLabel = document.createElement("label")
        nameDiv.append(nameLabel)
        nameLabel.htmlFor = "name"
        nameLabel.textContent = "Full Name:"

        let name = document.createElement("input")
        nameDiv.append(name)
        name.id = "name"
        name.name = "name"
        name.setAttribute = ("type", "text")

        let phoneDiv = document.createElement("div")
        fieldset.append(phoneDiv)
        phoneDiv.classList.add("number")

        let phoneLabel = document.createElement("label")
        phoneDiv.append(phoneLabel)
        phoneLabel.htmlFor = "number"
        phoneLabel.textContent = "Phone Number:"

        let phone = document.createElement("input")
        phoneDiv.append(phone)
        phone.id = "number"
        phone.name = "phone_number"
        phone.setAttribute = ("type", "number")

        let titleDiv = document.createElement("div")
        fieldset.append(titleDiv)
        phoneDiv.classList.add("title")

        let titleLabel = document.createElement("label")
        titleDiv.append(titleLabel)
        titleLabel.htmlFor = "title"
        titleLabel.textContent = "Message Title:"

        let title = document.createElement("input")
        titleDiv.append(title)
        phone.id = "title"
        phone.name = "message_title"
        name.setAttribute = ("type", "text")

        let messageDiv = document.createElement("div")
        fieldset.append(messageDiv)
        phoneDiv.classList.add("message")

        let messageLabel = document.createElement("label")
        messageDiv.append(messageLabel)
        messageLabel.htmlFor = "message"
        messageLabel.textContent = "Message:"

        let message = document.createElement("textarea")
        messageDiv.append(message)
        message.rows = 5
        message.cols = 20
        message.setAttribute = ("type", "text")
    }

    return {
        contactInfo
    }
})()


export default contact

/* 
```html
        <div class="contact">
        <form action="">
            <legend>Contact Us!</legend>
            <fieldset>
                <div class="name">
                    <label for="name">Name:</label>
                    <input type="text" name="user_name" id="name">
                </div>
                <div>
                    <label for="number">Phone Number:</label>
                    <input type="number" name="phone_number" id="number">
                </div>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title">
                </div>
                <div>
                    <label for="Message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <button type="submit">Submit form</button>
            </fieldset>
        </form>
    </div>```
    */ 