<template>
  <div id="contactform" >
    <div id="contact_title">
        <a>CONTACT :)</a>
        <h2>お問い合わせ</h2>
    </div>
    <div id="formzone">
      <v-card  flat  style="background-color:#e9edf7;">
        <v-container>
                <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
                  <v-row>
                    <v-text-field
                            class="text-field"
                            v-model="contactForm.name"
                            :rules="contactFormValidation.nameRules"
                            label="名前または法人名"
                            required
                            solo
                            flat
                            dense
                            background-color="#ffffff"
                    ></v-text-field>
                  </v-row>
                  <v-row>>
                    <v-text-field
                            v-model="contactForm.email"
                            :rules="contactFormValidation.emailRules"
                            label="メールアドレス"
                            required
                            solo
                            flat
                            dense
                            background-color="#ffffff"
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                            v-model="contactForm.email"
                            :rules="contactFormValidation.emailRules"
                            label="電話番号"
                            required
                            solo
                            flat
                            dense
                            background-color="#ffffff"
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                            v-model="contactForm.email"
                            :rules="contactFormValidation.emailRules"
                            label="題目"
                            required
                            solo
                            flat
                            dense
                            background-color="#ffffff"
                    ></v-text-field>
                  </v-row>
                    <v-row>
                    <v-textarea
                            v-model="contactForm.contents"
                            :rules="contactFormValidation.contentsRules"
                            label="内容"
                            required
                            solo
                            flat
                            dense
                            background-color="#ffffff"
                    ></v-textarea>
                    </v-row>
                    <v-btn
                            :loading="contactForm.loading"
                            :disabled="!contactFormValidation.valid"
                            @click="sendMail()"
                            large
                            color="#f6ff00"
                            rounded
                            class="btn_style"
                    ><v-icon left color="#404feb">mdi-send</v-icon><a style="color:#404feb;">送信</a>
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>

    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
div#contactform{
	background-image: url(../assets/images/CONTACT.png);
	background-repeat: no-repeat;
	height: 900px;
	width: 100%;
	position: relative;
}

div#contact_title{
  width:100%;
	height: 680px;
	background: linear-gradient(to right,#404feb,#5c74f2);
	position: absolute;
    right:0;
    top:210px;
    z-index: 2;
}
div#contact_title a{
    font-size: 14px;
    color:white;
    font-family: 'Lato';
    font-weight: bold;
    display: block;
    margin: 245px 0 0 90px;
}


div#contact_title h2{
    font-size: 40px;
    color:white;
    font-family: "游ゴシック";
    font-weight: bold;
    margin:10px 0 0 90px;
}

div#formzone{
	width: 800px;
  margin-top:210px;
	margin-left: auto;
  margin-right: auto;
	height: 680px;
	position: relative;
	z-index:10;
  background-color: #e9edf7;
}

.text-field{
  width:300px;
  border-radius:none;
}
.btn_style{
  margin-left:470px;
  width:240px;
}

</style>