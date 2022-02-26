export default class FormHandler {
    #formElement
    #alertElement
    #inputElement
    constructor(idForm, idAlert){
        this.#formElement = document.getElementById(idForm);
        this.#alertElement = document.getElementById(idAlert);
        this.#inputElement = document.querySelectorAll(`#${idFor} [name]`);
    }
   addHandler(fnProcessor) {
       this.#formElement.addEventListener('submit', event => {
           event.preventDefault();
           const data = Array.from(this.#inputElement).reduce((obj, element) => {
             obj[element.name] = element.value;
             return obj;
           }, {})
           const message = fnProcessor(data);
           if(!message){
               this.#formElement.requestFullscreen(); // if everithing ok
           }else{
               //TODO show alert inside this.#alertElement
           }
        })
   } 
}