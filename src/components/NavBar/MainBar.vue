<script setup>
import navaction from './navaction.vue';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
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
  <div class="flex items-center justify-between w-auto h-[70px] bg-[#FFFFFF] border-b border-[#E5E7E9] bg-topographic">
    <div class="text-[20px] font-sans text-[#2671D9] font-medium py-5 px-4">Selamat Datang di DIAMOND</div>
    <div class="flex items-center space-x-4 pr-4">
      <div class="relative">
        <!-- Notification Button -->
        <button @click="showHistoryPopup = true" class="relative rounded-full hover:bg-[#F3F4F6] py-2">
          <img src="@/assets/image/bell.png" class="w-[20px] h-[20px]" />
          <i class="fas fa-bell"></i>
        </button>
        <!-- Closed - Auditor Verified -->
        <div v-if="showHistoryPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[90%] max-w-[656px] max-h-[90vh] overflow-y-auto">
            <div class="bg-[#E9F1FB] rounded-t-lg p-6 sticky top-0 z-10">
              <div class="flex justify-between items-center">
                <h2 class="text-[20px] font-sans font-semibold text-[#000000]">Notifikasi</h2>
                <button @click="closePopup" class="text-[#CCCCCC] text-[20px]">&times;</button>
              </div>
            </div>
            <!-- Closed - Auditor Verified -->
            <div class="popup-content pt-5">
              <div v-for="(row, index) in notifList" :key="index" class="flex items-start w-[608px] h-auto ml-[24px] cursor-pointer" @click="selectSection(index)">
                <div class="w-[80px] h-[50px] text-[14px] font-sans text-[#667085]">
                  <p>{{ dateParsing(row.dateOfUpdate) }}</p>
                </div>
                <div class="w-[2px] h-[200px] ml-[24px]" :class="selected === index ? 'bg-[#2671D9]' : 'bg-[#E4E7EC]'"></div>
                <div class="w-[480px] ml-[24px]">
                  <div class="w-[432px] ml-[24px]">
                    <p class="text-[18px] font-semibold" :class="selected === index ? 'text-[#2671D9]' : 'text-[#333333]'">{{ row.base }}</p>
                    <p class="mt-2 text-[14px] font-semibold">{{ row.partnershipTitle }}</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C]">{{ row.content }}</p>
                    <p class="mt-2 text-[14px] font-semibold">User</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">User</span>
                      <span>: {{ row.fullName }}</span>
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">Pelaksana</span>
                      <span>: {{ row.disposedStaff }}</span>
                    </p>
                  </div>
                  <!-- <div class="ml-[24px] mt-[10px]">
                    <div class="font-sans text-[#9C9C9C] w-[316px] h-[64px] border rounded-lg flex items-center px-[16px]">
                      <div class="mr-[16px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#E9F1FB" />
                          <path
                            d="M21.3332 13.9602C21.3262 13.8989 21.3128 13.8386 21.2932 13.7802V13.7202C21.2611 13.6516 21.2184 13.5886 21.1665 13.5335L17.1665 9.5335C17.1114 9.48164 17.0484 9.43888 16.9798 9.40683H16.9198C16.8521 9.36799 16.7773 9.34306 16.6998 9.3335H12.6665C12.1361 9.3335 11.6274 9.54421 11.2523 9.91928C10.8772 10.2944 10.6665 10.8031 10.6665 11.3335V20.6668C10.6665 21.1973 10.8772 21.706 11.2523 22.081C11.6274 22.4561 12.1361 22.6668 12.6665 22.6668H19.3332C19.8636 22.6668 20.3723 22.4561 20.7474 22.081C21.1225 21.706 21.3332 21.1973 21.3332 20.6668V14.0002V13.9602ZM17.3332 11.6068L19.0598 13.3335H17.9998C17.823 13.3335 17.6535 13.2633 17.5284 13.1382C17.4034 13.0132 17.3332 12.8436 17.3332 12.6668V11.6068ZM19.9998 20.6668C19.9998 20.8436 19.9296 21.0132 19.8046 21.1382C19.6796 21.2633 19.51 21.3335 19.3332 21.3335H12.6665C12.4897 21.3335 12.3201 21.2633 12.1951 21.1382C12.0701 21.0132 11.9998 20.8436 11.9998 20.6668V11.3335C11.9998 11.1567 12.0701 10.9871 12.1951 10.8621C12.3201 10.7371 12.4897 10.6668 12.6665 10.6668H15.9998V12.6668C15.9998 13.1973 16.2106 13.706 16.5856 14.081C16.9607 14.4561 17.4694 14.6668 17.9998 14.6668H19.9998V20.6668Z"
                            fill="#2671D9"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-[#000000]">File Investigasi.pdf</p>
                      </div>
                      <div class="ml-auto flex items-center">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.1273 1.8586C3.82623 1.8586 2.77151 2.91333 2.77151 4.21439C2.77151 4.3646 2.7855 4.51103 2.81209 4.65261C2.86338 4.92563 2.70465 5.19444 2.44082 5.28139C1.66641 5.5366 1.1086 6.26612 1.1086 7.12448C1.1086 8.19594 1.9772 9.06454 3.04866 9.06454H9.28456C10.1264 9.06454 10.8089 8.38207 10.8089 7.5402C10.8089 6.88984 10.4014 6.33328 9.82582 6.1146C9.54484 6.00784 9.40015 5.6966 9.49964 5.41297C9.53969 5.29879 9.56172 5.17548 9.56172 5.04584C9.56172 4.43358 9.06538 3.93724 8.45311 3.93724C8.33269 3.93724 8.2178 3.95624 8.11064 3.99099C7.96592 4.03793 7.80826 4.02331 7.67463 3.95057C7.541 3.87783 7.44314 3.75336 7.404 3.60633C7.13598 2.5996 6.21746 1.8586 5.1273 1.8586ZM1.66291 4.21439C1.66291 2.30106 3.21397 0.75 5.1273 0.75C6.55033 0.75 7.77195 1.60759 8.30536 2.8335C8.35424 2.83027 8.40351 2.82863 8.45311 2.82863C9.67764 2.82863 10.6703 3.82131 10.6703 5.04584C10.6703 5.1292 10.6657 5.2116 10.6567 5.29277C11.4124 5.75509 11.9175 6.58816 11.9175 7.5402C11.9175 8.99433 10.7387 10.1731 9.28456 10.1731H3.04866C1.36493 10.1731 0 8.80821 0 7.12448C0 5.93703 0.678595 4.9092 1.66812 4.40575C1.66466 4.34236 1.66291 4.27856 1.66291 4.21439ZM5.95875 3.66009C6.26488 3.66009 6.51305 3.90826 6.51305 4.21439V6.61773L7.22971 5.90107C7.44617 5.6846 7.79714 5.6846 8.01361 5.90107C8.23008 6.11754 8.23008 6.46851 8.01361 6.68497L6.3507 8.34788C6.13423 8.56435 5.78327 8.56435 5.5668 8.34788L3.90389 6.68497C3.68742 6.46851 3.68742 6.11754 3.90389 5.90107C4.12036 5.6846 4.47133 5.6846 4.68779 5.90107L5.40445 6.61773V4.21439C5.40445 3.90826 5.65262 3.66009 5.95875 3.66009Z"
                            fill="#2671D9"
                          />
                        </svg>
                        <a href="#" class="text-[#2671D9] text-sm">Download</a>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- <div class="flex items-start w-[608px] h-[326px] ml-[24px] mt-[16px] cursor-pointer" @click="selectSection('closed')">
                <div class="w-[80px] h-[50px] text-[14px] font-sans text-[#667085]">
                  <p></p>
                </div>
                <div class="w-[2px] h-[326px] ml-[24px]" :class="selected === 'closed' ? 'bg-[#2671D9]' : 'bg-[#E4E7EC]'"></div>
                <div class="w-[480px] h-[326px] ml-[24px]">
                  <div class="w-[432px] h-[188px] ml-[24px]">
                    <p class="text-[18px] font-semibold" :class="selected === 'closed' ? 'text-[#2671D9]' : 'text-[#333333]'">Closed - Auditor Verified</p>
                    <p class="mt-2 text-[14px] font-semibold">Keterangan Approval/Reject</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.</p>
                    <p class="mt-2 text-[14px] font-semibold">User</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">Username</span>
                      <span>: Fulan</span>
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">NIP</span>
                      <span>: 1239713986</span>
                    </p>
                  </div>
                  <div class="ml-[24px] mt-[10px]">
                    <div class="font-sans text-[#9C9C9C] w-[316px] h-[64px] border rounded-lg flex items-center px-[16px]">
                      <div class="mr-[16px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#E9F1FB" />
                          <path
                            d="M21.3332 13.9602C21.3262 13.8989 21.3128 13.8386 21.2932 13.7802V13.7202C21.2611 13.6516 21.2184 13.5886 21.1665 13.5335L17.1665 9.5335C17.1114 9.48164 17.0484 9.43888 16.9798 9.40683H16.9198C16.8521 9.36799 16.7773 9.34306 16.6998 9.3335H12.6665C12.1361 9.3335 11.6274 9.54421 11.2523 9.91928C10.8772 10.2944 10.6665 10.8031 10.6665 11.3335V20.6668C10.6665 21.1973 10.8772 21.706 11.2523 22.081C11.6274 22.4561 12.1361 22.6668 12.6665 22.6668H19.3332C19.8636 22.6668 20.3723 22.4561 20.7474 22.081C21.1225 21.706 21.3332 21.1973 21.3332 20.6668V14.0002V13.9602ZM17.3332 11.6068L19.0598 13.3335H17.9998C17.823 13.3335 17.6535 13.2633 17.5284 13.1382C17.4034 13.0132 17.3332 12.8436 17.3332 12.6668V11.6068ZM19.9998 20.6668C19.9998 20.8436 19.9296 21.0132 19.8046 21.1382C19.6796 21.2633 19.51 21.3335 19.3332 21.3335H12.6665C12.4897 21.3335 12.3201 21.2633 12.1951 21.1382C12.0701 21.0132 11.9998 20.8436 11.9998 20.6668V11.3335C11.9998 11.1567 12.0701 10.9871 12.1951 10.8621C12.3201 10.7371 12.4897 10.6668 12.6665 10.6668H15.9998V12.6668C15.9998 13.1973 16.2106 13.706 16.5856 14.081C16.9607 14.4561 17.4694 14.6668 17.9998 14.6668H19.9998V20.6668Z"
                            fill="#2671D9"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-[#000000]">File Investigasi.pdf</p>
                      </div>
                      <div class="ml-auto flex items-center">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.1273 1.8586C3.82623 1.8586 2.77151 2.91333 2.77151 4.21439C2.77151 4.3646 2.7855 4.51103 2.81209 4.65261C2.86338 4.92563 2.70465 5.19444 2.44082 5.28139C1.66641 5.5366 1.1086 6.26612 1.1086 7.12448C1.1086 8.19594 1.9772 9.06454 3.04866 9.06454H9.28456C10.1264 9.06454 10.8089 8.38207 10.8089 7.5402C10.8089 6.88984 10.4014 6.33328 9.82582 6.1146C9.54484 6.00784 9.40015 5.6966 9.49964 5.41297C9.53969 5.29879 9.56172 5.17548 9.56172 5.04584C9.56172 4.43358 9.06538 3.93724 8.45311 3.93724C8.33269 3.93724 8.2178 3.95624 8.11064 3.99099C7.96592 4.03793 7.80826 4.02331 7.67463 3.95057C7.541 3.87783 7.44314 3.75336 7.404 3.60633C7.13598 2.5996 6.21746 1.8586 5.1273 1.8586ZM1.66291 4.21439C1.66291 2.30106 3.21397 0.75 5.1273 0.75C6.55033 0.75 7.77195 1.60759 8.30536 2.8335C8.35424 2.83027 8.40351 2.82863 8.45311 2.82863C9.67764 2.82863 10.6703 3.82131 10.6703 5.04584C10.6703 5.1292 10.6657 5.2116 10.6567 5.29277C11.4124 5.75509 11.9175 6.58816 11.9175 7.5402C11.9175 8.99433 10.7387 10.1731 9.28456 10.1731H3.04866C1.36493 10.1731 0 8.80821 0 7.12448C0 5.93703 0.678595 4.9092 1.66812 4.40575C1.66466 4.34236 1.66291 4.27856 1.66291 4.21439ZM5.95875 3.66009C6.26488 3.66009 6.51305 3.90826 6.51305 4.21439V6.61773L7.22971 5.90107C7.44617 5.6846 7.79714 5.6846 8.01361 5.90107C8.23008 6.11754 8.23008 6.46851 8.01361 6.68497L6.3507 8.34788C6.13423 8.56435 5.78327 8.56435 5.5668 8.34788L3.90389 6.68497C3.68742 6.46851 3.68742 6.11754 3.90389 5.90107C4.12036 5.6846 4.47133 5.6846 4.68779 5.90107L5.40445 6.61773V4.21439C5.40445 3.90826 5.65262 3.66009 5.95875 3.66009Z"
                            fill="#2671D9"
                          />
                        </svg>
                        <a href="#" class="text-[#2671D9] text-sm">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- Approved -->
              <!-- Implemented -->
              <!-- <div class="flex items-start w-[608px] h-[326px] ml-[24px] cursor-pointer" @click="selectSection('implemented')">
                <div class="w-[80px] h-[50px] text-[14px] font-sans text-[#667085]">
                  <p>04 Feb 24<br />10.24</p>
                </div>
                <div class="w-[2px] h-[326px] ml-[24px]" :class="selected === 'implemented' ? 'bg-[#2671D9]' : 'bg-[#E4E7EC]'"></div>
                <div class="w-[480px] h-[326px] ml-[24px]">
                  <div class="w-[432px] h-[188px] ml-[24px]">
                    <p class="text-[18px] font-semibold" :class="selected === 'implemented' ? 'text-[#2671D9]' : 'text-[#333333]'">Implemented</p>
                    <p class="mt-2 text-[14px] font-semibold">Tindak Lanjut Auditor</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.</p>
                    <p class="mt-2 text-[14px] font-semibold">User</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">Username</span>
                      <span>: Fulan</span>
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">NIP</span>
                      <span>: 1239713986</span>
                    </p>
                  </div>
                  <div class="ml-[24px] mt-[10px]">
                    <div class="font-sans text-[#9C9C9C] w-[316px] h-[64px] border rounded-lg flex items-center px-[16px]">
                      <div class="mr-[16px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#E9F1FB" />
                          <path
                            d="M21.3332 13.9602C21.3262 13.8989 21.3128 13.8386 21.2932 13.7802V13.7202C21.2611 13.6516 21.2184 13.5886 21.1665 13.5335L17.1665 9.5335C17.1114 9.48164 17.0484 9.43888 16.9798 9.40683H16.9198C16.8521 9.36799 16.7773 9.34306 16.6998 9.3335H12.6665C12.1361 9.3335 11.6274 9.54421 11.2523 9.91928C10.8772 10.2944 10.6665 10.8031 10.6665 11.3335V20.6668C10.6665 21.1973 10.8772 21.706 11.2523 22.081C11.6274 22.4561 12.1361 22.6668 12.6665 22.6668H19.3332C19.8636 22.6668 20.3723 22.4561 20.7474 22.081C21.1225 21.706 21.3332 21.1973 21.3332 20.6668V14.0002V13.9602ZM17.3332 11.6068L19.0598 13.3335H17.9998C17.823 13.3335 17.6535 13.2633 17.5284 13.1382C17.4034 13.0132 17.3332 12.8436 17.3332 12.6668V11.6068ZM19.9998 20.6668C19.9998 20.8436 19.9296 21.0132 19.8046 21.1382C19.6796 21.2633 19.51 21.3335 19.3332 21.3335H12.6665C12.4897 21.3335 12.3201 21.2633 12.1951 21.1382C12.0701 21.0132 11.9998 20.8436 11.9998 20.6668V11.3335C11.9998 11.1567 12.0701 10.9871 12.1951 10.8621C12.3201 10.7371 12.4897 10.6668 12.6665 10.6668H15.9998V12.6668C15.9998 13.1973 16.2106 13.706 16.5856 14.081C16.9607 14.4561 17.4694 14.6668 17.9998 14.6668H19.9998V20.6668Z"
                            fill="#2671D9"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-[#000000]">File Investigasi.pdf</p>
                      </div>
                      <div class="ml-auto flex items-center">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.1273 1.8586C3.82623 1.8586 2.77151 2.91333 2.77151 4.21439C2.77151 4.3646 2.7855 4.51103 2.81209 4.65261C2.86338 4.92563 2.70465 5.19444 2.44082 5.28139C1.66641 5.5366 1.1086 6.26612 1.1086 7.12448C1.1086 8.19594 1.9772 9.06454 3.04866 9.06454H9.28456C10.1264 9.06454 10.8089 8.38207 10.8089 7.5402C10.8089 6.88984 10.4014 6.33328 9.82582 6.1146C9.54484 6.00784 9.40015 5.6966 9.49964 5.41297C9.53969 5.29879 9.56172 5.17548 9.56172 5.04584C9.56172 4.43358 9.06538 3.93724 8.45311 3.93724C8.33269 3.93724 8.2178 3.95624 8.11064 3.99099C7.96592 4.03793 7.80826 4.02331 7.67463 3.95057C7.541 3.87783 7.44314 3.75336 7.404 3.60633C7.13598 2.5996 6.21746 1.8586 5.1273 1.8586ZM1.66291 4.21439C1.66291 2.30106 3.21397 0.75 5.1273 0.75C6.55033 0.75 7.77195 1.60759 8.30536 2.8335C8.35424 2.83027 8.40351 2.82863 8.45311 2.82863C9.67764 2.82863 10.6703 3.82131 10.6703 5.04584C10.6703 5.1292 10.6657 5.2116 10.6567 5.29277C11.4124 5.75509 11.9175 6.58816 11.9175 7.5402C11.9175 8.99433 10.7387 10.1731 9.28456 10.1731H3.04866C1.36493 10.1731 0 8.80821 0 7.12448C0 5.93703 0.678595 4.9092 1.66812 4.40575C1.66466 4.34236 1.66291 4.27856 1.66291 4.21439ZM5.95875 3.66009C6.26488 3.66009 6.51305 3.90826 6.51305 4.21439V6.61773L7.22971 5.90107C7.44617 5.6846 7.79714 5.6846 8.01361 5.90107C8.23008 6.11754 8.23008 6.46851 8.01361 6.68497L6.3507 8.34788C6.13423 8.56435 5.78327 8.56435 5.5668 8.34788L3.90389 6.68497C3.68742 6.46851 3.68742 6.11754 3.90389 5.90107C4.12036 5.6846 4.47133 5.6846 4.68779 5.90107L5.40445 6.61773V4.21439C5.40445 3.90826 5.65262 3.66009 5.95875 3.66009Z"
                            fill="#2671D9"
                          />
                        </svg>
                        <a href="#" class="text-[#2671D9] text-sm">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- Open -->
              <!-- <div class="flex items-start w-[608px] h-[326px] ml-[24px] cursor-pointer" @click="selectSection('open')">
                <div class="w-[80px] h-[50px] text-[14px] font-sans text-[#667085]">
                  <p>04 Jan 24<br />10.24</p>
                </div>
                <div class="w-[2px] h-[315px] ml-[24px]" :class="selected === 'open' ? 'bg-[#2671D9]' : 'bg-[#E4E7EC]'"></div>
                <div class="w-[480px] h-[315px] ml-[24px]">
                  <div class="w-[432px] h-[188px] ml-[24px]">
                    <p class="text-[18px] font-semibold" :class="selected === 'open' ? 'text-[#2671D9]' : 'text-[#333333]'">Open</p>
                    <p class="mt-2 text-[14px] font-semibold">Deskripsi</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.</p>
                    <p class="mt-2 text-[14px] font-semibold">User</p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">Username</span>
                      <span>: Fulan</span>
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">NIP</span>
                      <span>: 1239713986</span>
                    </p>
                  </div>
                  <div class="ml-[24px] mt-[10px]">
                    <div class="font-sans text-[#9C9C9C] w-[316px] h-[64px] border rounded-lg flex items-center px-[16px]">
                      <div class="mr-[16px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#E9F1FB" />
                          <path
                            d="M21.3332 13.9602C21.3262 13.8989 21.3128 13.8386 21.2932 13.7802V13.7202C21.2611 13.6516 21.2184 13.5886 21.1665 13.5335L17.1665 9.5335C17.1114 9.48164 17.0484 9.43888 16.9798 9.40683H16.9198C16.8521 9.36799 16.7773 9.34306 16.6998 9.3335H12.6665C12.1361 9.3335 11.6274 9.54421 11.2523 9.91928C10.8772 10.2944 10.6665 10.8031 10.6665 11.3335V20.6668C10.6665 21.1973 10.8772 21.706 11.2523 22.081C11.6274 22.4561 12.1361 22.6668 12.6665 22.6668H19.3332C19.8636 22.6668 20.3723 22.4561 20.7474 22.081C21.1225 21.706 21.3332 21.1973 21.3332 20.6668V14.0002V13.9602ZM17.3332 11.6068L19.0598 13.3335H17.9998C17.823 13.3335 17.6535 13.2633 17.5284 13.1382C17.4034 13.0132 17.3332 12.8436 17.3332 12.6668V11.6068ZM19.9998 20.6668C19.9998 20.8436 19.9296 21.0132 19.8046 21.1382C19.6796 21.2633 19.51 21.3335 19.3332 21.3335H12.6665C12.4897 21.3335 12.3201 21.2633 12.1951 21.1382C12.0701 21.0132 11.9998 20.8436 11.9998 20.6668V11.3335C11.9998 11.1567 12.0701 10.9871 12.1951 10.8621C12.3201 10.7371 12.4897 10.6668 12.6665 10.6668H15.9998V12.6668C15.9998 13.1973 16.2106 13.706 16.5856 14.081C16.9607 14.4561 17.4694 14.6668 17.9998 14.6668H19.9998V20.6668Z"
                            fill="#2671D9"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-[#000000]">File Investigasi.pdf</p>
                      </div>
                      <div class="ml-auto flex items-center">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.1273 1.8586C3.82623 1.8586 2.77151 2.91333 2.77151 4.21439C2.77151 4.3646 2.7855 4.51103 2.81209 4.65261C2.86338 4.92563 2.70465 5.19444 2.44082 5.28139C1.66641 5.5366 1.1086 6.26612 1.1086 7.12448C1.1086 8.19594 1.9772 9.06454 3.04866 9.06454H9.28456C10.1264 9.06454 10.8089 8.38207 10.8089 7.5402C10.8089 6.88984 10.4014 6.33328 9.82582 6.1146C9.54484 6.00784 9.40015 5.6966 9.49964 5.41297C9.53969 5.29879 9.56172 5.17548 9.56172 5.04584C9.56172 4.43358 9.06538 3.93724 8.45311 3.93724C8.33269 3.93724 8.2178 3.95624 8.11064 3.99099C7.96592 4.03793 7.80826 4.02331 7.67463 3.95057C7.541 3.87783 7.44314 3.75336 7.404 3.60633C7.13598 2.5996 6.21746 1.8586 5.1273 1.8586ZM1.66291 4.21439C1.66291 2.30106 3.21397 0.75 5.1273 0.75C6.55033 0.75 7.77195 1.60759 8.30536 2.8335C8.35424 2.83027 8.40351 2.82863 8.45311 2.82863C9.67764 2.82863 10.6703 3.82131 10.6703 5.04584C10.6703 5.1292 10.6657 5.2116 10.6567 5.29277C11.4124 5.75509 11.9175 6.58816 11.9175 7.5402C11.9175 8.99433 10.7387 10.1731 9.28456 10.1731H3.04866C1.36493 10.1731 0 8.80821 0 7.12448C0 5.93703 0.678595 4.9092 1.66812 4.40575C1.66466 4.34236 1.66291 4.27856 1.66291 4.21439ZM5.95875 3.66009C6.26488 3.66009 6.51305 3.90826 6.51305 4.21439V6.61773L7.22971 5.90107C7.44617 5.6846 7.79714 5.6846 8.01361 5.90107C8.23008 6.11754 8.23008 6.46851 8.01361 6.68497L6.3507 8.34788C6.13423 8.56435 5.78327 8.56435 5.5668 8.34788L3.90389 6.68497C3.68742 6.46851 3.68742 6.11754 3.90389 5.90107C4.12036 5.6846 4.47133 5.6846 4.68779 5.90107L5.40445 6.61773V4.21439C5.40445 3.90826 5.65262 3.66009 5.95875 3.66009Z"
                            fill="#2671D9"
                          />
                        </svg>
                        <a href="#" class="text-[#2671D9] text-sm">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div @click="actionDrop" class="flex items-center space-x-2 cursor-pointer">
        <!-- User Avatar -->
        <div class="w-[24px] h-[24px] bg-[#C7E5D7] text-[10px] font-sans rounded-full font-bold text-[#333333] flex items-center justify-center">J</div>
        <div class="text-[16px] text-[#666666] font-semibold font-sans">{{ fullName }}</div>
      </div>
      <navaction v-show="isAction" />
    </div>
  </div>
</template>

<script>
import { fetchGet } from '@/api/apiFunction';

export default {
  name: "MainBar",
  data() {
    return {
      showHistoryPopup: false,
      selected: null,
      isAction: false,
      fullName: '',
      notifList: [],
      isLoading: false,
      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
    };
  },
  methods: {
    selectSection(section) {
      this.selected = section;
    },
    closePopup() {
      this.showHistoryPopup = false;
    },
    actionDrop() {
      this.isAction = !this.isAction
    },
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },

    async getDataApi() {
      this.isLoading = true;
      const res = await fetchGet("history", null, this.$router);
      if (res.status == 200) {
          console.log(res.data)
          this.notifList = res.data;
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
  mounted() {
    this.fullName = `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
    this.getDataApi();
  }
};
</script>

<style scoped>
.popup-content {
  max-height: 500px; /* Batas tinggi maksimal konten popup */
  overflow-y: auto; /* Aktifkan scroll hanya pada sumbu Y */
  padding-right: 10px; /* Ruang untuk scrollbar */
}
/* Menyembunyikan scrollbar secara default */
.popup-content::-webkit-scrollbar {
  width: 0; /* Atur lebar scrollbar menjadi 0 untuk menyembunyikannya */
  background: transparent; /* Membuat background scrollbar transparan */
}
/* Menampilkan scrollbar saat di-scroll atau di-hover */
.popup-content:hover::-webkit-scrollbar {
  width: 8px; /* Tentukan lebar scrollbar saat muncul */
  background-color: rgba(0, 0, 0, 0.1); /* Beri background saat muncul */
}
.popup-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3); /* Warna bagian dalam scrollbar */
  border-radius: 4px; /* Membuat ujung scrollbar melengkung */
}
.popup-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.6); /* Warna scrollbar saat dihover */
}
.relative .absolute {
  right: 0;
  top: 100%;
  margin-top: 8px;
}
.bg-topographic {
  background-image: url("/src/assets/image/topographic.png");
  background-size: cover;
  background-position: center;
}
</style>
