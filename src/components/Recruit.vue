<template>
<div id="recruit">
    <div id="recruit_wrapper" class="cf">
        <div id="recruit_contents">
        <div id="recruit_sentence">
          <div id="recruit_title">
            <a>RECRUIT :)</a>
            <h2>採用情報</h2>
          </div>
          <a id="perfect">完全出来高制採用</a>
          <p id="p_style">弊社では各ドライバーさんの<br>生活スタイルに合わせて<br>働くことができます。<br>ドライバーの能力、お仕事内容によって<br>案件ごとの給与は異なります。</p> 
          <a id="man">働き方次第で月収100万円以上も!!</a>
          <p>*ご希望の配達エリアやシフトなど寄り添わせていただきます!!ぜひお聞かせください!</p>
        </div>
        </div>
        <v-row id="vrowrecruit" justify="center">
        <div id="recruit_list">
            <ul>
                <li id="listA">
                    <div id="blueline"></div>
                    <dl id="recruit_A">
                        <a>CASE//01</a>
                        <v-row justify="center"><dt class="recruitcard_title">Aさん</dt></v-row>
                        <v-row justify="center"><dd class="recruitcard_coment">学生さん・主婦さんの場合</dd></v-row>
                        <v-row justify="center"><div class="whiteline"></div></v-row>
                        <v-row justify="center"><dd>1案件¥15,000 × 週3日</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd>¥45,000 × 4週</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd class="yellow_strong">¥180,000</dd></v-row>
                    </dl>
                </li>
                <li id="listB">
                    <div id="blueline"></div>
                    <dl id="recruit_B">
                        <a>CASE//02</a>
                        <v-row justify="center"><dt class="recruitcard_title">Bさん</dt></v-row>
                        <v-row justify="center"><dd class="recruitcard_coment">ダブルワーカーさんの場合</dd></v-row>
                        <v-row justify="center"><div class="whiteline"></div></v-row>
                        <v-row justify="center"><dd>1案件¥25,000 × 週3日</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd>¥75,000 × 4週</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd class="yellow_strong">¥300,000</dd></v-row>
                    </dl>
                </li>
                <li >
                    <div id="blueline"></div>
                    <dl id="recruit_C">
                        <a>CASE//03</a>
                        <v-row justify="center"><dt class="recruitcard_title">Cさん</dt></v-row>
                        <v-row justify="center"><dd class="recruitcard_coment">専業ドライバーさんの場合</dd></v-row>
                        <v-row justify="center"><div class="whiteline"></div></v-row>
                        <v-row justify="center"><dd>1案件¥40,000 ×（1日1案件）×週5日</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd>¥200,000×4週</dd></v-row>
                        <v-row justify="center"><dd class="deg90">=</dd></v-row>
                        <v-row justify="center"><dd class="yellow_strong">¥800,000</dd></v-row>
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

<style scoped>
div#recruit{
    background-position: top right;
    background-image: url(../assets/images/RECRUIT.png);
    background-repeat: no-repeat;
    position: relative;
    height: 1000px;
    width:100%;
}

div#recruit_contents{
    width: 1680px;
    height: 660px;
    position:absolute;
    right:0;
    top:180px;
    background-color: #e9edf7;
    z-index: 1;
}
div#recruit_title{
   margin-top:120px 
}
div#recruit_title a{
  font-weight: bold;
  font-family: "Lato";
}
div#recruit_title h2{
  font-size: 40px;
  font-weight: bold;
  font-family: "游ゴシック";
}

div#recruit_sentence{
    float:right;
    text-align: end;
    margin-right: 90px;
}


div#vrowrecruit{
  margin:130px 440px 0 0;
}

div#recruit_list ul li{
    float: left;
    position: relative;
    z-index: 2;
    margin-right: 10px;
}

li dl{
    height: 510px;
    width: 310px; 
    margin-left:50px;
    z-index:2;
    position: relative;
}
div#recruit_list ul li#listA {
  margin-top:240px;
}
div#recruit_list ul li#listB{
  margin-top:120px;
}
li dl#recruit_C{
    background-image: url(../assets/images/recruit_C.png);
    background-repeat: no-repeat;
}

li dl#recruit_A{
    background-image: url(../assets/images/recruit_A.png);
    background-repeat: no-repeat;
}
li dl#recruit_B{
    background-image: url(../assets/images/recruit_B.png);
    background-repeat: no-repeat;
}
li dl#recruit_C{
    background-image: url(../assets/images/recruit_C.png);
    background-repeat: no-repeat;
}

div#blueline{
    border-bottom: 3px solid #859ff3;
    position:absolute;
    top:40px;
    width:180px;
    transform: rotate(-45deg);
    z-index:1;
}

div#recruit_list ul li dl{
  color:white;
  font-family:"游ゴシック";
}

div#recruit_list ul li dl dd{
  font-weight: bold;
}


div#recruit_list ul li dl a{
  color:#f6ff01;
  font-weight: bold;
  font-size:14px;
  font-family: 'Lato';
  width:30px;
  display: block;
  transform:rotate(90deg);
  position: absolute;
  top:30px;
  left:20px;
}

.whiteline{
  width:25px;
  height: 3px;
  background-color:white;
  margin:10px 0 20px 0;
}

.recruitcard_title{
  font-weight: bold;
  font-size:20px;
  margin-top:145px;
}

.recruitcard_coment{
  margin-top:10px;
  font-weight:bold;
}

.yellow_strong{
  color:#f6ff01;
  font-size:30px;
}
.deg90{
  transform: rotate(90deg);
}

#man{
  font-size:46px;
  font-weight: bold;
  background-color:#f6ff00;
  display: inline-block;
  margin-top:50px
}

#perfect{
  background-color:#f6ff00;
  display: inline-block;
  margin-top:50px;
  font-size:25px;
  font-weight: bold;
}

#p_style{
  line-height: 28px;
  margin-top:10px;
  font-size:16px;
  font-weight: bold;
  font-family: "游ゴシック";
}

</style>