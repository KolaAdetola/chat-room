import React from "react";

const Class = () => {
  return (
      <div className="flex items-center gap-4 flex-col  px-40 justify-between">
        <div className="flex items-center gap-4 bg-black w-full px-4 py-3 justify-between">
          <div class="flex items-center gap-4">
            <div
              class="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
              style={{backgroundImage: 'url("https://th.bing.com/th/id/R.060fdcd749da109e5c8c83c065db9245?rik=QSxLofKkrkofHA&pid=ImgRaw&r=0")'}}
            >
              {/* <img src="" alt="" className="size-16" width="150px" height="48px" /> */}
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-[#111517] text-base font-medium leading-normal line-clamp-1">Math 101</p>
              <p class="text-[#647987] text-sm font-normal leading-normal line-clamp-2">5 students · 4 classes</p>
            </div>
          </div>
          <div class="shrink-0">
            <div class="text-[#111517] flex size-7 items-center justify-center" data-icon="DotsThree" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
              </svg>
            </div>
          </div>




















            {/* <img src="https://th.bing.com/th/id/R.060fdcd749da109e5c8c83c065db9245?rik=QSxLofKkrkofHA&pid=ImgRaw&r=0" alt="" className="w-14 h-12"  width="100px" height="48px"     />
            <div className="w-14 h-12 border ">
              
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111517] text-base font-medium leading-normal line-clamp-1">History 101</p>
              <p className="text-[#647987] text-sm font-normal leading-normal line-clamp-2">3 students · 4 classes</p>
            </div> */}
        </div>
        
      </div>
  );
};

export default Class;
