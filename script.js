document.addEventListener("DOMContentLoaded", function(){
    let page = window.location.pathname;

    if(page.includes("addition")){
        document.getElementById("addition").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_add_1 = parseFloat(document.getElementById("nbr_add_1").value);
            let nbr_add_2 = parseFloat(document.getElementById("nbr_add_2").value);
            let nbr_add_3 = parseFloat(document.getElementById("nbr_add_3").value);
            
            // if (nbr_add_3==undefined){
            //     document.getElementById("resultat_add").innerHTML ="Le résultat est égal à : " + parseFloat(nbr_add_1+nbr_add_2)
            // }
            document.getElementById("resultat_add").innerHTML ="Le résultat est égal à : " + parseFloat(nbr_add_1+nbr_add_2+(nbr_add_3||0))
           
        })
    }
    // la partie de la soustraction
    else if(page.includes("soustraction")){
            document.getElementById("soustraction").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_sous_1 = parseFloat(document.getElementById("nbr_sous_1").value);
            let nbr_sous_2 = parseFloat(document.getElementById("nbr_sous_2").value);
            document.getElementById("resultat_sous").innerHTML ="Le résultat est égal à : "+parseFloat(nbr_sous_1-nbr_sous_2);
        })
    }
    // La partie de la multiplication
    else if(page.includes("multiplication")){
            document.getElementById("multiplication").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_mlt_1 = parseFloat(document.getElementById("nbr_mlt_1").value);
            let nbr_mlt_2 = parseFloat(document.getElementById("nbr_mlt_2").value);
            let nbr_mlt_3 = parseFloat(document.getElementById("nbr_mlt_3").value);
            // if(nbr_mlt_3 === ""){
            //     document.getElementById("resultat_mlt").innerHTML ="Le résultat est égal à : "+parseFloat(nbr_mlt_1*nbr_mlt_2);
            // }
            document.getElementById("resultat_mlt").innerHTML ="Le résultat est égal à : "+parseFloat(nbr_mlt_1*nbr_mlt_2*(nbr_mlt_3 || 1));
        })
    }
    // La partie de la division
    else if(page.includes("division")){
            document.getElementById("division").addEventListener("submit", function(even){
                even.preventDefault()
                let nbr_div_1 = parseFloat(document.getElementById("nbr_div_1").value);
                let nbr_div_2 = parseFloat(document.getElementById("nbr_div_2").value);
                document.getElementById("resultat_div").innerHTML ="Le résultat est égal à : "+parseFloat(nbr_div_1/nbr_div_2)
        })
    }
})






