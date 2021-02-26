<template>
<div id="service">
    <div id="service_wrapper" class="cf">
    <v-row id="vrowservice" justify="center">
        <div id="service_title">
            <a>SERVICE :)</a>
            <h2>事業説明</h2>
        </div>
    <div id="service_list">
        <ul>
            <li id="service_1">
                <dl>
                    <dt class="servicecard_title">研修</dt>
                    <dd class="servicecard_comment">研修を御社の要としております。弊社独自の研修を行お客様に安心できるサービスを展開しています。</dd>
                </dl>
                </li>
                <li id="service_2">
                    <dl>
                        <dt class="servicecard_title">組織</dt>
                        <dd class="servicecard_comment">どのようなご注文に対しても弊社の抱えるネットワークを駆使してご対応させていただきます。</dd>
                    </dl>
                </li>
                <li id="service_3">
                    <dl>
                        <dt class="servicecard_title">対応</dt>
                        <dd class="servicecard_comment">軽貨物配送はサービス業までございます。配送業務や運転の知識や接客マナーだけでなく、現場で起こりうるお客様からのご要望に対してドライバー一人一人が誠心誠意対応し、ご期待にさせていただきます。</dd>
                    </dl>
                </li>
            </ul>
        </div>
    </v-row>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
div#service{
    background-image: url(../assets/images/SERVICE.png);
    background-repeat: no-repeat;
    height: 950px;
    position: relative;
}

div#service_title{
    width:160px;
	height: 80px;
    position:absolute;
    top:350px;
    margin-left:35px;
}
div#service_title a{
    font-size: 14px;
    font-family: 'Lato';
    font-weight: bold;
    display: block;
    margin-left:46px;
    color:#404feb;
}
div#vrowservice{
    margin-top:350px
}

div#service_title h2{
    font-size: 40px;
    font-family: "游ゴシック";
    font-weight: bold;
    color:#404feb;
    margin-top:10px
}

div#service_list ul li{
    height: 330px;
    width: 450px;
    float: left;
}

li#service_1{
    background-image: url(../assets/images/service_1.png);
    background-repeat: no-repeat;
    
}

li#service_1 dl{
    width:370px;
    height:150px;
    background-color:white;
    border-top: 4px solid yellow;
    margin:240px 0 0 40px;
}

li#service_1 dl dt{
    font-size:20px;
    width:40px;
    margin-left:auto;
    margin-right:auto;
    font-family: "游ゴシック";
    font-weight: bold;
    color:#404feb;
    margin-top:30px;
}

li#service_1 dl dd{
    color:#404feb;
    font-family: "游ゴシック";
    font-weight: bold;
    width:290px;
    margin-left:auto;
    margin-right:auto; 
    margin-top:10px;
    line-height: 24px;
}

li#service_2{
    background-image: url(../assets/images/service_2.png);
    background-repeat: no-repeat;
    margin: 120px 75px 0 75px;
}

li#service_2 dl{
    width:370px;
    height:150px;
    background-color:white;
    border-top: 3px solid yellow;
    margin:240px 0 0 40px;
}
li#service_2 dl dt{
    font-size:20px;
    width:40px;
    margin-left:auto;
    margin-right:auto;
    font-family: "游ゴシック";
    font-weight: bold;
    color:#404feb;
    margin-top:30px;
    font-weight: bold;
}

li#service_2 dl dd{
    color:#404feb;
    font-family: "游ゴシック";
    font-weight: bold;
    width:290px;
    margin-left:auto;
    margin-right:auto; 
    margin-top:10px;
    line-height: 24px;
}

li#service_3{
    background-image: url(../assets/images/service_3.png);
    background-repeat: no-repeat;
}

li#service_3 dl{
    width:370px;
    height:150px;
    background-color:white;
    border-top: 3px solid yellow;
    margin:240px 0 0 40px;
}
li#service_3 dl dt{
    font-size:20px;
    width:40px;
    margin-left:auto;
    margin-right:auto;
    font-family: "游ゴシック";
    font-weight: bold;
    color:#404feb;
    margin-top:30px;
}

li#service_3 dl dd{
    color:#404feb;
    font-family: "游ゴシック";
    font-weight: bold;
    width:290px;
    margin-left:auto;
    margin-right:auto; 
    margin-top:10px;
    line-height: 24px;
}

</style>