<script setup>
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
import ModalSuccess from '../modalsuccess.vue';
import ModalDialog from '../modaldialog.vue';
import SelectSearch from '../SelectSearch/SelectSearch.vue';
import { dateParsing } from '@/utils/helper';
</script>

<template>
  <Loading :isVisible="isLoading" />
  <ModalFailed
    :isVisible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <ModalSuccess
    :isVisible="modalSuccess.isVisible"
    :title="modalSuccess.title"
    :message="modalSuccess.message"
    @close="modalSuccess.closeFunction"
  />
  <ModalDialog
    :isVisible="modalDialog.isVisible"
    :title="modalDialog.title"
    :message="modalDialog.message"
    @close="modalDialog.closeFunction"
    @ok="modalDialog.okFunction"
  />
  <div>
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <button @click="navigateToDetail">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mr-2 mt-4 mb-4">Proses</h1>
      </button>
      <svg width="8" height="12" class="mt-[21px] mr-1" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
          fill="#7F7F80"
        />
      </svg>
      <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold ml-2 mt-[17px]">Detail Pengajuan</span>
    </div>
    <div class="px-4 py-3">
      <div class="relative h-auto w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
        <div class="flex">
          <svg class="ml-4 mt-[18px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="28" fill="#1F5AAD" />
          </svg>
          <h1 class="w-[825px] h-[56px] font-sans text-[20px] text-[#333333] mt-4 ml-[5px] font-semibold">Detail Pengajuan</h1>
          <div class="relative mt-4 mb-4 items-start w-[209px] min-h-[72px] border-[1px] border-[#E5E7E9] rounded-md">
            <div :class="{'bg-[#FFB200]': !isProgressFinish, 'bg-[#0ea976]': isProgressFinish}" class="w-[209px] h-[29px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md">
              <h1 class="mt-[7px] ml-4 w-[177px] h-[15px] font-sans text-[10px] text-[#333333] font-medium">Progress Kemitraan</h1>
            </div>
            <div class="flex items-center">
              <h1 :class="{'text-[#FFB200]': !isProgressFinish, 'text-[#0ea976]': isProgressFinish}" class="w-[150px] h-auto font-sans text-[18px] font-bold ml-4 my-2">{{ progress }}</h1>
              <button @click="showProgressPKSPopupStaff = true" class="ml-[9px]">
                <svg v-if="!isProgressFinish" width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1290_16355)">
                    <g opacity="0.4" filter="url(#filter1_d_1290_16355)">
                      <path d="M19 26C23.1421 26 26.5 22.6421 26.5 18.5C26.5 14.3579 23.1421 11 19 11C14.8579 11 11.5 14.3579 11.5 18.5C11.5 22.6421 14.8579 26 19 26Z" fill="#FFB200" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3536 18.6464C21.5488 18.8417 21.5488 19.1583 21.3536 19.3536L18.8536 21.8536C18.6583 22.0488 18.3417 22.0488 18.1464 21.8536C17.9512 21.6583 17.9512 21.3417 18.1464 21.1464L20.2929 19L18.1464 16.8536C17.9512 16.6583 17.9512 16.3417 18.1464 16.1464C18.3417 15.9512 18.6583 15.9512 18.8536 16.1464L21.3536 18.6464Z"
                      fill="#F08800"
                    />
                  </g>
                  <defs>
                    <filter id="filter0_d_1290_16355" x="6" y="6.5" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.778759 0 0 0 0 0.267318 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_16355" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_16355" result="shape" />
                    </filter>
                    <filter id="filter1_d_1290_16355" x="0.5" y="0" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_16355" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_16355" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg"
                  class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[42px] ml-[5px]"
                  viewBox="0 0 21 19" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div v-if="showProgressPKSPopupStaff" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
              <div class="bg-[#FFFFFF] re rounded-lg shadow-lg w-[1040.84px] h-[650px] border-collapse">
                <button @click="closePopup" class="text-[#2671D9] w-[14px] h-[14px] absolute mt-[30px] ml-[990px] text-[20px]">&times;</button>
                <div class="flex mt-[20px]">
                  <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="6" height="28" fill="#1F5AAD" />
                  </svg>
                  <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Progress Kemitraan</h1>
                </div>
                <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">{{ dataBerkas?.partnershipTitle }}</h1>
                <div class="flex">
                  <div :class="boxClass1" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-5 border-[1px] border-[#DEDEDE]">
                    <div :class="headerClass1" class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded1 ? "Surat Penawaran" : "Surat Penawaran" }}</div>
                    </div>
                    <div v-if="!fileUploaded1" class="flex flex-col ml-4 mt-[10px]">
                      <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</p>
                      <label class="bg-[#2671D9] hover:bg-[#1E5BB7] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                              fill="white"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload1" class="hidden" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName1 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize1 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute ml-[2px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute mb-[35px] ml-[240px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[28px] absolute ml-[325px] mt-[90px]" viewBox="0 0 33 28" fill="none">
                    <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded1 ? 'bg-[#FFFFFF]' : boxClass2]" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-[370px] absolute border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded1 ? 'bg-[#E0E0E0]' : headerClass2" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded1 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded3 ? "Proposal" : "Proposal" }}</div>
                    </div>
                    <div v-if="!fileUploaded2" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded1 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen Proposal</p>
                      <label
                        :class="[!fileUploaded1 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded1 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload2" class="hidden" :disabled="!fileUploaded1" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Proposal</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName2 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize2 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[28px] absolute ml-[670px] mt-[90px]" viewBox="0 0 33 28" fill="none">
                    <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded2 ? 'bg-[#FFFFFF]' : boxClass3]" class="absolute flex flex-col w-[289px] h-[130px] rounded-lg mt-[24px] ml-[710px] border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded2 ? 'bg-[#E0E0E0]' : headerClass3" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded2 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded3 ? "Evaluasi" : "Evaluasi" }}</div>
                    </div>
                    <div v-if="!fileUploaded3" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded2 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen Evaluasi</p>
                      <label
                        :class="[!fileUploaded2 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded2 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload3" class="hidden" :disabled="!fileUploaded2" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Evaluasi</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName3 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize3 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg width="33" height="29" class="w-[33px] h-[28px] absolute ml-[670px] mt-[280px]" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.09082 7.83984L1.00915 14.9215L8.09082 22.0032" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.8408 14.9209H2.20082" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded3 ? 'bg-[#FFFFFF]' : boxClass4]" class="absolute flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-[710px] border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded3 ? 'bg-[#E0E0E0]' : headerClass4" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded3 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded4 ? "Negosiasi" : "Negosiasi" }}</div>
                    </div>
                    <div v-if="!fileUploaded4" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded3 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen Negosiasi</p>
                      <label
                        :class="[!fileUploaded3 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded3 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload4" class="hidden" :disabled="!fileUploaded3" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Negosiasi</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName4 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize4 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[32px] absolute mt-[170px] ml-[840px]" viewBox="0 0 32 33" fill="none">
                    <path d="M20.2017 24.75L13.4201 31.8317L6.63857 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4204 1L13.4204 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded4 ? 'bg-[#FFFFFF]' : boxClass5]" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-[370px] absolute border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded4 ? 'bg-[#E0E0E0]' : headerClass5" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded4 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded5 ? "BAK Pemilihan Mitra" : "BAK Pemilihan Mitra" }}</div>
                    </div>
                    <div v-if="!fileUploaded5" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded4 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen BAK Pemilihan Mitra</p>
                      <label
                        :class="[!fileUploaded4 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded4 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload5" class="hidden" :disabled="!fileUploaded4" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen BAK Pemilihan Mitra</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName5 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize5 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg width="33" height="29" class="w-[33px] h-[28px] absolute mt-[280px] ml-[325px]" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.09082 7.83984L1.00915 14.9215L8.09082 22.0032" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.8408 14.9209H2.20082" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded5 ? 'bg-[#FFFFFF]' : boxClass6]" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-5 absolute border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded5 ? 'bg-[#E0E0E0]' : headerClass6" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded5 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded6 ? "Surat Pesanan" : "Surat Pesanan" }}</div>
                    </div>
                    <div v-if="!fileUploaded6" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded5 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen Surat Pesanan</p>
                      <label
                        :class="[!fileUploaded5 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded5 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload6" class="hidden" :disabled="!fileUploaded5" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Pesanan</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName6 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize6 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg width="28" height="33" class="w-[33px] h-[28px] absolute mt-[360px] ml-[150px]" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1221 24.75L14.3405 31.8317L7.55898 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.3408 1L14.3408 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div :class="[!fileUploaded6 ? 'bg-[#FFFFFF]' : boxClass7]" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[400px] ml-5 absolute border-[1px] border-[#DEDEDE]">
                    <div :class="!fileUploaded6 ? 'bg-[#E0E0E0]' : headerClass7" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
                      <div :class="!fileUploaded6 ? 'text-[#333333]' : 'text-[#FFFFFF]'" class="font-sans text-[14px] font-semibold">{{ fileUploaded7 ? "PKS" : "PKS" }}</div>
                    </div>
                    <div v-if="!fileUploaded7" class="flex flex-col ml-4 mt-[10px]">
                      <p :class="!fileUploaded6 ? 'text-[#7F7F80]' : 'text-[#333333]'" class="font-sans text-[12px] font-normal">Dokumen PKS</p>
                      <label
                        :class="[!fileUploaded6 ? 'cursor-not-allowed bg-[#E6E6E6] text-[#7F7F80]' : 'cursor-pointer bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]']"
                        class="w-[73px] h-[25px] rounded mt-[12px] inline-flex items-center justify-center text-[8.75px] font-sans font-semibold"
                      >
                        <div class="flex items-center">
                          <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              :fill="!fileUploaded6 ? '#7F7F80' : '#FFFFFF'"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                            />
                          </svg>
                          <span>Upload</span>
                        </div>
                        <input type="file" @change="handleFileUpload7" class="hidden" :disabled="!fileUploaded6" />
                      </label>
                    </div>
                    <div v-else class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen PKS</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName7 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize7 }} MB</p>
                          </div>
                        </div>
                        <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                          <g transform="translate(9, 8)">
                            <path
                              class="fill-[#0EA976]"
                              d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                            />
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button v-if="!allFilesUploaded" @click="SendFile"
                    class="absolute mt-[518px] ml-[915px] flex bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF] rounded-lg border-[#FFFFFF] border-[1px]">
                    <div
                      class="flex items-center justify-center w-[83px] h-[40px] rounded-lg border-[#FFFFFF] border-[1px]">
                      <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Submit</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi Umum</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen"
            class="flex flex-col w-[1046px] bg-[#FFFFFF] border-collapse rounded-bl-md rounded-br-md border-[#E5E7E9] border-[1px] ml-4 px-6 py-6">
            <div class="flex items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">No. Permintaan</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.submissionNumber }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Metode
                  Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.partnershipMethod || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Judul</h1>
              <span class="w-[182px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.partnershipTitle || '-' }}</span>
              <div class="flex ml-[1px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[209px]">Jenis
                  Material</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.materialType || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Nomor Anggaran</h1>
              <span class="w-[57px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetNumber || '-' }}</span>
              <div class="flex ml-[335px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Jenis Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[17px]">{{ dataBerkas?.partnershipType }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Anggaran</h1>
              <span class="w-[103px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetType || '-' }}</span>
              <div class="flex ml-[288px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Pelaksana</h1>
                <span class="w-[300px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">{{
                  dataBerkas?.disposedStaff || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Bisnis</h1>
              <span class="w-[103px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.bisnisType || '-' }}</span>
              <div class="flex ml-[288px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Kandidat</h1>
                <span class="w-[300px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">{{
                  dataBerkas?.partnershipCandidate || '-' }}</span>
              </div>
            </div>
            <div class="w-[1046px] h-[1px] bg-[#E5E7E9] justify-center transform translate-x-[-2.3%] mt-6"></div>
            <div class="flex items-start mt-6">
              <div class="flex w-1/2">
                <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Latar Belakang</h1>
                <span class="w-auto min-h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                  dataBerkas?.background || '-' }}</span>
              </div>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[40px]">Catatan
                </h1>
                <span class="w-auto min-h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{ dataBerkas?.note
                  || '-' }}</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Dibuat Oleh</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{ dataBerkas?.user ||
                '-' }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal Buat
                </h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dateParsing(dataBerkas?.submissionDate) || '-' }}</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Due Date</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{ dateParsing(dataBerkas?.dueDateStaff) ||
                '-' }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal Diharapkan Selesai
                </h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dateParsing(dataBerkas?.expectedDate) || '-' }}</span>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#FFA229] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Lingkup Pekerjaan</div>
          <button @click="toggleDropdownArrow1" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen1 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen1"
            class="flex flex-col w-[1046px] h-[270px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <div class="flex items-center justify-between w-full px-4">
              <div class="flex flex-col gap-2 items-center">
                <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Pembayaran</h1>
                <h1 class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</h1>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Time Schedule</div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Calon Mitra Bisnis
                </div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">{{ dataBerkas?.partnershipCandidate || "-" }}
                </div>
              </div>
            </div>
            <table class="table-auto w-auto text-left border-collapse border-[1px] border-[#E5E7E9] mt-4">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center w-[74px]">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none"
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
                      <span class="px-3">Pekerjaan</span>
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
              <tbody class="h-[54px] w-[998px]">
                <tr v-for="(item, index) in dataBerkas?.scopesPks" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">
                    {{ item.scopeName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#0FB37D] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi RAB</div>
          <button @click="toggleDropdownArrow2" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen2 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen2" class="flex items-center w-[1046px] h-[430px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <table class="table-auto w-auto text-left rounded-lg border-collapse border-[1px] border-[#E5E7E9] mt-3">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Aksi</span>
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
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Deskripsi</span>
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
                    <div class="flex items-center w-[300px] justify-between">
                      <span class="px-3">Pelanggan</span>
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
                      <span class="px-3">PLN/NonPLN</span>
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
              <tbody class="h-[54px] w-[231px]">
                <tr v-for="(item, index) in dataBerkas?.rab" :key="index" class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">{{ item.product }}</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">{{ item.costDesc }}</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">{{ item.customer }}</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">{{ item.isPln ? "PLN" : "Non PLN" }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#F42495] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Berkas Lampiran</div>
          <button @click="toggleDropdownArrow3" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen3 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen3" class="flex flex-wrap w-[1046px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-5 py-6 rounded-bl-md rounded-br-md gap-6">
            <!-- KKB -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKB</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
                <a v-if="fileDetails.KKB.linkDownload" :href="fileDetails.KKB?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputKKB" class="hidden" @change="handleFileChange('KKB', $event)" ref="fileInputKKB" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('KKB')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-5">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKB?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKB.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKR -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKR</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
                <a v-if="fileDetails.KKR.linkDownload" :href="fileDetails.KKR?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputKKR" class="hidden" @change="handleFileChange('KKR', $event)" ref="fileInputKKR" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('KKR')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKR?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKR.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKF -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKF</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
                <a v-if="fileDetails.KKF.linkDownload" :href="fileDetails.KKF?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputKKF" class="hidden" @change="handleFileChange('KKF', $event)" ref="fileInputKKF" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('KKF')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKF?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKF?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKO -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKO</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
                <a v-if="fileDetails.KKO.linkDownload" :href="fileDetails.KKO?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputKKO" class="hidden" @change="handleFileChange('KKO', $event)" ref="fileInputKKO" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('KKO')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKO?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKO?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Proposal Mitra -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal Mitra</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
                <a v-if="fileDetails.ProposalMitra.linkDownload" :href="fileDetails.ProposalMitra?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputProposalMitra" class="hidden" @change="handleFileChange('ProposalMitra', $event)" ref="fileInputProposalMitra" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('ProposalMitra')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.ProposalMitra?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.ProposalMitra?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dokumen Surat Menyurat (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Surat Menyurat</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
                <a v-if="fileDetails.DokumenSuratMenyurat.linkDownload" :href="fileDetails.DokumenSuratMenyurat?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputDokumenSuratMenyurat" class="hidden" @change="handleFileChange('DokumenSuratMenyurat', $event)" ref="fileInputDokumenSuratMenyurat" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('DokumenSuratMenyurat')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.DokumenSuratMenyurat?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.DokumenSuratMenyurat?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dokumen Lainnya (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Lainnya</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
                <a v-if="fileDetails.DokumenLainnya.linkDownload" :href="fileDetails.DokumenLainnya?.linkDownload" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <!-- <input type="file" id="fileInputDokumenLainnya" class="hidden" @change="handleFileChange('DokumenLainnya', $event)" ref="fileInputDokumenLainnya" /> -->
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('DokumenLainnya')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.DokumenLainnya?.fileName || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.DokumenLainnya?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#CE8861] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Dokumen Progress Kemitraan</div>
          <button @click="toggleDropdownArrow4" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen4 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen4" class="flex flex-wrap w-[1046px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-5 py-6 rounded-bl-md rounded-br-md gap-6">
            <!-- Surat Penawaran -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Surat Penawaran</h1>
                <a v-if="linkDownloadFile1" :href="linkDownloadFile1" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputSuratPenawaran" class="hidden" @change="handleFileUpload1($event)" ref="fileInputSuratPenawaran" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('SuratPenawaran')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName1 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize1 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Proposal -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal</h1>
                <a v-if="linkDownloadFile2" :href="linkDownloadFile2" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputProposal" class="hidden" @change="handleFileUpload2($event)" ref="fileInputProposal" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('Proposal')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName2 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize2 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Evaluasi -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Evaluasi</h1>
                <a v-if="linkDownloadFile3" :href="linkDownloadFile3" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputEvaluasi" class="hidden" @change="handleFileUpload3($event)" ref="fileInputEvaluasi" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <!-- @click="openFileDialog('Evaluasi')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName3 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize3 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Negosiasi -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Negosiasi</h1>
                <a v-if="linkDownloadFile4" :href="linkDownloadFile4" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <input type="file" id="fileInputNegosiasi" @change="handleFileUpload4($event)" class="hidden" ref="fileInputNegosiasi" />
                    <!-- @click="openFileDialog('Negosiasi')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName4 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize4 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- BAK Pemilihan Mitra -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">BAK Pemilihan Mitra</h1>
                <a v-if="linkDownloadFile5" :href="linkDownloadFile5" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <input type="file" id="fileInputBAKPemilihanMitra" @change="handleFileUpload5($event)" class="hidden" ref="fileInputBAKPemilihanMitra" />
                    <!-- @click="openFileDialog('BAK Pemilihan Mitra')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName5 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize5 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Surat Pesanan -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Surat Pesanan</h1>
                <a v-if="linkDownloadFile6" :href="linkDownloadFile6" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <input type="file" id="fileInputSuratPesanan" @change="handleFileUpload6($event)" class="hidden" ref="fileInputSuratPesanan" />
                    <!-- @click="openFileDialog('Surat Pesanan')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName6 || "Belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize6 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- PKS -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">PKS</h1>
                <a v-if="linkDownloadFile7" :href="linkDownloadFile7" class="text-sm text-blue-700 italic ms-2">download</a>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <input type="file" id="fileInputPKS" @change="handleFileUpload7($event)" class="hidden" ref="fileInputPKS" />
                    <!-- @click="openFileDialog('Surat Pesanan')" -->
                    <button class="ml-4 block text-left p-2 w-full">
                      <div class="flex justify-between items-center pe-4">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileName7 || "belum diupload" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileSize7 || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex flex-row w-[1046px] h-auto py-4 ml-4">
          <div class="flex flex-col w-[511px] h-auto">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Tanggapan</h1>
            </div>
            <div class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#333333] font-sans text-[14px]">Lorem ipsum dolor sit amet consectetur. Tincidunt convallis sit quisque.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[520px] h-auto ml-4">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Catatan Approval</h1>
            </div>
            <textarea type="text" placeholder="Masukkan catatan approval" class="w-full h-[88px] text-black font-sans text-sm focus:border-gray-400 focus:outline-none border border-gray-300 rounded-lg p-2 mt-2 bg-white"></textarea>
          </div>
        </div>
        <div class="w-[1046px] h-[1px] bg-[#E5E7E9] items-center transform ml-4 mt-6"></div>
        <div class="flex w-[1046px] h-auto ml-4 py-9 justify-end gap-6">
          <button v-if="statusAction == 4" @click="SendRequestAbortStartclock"
            class="flex bg-[#f59e0b] hover:bg-[#ff9f43] rounded-lg border-[1px] text-[#FFFFFF]">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Batalkan Pengajuan Startclock</span>
            </div>
          </button>
          <button v-if="statusAction == 3" @click="SendRequestStartclock"
            class="flex bg-[#f59e0b] hover:bg-[#ff9f43] rounded-lg border-[1px] text-[#FFFFFF]">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Ajukan Startclock</span>
            </div>
          </button>
          <button v-if="statusAction == 2" @click="SendRequestAbortStopclock"
            class="flex bg-[#f59e0b] hover:bg-[#ff9f43] rounded-lg border-[1px] text-[#FFFFFF]">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Batalkan Pengajuan Stopclock</span>
            </div>
          </button>
          <button v-if="statusAction == 1" @click="SendRequestStopclock"
            class="flex bg-[#f59e0b] hover:bg-[#ff9f43] rounded-lg border-[1px] text-[#FFFFFF]">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Ajukan Stopclock</span>
            </div>
          </button>
          <button v-if="statusAction == 1" @click="SendRevisiMinor" class="flex">
            <div
              class="flex items-center justify-center rounded-lg bg-[#FFFFFF] border-[#2671D9] border-[1px] hover:bg-[#DBEAFE] cursor-pointer transition-all px-2">
              <span class="text-[14px] font-sans font-medium text-[#2671D9] ml-3 mt-[9px] mr-3 mb-[9px]">Revisi
                Minor</span>
            </div>
          </button>
          <!-- <button v-if="statusAction == 1" @click="SendFile"
            class="flex bg-[#2671D9] hover:bg-[#1E5BB7] rounded-lg border-[1px] text-[#FFFFFF]">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Upload File</span>
            </div>
          </button> -->
          <button v-if="statusAction == 1" @click="showPenyelesaianPKSPopup = true"
            :class="{ 'bg-[#2671D9] hover:bg-[#1E5BB7] rounded-lg border-[1px] text-[#FFFFFF]': kirimClicked, 'bg-[#E6E6E6] rounded-lg border-[1px] text-[#7F7F80]': !kirimClicked }"
            :disabled="!kirimClicked" class="flex">
            <div class="flex items-center justify-center rounded-lg border-[#FFFFFF] border-[1px] px-2">
              <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Selesai</span>
            </div>
          </button>
        </div>

        <div v-if="showPenyelesaianPKSPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[502px] h-[596px]">
            <div class="flex w-[502px] h-[76px] bg-[#E9F1FB] border-[#DEDEDE] rounded-tl-lg rounded-tr-lg">
              <h1 class="w-[325px] h-[28px] ml-6 mt-6 font-sans font-bold text-[20px] text-[#000000]">Progress Kemitraan (PKS) Selesai</h1>
              <button @click="closePenyelesaianPKSPopup" class="text-[#CCCCCC] absolute mt-5 ml-[472px] text-[20px]">&times;</button>
            </div>
            <div class="flex flex-col justify-start items-start mt-4 ml-6 mr-8">
              <h1 class="w-[454px] h-[56px] items-start text-[16px] font-sans font-normal text-[#333333] mb-2">Silahkan mengisi form berikut untuk penyelesaian dokumen PKS.</h1>
              <div class="flex flex-col w-[454.5px] h-[72px]">
                <div class="flex items-center">
                  <h1 class="w-[88px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Nomor PKS</h1>
                  <span class="text-[#FF5656] font-bold ml-1">*</span>
                </div>
                <input
                  v-model="nomorPKS"
                  type="text"
                  placeholder="Masukkan Nomor PKS"
                  class="w-[454.5px] h-[40px] rounded-md bg-[#FFFFFF] border border-[#E5E7E9] mt-2 pl-4 font-sans text-[14px] text-[#7F7F80] font-extralight outline-none"
                />
              </div>
              <div class="relative flex flex-col w-[454.5px] h-[72px] mt-4">
                <div ref="datePickerSelesaiContainer" class="flex items-center">
                  <h1 class="w-[122px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Tanggal Selesai</h1>
                  <span class="text-[#FF5656] font-bold">*</span>
                </div>
                <input
                  ref="datePickerSelesaiInput"
                  type="date"
                  class="custom-date-picker border border-[#E5E7E9] font-sans text-[15px] text-[#9C9C9C] rounded-lg p-[7px] mt-2 hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  @change="updateDateSelesai"
                  @blur="hideDatePickerSelesai"
                />
              </div>
              <div class="relative flex flex-col w-[454.5px] h-[72px] mt-4">
                <div ref="datePickerPerjanjianContainer" class="flex items-center">
                  <h1 class="w-[190px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Jangka Waktu Perjanjian</h1>
                  <span class="text-[#FF5656] font-bold">*</span>
                </div>
                <input
                  ref="datePickerPerjanjianInput"
                  type="date"
                  class="custom-date-picker border border-[#E5E7E9] font-sans text-[15px] text-[#9C9C9C] rounded-lg p-[7px] mt-2 hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  @change="updateDatePerjanjian"
                  @blur="hideDatePickerPerjanjian"
                />
              </div>
              <div class="flex flex-col w-[454.5px] h-[72px] mt-4">
                <div class="flex items-center">
                  <h1 class="w-[286px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Nama Pejabat yang Bertanda Tangan</h1>
                  <span class="text-[#FF5656] font-bold">*</span>
                </div>
                <SelectSearch
                  :options="optionsPejabat"
                  placeholder="Pilih staff..."
                  :initialValue="namaPejabat"
                  @change="handleSelectionChange"
                />
                <span class="absolute mt-[45px] ml-[428px] cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99967 1.66634C3.60644 1.66634 1.66634 3.60644 1.66634 5.99967C1.66634 8.39291 3.60644 10.333 5.99967 10.333C7.19648 10.333 8.27889 9.84871 9.0638 9.0638C9.84871 8.27889 10.333 7.19648 10.333 5.99967C10.333 3.60644 8.39291 1.66634 5.99967 1.66634ZM0.333008 5.99967C0.333008 2.87006 2.87006 0.333008 5.99967 0.333008C9.12929 0.333008 11.6663 2.87006 11.6663 5.99967C11.6663 7.32398 11.2114 8.54294 10.4503 9.50751L13.4711 12.5283C13.7314 12.7886 13.7314 13.2107 13.4711 13.4711C13.2107 13.7314 12.7886 13.7314 12.5283 13.4711L9.50751 10.4503C8.54294 11.2114 7.32398 11.6663 5.99967 11.6663C2.87006 11.6663 0.333008 9.12929 0.333008 5.99967Z"
                      fill="#2671D9"
                    />
                  </svg>
                </span>
              </div>
              <!-- Tombol Kirim -->
              <button @click="SendApprov" :disabled="!isFormComplete" class="absolute mt-[450px] ml-[378px] flex">
                <div :class="{ 'bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]': isFormComplete, 'bg-[#E6E6E6] text-[#7F7F80]': !isFormComplete }" class="flex items-center justify-center w-[78px] h-[40px] rounded-lg border-[1px]">
                  <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Kirim</span>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { fetchGet, fetchPostForm, fetchPost } from '@/api/apiFunction';
import { baseURL } from '@/api/apiManager';

export default {
  data() {
    return {
      fileUploaded1: false,
      fileName1: "",
      fileSize1: "",
      file1: null,
      fileId1: null,
      linkDownloadFile1: "",
      fileUploaded2: false,
      fileName2: "",
      fileSize2: "",
      file2: null,
      fileId2: null,
      linkDownloadFile2: "",
      fileUploaded3: false,
      fileName3: "",
      fileSize3: "",
      file3: null,
      fileId3: null,
      linkDownloadFile3: "",
      fileUploaded4: false,
      fileName4: "",
      fileSize4: "",
      file4: null,
      fileId4: null,
      linkDownloadFile4: "",
      fileUploaded5: false,
      fileName5: "",
      fileSize5: "",
      file5: null,
      fileId5: null,
      linkDownloadFile5: "",
      fileUploaded6: false,
      fileName6: "",
      fileSize6: "",
      file6: null,
      fileId6: null,
      linkDownloadFile6: "",
      fileUploaded7: false,
      fileName7: "",
      fileSize7: "",
      file7: null,
      fileId7: null,
      linkDownloadFile7: "",

      fileDetails: {
        KKB: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: ""  },
        KKR: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: ""  },
        KKF: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: "" },
        KKO: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: "" },
        ProposalMitra: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: "" },
        DokumenSuratMenyurat: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: "" },
        DokumenLainnya: { fileName: "", fileSize: "", file: null, fileId: null, linkDownload: "" },
      },
      kirimClicked: false,
      isDropdownArrowOpen: false,
      isDropdownArrowOpen1: false,
      isDropdownArrowOpen2: false,
      isDropdownArrowOpen3: false,
      isDropdownArrowOpen4: false,
      showDropdown: false,
      showProgressPKSPopupStaff: false,
      showDisetujuiPopup: false,
      fileName: "", // Nama file yang dipilih
      fileSize: "", // Ukuran file yang dipilih

      selectedDateSelesai: "", // Untuk menyimpan tanggal selesai
      jangkaWaktuPerjanjian: "",
      showDatePickerSelesai: false,
      showDatePickerPerjanjian: false,
      nomorPKS: "",
      namaPejabat: null,
      optionsPejabat: [],
      showPenyelesaianPKSPopup: false,

      dataBerkas: null,
      id: null,
      ApprovalNote: '',

      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
      modalSuccess: {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      },
      modalDialog: {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      },
      isLoading: false,
      statusAction: 0,

      // Popup Acprrove
      isSendSetuju: false,
      isSelesaiSetuju: false,
      isFailOpen: false,
      isSelesaiFile: false,
    };
  },
  computed: {
    isFormComplete() {
      return this.nomorPKS && this.selectedDateSelesai && this.jangkaWaktuPerjanjian && this.namaPejabat;
    },
    allFilesUploaded() {
      return this.fileId1 && this.fileId2 && this.fileId3 && this.fileId4 && this.fileId5 && this.fileId6 && this.fileId7;
    },
    boxClass1() {
      return this.fileUploaded1 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass1() {
      return this.fileUploaded1 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass2() {
      return this.fileUploaded2 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass2() {
      return this.fileUploaded2 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass3() {
      return this.fileUploaded3 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass3() {
      return this.fileUploaded3 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass4() {
      return this.fileUploaded4 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass4() {
      return this.fileUploaded4 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass5() {
      return this.fileUploaded5 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass5() {
      return this.fileUploaded5 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass6() {
      return this.fileUploaded6 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass6() {
      return this.fileUploaded6 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass7() {
      return this.fileUploaded7 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass7() {
      return this.fileUploaded7 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    progress() {
      if (this.fileId7 || this.fileId6) {
        return "PKS"
      } else if(this.fileId5) {
        return "Surat Pesanan"
      } else if(this.fileId4) {
        return "BAK Pemilihan Mitra"
      } else if(this.fileId3) {
        return "Negosiasi"
      } else if(this.fileId2) {
        return "Evaluasi"
      } else if(this.fileId1) {
        return "Proposal"
      } else {
        return "Surat Penawaran"
      }
    },
    isProgressFinish() {
      if (this.fileId7) {
        return true
      }else {
        return false
      }
    }
  },
  watch: {
    fileId1: 'checkConditions',
    fileId2: 'checkConditions',
    fileId3: 'checkConditions',
    fileId4: 'checkConditions',
    fileId5: 'checkConditions',
    fileId6: 'checkConditions',
    fileId7: 'checkConditions',
  },
  methods: {
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },
    closeModalSuccess() {
      this.modalSuccess = {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      }
    },
    closeModalDialog() {
      this.modalDialog = {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      }
    },
    checkConditions() {
      if (
        this.fileId1 && this.fileId2 && this.fileId3 &&
        this.fileId4 && this.fileId5 && this.fileId6 && 
        this.fileId7
      ) {
        this.kirimClicked = true;
      }
    },
    handleKirimClick() {
      this.closePopup();
      // this.kirimClicked = true;
    },
    closePopup() {
      this.showProgressPKSPopupStaff = false;
    },
    handleFileUpload1(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded1 = true;
        this.fileName1 = file.name;
        this.fileSize1 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file1 = file;
      }
    },
    handleFileUpload2(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded2 = true;
        this.fileName2 = file.name;
        this.fileSize2 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file2 = file;
      }
    },
    handleFileUpload3(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded3 = true;
        this.fileName3 = file.name;
        this.fileSize3 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file3 = file;
      }
    },
    handleFileUpload4(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded4 = true;
        this.fileName4 = file.name;
        this.fileSize4 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file4 = file;
      }
    },
    handleFileUpload5(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded5 = true;
        this.fileName5 = file.name;
        this.fileSize5 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file5 = file;
      }
    },
    handleFileUpload6(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded6 = true;
        this.fileName6 = file.name;
        this.fileSize6 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file6 = file;
      }
    },
    handleFileUpload7(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded7 = true;
        this.fileName7 = file.name;
        this.fileSize7 = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
        this.file7 = file;
      }
    },
    toggleDropdownArrow() {
      this.isDropdownArrowOpen = !this.isDropdownArrowOpen;
    },
    toggleDropdownArrow1() {
      this.isDropdownArrowOpen1 = !this.isDropdownArrowOpen1;
    },
    toggleDropdownArrow2() {
      this.isDropdownArrowOpen2 = !this.isDropdownArrowOpen2;
    },
    toggleDropdownArrow3() {
      this.isDropdownArrowOpen3 = !this.isDropdownArrowOpen3;
    },
    toggleDropdownArrow4() {
      this.isDropdownArrowOpen4 = !this.isDropdownArrowOpen4;
    },
    navigateToDetail() {
      this.$router.push("/prosesstaff");
    },
    removeFile(type) {
      this.fileDetails[type] = { fileName: "", fileSize: "" };
      this.$refs[`fileInput${type}`].value = ""; // Clear the file input
    },
    openFileDialog(section) {
      const inputElement = this.$refs[`fileInput${section}`];
      if (inputElement) {
        inputElement.click();
      } else {
        console.error(`File input for section ${section} not found.`);
      }
    },
    handleFileChange(section, event) {
      const file = event.target.files[0];
      if (file) {
        this.fileDetails[section].fileName = file.name;
        this.fileDetails[section].fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
        this.fileDetails[section].file = file;
      } else {
        this.fileDetails[section].fileName = "";
        this.fileDetails[section].fileSize = "";
        this.fileDetails[section].file = null;
      }
    },
    toggleDatePickerSelesai() {
      this.showDatePickerSelesai = !this.showDatePickerSelesai;
      if (this.showDatePickerSelesai) {
        this.$nextTick(() => {
          this.$refs.datePickerSelesaiInput.focus();
        });
      }
    },
    hideDatePickerSelesai() {
      this.showDatePickerSelesai = false;
    },
    toggleDatePickerPerjanjian() {
      this.showDatePickerPerjanjian = !this.showDatePickerPerjanjian;
      if (this.showDatePickerPerjanjian) {
        this.$nextTick(() => {
          this.$refs.datePickerPerjanjianInput.focus();
        });
      }
    },
    hideDatePickerPerjanjian() {
      this.showDatePickerPerjanjian = false;
    },
    formatDateToDDMMYYYY(date) {
      const d = new Date(date);
      const day = ("0" + d.getDate()).slice(-2);
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    },
    updateDateSelesai(event) {
      const formattedDate = this.formatDateToDDMMYYYY(event.target.value);
      this.selectedDateSelesai = formattedDate;
      // if (this.jangkaWaktuPerjanjian) {
      //   const endDate = this.jangkaWaktuPerjanjian.split(" s.d ")[1];
      //   this.jangkaWaktuPerjanjian = `${this.selectedDateSelesai} s.d ${endDate}`;
      // }

      // this.showDatePickerSelesai = false;
    },
    updateDatePerjanjian(event) {
      const endDate = this.formatDateToDDMMYYYY(event.target.value);
      // this.jangkaWaktuPerjanjian = `${this.selectedDateSelesai} s.d ${endDate}`;
      this.jangkaWaktuPerjanjian = endDate;
      // this.showDatePickerPerjanjian = false;
    },
    handleClickOutside(event) {
      const datePickerSelesaiContainer = this.$refs.datePickerSelesaiContainer;
      const datePickerSelesaiButton = this.$refs.datePickerSelesaiButton;
      const datePickerSelesaiInput = this.$refs.datePickerSelesaiInput;
      const datePickerPerjanjianContainer = this.$refs.datePickerPerjanjianContainer;
      const datePickerPerjanjianButton = this.$refs.datePickerPerjanjianButton;
      const datePickerPerjanjianInput = this.$refs.datePickerPerjanjianInput;

      if (datePickerSelesaiContainer && !datePickerSelesaiContainer.contains(event.target)) {
        this.hideDatePicker();
      }

      if (datePickerSelesaiButton && !datePickerSelesaiButton.contains(event.target) && datePickerSelesaiInput && !datePickerSelesaiInput.contains(event.target)) {
        this.hideDatePicker();
      }

      if (datePickerPerjanjianContainer && !datePickerPerjanjianContainer.contains(event.target)) {
        this.hideDatePicker();
      }

      if (datePickerPerjanjianButton && !datePickerPerjanjianButton.contains(event.target) && datePickerPerjanjianInput && !datePickerPerjanjianInput.contains(event.target)) {
        this.hideDatePicker();
      }
    },
    handleSelectionChange(option) {
      this.namaPejabat = option;
    },

    closePenyelesaianPKSPopup() {
      this.showPenyelesaianPKSPopup = false;
    },
    Progress() {
      this.showDisetujuiPopup = true;
      this.showPenyelesaianPKSPopup = false;
    },
    closeDisetujuiPopup() {
      this.showDisetujuiPopup = false;
    },

    // Popup Selesai
    SendApprov() {
      this.showPenyelesaianPKSPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Kirim Pengajuan',
        message: 'Apakan anda yakin akan melanjutkan pengajuan ini ke manager',
        okFunction: this.openApprov,
        closeFunction: this.closeApprov
      }
    },
    openApprov() {
      this.closeModalDialog();
      this.postPKS(this.successApprov, this.failApprov);
    },
    closeApprov() {
      this.closeModalDialog()
      this.showPenyelesaianPKSPopup = true;
    },
    successApprov() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Berhasil Kirim Pengajuan',
        message: 'Pengajuan berhasil dikirim ke manager',
        closeFunction: this.closeSelesaiApprov
      }
    },
    failApprov(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Kirim Pengajuan',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiApprov() {
      this.closeModalSuccess()
      this.$router.push('/prosesstaff')
    },

    // Popup Kirim File
    SendFile() {
      this.showProgressPKSPopupStaff = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Upload File',
        message: 'Apakan anda yakin upload file ini?',
        okFunction: this.openSendFile,
        closeFunction: this.closeSendFile
      }
    },
    openSendFile() {
      this.closeModalDialog();
      this.postFilePks(this.successUploadFile, this.failUploadFile);
    },
    closeSendFile() {
      this.closeModalDialog();
      this.showProgressPKSPopupStaff = true;
    },
    successUploadFile() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Berhasil Upload File',
        message: 'File berhasil di upload',
        closeFunction: this.closeSelesaiUploadFile
      }
    },
    failUploadFile(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Upload File',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiUploadFile() {
      this.closeModalSuccess();
      this.showProgressPKSPopupStaff = false;
      this.getDataApi(this.id);
    },

    // Popup Revisi Minor
    SendRevisiMinor() {
      this.modalDialog = {
        isVisible: true,
        title: 'Permintaan Revisi Pengajuan',
        message: 'Apakan anda yakin akan meminta pengajuan ini direvisi',
        okFunction: this.openRevisiMinor,
        closeFunction: this.closeRevisiMinor
      }
    },
    openRevisiMinor() {
      this.closeModalDialog();
      this.postRevisiMinor(this.successRevisiMinor, this.failRevisiMinor);
    },
    closeRevisiMinor() {
      this.closeModalDialog()
    },
    successRevisiMinor() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Berhasil Meminta Revisi',
        message: 'Pengajuan berhasil diminta untuk direvisi',
        closeFunction: this.closeSelesaiRevisiMinor
      }
    },
    failRevisiMinor(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Revisi Minor',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRevisiMinor() {
      this.closeModalSuccess()
      this.$router.push('/prosesstaff')
    },

    // Popup Request Stop Clock
    SendRequestStopclock() {
      this.modalDialog = {
        isVisible: true,
        title: 'Pengajuan Stopclock',
        message: 'Apakan anda yakin akan mengajukan stopclock',
        okFunction: this.openRequestStopclock,
        closeFunction: this.closeRequestStopclock
      }
    },
    openRequestStopclock() {
      this.closeModalDialog();
      this.postRequestStopClock(this.successRequestStopclock, this.failRequestStopclock);
    },
    closeRequestStopclock() {
      this.closeModalDialog()
    },
    successRequestStopclock() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Pengajuan Stopclock',
        message: 'Pengajuan stopclock berhasil',
        closeFunction: this.closeSelesaiRequestStopclock
      }
    },
    failRequestStopclock(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Pengajuan Stopclock',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRequestStopclock() {
      this.closeModalSuccess()
      this.getDataApi(this.id);
    },

    // Popup Request Pembatalan Stop Clock
    SendRequestAbortStopclock() {
      this.modalDialog = {
        isVisible: true,
        title: 'Pembatalan Pengajuan Stopclock',
        message: 'Apakan anda yakin akan membatalkan pengajuan stopclock',
        okFunction: this.openRequestAbortStopclock,
        closeFunction: this.closeRequestAbortStopclock
      }
    },
    openRequestAbortStopclock() {
      this.closeModalDialog();
      this.postRequestAbortStopClock(this.successRequestAbortStopclock, this.failRequestAbortStopclock);
    },
    closeRequestAbortStopclock() {
      this.closeModalDialog()
    },
    successRequestAbortStopclock() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Pembatalan Pengajuan Stopclock',
        message: 'Pembatalan pengajuan stopclock berhasil',
        closeFunction: this.closeSelesaiRequestAbortStopclock
      }
    },
    failRequestAbortStopclock(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Pembatalan Pengajuan Stopclock',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRequestAbortStopclock() {
      this.closeModalSuccess()
      this.getDataApi(this.id);
    },

    // Popup Request Start Clock
    SendRequestStartclock() {
      this.modalDialog = {
        isVisible: true,
        title: 'Pengajuan Startclock',
        message: 'Apakan anda yakin akan mengajukan startclock',
        okFunction: this.openRequestStartclock,
        closeFunction: this.closeRequestStartclock
      }
    },
    openRequestStartclock() {
      this.closeModalDialog();
      this.postRequestStartClock(this.successRequestStartclock, this.failRequestStartclock);
    },
    closeRequestStartclock() {
      this.closeModalDialog()
    },
    successRequestStartclock() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Pengajuan Startclock',
        message: 'Pengajuan startclock berhasil',
        closeFunction: this.closeSelesaiRequestStartclock
      }
    },
    failRequestStartclock(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Pengajuan Startclock',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRequestStartclock() {
      this.closeModalSuccess()
      this.getDataApi(this.id);
    },

    // Popup Request Pembatalan Start Clock
    SendRequestAbortStartclock() {
      this.modalDialog = {
        isVisible: true,
        title: 'Pembatalan Pengajuan Startclock',
        message: 'Apakan anda yakin akan membatalkan pengajuan startclock',
        okFunction: this.openRequestAbortStartclock,
        closeFunction: this.closeRequestAbortStartclock
      }
    },
    openRequestAbortStartclock() {
      this.closeModalDialog();
      this.postRequestAbortStartClock(this.successRequestAbortStartclock, this.failRequestAbortStartclock);
    },
    closeRequestAbortStartclock() {
      this.closeModalDialog()
    },
    successRequestAbortStartclock() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Pembatalan Pengajuan Startclock',
        message: 'Pembatalan pengajuan startclock berhasil',
        closeFunction: this.closeSelesaiRequestAbortStartclock
      }
    },
    failRequestAbortStartclock(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Gagal Pembatalan Pengajuan Startclock',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRequestAbortStartclock() {
      this.closeModalSuccess()
      this.getDataApi(this.id);
    },

    // api
    async getDataApi(id) {
      this.isLoading = true;
      const res1 = await fetchGet('functionary', null, this.$router);
      if (res1.status == 200) {
        this.optionsPejabat = res1.data.map(item => ({
          value: item.fullName,
          label: item.title
        }))
        console.log(res1.data, 'functionary');
      } else {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
      }
      const res = await fetchGet(
        `mitra/staff/pks/proses/${id}`,
        null,
        this.$router
      );
      if (res.status == 200) {
        this.dataBerkas = res.data;
        res.data.attachmentsPks.forEach((item) => {
          if (item.fileType == 'KKB') {
            this.fileDetails.KKB.fileName = item.fileName;
            this.fileDetails.KKB.fileSize = item.fileSize;
            this.fileDetails.KKB.fileId = item.id;
            this.fileDetails.KKB.file = null;
            this.fileDetails.KKB.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'KKR') {
            this.fileDetails.KKR.fileName = item.fileName;
            this.fileDetails.KKR.fileSize = item.fileSize;
            this.fileDetails.KKR.fileId = item.id;
            this.fileDetails.KKR.file = null;
            this.fileDetails.KKR.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'KKF') {
            this.fileDetails.KKF.fileName = item.fileName;
            this.fileDetails.KKF.fileSize = item.fileSize;
            this.fileDetails.KKF.fileId = item.id;
            this.fileDetails.KKF.file = null;
            this.fileDetails.KKF.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'KKO') {
            this.fileDetails.KKO.fileName = item.fileName;
            this.fileDetails.KKO.fileSize = item.fileSize;
            this.fileDetails.KKO.fileId = item.id;
            this.fileDetails.KKO.file = null;
            this.fileDetails.KKO.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Dokumen Surat Menyurat') {
            this.fileDetails.DokumenSuratMenyurat.fileName = item.fileName;
            this.fileDetails.DokumenSuratMenyurat.fileSize = item.fileSize;
            this.fileDetails.DokumenSuratMenyurat.fileId = item.id;
            this.fileDetails.DokumenSuratMenyurat.file = null;
            this.fileDetails.DokumenSuratMenyurat.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Proposal Mitra') {
            this.fileDetails.ProposalMitra.fileName = item.fileName;
            this.fileDetails.ProposalMitra.fileSize = item.fileSize;
            this.fileDetails.ProposalMitra.fileId = item.id;
            this.fileDetails.ProposalMitra.file = null;
            this.fileDetails.ProposalMitra.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Dokumen Lainnya') {
            this.fileDetails.DokumenLainnya.fileName = item.fileName;
            this.fileDetails.DokumenLainnya.fileSize = item.fileSize;
            this.fileDetails.DokumenLainnya.fileId = item.id;
            this.fileDetails.DokumenLainnya.file = null;
            this.fileDetails.DokumenLainnya.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Surat Penawaran') {
            this.fileName1 = item.fileName;
            this.fileSize1 = item.fileSize;
            this.fileId1 = item.id;
            this.file1 = null;
            this.fileUploaded1 = true;
            this.linkDownloadFile1 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Proposal') {
            this.fileName2 = item.fileName;
            this.fileSize2 = item.fileSize;
            this.fileId2 = item.id;
            this.file2 = null;
            this.fileUploaded2 = true;
            this.linkDownloadFile2 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Evaluasi') {
            this.fileName3 = item.fileName;
            this.fileSize3 = item.fileSize;
            this.fileId3 = item.id;
            this.file3 = null;
            this.fileUploaded3 = true;
            this.linkDownloadFile3 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Negosiasi') {
            this.fileName4 = item.fileName;
            this.fileSize4 = item.fileSize;
            this.fileId4 = item.id;
            this.file4 = null;
            this.fileUploaded4 = true;
            this.linkDownloadFile4 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'BAK Pemilihan Mitra') {
            this.fileName5 = item.fileName;
            this.fileSize5 = item.fileSize;
            this.fileId5 = item.id;
            this.file5 = null;
            this.fileUploaded5 = true;
            this.linkDownloadFile5 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Surat Pesanan') {
            this.fileName6 = item.fileName;
            this.fileSize6 = item.fileSize;
            this.fileId6 = item.id;
            this.file6 = null;
            this.fileUploaded6 = true;
            this.linkDownloadFile6 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'PKS') {
            this.fileName7 = item.fileName;
            this.fileSize7 = item.fileSize;
            this.fileId7 = item.id;
            this.file7 = null;
            this.fileUploaded7 = true;
            this.linkDownloadFile7 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
        })
        if (res.data.officialUndersign) {
          const choosenStaff = res1.data.find(item => item.fullName == res.data.officialUndersign);
          if (choosenStaff) {
            this.namaPejabat = { label: choosenStaff.title, value: choosenStaff.fullName };
          }
        }
        if (!res.data.isStopClock && res.data.status == "Pengajuan") {
          this.statusAction = 1;
        }
        if (!res.data.isStopClock && res.data.status == "Pengajuan StopClock") {
          this.statusAction = 2;
        }
        if (res.data.isStopClock && res.data.status == "Pengajuan") {
          this.statusAction = 3;
        }
        if (res.data.isStopClock && res.data.status == "Pengajuan StartClock") {
          this.statusAction = 4;
        }
        this.isLoading = false;
        console.log(res.data);
      } else {
        this.isLoading = false;
        this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
      }
    },
    async postPKS(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('ApprovalNote', this.ApprovalNote)
      form.append('pksNumber', this.nomorPKS)
      form.append('officialUndersign', this.namaPejabat.value)
      form.append('approvalCompletionDate', this.selectedDateSelesai)
      form.append('endContractDate', this.jangkaWaktuPerjanjian)
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
    async postFilePks(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      let sort = 0;
      if (this.fileDetails.KKB.file || this.fileDetails.KKB.fileId) {
        if (this.fileDetails.KKB.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'KKB')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.KKB.file)
          if (this.fileDetails.KKB.fileId && this.fileDetails.KKB.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.KKB.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.KKR.file || this.fileDetails.KKR.fileId) {
        if (this.fileDetails.KKR.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'KKR')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.KKR.file)
          if (this.fileDetails.KKR.fileId && this.fileDetails.KKR.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.KKR.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.KKF.file || this.fileDetails.KKF.fileId) {
        if (this.fileDetails.KKF.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'KKF')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.KKF.file)
          if (this.fileDetails.KKF.fileId && this.fileDetails.KKF.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.KKF.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.KKO.file || this.fileDetails.KKO.fileId) {
        if (this.fileDetails.KKO.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'KKO')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.KKO.file)
          if (this.fileDetails.KKO.fileId && this.fileDetails.KKO.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.KKO.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.DokumenSuratMenyurat.file || this.fileDetails.DokumenSuratMenyurat.fileId) {
        if (this.fileDetails.DokumenSuratMenyurat.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Dokumen Surat Menyurat')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.DokumenSuratMenyurat.file)
          if (this.fileDetails.DokumenSuratMenyurat.fileId && this.fileDetails.DokumenSuratMenyurat.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.DokumenSuratMenyurat.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.ProposalMitra.file || this.fileDetails.ProposalMitra.fileId) {
        if (this.fileDetails.ProposalMitra.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Proposal Mitra')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.ProposalMitra.file)
          if (this.fileDetails.ProposalMitra.fileId && this.fileDetails.ProposalMitra.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.ProposalMitra.fileId)
          }
          sort++
        }
      }
      if (this.fileDetails.DokumenLainnya.file || this.fileDetails.DokumenLainnya.fileId) {
        if (this.fileDetails.DokumenLainnya.file) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Dokumen Lainnya')
          form.append(`attachmentsPks[${sort}].file`, this.fileDetails.DokumenLainnya.file)
          if (this.fileDetails.DokumenLainnya.fileId && this.fileDetails.DokumenLainnya.file) {
            form.append(`attachmentsPks[${sort}].id`, this.fileDetails.DokumenLainnya.fileId)
          }
          sort++
        }
      }
      if (this.file1 || this.fileId1) {
        if (this.file1) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Surat Penawaran')
          form.append(`attachmentsPks[${sort}].file`, this.file1)
          if (this.fileId1 && this.file1) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId1)
          }
          sort++
        }
      }
      if (this.file2 || this.fileId2) {
        if (this.file2) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Proposal')
          form.append(`attachmentsPks[${sort}].file`, this.file2)
          if (this.fileId2 && this.file2) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId2)
          }
          sort++
        }
      }
      if (this.file3 || this.fileId3) {
        if (this.file3) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Evaluasi')
          form.append(`attachmentsPks[${sort}].file`, this.file3)
          if (this.fileId3 && this.file3) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId3)
          }
          sort++
        }
      }
      if (this.file4 || this.fileId4) {
        if (this.file4) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Negosiasi')
          form.append(`attachmentsPks[${sort}].file`, this.file4)
          if (this.fileId4 && this.file4) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId4)
          }
          sort++
        }
      }
      if (this.file5 || this.fileId5) {
        if (this.file5) {
          form.append(`attachmentsPks[${sort}].fileType`, 'BAK Pemilihan Mitra')
          form.append(`attachmentsPks[${sort}].file`, this.file5)
          if (this.fileId5 && this.file5) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId5)
          }
          sort++
        }
      }
      if (this.file6 || this.fileId6) {
        if (this.file6) {
          form.append(`attachmentsPks[${sort}].fileType`, 'Surat Pesanan')
          form.append(`attachmentsPks[${sort}].file`, this.file6)
          if (this.fileId6 && this.file6) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId6)
          }
          sort++
        }
      }
      if (this.file7 || this.fileId7) {
        if (this.file7) {
          form.append(`attachmentsPks[${sort}].fileType`, 'PKS')
          form.append(`attachmentsPks[${sort}].file`, this.file7)
          if (this.fileId7 && this.file7) {
            form.append(`attachmentsPks[${sort}].id`, this.fileId7)
          }
          sort++
        }
      }
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}/req/files`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 201) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction(res.data);
      }
    },
    async postRevisiMinor(successFunction, failFunction) {
      this.isLoading = true;
      const res = await fetchPost(`mitra/staff/pks/incoming-data/${this.id}/minor-revision`, null, null, this.$router);
      if (res.status == 200) {
        this.isSelesaiRevisiMinor = true;
        this.isSendRevisiMinor = false;
        this.isLoading = false;
        successFunction();
        console.log(res.data)
      } else {
        this.isLoading = false;
        failFunction(res.data);
      }
    },
    async postRequestStopClock(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('ApprovalNote', this.ApprovalNote)
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}/req/stop-clock`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
    async postRequestAbortStopClock(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('ApprovalNote', this.ApprovalNote)
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}/req/abort-stop-clock`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
    async postRequestStartClock(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('ApprovalNote', this.ApprovalNote)
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}/req/start-clock`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
    async postRequestAbortStartClock(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('ApprovalNote', this.ApprovalNote)
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/staff/pks/proses/${this.id}/req/abort-start-clock`, null, form, this.$router);
      console.log(res.data)
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getDataApi(this.$route.params.id);
    }
    this.id = this.$route.params.id;
  },
};
</script>

<style>
.fixed {
  z-index: 9999;
}

label {
  cursor: pointer;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-10 {
  z-index: 10;
}

.custom-date-picker {
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.50016 0.333496C3.86835 0.333496 4.16683 0.631973 4.16683 1.00016V1.8335H9.8335V1.00016C9.8335 0.631973 10.132 0.333496 10.5002 0.333496C10.8684 0.333496 11.1668 0.631973 11.1668 1.00016V1.8335H11.5002C12.6968 1.8335 13.6668 2.80355 13.6668 4.00016V11.5002C13.6668 12.6968 12.6968 13.6668 11.5002 13.6668H2.50016C1.30355 13.6668 0.333496 12.6968 0.333496 11.5002V4.00016C0.333496 2.80355 1.30355 1.8335 2.50016 1.8335H2.8335V1.00016C2.8335 0.631973 3.13197 0.333496 3.50016 0.333496ZM2.50016 3.16683C2.03993 3.16683 1.66683 3.53993 1.66683 4.00016V4.49955C1.92336 4.39257 2.20486 4.3335 2.50016 4.3335H11.5002C11.7955 4.3335 12.077 4.39257 12.3335 4.49955V4.00016C12.3335 3.53993 11.9604 3.16683 11.5002 3.16683H2.50016ZM12.3335 6.50016C12.3335 6.03993 11.9604 5.66683 11.5002 5.66683H2.50016C2.03993 5.66683 1.66683 6.03993 1.66683 6.50016V11.5002C1.66683 11.9604 2.03993 12.3335 2.50016 12.3335H11.5002C11.9604 12.3335 12.3335 11.9604 12.3335 11.5002V6.50016Z" fill="%232671D9"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
