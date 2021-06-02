import Barang from './pages/Barang'
import BarangAdd from './pages/BarangAdd'
import BarangEdit from './pages/BarangEdit'
import InvoiceMasuk from './pages/InvoiceMasuk'
import InvoiceKeluar from './pages/InvoiceKeluar'
import Penjualan from './pages/Penjualan'
import Pembelian from './pages/Pembelian'
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
            path: '/public',
            component: Public,
            name: 'public'
        },
        {
            path: '/barang',
            component: Barang,
            name: 'barang'
        },
        {
            path: '/barang-add',
            component: BarangAdd,
            name: 'barang-add'
        },
        {
            path: '/barang-edit/:id',
            component: BarangEdit,
            name: 'barang-edit',
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
            path: '/penjualan',
            component: Penjualan,
            name: 'penjualan'
        },
        {
            path: '/pembelian',
            component: Pembelian,
            name: 'pembelian'
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