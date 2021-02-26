<template>
<header>
    <div id="left_logo"><img src="../../assets/images/logo.svg" alt="Faith"></div>
    <div id="right_contact"><img src="../../assets/images/mail.png" alt="問い合わせ"></div>
      <v-row id="header_centerbar" justify="center">
        <nav>
            <ul>
                <li><a href="#">ホーム</a></li>
                <li><a href="#">事業説明</a></li>
                <li><a href="#">採用情報</a></li>
                <li><a href="#">募集要項</a></li>
                <li><a href="#">問い合わせ</a></li>
                <li><a href="#">会社情報</a></li>
                <div class="clearfix"></div>
            </ul>
        </nav>
        <div id="telnumber">
            <a>03-6233-9012</a>
            <p>9~18時まで対応</p>
        </div>
        <div id="line">
            <img src="../../assets/images/line.png" alt="line友達追加">
        </div>
      </v-row>
</header>
</template>

<script>

</script>

<style>
header {
  width: 100vw;
  height: 5.35vw;
	position: relative;
	z-index: 2;
}

div#left_logo{
	width:10vw;
	height: 10vw;
	margin:3.8vw 3vw 0 0;
	background: linear-gradient(to right,#404feb,#5c74f2);
	border-radius: 0px 15px 15px 0px;
	position: absolute;
}
div#left_logo img{
	margin:3vw 0px 0px 3vw;
  width:4vw;
}

header nav {
	float:left;
	margin-top: 2.85vw;
	margin-right: 0px;
  text-decoration: none;
}

header nav ul li {
	float:left;
  font-size: 1.13vw;
  padding-left: 1.48vw;
  padding-right: 1.48vw;
}

header nav ul li a{
	font-weight: bold;
}

div#telnumber{
	float: left;
	border: 0.238095238vw solid #404feb;
	border-radius: 0.476190476vw;
	width:11vw;
	height: 3vw;
	background-image:url(../../assets/images/tel_logo.png) ;
	background-repeat: no-repeat;
  background-size: 1.6vw;
	background-position-y: 0.4vw;
	background-position-x: 0.8vw;
	margin: 1.547619048vw 1.071428571vw 0 1.19047619vw;
	text-align: center;
}

div#telnumber a{
	font-weight:bold;
	display: block;
	margin-top: 0.2vw;
	margin-left:1.5vw;
	font-family: 'Lato';
	font-size: 1.071428571vw;
  color: #404feb;
}


div#telnumber p{
	font-family: 'Lato';
	font-size: 0.714285714vw;
  color:#404feb;
  font-weight: bold;
  line-height: 0.119047619vw;
  margin-right: 0vw;
}

div#line{
  position:absolute;
	width :5.357142857vw;
	height:5.357142857vw;
  background-color: #00b900;
  right: 5.357142857vw;
  margin-top:10px;
  border-radius: 15px 0px 0px 15px;
}

div#line img{
  margin: 2.083333333vw 0 0 2.083333333vw;
}


div#right_contact{
	width:5.357142857vw;
	height:5.238095238vw;
	background: linear-gradient(to right,#404feb,#5c74f2);
	border-radius: 0px 0px 0px 0px;
  position:absolute;
  z-index:2;
  right:0px;
  top:0px
}

div#right_contact img{
	margin: 2.083333333vw 0 0 2.083333333vw;
} 

#header_centerbar{
  height: 5.357142857vw; 
}
</style>