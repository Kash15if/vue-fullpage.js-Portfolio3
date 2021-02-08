<template>
<div>

  
    <h2>Projects</h2>
<div class="row">

    <div class="left"></div>


    <div class="content">
        <div class="top"><img src="../assets/proj-gif/covid19.gif" alt="" style="height: 100%; width:100%;"></div>
        <div class="left"><img src="../assets/proj-gif/quiz.gif" alt="" style="height: 100%; width:100%;"></div>
        <div class="right"><img src="../assets/proj-gif/portfolio.gif" alt="" style="height: 100%; width:100%;"></div>
    </div>
    

    <div class="right">
        <div class="pNo"></div>
        <div class="pNo"></div>
        <div class="pNo"></div>
        <div class="pNo"  style="background-color: #92FFBE;"></div>
        <div class="pNo"></div>
    </div>
</div>

<div class="AllP">
  <button>All Projects &#8594;</button>
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
  height: 60vh;
  width: 100vw;
  text-align: center
}

.row > .left{
    flex:2.5;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .row > .right{
    flex:2.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .row > .content{
    flex:5;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

.content > .top{
       flex: 100%;
       margin: 10px;
       height: 45%; 
       background-color: white;
  }
.content > .left{
      flex: 40%;
      height: 45%;
      margin: 10px;
      background-color: white;
    }
.content > .right{
      flex: 40%;
      height: 45%;
      margin: 10px;
      background-color: white;
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

.AllP{
  text-align: center;
  font-size: 3rem;
}

.AllP > button{
  width: auto;
  background-color: #92FFBE;
  color: #000;
  margin-left: auto;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
}


@media (max-width: 700px) {

  .row > .left{
    display: none;
  }

  .row > .right{
    display: none;
  }

  .row > .content{
    flex:100%;
    padding: 0 5% 0 5%;
  }

  .content > .top{
       margin: 3px;
  }
.content > .left{
      margin: 3px;
    }
.content > .right{
      margin: 3px;
    }

  .downArr > img{
      width: 7rem;
    }

  .AllP > button{
  border: none;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 2px;
}

h2{
  font-size: 1.2rem;
  margin: .5rem;
}

}


</style>
