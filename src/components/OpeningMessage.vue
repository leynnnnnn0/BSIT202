<script setup>
</script>

<template>
  <body class="opening-message-body FLEX-COLUMN">
    <img class="bsit-202-logo" src="/BSIT202LOGO.png" alt="logo" />
    <div class="about-bsit-202">
      <h3 class="HEADER-SMALL M-TOP-2">About BSIT202 Bardagulan</h3>
      <p class="P-SMALL">
        BSIT202 Bardagulan is a delightful online platform crafted purely for amusement, taking its
        inspiration from the renowned website named Chatkool. Here, individuals are encouraged to
        openly and unabashedly express their sentiments, whether they're directed towards others or
        anything else. It serves as a safe haven for those who may hesitate to convey their emotions
        directly, providing a space where one can articulate their thoughts freely and without
        inhibition. So, whether you're yearning to share your feelings about someone special, or
        perhaps harbor apprehensions about expressing certain sentiments, fear not—BSIT202
        Bardagulan welcomes you with open arms. May your experience within this whimsical realm be
        nothing short of delightful and fulfilling.
      </p>
    </div>
    <div class="terms-and-conditions-bsit-202">
      <h3 class="HEADER-SMALL M-TOP-1 WARNING-MESSAGE">TERMS AND CONDITION</h3>
      <p class="P-SMALL">
        Welcome to our BSIT202 Bardagulan! Before you proceed, please take a moment to review our
        terms and conditions. By accessing or using our services, you agree to abide by these terms.
        <br />
        <br />
        <span class="P-HIGHLIGHT">Zero Tolerance for Racism:</span> Racism in any form is strictly
        prohibited on our platform. We foster an inclusive and respectful community where
        individuals of all backgrounds are valued and treated with dignity.
        <br />
        <br />
        <span class="P-HIGHLIGHT">Protection Against Sexual Abuse:</span> We unequivocally condemn
        any form of sexual abuse, especially towards girls. Our platform is committed to providing a
        safe environment free from harassment or exploitation of any kind.
        <br />
        <br />
        <span class="P-HIGHLIGHT">No Hate Speech Directed at School Personnel or Teachers:</span>
        Sending hate speech or derogatory remarks towards any school personnel or teacher is
        unacceptable. We promote constructive communication and mutual respect among all members of
        the educational community.
        <br />
        <br />
        <span class="P-HIGHLIGHT">Death Threats:</span> Any communication containing death threats
        will not be tolerated on our platform. Such behavior poses a serious threat to the safety
        and well-being of others and will result in immediate action.
      </p>
    </div>
    <div class="confirmation FLEX M-TOP-2">
      <input type="checkbox" />
      <p>I read the terms and conditions</p>
    </div>
    <button @click="$emit('handleClick')" class="proceed M-TOP-1">Proceed to chat</button>
  </body>
</template>

<style scoped>
.opening-message-body {
  background: var(--yellow);
  padding: var(--padding-5);
}
.bsit-202-logo {
  width: 150px;
  border-radius: 50px;
  align-self: center;
}

.proceed {
  width: 200px;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
}

</style>
