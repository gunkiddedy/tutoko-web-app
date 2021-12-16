import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./pages/Dashboard.vue'),
            name: 'dashboard'
        },
        {
            path: '/barang-mandiri',
            component: () => import('./pages/barang/BarangMandiri.vue'),
            name: 'barang-mandiri'
        },
        {
            path: '/barang-supplier',
            component: () => import('./pages/barang/BarangSupplier.vue'),
            name: 'barang-supplier'
        },
        {
            path: '/barang-add-mandiri',
            component: () => import('./pages/barang/BarangAddMandiri.vue'),
            name: 'barang-add-mandiri'
        },
        {
            path: '/barang-add-supplier',
            component: () => import('./pages/barang/BarangAddSupplier.vue'),
            name: 'barang-add-supplier'
        },
        {
            path: '/barang-edit/:id',
            component: () => import('./pages/barang/BarangEdit.vue'),
            name: 'barang-edit',
            props: true
        },
        {
            path: '/pegawai',
            component: () => import('./pages/pegawai/Pegawai.vue'),
            name: 'pegawai'
        },
        {
            path: '/pegawai-add',
            component: () => import('./pages/pegawai/PegawaiAdd.vue'),
            name: 'pegawai-add'
        },
        {
            path: '/pegawai-edit/:id',
            component: () => import('./pages/pegawai/PegawaiEdit.vue'),
            name: 'pegawai-edit',
            props: true
        },
        {
            path: '/supplier',
            component: () => import('./pages/supplier/Supplier.vue'),
            name: 'supplier'
        },
        {
            path: '/supplier-add',
            component: () => import('./pages/supplier/SupplierAdd.vue'),
            name: 'supplier-add'
        },
        {
            path: '/supplier-edit/:id',
            component: () => import('./pages/supplier/SupplierEdit.vue'),
            name: 'supplier-edit',
            props: true
        },
        {
            path: '/pembelian',
            component: () => import('./pages/pembelian/Pembelian.vue'),
            name: 'pembelian'
        },
        {
            path: '/pembelian-add',
            component: () => import('./pages/pembelian/PembelianAdd.vue'),
            name: 'pembelian-add'
        },
        {
            path: '/pembelian-edit/:id',
            component: () => import('./pages/pembelian/PembelianEdit.vue'),
            name: 'pembelian-edit',
            props: true
        },
        {
            path: '/penjualan',
            component: () => import('./pages/penjualan/Penjualan.vue'),
            name: 'penjualan'
        },
        {
            path: '/penjualan-add/:id',
            component: () => import('./pages/penjualan/PenjualanAdd.vue'),
            name: 'penjualan-add',
            props: true
        },
        {
            path: '/penjualan-non-mandiri',
            component: () => import('./pages/penjualan/PenjualanAddNonMandiri.vue'),
            name: 'penjualan-non-mandiri',
            props: true
        },
        {
            path: '/penjualan-edit/:id',
            component: () => import('./pages/penjualan/PenjualanEdit.vue'),
            name: 'penjualan-edit',
            props: true
        },
        {
            path: '/produksi',
            component: () => import('./pages/produksi/Produksi.vue'),
            name: 'produksi'
        },
        {
            path: '/produksi-add',
            component: () => import('./pages/produksi/ProduksiAdd.vue'),
            name: 'produksi-add',
        },
        {
            path: '/produksi-edit/:id',
            component: () => import('./pages/produksi/ProduksiEdit.vue'),
            name: 'produksi-edit',
            props: true
        },
        // {
        //     path: '/produksi-edit/:id',
        //     component: () => import('./pages/produksi/ProduksiEdit.vue'),
        //     name: 'produksi-edit',
        //     props: true
        // },
        {
            path: '/laporan',
            component: () => import('./pages/laporan/index.vue'),
            name: 'laporan'
        },
        {
            path: '/gaji',
            component: () => import('./pages/laporan/Gaji.vue'),
            name: 'gaji'
        },
        {
            path: '/produksi-report',
            component: () => import('./pages/laporan/Produksi.vue'),
            name: 'produksi-report'
        },
        {
            path: '/penjualan-report',
            component: () => import('./pages/laporan/Penjualan.vue'),
            name: 'penjualan-report'
        },
        {
            path: '/pembelian-report',
            component: () => import('./pages/laporan/Pembelian.vue'),
            name: 'pembelian-report'
        },
        {
            path: '/absensi',
            component: () => import('./pages/absensi/Absensi.vue'),
            name: 'absensi'
        },
        {
            path: '/absensi-add',
            component: () => import('./pages/absensi/AbsensiAdd.vue'),
            name: 'absensi-add',
        },
        {
            path: '/absensi-edit/:id',
            component: () => import('./pages/absensi/AbsensiEdit.vue'),
            name: 'absensi-edit',
            props: true
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '*',
            component: PageNotFound,
            name: 'page-not-found'
        }

    ]
}