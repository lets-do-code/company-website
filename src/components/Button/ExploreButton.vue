<template>
     <button  
     @click="playClickSound()"
     class="border border-[#F53838] bg-[#F53838] py-2 px-5 lg:px-10 hover:text-[#F53838] hover:bg-white duration-300 transition-all active:scale-95 rounded-full text-white font-bold">
        Explore
      </button>
    <audio id="click-audio" src="/click.mp3" preload="auto"></audio>

</template>

<script>
export default{
    name:"ExploreButton",

    methods: {
        playClickSound() {
        const sound = document.getElementById("click-audio");
        sound.currentTime = 0;
        sound.play();
        },
    },
}
</script>


