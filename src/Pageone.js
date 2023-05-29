import React from "react";

const Pageone = () => {
  return (
    <>
      <p className="my-4 mx-40">UI/UX refer and earn</p>
      <div className=" flex mx-40 mt-8 justify-between">
        <div className="border rounded-lg justify-center">
          <div className="flex">
            <div className="mx-2 mt-4">
              <p className="text-violet-500">referaal earning</p>
              <p className="font-bold text-2xl"> $2500</p>
            </div>
            <div className="mx-6 mt-4">
              <p className="text-violet-500">referaal earning</p>
              <p className="font-bold text-2xl"> $2500</p>
            </div>
            <div className="mx-2 mt-4">
              <p className="text-violet-500">referaal earning</p>
              <p className="font-bold text-2xl"> $2500</p>
            </div>
          </div>
          <div className="flex justify-center items-center my-4">
            <button className="flex border rounded-3xl bg-violet-500 text-white justify-center p-2">
              Withdraw balance
            </button>
          </div>
        </div>
        <div className="text-violet-500 mr-60">
          <p className="text-2xl"> Your Refral Code</p>
          <p className="border rounded-md border-violet-500 text-center my-4 p-2 ">
            E D C 5 4
          </p>
        </div>
      </div>
      <p className="my-8 mx-40">how does it work ?</p>
      <div className="mx-40">
        <div className="flex">
        <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16" fill="none">
<path d="M16 9C18.1733 9 20.0933 9.52 21.6533 10.2C23.0933 10.84 24 12.28 24 13.84V16H8V13.8533C8 12.28 8.90667 10.84 10.3467 10.2133C11.9067 9.52 13.8267 9 16 9ZM5.33333 9.33333C6.8 9.33333 8 8.13333 8 6.66667C8 5.2 6.8 4 5.33333 4C3.86667 4 2.66667 5.2 2.66667 6.66667C2.66667 8.13333 3.86667 9.33333 5.33333 9.33333ZM6.84 10.8C6.34667 10.72 5.85333 10.6667 5.33333 10.6667C4.01333 10.6667 2.76 10.9467 1.62667 11.44C0.64 11.8667 0 12.8267 0 13.9067V16H6V13.8533C6 12.7467 6.30667 11.7067 6.84 10.8ZM26.6667 9.33333C28.1333 9.33333 29.3333 8.13333 29.3333 6.66667C29.3333 5.2 28.1333 4 26.6667 4C25.2 4 24 5.2 24 6.66667C24 8.13333 25.2 9.33333 26.6667 9.33333ZM32 13.9067C32 12.8267 31.36 11.8667 30.3733 11.44C29.24 10.9467 27.9867 10.6667 26.6667 10.6667C26.1467 10.6667 25.6533 10.72 25.16 10.8C25.6933 11.7067 26 12.7467 26 13.8533V16H32V13.9067ZM16 0C18.2133 0 20 1.78667 20 4C20 6.21333 18.2133 8 16 8C13.7867 8 12 6.21333 12 4C12 1.78667 13.7867 0 16 0Z" fill="url(#paint0_linear_3821_13650)"/>
<defs>
<linearGradient id="paint0_linear_3821_13650" x1="32" y1="7.99999" x2="1.70723e-07" y2="7.99999" gradientUnits="userSpaceOnUse">
<stop stop-color="#800080"/>
<stop offset="1" stop-color="#FF864C"/>
</linearGradient>
</defs>
</svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan  </p>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M26.547 13.4403L14.547 1.44033C14.067 0.960325 13.4003 0.666992 12.667 0.666992H3.33366C1.86699 0.666992 0.666992 1.86699 0.666992 3.33366V12.667C0.666992 13.4003 0.960325 14.067 1.45366 14.5603L13.4537 26.5603C13.9337 27.0403 14.6003 27.3337 15.3337 27.3337C16.067 27.3337 16.7337 27.0403 17.2137 26.547L26.547 17.2137C27.0403 16.7337 27.3337 16.067 27.3337 15.3337C27.3337 14.6003 27.027 13.9203 26.547 13.4403ZM5.33366 7.33366C4.22699 7.33366 3.33366 6.44033 3.33366 5.33366C3.33366 4.22699 4.22699 3.33366 5.33366 3.33366C6.44033 3.33366 7.33366 4.22699 7.33366 5.33366C7.33366 6.44033 6.44033 7.33366 5.33366 7.33366Z" fill="url(#paint0_linear_3821_13656)"/>
<defs>
<linearGradient id="paint0_linear_3821_13656" x1="27.3337" y1="14.0003" x2="0.666992" y2="14.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#800080"/>
<stop offset="1" stop-color="#FF864C"/>
</linearGradient>
</defs>
</svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toasb indxgo </p>
         
        </div>
      </div>
        </div>
        <div className="flex">
        <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar tropub indxgo </p>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast indxgo </p>
          
        </div>
      </div>
        </div>
        <div className="flex">
        <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast veganindxgo </p>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex ">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-rmy. Gastropub indxgo </p>
          
        </div>
      </div>
        </div>
      </div>
      <p className="my-4 mx-40"> Friends who enrolled</p>
      
    </>
  );
};

export default Pageone;
