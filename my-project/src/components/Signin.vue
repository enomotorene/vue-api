<template>
  <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div id="signin" class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">サインイン</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
           <!-- emailとpasswordの入力欄 -->
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>

    <!-- サインアップページ遷移ボタン -->
    <p>
      アカウントをお持ちではない方
      <router-link to="/signup">新規作成</router-link>
    </p>
        </div>
      </div>
     
    </div>
  </section>
</template>

<script>
import firebase from "firebase"; // firebaseのインポート
export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // signinボタンを押したときに実行されるfunction
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインが成功した場合にメインページに遷移させる
          alert("success : " + user.user.email);
          this.$router.push("/");
        })
        .catch(error => {
          // ログインに失敗した場合
          alert(error.message);
        });
    }
  }
};
</script>

<style>
</style>