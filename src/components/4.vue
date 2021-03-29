<template>
<div>
  <h2>Skills</h2>
<div class="row">

    <div class="left"></div>


    <div class="content">
      
      <div style="width:100%;margin:20px auto;height:25vh">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" style="background: #7baabe;width: 23%;margin-right: 2%;">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>

      <div style="width:100%;margin:20px auto;height:25vh">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" style="background: #7baabe;width: 48%;margin-right: 2%;">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>

    </div>
    

    <div class="right">
        <div class="pNo"></div>
        <div class="pNo"></div>
        <div class="pNo" style="background-color: #EB7077;"></div>
        <div class="pNo"></div>
        <div class="pNo" ></div>
      </div>
</div>


<div  class="downArr">
    <img src="../assets/downArrow.png" alt="">
  </div>
  
</div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'


export default {
  name: '',
  data () {
      return {
        //data list [array]
        someList:[
          {
         html: '1',
         style: {
           'background': '#4abf8a',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '2',
         style: {
           'background': '#4bbfc3',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '3',
         style: {
           'background': '#7baabe',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '4',
         style: {
           'background': '#7caabe',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '5',
         style: {
           'background': '#4abf8a',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '6',
         style: {
           'background': '#4bbfc3',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '7',
         style: {
           'background': '#7baabe',
           'width': '23.5%',
           'margin-right': '2%'
         }
       },
       {
         html: '8',
         style: {
           'background': '#7caabe',
           'width': '23.5%',
           'margin-right': '2%'
         }
       }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          tracking: false,
          thresholdDistance: 100,
          thresholdTime: 300,
          infinite: 4,
          slidesToScroll: 4,
          sloop: true
        }
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 80vh;
  width: 100vw;
  text-align: center
}

.left{
    flex:1;
    max-width: 1;
  }

  .right{
    flex:1;
    max-width: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .content{
    flex:8;
    max-width: 8;
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
  margin-top: 2rem;
}


@media (max-width: 720px) {

    h2{
        font-size: 1rem;
    }
    .content{
      flex: 100%;
    }

    .left{
      display: none;
    }

    .right{
      display: none;
    }

    .downArr > img{
      width: 7rem;
    }
}



</style>
