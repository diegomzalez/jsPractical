const subscription = prompt("What's your subscription type?: (you can type: free, basic, expert, experplus)");
const subscriptionType = {
        'free': "Solo puedes tomar los cursos gratis",
        'basic': "Puedes tomar casi todos los cursos de Platzi durante un mes",
        'expert': "Puedes tomar casi todos los cursos de Platzi durante un año",
        'expertPlus': "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};
subscription == 'free' ? console.log(subscriptionType.free): 
subscription == 'basic' ? console.log(subscriptionType.basic):
subscription == 'expert' ? console.log(subscriptionType.expert):
subscription == 'expertplus' ? console.log(subscriptionType.expertPlus):
"Error";

