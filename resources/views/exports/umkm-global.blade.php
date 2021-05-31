<table>
    <thead class="header">
        <tr>
            <th colspan="9" class="judul"><strong>DATA UMKM GLOBAL KABUPATEN GUNUNGKIDUL</strong></th>
        </tr>
        <tr>
            <td><b>Periode</b></td>
            <td><b>2020</b></td>
        </tr>
        <tr>
            <td><b>Kriteria</b></td>
            <td><b>UMKM GLOBAL</b></td>
        </tr>
        <tr>
            <th rowspan="2"><b>No.</b></th>
            <th rowspan="2"><b>Kecamatan</b></th>
            <th rowspan="2"><b>Total UMKM</b></th>
            <th rowspan="2"><b>Usaha Mikro</b></th>
            <th rowspan="2"><b>Usaha Kecil</b></th>
            <th rowspan="2"><b>Usaha Menengah</b></th>
            <th colspan="2"><b>Tenaga Kerja</b></th>
            <th rowspan="2"><b>Modal</b></th>
            <th rowspan="2"><b>Omset</b></th>
        </tr>
        <tr>
            <td><b>P</b></td>
            <td><b>L</b></td>
        </tr>
    </thead>
    <tbody>
        {{ $no = 1 }}
        @foreach ($umkms as $umkm)
        <tr>
            <td>{{ $no }}</td>
            <td>{{ $umkm->kecamatan }}</td>
            <td>{{ $umkm->total_umkm }}</td>
            <td>{{ $umkm->u_mikro }}</td>
            <td>{{ $umkm->u_kecil }}</td>
            <td>{{ $umkm->u_menengah }}</td>
            <td>{{ $umkm->tkl }}</td>
            <td>{{ $umkm->tkp }}</td>
            <td>{{ $umkm->modal }}</td>
            <td>{{ $umkm->omset }}</td>
        </tr>
        {{ $no++ }}
        @endforeach
        <tr>
            <td></td>
            <td><b>JUMLAH</b></td>
            <td><b> {{ $totals['total_umkm'] }} </b></td>
            <td><b> {{ $totals['total_mikro'] }} </b></td>
            <td><b> {{ $totals['total_kecil'] }} </b></td>
            <td><b> {{ $totals['total_menengah'] }} </b></td>
            <td><b> {{ $totals['total_tkl'] }} </b></td>
            <td><b> {{ $totals['total_tkp'] }} </b></td>
            <td><b> {{ $totals['total_modal'] }} </b></td>
            <td><b> {{ $totals['total_omset'] }} </b></td>
        </tr>
    </tbody>
</table>
