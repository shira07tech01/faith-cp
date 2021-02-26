<template>
  <v-app id="app">
    <Header />
    <MainVisual />
    <AboutFaith />
    <Service/>
    <Recruit/>
    <Requirements/>
    <ContactForm/>
    <Footer/>
  </v-app>
</template>
<script>

import Header from './components/Header/Header'
import MainVisual from './components/MainVisual'
import AboutFaith from './components/AboutFaith'
import Service from './components/Service'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Recruit from './components/Recruit'
import Requirements from './components/Requirements'

export default {
  components: { Header, MainVisual, AboutFaith,Service,ContactForm,Footer,Recruit,Requirements},
  
}
</script>

<style lang="scss">
@import './css/reset.css';
@import url('https://fonts.googleapis.com/earlyaccess/sawarabigothic.css');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#404feb;
	font-size: 14px;
	font-family: "游ゴシック","メイリオ", "Meiryo", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: bold;
}

a {
	color:#404feb;
	text-decoration:none;
}

</style>
