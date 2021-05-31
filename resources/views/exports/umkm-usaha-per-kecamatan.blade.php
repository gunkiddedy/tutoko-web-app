<table>
    <thead class="header">
        <tr>
            <th colspan="45" class="judul"><strong>DATA UMKM KABUPATEN GUNUNGKIDUL</strong></th>
        </tr>
        <tr>
            <td><b>Periode</b></td>
            <td><b>2020</b></td>
        </tr>
        <tr>
            <td><b>Kriteria</b></td>
            <td><b>Usaha Pokok per Kecamatan</b></td>
        </tr>
        <tr>
            <th rowspan="4"><b>No.</b></th>
            <th rowspan="4"><b>Nama Usaha.</b></th>
            <th rowspan="4"><b>Kelembagaan</b></th>
            <th rowspan="4"><b>Nama Pemilik</b></th>
            <th rowspan="4"><b>NIK</b></th>
            <th rowspan="4"><b>Jenis Kelamin</b></th>
            <th rowspan="4"><b>Disabilitas</b></th>
            <th rowspan="4"><b>SIU</b></th>
            <th rowspan="4"><b>NPWP</b></th>

            <th rowspan="4"><b>Tahun Usaha</b></th>

            <th colspan="2"><b>Alamat Usaha</b></th>
            
            
            <th rowspan="4"><b>No.Telp</b></th>
            <th rowspan="4"><b>Email</b></th>

            <th colspan="11"><b>Usaha Pokok</b></th>

            <th rowspan="4"><b>Jenis bahan baku jika kerajinan/makanan olahan</b></th>

            <th colspan="4"><b>Indikator</b></th>

            <th colspan="14"><b>Indikator Usaha</b></th>
            <th rowspan="4"><b>kriteria</b></th>

        </tr>
        <tr>
            <td rowspan="3"><b>Jalan, rt/rw</b></td>
            <td rowspan="3"><b>Kelurahan Desa</b></td>
            <td rowspan="3"><b>Makanan Olahan/Industri Pertanian</b></td>
            <td rowspan="3"><b>Kerajinan/Industri non Pertanian</b></td>
            <td rowspan="3"><b>Jasa Swasta</b></td>
            <td rowspan="3"><b>Perdagangan</b></td>
            <td rowspan="3"><b>Usaha Lainnya/Aneka Usaha</b></td>
            <td rowspan="3"><b>Pertanian, Peternakan, Kehutanan, Perikanan</b></td>
            <td rowspan="3"><b>Pertambangan dan Penggalian</b></td>
            <td rowspan="3"><b>Industri Pengolahan</b></td>
            <td rowspan="3"><b>Listrik, Gas dan Air Bersih</b></td>
            <td rowspan="3"><b>Bangunan</b></td>
            <td rowspan="3"><b>Perdagangan, Hotel dan Restoran/WM</b></td>
            <td colspan="4"><b>Tenaga Kerja</b></td>
            <td colspan="2" rowspan="2"><b>Kapasitas produksi/bulan</b></td>
            <td colspan="2" rowspan="2"><b>Omset/tahun</b></td>
            <td colspan="10"><b>Aset</b></td>
        </tr>
        <tr>
            <td colspan="2"><b>2016</b></td>
            <td colspan="2"><b>2017</b></td>
            <td colspan="2"><b>Modal Sendiri</b></td>
            <td colspan="2"><b>Bantuan Pemerintah</b></td>
            <td colspan="2"><b>Pinjaman Koperasi</b></td>
            <td colspan="2"><b>Pinjaman Perorangan</b></td>
            <td colspan="2"><b>Pinjaman Bank</b></td>
        </tr>
        <tr>
            <td><b>P</b></td>
            <td><b>L</b></td>
            <td><b>P</b></td>
            <td><b>L</b></td>

            <td><b>2016</b></td>
            <td><b>2017</b></td>
            <td><b>2016</b></td>
            <td><b>2017</b></td>

            <td><b>2016</b></td>
            <td><b>2017</b></td>
            <td><b>2016</b></td>
            <td><b>2017</b></td>
            <td><b>2016</b></td>
            <td><b>2017</b></td>
            <td><b>2016</b></td>
            <td><b>2017</b></td>
            <td><b>2016</b></td>
            <td><b>2017</b></td>

        </tr>
    </thead>
    <tbody>
        {{ $no = 1 }}
        @foreach ($umkms as $umkm)
        <tr>
            <td>{{ $no }}</td>
            <td>{{ $umkm->nama_usaha }}</td>
            <td>{{ $umkm->kelembagaan }}</td>
            <td>{{ $umkm->nama_pemilik }}</td>
            <td>{{ $umkm->nik }}</td>
            <td>{{ $umkm->jenis_kelamin }}</td>
            <td>{{ $umkm->disabilitas }}</td>
            <td>{{ $umkm->siu }}</td>
            <td>{{ $umkm->npwp }}</td>
            <td>{{ $umkm->tmu }}</td>
            <td>{{ $umkm->alamat }}</td>
            <td>{{ $umkm->desa }}</td>
            <td>{{ $umkm->tlp }}</td>
            <td>{{ $umkm->email }}</td>
            <td>{{ $umkm->up1 }}</td>
            <td>{{ $umkm->up2 }}</td>
            <td>{{ $umkm->up3 }}</td>
            <td>{{ $umkm->up4 }}</td>
            <td>{{ $umkm->up5 }}</td>
            <td>{{ $umkm->up6 }}</td>
            <td>{{ $umkm->up7 }}</td>
            <td>{{ $umkm->up8 }}</td>
            <td>{{ $umkm->up9 }}</td>
            <td>{{ $umkm->up10 }}</td>
            <td>{{ $umkm->up11 }}</td>
            <td>{{ $umkm->bahan_baku }}</td>
            <td>{{ $umkm->tk1_l }}</td>
            <td>{{ $umkm->tk1_p }}</td>
            <td>{{ $umkm->tk2_l }}</td>
            <td>{{ $umkm->tk2_p }}</td>
            <td>{{ $umkm->kp1 }}</td>
            <td>{{ $umkm->kp2 }}</td>
            <td>{{ $umkm->omset1 }}</td>
            <td>{{ $umkm->omset2 }}</td>
            <td>{{ $umkm->ms1 }}</td>
            <td>{{ $umkm->ms2 }}</td>
            <td>{{ $umkm->bp1 }}</td>
            <td>{{ $umkm->bp2 }}</td>
            <td>{{ $umkm->pk1 }}</td>
            <td>{{ $umkm->pk2 }}</td>
            <td>{{ $umkm->pp1 }}</td>
            <td>{{ $umkm->pp2 }}</td>
            <td>{{ $umkm->pb1 }}</td>
            <td>{{ $umkm->pb2 }}</td>
            <td>{{ $umkm->kriteria }}</td>
        </tr>
        {{ $no++ }}
        @endforeach
        <tr>
            <td></td>
            <td><b>JUMLAH</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b> {{ $totals['total_tk1_l'] }} </b></td>
            <td><b> {{ $totals['total_tk1_p'] }} </b></td>
            <td><b> {{ $totals['total_tk2_l'] }} </b></td>
            <td><b> {{ $totals['total_tk2_p'] }} </b></td>
            <td>-</td>
            <td>-</td>
            <td><b> {{ $totals['total_omset1'] }} </b></td>
            <td><b> {{ $totals['total_omset2'] }} </b></td>
            <td><b> {{ $totals['total_ms1'] }} </b></td>
            <td><b> {{ $totals['total_ms2'] }} </b></td>
            <td><b> {{ $totals['total_bp1'] }} </b></td>
            <td><b> {{ $totals['total_bp2'] }} </b></td>
            <td><b> {{ $totals['total_pk1'] }} </b></td>
            <td><b> {{ $totals['total_pk2'] }} </b></td>
            <td><b> {{ $totals['total_pp1'] }} </b></td>
            <td><b> {{ $totals['total_pp2'] }} </b></td>
            <td><b> {{ $totals['total_pb1'] }} </b></td>
            <td><b> {{ $totals['total_pb2'] }} </b></td>
            <td></td>
        </tr>
    </tbody>
</table>
