document.addEventListener("focusin", changeState);
document.addEventListener("focusout", changeState);

document.addEventListener("dragstart", changeState);

let lastElement;
let lastEvent;
let lastInput;
function changeState(e) {
    let event = e.type;
    let target = e.target;
    let element;

    //  Primary, Secondary, Tertiary
    if (target.matches(".btn-primary") || target.matches(".btn-secondary") || target.matches(".btn-tertiary")) {
        element = target.classList[0];

        if (event == "contextmenu") {
            thing(event + " ENGELLENDİ");

            e.preventDefault();
        }

        if (event == "mouseover") {
            target.classList.add(`${element}--hover`);
        } else if (event == "mouseout") {
            target.classList.remove(`${element}--hover`);
        } else if (event == "mousedown" || event == "touchstart") {

            if (event == "mousedown") {
                if (e.button !== 0) {
                    thing("BİRİNCİL BUTON KULLANILMADI (" + e.button + ")");

                    e.preventDefault();
                    return;
                } else {
                    // Devam et
                }
            }

            if (lastEvent == "keydown" ) {
                thing(event + " ENGELLENDİ");

                e.preventDefault();
            } else {
                thing(event + " TETİKLENDİ");

                resetState();
                target.classList.add(`${element}--active`);
                lastElement = target;
                thing(lastElement);
            }

        } else if (event == "mouseup" || event == "touchend") {

            if (lastEvent == "keydown" ) {
                thing(event + " ENGELLENDİ");
                
            } else {

                if (target === lastElement) {
                    thing(event + " AYNI BUTONDA");

                    resetState();
                    target.classList.remove(`${element}--active`);

                    /*
                    if (target.matches(".element")) {
                        //doSomeThing();
                    }
                    */
                    
                } else {
                    thing(event + " FARKLI BUTONDA");
                    
                    resetState();
                }
                
                lastElement = null;
            }

        } else if (event == "keydown") {

            if (e.key === "Enter" || e.key === " " ) {

                if (lastEvent !== "keydown") {
                    lastInput = e.key;

                    thing(lastInput + " AYARLANDI")
                }

                target.classList.add(`${element}--active`);
                if (!e.repeat) {
                    thing(event + " TETİKLENDİ");

                    lastEvent = event;
                    lastElement = target;
                }
            } else if (e.key == "Tab" && lastEvent == "keydown") {
                thing(event + "(" + e.key + ")" +" ENGELLENDİ");
                e.preventDefault();
            }
                
        } else if (event == "keyup") {

            if (e.key === "Enter" || e.key === " " ) {
                thing(event + " TETİKLENDİ");

                // Çift Komut Kontrolü
                if (lastInput !== e.key) {
                    thing(event + "(" + e.key + ")" +" ENGELLENDİ");
    
                    e.preventDefault();
                    return;
                } else {
                    //devam
                }

                lastInput = null;
                lastEvent = null;
                target.classList.remove(`${element}--active`);

                /*
                    if (target.matches(".element")) {
                        //doSomeThing();
                    }
                */

            }
            
        }

    } else {
        if (event == "mouseup") {
            thing(event + " BAŞKA ELEMENTTE");

            if (lastEvent == "keydown" ) {
                thing(event + " ENGELLENDİ");
                e.preventDefault();
                //lastEvent = null;
                //resetState();
            } else {
                lastEvent = null;
                resetState();
            }

        } else if (event == "mousedown") {
            thing(event + " BAŞKA ELEMENTTE");

            if (lastEvent == "keydown" ) {
                thing(event + " ENGELLENDİ");

                e.preventDefault();
            }
            
        } else if (event == "contextmenu") {
            thing(event + " BAŞKA ELEMENTTE");

            if (lastEvent == "keydown" ) {
                thing(event + " ENGELLENDİ");

                e.preventDefault();
            }
        }
    }
}

function resetState() {
    let activeElements = document.querySelectorAll("[class*='--active']");
    activeElements.forEach(i => {
        thing("STATE RESET TETİKLENDİ");

        //thing("TÜM PRESSED SIFIRLANDI");
        //thing(i.className);
        //thing("Active değiştiriliyor...");
        i.classList.remove(`${i.classList[0]}--active`);
        //thing(i.className);
    })
}
