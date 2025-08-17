<template>
     <button  
     @click="playClickSound()"
     class="border border-[#F53838] text-[#F53838] hover:bg-[#F53838] py-2 hover:text-white duration-300 transition-all active:scale-95 px-5 lg:px-10 rounded-full font-bold">
        Contact Us
      </button>
    <audio id="click-audio" src="/click.mp3" preload="auto"></audio>

</template>

<script>
export default{
    name:"ContactButton",

    methods: {
        playClickSound() {
        const sound = document.getElementById("click-audio");
        sound.currentTime = 0;
        sound.play();
        },
    },
}
</script>


