<template>
  <div class="main-back">
    <img src="../../assets/profilePic.jpg" alt>
    <div class="card-center">
      <h1>My name is PURINAT</h1>
      <p>I study in faculty of Information and Communication Technology, Mahidol University, Thailand.</p>
    </div>
    <div class="tab"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-back {
  width: 100%;
  height: 100%;
  background: #202020;
  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.338);
  -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.338);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.338);
  display: flex;
  align-items: center;
  /* border: red solid 3px; */
}
.main-back img {
  height: 100%;
  /* width: 40%; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.card-center {
  font-family: "Overpass Mono", monospace;
  align-self: center;
  color: #f5f5f5;
  width: 900px;
}

.card-center h1 {
  margin: auto 20px;
  font-weight: 100;
  font-size: 30px;
  text-align: center;
}
.card-center p {
  margin: auto 30px;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 100;
  text-align: center;
}
.tab {
  width: 70px;
  height: 100%;
  background-color: #f5f5f5;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
