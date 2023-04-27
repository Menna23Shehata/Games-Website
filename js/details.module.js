import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        this.ui = new Ui();

        document.getElementById("close-btn").addEventListener("click", () => {
            document.querySelector(".details").classList.add("d-none");
            document.body.style.overflow = 'visible'
        });

        this.loader = document.getElementById('loader')

        this.getDetails(id)
    }

    async getDetails(idGame){
        this.loader.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c362908188msh5dd93f9bc91a49fp1f61c0jsnb379733be44a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}` , options)
        const response = await api.json()
        this.loader.classList.add('d-none')
        console.log(idGame);

        new Ui().displayDetails(response)
    }
}