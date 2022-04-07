const mysearch = document.getElementById("mysearch");
const newscontainer = document.getElementById("newscontainer");
const catagories = {
    "general": "general",
    "business": "business",
    "entertainment": "entertainment",
    "health": "health",
    "science": "science",
    "sports": "sports",
    "technology":"technology"}
const spinner = `<button class="btn btn-primary w-50 h-50" type="button" disabled>
<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
Loading...
</button>`
function getnews() {
  let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.science}&%20languages=en,-de`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((mydata) => {
        let cont = "";
      mydata.data.forEach((element) => {
        let newcont = ` <div id="sec">
<img src=${element.image} alt="Image Not Available">
<div>
<h3>${element.title}</h3>
<p>${element.description}</p>
</div>
<a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
</div>
<hr>`;
if(element.image === "null"){
    console.log("this is null");
} else {

}
        cont += newcont;
      });
      newscontainer.innerHTML = cont;
    });
}
getnews();

function technology() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.technology}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function general() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.general}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function business() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.business}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function entertainment() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.entertainment}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function health() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.health}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function sports() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.sports}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  function science() {
    newscontainer.innerHTML = spinner;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&categories=${catagories.science}&%20languages=en,-de`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });
  }
  
  function search(){
    let keywords = mysearch.value;
    let url = `http://api.mediastack.com/v1/news?access_key=804c66b07f1b2b10099c937d2cbd2056&keywords=${keywords}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
          let cont = "";
        mydata.data.forEach((element) => {
          let newcont = ` <div id="sec">
  <img src=${element.image} alt="Image Not Available">
  <div>
  <h3>${element.title}</h3>
  <p>${element.description}</p>
  </div>
  <a href=${element.url} target="_blank"><button class="btn btn-primary" id="btn">Read More </button><a/>
  </div>
  <hr>`;
  if(element.image === "null"){
      console.log("this is null");
  } else {
  
  }
          cont += newcont;
        });
        newscontainer.innerHTML = cont;
      });   
  }