const subscription = prompt("What's your subscription type?: ");
/**
 * subscriptionType
 * Determinate
 */
const SubscriptionType = subscription === "basic" ? "Puedes tomar casi todos los cursos de Platzi durante un mes":
        subscription === "expert" ? "Puedes tomar casi todos los cursos de Platzi durante un año":
        subscription === "expert+" ? "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año":
        "Solo puedes tomar los cursos gratis";
console.log(SubscriptionType);