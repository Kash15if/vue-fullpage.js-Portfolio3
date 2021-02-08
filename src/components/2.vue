<template>
<div>

<h2>Education</h2>

<div class="row">

    <div class="left"></div>


    <div class="content">
        <h1>B.Tech in Computer Science and Engineering</h1>
        <h5>Expected July 2021</h5>
        <h5>CGPA:- 7.23/10</h5><br>
        <h5>Related Coursework:- Data Structure and Algorithm, DBMS, Software Engineering.</h5>

        <br><br>

        <h1>Class XII , SAM Secondary High School</h1>
        <h5>2014-16</h5>
        <h5>Percentage: 76.8/100</h5><br>
        <h5>Relevant Coursework: Science</h5>
    </div>
    

    <div class="right">
        <div class="pNo"></div>
        <div class="pNo" style="background-color: #92FFBE;"></div>
        <div class="pNo"></div>
        <div class="pNo"></div>
        <div class="pNo"></div>
      </div>
</div>

<div  class="downArr">
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
  height: 70vh;
  width: 100vw;
  text-align: center
}

.left{
    flex:2;
    max-width: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right{
    flex:1;
    max-width: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .content{
    flex:5;
    max-width: 9;
    text-align: left;
    padding: 30px;
  }

  .pNo{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  margin: 15px 30px 15px 0;
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

h2{
  text-align: center;
  font-size: 2rem;
  margin: 2rem;
}

@media (max-width: 720px) {

    .content{
      flex: 100%;
    }

    .left{
      display: none;
    }

    .right{
      display: none;
    }
    h1{
      font-size: 1.4rem;
    }

    h5{
      font-size: 0.7rem;
    }

    .downArr > img{
      width: 7rem;
    }

    h2{
      font-size: 1.2rem;
      margin: .5rem;
    }
}
</style>
