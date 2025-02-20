<script setup>
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
import ModalSuccess from '../modalsuccess.vue';
import ModalDialog from '../modaldialog.vue';
import { dateParsing } from '@/utils/helper';
// import SelectSearch from '../SelectSearch/SelectSearch.vue';
</script>

<template>
  <Loading :isVisible="isLoading" />
  <ModalFailed
    :isVisible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <ModalSuccess :isVisible="modalSuccess.isVisible" :title="modalSuccess.title" :message="modalSuccess.message"
    @close="modalSuccess.closeFunction" />
  <ModalDialog :isVisible="modalDialog.isVisible" :title="modalDialog.title" :message="modalDialog.message"
    @close="modalDialog.closeFunction" @ok="modalDialog.okFunction" />
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
          <h1 class="w-[825px] h-[56px] font-sans text-[20px] text-[#333333] mt-4 ml-[5px] font-semibold">Detail Pengajuan {{
              dataBerkas?.base || 'PKS' }}</h1>
          <div class="relative mt-4 mb-4 items-start w-[209px] h-[72px] border-[1px] border-[#E5E7E9] rounded-md">
            <div class="w-[209px] h-[29px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md bg-[#FFB200]">
              <h1 class="mt-[7px] ml-4 w-[177px] h-[15px] font-sans text-[10px] text-[#333333] font-medium">Progress Kemitraan {{
              dataBerkas?.base || 'PKS' }}</h1>
            </div>
            <div class="flex items-center">
              <h1 class="w-[79px] h-[27px] font-sans text-[18px] font-bold text-[#FFB200] ml-4 mb-2">Proposal</h1>
              <button @click="showProgressPKSPopup = true" class="ml-[80px]">
                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </button>
            </div>
            <div v-if="showProgressPKSPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
              <div class="bg-[#FFFFFF] re rounded-lg shadow-lg w-[1040.84px] h-[650px] border-collapse">
                <button @click="closePopup" class="text-[#2671D9] w-[14px] h-[14px] absolute mt-[30px] ml-[990px] text-[20px]">&times;</button>
                <div class="flex mt-[8px]">
                  <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="6" height="28" fill="#1F5AAD" />
                  </svg>
                  <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Progress Kemitraan</h1>
                </div>
                <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">{{ dataBerkas?.partnershipTitle }}</h1>
                <div class="flex">
                  <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-5 border-[1px] border-[#E5E7E9]">
                    <div class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">Surat Penawaran</div>
                    </div>
                    <div class="flex flex-col ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName1 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize1 }}</p>
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
                  <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-[370px] absolute border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">Proposal</div>
                    </div>
                    <div class="flex flex-col ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Proposal</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName2 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize2 }}</p>
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
                  <div class="absolute flex flex-col w-[289px] h-[130px] rounded-lg mt-[24px] ml-[710px] border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">Evaluasi</div>
                    </div>
                    <div class="flex flex-col ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Evaluasi</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName3 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize3 }}</p>
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
                  <div class="absolute flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-[710px] border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">Negosiasi</div>
                    </div>
                    <div class="flex flex-col ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Negosiasi</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName4 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize4 }}</p>
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
                  <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-[370px] absolute border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">BAK Pemilihan Mitra</div>
                    </div>
                    <div class="flex flex-col ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen BAK Pemilihan Mitra</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName5 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize5 }}</p>
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
                  <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[215px] ml-5 absolute border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">Surat Pesanan</div>
                    </div>
                    <div class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Pesanan</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName6 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize6 }}</p>
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
                  <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-[400px] ml-5 absolute border-[1px] border-[#DEDEDE]">
                    <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
                      <div class="font-sans text-[14px] font-semibold text-white">PKS</div>
                    </div>
                    <div class="flex items-center ml-4 mt-[10px]">
                      <div class="flex items-center">
                        <div>
                          <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen PKS</div>
                          <div class="mt-[12px] ml-[38px]">
                            <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px] truncate">{{ fileName7 }}</p>
                            <p class="w-[200px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize7 }}</p>
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
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[17px]">{{ dataBerkas?.partnershipType || '-' }}</span>
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
              <div class="flex w-1/2">
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
              </div>
              <a :href="fileDetails.KKB.linkDownload" v-if="fileDetails.KKB.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.KKB.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.KKB.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- KKR -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKR</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <a :href="fileDetails.KKR.linkDownload" v-if="fileDetails.KKR.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.KKR.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.KKR.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- KKF -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKF</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <a :href="fileDetails.KKF.linkDownload" v-if="fileDetails.KKF.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.KKF.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.KKF.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- KKO -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKO</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <a :href="fileDetails.KKO.linkDownload" v-if="fileDetails.KKO.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.KKO.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.KKO.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Proposal Mitra -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal Mitra</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <a :href="fileDetails.ProposalMitra.linkDownload" v-if="fileDetails.ProposalMitra.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.ProposalMitra.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.ProposalMitra.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Dokumen Surat Menyurat (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Surat Menyurat</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <a :href="fileDetails.DokumenSuratMenyurat.linkDownload" v-if="fileDetails.DokumenSuratMenyurat.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.DokumenSuratMenyurat.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.DokumenSuratMenyurat.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Dokumen Lainnya (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Lainnya</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <a :href="fileDetails.DokumenLainnya.linkDownload" v-if="fileDetails.DokumenLainnya.fileName" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileDetails.DokumenLainnya.fileName }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileDetails.DokumenLainnya.fileSize }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
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
              </div>
              <a :href="linkDownloadFile1" v-if="fileName1" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName1 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize1 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Proposal -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal</h1>
              </div>
              <a :href="linkDownloadFile2" v-if="fileName2" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName2 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize2 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Evaluasi -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Evaluasi</h1>
              </div>
              <a :href="linkDownloadFile3" v-if="fileName3" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName3 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize3 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Negosiasi -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Negosiasi</h1>
              </div>
              <a :href="linkDownloadFile4" v-if="fileName4" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName4 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize4 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- BAK Pemilihan Mitra -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">BAK Pemilihan Mitra</h1>
              </div>
              <a :href="linkDownloadFile5" v-if="fileName5" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName5 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize5 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- Surat Pesanan -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Surat Pesanan</h1>
              </div>
              <a :href="linkDownloadFile6" v-if="fileName6" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName6 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize6 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
              </div>
            </div>
            <!-- PKS -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">PKS</h1>
              </div>
              <a :href="linkDownloadFile7" v-if="fileName7" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                  <path
                    d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                    fill="#2671D9" />
                </svg>
                <div class="py-2 w-[200px] flex-grow truncate pe-3">
                  <span class="text-[#333333] text-sm font-semibold">{{ fileName7 }}</span>
                  <p class="text-[#9E9E9E] text-xs">{{ fileSize7 }}</p>
                </div>
              </a>
              <div v-else class="w-[333px] h-auto">
                <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
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
                  <span class="block text-[#333333] font-sans text-[14px]">{{ dataBerkas?.responseText }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[520px] h-auto ml-4">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Catatan Approval</h1>
            </div>
            <textarea v-model="ApprovalNote" type="text" placeholder="Masukkan catatan approval" class="w-full h-[88px] text-black font-sans text-sm focus:border-gray-400 focus:outline-none border border-gray-300 rounded-lg p-2 mt-2 bg-white"></textarea>
          </div>
        </div>
        <div class="w-[1046px] h-[1px] bg-[#E5E7E9] items-center transform ml-4 mt-6"></div>
        <!-- <div v-if="isManager" class="flex flex-row w-[1046px] h-auto ml-4 py-9">
          <button @click="showPenyelesaianPKSPopup = true" class="absolute bottom-[12px] right-[24px] flex">
            <div class="flex items-center justify-center w-[83px] h-[40px] bg-[#2671D9] hover:bg-[#1E5BB7] rounded-lg border-[1px] text-[#FFFFFF]">
              <span class="text-[14px] font-sans font-semibold text-[white] ml-3 mt-[9px] mr-3 mb-[9px]">Selesai</span>
            </div>
          </button>
        </div> -->
        <!-- <div v-if="showPenyelesaianPKSPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
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
              <button @click="SendApprove" :disabled="!isFormComplete" class="absolute mt-[450px] ml-[378px] flex">
                <div :class="{ 'bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF]': isFormComplete, 'bg-[#E6E6E6] text-[#7F7F80]': !isFormComplete }" class="flex items-center justify-center w-[78px] h-[40px] rounded-lg border-[1px]">
                  <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Kirim</span>
                </div>
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGet, fetchPostForm } from '@/api/apiFunction';
import { baseURL } from '@/api/apiManager';

export default {
  data() {
    return {
      fileUploaded1: false,
      fileName1: "",
      fileSize1: "",
      linkDownloadFile1: "",
      fileUploaded2: false,
      fileName2: "",
      fileSize2: "",
      linkDownloadFile2: "",
      fileUploaded3: false,
      fileName3: "",
      fileSize3: "",
      linkDownloadFile3: "",
      fileUploaded4: false,
      fileName4: "",
      fileSize4: "",
      linkDownloadFile4: "",
      fileUploaded5: false,
      fileName5: "",
      fileSize5: "",
      linkDownloadFile5: "",
      fileUploaded6: false,
      fileName6: "",
      fileSize6: "",
      linkDownloadFile6: "",
      fileUploaded7: false,
      fileName7: "",
      fileSize7: "",
      linkDownloadFile7: "",

      fileDetails: {
        KKB: { fileName: "", fileSize: "", linkDownload: "" },
        KKR: { fileName: "", fileSize: "", linkDownload: "" },
        KKF: { fileName: "", fileSize: "", linkDownload: "" },
        KKO: { fileName: "", fileSize: "", linkDownload: "" },
        ProposalMitra: { fileName: "", fileSize: "", linkDownload: "" },
        DokumenSuratMenyurat: { fileName: "", fileSize: "", linkDownload: "" },
        DokumenLainnya: { fileName: "", fileSize: "", linkDownload: "" },
        SuratPenawaran: { fileName: "", fileSize: "", linkDownload: "" },
        Proposal: { fileName: "", fileSize: "", linkDownload: "" },
        Evaluasi: { fileName: "", fileSize: "", linkDownload: "" },
        Negosiasi: { fileName: "", fileSize: "", linkDownload: "" },
        BAKPemilihanMitra: { fileName: "", fileSize: "", linkDownload: "" },
        SuratPesanan: { fileName: "", fileSize: "", linkDownload: "" },
        PKS: { fileName: "", fileSize: "", linkDownload: "" },
      },
      isDropdownArrowOpen: false,
      isDropdownArrowOpen1: false,
      isDropdownArrowOpen2: false,
      isDropdownArrowOpen3: false,
      isDropdownArrowOpen4: false,
      showDropdown: false,
      showPenyelesaianPKSPopup: false,
      showProgressPKSPopup: false,
      showDisetujuiPopup: false,
      selectedDateSelesai: "", // Untuk menyimpan tanggal selesai
      jangkaWaktuPerjanjian: "",
      showDatePickerSelesai: false,
      showDatePickerPerjanjian: false,
      nomorPKS: "",
      namaPejabat: null,
      optionsPejabat: [],

      dataBerkas: null,
      id: null,
      ApprovalNote: '',
      isManager: false,

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
    };
  },
  computed: {
    isFormComplete() {
      return this.nomorPKS && this.selectedDateSelesai && this.jangkaWaktuPerjanjian && this.namaPejabat;
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
    closePopup() {
      this.showProgressPKSPopup = false;
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
      this.$router.push("/proses");
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
    closePenyelesaianPKSPopup() {
      this.showPenyelesaianPKSPopup = false;
    },
    // Popup Approv
    SendApprove() {
      this.showPenyelesaianPKSPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Selesaikan Pengajuan',
        message: `Apakan anda yakin akan menyelesaikan pengajuan ini`,
        okFunction: this.openApprove,
        closeFunction: this.closeApprove
      }
    },
    openApprove() {
      this.closeModalDialog();
      this.postPks(this.successApprove, this.failApprove);
    },
    closeApprove() {
      this.closeModalDialog()
      this.showPenyelesaianPKSPopup = true;
    },
    successApprove() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Selesaikan Berhasil',
        message: `Pengajuan berhasil diselesaikan`,
        closeFunction: this.closeSelesaiApprove
      }
    },
    failApprove(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Selesaikan Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiApprove() {
      this.closeModalSuccess();
      this.$router.push('/proses')
    },

    handleSelectionChange(option) {
      this.namaPejabat = option;
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
      let url = "";
      const position = localStorage.getItem('position')
      if (position == "PartnershipManager") {
        url = `mitra/manager/pks/proses/${id}`;
      } else if (position == "PartnershipVP") {
        url = `mitra/vp/pks/proses/${id}`;
      } else if (position == "PartnershipDirector") {
        url = `mitra/direksi/pks/proses/${id}`;
      } else {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Akses Ditolak',
          message: "Anda tidak mempunyai akses untuk aproval"
        }
      }
      const res = await fetchGet(
        url,
        null,
        this.$router
      );
      if (res.status == 200) {
        this.dataBerkas = res.data;
        res.data.attachmentsPks.forEach((item) => {
          if (item.fileType == 'KKB') {
            this.fileDetails.KKB.fileName = item.fileName;
            this.fileDetails.KKB.fileSize = item.fileSize;
            this.fileDetails.KKB.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'KKR') {
            this.fileDetails.KKR.fileName = item.fileName;
            this.fileDetails.KKR.fileSize = item.fileSize;
            this.fileDetails.KKR.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'KKF') {
            this.fileDetails.KKF.fileName = item.fileName;
            this.fileDetails.KKF.fileSize = item.fileSize;
            this.fileDetails.KKF.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'KKO') {
            this.fileDetails.KKO.fileName = item.fileName;
            this.fileDetails.KKO.fileSize = item.fileSize;
            this.fileDetails.KKO.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'Dokumen Surat Menyurat') {
            this.fileDetails.DokumenSuratMenyurat.fileName = item.fileName;
            this.fileDetails.DokumenSuratMenyurat.fileSize = item.fileSize;
            this.fileDetails.DokumenSuratMenyurat.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'Proposal Mitra') {
            this.fileDetails.ProposalMitra.fileName = item.fileName;
            this.fileDetails.ProposalMitra.fileSize = item.fileSize;
            this.fileDetails.ProposalMitra.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'Dokumen Lainnya') {
            this.fileDetails.DokumenLainnya.fileName = item.fileName;
            this.fileDetails.DokumenLainnya.fileSize = item.fileSize;
            this.fileDetails.DokumenLainnya.linkDownload = `${baseURL.replace('/api',"")}/download/file/${item.id}`
          }
          if (item.fileType == 'Surat Penawaran') {
            this.fileName1 = item.fileName;
            this.fileSize1 = item.fileSize;
            this.linkDownloadFile1 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Proposal') {
            this.fileName2 = item.fileName;
            this.fileSize2 = item.fileSize;
            this.linkDownloadFile2 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Evaluasi') {
            this.fileName3 = item.fileName;
            this.fileSize3 = item.fileSize;
            this.linkDownloadFile3 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Negosiasi') {
            this.fileName4 = item.fileName;
            this.fileSize4 = item.fileSize;
            this.linkDownloadFile4 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'BAK Pemilihan Mitra') {
            this.fileName5 = item.fileName;
            this.fileSize5 = item.fileSize;
            this.linkDownloadFile5 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'Surat Pesanan') {
            this.fileName6 = item.fileName;
            this.fileSize6 = item.fileSize;
            this.linkDownloadFile6 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (item.fileType == 'PKS') {
            this.fileName7 = item.fileName;
            this.fileSize7 = item.fileSize;
            this.linkDownloadFile7 = `${baseURL.replace('/api',"")}/download/file/${item.id}`;
          }
          if (res.data.officialUndersign) {
          const choosenStaff = res1.data.find(item => item.fullName == res.data.officialUndersign);
          if (choosenStaff) {
            this.namaPejabat = { label: choosenStaff.title, value: choosenStaff.fullName };
          }
        }
        })
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
    async postPks(successFunction, failFunction) {
      this.isLoading = true;
      const form = new FormData()
      form.append('approvalNote', this.ApprovalNote)
      form.append('pksNumber', this.nomorPKS)
      form.append('officialUndersign', this.namaPejabat.value)
      form.append('approvalCompletionDate', this.selectedDateSelesai)
      form.append('endContractDate', this.jangkaWaktuPerjanjian)
      
      // Display the values
      for (var pair of form.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await fetchPostForm(`mitra/manager/pks/proses/${this.id}`, null, form, this.$router);
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
    this.isManager = localStorage.getItem('position') == 'PartnershipManager';
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
