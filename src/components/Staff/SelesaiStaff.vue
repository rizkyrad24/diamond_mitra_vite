<template>
  <Loading :isVisible="isLoading" />
  <ModalFailed
    :isVisible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <div>
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <h1 class="w-[51px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold ml-6 mt-4 mb-4">Selesai</h1>
    </div>
  </div>
  <div class="px-4 py-3">
    <div class="h-[776px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
      <div class="flex">
        <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="28" fill="#1F5AAD" />
        </svg>
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Selesai</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">Surat Masuk Pengajuan Mitra</h1>
      <button class="flex-grow w-[56px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-8 mr-4 text-[#2671D9]" @click="navigateToSelesaiStaff">
        Selesai
        <img src="@/assets/image/LineBlue.png" class="w-[129px] h-[4px] mt-2" />
      </button>
      <button :class="['flex-grow w-[56px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-4 mr-4', selectedTable === 'ApprovalDitolakStaff' ? 'text-[#2671D9]' : 'text-[#333333]']" @click="navigateToDitolakStaff">Ditolak</button>
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
            <div v-for="(option, index) in filterOptions" :key="index" class="flex justify-between items-center p-2 border-b cursor-pointer hover:bg-[#DBEAFE]" @click="selectOption(option)">
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
      <div class="ApprovalSelesaiStaff">
        <div class="flex">
          <div class="flex w-full rounded-lg bg-[#FFFFFF] border-[1px] border-[#E5E7E9] mt-4 ml-4 mr-4 overflow-auto">
            <table class="table-auto w-full text-left border-collapse border border-[#E5E7E9]">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>No.</span>
                      <svg class="ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Judul</span>
                      <svg @click="sortTable('judul')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>No</span>
                      <svg @click="sortTable('nomor')" class="ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Tipe</span>
                      <svg @click="sortTable('tipe')" class="ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Pelaksana</span>
                      <svg @click="sortTable('pelaksana')" class="ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Tanggal Perjanjian</span>
                      <svg @click="sortTable('tanggal')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Tanggal Perjanjian Selesai</span>
                      <svg @click="sortTable('tgl_end')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Pejabat yang Bertanda Tangan</span>
                      <svg @click="sortTable('pejabat')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Hari Menuju Selesai</span>
                      <svg @click="sortTable('hari')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Status Perjanjian</span>
                      <svg @click="sortTable('statusperjanjian')" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span>Status</span>
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in filteredAndPaginatedData" :key="`${index}-${item.judul}`" class="bg-[#FFFFFF] border border-[#E5E7E9] text-[12px] text-[#4D5E80] font-sans font-semibold">
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ (currentPage - 1) * selectedValue + index + 1 }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.judul }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.nomor }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.tipe }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.pelaksana }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.tanggal }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.tgl_end }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.pejabat }}</td>
                  <td v-if="item.hari > 0" class="p-2 py-4 border border-[#E5E7E9] text-[#18c429]">H-{{ item.hari }}</td>
                  <td v-else-if="item.hari == 0" class="p-2 py-4 border border-[#E5E7E9] text-[#f9c01a]">H</td>
                  <td v-else-if="item.hari < 0" class="p-2 py-4 border border-[#E5E7E9] text-[#FF5656]">H+{{ item.hari * -1 }}</td>
                  <td v-else class="p-2 py-4 border border-[#E5E7E9] text-[#FF5656]"></td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">
                    <span
                      :class="[
                        'w-[55px] h-[24px] px-4 py-1 rounded-full font-sans text-[12px] font-semibold border-[1px]',
                        item.statusperjanjian === 'Aktif' ? 'bg-[#E7F1FD] border-[1px] border-[#91BEF7] text-[#4791F2]' : '',
                        item.statusperjanjian === 'Tidak Aktif' ? 'bg-[#F5F5F5] border-[1px] border-[#9C9C9C] text-[#9C9C9C]' : '',
                      ]"
                      >{{ item.statusperjanjian }}
                    </span>
                  </td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">
                    <span class="w-[55px] h-[24px] px-4 py-1 rounded-full font-sans font-semibold text-[12px] text-[#0EA976] bg-[#E2FCF3] border-[1px] border-[#8ADFC3]">
                      {{ item.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      <div class="w-auto h-[1px] ml-4 mr-4 bg-[#E5E7E9]"></div>
    </div>
  </div>
</template>

<script>
import { fetchGet } from '@/api/apiFunction';
import { parseStatusAproval, dueDateParsing, dateParsing, mapperStatusPerjanjian } from '@/utils/helper';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';

export default {
  components: {
    Loading,
    ModalFailed
  },
  data() {
    return {
      showDropdown: false,
      selectedOption: null,
      selectedSubOptions: [],
      filterOptions: [
        { name: "Tipe", subOptions: ["PKS", "NDA", "MoU"] },
        { name: "Status Perjanjian", subOptions: ["Aktif", "Tidak Aktif"] },
      ],

      selectedValue: 8,
      currentPage: 1,
      displayOptions: [8, 16, 25],
      searchQuery: "",
      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
      isLoading: false,
      tableData: [],
      // tableData: [
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Bonnie Beier", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Victor Ullrich", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Maryann Sawayn", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Susan Nienaw", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Mathew Yundt", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Debbie Wunsch", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Boyd Hahn", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Rebecca Conn", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90225, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Sophia Green", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90226, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Ethan Harris", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90227, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Charlotte Clark", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90228, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Alexander Lewis", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90229, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Liam Wright", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90230, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Isabella King", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90231, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Mason Scott", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90232, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Amelia Young", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90233, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "James Hall", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90234, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Charlotte King", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90235, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Benjamin Harris", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90236, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Ava Martinez", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90237, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Logan Nelson", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90238, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Ella Moore", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90239, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Oliver Taylor", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90240, tipe: "PKS", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Mia Anderson", hari: "H-5", statusperjanjian: "Tidak Aktif", status: "Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90241, tipe: "MoU", pelaksana: "Pusat", tanggal: "17/08/2024", pejabat: "Elijah Thomas", hari: "H-5", statusperjanjian: "Aktif", status: "Selesai" },
      // ],
      sortOrder: "asc",
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
          const isTipeMatched = this.selectedSubOptions.includes(item.tipe);
          const isStatusPerjanjianMatched = this.selectedSubOptions.includes(item.statusperjanjian);
          return isTipeMatched || isStatusPerjanjianMatched;
        });
      }
      // Filter berdasarkan input pencarian (searchQuery)
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredData = filteredData.filter((item) => {
          return item.judul.toLowerCase().includes(query);
        });
      }
      const start = (this.currentPage - 1) * this.selectedValue;
      const end = start + this.selectedValue;
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
    navigateToSelesaiStaff() {
      this.$router.push("/selesaistaff");
    },
    navigateToDitolakStaff() {
      this.$router.push("/selesaistaff/ditolakstaff");
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
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    handleClickOutside(event) {
      const filterContainer = this.$refs.filterContainer;
      if (filterContainer && !filterContainer.contains(event.target)) {
        this.showDropdown = false;
        this.selectedOption = null;
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // api
		async getDataApi() {
      this.isLoading = true;
			let boxResult = new Array;
      let url = "mitra/staff/mounda/finish";
      let params = null;
			const res = await fetchGet(url, params, this.$router);
			if (res.status == 200) {
				const cleanData = res.data.map((item) => ({
					judul: item.partnershipTitle,
					nomor: item.submissionNumber,
					tipe: item.base == "MOU" ? "MoU" : item.base,
					pelaksana: item.user,
          tanggal: item.approvalCompletionDate,
          pejabat: item.officialUndersign,
          tgl_end: dateParsing(item.endContractDate),
          hari: item.endContractDate? dueDateParsing(item.endContractDate): null,
          statusperjanjian: mapperStatusPerjanjian(item.endContractDate),
					status: item.status,
          statusapp: parseStatusAproval(item.positionLevel, item.status),
          did: item.id
				}))
				console.log(res.data)
				boxResult = boxResult.concat(cleanData)
			} else {
				this.isLoading = false;
        this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
			}
      let url2 = "mitra/staff/pks/finish";
			const res2 = await fetchGet(url2, params, this.$router);
			if (res2.status == 200) {
				const cleanData2 = res2.data.map((item) => ({
					judul: item.partnershipTitle,
					nomor: item.submissionNumber,
					tipe: "PKS",
					pelaksana: item.user,
          tanggal: item.approvalCompletionDate,
          pejabat: item.officialUndersign,
          tgl_end: dateParsing(item.endContractDate),
          hari: item.endContractDate? dueDateParsing(item.endContractDate): null,
          statusperjanjian: mapperStatusPerjanjian(item.endContractDate),
					status: item.status,
          statusapp: parseStatusAproval(item.positionLevel, item.status),
          did: item.id
				}))
				boxResult = boxResult.concat(cleanData2)
				boxResult = boxResult.map((item, index) => ({ id: index + 1, ...item }))
				console.log(res2.data)
			} else {
				this.isLoading = false;
        this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
			}
			this.tableData = boxResult.filter(item => item.status !== 'Ditolak')
      this.isLoading = false;
		}
  },
  mounted() {
    this.getDataApi();
  }
};
</script>

<style>
button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0, 3s;
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
