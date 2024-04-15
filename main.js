import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.90,
    GBP: 0.67,
    INR: 74.57,
    PKR: 180
};
let useranswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", 'EUR', "GBP", 'INR', "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", 'EUR', "GBP", 'INR', "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
        // choices: ["USD",'EUR', "GBP", 'INR',"PKR"],
    },
]);
//console.log(useranswer);
let fromAmount = currency[useranswer.from];
let toAmount = currency[useranswer.to];
let amout = useranswer.amount;
let baseAmount = amout / fromAmount; // USD base currency //4 dollar
let covertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amout);
