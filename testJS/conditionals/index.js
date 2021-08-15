const subscriptionType = prompt("What's your subscription type?: ");
/**
 * subscriptions
 * Determinate what Platzi user plan is.
 * @param {string} subscriptionType 
 */
function subscriptions(subscriptionType){
        if (subscriptionType == "Free") {
                console.log("Solo puedes tomar los cursos gratis");
        } else if (subscriptionType == "Basic") {
                console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        } else if (subscriptionType == "Expert") {
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        } else if (subscriptionType == "ExpertPlus") {
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
}

subscriptions(subscriptionType);

