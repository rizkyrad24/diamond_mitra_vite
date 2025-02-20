<template>
  <Loading :isVisible="isLoading" />
  <ModalFailed
    :isVisible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <div>
    <div class="w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse"></div>
  </div>
  <div class="px-4 py-3">
    <div class="h-auto w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
      <div class="flex">
        <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="28" fill="#1F5AAD" />
        </svg>
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Dashboard</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">Dashboard Kemitraan</h1>
      <div class="blue-box mt-3 ml-4 mr-4 w-[1046px] h-[100px] relative">
        <div class="flex items-start">
          <div>
            <div class="flex items-center">
              <svg width="14" height="18" class="mb-1" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99988 2.4375C5.86079 2.4375 4.93738 3.36091 4.93738 4.5C4.93738 5.63909 5.86079 6.5625 6.99988 6.5625C8.13897 6.5625 9.06238 5.63909 9.06238 4.5C9.06238 3.36091 8.13897 2.4375 6.99988 2.4375ZM3.43738 4.5C3.43738 2.53249 5.03237 0.9375 6.99988 0.9375C8.9674 0.9375 10.5624 2.53249 10.5624 4.5C10.5624 6.46751 8.9674 8.0625 6.99988 8.0625C5.03237 8.0625 3.43738 6.46751 3.43738 4.5ZM2.15855 14.6113C3.65053 15.2242 5.28499 15.5625 7.00012 15.5625C8.71508 15.5625 10.3494 15.2243 11.8412 14.6115C11.5564 12.1907 9.49739 10.3125 6.99988 10.3125C4.50243 10.3125 2.44351 12.1906 2.15855 14.6113ZM0.625844 15.0758C0.685608 11.6063 3.5164 8.8125 6.99988 8.8125C10.4834 8.8125 13.3143 11.6065 13.3739 15.076C13.379 15.3738 13.2075 15.6464 12.9368 15.7706C11.1286 16.6003 9.1173 17.0625 7.00012 17.0625C4.88274 17.0625 2.87129 16.6002 1.06292 15.7703C0.79225 15.6461 0.620715 15.3735 0.625844 15.0758Z"
                  fill="white"
                />
              </svg>
              <h1 class="ml-[6px] mb-1 text-white text-[15px] font-sans font-semibold">KEMITRAAN BISNIS</h1>
            </div>
            <span class="flex text-white font-sans font-normal text-[20px] px-5"> {{ jabatan }} Sub Bidang Kemitraan Bisnis {{ bisnisType || "Konektivitas dan Infrastruktur" }} </span>
          </div>
          <svg class="absolute right-0 top-0 w-auto h-[100px] rounded-md" width="246" height="100" viewBox="0 0 246 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="247.935" height="123.968" rx="50" transform="matrix(0.82137 0.570396 -0.82137 0.570396 130.625 0)" fill="#91BEF7" />
            <rect x="74.8809" y="-21" width="288" height="100" rx="50" fill="white" fill-opacity="0.3" />
            <rect x="0.693295" y="-0.350537" width="208.276" height="139.666" rx="49.5" transform="matrix(0.409185 -0.912452 0.977404 0.211378 0.752225 50.3112)" stroke="white" stroke-opacity="0.3" />
          </svg>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-[338px] h-[88px] border-[1px] rounded-lg border-[#0EA976] bg-[#0EA976] mt-6 ml-4 flex items-center justify-between px-4">
          <div>
            <h1 class="text-[16px] font-sans font-normal text-[#FFFFFF]">Pengajuan Dalam Proses</h1>
            <span class="text-[24px] font-sans font-bold text-[#FFFFFF]">{{ summaryData?.totalHplus7 }}</span>
          </div>
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="19.5176" cy="20.0001" rx="19.4824" ry="19.6417" fill="white" />
            <path d="M10 20.96V23C10 28 12 30 17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17" stroke="#1D966E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23 18.38L24.12 17.25" stroke="#1D966E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.8799 20L18.6199 22.75L21.1699 20.21" stroke="#1D966E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="w-[338px] h-[88px] border-[1px] rounded-lg border-[#FFA229] bg-[#FFA229] mt-6 ml-4 flex items-center justify-between px-4">
          <div>
            <h1 class="text-[16px] font-sans font-normal text-[#FFFFFF]">Pengajuan H-7 Due Date</h1>
            <span class="text-[24px] font-sans font-bold text-[#FFFFFF]">{{ summaryData?.totalHmin7 }}</span>
          </div>
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="19.5176" cy="20.0001" rx="19.4824" ry="19.6417" fill="white" />
            <path d="M30 16C30 12 28 10 24 10H16C12 10 10 12 10 16V29C10 29.55 10.45 30 11 30H24C28 30 30 28 30 24V20" stroke="#FFA229" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M23.5098 19.7399L24.1598 19.0899C24.1998 19.0499 24.2398 19.0099 24.2798 18.9599C25.0898 18.0999 25.4098 17.0899 24.1598 15.8399C22.8398 14.5199 21.7998 14.9499 20.9098 15.8399L15.7198 21.0299C15.5198 21.2299 15.3298 21.6199 15.2898 21.8999L15.0098 23.8799C14.9098 24.5999 15.4098 25.0999 16.1298 24.9999L18.1098 24.7199C18.3898 24.6799 18.7798 24.4899 18.9798 24.2899L20.9198 22.3499"
              stroke="#FFA229"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M20.1699 16.5801C20.6099 18.1501 21.8399 19.3901 23.4199 19.8301" stroke="#FFA229" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="w-[338px] h-[88px] border-[1px] rounded-lg border-[#FF5656] bg-[#FF5656] mt-6 ml-4 flex items-center justify-between px-4">
          <div>
            <h1 class="text-[16px] font-sans font-normal text-[#FFFFFF]">Pengajuan Melewati Due Date</h1>
            <span class="text-[24px] font-sans font-bold text-[#FFFFFF]">{{ summaryData?.totalDueDate }}</span>
          </div>
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="19.5176" cy="20.0001" rx="19.4824" ry="19.6417" fill="white" />
            <path d="M21.4902 18.0099L22.3302 17.1699" stroke="#CA3131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6699 22.8301L19.4199 20.0801" stroke="#CA3131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.3299 22.8299L16.6699 17.1699" stroke="#CA3131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.5 20.96V23C9.5 28 11.5 30 16.5 30H22.5C27.5 30 29.5 28 29.5 23V17C29.5 12 27.5 10 22.5 10H16.5C11.5 10 9.5 12 9.5 17" stroke="#CA3131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div>
        <div class="flex">
          <div class="w-[676px] h-[416px] border-collapse rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 mt-6">
            <div class="flex items-center">
              <h1 class="text-[20px] font-sans font-semibold text-[#000000] ml-6 mt-6">Progress Kemitraan</h1>
              <span class="text-[16px] font-sans font-normal text-[#000000] ml-2 mt-6">(per Tahun)</span>
              <!--Date-->
              <div ref="datePickerContainer" class="relative">
                <div
                  ref="datePickerButton"
                  class="w-[120px] h-[40px] border rounded-lg bg-white border-[#E5E7E9] ml-[246px] mt-4 flex items-center justify-between px-4 hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  @click="toggleDatePicker"
                >
                  <span class="text-[14px] font-sans font-light text-[#9C9C9C]">
                    {{ selectedDate ? formatDate(selectedDate) : "2024" }}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.50016 0.333496C3.86835 0.333496 4.16683 0.631973 4.16683 1.00016V1.8335H9.8335V1.00016C9.8335 0.631973 10.132 0.333496 10.5002 0.333496C10.8684 0.333496 11.1668 0.631973 11.1668 1.00016V1.8335H11.5002C12.6968 1.8335 13.6668 2.80355 13.6668 4.00016V11.5002C13.6668 12.6968 12.6968 13.6668 11.5002 13.6668H2.50016C1.30355 13.6668 0.333496 12.6968 0.333496 11.5002V4.00016C0.333496 2.80355 1.30355 1.8335 2.50016 1.8335H2.8335V1.00016C2.8335 0.631973 3.13197 0.333496 3.50016 0.333496ZM2.50016 3.16683C2.03993 3.16683 1.66683 3.53993 1.66683 4.00016V4.49955C1.92336 4.39257 2.20486 4.3335 2.50016 4.3335H11.5002C11.7955 4.3335 12.077 4.39257 12.3335 4.49955V4.00016C12.3335 3.53993 11.9604 3.16683 11.5002 3.16683H2.50016ZM12.3335 6.50016C12.3335 6.03993 11.9604 5.66683 11.5002 5.66683H2.50016C2.03993 5.66683 1.66683 6.03993 1.66683 6.50016V11.5002C1.66683 11.9604 2.03993 12.3335 2.50016 12.3335H11.5002C11.9604 12.3335 12.3335 11.9604 12.3335 11.5002V6.50016Z"
                      fill="#2671D9"
                    />
                  </svg>
                </div>
                <!-- Date Picker -->
                <input
                  v-if="showDatePicker"
                  ref="datePickerInput"
                  type="date"
                  class="custom-date-picker absolute top-[52px] mt-2 left-[246px] border border-[#E5E7E9] font-sans text-[10px] text-[#9C9C9C] rounded-lg p-2 w-[120px] hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  @change="updateDate"
                  @blur="hideDatePicker"
                />
              </div>
            </div>
            <div class="items-center w-[124px] h-[60px] ml-6 mt-2 border-dashed rounded-lg bg-[#E7F1FD] border-[1px] border-[#91BEF7]">
              <h1 class="text-[12px] font-sans font-light text-[#9CA2AD] ml-[22px] mr-4 mt-2">Total Pengajuan</h1>
              <span id="totalData" class="text-[16px] font-sans font-bold text-[#071631] w-[92px] h-[24px] ml-[50px] mr-4 mt-7 mb-2">{{ totalDataPengajuan }}</span>
            </div>
            <div>
              <svg class="ml-6 mr-6 mt-4" width="628" height="1" viewBox="0 0 628 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="628" y2="0.5" stroke="#E5E7E9" />
              </svg>
            </div>
            <div class="chart-container ml-5 mt-4">
              <canvas id="myBarChart" class="bar-chart"></canvas>
            </div>
          </div>
          <div class="flex flex-col justify-start w-[346px] h-[416px] ml-6 mt-6 mr-6 border-collapse rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px] bg-wave">
            <div class="flex items-start p-6">
              <h1 class="font-sans text-[20px] font-semibold text-[#FFFFFF]">
                <span class="block">Total Dokumen</span>
                <span class="block">Kemitraan</span>
              </h1>
            </div>
            <div class="flex flex-col items-center mt-12">
              <div class="chart-item mb-6">
                <div>
                  <p class="font-sans text-[16px] text-[#7F7F80] font-medium">Total NDA</p>
                  <h2 id="totalNDA" class="font-sans text-[24px] text-[#333333] font-bold">{{ summaryData?.totalNda }}</h2>
                </div>
                <div id="ndaDisplay"></div>
              </div>
              <div class="chart-item mb-6">
                <div>
                  <p class="font-sans text-[16px] text-[#7F7F80] font-medium">Total MoU</p>
                  <h2 id="totalMoU" class="font-sans text-[24px] text-[#333333] font-bold">{{ summaryData?.totalMou }}</h2>
                </div>
                <div id="mouDisplay"></div>
              </div>
              <div class="chart-item">
                <div>
                  <p class="font-sans text-[16px] text-[#7F7F80] font-medium">Total PKS</p>
                  <h2 id="totalPKS" class="font-sans text-[24px] text-[#333333] font-bold">{{ summaryData?.totalPks }}</h2>
                </div>
                <div id="pksDisplay"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-start">
          <div class="w-[320px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] mt-6 ml-4 flex justify-between items-center">
            <input type="text" placeholder="Cari sesuatu disini ..." v-model="searchQuery" class="font-sans text-[14px] text-[#7F7F80] font-extralight ml-4 outline-none w-full" />
            <button class="bg-[#2671D9] w-[40px] h-full flex items-center justify-center rounded-r-lg">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.00016 1.66634C3.60693 1.66634 1.66683 3.60644 1.66683 5.99967C1.66683 8.39291 3.60693 10.333 6.00016 10.333C7.19696 10.333 8.27938 9.84871 9.06429 9.0638C9.8492 8.27889 10.3335 7.19648 10.3335 5.99967C10.3335 3.60644 8.3934 1.66634 6.00016 1.66634ZM0.333496 5.99967C0.333496 2.87006 2.87055 0.333008 6.00016 0.333008C9.12978 0.333008 11.6668 2.87006 11.6668 5.99967C11.6668 7.32398 11.2119 8.54294 10.4508 9.50751L13.4716 12.5283C13.7319 12.7886 13.7319 13.2107 13.4716 13.4711C13.2112 13.7314 12.7891 13.7314 12.5288 13.4711L9.508 10.4503C8.54343 11.2114 7.32447 11.6663 6.00016 11.6663C2.87055 11.6663 0.333496 9.12929 0.333496 5.99967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div class="filter-container" ref="filterContainer">
            <button @click="toggleDropdown" class="flex">
              <div class="flex items-center justify-center w-[90px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] ml-2 mt-6 hover:bg-[#DBEAFE] cursor-pointer transition-all">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.6668 0.333252H2.3335C1.80306 0.333252 1.29436 0.543966 0.919283 0.919038C0.54421 1.29411 0.333496 1.80282 0.333496 2.33325V3.11325C0.333401 3.38855 0.39014 3.6609 0.500163 3.91325V3.95325C0.594349 4.16723 0.727758 4.36169 0.893496 4.52659L5.00016 8.60658V12.9999C4.99994 13.1132 5.02859 13.2247 5.08341 13.3238C5.13823 13.423 5.21742 13.5065 5.3135 13.5666C5.41959 13.6323 5.54201 13.667 5.66683 13.6666C5.77119 13.666 5.87395 13.6408 5.96683 13.5933L8.6335 12.2599C8.74344 12.2045 8.83589 12.1198 8.90061 12.015C8.96533 11.9103 8.99979 11.7897 9.00016 11.6666V8.60658L13.0802 4.52659C13.2459 4.36169 13.3793 4.16723 13.4735 3.95325V3.91325C13.5927 3.66287 13.6585 3.39044 13.6668 3.11325V2.33325C13.6668 1.80282 13.4561 1.29411 13.081 0.919038C12.706 0.543966 12.1973 0.333252 11.6668 0.333252ZM7.86016 7.85992C7.79838 7.92221 7.74949 7.99609 7.71632 8.07731C7.68314 8.15854 7.66632 8.24551 7.66683 8.33325V11.2533L6.3335 11.9199V8.33325C6.334 8.24551 6.31719 8.15854 6.28401 8.07731C6.25083 7.99609 6.20195 7.92221 6.14016 7.85992L2.60683 4.33325H11.3935L7.86016 7.85992ZM12.3335 2.99992H1.66683V2.33325C1.66683 2.15644 1.73707 1.98687 1.86209 1.86185C1.98712 1.73682 2.15669 1.66659 2.3335 1.66659H11.6668C11.8436 1.66659 12.0132 1.73682 12.1382 1.86185C12.2633 1.98687 12.3335 2.15644 12.3335 2.33325V2.99992Z"
                    fill="#2671D9"
                  />
                </svg>
                <span class="text-[14px] font-sans font-medium text-[#333333] ml-2">Filter</span>
              </div>
            </button>
            <div v-if="showDropdown" class="dropdown-options bg-white mt-[1px] rounded-bl-lg rounded-br-lg ml-2 shadow-md absolute z-50">
              <div v-for="(option, index) in filterOptions" :key="index" class="option-item flex justify-between items-center p-2 border-b cursor-pointer hover:bg-[#DBEAFE]" @click="selectOption(option)">
                <span>{{ option.name }}</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
                    fill="#2671D9"
                  />
                </svg>
              </div>
              <div v-if="selectedOption && selectedOption.subOptions" class="sub-options bg-white mt-[1px] rounded-bl-lg rounded-br-lg ml-4 shadow-md absolute z-50">
                <div v-for="(subOption, index) in selectedOption.subOptions" :key="index" class="sub-option-item flex items-center p-2 border-b cursor-pointer hover:bg-[#DBEAFE]">
                  <input type="checkbox" v-model="selectedSubOptions" :value="subOption" class="mr-2" />
                  <span>{{ subOption }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div v-if="selectedSubOptions.length" class="flex mt-2 ml-4 w-[1046px] h-[44px] border-[1px] rounded-lg">
            <div
              v-for="(subOption, index) in selectedSubOptions"
              :key="index"
              class="flex items-center w-relative h-[24px] bg-[#E9F1FB] border-[#BAD1F3] border-[1px] font-semibold text-[#2671D9] text-[12px] rounded-xl px-2 py-1 mt-[10px] ml-4"
            >
              <span>{{ subOption }}</span>
              <button @click="removeSubOption(subOption)" class="ml-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4.586L10.95 9.536 9.536 10.95 4.586 6 9.536 1.05 10.95 2.464 6 7.414 1.05 2.464 2.464 1.05 7.414 6 2.464 10.95 1.05 9.536 6 4.586Z" fill="#2671D9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex w-[1046px] rounded-lg bg-[#FFFFFF] border-[1px] border-[#E5E7E9] mt-4 ml-4 mr-4 overflow-auto">
          <table class="table-auto w-full text-left border-collapse border border-[#E5E7E9]">
            <thead>
              <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>No.</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>PIC Kemitraan</span>
                    <svg @click="sortTable('pic')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Jumlah Pengajuan</span>
                    <svg @click="sortTable('jumlahPengajuan')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Total Diproses</span>
                    <svg @click="sortTable('totalDiproses')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Total Direvisi</span>
                    <svg @click="sortTable('totalRevisi')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Total Ditolak</span>
                    <svg @click="sortTable('totalDitolak')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Total Selesai</span>
                    <svg @click="sortTable('totalSelesai')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
                
                <th class="p-2 border border-[#E5E7E9]">
                  <div class="flex items-center justify-between">
                    <span>Total Stop Clock</span>
                    <svg @click="sortTable('totalStopClock')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                        fill="#93B8EC"
                      />
                      <path
                        d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                        fill="#93B8EC"
                      />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filteredAndPaginatedData" :key="`${index}-${item.pic}`" class="bg-[#FFFFFF] border border-[#E5E7E9] text-[12px] text-[#4D5E80] font-sans font-semibold">
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ (currentPage - 1) * selectedValue + index + 1 }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.pic }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.jumlahPengajuan }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.totalDiproses }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.totalRevisi }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.totalDitolak }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.totalSelesai }}</td>
                <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.totalStopClock }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center text-[14px] font-sans font-normal">
          <span>Menampilkan</span>
          <select class="ml-2 p-1 border border-[#E5E7E9] rounded-md" v-model="selectedValue">
            <option v-for="value in displayOptions" :key="value" :value="value">{{ value }}</option>
          </select>
          <span class="ml-2"
            >dari <b>{{ totalData }}</b> Data</span
          >
        </div>
        <div class="flex items-center rounded-lg border-transparent text-[14px] font-sans font-normal border-[#FFFFFF]">
          <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">‹</button>
          <button v-for="page in pages" :key="page" :class="['pagination-btn', { active: currentPage === page }]" @click="setPage(page)">
            {{ page }}
          </button>
          <button class="pagination-btn" :disabled="currentPage === totalPages" @click="nextPage">›</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, DoughnutController, ArcElement, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { fetchGet } from '@/api/apiFunction';
// import { parseStatusAproval } from '@/utils/helper';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';

Chart.register(DoughnutController, ArcElement, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export default {
  name: "DashBoardMitra",
  components: {
    Loading,
    ModalFailed
  },
  data() {
    return {
      showDatePicker: false,
      selectedDate: null,

      showDropdown: false,
      selectedOption: null,
      selectedSubOptions: [],
      filterOptions: [
        { name: "Jumlah Pengajuan", subOptions: [">10", "5-10", "<5"] },
        { name: "Total Selesai", subOptions: [">=5", "3-5", "<3"] },
        { name: "Total Diproses", subOptions: [">3", "2-3", "<2"] },
        { name: "Total Stop Clock", subOptions: [">3", "2-3", "<2"] },
      ],

      selectedValue: 8,
      currentPage: 1,
      displayOptions: [8, 16, 25],
      actionDropdownIndex: null,
      searchQuery: "",
      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
      isLoading: false,
      summaryData: null,
      totalDataPengajuan: 0,
      
      tableData: [],
      // tableData: [
      //   { pic: "Achmad Marzuki Yahya", jumlahPengajuan: 15, totalSelesai: 5, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Erna Ade Surya Ponti", jumlahPengajuan: 12, totalSelesai: 4, totalDiproses: 4, totalStopClock: 4 },
      //   { pic: "Annisa Inda Fitriani", jumlahPengajuan: 10, totalSelesai: 3, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Wulan Purnamasari", jumlahPengajuan: 8, totalSelesai: 2, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Tiffany Maliati Khumairo", jumlahPengajuan: 7, totalSelesai: 2, totalDiproses: 2, totalStopClock: 2 },
      //   { pic: "Manisya Eka Prasetia", jumlahPengajuan: 6, totalSelesai: 2, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "M. Risky Riadi", jumlahPengajuan: 3, totalSelesai: 1, totalDiproses: 1, totalStopClock: 1 },
      //   { pic: "Andi Muhammad Fathur", jumlahPengajuan: 3, totalSelesai: 1, totalDiproses: 1, totalStopClock: 1 },
      //   { pic: "Fauzan Agung", jumlahPengajuan: 9, totalSelesai: 2, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Rina Sari", jumlahPengajuan: 5, totalSelesai: 2, totalDiproses: 1, totalStopClock: 3 },
      //   { pic: "Siti Aminah", jumlahPengajuan: 4, totalSelesai: 1, totalDiproses: 2, totalStopClock: 3 },
      //   { pic: "Budi Santoso", jumlahPengajuan: 11, totalSelesai: 5, totalDiproses: 4, totalStopClock: 3 },
      //   { pic: "Dewi Lestari", jumlahPengajuan: 8, totalSelesai: 3, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Aulia Rahma", jumlahPengajuan: 7, totalSelesai: 3, totalDiproses: 2, totalStopClock: 3 },
      //   { pic: "Gina Suci", jumlahPengajuan: 10, totalSelesai: 4, totalDiproses: 2, totalStopClock: 3 },
      //   { pic: "Rizky Fauzi", jumlahPengajuan: 6, totalSelesai: 2, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Nadia Sari", jumlahPengajuan: 9, totalSelesai: 3, totalDiproses: 5, totalStopClock: 3 },
      //   { pic: "Vina Putri", jumlahPengajuan: 5, totalSelesai: 2, totalDiproses: 2, totalStopClock: 3 },
      //   { pic: "Ilham Naufal", jumlahPengajuan: 12, totalSelesai: 6, totalDiproses: 4, totalStopClock: 3 },
      //   { pic: "Rama Pradana", jumlahPengajuan: 14, totalSelesai: 7, totalDiproses: 5, totalStopClock: 3 },
      //   { pic: "Maya Setiawan", jumlahPengajuan: 2, totalSelesai: 1, totalDiproses: 1, totalStopClock: 3 },
      //   { pic: "Hendri Syah", jumlahPengajuan: 1, totalSelesai: 0, totalDiproses: 0, totalStopClock: 3 },
      //   { pic: "Nina Andini", jumlahPengajuan: 3, totalSelesai: 1, totalDiproses: 1, totalStopClock: 3 },
      //   { pic: "Agung Ramadhan", jumlahPengajuan: 5, totalSelesai: 2, totalDiproses: 3, totalStopClock: 3 },
      //   { pic: "Putri Andini", jumlahPengajuan: 7, totalSelesai: 3, totalDiproses: 2, totalStopClock: 3 },
      // ],
      sortOrder: "asc",
      jabatan: "",
      bisnisType: ""
    };
  },
  computed: {
    totalData() {
      return this.tableData.length;
    },
    totalPages() {
      return Math.ceil(this.totalData / this.selectedValue);
    },
    pages() {
      let pagesArray = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.selectedValue; // Calculate starting index
      const end = start + this.selectedValue; // Calculate ending index
      return this.filteredTableData.slice(start, end); // Slice the filtered data based on the current page
    },
    filteredAndPaginatedData() {
      let filteredData = this.tableData;
      // Filter berdasarkan opsi terpilih (selectedSubOptions)
      if (this.selectedSubOptions.length) {
        filteredData = filteredData.filter((item) => {
          return this.selectedSubOptions.some((option) => {
            // Filter untuk jumlahPengajuan
            if (option === ">10") {
              return item.jumlahPengajuan > 10;
            } else if (option === "5-10") {
              return item.jumlahPengajuan >= 5 && item.jumlahPengajuan <= 10;
            } else if (option === "<5") {
              return item.jumlahPengajuan < 5;
            }
            // Filter untuk totalSelesai
            if (option === ">=5") {
              return item.totalSelesai >= 5;
            } else if (option === "3-5") {
              return item.totalSelesai >= 3 && item.totalSelesai <= 5;
            } else if (option === "<3") {
              return item.totalSelesai < 3;
            }
            // Filter untuk totalDiproses
            if (option === ">3") {
              return item.totalDiproses > 3;
            } else if (option === "2-3") {
              return item.totalDiproses >= 2 && item.totalDiproses <= 3;
            } else if (option === "<2") {
              return item.totalDiproses < 2;
            }
            // Filter untuk totalStopClock
            if (option === ">3") {
              return item.totalStopClock > 3;
            } else if (option === "2-3") {
              return item.totalStopClock >= 2 && item.totalStopClock <= 3;
            } else if (option === "<2") {
              return item.totalStopClock < 2;
            }
          });
        });
      }
      // Filter berdasarkan input pencarian (searchQuery)
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredData = filteredData.filter((item) => {
          return item.pic.toLowerCase().includes(query);
        });
      }
      const start = (this.currentPage - 1) * this.selectedValue; // Calculate starting index
      const end = start + this.selectedValue; // Calculate ending index
      return filteredData.slice(start, end);
    },
  },
  methods: {
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },
    sortTable(columnName) {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";

      this.tableData.sort((a, b) => {
        const aValue = a[columnName] != null ? a[columnName] : "";
        const bValue = b[columnName] != null ? b[columnName] : "";

        // Jika keduanya adalah angka, lakukan sorting numerik
        if (!isNaN(aValue) && !isNaN(bValue)) {
          if (this.sortOrder === "asc") {
            return aValue - bValue; // Urutkan dari kecil ke besar
          } else {
            return bValue - aValue; // Urutkan dari besar ke kecil
          }
        }

        // Jika bukan angka, lakukan sorting string
        const aStr = aValue.toString().toLowerCase();
        const bStr = bValue.toString().toLowerCase();

        if (this.sortOrder === "asc") {
          return aStr.localeCompare(bStr); // Urutkan A-Z
        } else {
          return bStr.localeCompare(aStr); // Urutkan Z-A
        }
      });
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
      if (this.showDatePicker) {
        this.$nextTick(() => {
          this.$refs.datePickerInput.focus();
        });
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
    updateDate(event) {
      this.selectedDate = event.target.value;
      this.hideDatePicker();
      console.log(this.selectedDate);
    },
    hideDatePicker() {
      this.showDatePicker = false;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown) {
        document.addEventListener("click", this.handleClickOutside);
      } else {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
    selectOption(option) {
      if (this.selectedOption === option) {
        this.selectedOption = null;
      } else {
        this.selectedOption = option;
      }
    },
    removeSubOption(subOption) {
      this.selectedSubOptions = this.selectedSubOptions.filter((item) => item !== subOption);
    },
    setPage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    handleClickOutside(event) {
      const datePickerButton = this.$refs.datePickerButton;
      const datePickerInput = this.$refs.datePickerInput;
      const filterContainer = this.$refs.filterContainer;

      if (datePickerButton && !datePickerButton.contains(event.target) && datePickerInput && !datePickerInput.contains(event.target)) {
        this.hideDatePicker();
      }
      if (filterContainer && !filterContainer.contains(event.target)) {
        this.showDropdown = false;
        this.selectedOption = null;
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
    createChart(barChartData, totalNda, totalMou, totalPks, max, step) {
      // Data for the bar chart
      // const barChartData = [20, 15, 9, 20, 5];
      // Calculate the total data
      // const totalData = barChartData.reduce((acc, value) => acc + value, 0);
      const totalData = totalNda + totalMou + totalPks;
      document.getElementById("totalData").innerText = totalData;

      const createCircleChart = (elementId, value, color, label) => {
        const container = document.getElementById(elementId);
        const percentage = (value / totalData) * 100;
        const radius = 40;
        const strokeWidth = 15;
        const normalizedRadius = radius - strokeWidth / 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        const initialDashoffset = circumference;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        container.innerHTML = `
          <div class="chart-circle" style="position: relative;">
            <svg viewBox="0 0 100 100" class="chart-svg">
              <circle class="circle-bg"
                stroke="#E5E5E5"
                stroke-width="${strokeWidth}"
                fill="transparent"
                r="${normalizedRadius}"
                cx="50"
                cy="50"
              />
              <circle class="progress-circle"
                stroke="${color}"
                stroke-width="${strokeWidth}"
                stroke-dasharray="${circumference} ${circumference}"
                stroke-dashoffset="${initialDashoffset}"
                fill="transparent"
                r="${normalizedRadius}"
                cx="50"
                cy="50"
              />
            </svg>
            <div class="chart-text">
              <span class="value">${value}</span>
              <span class="total">/${totalData}</span>
            </div>
            <div class="chart-tooltip" style="display: none; position: absolute; padding: 5px; background: rgba(0, 0, 0, 0.85); color: #fff; border-radius: 5px; font-size: 10px; white-space: nowrap;">
              <div style="font-weight: bold;">${label}</div>
              <div style="display: flex; align-items: center; margin-top: 5px;">
                <span style="display: inline-block; width: 10px; height: 10px; background-color: ${color}; margin-right: 5px;"></span>
                <span>Jumlah: ${value}</span>
              </div>
            </div>
          </div>
        `;

        const progressCircle = container.querySelector(".progress-circle");
        const tooltip = container.querySelector(".chart-tooltip");
        const chartSvg = container.querySelector(".chart-svg");

        setTimeout(() => {
          progressCircle.style.transition = "stroke-dashoffset 1s ease-out";
          progressCircle.setAttribute("stroke-dashoffset", strokeDashoffset);
        }, 0);
        chartSvg.addEventListener("mousemove", (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          tooltip.style.display = "block";
          tooltip.style.left = `${x + 10}px`;
          tooltip.style.top = `${y - 40}px`;
        });
        chartSvg.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
          progressCircle.style.transform = "scale(1)";
        });
        chartSvg.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
          progressCircle.style.transform = "scale(1.1)";
          progressCircle.style.transition = "transform 0.5s ease";
        });
      };
      createCircleChart("ndaDisplay", totalNda, "#0EA976", "NDA");
      createCircleChart("mouDisplay", totalMou, "#FFA229", "MoU");
      createCircleChart("pksDisplay", totalPks, "#FF51AF", "PKS");

      // Bar Chart
      let delayed;
      const ctx = document.getElementById("myBarChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Total Diproses", "Total Direvisi", "Total Ditolak", "Total Selesai", "Total Stop Clock"],
          datasets: [
            {
              label: "Jumlah",
              data: barChartData,
              backgroundColor: ["#7367F0", "#FFA229", "#FF5656", "#0EA976", "#4E79B6"],
              borderColor: "#FFFFFF",
              borderWidth: 1,
              borderRadius: 5,
              barThickness: 60, // Width batang chart
            },
          ],
        },
        options: {
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === "data" && context.mode === "default" && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: max,
              ticks: {
                stepSize: step,
                color: "#000000",
                font: {
                  size: 14,
                },
              },
              grid: {
                color: "#BDBDBD",
                borderDash: [5, 5],
              },
              stacked: true,
            },
            x: {
              ticks: {
                color: "#000000",
                font: {
                  size: 10,
                  weight: "semibold",
                },
              },
              grid: {
                display: true,
                color: "#BDBDBD",
                borderDash: [5, 5],
              },
              stacked: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
            datalabels: {
              color: "#FFFFFF",
              anchor: "center",
              align: "center",
              offset: 0,
              font: {
                weight: "bold",
                size: 12,
              },
              formatter: function (value) {
                return value;
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
    // api
		async getDataApi() {
      this.isLoading = true;
			let boxResult = new Array;
      let url = 'mitra/';
      let params = null;
			const res = await fetchGet(url, params, this.$router);
			if (res.status == 200) {
        console.log(res.data)
				const cleanData1 = res.data.listMounda.map((item) => ({
					pic: item.disposedStaff,
					jumlahPengajuan: item.jmlPengajuan,
					totalSelesai: item.selesai,
					totalDiproses: item.proses,
					totalStopClock: item.stopclock,
          totalRevisi: item.revisi,
          totalDitolak: item.tolak
				}))
				boxResult = boxResult.concat(cleanData1)
        const cleanData2 = res.data.listPks.map((item) => ({
					pic: item.disposedStaff,
					jumlahPengajuan: item.jmlPengajuan,
					totalSelesai: item.selesai,
					totalDiproses: item.proses,
					totalStopClock: item.stopclock,
          totalRevisi: item.revisi,
          totalDitolak: item.tolak
				}))
				boxResult = boxResult.concat(cleanData2)
        const aggregated = Object.values(
          boxResult.reduce((acc, curr) => {
            // Jika kategori belum ada, inisialisasi dengan nilai awal
            if (!acc[curr.pic]) {
              acc[curr.pic] = { pic: curr.pic, jumlahPengajuan: 0, totalSelesai: 0, totalDiproses: 0, totalStopClock: 0, totalRevisi: 0, totalDitolak: 0 };
            }
            // Tambahkan nilai jumlahPengajuan dan totalSelesai ke kategori yang sesuai
            acc[curr.pic].jumlahPengajuan += curr.jumlahPengajuan;
            acc[curr.pic].totalSelesai += curr.totalSelesai;
            acc[curr.pic].totalDiproses += curr.totalDiproses;
            acc[curr.pic].totalStopClock += curr.totalStopClock;
            acc[curr.pic].totalRevisi += curr.totalRevisi;
            acc[curr.pic].totalDitolak += curr.totalDitolak;
            return acc;
          }, {})
        );
        this.tableData = aggregated;
        const original = {...res.data}
        delete original.listMounda;
        delete original.listPks;
        this.summaryData = original;
        this.totalDataPengajuan = res.data.totalNda + res.data.totalMou + res.data.totalPks

        const barChartData = [res.data.totalProcessed, res.data.totalRevision, res.data.totalRejected, res.data.totalFinished, res.data.totalStopClock]
        const max = Math.max.apply(null, barChartData)
        this.createChart(barChartData, res.data.totalNda, res.data.totalMou, res.data.totalPks, max, Math.ceil(max/4));

        this.isLoading = false;
			} else {
				this.isLoading = false;
        this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
			}
		}
  },
  watch: {
    selectedValue() {
      this.currentPage = 1; // Reset to first page
    },
    showDropdown(newVal) {
      if (newVal) {
        document.addEventListener("click", this.handleClickOutside);
      } else {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    window.addEventListener("beforeunload", () => {
      document.removeEventListener("click", this.handleClickOutside);
    });
    this.getDataApi();
    this.bisnisType = localStorage.getItem('bisnisType');
    const role = localStorage.getItem('position');
    if (role == 'PartnershipManager') {
      this.jabatan = "Manager"
    }
    if (role == 'PartnershipVP') {
      this.jabatan = "Vice President"
    }
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.doughnut-chart {
  width: 70px !important;
  height: 60px !important;
  margin-left: 10px;
}
.chart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
}
.chart-circle {
  position: relative;
  width: 70px;
  height: 70px;
  font-family: sans-serif;
}
.chart-circle svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.chart-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.chart-text .value {
  font-size: 10px;
  font-weight: bold;
  color: #000000 !important;
}
.chart-text .total {
  font-size: 8px;
  font-weight: normal;
  color: #7f7f80 !important;
  margin-left: 1px;
}
.circle-bg {
  transition: stroke-width 0.35s;
}
.progress-circle {
  transition: stroke-dashoffset 1s ease-out, transform 0.3s ease;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
}
.blue-box {
  background-color: #2671d9;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}
.bg-wave {
  width: 346px;
  height: 416px;
  gap: 0px;
  background-image: url("/src/assets/image/Wave.png");
  background-repeat: no-repeat; /* Agar gambar tidak berulang */
  background-position: top; /* Memusatkan gambar pada elemen */
  background-size: 100% 30%; /* Adjust this value to control how much of the top is covered */
}
.custom-date-picker {
  appearance: none; /* Remove default styling */
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.50016 0.333496C3.86835 0.333496 4.16683 0.631973 4.16683 1.00016V1.8335H9.8335V1.00016C9.8335 0.631973 10.132 0.333496 10.5002 0.333496C10.8684 0.333496 11.1668 0.631973 11.1668 1.00016V1.8335H11.5002C12.6968 1.8335 13.6668 2.80355 13.6668 4.00016V11.5002C13.6668 12.6968 12.6968 13.6668 11.5002 13.6668H2.50016C1.30355 13.6668 0.333496 12.6968 0.333496 11.5002V4.00016C0.333496 2.80355 1.30355 1.8335 2.50016 1.8335H2.8335V1.00016C2.8335 0.631973 3.13197 0.333496 3.50016 0.333496ZM2.50016 3.16683C2.03993 3.16683 1.66683 3.53993 1.66683 4.00016V4.49955C1.92336 4.39257 2.20486 4.3335 2.50016 4.3335H11.5002C11.7955 4.3335 12.077 4.39257 12.3335 4.49955V4.00016C12.3335 3.53993 11.9604 3.16683 11.5002 3.16683H2.50016ZM12.3335 6.50016C12.3335 6.03993 11.9604 5.66683 11.5002 5.66683H2.50016C2.03993 5.66683 1.66683 6.03993 1.66683 6.50016V11.5002C1.66683 11.9604 2.03993 12.3335 2.50016 12.3335H11.5002C11.9604 12.3335 12.3335 11.9604 12.3335 11.5002V6.50016Z" fill="%232671D9"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
}
.custom-date-picker::-webkit-calendar-picker-indicator {
  opacity: 0; /* Hide the default calendar icon */
}
.filter-button {
  position: relative;
}
.dropdown-options {
  position: absolute;
  z-index: 10; /* Ensure dropdown is above other content */
}
.table-container {
  margin: 20px;
}
th,
td {
  text-align: left;
  border-left: none; /* Menghapus garis vertikal di sebelah kiri */
  border-right: none; /* Menghapus garis vertikal di sebelah kanan */
}
th img {
  display: inline-block;
}
th,
td {
  border-left: none; /* Menghapus garis vertikal di sebelah kiri */
  border-right: none; /* Menghapus garis vertikal di sebelah kanan */
  border-bottom: 1px solid #e5e7e9; /* Hanya menyisakan garis horizontal bawah */
}
.pagination-btn {
  display: flex; /* Menggunakan flexbox */
  align-items: center; /* Vertikal tengah */
  justify-content: center; /* Horizontal tengah */
  padding: 8px 6px 8px 6px;
  width: 32px;
  height: 32px;
  border: transparent;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
.pagination-btn.active {
  background-color: #2671d9;
  color: #fff;
}
.pagination-btn:disabled {
  background-color: #fff;
  cursor: not-allowed;
}
.filter-container {
  position: relative;
}
.dropdown-options {
  width: 200px;
}
.option-item {
  position: relative;
}
.sub-options {
  width: 220px;
  top: 0;
  left: 200px;
}
</style>
