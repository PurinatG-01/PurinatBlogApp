<template>
  <div class="main-back">
    <div class="card-center">
      <img src="../../assets/light_logo2@2x.png" alt>
      <h1>My name is PURINAT</h1>
      <p>I study in faculty of Information and Communication Technology, Mahidol University, Thailand.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-back {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.card-center {
  font-family: "Overpass Mono", monospace;
  align-self: center;
  color: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-center img {
  height: 205px;
}
.card-center h1 {
  margin: auto 20px;
  font-weight: 100;
  font-size: 2em;
  text-align: center;
}
.card-center p {
  margin: auto 30px;
  margin-top: 10px;
  font-size: 0.7em;
  font-weight: 100;
  text-align: center;
}
</style>
