// Criação da classe hotel para abstração dos diversos hoteis
class Hotel{
    constructor(name, rating, diariaWeekRegular, diariaWeekReward, diariaWeekendRegular, diariaWeekendReward ) {
        this.name = name;
        this.rating = rating;
        this.diaria = {
            week: {
                regular: diariaWeekRegular,
                reward: diariaWeekReward,
            },
            weekend:{
                regular: diariaWeekendRegular,
                reward: diariaWeekendReward,
            }
        };
    }
}

// Criação dos objetos dos 3 Hoteis do problema
const lakewoodHotel = new Hotel("Lakewood", "3", 110.0, 80.0, 90.0, 80.0,);
const bridgewoodHotel = new Hotel("Bridgewood", "4", 160.0, 110.0, 60.0, 50.0);
const ridgewoodHotel = new Hotel("Ridgewood", "5", 220.0, 100.0, 150.0, 40.0);

// Função que verifica se o cliente é Regular ou Reward
function isRewardClient(clientType){
    return clientType === "Rewards" ? true : false;
}

// Função que verifica se o dia passado para a função é dia de semana (mon - fri) ou de fim de semana (sat ou sun)
function isWeekend(day){
    if( day === "sat" || day === "sun"){
        return true;
    }
    else{
        return false;
    }
}

// Função que obtém apenas a parte referente ao dia da semana que está entre parenteses em um string de uma data
// Utiliza expressão regular para obter qualquer texto entre parenteses com tamanho mínimo de 3 caracteres e no máximo 4 caracteres
// Ao final remove os caracteres "(" e ")", retornando apenas uma string com a abreviação do dia da semana. Ex: "mon", "tues", "thur", "sat"
function getDayFromDateString(dateString){
    const regex = /\([a-z][a-z][a-z][a-z]*\)/;
    return dateString.match(regex)[0].replace("(","").replace(")","");
}

// Função que retorna o hotel com menor custo comparado ao hotel com menor custo atual
// dado um array de hoteis, o tipo do dia da semana e o tipo do cliente
function findCheapestHotel(currentCheapestHotel, hotelArray, dayType, clientType){
    let cheapestHotel = currentCheapestHotel;

    for( const hotel of hotelArray){
        if(cheapestHotel === undefined){
            cheapestHotel = hotel;
        }
        else if(cheapestHotel.diaria[dayType][clientType] > hotel.diaria[dayType][clientType]){
            cheapestHotel = hotel;
        }
        else if(cheapestHotel.diaria[dayType][clientType] === hotel.diaria[dayType][clientType]){
            if(cheapestHotel.rating < hotel.rating){
                cheapestHotel = hotel;
            }
        }
        else{
            continue;
        }
    }
    return cheapestHotel;
}

function getCheapestHotel (input) { //DO NOT change the function's name.
    const [clientType, accommodationDateString] = input.split(':'); // Divide o input em duas strings no caractere ":", uma com o tipo do cliente e outra com a string referente às datas

    // Separa a string das datas nas ocorrencias dos caracteres ","
    // Depois realiza um map, formatando cada string a partir da função getDayFromDateString
    // Resultando no armazenamento de um array apenas com os dias da semana. Ex: ["mon", "tues", "sat"]
    const accommodationDaysArray = accommodationDateString.split(',').map((dateString) =>{
        return getDayFromDateString(dateString);
    });

    const hotelArray = [lakewoodHotel, bridgewoodHotel, ridgewoodHotel]
    let cheapestHotel;
    
    for(const day of accommodationDaysArray){
        if(isWeekend(day)){
            if(isRewardClient(clientType)){
                cheapestHotel = findCheapestHotel(cheapestHotel, hotelArray, "weekend", "reward");
            }
            else{
                cheapestHotel = findCheapestHotel(cheapestHotel, hotelArray, "weekend", "regular");
            }
        }
        else{
            if(isRewardClient(clientType)){
                cheapestHotel = findCheapestHotel(cheapestHotel, hotelArray, "week", "reward");
            }
            else{
                cheapestHotel = findCheapestHotel(cheapestHotel, hotelArray, "week", "regular");
            }
        }
    }

    return cheapestHotel.name;
}

exports.isRewardClient = isRewardClient
exports.isWeekend = isWeekend
exports.getDayFromDateString = getDayFromDateString
exports.getCheapestHotel = getCheapestHotel
