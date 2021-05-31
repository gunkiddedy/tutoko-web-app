import Public from './pages/Public'
import ProductDetail from './pages/ProductDetail'
import Desa from './pages/Desa'
import Edit from './pages/Edit'
import Kecamatan from './pages/Kecamatan'
import Download from './pages/Download'
import Login from './pages/Login'
import Add from './pages/Add'
import UploadProduk from './pages/UploadProduk'
import Global from './pages/Global'
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
        {
            path: '/global-umkm',
            component: Global,
            name: 'global',
        },
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