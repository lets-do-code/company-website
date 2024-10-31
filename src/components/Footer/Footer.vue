<template>
    <footer data-layername="footer" class="flex flex-col bg-[#212529] tracking-wider mt-20">
      <div data-layername="footerBg" class="flex flex-col justify-center items-start max-w-[1400px] mx-auto px-5 py-20 w-full max-md:py-24">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-10">
            <section data-layername="column" class="flex flex-col ">
              <div class="flex flex-col items-start  text-[#E5E5E5]">
                <h2 data-layername="contactThePublisher" class="self-stretch text-lg font-bold leading-none text-white">
                  Contact the Publisher
                </h2>
                <a href="mailto:mike@runo.com" data-layername="mikeRunoCom" class="mt-4">mike@runo.com</a>
                <a href="tel:+944450904505" data-layername="944450904505" class="mt-2">
                  +944 450 904 505
                </a>
              </div>
            </section>
            <nav data-layername="column" class="flex flex-col ">
              <div class="flex flex-col grow items-start text-sm text-[#E5E5E5]">
                <h2 data-layername="explorate" class="text-lg font-bold leading-none text-white">
                  Explorate
                </h2>
                <ul class="flex flex-col gap-2 mt-4">
                  <li><a href="#" data-layername="about" >About</a></li>
                  <li><a href="#" data-layername="partners" >Partners</a></li>
                  <li><a href="#" data-layername="jobOpportunities">Job Opportunities</a></li>
                  <li><a href="#" data-layername="advertise" >Advertise</a></li>
                  <li><a href="#" data-layername="membership" >Membership</a></li>
                </ul>
              </div>
            </nav>
            <section data-layername="column" class="flex flex-col ">
              <div class="flex flex-col">
                <h2 data-layername="headquarter" class="text-lg font-bold leading-none text-white">
                  Headquarter
                </h2>
                <address data-layername="191MiddlevilleRoadNy1001SydneyAustralia" class="mt-4 text-sm  leading-5 text-[#E5E5E5] not-italic">
                  191 Middleville Road,<br />NY 1001, Sydney<br />Australia
                </address>
              </div>
            </section>
            <section data-layername="column" class="flex flex-col">
              <div class="flex flex-col text-lg font-bold leading-none text-white whitespace-nowrap max-md:mt-10">
                <h2 data-layername="connections" class="self-start">Connections</h2>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c681442f2074261c4b992f8b41b4ee937206fb87c8d7ab9ab0809e9ccf38de12?placeholderIfAbsent=true&apiKey=c81aa461ed88497c9715fa37b92c8996" alt="Social media connections" class="object-contain mt-4 aspect-[8.62] w-[172px]" />
              </div>
            </section>
          </div>
      </div>
    </footer>

    <footer data-layername="subFooter" class="flex flex-col text-sm text-[#E5E5E5] bg-[#343A40] ">
    <div data-layername="subFooterBg" class="flex flex-wrap gap-5 justify-between max-w-[1400px] mx-auto px-5 py-5 w-full ">
      <p data-layername="2021RunoPublisherStudio" class="font-medium">
        2024 | RUNO Publisher Studio
      </p>
      <button data-layername="subscribeNow" class="text-right" @click="handleSubscribe">
        Subscribe Now
      </button>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>