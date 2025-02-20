import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/login-page.vue';
import HomePage from '@/pages/home-page.vue';
import DashboardView from '@/pages/dashboard/dashboard-view.vue';
import DashboardStaff from '@/pages/dashboard/dashboard-staff.vue';
import MasukManager from '@/pages/masuk/masuk-manager.vue';
import DetailPengajuanManager from '@/pages/detail-pengajuan/detail-pengajuan-manager.vue';
import MasukStaff from '@/pages/masuk/masuk-staff.vue';
import DetailPengajuanStaff from '@/pages/detail-pengajuan/detail-pengajuan-staff.vue';
import ApprovalMitra from '@/pages/approval/approval-view.vue';
import ApprovalStopclock from '@/pages/approval/approval-stopclock.vue';
import DetailPengajuanApproval from '@/pages/approval/detail-pengajuan-approval.vue';
import DetailPengajuanApprovalStopclock from '@/pages/approval/detail-pengajuan-approval-stopclock.vue';
import ProsesMitra from '@/pages/proses/proses-view.vue';
import ProsesStaff from '@/pages/proses/proses-staff.vue';
import SelesaiMitra from '@/pages/selesai/selesai-view.vue';
import SelesaiDitolak from '@/pages/selesai/selesai-ditolak.vue';
import DetailPengajuanPKS from '@/pages/proses/proses-detail-pengajuan-pks.vue';
import DetailPengajuanPKSstaff from '@/pages/proses/proses-detail-pengajuan-pks-staff.vue';  
import DetailPengajuanMoU from '@/pages/proses/proses-detail-pengajuan-mou.vue';
import DetailPengajuanMoUStaff from '@/pages/proses/proses-detail-pengajuan-mou-staff.vue';
import SelesaiStaff from '@/pages/selesai/selesai-staff.vue';
import SelesaiDitolakStaff from '@/pages/selesai/selesai-ditolak-staff.vue';
import UserData from '@/pages/master-data/user-data.vue';
import PejabatData from '@/pages/master-data/pejabat-data.vue';
import PelangganData from '@/pages/master-data/pelanggan-data.vue';
import ProdukData from '@/pages/master-data/produk-data.vue';
import CandidateData from '@/pages/master-data/candidate-data.vue';

import { clearDataLogin } from '@/utils/helper';

const routes = [
  { name: 'LoginPage', path: '/login', component: LoginPage },
  { path: '/', redirect: '/login' },
  { name: 'Homepage', path: '/homepage', component: HomePage, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'Dashboard', path: '/dashboard', component: DashboardView, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'DashboardStaff', path: '/dashboardstaff', component: DashboardStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] }  },
  { name: 'MasukManager', path: '/masukmanager', component: MasukManager, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP'] }  },
  { name: 'DetailPengajuanManager', path: '/masukmanager/detailpengajuanmanager/:base/:id', component: DetailPengajuanManager, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP'] }  },
  { name: 'MasukStaff', path: '/masukstaff', component: MasukStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] }  },
  { name: 'DetailPengajuanStaff', path: '/masukstaff/detailpengajuanstaff/:base/:id', component: DetailPengajuanStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] }  },
  { name: 'ApprovalMitra', path: '/approval', component: ApprovalMitra, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'ApprovalStopclock', path: '/approval/approvalstopclock', component: ApprovalStopclock, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'DetailPengajuanApproval', path: '/approval/detailpengajuanapproval/:base/:id', component: DetailPengajuanApproval, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'DetailPengajuanApprovalStopclock', path: '/approval/approvalstopclock/detailpengajuanapprovalstopclock/:base/:id', component: DetailPengajuanApprovalStopclock, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] }  },
  { name: 'ProsesMitra', path: '/proses', component: ProsesMitra, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] } },
  { name: 'ProsesStaff', path: '/prosesstaff', component: ProsesStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] } },
  { name: 'SelesaiMitra', path: '/selesai', component: SelesaiMitra, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] } },
  { name: 'SelesaiStaff', path: '/selesaistaff', component: SelesaiStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] } },
  { name: 'Ditolak', path: '/selesai/ditolak', component: SelesaiDitolak, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] } },
  { name: 'DitolakStaff', path: '/selesaistaff/ditolakstaff', component: SelesaiDitolakStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] } },
  { name: 'DetailPengajuanPKS', path: '/proses/detailpengajuanpks/:id', component: DetailPengajuanPKS, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] } },
  { name: 'DetailPengajuanPKSstaff', path: '/prosesstaff/detailpengajuanpksstaff/:id', component: DetailPengajuanPKSstaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] } },
  { name: 'DetailPengajuanMoU', path: '/proses/detailpengajuanmou/:id', component: DetailPengajuanMoU, meta: { requiresAuth: true, role: ['PartnershipManager', 'PartnershipVP', 'PartnershipDirector'] } },
  { name: 'DetailPengajuanMoUStaff', path: '/prosesstaff/detailpengajuanmoustaff/:id', component: DetailPengajuanMoUStaff, meta: { requiresAuth: true, role: ['PartnershipStaff'] } },
  { name: 'UserData', path: '/user', component: UserData, meta: { requiresAuth: true, role: ['Admin'] } },
  { name: 'PejabatData', path: '/pejabat', component: PejabatData, meta: { requiresAuth: true, role: ['Admin'] } },
  { name: 'PelangganData', path: '/pelanggan', component: PelangganData, meta: { requiresAuth: true, role: ['Admin'] } },
  { name: 'ProdukData', path: '/produk', component: ProdukData, meta: { requiresAuth: true, role: ['Admin'] } },
  { name: 'CandidateData', path: '/candidate', component: CandidateData, meta: { requiresAuth: true, role: ['Admin'] } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Cek jika rute membutuhkan autentikasi
  if (to.meta.requiresAuth) {
    const accessToken = localStorage.getItem('access');
    const position = localStorage.getItem('position');
    if (accessToken && to.meta.role.includes(position)) {
      // Misalnya, token valid jika ditemukan nilai yang sesuai
      next(); // Lanjutkan ke rute tujuan
    } else {
      // Jika token tidak ditemukan, arahkan ke halaman login
      clearDataLogin()
      next({ name: 'LoginPage' });
    }
  } else {
    // Jika rute tidak membutuhkan autentikasi, lanjutkan
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      const position = localStorage.getItem('position');
      if (position == 'PartnershipManager' || position == 'PartnershipVP' || position == 'PartnershipDirector') {
        next({ name: 'Dashboard' });
      } else if (position == 'PartnershipStaff') {
        next({ name: 'DashboardStaff' });
      } else if (position == 'Admin') {
        next({ name: 'UserData' });
      } else {
        clearDataLogin();
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
