$( document ).ready(function() {
    
    // Initialisation de la page
    $( 'h3' ).typed({
        strings: ["Appuyez sur une touche pour commencer ..."],
        contenttype: 'text',
        typeSpeed: 5,
        showCursor: false
    })
    
    $( document ).one( "keydown", function(){
        
        $( 'section' ).typed({
            strings: ["Bienvenue sur le CV de Camille Theil, Développeur web. Pour explorer les différents menus, tapez sur la touche correspondante. <br/><br/><br/><br/> 1. Formations <br/> 2. Compétences <br/> 3. Exemple de projet <br/> 4. Contact"],
            contenttype: 'text',
            showCursor: false
        
       })
    });
    
    
    $(document).keypress(function(e) {
    if(e.which == 49 || e.which == 38) {
       
        
        $( 'h2' ).typed({
            strings: ["Formations et Diplômes"],
            contenttype: "test",
            showCursor: false
        })
        $( 'section' ).typed({
            strings: ["09/2006 // 06/2009 Bac ES - Lycée Marcel Pagnol - Marseille (10e) <br/> 09/2011 // 07/2016 Licence de Philosophie - Faculté de lettres d'Aix-en-Provence <br/> 09/2016 // 03/2017 Certification niveau 3 développeur Web - Simplon Coda - Alès <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu"],
            contenttype: 'html',
            showCursor: false
        })
        
        // Create the gif spot
        var Mario = document.createElement('img');
        
        // Set attribute
        Mario.setAttribute('src','assets/mario.gif');
        Mario.setAttribute('id', 'mario');
        
        var Tuyau = document.createElement('img');
        
        // Set attribute
        Tuyau.setAttribute('src','assets/tuyau-final.png');
        Tuyau.setAttribute('id','tuyau');
        
        // appendChild
        document.getElementById('conteneur').appendChild(Tuyau);
        
        // appendChild
        document.getElementById('conteneur').appendChild(Mario);
            
        
        Mario.addEventListener("animationend",function(e){
            document.getElementById('conteneur').removeChild(Mario);
        },false)
        
        Tuyau.addEventListener('animationend', function(e){
            document.getElementById('conteneur').removeChild(Tuyau);
        },false)
        
        
        
        
        
        
    }
        
    else if(e.which == 48 || e.which == 224) {
        
        
        $( 'h2' ).typed({
            strings: [""],
            contenttype: "test",
            showCursor: false
        })
        $( 'section' ).typed({
            strings: ["Bienvenue sur le CV de Camille Theil, Développeur web junior. Pour explorer les différents menus, tapez sur la touche correspondante. <br/><br/><br/><br/> 1. Formations <br/> 2. Compétences <br/> 3. Exemple de projets <br/> 4. Contact"],
            contenttype: 'text',
            showCursor: false
        
       })  
        
    }
    
        // If "é" or "2" is pressed
    else if(e.which == 50 || e.which == 233) {
        
        
        // Reset the "section" DOM
        document.getElementById('content1').innerHTML = "";
        
        // Create a new article
        var newArticle = document.createElement('article');
        
        // appendChild
        document.getElementById('content1').appendChild(newArticle);
        
        // Set ID for futur manipulation
        newArticle.setAttribute('id', 'newArticle');
        // Title typed.js
        
        
        
        $( 'h2' ).typed({
            strings: ["Compétences"],
            contenttype: "test",
            showCursor: false
        })
        // Typed.js Compétences Part I
        $( '#newArticle' ).typed({
            strings: ["<br/><br/><br/> <div><i class='devicon-html5-plain' /> HTML \xa0\xa0\xa0\xa0\xa0 <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /> <br/><i class='devicon-css3-plain'/> CSS \xa0\xa0\xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><br/><i class='devicon-javascript-plain'/> JavaScript <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /> <br/> <i class='devicon-jquery-plain'/> Jquery \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><br/> <i class='devicon-php-plain'/> PHP \xa0\xa0\xa0\xa0\xa0\xa0 <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-half-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-mysql-plain'/> MYSQL \xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-nodejs-plain'/> Node.js \xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-mongodb-plain'/> MongoDB \xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-half-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><br/><br/> <i class='devicon-gimp-plain'/> Gimp  \xa0\xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><i class='devicon-linux-plain'/> Linux \xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/> <i class='devicon-github-plain'/> GitHub \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-trello-plain'/> Trello \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /></div>"],
            contenttype: "text",
            startDelay: 1500,
            showCursor: false
        })
        
        // Create a new article
        var newArticle2 = document.createElement('article');
        
        // AppendChild
        document.getElementById('content1').appendChild(newArticle2);
        
        // Set ID
        newArticle2.setAttribute('id', 'newArticle2');

        // Typed.js Compétences Part II
        $( '#newArticle2' ).typed({
            strings:["<div><i class='devicon-angularjs-plain'/> AngularJS <i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><i class='devicon-react-original'/> React \xa0\xa0\xa0 <i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><i class='devicon-bootstrap-plain'/> Bootstrap <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><i class='devicon-wordpress-plain'/> WordPress <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu</div>"],
            contenttype: "text",
            startDelay: 12000,
            showCursor: false
            })
        
    }
    else if (e.which == 34 || e.which == 51) {
        
        $( 'h2' ).typed({
            strings: ["Projets"],
            contenttype: "test",
            showCursor: false
        })
         $( 'section' ).typed({
             strings: [" <div><br/><br/><br/>01/2017 - UrbanParc - Réalisation d'un site web pour le skatepark d'Alès.<br/><br/>  J'ai notamment participé à l'interface d'administration, au calendrier de réservation et à l'animation général de l'interface uttilisateur. <br/><br/><a target='_blank' href='https://htmlpreview.github.io/?https://github.com/Projet-UrbanParc/UrbanParc-Vitrine/blob/master/index.html'>www.urbanparc.fr</a> (Github preview) <br/><br/> 02/2017 - FinalementCestFacile - Réalisation d'un site web pour pour un professeur particulier de Physique / Mathématique. Livraison d'un site vitrine complet.<br/><br/><a target='_blank' href='http://www.finalementcestfacile.fr/index2.html'>www.finalementcestfacile.fr<a/> (Work in progress)<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu </div>"],
             contenttype: "text",
             showCursor: false
    
    })
    }
    else if (e.which == 52 || e.which == 39) {
        
        $( 'h2' ).typed({
            strings: ["Contact"],
            contenttype: "test",
            showCursor: false
        })
        
        $( 'section' ).typed({
            strings: ["<div>  <i class='fa fa-facebook-official fa-3x' aria-hidden='true'/> \xa0\xa0\xa0\xa0<a href='www.facebook.com'>Camille Theil</a><br/><i class='fa fa-envelope-o fa-3x' aria-hidden='true'/>\xa0\xa0\xa0\xa0<a href='camille@theil.fr'>camille@theil.fr</a> <br/> <i class='fa fa-github fa-3x' aria-hidden='true'/>\xa0\xa0\xa0\xa0\xa0<a target='_blank' href='https://github.com/TheilCamille'>TheilCamille</a> <br/> <i class='fa fa-skype fa-3x' aria-hidden='true'/>\xa0\xa0\xa0\xa0\xa0 Foaly13 <br/> <i class='fa fa-phone-square fa-3x' aria-hidden='true'/>\xa0\xa0\xa0\xa0\xa0 06.18.44.05.12 <br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu </div>"],
            contenttype: "text",
            showCursor: false
        })
        // Create the gif spot
        var Sonic = document.createElement('img');
        
        // Set attribute
        Sonic.setAttribute('src','assets/Sonic-runs.gif');
        Sonic.setAttribute('id', 'sonic');
        
        // appendChild
        document.getElementById('conteneur').appendChild(Sonic);
        
         Sonic.addEventListener("animationend",function(e){
            document.getElementById('conteneur').removeChild(Sonic);
        },false)
    } 
    });

    
});
