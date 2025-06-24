class WhatsappController{
    constructor(){
        console.log("WhatsAppController OK")

        this.loadElments();
    }

    loadElments(){
        this.el = {}
        document.querySelectorAll('[id]').forEach(element=>{
            this.el[Format.getCamelCase(element.id)] = element;
        })
    }
}