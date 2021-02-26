<template>
<div id="about">
    <div id="about_wrapper" class="cf">
        <div id="about_title">
            <div>
                <a>About Faith :)</a>
                <h2>Faithとは</h2>
            </div>
        </div>
        <v-row justify="center"> 
        <div id="about_list">
            <ul>
                <li id="about_1">
                    <a>01</a>
                    <div id="yellowline"></div>
                    <dl>
                        <img src="../assets/images/shakehands-icon.png" alt="握手">
                        <dt id="aboutcard_title">信頼</dt>
                        <dd id="aboutcard_comment">お客様から信頼される会社でありたい</dd>
                    </dl>
                </li>
                <li id="about_2">
                    <a>02</a>
                    <div id="yellowline"></div>
                    <dl> 
                        <img src="../assets/images/faith-icon.png" alt="信念">
                        <dt id="aboutcard_title">信念</dt>
                        <dd id="aboutcard_comment">全てに対して誠実であるという信念</dd>
                    </dl>
                </li>
                <li id="about_3">
                    <a>03</a>
                    <div id="yellowline"></div>
                    <dl>
                        <img src="../assets/images/goodprice-icon.png" alt="確信">
                        <dt id="aboutcard_title">確信</dt>
                        <dd id="aboutcard_comment">誰もが活躍できる未来への架け橋となる確信</dd>
                    </dl>
                </li>
              
            </ul>
        </div>
        </v-row>
    </div>
</div>
</template>

<script>

</script>

<style>
div#about{
    background-image: url(../assets/images/about_background.png);
    background-repeat: repeat-x;
    background-size: contain;
    height: 46.13095238vw;
    width: 100%;
}

div#about_title{
    width:42.26190476vw;
	height: 33.33333333vw;
	margin:16.36904762vw 0 3.095238095vw 0;
	background: linear-gradient(to right,#404feb,#5c74f2);
	position: absolute;
    z-index: 2;
}
div#about_title a{
    font-size: 0.833333333vw;
    color:white;
    font-family: 'Lato';
    font-weight: bold;
    display: block;
    margin: 14.58333333vw 0 0 5.357142857vw;
}


div#about_title h2{
    font-size: 2.380952381vw;
    color:white;
    font-family: "游ゴシック";
    font-weight: bold;
    margin:0.595238095vw 0 0 5.357142857vw;
}
div#about_list ul li{
    position: relative;
    z-index: 20;
    float: left;
}


div#about_list ul li#about_1{
    margin: 10.11904762vw 0 0 23.21428571vw;

}
div#about_list ul li#about_2{
    margin: 21.42857143vw 0 0 0;
}
div#about_list ul li#about_3{
    margin: 32.73809524vw 0 0 0;
}
div#about_list ul li dl img{
    margin: 3.571428571vw 0 0 7.55vw;
    height:3.571428571vw
}
div#about_list ul li dl dt{
    margin: 1.785714286vw 0 0 7.5vw;
    font-size: 1.904761905vw;
    color:#404feb
}

div#about_list ul li dl{
    background-image: url(../assets/images/about_content_back.png);
    background-size:19vw;
    height: 17.85714286vw;
    width: 21.42857143vw;
    margin: 0.595238095vw 0 0 3.095238095vw;
}

div#about_list ul li dl dd{
    margin: 0 0 0 2vw;
    font-size:0.892857143vw;
    font-weight: bold;
    color:#404feb
}

div#about_list ul li#about_3 dl dd{
    margin: 0 0 0 0.9vw;
}

div#about_list ul li a{
    font-family: 'Lato';
    font-size:2.976190476vw;
    display: block;
    position:absolute;
    color: #404feb;
    left:1.30952381vw;
    line-height: 0.714285714vw;
}

div#yellowline{
    border-bottom: 0.178571429vw solid #f6ff01;
    position:absolute;
    top:2.380952381vw;
    width:10.71428571vw;
    transform: rotate(-45deg);
}
</style>
