const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
   const card= document.querySelector('.cards')

    const getmovies = async(api) =>
    {
       const response = await fetch (api);
       const data=await response.json();
       console.log(data);
       showmovies(data.results);
    }
    // getmovies(APIURL);
    const showmovies = (data) =>
    { card.innerHTML="";
        data.forEach(
            (item)=>{
                const moviebox = document.createElement('div');
                moviebox.classList.add('moviebox');
                moviebox.innerHTML=`
                <img src="${IMGPATH+item.backdrop_path}" alt="">
          
          <div class="title">
          <h3>${item.original_title}</h3>
          <span>${item.vote_average}</span>
         </div>
         <div class="overview">
          <h3>Overview</h3>
          <p>
          ${item.overview} 
          </p>
         </div>`
           card.appendChild(moviebox)
            }
            

        )
    }
    document.querySelector('#Searchbox').addEventListener
    {
        "keyup",
        function(event)
        {
            if(event.target.value!="")
            {
                getmovies(SEARCHAPI+event.target.value)
            }
            else{
                getmovies(APIURL)
            }
        }
    }
    getmovies(APIURL)

