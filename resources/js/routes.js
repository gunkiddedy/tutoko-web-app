import Master from './pages/Master'

import InvoiceMasuk from './pages/InvoiceMasuk'
import InvoiceKeluar from './pages/InvoiceKeluar'
import Produksi from './pages/Produksi'
import Pegawai from './pages/Pegawai'
import Supplier from './pages/Supplier'
import Login from './pages/Login'

import Public from './pages/Public'
import ProductDetail from './pages/ProductDetail'
import Desa from './pages/Desa'
import Edit from './pages/Edit'
import Kecamatan from './pages/Kecamatan'
import Download from './pages/Download'
import Add from './pages/Add'
import UploadProduk from './pages/UploadProduk'
// import Global from './pages/Global'
import PageNotFound from './pages/PageNotFound'
// import Template from './components/Template'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./pages/barang/Barang.vue'),
            name: 'barang'
        },
        {
            path: '/master',
            component: Master,
            name: 'master'
        },
        {
            path: '/public',
            component: Public,
            name: 'public'
        },
        {
            path: '/barang',
            component: () => import('./pages/barang/Barang.vue'),
            name: 'barang'
        },
        {
            path: '/barang-add',
            component: () => import('./pages/barang/BarangAdd.vue'),
            name: 'barang-add'
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
            path: '/penjualan-edit/:id',
            component: () => import('./pages/penjualan/PenjualanEdit.vue'),
            name: 'penjualan-edit',
            props: true
        },
        {
            path: '/invoice-masuk',
            component: InvoiceMasuk,
            name: 'invoice-masuk'
        },
        {
            path: '/invoice-keluar',
            component: InvoiceKeluar,
            name: 'invoice-keluar'
        },
        {
            path: '/produksi',
            component: Produksi,
            name: 'produksi'
        },
        {
            path: '/pegawai',
            component: Pegawai,
            name: 'pegawai'
        },
        {
            path: '/supplier',
            component: Supplier,
            name: 'supplier'
        },
        {
            path: '/product-detail/:id',
            component: ProductDetail,
            name: 'product-detail',
            props: true
        },
        {
            path: '/desa/:id',
            component: Desa,
            name: 'desa',
            props: true
        },
        {
            path: '/edit/:id',
            component: Edit,
            name: 'edit',
            props: true
        },
        {
            path: '/kecamatan/:id',
            component: Kecamatan,
            name: 'kecamatan',
            props: true
        },
        {
            path: '/input/:id',
            component: Add,
            name: 'input',
            props: true
        },
        {
            path: '/upload-produk',
            component: UploadProduk,
            name: 'upload-produk',
        },
        // {
        //     path: '/global-umkm',
        //     component: Global,
        //     name: 'global',
        // },
        {
            path: '/download',
            component: Download,
            name: 'download',
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