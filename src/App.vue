<template>
<div>

    <full-page ref="fullpage" :options="options" id="fullpage" >
  
      <div class="section" >
      <Bio/>
    </div>
    
    



    <div class="section">
      <Education/>
    </div>


    <div class="section">
      <Skills/>
    </div>


    <div class="section">
      <Projects/>
    </div>

    <div class="section">
      <Contacts/>
    </div>

  </full-page>
    
</div>
</template>

<script>

import Bio from './components/1.vue'
import Education from './components/2.vue'
import Projects from './components/3.vue'
import Skills from './components/4.vue'
import Contacts from './components/5.vue'

export default {
  name: "App",
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Your First Slideshow',
    description: 'A boilerplate to get you started',
    path: 'your-first-slideshow'
  },
  components: {
    Bio,
    Education,
    Skills,
    Projects,
    Contacts
  }
}
</script>

<style>
 
</style>
