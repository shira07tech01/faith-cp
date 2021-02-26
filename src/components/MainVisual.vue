<template>
<div id="mainimage">
        <div id="copyright">
            <a>©︎2021 Faith Inc.</a>
        </div>
        <div  id="mainsentence">
            <div id="maintitle"><a>1億総活躍社会へ</a></div>
            <div id="maincontent"><a>家庭・職場・地域で誰もが活躍できる社会促進</a></div>
        </div>
    <div>
        <img id="v-img" src="../assets/images/mainhuman.png" alt="配送、配達、軽作業、軽貨物の人">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style style="scss">

#v-img{
    position: absolute;
    right: 0vw;
    top:0vh;
    z-index: 1; 
    width: 65.5vw;
}
div#mainimage{
    height: 100vh;
}

div#mainimage{
    right: 0px;
    top:0px;
    z-index: 1;
}

#sentence_row{
    margin:17vh 44.6vw 0 0;
}

div#copyright{
    transform: rotate(90deg);
    height: 1.2px;
    position: absolute;
    top:23.81vw;
    left:0px;

}

div#copyright a{
   font-family: 'Lato';
   font-weight: bold;
   color: #404feb;
}

#mainsentence{
    position:relative;
    z-index: 3;
    margin:30vh 0 0 10.3vw;
;
}

#maintitle{
	font-family: 'Loto'; 
}

#maintitle a{
	font-size: 4.88vw;
    padding:1.785vw;
	letter-spacing:0.59vw;
	font-weight: bold;
    color: #404feb;
    font-family:"Sawarabi Gothic";
}

div#maincontent{
	font-family: 'Loto';
	background-image: url(../assets/images/yellowsquare.png);
	background-repeat: no-repeat;
    background-size: 10vw 3vw;
	background-position-y: 4.6vh;
	background-position-x: 18.5vw;
	padding:2.38vw;
	margin-right: 1.785vw;
}

div#maincontent a{
	font-size: 1.85vw; 
	font-weight: bold;
    color: #404feb;
}


</style>