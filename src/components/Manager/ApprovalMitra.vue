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
      <h1 class="w-[51px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold ml-6 mt-4 mb-4">Approval</h1>
    </div>
  </div>
  <div class="px-4 py-3">
    <div class="h-[776px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
      <div class="flex">
        <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="28" fill="#1F5AAD" />
        </svg>
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Approval</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">Persetujuan Pengajuan Mitra</h1>
      <button class="flex-grow w-[129px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-8 mr-4 text-[#2671D9]"
        @click="navigateToApprovalSelesai">
        Approval Selesai
        <img src="@/assets/image/LineBlue.png" class="w-[129px] h-[4px] mt-2" />
      </button>
      <button v-if="role == 'PartnershipManager'" class="flex-grow w-[158px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-8 mr-4"
        @click="navigateToApprovalStopclock">Approval Stop Clock</button>
      <div class="flex items-start">
        <div
          class="w-[320px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] mt-6 ml-4 flex justify-between items-center">
          <input type="text" placeholder="Cari sesuatu disini ..." v-model="searchQuery"
            class="font-sans text-[14px] text-[#7F7F80] font-extralight ml-4 outline-none w-full" />
          <button class="bg-[#2671D9] w-[40px] h-full flex items-center justify-center rounded-r-lg">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.00016 1.66634C3.60693 1.66634 1.66683 3.60644 1.66683 5.99967C1.66683 8.39291 3.60693 10.333 6.00016 10.333C7.19696 10.333 8.27938 9.84871 9.06429 9.0638C9.8492 8.27889 10.3335 7.19648 10.3335 5.99967C10.3335 3.60644 8.3934 1.66634 6.00016 1.66634ZM0.333496 5.99967C0.333496 2.87006 2.87055 0.333008 6.00016 0.333008C9.12978 0.333008 11.6668 2.87006 11.6668 5.99967C11.6668 7.32398 11.2119 8.54294 10.4508 9.50751L13.4716 12.5283C13.7319 12.7886 13.7319 13.2107 13.4716 13.4711C13.2112 13.7314 12.7891 13.7314 12.5288 13.4711L9.508 10.4503C8.54343 11.2114 7.32447 11.6663 6.00016 11.6663C2.87055 11.6663 0.333496 9.12929 0.333496 5.99967Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="filter-container" ref="filterContainer">
          <button @click="toggleDropdown" class="flex">
            <div
              class="flex items-center justify-center w-[90px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] ml-2 mt-6 hover:bg-[#DBEAFE] cursor-pointer transition-all">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6668 0.333252H2.3335C1.80306 0.333252 1.29436 0.543966 0.919283 0.919038C0.54421 1.29411 0.333496 1.80282 0.333496 2.33325V3.11325C0.333401 3.38855 0.39014 3.6609 0.500163 3.91325V3.95325C0.594349 4.16723 0.727758 4.36169 0.893496 4.52659L5.00016 8.60658V12.9999C4.99994 13.1132 5.02859 13.2247 5.08341 13.3238C5.13823 13.423 5.21742 13.5065 5.3135 13.5666C5.41959 13.6323 5.54201 13.667 5.66683 13.6666C5.77119 13.666 5.87395 13.6408 5.96683 13.5933L8.6335 12.2599C8.74344 12.2045 8.83589 12.1198 8.90061 12.015C8.96533 11.9103 8.99979 11.7897 9.00016 11.6666V8.60658L13.0802 4.52659C13.2459 4.36169 13.3793 4.16723 13.4735 3.95325V3.91325C13.5927 3.66287 13.6585 3.39044 13.6668 3.11325V2.33325C13.6668 1.80282 13.4561 1.29411 13.081 0.919038C12.706 0.543966 12.1973 0.333252 11.6668 0.333252ZM7.86016 7.85992C7.79838 7.92221 7.74949 7.99609 7.71632 8.07731C7.68314 8.15854 7.66632 8.24551 7.66683 8.33325V11.2533L6.3335 11.9199V8.33325C6.334 8.24551 6.31719 8.15854 6.28401 8.07731C6.25083 7.99609 6.20195 7.92221 6.14016 7.85992L2.60683 4.33325H11.3935L7.86016 7.85992ZM12.3335 2.99992H1.66683V2.33325C1.66683 2.15644 1.73707 1.98687 1.86209 1.86185C1.98712 1.73682 2.15669 1.66659 2.3335 1.66659H11.6668C11.8436 1.66659 12.0132 1.73682 12.1382 1.86185C12.2633 1.98687 12.3335 2.15644 12.3335 2.33325V2.99992Z"
                  fill="#2671D9" />
              </svg>
              <span class="text-[14px] font-sans font-medium text-[#333333] ml-2">Filter</span>
            </div>
          </button>
          <div v-if="showDropdown"
            class="dropdown-options bg-white mt-[1px] rounded-bl-lg rounded-br-lg ml-2 shadow-md absolute z-50">
            <div v-for="(option, index) in filterOptions" :key="index"
              class="flex justify-between items-center p-2 border-b cursor-pointer hover:bg-[#DBEAFE]"
              @click="selectOption(option)">
              <span>{{ option.name }}</span>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
                  fill="#2671D9" />
              </svg>
            </div>
            <div v-if="selectedOption && selectedOption.subOptions"
              class="sub-options bg-white mt-[1px] rounded-bl-lg rounded-br-lg ml-4 shadow-md absolute z-50">
              <div v-for="(subOption, index) in selectedOption.subOptions" :key="index"
                class="sub-option-item flex items-center p-2 border-b cursor-pointer hover:bg-[#DBEAFE]">
                <input type="checkbox" v-model="selectedSubOptions" :value="subOption" class="mr-2" />
                <span>{{ subOption }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div v-if="selectedSubOptions.length" class="flex mt-2 ml-4 w-[1046px] h-[44px] border-[1px] rounded-lg">
          <div v-for="(subOption, index) in selectedSubOptions" :key="index"
            class="flex items-center w-relative h-[24px] bg-[#E9F1FB] border-[#BAD1F3] border-[1px] font-semibold text-[#2671D9] text-[12px] rounded-xl px-2 py-1 mt-[10px] ml-4">
            <span>{{ subOption }}</span>
            <button @click="removeSubOption(subOption)" class="ml-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 4.586L10.95 9.536 9.536 10.95 4.586 6 9.536 1.05 10.95 2.464 6 7.414 1.05 2.464 2.464 1.05 7.414 6 2.464 10.95 1.05 9.536 6 4.586Z"
                  fill="#2671D9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="ApprovalSelesai">
        <div class="flex">
          <div
            class="flex w-full rounded-lg bg-[#FFFFFF] border-[1px] border-[#E5E7E9] mt-4 ml-4 mr-4 overflow-auto">
            <table class="table-auto w-full text-left border-collapse border border-[#E5E7E9]">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>No.</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Judul</span>
                      <svg @click="sortTable('judul')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>No Pengajuan</span>
                      <svg @click="sortTable('nomor')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Tipe</span>
                      <svg @click="sortTable('tipe')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Tipe Bisnis</span>
                      <svg @click="sortTable('bisnis_type')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Pelaksana</span>
                      <svg @click="sortTable('pelaksana')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Due Date</span>
                      <svg @click="sortTable('due_date')" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Status</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in filteredAndPaginatedData" :key="`${index}-${item.judul}`"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[12px] text-[#4D5E80] font-sans font-semibold">
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ (currentPage - 1) * selectedValue + index + 1 }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.judul }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.nomor }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.tipe }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.bisnis_type }}</td>
                  <td class="p-2 py-4 border border-[#E5E7E9]">{{ item.pelaksana }}</td>
                  <td v-if="item.due_date > 0" class="p-2 py-4 border border-[#E5E7E9] text-[#18c429]">H-{{ item.due_date }}</td>
                  <td v-else-if="item.due_date == 0" class="p-2 py-4 border border-[#E5E7E9] text-[#f9c01a]">H</td>
                  <td v-else-if="item.due_date < 0" class="p-2 py-4 border border-[#E5E7E9] text-[#FF5656]">H+{{ item.due_date * -1 }}</td>
                  <td v-else class="p-2 py-4 border border-[#E5E7E9] text-[#FF5656]"></td>

                  <td class="p-2 py-4 border border-[#E5E7E9]">
                    <span
                      class="w-[55px] h-[24px] px-4 py-1 rounded-full font-sans text-[12px] text-[#0EA976] bg-[#E2FCF3] border-[1px] border-[#8ADFC3]">
                      {{ item.status }}
                    </span>
                  </td>
                  <td class="p-2 py-4 border border-[#E5E7E9] relative">
                    <button @click.stop="toggleActionDropdown(index)"
                      class="flex items-center justify-center w-[24px] h-[24px] rounded-lg bg-[#E5E7E9]">
                      <!-- <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 1.8125C0.91712 1.8125 0.837634 1.77958 0.779029 1.72097C0.720424 1.66237 0.6875 1.58288 0.6875 1.5C0.6875 1.41712 0.720424 1.33763 0.779029 1.27903C0.837634 1.22042 0.91712 1.1875 1 1.1875C1.08288 1.1875 1.16237 1.22042 1.22097 1.27903C1.27958 1.33763 1.3125 1.41712 1.3125 1.5C1.3125 1.58288 1.27958 1.66237 1.22097 1.72097C1.16237 1.77958 1.08288 1.8125 1 1.8125ZM1 4.3125C0.91712 4.3125 0.837634 4.27958 0.779029 4.22097C0.720424 4.16237 0.6875 4.08288 0.6875 4C0.6875 3.91712 0.720424 3.83763 0.779029 3.77903C0.837634 3.72042 0.91712 3.6875 1 3.6875C1.08288 3.6875 1.16237 3.72042 1.22097 3.77903C1.27958 3.83763 1.3125 3.91712 1.3125 4C1.3125 4.08288 1.27958 4.16237 1.22097 4.22097C1.16237 4.27958 1.08288 4.3125 1 4.3125ZM1 6.8125C0.91712 6.8125 0.837634 6.77958 0.779029 6.72097C0.720424 6.66237 0.6875 6.58288 0.6875 6.5C0.6875 6.41712 0.720424 6.33763 0.779029 6.27903C0.837634 6.22042 0.91712 6.1875 1 6.1875C1.08288 6.1875 1.16237 6.22042 1.22097 6.27903C1.27958 6.33763 1.3125 6.41712 1.3125 6.5C1.3125 6.58288 1.27958 6.66237 1.22097 6.72097C1.16237 6.77958 1.08288 6.8125 1 6.8125Z"
                          stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg> -->
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00051 1.66667C5.20279 1.66667 2.82714 3.48116 1.98946 5.99938C1.98897 6.00085 1.98897 6.00266 1.98946 6.00413C2.82818 8.52053 5.20293 10.3333 7.99934 10.3333C10.7971 10.3333 13.1727 8.51884 14.0104 6.00062C14.0109 5.99915 14.0109 5.99734 14.0104 5.99587C13.1717 3.47947 10.7969 1.66667 8.00051 1.66667ZM0.72429 5.57853C1.73777 2.53181 4.61153 0.333334 8.00051 0.333334C11.3879 0.333334 14.2606 2.52976 15.2753 5.57427C15.3669 5.84915 15.367 6.14654 15.2756 6.42148C14.2621 9.4682 11.3883 11.6667 7.99934 11.6667C4.61194 11.6667 1.73927 9.47024 0.72454 6.42573C0.632921 6.15085 0.632834 5.85346 0.72429 5.57853ZM7.99997 4.66667C7.26359 4.66667 6.66663 5.26362 6.66663 6C6.66663 6.73638 7.26359 7.33333 7.99997 7.33333C8.73635 7.33333 9.3333 6.73638 9.3333 6C9.3333 5.26362 8.73635 4.66667 7.99997 4.66667ZM5.3333 6C5.3333 4.52724 6.52721 3.33333 7.99997 3.33333C9.47273 3.33333 10.6666 4.52724 10.6666 6C10.6666 7.47276 9.47273 8.66667 7.99997 8.66667C6.52721 8.66667 5.3333 7.47276 5.3333 6Z"
                          fill="#2671D9"
                        />
                      </svg>
                    </button>
                    <div v-if="actionDropdownIndex === index"
                      class="absolute right-[45px] bottom-[10px] h-[40px] flex items-center rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] hover:bg-[#DBEAFE] shadow-lg z-10">
                      <!-- <svg width="16" height="12" class="ml-4" viewBox="0 0 16 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8.00051 1.66667C5.20279 1.66667 2.82714 3.48116 1.98946 5.99938C1.98897 6.00085 1.98897 6.00266 1.98946 6.00413C2.82818 8.52053 5.20293 10.3333 7.99934 10.3333C10.7971 10.3333 13.1727 8.51884 14.0104 6.00062C14.0109 5.99915 14.0109 5.99734 14.0104 5.99587C13.1717 3.47947 10.7969 1.66667 8.00051 1.66667ZM0.72429 5.57853C1.73777 2.53181 4.61153 0.333334 8.00051 0.333334C11.3879 0.333334 14.2606 2.52976 15.2753 5.57427C15.3669 5.84915 15.367 6.14654 15.2756 6.42148C14.2621 9.4682 11.3883 11.6667 7.99934 11.6667C4.61194 11.6667 1.73927 9.47024 0.72454 6.42573C0.632921 6.15085 0.632834 5.85346 0.72429 5.57853ZM7.99997 4.66667C7.26359 4.66667 6.66663 5.26362 6.66663 6C6.66663 6.73638 7.26359 7.33333 7.99997 7.33333C8.73635 7.33333 9.3333 6.73638 9.3333 6C9.3333 5.26362 8.73635 4.66667 7.99997 4.66667ZM5.3333 6C5.3333 4.52724 6.52721 3.33333 7.99997 3.33333C9.47273 3.33333 10.6666 4.52724 10.6666 6C10.6666 7.47276 9.47273 8.66667 7.99997 8.66667C6.52721 8.66667 5.3333 7.47276 5.3333 6Z"
                          fill="#2671D9" />
                      </svg> -->
                      <button @click="navigateToDetail(item.tipe, item.did)"
                        class="block flex-grow px-4 py-2 text-[14px] font-sans font-normal text-[#333333] text-left">View</button>
                    </div>
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
          <span class="ml-2">dari <b>{{ totalData }}</b> Data</span>
        </div>
        <div class="flex items-center rounded-lg border-transparent text-[14px] font-sans font-normal border-[#FFFFFF]">
          <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">‹</button>
          <button v-for="page in pages" :key="page" :class="['pagination-btn', { active: currentPage === page }]"
            @click="setPage(page)">
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
import { parseStatusAproval, dueDateParsing } from '@/utils/helper';
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
      filterOptions: [{ name: "Tipe", subOptions: ["PKS", "NDA", "MoU"] }],

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
      tableData: [],
      // tableData: [
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "MoU", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      //   { judul: "Lorem ipsum dolor", nomor: 90224, tipe: "PKS", pelaksana: "Pusat", status: "Approval Selesai" },
      // ],
      sortOrder: "asc",
      role: null,
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
          return this.selectedSubOptions.includes(item.tipe);
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
    navigateToDetail(tipe, id) {
      let base = tipe;
      if (tipe == 'MoU') {
        base = 'MOU'
      }
      this.$router.push(`/approval/detailpengajuanapproval/${base}/${id}`);
    },
    navigateToApprovalSelesai() {
      this.$router.push("/approval");
    },
    navigateToApprovalStopclock() {
      this.$router.push("/approval/approvalstopclock");
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
    toggleActionDropdown(index) {
      if (this.actionDropdownIndex === index) {
        this.actionDropdownIndex = null; // Menutup dropdown jika sudah dibuka
      } else {
        this.actionDropdownIndex = index; // Membuka dropdown secara spesifik
      }
      this.$nextTick(() => {
        document.addEventListener("click", this.closeDropdown);
      });
    },
    closeDropdown(event) {
      if (!event.target.closest(".action-dropdown") && !event.target.closest("button")) {
        this.actionDropdownIndex = null;
        document.removeEventListener("click", this.closeDropdown);
      }
    },
    beforeUnmount() {
      document.removeEventListener("click", this.closeDropdown);
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
    setPage(page) {
      this.currentPage = page;
    },
    viewItem(item) {
      // Handle the "view" action here
      console.log("Viewing item:", item);
    },
    // api
		async getDataApi() {
      this.isLoading = true;
			let boxResult = new Array;
      const positionLevel = localStorage.getItem("position");
      let url = null;
      let params = null;
      if (positionLevel == "PartnershipManager") {
        url = "mitra/manager/mounda/approval";
        params = { isStopClock: '0' }
      }
      if (positionLevel == "PartnershipVP") {
        url = "mitra/vp/mounda/approval";
        params = { isStopClock: '0' }
      }
      if (positionLevel == "PartnershipDirector") {
        url = "mitra/direksi/mounda/approval";
      }
      if (!url) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Role Tidak Terdaftar',
          message: "Posisi anda tidak dapat mengakses halaman ini"
        }
      }
			const res = await fetchGet(url, params, this.$router);
			if (res.status == 200) {
				const cleanData = res.data.map((item) => ({
					judul: item.partnershipTitle,
					nomor: item.submissionNumber,
					tipe: item.base == "MOU" ? "MoU" : item.base,
          bisnis_type: item.bisnisType,
          due_date: item.isStopClock? "-": dueDateParsing(item.dueDateStaff),
					pelaksana: item.disposedStaff,
					status: parseStatusAproval(item.positionLevel, item.status),
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
      let url2 = null;
      if (positionLevel == "PartnershipManager") {
        url2 = "mitra/manager/pks/approval";
        params = { isStopClock: '0' }
      }
      if (positionLevel == "PartnershipVP") {
        url2 = "mitra/vp/pks/approval";
        params = { isStopClock: '0' }
      }
      if (positionLevel == "PartnershipDirector") {
        url2 = "mitra/direksi/pks/approval";
      }
      if (!url2) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Role Tidak Terdaftar',
          message: "Posisi anda tidak dapat mengakses halaman ini"
        }
      }
			const res2 = await fetchGet(url2, params, this.$router);
			if (res2.status == 200) {
				const cleanData2 = res2.data.map((item) => ({
					judul: item.partnershipTitle,
					nomor: item.submissionNumber,
					tipe: "PKS",
					bisnis_type: item.bisnisType,
          due_date: item.isStopClock? "-": dueDateParsing(item.dueDateStaff),
					pelaksana: item.disposedStaff,
					status: parseStatusAproval(item.positionLevel, item.status),
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
			this.tableData = boxResult;
      this.isLoading = false;
		}
  },
  mounted() {
    this.getDataApi();
    this.role = localStorage.getItem('position');
  }
};
</script>

<style scoped>
.pagination-btn {
  display: flex;
  /* Menggunakan flexbox */
  align-items: center;
  /* Vertikal tengah */
  justify-content: center;
  /* Horizontal tengah */
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

button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;
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
