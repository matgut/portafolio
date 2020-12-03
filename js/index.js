const obj_idiomas = {
    "en":{
        "txt_titulo_main":"Christian Gutierrez | Software developer",
        "txt_inicio":"home",
        "txt_sobre_mi":"about",
        "txt_habilidades":"skill",
        "txt_empresas":"companies",
        "txt_profesion":"Software developer",
        "txt_contacto":"Contact me",
        "txt_titulo_acerca_mi":"About me",
        "txt_hola":"Hello, I am",
        "txt_descripcion_1":"Graduated from the computer engineering degree. In recent years I have worked as a software developer more in the field of web development, I have participated in projects which have given me the experience and knowledge necessary to grow professionally. Currently I have 4 years of experience.",
        "txt_descripcion_2":"I use part of my free time to research and learn new technologies, in order to expand my knowledge in this area.",
        "txt_titulo_habilidades":"Skills",
        "txt_descrip_git":"Correct handling of Git tool for version control, experience with <b> GITHUB </b> AND <b> GITLAB </b>",
        "txt_descrip_frontend":"Experience and advanced knowledge in <b> HTML </b>, <b> CSS </b> and <b> JAVASCIPT </b>, as Design Frameworks I manage with <b> BOOTSTRAP </b> currently dabbling with <b> REACT JS </b>",
        "txt_descrip_backend":"Advanced knowledge in <b> PHP </b>, as the main framework I use <b> LARAVEL </b> in its version 5.8 to the most current, on a medium scale I have knowledge in <b> JAVA </b> and <b > MAGIK </b>, I am currently dabbling with <b> NODEJS </b>",
        "txt_titulo_db":"Database",
        "txt_descrip_db":"Experience in database languages: <b> ORACLE </b>, <b> SQL-SERVER </b>, <b> MYSQL </b>",
        "txt_titulo_st":"Tech support",
        "txt_descrip_st":"Advanced knowledge in <b> HARDWARE </b> and <b> SOFTWARE </b> of office applications",
        "txt_titulo_empresas":" Companies in I have collaborated",
        "txt_copyright":"Copyright ©2020 Christian Gutierrez M. || All rights reserved",
        "txt_btn_idioma":"language",
        "txt_btn_idioma_es":"spanish",
        "txt_btn_idioma_en":"english",
        "txt_titulo_proyectos":"Projects",
        "txt_btn_corp":"Corporate",
        "txt_btn_per":"Personal",
        "txt_proyectos_descrip":"Some of my personal and corporate projects in which I have worked"
    }
}


document.querySelectorAll('#navbarNav ul li a').forEach(function(el){
    el.addEventListener('click', e => {
        document.querySelectorAll('#navbarNav ul li').forEach(function(elem){
            elem.classList.remove('active');
        });
        e.target.parentNode.classList.add('active');
    });
});



//titulo principal
var titulo_main_val=document.querySelector('.title-main');


//section nav items
var inicio_val=document.querySelector('.a-home');
var sobre_mi_val=document.querySelector('.a-sobre-mi');
var habilidades_val=document.querySelector('.a-habilidades');
var proyectos_val= document.querySelector('.a-proyectos');
var empresa_val=document.querySelector('.a-empresas');
var btn_idioma=document.querySelector('#btn-idioma');
var btn_idioma_es=document.querySelector('#btn-idioma-es');
var btn_idioma_en=document.querySelector('#btn-idioma-en');

//section presentacion
var profesion_val=document.querySelector('.h4-presentacion');
var btn_contacto_val=document.querySelector('.btn-contacto');

//section sobre mi
var sobre_hola_val=document.querySelector('.h4-hola');
var sobre_descrip1_val=document.querySelector('.p-descripcion-1');
var sobre_titulo_val=document.querySelector('.h1-Acerca-mi');
var sobre_descrip2_val=document.querySelector('.p-descripcion-2');

//section habilidades
var habilidades_titulo_val=document.querySelector('.h1-habilidades');
var habilidades_git_val=document.querySelector('.text-git');
var habilidades_front_val=document.querySelector('.text-frontend');
var habilidades_back_val=document.querySelector('.text-backend');
var habilidades_titulodb_val=document.querySelector('.text-titulo-db');
var habilidades_db_val=document.querySelector('.text-db');
var habilidades_titulost_val=document.querySelector('.text-titulo-st');
var habilidades_st_val=document.querySelector('.text-st');

//section proyectos
var proyectos_titulo_val=document.querySelector('.h1-proyectos');
var proyectos_descripcion_val=document.querySelector('.p-descripcion-proyectos');
var btn_corp_val=document.querySelector('#btn-corp');
var btn_per_val=document.querySelector('#btn-per');

//section empresas
var empresa_titulo_val=document.querySelector('.h1-empresas');

//footer
var footer_empresa_val=document.querySelector('.text-copyright');


document.querySelector('#btn-idioma-en').addEventListener('click',function(e){
    titulo_main_val.innerHTML=obj_idiomas.en.txt_titulo_main;
    inicio_val.innerHTML=obj_idiomas.en.txt_inicio;
    sobre_mi_val.innerHTML=obj_idiomas.en.txt_sobre_mi;
    habilidades_val.innerHTML=obj_idiomas.en.txt_habilidades;
    empresa_val.innerHTML=obj_idiomas.en.txt_empresas;
    profesion_val.innerHTML=obj_idiomas.en.txt_profesion;
    btn_contacto_val.innerHTML=obj_idiomas.en.txt_contacto;
    sobre_hola_val.innerHTML=obj_idiomas.en.txt_hola;
    sobre_descrip1_val.innerHTML=obj_idiomas.en.txt_descripcion_1;
    sobre_titulo_val.innerHTML=obj_idiomas.en.txt_titulo_acerca_mi;
    sobre_descrip2_val.innerHTML=obj_idiomas.en.txt_descripcion_2;
    habilidades_titulo_val.innerHTML=obj_idiomas.en.txt_titulo_habilidades;
    habilidades_git_val.innerHTML=obj_idiomas.en.txt_descrip_git;
    habilidades_front_val.innerHTML=obj_idiomas.en.txt_descrip_frontend;
    habilidades_back_val.innerHTML=obj_idiomas.en.txt_descrip_backend;
    habilidades_titulodb_val.innerHTML=obj_idiomas.en.txt_titulo_db;
    habilidades_db_val.innerHTML=obj_idiomas.en.txt_descrip_db;
    habilidades_titulost_val.innerHTML=obj_idiomas.en.txt_titulo_st;
    habilidades_st_val.innerHTML=obj_idiomas.en.txt_descrip_st;
    empresa_titulo_val.innerHTML=obj_idiomas.en.txt_titulo_empresas;
    footer_empresa_val.innerHTML=obj_idiomas.en.txt_copyright;
    btn_idioma.innerHTML=obj_idiomas.en.txt_btn_idioma;
    btn_idioma_es.innerHTML='<img src="./img/chile.png" alt="flag_cl"> '+obj_idiomas.en.txt_btn_idioma_es;
    btn_idioma_en.innerHTML='<img src="./img/united-kingdom.png" alt="flag_uk"> '+obj_idiomas.en.txt_btn_idioma_en;
    proyectos_titulo_val.innerHTML = obj_idiomas.en.txt_titulo_proyectos;
    proyectos_descripcion_val.innerHTML=obj_idiomas.en.txt_proyectos_descrip;
    btn_corp_val.innerHTML=obj_idiomas.en.txt_btn_corp;
    btn_per_val.innerHTML=obj_idiomas.en.txt_btn_per;
    proyectos_val.innerHTML=obj_idiomas.en.txt_titulo_proyectos;
});

document.querySelector('#btn-idioma-es').addEventListener('click',function(e){
    document.location.reload();
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.btn-to-top').style.display = "block";
    
  } else {
    document.querySelector('.btn-to-top').style.display = "none";
  }
}

document.querySelector('.btn-to-top').addEventListener('click',function(e){
    e.preventDefault();
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
});

document.querySelector('#btn-corp').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.c-corporativos').style.display = 'block';
    document.querySelector('.c-personales').style.display = 'none';
});

document.querySelector('#btn-per').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.c-personales').style.display = 'block';
    document.querySelector('.c-corporativos').style.display = 'none';
});

