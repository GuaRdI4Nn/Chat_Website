let hackathons=[
    {
        name:'Backdoor CTF',
        st:'completed',
        src:'/static/images/bd.jpeg',

    },
    {
        name:'Syntax Error',
        st:'completed',
        src:'/static/images/se.jpeg',

    },
    {
        name:'Winter of Code',
        st:'Ongoing',
        src:'/static/images/woc.jpeg',

    },
    {
        name:'Season of Code',
        st:'Ongoing',
        src:'/static/images/woc.jpeg',


    },
    {
        name:'Noob CTF',
        st:'Upcoming',
        src:'/static/images/nct.jpeg',


    }
    
]
all1()
function all1(){
    showall1(hackathons)
    function showall1(hackathons){
        document.getElementById("hackathons").innerHTML=''
        for (var i=0;i<hackathons.length;i++){
            if (hackathons[i].st!==null){
                document.getElementById("hackathons").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${hackathons[i].src}" class="card-img-top" alt="..." style="height:50%;">
                            <div class="card-body">
                                <h5 class="card-title">${hackathons[i].name}</h5>
                                <p class="card-text"><b>Status:</b>${hackathons[i].st}
                                <br>
                                
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">More Info</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}
function ongoing(){
    showong(hackathons)
    function showong(hackathons){
        document.getElementById("hackathons").innerHTML=''
        for (var i=0;i<hackathons.length;i++){
            if (hackathons[i].st=='Ongoing'){
                document.getElementById("hackathons").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${hackathons[i].src}" class="card-img-top" alt="..." style="height:50%;">
                            <div class="card-body">
                                <h5 class="card-title">${hackathons[i].name}</h5>
                                <p class="card-text"><b>Status:</b>${hackathons[i].st}
                                <br>
                                
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">More Info</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}
function complete(){
    showc(hackathons)
    function showc(hackathons){
        document.getElementById("hackathons").innerHTML=''
        for (var i=0;i<hackathons.length;i++){
            if (hackathons[i].st=='completed'){
                document.getElementById("hackathons").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${hackathons[i].src}" class="card-img-top" alt="..." style="height:50%;">
                            <div class="card-body">
                                <h5 class="card-title">${hackathons[i].name}</h5>
                                <p class="card-text"><b>Status:</b>${hackathons[i].st}
                                <br>
                                
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">More Info</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}
function upcoming(){
    showu(hackathons)
    function showu(hackathons){
        document.getElementById("hackathons").innerHTML=''
        for (var i=0;i<hackathons.length;i++){
            if (hackathons[i].st=='Upcoming'){
                document.getElementById("hackathons").innerHTML+= `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${hackathons[i].src}" class="card-img-top" alt="..." style="height:50%;">
                            <div class="card-body">
                                <h5 class="card-title">${hackathons[i].name}</h5>
                                <p class="card-text"><b>Status:</b>${hackathons[i].st}
                                <br>
                                
                                </p>
                                <button id="submit" name="submit" class="btn btn-primary w-100 py-2 mt-1" type="submit">More Info</button>

                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}