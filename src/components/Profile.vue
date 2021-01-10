<template>
  <div class="profile-main">
    <div class="nav-layer">
      <Navbar selected="2" />
    </div>
    <div class="main-layer">
      <div class="profile-layer">
        <h1>PROFILE</h1>
        <img src="../assets/IMG_0988@2x.png" alt />
        <p class="quotes">
          I am know as a student in MUICT15. That’s mean now I’m senior student
          in this year. But the thing is that I’m not actually the genius in
          this path. The truth is that I actually like art.Every kind of art.
          Music, Drawing, Architecture, Photography, Acting, Speaking etc. I
          really like all of it. It’s sound different from my current path.
          That’s why I have a little dream to have a website with my own design
          That’s mean my website will concurrently change from time to time
          depend on my dev skill and design skill. If you have any ideas about
          how it should look. Let me know by contacting me from the contact
          page. Thank you so much.
        </p>
        <div class="detail">
          <b-row>
            <b-col cols="12" lg="4" class="detail-e">
              <h2>Personal Profile</h2>
              <p>
                Name: Purinat
                <br />Surname: Sanbundit <br />Nickname: Fame <br />Age: 20
                <br />Birth Date: 19 August 1998 <br />Height: 181 <br />Weight:
                59-62 kg <br />Nationality: Thai <br />Zodiac: Leo
              </p>
            </b-col>
            <b-col cols="12" lg="4" class="detail-e">
              <h2>Sided Profile</h2>
              <p>
                Hobbies: Play Drums, Listen to Music etc.
                <br />Colors: All
              </p>
              <h2>Academic Profiles</h2>
              <p>
                Joseph Upatham School
                <br />Faculty of ICT, Mahidol University
              </p>
            </b-col>
            <b-col cols="12" lg="4" class="detail-e">
              <h2>Technical Skills</h2>
              <ul>
                <li>
                  <div>C</div>
                  <progress value="50" max="100"></progress>
                </li>
                <li>
                  <div>C#</div>
                  <progress value="25" max="100"></progress>
                </li>
                <li>
                  <div>Python</div>
                  <progress value="75" max="100"></progress>
                </li>
                <li>
                  <div>HTML/CSS</div>
                  <progress value="100" max="100"></progress>
                </li>
                <li>
                  <div>Javascript</div>
                  <progress value="100" max="100"></progress>
                </li>
                <li>
                  <div>Java</div>
                  <progress value="50" max="100"></progress>
                </li>
                <li>
                  <div>Swift</div>
                  <progress value="75" max="100"></progress>
                </li>
                <li>
                  <div>PHP</div>
                  <progress value="25" max="100"></progress>
                </li>
                <li>
                  <div>SQL</div>
                  <progress value="50" max="100"></progress>
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped>
.profile-main {
  width: 100vw;
  height: 200vh;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: #202020;
  -webkit-box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  -moz-box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  color: #f5f5f5;
}
.nav-layer {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}

.main-layer {
  height: 200vh;
  width: 100vw;
}
.profile-layer {
  width: 100vw;
  margin: auto;
  height: 200vh;
  /* background: red; */
  position: absolute;
  z-index: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  overflow: scroll;
}
h1 {
  margin-top: 300px;
  color: #f5f5f5;
  text-align: center;
  letter-spacing: 0.8em;
  font-weight: 100;
}

img {
  margin-top: 10vw;
  width: 12em;
  height: 12em;
  align-self: center;
  border-radius: 50%;
}

.quotes {
  margin-top: 10vw;
  width: 80%;
  color: #f5f5f5;
  align-self: center;
  text-align: center;
}
.detail {
  margin-top: 10vw;
  width: 80%;
  align-self: center;
  text-align: center;
}

.detail-e {
  /* border: solid 10px white; */
  width: 33%;
}

ul {
  list-style-type: none;
}
h2 {
  font-size: 1.5em;
  text-align: left;
}

h2 + p,
h2 + ul {
  text-align: left;
  padding: 0;
}

li div,
li progress {
  width: 50%;
  display: inline-block;
  height: 100%;
  margin: 0;
}
</style>
