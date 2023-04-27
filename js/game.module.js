import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"

export class Game {
    constructor() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.changeActiveLink(link)
                // const category = link.getAttribute('data-category')
                const category = link.dataset.category // another way to do it
                this.getGames(category)
            })
        })
        this.loader = document.getElementById('loader')
        this.details = document.querySelector('.details')

        this.ui = new Ui()
        this.getGames('mmorpg')
    }

    async changeActiveLink(link) {
        document.querySelector('.navbar-nav .active').classList.remove('active')
        link.classList.add('active')
    }

    async getGames(category) {
        this.loader.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': 'c362908188msh5dd93f9bc91a49fp1f61c0jsnb379733be44a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json()
        // console.log(response);

        this.ui.displayGames(response)
        // this.startEvent();
        this.loader.classList.add('d-none')
        
        document.querySelectorAll('.card').forEach(card=>{
            card.addEventListener('click', () => { 

                this.details.classList.remove("d-none");

                let gameId = card.dataset.id
                // const detailsPage = new Details() 
                new Details(gameId) // another way 
                document.body.style.overflow = 'hidden'
            })
        })
    }

}