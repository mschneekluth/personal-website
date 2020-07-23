<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Marco Schneekluth</div>
        <div class="text-blue-700 leading-tight">Welcome To My Personal Website</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/hero.svg" alt="hero" class="mx-auto sm:mx-0" style="width=285; height=154;" />
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto py-8">
      <p class="text-lg sm:text-xl">Hello there &#9996;
        <br>
        My Name is Marco and I am based in Germany. I do web development, blogging and love to travel. On this site you can find some projects I am involved in. If you want to get in touch with me just check out my <a href="https://www.linkedin.com/in/marco-schneekluth-03446313b/">Linkedin</a>, <a href="https://www.xing.com/profile/Marco_Schneekluth">Xing</a>  profile or send me an <a href="mail@marcoschneekluth.de">email</a>.</p>

    </div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <div><a href="https://kryptokenner.de">Kryptokenner.de</a></div>
            <div class="text-lg text-gray-600">A blog about usage and investing in cryptocurrency.</div>
          </li>
          <li class="checkmark">
            <div>Pupusa.de</div>
            <div class="text-lg text-gray-600">A site to promote the pupusa, the traditional dish of El Salvador, in German-speaking countries.</div>
          </li>
          <li class="checkmark">
            <div>Augenblicke-Online</div>
            <div class="text-lg text-gray-600">A photography wordpress website. Still under development.</div>
          </li>

        </ul>
      </div> <!-- end projects -->
    </div>

      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">About me</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/about.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            I am interested in the fields of web tracking, web development, cryptocurrencies and fintech. Apart from that, I like to play football in my spare time.
            I am always looking for a good web-based project to strengthen my skills in this field.
          </div>
        </div>
        
      </div> <!-- end get-to-know me -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

