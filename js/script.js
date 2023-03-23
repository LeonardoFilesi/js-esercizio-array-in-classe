/* const allAutos = [
    {
        marca : "Audi",
        modello : "A4",
        alimentazione : "diesel",
    },    {
        marca : "Mercedes-AMG",
        modello : "GT",
        alimentazione : "benzina",
    },    {
        marca : "Land-Rover",
        modello : "Defender",
        alimentazione : "diesel",
    },    {
        marca : "Toyota",
        modello : "Yaris-Hybrid",
        alimentazione : "elettrica",
    },    {
        marca : "Ford",
        modello : "Fiesta",
        alimentazione : "GPL",
    }, 
]

const arrayBenzina = allAutos.filter((currentAuto) => currentAuto.alimentazione === "benzina");
console.log(arrayBenzina);

const arrayDiesel = allAutos.filter((currentAuto) => currentAuto.alimentazione === "diesel");
console.log(arrayDiesel);

const arrayOtherAutos = allAutos.filter((currentAuto) => currentAuto.alimentazione !== "benzina" && currentAuto.alimentazione !== "diesel");
console.log(arrayOtherAutos);
 */
const people = [
    {
        nome : "Marco",
        cognome : "Alberti",
        eta : 42,
    },   {
        nome : "Francesca",
        cognome : "Rossi",
        eta : 16,
    },   {
        nome : "Alberto",
        cognome : "Marchi",
        eta : 18,
    },   {
        nome : "Mario",
        cognome : "Verdi",
        eta : 22,
    },   {
        nome : "Rossi",
        cognome : "Bluenti",
        eta : 12,
    },   {
        nome : "Alessandra",
        cognome : "Palermitano",
        eta : 67,
    },
]

const peopleAfterDMV = people.map((item) => {
    console.log(item.eta);
    if (item.eta > 18) {
        return "può guidare"
    } else {
        return "non può guidare"
    }
});
console.log(peopleAfterDMV);