<template>
    <section data-layername="blogSlider"
        class="relative flex font-bold text-white w-full rounded-none h-[600px] min-h-[600px]">
        <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0895ed7823a3ed749f80ad9ff6af989b746cb8e8f75518dcbd6aa688b0ae5ed0?placeholderIfAbsent=true&apiKey=c81aa461ed88497c9715fa37b92c8996"
            alt="Background image for blog post" class="object-cover inset-0 w-full h-full" />
        <div class="absolute w-full">
            <article
                class="flex max-w-[1400px] mx-auto flex-col items-start  pt-72 pb-16 w-full min-h-[600px] px-5 max-md:pt-48 max-md:max-w-full">

                <div class="md:w-[580px]">
                    <span data-layername="category"
                        class="relative px-2.5 py-1.5 text-xs text-right whitespace-nowrap rounded-lg bg-white/15">
                        ADVENTURE
                    </span>
                    <h2 data-layername="richirdNortonPhotorealisticRenderingAsRealPhotos"
                        class="relative mt-4 text-4xl capitalize max-md:max-w-full">
                        Richird Norton photorealistic rendering as real photos
                    </h2>

                    <div class="flex flex-col md:flex-row gap-2 mt-3 items-start text-[#E5E5E5]">
                        <div class="flex gap-2">
                            <time data-layername="08082021" datetime="2021-08-08">08.08.2021</time>
                            <span class="shrink-0 h-px mt-2.5 border border-solid border-[#E5E5E5] w-[3rem]"
                                aria-hidden="true"></span>
                        </div>

                        <p data-layername="progressivelyIncentivizeCooperativeSystemsThroughTechnicallySoundFunctionalitiesTheCrediblyProductivateSeamlessData"
                            class="self-stretch text-md leading-5 tracking-wide basis-auto">
                            Progressively incentivize cooperative systems through technically sound functionalities. The
                            credibly productivate seamless data.
                        </p>
                    </div>
                    <!-- <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/728a94c592c7a8c12a5252a894d93fa12cbfd55a87f635610440bd5e042fe1c7?placeholderIfAbsent=true&apiKey=c81aa461ed88497c9715fa37b92c8996"
                        alt="Decorative element" class="object-contain mt-16 w-11 aspect-[5.49] max-md:mt-10" /> -->

                </div>

            </article>
        </div>

    </section>
</template>

<script>
export default {
    name: 'Banner'
}
</script>