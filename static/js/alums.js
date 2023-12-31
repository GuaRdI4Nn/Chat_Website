let alum=[
    {
       name:"Shashank Gupta" ,
       src:'/static/images/sg.jpeg',
       passyr:2021 ,
       spec:"Machine Learning" ,

    },
    {
        name:"Anshik Kumar" ,
        src:'/static/images/ak.jpeg',
        passyr:2022 ,
        spec:"Machine Learning" ,
 
     },{
        name:"Kaushik Singh" ,
        src:'/static/images/ks.jpeg',
        passyr:2020 ,
        spec:"Software Development" ,
 
     },{
        name:"Shashwat Kumar" ,
        src:'/static/images/sk.jpeg',
        passyr:2021 ,
        spec:"Electronics" ,
 
     },{
        name:"Abhay Singh" ,
        src:'/static/images/as.jpeg',
        passyr:2021 ,
        spec:"Software Development" ,
 
     },{
        name:"Akshay Singh" ,
        src:'/static/images/as1.jpeg',
        passyr:2021 ,
        spec:"Software Development" ,
 
     },{
        name:"Asha Pandey" ,
        src:'/static/images/ap.jpeg',
        passyr:2021 ,
        spec:"Electronics" ,
 
     },
]
all1()
function all1(){
    showall1(alum)
    function showall1(alum){
        document.getElementById("alums").innerHTML=''
        for (var i=0;i<alum.length;i++){
            if (alum[i].spec!==null){
                document.getElementById("alums").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${alum[i].src}" class="card-img-top" alt="..." style="height:70%;">
                            <div class="card-body">
                                <h5 class="card-title">${alum[i].name}</h5>
                                <p class="card-text"><b>Pass out year:</b>${alum[i].passyr}
                                <br>
                                <b>Specialization:</b>${alum[i].spec}
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">Connect</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}
function sd(){
    showsd(alum)
    function showsd(alum){
        document.getElementById("alums").innerHTML=''
        for (var i=0;i<alum.length;i++){
            if (alum[i].spec=="Software Development"){
                document.getElementById("alums").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                        <img src="${alum[i].src}" class="card-img-top" alt="..." style="height:70%;">
                            <div class="card-body">
                                <h5 class="card-title">${alum[i].name}</h5>
                                <p class="card-text"><b>Pass out year:</b>${alum[i].passyr}
                                <br>
                                <b>Specialization:</b>${alum[i].spec}
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">Connect</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}

function ec(){
    showec(alum)
    function showec(alum){
        document.getElementById("alums").innerHTML=''
        for (var i=0;i<alum.length;i++){
            if (alum[i].spec=="Electronics"){
                document.getElementById("alums").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                        <img src="${alum[i].src}" class="card-img-top" alt="..." style="height:70%;">
                            <div class="card-body">
                                <h5 class="card-title">${alum[i].name}</h5>
                                <p class="card-text"><b>Pass out year:</b>${alum[i].passyr}
                                <br>
                                <b>Specialization:</b>${alum[i].spec}
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">Connect</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}




