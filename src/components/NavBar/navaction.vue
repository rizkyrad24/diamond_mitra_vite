<!-- eslint-disable vue/multi-word-component-names -->

<template>
        <div class="w-[100px] absolute rounded-b-lg translate-x-[30px] translate-y-[25px] mt-8 bg-white">
            <ul class="text-sm">
                <li @click="logout" class="mx-1 hover:bg-[#E9F1FB] hover:text-[#2671D9] hover:font-medium cursor-pointer border-b-[1px] px-2 py-2">Logout</li>
            </ul>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { clearDataLogin } from '@/utils/helper';

const router = useRouter();

function logout() {
    clearDataLogin();
    router.push("/login");
}
</script>
