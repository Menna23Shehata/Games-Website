export class Ui{
    constructor(){}

    displayGames(allgames){
        let gamesData = document.getElementById('games') 
        let blackBox =``
        for(let i=0; i< allgames.length; i++){
            blackBox +=`
            <div class="col-md-3 d-flex align-items-stretch mb-3">
                <div class="card text-white p-1 bg-transparent text-center cursor-pointer" data-id="${allgames[i].id}">
                    <img src="${allgames[i].thumbnail}" class="card-img-top" alt="${allgames[i].title}">
                        <div class="card-body">
                            <h5 class="card-title">${allgames[i].title}</h5>
                            <p class="card-text">${allgames[i].short_description}</p>
                        </div>
                        <div class="card-footer d-flex align-items-center">
                            <small class="badge">${allgames[i].genre}</small>
                            <small class="badge">${allgames[i].platform.split(",",1)}</small>
                        </div>
                </div>
            </div>
    
            `
        }
        gamesData.innerHTML = blackBox
    }

    
    displayDetails(thedetails) {
        let gameDetails = document.getElementById("detailsContent")
        
        let blackBox =`
            <div class="col-md-4">
                <img src="${thedetails.thumbnail}" alt="${thedetails.title}" class="w-100 img-fluid rounded-2">
            </div>

            <div class="col-md-8 text-white">
                <h3>Title :&nbsp;${thedetails.title}</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Genre :&nbsp;&nbsp;<span class="badge text-black">${thedetails.genre}</span> </p>
                            <p>Platform :&nbsp;&nbsp;<span class="badge text-black">${thedetails.platform}</span> </p>
                            <p>Status :&nbsp;&nbsp;<span class="badge text-black">${thedetails.status}</span> </p>
                        </div>
                        <div class="col-md-6">
                            <p>Release Date :&nbsp;&nbsp;<span class="badge text-black">${thedetails.release_date}</span> </p>
                            <p>Publisher :&nbsp;&nbsp;<span class="badge text-black">${thedetails.publisher}</span> </p>
                            <p>Developer :&nbsp;&nbsp;<span class="badge text-black">${thedetails.developer}</span> </p>
                        </div>
                    </div>
                
                
                <p>${thedetails.description}</p>
                <a class="btn btn-outline-info" target="_blank" href="${thedetails.game_url}">Show Game</a>
                
                

            </div>
            
        `

        gameDetails.innerHTML = blackBox
    }

}

