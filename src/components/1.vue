<template>
<div>
  
<div class="row">

  <div class="right">
    <div class="pNo" style="background-color: #92FFBE;"></div>
    <div class="pNo"></div>
    <div class="pNo"></div>
    <div class="pNo"></div>
    <div class="pNo"></div>
  </div>

  <div class="photo">
    <img class="img1" src="../assets/myphoto.jpg" alt="">
  </div>

  <div class="content">
    <h5 >Hi, I'm</h5>
    <h1 >Kashif Ahmad</h1>
    <p>A Focused and enthusiastic Full Stack 
      Developer with a keen interest in web and android development and 
      solving DSA problems.Worked on various technologies like git, 
      cloud, devops, web-scrapping, etc.
    </p>
    <br><br>
  </div>
  
  <div class="left">
    <div class="logo"><img src="../assets/logos/facebook.svg" alt=""></div>
    <div class="logo"><img src="../assets/logos/linkedin.svg" alt=""></div>
    <div class="logo"><img src="../assets/logos/github.svg" alt=""></div>
  </div>

</div>    

<div class="downArr">
  <img src="../assets/downArrow.png" alt="">
</div>

</div>
</template>

<script>
export default {
  name: ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 90vh;
  width: 100vw;
  flex-direction: row-reverse;
  text-align: center
}

.left{
    flex:2;
    max-width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

.right{
    flex:1;
    max-width: 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
.content{
    flex:5;
    max-width: 40%;
    text-align: left;
    padding: 30px;
  }
.photo{
    flex:4;
    max-width: 305;
    padding: 30px;
  }

.photo > img{
  width: 70%;
  height: auto;
  border-radius: 50%;
  border: 10px solid #E4FEF2;
  
}

h1{
  font-size: 3.5rem; font-weight: bolder;
}

h5{
  font-size: 2rem; font-weight: bold;
}

p{
  font-size: 1rem; font-weight: 400;
}

.downArr{
  position: absolute;
  bottom:10px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.downArr > img{
  width: 10rem;
}

.pNo{
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    margin: 15px 30px 15px 0;
}

.logo > img{
    width: 55px;
    height: 55px;
    margin: 20px 0px 20px 0;
}
@media (max-width: 600px)  {

h1{
  font-size: 2.5rem;
}

h5{
  font-size: 1.2rem;
}

p{
  font-size: 0.9rem;
}

  .left{
    display: none;
  }
  .right{
    display: none;
  }
  .content{
    flex:100%;
    max-width: 100%;
    padding-left: 0px 15px 5px 15px;
  }
  .photo{
    flex:100%;
    max-width: 100%;
    padding: 20px;
  }

  .photo > img{
  width: 60%;
  height: auto;
  border-radius: 50%;
  border: 5px solid #E4FEF2;
  
}


.downArr > img{
  width: 7rem;
}

}

</style>
