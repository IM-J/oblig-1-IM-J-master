
const Billetter =[];

function GetB(){
    let nyBill={
        Film: document.getElementById("VFilm").value,
        Antall: document.getElementById("Ant").value,
        Fnavn: document.getElementById("FN").value,
        Enavn: document.getElementById("EN").value,
        TLF:document.getElementById("Tlf").value,
        Epost:document.getElementById("EP").value

    }


    if(nyBill.Antall===""){
        document.getElementById("AntError").innerHTML = "Må skrive noe"

    }
    if(nyBill.Fnavn===""){
        document.getElementById("FNError").innerHTML = "Må skrive noe"

    }
    if(nyBill.Enavn===""){
        document.getElementById("ENError").innerHTML = "Må skrive noe"

    }
    if(nyBill.TLF===""){
        document.getElementById("TlfError").innerHTML = "Må skrive noe"

    }
    if(nyBill.Epost===""){
        document.getElementById("EPError").innerHTML = "Må skrive noe"

    }
    if(isNaN(nyBill.Antall)){
        alert("Antall må være utelukkende tall")
    return;
    }

    Billetter.push(nyBill)

        document.getElementById("VFilm").value='Velg Film'
        document.getElementById("Ant").value=''
        document.getElementById("FN").value=''
        document.getElementById("EN").value=''
        document.getElementById("Tlf").value=''
        document.getElementById("EP").value=''


    let ut="<table>" +
        "<tr>"+
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th> tlf nummer</th> " +
        "<th>Adresse</th>" +
        "</tr>";

    for (i=0; i<Billetter.length; i++){
        ut+="<tr>";
        ut+="<td>"+ Billetter[i].Film+"</td>"+
            "<td>"+Billetter[i].Antall+"</td>"+
            "<td>"+Billetter[i].Fnavn+"</td>"+
            "<td>"+Billetter[i].Enavn+"</td>"+
            "<td>"+Billetter[i].TLF+"</td>"+
            "<td>"+Billetter[i].Epost+"</td></tr>";

    }
        document.getElementById("AllB").innerHTML= ut;
}

function DelAll(){
    Billetter.splice(0, Billetter.length);
    document.getElementById("AllB").innerHTML='';
}
