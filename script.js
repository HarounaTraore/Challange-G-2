document.addEventListener("DOMContentLoaded", function(){
    let page = window.location.pathname;

    if(page.includes("addition")){
        document.getElementById("addition").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_add_1 = document.getElementById("nbr_add_1").value;
                nbr_add_1 = parseFloat(nbr_add_1);
            let nbr_add_2 = document.getElementById("nbr_add_2").value;
                nbr_add_2 = parseFloat(nbr_add_2);
            document.getElementById("resultat_add").innerHTML ="Le résultat est égal à : " + parseInt(nbr_add_1+nbr_add_2)
        })
    }
    // la partie de la soustraction
    else if(page.includes("soustraction")){
            document.getElementById("soustraction").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_sous_1 = document.getElementById("nbr_sous_1").value;
                nbr_sous_1 = parseFloat(nbr_sous_1);
            let nbr_sous_2 = document.getElementById("nbr_sous_2").value;
                nbr_sous_2 = parseFloat(nbr_sous_2);
            document.getElementById("resultat_sous").innerHTML ="Le résultat est égal à : "+parseInt(nbr_sous_1-nbr_sous_2);
        })
        // La partie de la multiplication
    }
    else if(page.includes("multiplication")){
        
            document.getElementById("multiplication").addEventListener("submit", function(even){
            even.preventDefault()
            let nbr_mlt_1 = document.getElementById("nbr_mlt_1").value;
                nbr_mlt_1 = parseFloat(nbr_mlt_1);
            let nbr_mlt_2 = document.getElementById("nbr_mlt_2").value;
                nbr_mlt_2 = parseFloat(nbr_mlt_2);
            document.getElementById("resultat_mlt").innerHTML ="Le résultat est égal à : "+parseInt(nbr_mlt_1*nbr_mlt_2)
        })
    }
    // La partie de la division
    else if(page.includes("division")){
           
            document.getElementById("division").addEventListener("submit", function(even){
                even.preventDefault()
                let nbr_div_1 = document.getElementById("nbr_div_1").value;
                    nbr_div_1 = parseFloat(nbr_div_1);
                let nbr_div_2 = document.getElementById("nbr_div_2").value;
                    nbr_div_2 = parseFloat(nbr_div_2);
                document.getElementById("resultat_div").innerHTML ="Le résultat est égal à : "+parseInt(nbr_div_1/nbr_div_2)
        })
    }
})






