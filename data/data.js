/* ---------- Data jukugo manual: kanji -> [[jukugo, bacaan, arti], ...] (tambah sendiri di sini) ---------- */
const JUKUGO = {
  一: [
    ['一つ', 'ひとつ', 'Satu buah'],
    ['一人', 'ひとり', 'Satu orang'],
    ['一日', 'いちにち', 'Satu hari'],
    ['一月', 'いちがつ', 'Bulan Januari'],
    ['一番', 'いちばん', 'Nomor satu / Paling'],
    ['一度', 'いちど', 'Satu kali'],
    ['一緒', 'いっしょ', 'Bersama'],
  ],

  二: [
    ['二つ', 'ふたつ', 'Dua buah'],
    ['二人', 'ふたり', 'Dua orang'],
    ['二日', 'ふつか', 'Tanggal dua / Dua hari'],
    ['二月', 'にがつ', 'Bulan Februari'],
    ['二番', 'にばん', 'Nomor dua'],
    ['二度', 'にど', 'Dua kali'],
  ],

  三: [
    ['三つ', 'みっつ', 'Tiga buah'],
    ['三人', 'さんにん', 'Tiga orang'],
    ['三日', 'みっか', 'Tanggal tiga / Tiga hari'],
    ['三月', 'さんがつ', 'Bulan Maret'],
    ['三番', 'さんばん', 'Nomor tiga'],
    ['三回', 'さんかい', 'Tiga kali'],
  ],

  四: [
    ['四つ', 'よっつ', 'Empat buah'],
    ['四人', 'よにん', 'Empat orang'],
    ['四日', 'よっか', 'Tanggal empat / Empat hari'],
    ['四月', 'しがつ', 'Bulan April'],
    ['四番', 'よんばん', 'Nomor empat'],
    ['四回', 'よんかい', 'Empat kali'],
  ],

  五: [
    ['五つ', 'いつつ', 'Lima buah'],
    ['五人', 'ごにん', 'Lima orang'],
    ['五日', 'いつか', 'Tanggal lima / Lima hari'],
    ['五月', 'ごがつ', 'Bulan Mei'],
    ['五番', 'ごばん', 'Nomor lima'],
    ['五回', 'ごかい', 'Lima kali'],
  ],

  六: [
    ['六つ', 'むっつ', 'Enam buah'],
    ['六人', 'ろくにん', 'Enam orang'],
    ['六日', 'むいか', 'Tanggal enam / Enam hari'],
    ['六月', 'ろくがつ', 'Bulan Juni'],
    ['六番', 'ろくばん', 'Nomor enam'],
    ['六回', 'ろっかい', 'Enam kali'],
  ],

  七: [
    ['七つ', 'ななつ', 'Tujuh buah'],
    ['七人', 'しちにん', 'Tujuh orang'],
    ['七日', 'なのか', 'Tanggal tujuh / Tujuh hari'],
    ['七月', 'しちがつ', 'Bulan Juli'],
    ['七番', 'ななばん', 'Nomor tujuh'],
    ['七回', 'ななかい', 'Tujuh kali'],
  ],

  八: [
    ['八つ', 'やっつ', 'Delapan buah'],
    ['八人', 'はちにん', 'Delapan orang'],
    ['八日', 'ようか', 'Tanggal delapan / Delapan hari'],
    ['八月', 'はちがつ', 'Bulan Agustus'],
    ['八番', 'はちばん', 'Nomor delapan'],
    ['八回', 'はっかい', 'Delapan kali'],
  ],

  九: [
    ['九つ', 'ここのつ', 'Sembilan buah'],
    ['九人', 'きゅうにん', 'Sembilan orang'],
    ['九日', 'ここのか', 'Tanggal sembilan / Sembilan hari'],
    ['九月', 'くがつ', 'Bulan September'],
    ['九番', 'きゅうばん', 'Nomor sembilan'],
    ['九回', 'きゅうかい', 'Sembilan kali'],
  ],

  十: [
    ['十', 'じゅう', 'Sepuluh'],
    ['十日', 'とおか', 'Tanggal sepuluh / Sepuluh hari'],
    ['十人', 'じゅうにん', 'Sepuluh orang'],
    ['十月', 'じゅうがつ', 'Bulan Oktober'],
    ['十分', 'じゅうぶん', 'Cukup / Memadai'],
    ['十回', 'じゅっかい', 'Sepuluh kali'],
  ],

  百: [
    ['百', 'ひゃく', 'Seratus'],
    ['百円', 'ひゃくえん', 'Seratus yen'],
    ['百人', 'ひゃくにん', 'Seratus orang'],
    ['三百', 'さんびゃく', 'Tiga ratus'],
    ['六百', 'ろっぴゃく', 'Enam ratus'],
    ['八百', 'はっぴゃく', 'Delapan ratus'],
  ],

  千: [
    ['千', 'せん', 'Seribu'],
    ['千円', 'せんえん', 'Seribu yen'],
    ['千人', 'せんにん', 'Seribu orang'],
    ['三千', 'さんぜん', 'Tiga ribu'],
    ['八千', 'はっせん', 'Delapan ribu'],
    ['千葉', 'ちば', 'Chiba (nama prefektur)'],
  ],

  万: [
    ['一万', 'いちまん', 'Sepuluh ribu'],
    ['一万円', 'いちまんえん', 'Sepuluh ribu yen'],
    ['万年', 'まんねん', 'Sepuluh ribu tahun'],
    ['万一', 'まんいち', 'Jika terjadi sesuatu / Seandainya'],
    ['万国', 'ばんこく', 'Seluruh negara'],
    ['万人', 'ばんにん', 'Semua orang'],
  ],
  日: [
    ['日本', 'にほん', 'Jepang'],
    ['日本語', 'にほんご', 'Bahasa Jepang'],
    ['今日', 'きょう', 'Hari ini'],
    ['毎日', 'まいにち', 'Setiap hari'],
    ['日曜日', 'にちようび', 'Hari Minggu'],
    ['日記', 'にっき', 'Buku harian'],
    ['休日', 'きゅうじつ', 'Hari libur'],
  ],

  月: [
    ['月', 'つき', 'Bulan'],
    ['月曜日', 'げつようび', 'Hari Senin'],
    ['毎月', 'まいつき', 'Setiap bulan'],
    ['今月', 'こんげつ', 'Bulan ini'],
    ['先月', 'せんげつ', 'Bulan lalu'],
    ['来月', 'らいげつ', 'Bulan depan'],
    ['月末', 'げつまつ', 'Akhir bulan'],
  ],

  火: [
    ['火', 'ひ', 'Api'],
    ['火曜日', 'かようび', 'Hari Selasa'],
    ['火事', 'かじ', 'Kebakaran'],
    ['火山', 'かざん', 'Gunung berapi'],
    ['花火', 'はなび', 'Kembang api'],
    ['火力', 'かりょく', 'Tenaga api / Daya panas'],
  ],

  水: [
    ['水', 'みず', 'Air'],
    ['水曜日', 'すいようび', 'Hari Rabu'],
    ['水道', 'すいどう', 'Saluran air'],
    ['水泳', 'すいえい', 'Renang'],
    ['水着', 'みずぎ', 'Baju renang'],
    ['水分', 'すいぶん', 'Kandungan air / Cairan'],
    ['水中', 'すいちゅう', 'Di dalam air'],
  ],

  木: [
    ['木', 'き', 'Pohon / Kayu'],
    ['木曜日', 'もくようび', 'Hari Kamis'],
    ['木材', 'もくざい', 'Bahan kayu'],
    ['木製', 'もくせい', 'Terbuat dari kayu'],
    ['大木', 'たいぼく', 'Pohon besar'],
    ['木造', 'もくぞう', 'Bangunan dari kayu'],
  ],

  金: [
    ['金', 'かね', 'Uang'],
    ['金曜日', 'きんようび', 'Hari Jumat'],
    ['お金', 'おかね', 'Uang'],
    ['料金', 'りょうきん', 'Biaya / Tarif'],
    ['現金', 'げんきん', 'Uang tunai'],
    ['金額', 'きんがく', 'Jumlah uang'],
    ['金持ち', 'かねもち', 'Orang kaya'],
  ],

  土: [
    ['土', 'つち', 'Tanah'],
    ['土曜日', 'どようび', 'Hari Sabtu'],
    ['土地', 'とち', 'Tanah / Lahan'],
    ['土産', 'みやげ', 'Oleh-oleh'],
    ['土台', 'どだい', 'Fondasi / Dasar'],
    ['土木', 'どぼく', 'Teknik sipil'],
  ],
  上: [
    ['上', 'うえ', 'Atas'],
    ['上手', 'じょうず', 'Pandai / Mahir'],
    ['上着', 'うわぎ', 'Jaket / Pakaian luar'],
    ['上司', 'じょうし', 'Atasan'],
    ['以上', 'いじょう', 'Lebih dari / Sekian'],
    ['上がる', 'あがる', 'Naik'],
    ['上げる', 'あげる', 'Menaikkan'],
  ],

  下: [
    ['下', 'した', 'Bawah'],
    ['下手', 'へた', 'Tidak pandai'],
    ['地下', 'ちか', 'Bawah tanah'],
    ['地下鉄', 'ちかてつ', 'Kereta bawah tanah'],
    ['下着', 'したぎ', 'Pakaian dalam'],
    ['以下', 'いか', 'Di bawah / Kurang dari'],
    ['下がる', 'さがる', 'Turun'],
  ],

  右: [
    ['右', 'みぎ', 'Kanan'],
    ['右手', 'みぎて', 'Tangan kanan'],
    ['右側', 'みぎがわ', 'Sisi kanan'],
    ['右折', 'うせつ', 'Belok kanan'],
    ['左右', 'さゆう', 'Kanan dan kiri'],
  ],

  左: [
    ['左', 'ひだり', 'Kiri'],
    ['左手', 'ひだりて', 'Tangan kiri'],
    ['左側', 'ひだりがわ', 'Sisi kiri'],
    ['左折', 'させつ', 'Belok kiri'],
    ['左右', 'さゆう', 'Kanan dan kiri'],
  ],

  外: [
    ['外', 'そと', 'Luar'],
    ['外国', 'がいこく', 'Negara asing'],
    ['外国人', 'がいこくじん', 'Orang asing'],
    ['海外', 'かいがい', 'Luar negeri'],
    ['外出', 'がいしゅつ', 'Keluar rumah'],
    ['以外', 'いがい', 'Selain / Kecuali'],
    ['外側', 'そとがわ', 'Bagian luar'],
  ],

  中: [
    ['中', 'なか', 'Dalam / Tengah'],
    ['中国', 'ちゅうごく', 'Tiongkok'],
    ['中学校', 'ちゅうがっこう', 'Sekolah menengah pertama'],
    ['中心', 'ちゅうしん', 'Pusat'],
    ['途中', 'とちゅう', 'Di tengah perjalanan'],
    ['一年中', 'いちねんじゅう', 'Sepanjang tahun'],
    ['真ん中', 'まんなか', 'Tepat di tengah'],
  ],

  前: [
    ['前', 'まえ', 'Depan / Sebelum'],
    ['午前', 'ごぜん', 'Pagi / Sebelum tengah hari'],
    ['名前', 'なまえ', 'Nama'],
    ['前日', 'ぜんじつ', 'Hari sebelumnya'],
    ['前回', 'ぜんかい', 'Kali sebelumnya'],
    ['前後', 'ぜんご', 'Sebelum dan sesudah / Sekitar'],
    ['以前', 'いぜん', 'Sebelumnya'],
  ],

  後: [
    ['後ろ', 'うしろ', 'Belakang'],
    ['午後', 'ごご', 'Sore / Setelah tengah hari'],
    ['最後', 'さいご', 'Terakhir'],
    ['今後', 'こんご', 'Mulai sekarang / Ke depannya'],
    ['後半', 'こうはん', 'Paruh kedua'],
    ['後日', 'ごじつ', 'Hari lain / Kemudian'],
    ['以後', 'いご', 'Setelah ini'],
  ],

  北: [
    ['北', 'きた', 'Utara'],
    ['北口', 'きたぐち', 'Pintu utara'],
    ['北海道', 'ほっかいどう', 'Hokkaido'],
    ['北風', 'きたかぜ', 'Angin utara'],
    ['東北', 'とうほく', 'Wilayah Tohoku'],
  ],

  南: [
    ['南', 'みなみ', 'Selatan'],
    ['南口', 'みなみぐち', 'Pintu selatan'],
    ['南国', 'なんごく', 'Negara tropis / Daerah selatan'],
    ['南側', 'みなみがわ', 'Sisi selatan'],
    ['南北', 'なんぼく', 'Utara dan selatan'],
  ],

  東: [
    ['東', 'ひがし', 'Timur'],
    ['東京', 'とうきょう', 'Tokyo'],
    ['東口', 'ひがしぐち', 'Pintu timur'],
    ['東北', 'とうほく', 'Wilayah Tohoku'],
    ['東洋', 'とうよう', 'Asia Timur / Dunia Timur'],
    ['東西', 'とうざい', 'Timur dan barat'],
  ],

  西: [
    ['西', 'にし', 'Barat'],
    ['西口', 'にしぐち', 'Pintu barat'],
    ['西洋', 'せいよう', 'Dunia Barat'],
    ['関西', 'かんさい', 'Wilayah Kansai'],
    ['西側', 'にしがわ', 'Sisi barat'],
    ['東西', 'とうざい', 'Timur dan barat'],
  ],
  大: [
    ['大きい', 'おおきい', 'Besar'],
    ['大学', 'だいがく', 'Universitas'],
    ['大切', 'たいせつ', 'Penting / Berharga'],
    ['大丈夫', 'だいじょうぶ', 'Tidak apa-apa'],
    ['大人', 'おとな', 'Orang dewasa'],
    ['大変', 'たいへん', 'Berat / Sulit / Luar biasa'],
    ['大部分', 'だいぶぶん', 'Sebagian besar'],
  ],

  小: [
    ['小さい', 'ちいさい', 'Kecil'],
    ['小学校', 'しょうがっこう', 'Sekolah dasar'],
    ['小学生', 'しょうがくせい', 'Murid sekolah dasar'],
    ['小説', 'しょうせつ', 'Novel'],
    ['小鳥', 'ことり', 'Burung kecil'],
    ['小遣い', 'こづかい', 'Uang saku'],
  ],

  高: [
    ['高い', 'たかい', 'Tinggi / Mahal'],
    ['高校', 'こうこう', 'SMA'],
    ['高校生', 'こうこうせい', 'Siswa SMA'],
    ['高さ', 'たかさ', 'Ketinggian'],
    ['最高', 'さいこう', 'Tertinggi / Terbaik'],
    ['高級', 'こうきゅう', 'Kelas tinggi / Mewah'],
    ['高齢', 'こうれい', 'Usia lanjut'],
  ],

  安: [
    ['安い', 'やすい', 'Murah'],
    ['安全', 'あんぜん', 'Aman / Keselamatan'],
    ['安心', 'あんしん', 'Tenang / Lega'],
    ['不安', 'ふあん', 'Cemas / Khawatir'],
    ['安定', 'あんてい', 'Stabil'],
    ['安売り', 'やすうり', 'Obral'],
  ],

  多: [
    ['多い', 'おおい', 'Banyak'],
    ['多数', 'たすう', 'Jumlah besar / Mayoritas'],
    ['多分', 'たぶん', 'Mungkin'],
    ['多文化', 'たぶんか', 'Multikultural'],
    ['多様', 'たよう', 'Beragam'],
    ['多目的', 'たもくてき', 'Multifungsi'],
  ],

  少: [
    ['少ない', 'すくない', 'Sedikit'],
    ['少し', 'すこし', 'Sedikit'],
    ['少年', 'しょうねん', 'Anak laki-laki / Remaja pria'],
    ['少女', 'しょうじょ', 'Anak perempuan / Remaja wanita'],
    ['少々', 'しょうしょう', 'Sebentar / Sedikit'],
    ['減少', 'げんしょう', 'Penurunan'],
  ],

  長: [
    ['長い', 'ながい', 'Panjang'],
    ['社長', 'しゃちょう', 'Direktur perusahaan'],
    ['校長', 'こうちょう', 'Kepala sekolah'],
    ['長男', 'ちょうなん', 'Anak laki-laki tertua'],
    ['長女', 'ちょうじょ', 'Anak perempuan tertua'],
    ['成長', 'せいちょう', 'Pertumbuhan'],
    ['長所', 'ちょうしょ', 'Kelebihan'],
  ],

  新: [
    ['新しい', 'あたらしい', 'Baru'],
    ['新聞', 'しんぶん', 'Koran'],
    ['新年', 'しんねん', 'Tahun baru'],
    ['新幹線', 'しんかんせん', 'Shinkansen'],
    ['新入生', 'しんにゅうせい', 'Siswa baru'],
    ['新人', 'しんじん', 'Orang baru / Pemula'],
    ['新鮮', 'しんせん', 'Segar'],
  ],

  古: [
    ['古い', 'ふるい', 'Lama / Tua'],
    ['中古', 'ちゅうこ', 'Barang bekas'],
    ['古本', 'ふるほん', 'Buku bekas'],
    ['古代', 'こだい', 'Zaman kuno'],
    ['古着', 'ふるぎ', 'Pakaian bekas'],
    ['古典', 'こてん', 'Karya klasik'],
  ],
  口: [
    ['口', 'くち', 'Mulut'],
    ['入口', 'いりぐち', 'Pintu masuk'],
    ['出口', 'でぐち', 'Pintu keluar'],
    ['人口', 'じんこう', 'Jumlah penduduk'],
    ['口座', 'こうざ', 'Rekening bank'],
    ['窓口', 'まどぐち', 'Loket pelayanan'],
    ['悪口', 'わるぐち', 'Perkataan buruk / Celaan'],
  ],

  目: [
    ['目', 'め', 'Mata'],
    ['目的', 'もくてき', 'Tujuan'],
    ['目標', 'もくひょう', 'Target / Sasaran'],
    ['注目', 'ちゅうもく', 'Perhatian'],
    ['真面目', 'まじめ', 'Serius / Rajin'],
    ['一つ目', 'ひとつめ', 'Yang pertama'],
    ['目次', 'もくじ', 'Daftar isi'],
  ],

  手: [
    ['手', 'て', 'Tangan'],
    ['手紙', 'てがみ', 'Surat'],
    ['上手', 'じょうず', 'Pandai / Mahir'],
    ['下手', 'へた', 'Tidak pandai'],
    ['手伝う', 'てつだう', 'Membantu'],
    ['運転手', 'うんてんしゅ', 'Sopir'],
    ['相手', 'あいて', 'Lawan / Rekan'],
  ],

  足: [
    ['足', 'あし', 'Kaki'],
    ['足りる', 'たりる', 'Cukup'],
    ['足す', 'たす', 'Menambahkan'],
    ['足元', 'あしもと', 'Sekitar kaki / Pijakan'],
    ['満足', 'まんぞく', 'Puas'],
    ['不足', 'ふそく', 'Kekurangan'],
    ['遠足', 'えんそく', 'Piknik sekolah'],
  ],

  耳: [
    ['耳', 'みみ', 'Telinga'],
    ['耳元', 'みみもと', 'Dekat telinga'],
    ['耳鼻科', 'じびか', 'Klinik THT'],
    ['耳鳴り', 'みみなり', 'Telinga berdenging'],
    ['早耳', 'はやみみ', 'Cepat mendengar berita'],
  ],

  山: [
    ['山', 'やま', 'Gunung'],
    ['火山', 'かざん', 'Gunung berapi'],
    ['山道', 'やまみち', 'Jalan pegunungan'],
    ['山登り', 'やまのぼり', 'Mendaki gunung'],
    ['富士山', 'ふじさん', 'Gunung Fuji'],
    ['登山', 'とざん', 'Pendakian gunung'],
    ['山林', 'さんりん', 'Hutan pegunungan'],
  ],

  川: [
    ['川', 'かわ', 'Sungai'],
    ['小川', 'おがわ', 'Sungai kecil'],
    ['河川', 'かせん', 'Sungai-sungai'],
    ['川岸', 'かわぎし', 'Tepi sungai'],
    ['川上', 'かわかみ', 'Hulu sungai'],
    ['川下', 'かわしも', 'Hilir sungai'],
  ],

  花: [
    ['花', 'はな', 'Bunga'],
    ['花火', 'はなび', 'Kembang api'],
    ['花見', 'はなみ', 'Melihat bunga sakura'],
    ['花屋', 'はなや', 'Toko bunga'],
    ['花束', 'はなたば', 'Buket bunga'],
    ['生け花', 'いけばな', 'Seni merangkai bunga'],
    ['花粉', 'かふん', 'Serbuk sari'],
  ],
  人: [
    ['人', 'ひと', 'Orang'],
    ['日本人', 'にほんじん', 'Orang Jepang'],
    ['外国人', 'がいこくじん', 'Orang asing'],
    ['一人', 'ひとり', 'Satu orang'],
    ['二人', 'ふたり', 'Dua orang'],
    ['人気', 'にんき', 'Popularitas'],
    ['人間', 'にんげん', 'Manusia'],
    ['人口', 'じんこう', 'Jumlah penduduk'],
  ],

  男: [
    ['男', 'おとこ', 'Laki-laki'],
    ['男の人', 'おとこのひと', 'Pria'],
    ['男の子', 'おとこのこ', 'Anak laki-laki'],
    ['男性', 'だんせい', 'Pria / Laki-laki'],
    ['男子', 'だんし', 'Anak laki-laki / Siswa pria'],
    ['長男', 'ちょうなん', 'Anak laki-laki tertua'],
  ],

  女: [
    ['女', 'おんな', 'Perempuan'],
    ['女の人', 'おんなのひと', 'Wanita'],
    ['女の子', 'おんなのこ', 'Anak perempuan'],
    ['女性', 'じょせい', 'Wanita / Perempuan'],
    ['女子', 'じょし', 'Anak perempuan / Siswi'],
    ['長女', 'ちょうじょ', 'Anak perempuan tertua'],
  ],

  父: [
    ['父', 'ちち', 'Ayah sendiri'],
    ['お父さん', 'おとうさん', 'Ayah'],
    ['父親', 'ちちおや', 'Ayah / Orang tua laki-laki'],
    ['父母', 'ふぼ', 'Ayah dan ibu'],
    ['祖父', 'そふ', 'Kakek'],
    ['父の日', 'ちちのひ', 'Hari Ayah'],
  ],

  母: [
    ['母', 'はは', 'Ibu sendiri'],
    ['お母さん', 'おかあさん', 'Ibu'],
    ['母親', 'ははおや', 'Ibu / Orang tua perempuan'],
    ['母国', 'ぼこく', 'Negara asal'],
    ['母語', 'ぼご', 'Bahasa ibu'],
    ['祖母', 'そぼ', 'Nenek'],
  ],

  子: [
    ['子供', 'こども', 'Anak-anak'],
    ['男の子', 'おとこのこ', 'Anak laki-laki'],
    ['女の子', 'おんなのこ', 'Anak perempuan'],
    ['子犬', 'こいぬ', 'Anak anjing'],
    ['子猫', 'こねこ', 'Anak kucing'],
    ['電子', 'でんし', 'Elektron'],
    ['様子', 'ようす', 'Keadaan / Kondisi'],
  ],

  友: [
    ['友達', 'ともだち', 'Teman'],
    ['友人', 'ゆうじん', 'Teman / Sahabat'],
    ['友好', 'ゆうこう', 'Persahabatan'],
    ['親友', 'しんゆう', 'Sahabat dekat'],
    ['友情', 'ゆうじょう', 'Persahabatan'],
    ['友達同士', 'ともだちどうし', 'Antarteman'],
  ],

  力: [
    ['力', 'ちから', 'Kekuatan / Tenaga'],
    ['努力', 'どりょく', 'Usaha / Kerja keras'],
    ['能力', 'のうりょく', 'Kemampuan'],
    ['協力', 'きょうりょく', 'Kerja sama'],
    ['体力', 'たいりょく', 'Kekuatan fisik'],
    ['実力', 'じつりょく', 'Kemampuan sebenarnya'],
    ['強力', 'きょうりょく', 'Kuat / Bertenaga'],
  ],
  行: [
    ['行く', 'いく', 'Pergi'],
    ['旅行', 'りょこう', 'Perjalanan / Wisata'],
    ['銀行', 'ぎんこう', 'Bank'],
    ['行動', 'こうどう', 'Tindakan / Perilaku'],
    ['行事', 'ぎょうじ', 'Acara / Kegiatan'],
    ['発行', 'はっこう', 'Penerbitan'],
    ['通行', 'つうこう', 'Lalu lintas / Lewat'],
  ],

  来: [
    ['来る', 'くる', 'Datang'],
    ['来年', 'らいねん', 'Tahun depan'],
    ['来月', 'らいげつ', 'Bulan depan'],
    ['来週', 'らいしゅう', 'Minggu depan'],
    ['未来', 'みらい', 'Masa depan'],
    ['来日', 'らいにち', 'Datang ke Jepang'],
    ['以来', 'いらい', 'Sejak saat itu'],
  ],

  会: [
    ['会う', 'あう', 'Bertemu'],
    ['会社', 'かいしゃ', 'Perusahaan'],
    ['会社員', 'かいしゃいん', 'Karyawan perusahaan'],
    ['会話', 'かいわ', 'Percakapan'],
    ['会議', 'かいぎ', 'Rapat'],
    ['社会', 'しゃかい', 'Masyarakat'],
    ['入会', 'にゅうかい', 'Bergabung menjadi anggota'],
  ],

  休: [
    ['休む', 'やすむ', 'Beristirahat / Libur'],
    ['休み', 'やすみ', 'Libur / Istirahat'],
    ['休日', 'きゅうじつ', 'Hari libur'],
    ['休暇', 'きゅうか', 'Cuti / Liburan'],
    ['休憩', 'きゅうけい', 'Istirahat sejenak'],
    ['夏休み', 'なつやすみ', 'Liburan musim panas'],
    ['冬休み', 'ふゆやすみ', 'Liburan musim dingin'],
  ],

  食: [
    ['食べる', 'たべる', 'Makan'],
    ['食事', 'しょくじ', 'Makan / Santap'],
    ['食堂', 'しょくどう', 'Kantin'],
    ['食品', 'しょくひん', 'Bahan makanan'],
    ['朝食', 'ちょうしょく', 'Sarapan'],
    ['昼食', 'ちゅうしょく', 'Makan siang'],
    ['夕食', 'ゆうしょく', 'Makan malam'],
    ['食生活', 'しょくせいかつ', 'Pola kehidupan makan'],
  ],

  飲: [
    ['飲む', 'のむ', 'Minum'],
    ['飲み物', 'のみもの', 'Minuman'],
    ['飲食', 'いんしょく', 'Makan dan minum'],
    ['飲料', 'いんりょう', 'Minuman'],
    ['飲酒', 'いんしゅ', 'Minum alkohol'],
    ['飲み会', 'のみかい', 'Acara minum bersama'],
  ],

  立: [
    ['立つ', 'たつ', 'Berdiri'],
    ['立てる', 'たてる', 'Mendirikan / Menegakkan'],
    ['立場', 'たちば', 'Posisi / Kedudukan'],
    ['国立', 'こくりつ', 'Milik negara'],
    ['私立', 'しりつ', 'Milik swasta'],
    ['独立', 'どくりつ', 'Kemerdekaan / Kemandirian'],
    ['役立つ', 'やくだつ', 'Bermanfaat'],
  ],

  言: [
    ['言う', 'いう', 'Mengatakan'],
    ['言葉', 'ことば', 'Kata / Bahasa'],
    ['言語', 'げんご', 'Bahasa'],
    ['伝言', 'でんごん', 'Pesan titipan'],
    ['発言', 'はつげん', 'Pernyataan / Berbicara'],
    ['言い方', 'いいかた', 'Cara mengatakan'],
    ['一言', 'ひとこと', 'Sepatah kata'],
  ],

  話: [
    ['話す', 'はなす', 'Berbicara'],
    ['話', 'はなし', 'Cerita / Pembicaraan'],
    ['電話', 'でんわ', 'Telepon'],
    ['会話', 'かいわ', 'Percakapan'],
    ['話題', 'わだい', 'Topik pembicaraan'],
    ['世話', 'せわ', 'Mengurus / Merawat'],
    ['昔話', 'むかしばなし', 'Cerita zaman dahulu'],
  ],

  見: [
    ['見る', 'みる', 'Melihat'],
    ['見せる', 'みせる', 'Memperlihatkan'],
    ['見学', 'けんがく', 'Kunjungan belajar'],
    ['意見', 'いけん', 'Pendapat'],
    ['見物', 'けんぶつ', 'Melihat-lihat / Menonton'],
    ['花見', 'はなみ', 'Melihat bunga sakura'],
    ['発見', 'はっけん', 'Penemuan'],
  ],

  聞: [
    ['聞く', 'きく', 'Mendengar / Bertanya'],
    ['新聞', 'しんぶん', 'Koran'],
    ['聞こえる', 'きこえる', 'Terdengar'],
    ['聞き手', 'ききて', 'Pendengar'],
    ['新聞社', 'しんぶんしゃ', 'Perusahaan surat kabar'],
    ['聞き取り', 'ききとり', 'Menyimak / Mendengarkan'],
  ],

  書: [
    ['書く', 'かく', 'Menulis'],
    ['辞書', 'じしょ', 'Kamus'],
    ['教科書', 'きょうかしょ', 'Buku pelajaran'],
    ['図書館', 'としょかん', 'Perpustakaan'],
    ['読書', 'どくしょ', 'Membaca buku'],
    ['書類', 'しょるい', 'Dokumen'],
    ['履歴書', 'りれきしょ', 'Daftar riwayat hidup'],
  ],

  読: [
    ['読む', 'よむ', 'Membaca'],
    ['読書', 'どくしょ', 'Membaca buku'],
    ['読み方', 'よみかた', 'Cara membaca'],
    ['読者', 'どくしゃ', 'Pembaca'],
    ['読解', 'どっかい', 'Pemahaman bacaan'],
    ['音読', 'おんどく', 'Membaca dengan suara keras'],
  ],

  入: [
    ['入る', 'はいる', 'Masuk'],
    ['入れる', 'いれる', 'Memasukkan'],
    ['入口', 'いりぐち', 'Pintu masuk'],
    ['入学', 'にゅうがく', 'Masuk sekolah'],
    ['入院', 'にゅういん', 'Rawat inap'],
    ['入社', 'にゅうしゃ', 'Masuk perusahaan'],
    ['入場', 'にゅうじょう', 'Masuk tempat acara'],
    ['収入', 'しゅうにゅう', 'Penghasilan'],
  ],

  出: [
    ['出る', 'でる', 'Keluar'],
    ['出す', 'だす', 'Mengeluarkan'],
    ['出口', 'でぐち', 'Pintu keluar'],
    ['出発', 'しゅっぱつ', 'Keberangkatan'],
    ['提出', 'ていしゅつ', 'Penyerahan'],
    ['外出', 'がいしゅつ', 'Keluar rumah'],
    ['出席', 'しゅっせき', 'Kehadiran'],
    ['思い出', 'おもいで', 'Kenangan'],
  ],

  買: [
    ['買う', 'かう', 'Membeli'],
    ['買い物', 'かいもの', 'Belanja'],
    ['買い手', 'かいて', 'Pembeli'],
    ['買い物客', 'かいものきゃく', 'Pengunjung yang berbelanja'],
    ['売買', 'ばいばい', 'Jual beli'],
  ],

  学: [
    ['学ぶ', 'まなぶ', 'Belajar'],
    ['学校', 'がっこう', 'Sekolah'],
    ['学生', 'がくせい', 'Pelajar / Mahasiswa'],
    ['大学', 'だいがく', 'Universitas'],
    ['大学生', 'だいがくせい', 'Mahasiswa'],
    ['学習', 'がくしゅう', 'Pembelajaran'],
    ['文学', 'ぶんがく', 'Sastra'],
    ['科学', 'かがく', 'Ilmu pengetahuan'],
  ],
  年: [
    ['年', 'とし', 'Tahun'],
    ['今年', 'ことし', 'Tahun ini'],
    ['去年', 'きょねん', 'Tahun lalu'],
    ['来年', 'らいねん', 'Tahun depan'],
    ['毎年', 'まいとし', 'Setiap tahun'],
    ['年齢', 'ねんれい', 'Usia'],
    ['一年生', 'いちねんせい', 'Siswa tahun pertama'],
    ['青年', 'せいねん', 'Pemuda'],
  ],

  時: [
    ['時間', 'じかん', 'Waktu / Jam'],
    ['時計', 'とけい', 'Jam'],
    ['何時', 'なんじ', 'Jam berapa'],
    ['時々', 'ときどき', 'Kadang-kadang'],
    ['時代', 'じだい', 'Zaman / Era'],
    ['同時', 'どうじ', 'Bersamaan'],
    ['当時', 'とうじ', 'Pada waktu itu'],
    ['一時', 'いちじ', 'Pukul satu / Sementara'],
  ],

  分: [
    ['分かる', 'わかる', 'Mengerti'],
    ['分ける', 'わける', 'Membagi'],
    ['自分', 'じぶん', 'Diri sendiri'],
    ['十分', 'じゅうぶん', 'Cukup'],
    ['気分', 'きぶん', 'Suasana hati'],
    ['部分', 'ぶぶん', 'Bagian'],
    ['水分', 'すいぶん', 'Kandungan air'],
    ['成分', 'せいぶん', 'Komposisi / Kandungan'],
  ],

  毎: [
    ['毎日', 'まいにち', 'Setiap hari'],
    ['毎週', 'まいしゅう', 'Setiap minggu'],
    ['毎月', 'まいつき', 'Setiap bulan'],
    ['毎年', 'まいとし', 'Setiap tahun'],
    ['毎朝', 'まいあさ', 'Setiap pagi'],
    ['毎晩', 'まいばん', 'Setiap malam'],
    ['毎回', 'まいかい', 'Setiap kali'],
  ],

  週: [
    ['週', 'しゅう', 'Minggu'],
    ['今週', 'こんしゅう', 'Minggu ini'],
    ['先週', 'せんしゅう', 'Minggu lalu'],
    ['来週', 'らいしゅう', 'Minggu depan'],
    ['毎週', 'まいしゅう', 'Setiap minggu'],
    ['週末', 'しゅうまつ', 'Akhir pekan'],
    ['週間', 'しゅうかん', 'Jangka waktu satu minggu'],
  ],

  今: [
    ['今', 'いま', 'Sekarang'],
    ['今日', 'きょう', 'Hari ini'],
    ['今年', 'ことし', 'Tahun ini'],
    ['今月', 'こんげつ', 'Bulan ini'],
    ['今週', 'こんしゅう', 'Minggu ini'],
    ['今度', 'こんど', 'Kali ini / Lain kali'],
    ['今後', 'こんご', 'Mulai sekarang / Ke depannya'],
    ['今回', 'こんかい', 'Kali ini'],
  ],

  間: [
    ['間', 'あいだ', 'Antara / Selama'],
    ['時間', 'じかん', 'Waktu'],
    ['人間', 'にんげん', 'Manusia'],
    ['間違い', 'まちがい', 'Kesalahan'],
    ['間に合う', 'まにあう', 'Tepat waktu / Keburu'],
    ['この間', 'このあいだ', 'Beberapa waktu lalu'],
    ['期間', 'きかん', 'Periode / Jangka waktu'],
    ['仲間', 'なかま', 'Rekan / Kelompok'],
  ],

  午: [
    ['午前', 'ごぜん', 'Pagi / Sebelum tengah hari'],
    ['午後', 'ごご', 'Sore / Setelah tengah hari'],
    ['正午', 'しょうご', 'Tengah hari tepat'],
    ['午前中', 'ごぜんちゅう', 'Sepanjang pagi'],
    ['午後中', 'ごごじゅう', 'Sepanjang sore'],
  ],

  半: [
    ['半分', 'はんぶん', 'Setengah'],
    ['半年', 'はんとし', 'Setengah tahun'],
    ['半日', 'はんにち', 'Setengah hari'],
    ['半月', 'はんつき', 'Setengah bulan'],
    ['半額', 'はんがく', 'Setengah harga'],
    ['前半', 'ぜんはん', 'Paruh pertama'],
    ['後半', 'こうはん', 'Paruh kedua'],
  ],
  白: [
    ['白い', 'しろい', 'Putih'],
    ['白', 'しろ', 'Warna putih'],
    ['白紙', 'はくし', 'Kertas kosong'],
    ['白黒', 'しろくろ', 'Hitam putih'],
    ['白髪', 'しらが', 'Rambut putih / Uban'],
    ['白鳥', 'はくちょう', 'Angsa'],
    ['面白い', 'おもしろい', 'Menarik / Menyenangkan'],
  ],

  名: [
    ['名前', 'なまえ', 'Nama'],
    ['名', 'な', 'Nama'],
    ['有名', 'ゆうめい', 'Terkenal'],
    ['名字', 'みょうじ', 'Nama keluarga'],
    ['名刺', 'めいし', 'Kartu nama'],
    ['名前', 'なまえ', 'Nama'],
    ['名物', 'めいぶつ', 'Produk khas'],
    ['名所', 'めいしょ', 'Tempat terkenal'],
  ],

  先: [
    ['先', 'さき', 'Depan / Sebelumnya'],
    ['先生', 'せんせい', 'Guru'],
    ['先週', 'せんしゅう', 'Minggu lalu'],
    ['先月', 'せんげつ', 'Bulan lalu'],
    ['先日', 'せんじつ', 'Beberapa hari lalu'],
    ['先輩', 'せんぱい', 'Senior'],
    ['先頭', 'せんとう', 'Barisan paling depan'],
    ['先に', 'さきに', 'Terlebih dahulu'],
  ],

  生: [
    ['生きる', 'いきる', 'Hidup'],
    ['生まれる', 'うまれる', 'Dilahirkan'],
    ['学生', 'がくせい', 'Pelajar / Mahasiswa'],
    ['先生', 'せんせい', 'Guru'],
    ['生活', 'せいかつ', 'Kehidupan'],
    ['誕生日', 'たんじょうび', 'Hari ulang tahun'],
    ['生産', 'せいさん', 'Produksi'],
    ['一生', 'いっしょう', 'Seumur hidup'],
    ['生徒', 'せいと', 'Murid'],
  ],

  円: [
    ['円', 'えん', 'Yen / Lingkaran'],
    ['百円', 'ひゃくえん', 'Seratus yen'],
    ['千円', 'せんえん', 'Seribu yen'],
    ['一万円', 'いちまんえん', 'Sepuluh ribu yen'],
    ['円形', 'えんけい', 'Bentuk lingkaran'],
    ['円高', 'えんだか', 'Penguatan nilai yen'],
    ['円安', 'えんやす', 'Pelemahan nilai yen'],
  ],

  空: [
    ['空', 'そら', 'Langit'],
    ['空気', 'くうき', 'Udara'],
    ['空港', 'くうこう', 'Bandara'],
    ['空手', 'からて', 'Karate'],
    ['空く', 'あく', 'Menjadi kosong'],
    ['空ける', 'あける', 'Mengosongkan'],
    ['航空', 'こうくう', 'Penerbangan'],
    ['青空', 'あおぞら', 'Langit biru'],
  ],

  天: [
    ['天気', 'てんき', 'Cuaca'],
    ['天国', 'てんごく', 'Surga'],
    ['天気予報', 'てんきよほう', 'Ramalan cuaca'],
    ['天才', 'てんさい', 'Jenius'],
    ['天井', 'てんじょう', 'Langit-langit'],
    ['天使', 'てんし', 'Malaikat'],
    ['天然', 'てんねん', 'Alami'],
  ],

  気: [
    ['元気', 'げんき', 'Sehat / Bersemangat'],
    ['天気', 'てんき', 'Cuaca'],
    ['人気', 'にんき', 'Popularitas'],
    ['気持ち', 'きもち', 'Perasaan'],
    ['気分', 'きぶん', 'Suasana hati'],
    ['空気', 'くうき', 'Udara'],
    ['病気', 'びょうき', 'Penyakit'],
    ['気温', 'きおん', 'Suhu udara'],
    ['気を付ける', 'きをつける', 'Berhati-hati'],
  ],

  雨: [
    ['雨', 'あめ', 'Hujan'],
    ['大雨', 'おおあめ', 'Hujan lebat'],
    ['小雨', 'こさめ', 'Hujan ringan'],
    ['雨の日', 'あめのひ', 'Hari hujan'],
    ['雨天', 'うてん', 'Cuaca hujan'],
    ['梅雨', 'つゆ', 'Musim hujan di Jepang'],
    ['雨具', 'あまぐ', 'Perlengkapan hujan'],
  ],
  国: [
    ['国', 'くに', 'Negara'],
    ['外国', 'がいこく', 'Negara asing'],
    ['外国人', 'がいこくじん', 'Orang asing'],
    ['中国', 'ちゅうごく', 'Tiongkok'],
    ['韓国', 'かんこく', 'Korea Selatan'],
    ['国語', 'こくご', 'Bahasa nasional'],
    ['国際', 'こくさい', 'Internasional'],
    ['全国', 'ぜんこく', 'Seluruh negara'],
    ['国民', 'こくみん', 'Rakyat'],
  ],

  電: [
    ['電話', 'でんわ', 'Telepon'],
    ['電気', 'でんき', 'Listrik'],
    ['電車', 'でんしゃ', 'Kereta listrik'],
    ['電池', 'でんち', 'Baterai'],
    ['電子', 'でんし', 'Elektron'],
    ['電気代', 'でんきだい', 'Biaya listrik'],
    ['停電', 'ていでん', 'Pemadaman listrik'],
    ['電力', 'でんりょく', 'Tenaga listrik'],
  ],

  本: [
    ['本', 'ほん', 'Buku'],
    ['日本', 'にほん', 'Jepang'],
    ['日本語', 'にほんご', 'Bahasa Jepang'],
    ['本当', 'ほんとう', 'Benar / Sungguh'],
    ['本屋', 'ほんや', 'Toko buku'],
    ['本日', 'ほんじつ', 'Hari ini (formal)'],
    ['本人', 'ほんにん', 'Orang yang bersangkutan'],
    ['基本', 'きほん', 'Dasar'],
    ['本物', 'ほんもの', 'Barang asli'],
  ],

  車: [
    ['車', 'くるま', 'Mobil / Kendaraan'],
    ['電車', 'でんしゃ', 'Kereta listrik'],
    ['自動車', 'じどうしゃ', 'Mobil'],
    ['自転車', 'じてんしゃ', 'Sepeda'],
    ['駐車場', 'ちゅうしゃじょう', 'Tempat parkir'],
    ['車内', 'しゃない', 'Di dalam kendaraan'],
    ['洗車', 'せんしゃ', 'Mencuci mobil'],
    ['車椅子', 'くるまいす', 'Kursi roda'],
  ],

  校: [
    ['学校', 'がっこう', 'Sekolah'],
    ['小学校', 'しょうがっこう', 'Sekolah dasar'],
    ['中学校', 'ちゅうがっこう', 'SMP'],
    ['高校', 'こうこう', 'SMA'],
    ['高校生', 'こうこうせい', 'Siswa SMA'],
    ['校長', 'こうちょう', 'Kepala sekolah'],
    ['校内', 'こうない', 'Di dalam sekolah'],
    ['校外', 'こうがい', 'Di luar sekolah'],
  ],

  社: [
    ['会社', 'かいしゃ', 'Perusahaan'],
    ['会社員', 'かいしゃいん', 'Karyawan perusahaan'],
    ['社会', 'しゃかい', 'Masyarakat'],
    ['社会人', 'しゃかいじん', 'Orang yang sudah bekerja'],
    ['神社', 'じんじゃ', 'Kuil Shinto'],
    ['社長', 'しゃちょう', 'Direktur perusahaan'],
    ['本社', 'ほんしゃ', 'Kantor pusat'],
    ['入社', 'にゅうしゃ', 'Masuk perusahaan'],
  ],

  何: [
    ['何', 'なに', 'Apa'],
    ['何人', 'なんにん', 'Berapa orang'],
    ['何時', 'なんじ', 'Jam berapa'],
    ['何曜日', 'なんようび', 'Hari apa'],
    ['何月', 'なんがつ', 'Bulan apa'],
    ['何日', 'なんにち', 'Tanggal berapa / Berapa hari'],
    ['何度', 'なんど', 'Berapa kali / Berapa derajat'],
    ['何故', 'なぜ', 'Mengapa'],
  ],

  語: [
    ['日本語', 'にほんご', 'Bahasa Jepang'],
    ['英語', 'えいご', 'Bahasa Inggris'],
    ['中国語', 'ちゅうごくご', 'Bahasa Mandarin'],
    ['外国語', 'がいこくご', 'Bahasa asing'],
    ['国語', 'こくご', 'Bahasa nasional'],
    ['単語', 'たんご', 'Kosakata'],
    ['文法用語', 'ぶんぽうようご', 'Istilah tata bahasa'],
    ['敬語', 'けいご', 'Bahasa hormat'],
    ['語学', 'ごがく', 'Ilmu bahasa'],
  ],

  牛: [
    ['牛', 'うし', 'Sapi'],
    ['牛肉', 'ぎゅうにく', 'Daging sapi'],
    ['牛乳', 'ぎゅうにゅう', 'Susu sapi'],
    ['牛丼', 'ぎゅうどん', 'Gyudon / Nasi daging sapi'],
    ['子牛', 'こうし', 'Anak sapi'],
    ['牛舎', 'ぎゅうしゃ', 'Kandang sapi'],
  ],

  馬: [
    ['馬', 'うま', 'Kuda'],
    ['馬車', 'ばしゃ', 'Kereta kuda'],
    ['馬肉', 'ばにく', 'Daging kuda'],
    ['競馬', 'けいば', 'Pacuan kuda'],
    ['乗馬', 'じょうば', 'Menunggang kuda'],
    ['馬力', 'ばりき', 'Tenaga kuda'],
  ],

  魚: [
    ['魚', 'さかな', 'Ikan'],
    ['魚屋', 'さかなや', 'Toko ikan'],
    ['金魚', 'きんぎょ', 'Ikan mas koki'],
    ['熱帯魚', 'ねったいぎょ', 'Ikan tropis'],
    ['魚料理', 'さかなりょうり', 'Masakan ikan'],
    ['焼き魚', 'やきざかな', 'Ikan panggang'],
    ['魚市場', 'うおいちば', 'Pasar ikan'],
  ],

  店: [
    ['店', 'みせ', 'Toko'],
    ['店員', 'てんいん', 'Pegawai toko'],
    ['喫茶店', 'きっさてん', 'Kedai kopi'],
    ['書店', 'しょてん', 'Toko buku'],
    ['売店', 'ばいてん', 'Kios'],
    ['本店', 'ほんてん', 'Toko pusat / Cabang utama'],
    ['支店', 'してん', 'Cabang toko / Perusahaan'],
    ['店長', 'てんちょう', 'Kepala toko'],
  ],

  駅: [
    ['駅', 'えき', 'Stasiun'],
    ['駅前', 'えきまえ', 'Depan stasiun'],
    ['駅員', 'えきいん', 'Petugas stasiun'],
    ['駅長', 'えきちょう', 'Kepala stasiun'],
    ['駅弁', 'えきべん', 'Bekal makanan stasiun'],
    ['駅ビル', 'えきビル', 'Gedung pusat perbelanjaan di stasiun'],
    ['終着駅', 'しゅうちゃくえき', 'Stasiun terakhir'],
    ['乗換駅', 'のりかええき', 'Stasiun transit'],
  ],
  //N4

  勉: [
    ['勉強', 'べんきょう', 'Belajar'],
    ['勉強する', 'べんきょうする', 'Mempelajari'],
    ['勉強会', 'べんきょうかい', 'Kelompok belajar'],
    ['勤勉', 'きんべん', 'Rajin / Tekun'],
  ],

  習: [
    ['習う', 'ならう', 'Belajar'],
    ['練習', 'れんしゅう', 'Latihan'],
    ['復習', 'ふくしゅう', 'Mengulang pelajaran'],
    ['予習', 'よしゅう', 'Belajar sebelum pelajaran'],
    ['習慣', 'しゅうかん', 'Kebiasaan'],
    ['学習', 'がくしゅう', 'Pembelajaran'],
  ],

  教: [
    ['教える', 'おしえる', 'Mengajar / Memberitahu'],
    ['教室', 'きょうしつ', 'Ruang kelas'],
    ['教育', 'きょういく', 'Pendidikan'],
    ['教科書', 'きょうかしょ', 'Buku pelajaran'],
    ['教員', 'きょういん', 'Tenaga pengajar'],
    ['教会', 'きょうかい', 'Gereja'],
  ],

  住: [
    ['住む', 'すむ', 'Tinggal'],
    ['住所', 'じゅうしょ', 'Alamat'],
    ['住宅', 'じゅうたく', 'Perumahan'],
    ['住民', 'じゅうみん', 'Penduduk'],
    ['住居', 'じゅうきょ', 'Tempat tinggal'],
    ['移住', 'いじゅう', 'Pindah tempat tinggal'],
  ],

  知: [
    ['知る', 'しる', 'Mengetahui'],
    ['知っている', 'しっている', 'Mengetahui / Mengenal'],
    ['知らせる', 'しらせる', 'Memberitahukan'],
    ['知識', 'ちしき', 'Pengetahuan'],
    ['通知', 'つうち', 'Pemberitahuan'],
    ['知人', 'ちじん', 'Kenalan'],
    ['承知', 'しょうち', 'Memahami / Menyetujui'],
  ],

  作: [
    ['作る', 'つくる', 'Membuat'],
    ['作文', 'さくぶん', 'Karangan'],
    ['作家', 'さっか', 'Penulis / Pengarang'],
    ['作品', 'さくひん', 'Karya'],
    ['作業', 'さぎょう', 'Pekerjaan / Aktivitas'],
    ['作成', 'さくせい', 'Pembuatan / Penyusunan'],
    ['操作', 'そうさ', 'Pengoperasian'],
  ],

  有: [
    ['有る', 'ある', 'Ada / Memiliki'],
    ['有名', 'ゆうめい', 'Terkenal'],
    ['有料', 'ゆうりょう', 'Berbayar'],
    ['有効', 'ゆうこう', 'Berlaku / Efektif'],
    ['有利', 'ゆうり', 'Menguntungkan'],
    ['所有', 'しょゆう', 'Kepemilikan'],
    ['有無', 'うむ', 'Ada atau tidak ada'],
  ],

  止: [
    ['止まる', 'とまる', 'Berhenti'],
    ['止める', 'とめる', 'Menghentikan'],
    ['中止', 'ちゅうし', 'Pembatalan / Penghentian'],
    ['禁止', 'きんし', 'Larangan'],
    ['停止', 'ていし', 'Penghentian'],
    ['止まれ', 'とまれ', 'Berhenti!'],
  ],

  通: [
    ['通る', 'とおる', 'Melewati'],
    ['通う', 'かよう', 'Pergi secara rutin'],
    ['通す', 'とおす', 'Melewatkan'],
    ['交通', 'こうつう', 'Lalu lintas / Transportasi'],
    ['通学', 'つうがく', 'Pergi ke sekolah'],
    ['通勤', 'つうきん', 'Pergi bekerja'],
    ['通知', 'つうち', 'Pemberitahuan'],
    ['普通', 'ふつう', 'Biasa / Normal'],
  ],

  乗: [
    ['乗る', 'のる', 'Naik kendaraan'],
    ['乗せる', 'のせる', 'Menaikkan / Memboncengkan'],
    ['乗車', 'じょうしゃ', 'Naik kendaraan'],
    ['乗客', 'じょうきゃく', 'Penumpang'],
    ['乗り物', 'のりもの', 'Kendaraan'],
    ['乗り換え', 'のりかえ', 'Transit / Berganti kendaraan'],
  ],

  降: [
    ['降りる', 'おりる', 'Turun dari kendaraan'],
    ['降る', 'ふる', 'Turun (hujan / salju)'],
    ['降ろす', 'おろす', 'Menurunkan'],
    ['以降', 'いこう', 'Setelah / Mulai dari'],
    ['降車', 'こうしゃ', 'Turun dari kendaraan'],
    ['降水', 'こうすい', 'Curah hujan'],
  ],

  待: [
    ['待つ', 'まつ', 'Menunggu'],
    ['待ち合わせ', 'まちあわせ', 'Janji bertemu'],
    ['期待', 'きたい', 'Harapan'],
    ['招待', 'しょうたい', 'Undangan'],
    ['待合室', 'まちあいしつ', 'Ruang tunggu'],
    ['待機', 'たいき', 'Siaga / Menunggu'],
  ],

  持: [
    ['持つ', 'もつ', 'Membawa / Memiliki'],
    ['持って行く', 'もっていく', 'Membawa pergi'],
    ['持って来る', 'もってくる', 'Membawa kemari'],
    ['気持ち', 'きもち', 'Perasaan'],
    ['持ち物', 'もちもの', 'Barang bawaan'],
    ['支持', 'しじ', 'Dukungan'],
    ['維持', 'いじ', 'Pemeliharaan / Mempertahankan'],
  ],

  押: [
    ['押す', 'おす', 'Menekan / Mendorong'],
    ['押さえる', 'おさえる', 'Menahan'],
    ['押し入れ', 'おしいれ', 'Lemari dinding'],
    ['押しボタン', 'おしボタン', 'Tombol tekan'],
    ['押印', 'おういん', 'Pembubuhan cap'],
  ],

  引: [
    ['引く', 'ひく', 'Menarik'],
    ['引き出す', 'ひきだす', 'Menarik keluar'],
    ['引っ越す', 'ひっこす', 'Pindah rumah'],
    ['引き出し', 'ひきだし', 'Laci'],
    ['引き受ける', 'ひきうける', 'Menerima tanggung jawab'],
    ['引退', 'いんたい', 'Pensiun / Mengundurkan diri'],
    ['取引', 'とりひき', 'Transaksi'],
  ],

  歩: [
    ['歩く', 'あるく', 'Berjalan'],
    ['散歩', 'さんぽ', 'Jalan-jalan'],
    ['歩道', 'ほどう', 'Trotoar'],
    ['歩行', 'ほこう', 'Berjalan kaki'],
    ['進歩', 'しんぽ', 'Kemajuan'],
    ['一歩', 'いっぽ', 'Satu langkah'],
  ],

  走: [
    ['走る', 'はしる', 'Berlari'],
    ['走行', 'そうこう', 'Perjalanan kendaraan'],
    ['競走', 'きょうそう', 'Perlombaan lari'],
    ['走者', 'そうしゃ', 'Pelari'],
    ['暴走', 'ぼうそう', 'Melaju tak terkendali'],
  ],

  急: [
    ['急ぐ', 'いそぐ', 'Terburu-buru'],
    ['急に', 'きゅうに', 'Tiba-tiba'],
    ['急行', 'きゅうこう', 'Kereta ekspres'],
    ['急用', 'きゅうよう', 'Keperluan mendadak'],
    ['急病', 'きゅうびょう', 'Penyakit mendadak'],
    ['急速', 'きゅうそく', 'Cepat / Pesat'],
    ['緊急', 'きんきゅう', 'Darurat'],
  ],

  座: [
    ['座る', 'すわる', 'Duduk'],
    ['座席', 'ざせき', 'Tempat duduk'],
    ['座布団', 'ざぶとん', 'Bantal duduk'],
    ['口座', 'こうざ', 'Rekening bank'],
    ['正座', 'せいざ', 'Duduk formal ala Jepang'],
    ['星座', 'せいざ', 'Rasi bintang'],
  ],

  写: [
    ['写真', 'しゃしん', 'Foto'],
    ['写す', 'うつす', 'Memotret / Menyalin'],
    ['写る', 'うつる', 'Terfoto / Tercermin'],
    ['写し', 'うつし', 'Salinan'],
    ['複写', 'ふくしゃ', 'Fotokopi / Duplikasi'],
    ['描写', 'びょうしゃ', 'Penggambaran / Deskripsi'],
  ],

  思: [
    ['思う', 'おもう', 'Berpikir / Merasa'],
    ['思い出', 'おもいで', 'Kenangan'],
    ['思い出す', 'おもいだす', 'Mengingat kembali'],
    ['思い切る', 'おもいきる', 'Membulatkan tekad'],
    ['不思議', 'ふしぎ', 'Aneh / Misterius'],
    ['思想', 'しそう', 'Pemikiran / Ideologi'],
    ['意思', 'いし', 'Niat / Kehendak'],
  ],

  切: [
    ['切る', 'きる', 'Memotong'],
    ['切れる', 'きれる', 'Terputus / Tajam'],
    ['切手', 'きって', 'Perangko'],
    ['大切', 'たいせつ', 'Penting / Berharga'],
    ['親切', 'しんせつ', 'Ramah / Baik hati'],
    ['締め切り', 'しめきり', 'Batas waktu'],
    ['切符', 'きっぷ', 'Tiket'],
  ],

  売: [
    ['売る', 'うる', 'Menjual'],
    ['売れる', 'うれる', 'Terjual / Laris'],
    ['売店', 'ばいてん', 'Kios'],
    ['売り場', 'うりば', 'Tempat penjualan'],
    ['売買', 'ばいばい', 'Jual beli'],
    ['販売', 'はんばい', 'Penjualan'],
    ['売上', 'うりあげ', 'Hasil penjualan'],
  ],

  合: [
    ['合う', 'あう', 'Cocok / Sesuai'],
    ['合わせる', 'あわせる', 'Mencocokkan / Menggabungkan'],
    ['試合', 'しあい', 'Pertandingan'],
    ['場合', 'ばあい', 'Keadaan / Kasus'],
    ['合格', 'ごうかく', 'Lulus'],
    ['集合', 'しゅうごう', 'Berkumpul'],
    ['会合', 'かいごう', 'Pertemuan'],
    ['都合', 'つごう', 'Keadaan / Kondisi / Kesempatan'],
  ],

  考: [
    ['考える', 'かんがえる', 'Berpikir'],
    ['考え', 'かんがえ', 'Pemikiran'],
    ['考え方', 'かんがえかた', 'Cara berpikir'],
    ['参考', 'さんこう', 'Referensi'],
    ['考古学', 'こうこがく', 'Arkeologi'],
    ['思考', 'しこう', 'Pemikiran / Proses berpikir'],
  ],

  貸: [
    ['貸す', 'かす', 'Meminjamkan'],
    ['貸し出す', 'かしだす', 'Meminjamkan / Menyewakan'],
    ['貸し切り', 'かしきり', 'Sewa khusus / Eksklusif'],
    ['貸し物', 'かしもの', 'Barang pinjaman'],
    ['貸家', 'かしや', 'Rumah kontrakan'],
    ['貸室', 'かししつ', 'Ruangan sewaan'],
  ],

  借: [
    ['借りる', 'かりる', 'Meminjam'],
    ['借金', 'しゃっきん', 'Utang'],
    ['借家', 'しゃくや', 'Rumah sewaan'],
    ['借用', 'しゃくよう', 'Peminjaman'],
    ['借主', 'かりぬし', 'Penyewa / Peminjam'],
  ],

  開: [
    ['開く', 'あく', 'Terbuka'],
    ['開ける', 'あける', 'Membuka'],
    ['開く', 'ひらく', 'Membuka / Menyelenggarakan'],
    ['開店', 'かいてん', 'Pembukaan toko'],
    ['開会', 'かいかい', 'Pembukaan acara'],
    ['開始', 'かいし', 'Permulaan'],
    ['公開', 'こうかい', 'Publikasi / Terbuka untuk umum'],
    ['開発', 'かいはつ', 'Pengembangan'],
  ],

  閉: [
    ['閉まる', 'しまる', 'Tertutup'],
    ['閉める', 'しめる', 'Menutup'],
    ['閉じる', 'とじる', 'Menutup'],
    ['閉店', 'へいてん', 'Penutupan toko'],
    ['閉会', 'へいかい', 'Penutupan acara'],
    ['閉鎖', 'へいさ', 'Penutupan / Penghentian operasi'],
  ],

  別: [
    ['別', 'べつ', 'Berbeda / Lain'],
    ['別れる', 'わかれる', 'Berpisah'],
    ['別々', 'べつべつ', 'Masing-masing / Terpisah'],
    ['特別', 'とくべつ', 'Istimewa / Khusus'],
    ['区別', 'くべつ', 'Pembedaan'],
    ['差別', 'さべつ', 'Diskriminasi'],
    ['送別', 'そうべつ', 'Perpisahan'],
  ],

  答: [
    ['答える', 'こたえる', 'Menjawab'],
    ['答え', 'こたえ', 'Jawaban'],
    ['答案', 'とうあん', 'Lembar jawaban'],
    ['回答', 'かいとう', 'Jawaban / Tanggapan'],
    ['正解', 'せいかい', 'Jawaban benar'],
    ['問答', 'もんどう', 'Tanya jawab'],
  ],

  送: [
    ['送る', 'おくる', 'Mengirim / Mengantar'],
    ['送信', 'そうしん', 'Pengiriman pesan'],
    ['送料', 'そうりょう', 'Ongkos kirim'],
    ['送金', 'そうきん', 'Pengiriman uang'],
    ['放送', 'ほうそう', 'Siaran'],
    ['見送る', 'みおくる', 'Mengantar / Melepas kepergian'],
    ['送別会', 'そうべつかい', 'Pesta perpisahan'],
  ],

  帰: [
    ['帰る', 'かえる', 'Pulang'],
    ['帰す', 'かえす', 'Memulangkan'],
    ['帰国', 'きこく', 'Pulang ke negara asal'],
    ['帰宅', 'きたく', 'Pulang ke rumah'],
    ['帰り道', 'かえりみち', 'Jalan pulang'],
    ['日帰り', 'ひがえり', 'Pulang pada hari yang sama'],
  ],

  着: [
    ['着る', 'きる', 'Memakai pakaian'],
    ['着く', 'つく', 'Tiba'],
    ['着せる', 'きせる', 'Memakaikan pakaian'],
    ['到着', 'とうちゃく', 'Kedatangan'],
    ['着物', 'きもの', 'Kimono'],
    ['下着', 'したぎ', 'Pakaian dalam'],
    ['着席', 'ちゃくせき', 'Duduk di tempat'],
    ['着陸', 'ちゃくりく', 'Mendarat'],
  ],

  起: [
    ['起きる', 'おきる', 'Bangun'],
    ['起こす', 'おこす', 'Membangunkan'],
    ['起こる', 'おこる', 'Terjadi'],
    ['起床', 'きしょう', 'Bangun tidur'],
    ['起立', 'きりつ', 'Berdiri'],
    ['起業', 'きぎょう', 'Mendirikan usaha'],
    ['原因', 'げんいん', 'Penyebab'],
  ],

  寝: [
    ['寝る', 'ねる', 'Tidur'],
    ['寝室', 'しんしつ', 'Kamar tidur'],
    ['寝坊', 'ねぼう', 'Bangun kesiangan'],
    ['昼寝', 'ひるね', 'Tidur siang'],
    ['寝台', 'しんだい', 'Tempat tidur'],
    ['寝不足', 'ねぶそく', 'Kurang tidur'],
  ],

  去: [
    ['去る', 'さる', 'Pergi / Meninggalkan'],
    ['去年', 'きょねん', 'Tahun lalu'],
    ['過去', 'かこ', 'Masa lalu'],
    ['消去', 'しょうきょ', 'Penghapusan'],
    ['撤去', 'てっきょ', 'Pemindahan / Pembongkaran'],
    ['去る者', 'さるもの', 'Orang yang pergi'],
  ],

  転: [
    ['転ぶ', 'ころぶ', 'Jatuh / Tersandung'],
    ['転がる', 'ころがる', 'Menggelinding'],
    ['運転', 'うんてん', 'Mengemudi'],
    ['自転車', 'じてんしゃ', 'Sepeda'],
    ['転校', 'てんこう', 'Pindah sekolah'],
    ['転職', 'てんしょく', 'Pindah pekerjaan'],
    ['回転', 'かいてん', 'Perputaran'],
  ],

  始: [
    ['始まる', 'はじまる', 'Dimulai'],
    ['始める', 'はじめる', 'Memulai'],
    ['開始', 'かいし', 'Permulaan'],
    ['始発', 'しはつ', 'Kereta pertama'],
    ['始業', 'しぎょう', 'Dimulainya pekerjaan / Pelajaran'],
    ['始終', 'しじゅう', 'Sepanjang waktu / Selalu'],
  ],

  終: [
    ['終わる', 'おわる', 'Selesai'],
    ['終える', 'おえる', 'Menyelesaikan'],
    ['終了', 'しゅうりょう', 'Penyelesaian'],
    ['終点', 'しゅうてん', 'Pemberhentian terakhir'],
    ['最終', 'さいしゅう', 'Terakhir'],
    ['終電', 'しゅうでん', 'Kereta terakhir'],
    ['終日', 'しゅうじつ', 'Sepanjang hari'],
  ],

  動: [
    ['動く', 'うごく', 'Bergerak'],
    ['動かす', 'うごかす', 'Menggerakkan'],
    ['運動', 'うんどう', 'Olahraga'],
    ['自動', 'じどう', 'Otomatis'],
    ['動物', 'どうぶつ', 'Hewan'],
    ['活動', 'かつどう', 'Aktivitas'],
    ['動作', 'どうさ', 'Gerakan / Operasi'],
  ],

  働: [
    ['働く', 'はたらく', 'Bekerja'],
    ['働き', 'はたらき', 'Pekerjaan / Fungsi'],
    ['労働', 'ろうどう', 'Tenaga kerja / Buruh'],
    ['働き方', 'はたらきかた', 'Cara bekerja'],
    ['共働き', 'ともばたらき', 'Suami istri sama-sama bekerja'],
    ['労働者', 'ろうどうしゃ', 'Pekerja'],
  ],

  洗: [
    ['洗う', 'あらう', 'Mencuci'],
    ['洗濯', 'せんたく', 'Mencuci pakaian'],
    ['洗面所', 'せんめんじょ', 'Tempat mencuci muka'],
    ['洗剤', 'せんざい', 'Deterjen'],
    ['洗車', 'せんしゃ', 'Mencuci mobil'],
    ['洗濯機', 'せんたくき', 'Mesin cuci'],
  ],

  進: [
    ['進む', 'すすむ', 'Maju'],
    ['進める', 'すすめる', 'Memajukan / Melanjutkan'],
    ['進学', 'しんがく', 'Melanjutkan pendidikan'],
    ['進歩', 'しんぽ', 'Kemajuan'],
    ['進行', 'しんこう', 'Kemajuan / Berlangsung'],
    ['進路', 'しんろ', 'Jalur masa depan / Karier'],
    ['前進', 'ぜんしん', 'Maju ke depan'],
  ],

  使: [
    ['使う', 'つかう', 'Menggunakan'],
    ['使い方', 'つかいかた', 'Cara menggunakan'],
    ['使用', 'しよう', 'Penggunaan'],
    ['使用中', 'しようちゅう', 'Sedang digunakan'],
    ['大使', 'たいし', 'Duta besar'],
    ['使者', 'ししゃ', 'Utusan'],
    ['使い道', 'つかいみち', 'Kegunaan'],
  ],

  試: [
    ['試す', 'ためす', 'Mencoba / Menguji'],
    ['試験', 'しけん', 'Ujian'],
    ['試合', 'しあい', 'Pertandingan'],
    ['試着', 'しちゃく', 'Mencoba pakaian'],
    ['試食', 'ししょく', 'Mencicipi makanan'],
    ['試作品', 'しさくひん', 'Produk percobaan'],
    ['入試', 'にゅうし', 'Ujian masuk'],
  ],

  研: [
    ['研究', 'けんきゅう', 'Penelitian'],
    ['研究者', 'けんきゅうしゃ', 'Peneliti'],
    ['研究室', 'けんきゅうしつ', 'Laboratorium / Ruang penelitian'],
    ['研修', 'けんしゅう', 'Pelatihan'],
    ['研修生', 'けんしゅうせい', 'Peserta pelatihan'],
    ['研ぐ', 'とぐ', 'Mengasah / Mencuci beras'],
  ],

  建: [
    ['建てる', 'たてる', 'Membangun'],
    ['建つ', 'たつ', 'Terbangun'],
    ['建物', 'たてもの', 'Bangunan'],
    ['建設', 'けんせつ', 'Konstruksi'],
    ['建築', 'けんちく', 'Arsitektur'],
    ['建国', 'けんこく', 'Pendirian negara'],
    ['建前', 'たてまえ', 'Sikap resmi / Pernyataan formal'],
  ],

  説: [
    ['説明', 'せつめい', 'Penjelasan'],
    ['説明する', 'せつめいする', 'Menjelaskan'],
    ['小説', 'しょうせつ', 'Novel'],
    ['説得', 'せっとく', 'Membujuk / Meyakinkan'],
    ['伝説', 'でんせつ', 'Legenda'],
    ['解説', 'かいせつ', 'Ulasan / Penjelasan'],
    ['意見', 'いけん', 'Pendapat'],
  ],

  産: [
    ['産む', 'うむ', 'Melahirkan'],
    ['生産', 'せいさん', 'Produksi'],
    ['産業', 'さんぎょう', 'Industri'],
    ['出産', 'しゅっさん', 'Persalinan'],
    ['産地', 'さんち', 'Daerah asal produksi'],
    ['土産', 'みやげ', 'Oleh-oleh'],
    ['財産', 'ざいさん', 'Harta kekayaan'],
  ],

  発: [
    ['出発', 'しゅっぱつ', 'Keberangkatan'],
    ['発音', 'はつおん', 'Pelafalan'],
    ['発表', 'はっぴょう', 'Presentasi / Pengumuman'],
    ['発見', 'はっけん', 'Penemuan'],
    ['発明', 'はつめい', 'Penemuan / Invensi'],
    ['発達', 'はったつ', 'Perkembangan'],
    ['発行', 'はっこう', 'Penerbitan'],
    ['発車', 'はっしゃ', 'Keberangkatan kendaraan'],
  ],

  田: [
    ['田', 'た', 'Sawah'],
    ['田んぼ', 'たんぼ', 'Sawah'],
    ['田舎', 'いなか', 'Desa / Kampung'],
    ['田植え', 'たうえ', 'Penanaman padi'],
    ['水田', 'すいでん', 'Sawah berair'],
    ['田園', 'でんえん', 'Daerah persawahan'],
  ],

  貝: [
    ['貝', 'かい', 'Kerang'],
    ['貝殻', 'かいがら', 'Cangkang kerang'],
    ['貝類', 'かいるい', 'Jenis-jenis kerang'],
    ['貝売り', 'かいうり', 'Penjual kerang'],
    ['二枚貝', 'にまいがい', 'Kerang bercangkang dua'],
  ],

  犬: [
    ['犬', 'いぬ', 'Anjing'],
    ['子犬', 'こいぬ', 'Anak anjing'],
    ['野犬', 'やけん', 'Anjing liar'],
    ['番犬', 'ばんけん', 'Anjing penjaga'],
    ['盲導犬', 'もうどうけん', 'Anjing penuntun tunanetra'],
    ['愛犬', 'あいけん', 'Anjing kesayangan'],
  ],

  正: [
    ['正しい', 'ただしい', 'Benar'],
    ['正月', 'しょうがつ', 'Tahun baru'],
    ['正解', 'せいかい', 'Jawaban benar'],
    ['正直', 'しょうじき', 'Jujur'],
    ['正確', 'せいかく', 'Akurat'],
    ['正門', 'せいもん', 'Gerbang utama'],
    ['訂正', 'ていせい', 'Koreksi'],
    ['正式', 'せいしき', 'Resmi'],
  ],

  早: [
    ['早い', 'はやい', 'Cepat / Awal'],
    ['早く', 'はやく', 'Dengan cepat'],
    ['早起き', 'はやおき', 'Bangun pagi'],
    ['早朝', 'そうちょう', 'Pagi-pagi sekali'],
    ['早速', 'さっそく', 'Segera'],
    ['早退', 'そうたい', 'Pulang lebih awal'],
  ],

  太: [
    ['太い', 'ふとい', 'Tebal / Gemuk'],
    ['太る', 'ふとる', 'Menjadi gemuk'],
    ['太陽', 'たいよう', 'Matahari'],
    ['太鼓', 'たいこ', 'Genderang Jepang'],
    ['太字', 'ふとじ', 'Huruf tebal'],
    ['太平洋', 'たいへいよう', 'Samudra Pasifik'],
  ],

  広: [
    ['広い', 'ひろい', 'Luas'],
    ['広げる', 'ひろげる', 'Membentangkan / Memperluas'],
    ['広がる', 'ひろがる', 'Meluas'],
    ['広場', 'ひろば', 'Lapangan / Alun-alun'],
    ['広告', 'こうこく', 'Iklan'],
    ['広報', 'こうほう', 'Hubungan masyarakat / Publikasi'],
    ['広大', 'こうだい', 'Sangat luas'],
  ],

  近: [
    ['近い', 'ちかい', 'Dekat'],
    ['近く', 'ちかく', 'Di dekat'],
    ['近所', 'きんじょ', 'Lingkungan sekitar'],
    ['最近', 'さいきん', 'Akhir-akhir ini'],
    ['近道', 'ちかみち', 'Jalan pintas'],
    ['近代', 'きんだい', 'Zaman modern'],
    ['近年', 'きんねん', 'Beberapa tahun terakhir'],
  ],

  遠: [
    ['遠い', 'とおい', 'Jauh'],
    ['遠く', 'とおく', 'Tempat yang jauh'],
    ['遠足', 'えんそく', 'Piknik sekolah'],
    ['遠慮', 'えんりょ', 'Sungkan / Menahan diri'],
    ['遠回り', 'とおまわり', 'Memutar jalan'],
    ['永遠', 'えいえん', 'Keabadian'],
  ],

  低: [
    ['低い', 'ひくい', 'Rendah'],
    ['低下', 'ていか', 'Penurunan'],
    ['最低', 'さいてい', 'Paling rendah / Terburuk'],
    ['低温', 'ていおん', 'Suhu rendah'],
    ['低音', 'ていおん', 'Nada rendah'],
    ['低価格', 'ていかかく', 'Harga rendah'],
  ],

  好: [
    ['好き', 'すき', 'Suka'],
    ['大好き', 'だいすき', 'Sangat suka'],
    ['好む', 'このむ', 'Menyukai'],
    ['好み', 'このみ', 'Selera / Kesukaan'],
    ['好物', 'こうぶつ', 'Makanan favorit'],
    ['好意', 'こうい', 'Niat baik / Perasaan suka'],
    ['友好', 'ゆうこう', 'Persahabatan'],
  ],

  明: [
    ['明るい', 'あかるい', 'Terang / Ceria'],
    ['明日', 'あした', 'Besok'],
    ['明後日', 'あさって', 'Lusa'],
    ['説明', 'せつめい', 'Penjelasan'],
    ['明確', 'めいかく', 'Jelas'],
    ['明らか', 'あきらか', 'Jelas / Nyata'],
    ['文明', 'ぶんめい', 'Peradaban'],
  ],

  暗: [
    ['暗い', 'くらい', 'Gelap'],
    ['暗記', 'あんき', 'Menghafal'],
    ['暗号', 'あんごう', 'Kode rahasia'],
    ['暗室', 'あんしつ', 'Ruang gelap'],
    ['暗算', 'あんざん', 'Berhitung di luar kepala'],
    ['真っ暗', 'まっくら', 'Gelap gulita'],
  ],

  悪: [
    ['悪い', 'わるい', 'Buruk / Jahat'],
    ['悪口', 'わるぐち', 'Celaan / Perkataan buruk'],
    ['悪者', 'わるもの', 'Orang jahat'],
    ['最悪', 'さいあく', 'Paling buruk'],
    ['悪化', 'あっか', 'Memburuk'],
    ['悪天候', 'あくてんこう', 'Cuaca buruk'],
    ['悪意', 'あくい', 'Niat buruk'],
  ],

  強: [
    ['強い', 'つよい', 'Kuat'],
    ['強める', 'つよめる', 'Memperkuat'],
    ['勉強', 'べんきょう', 'Belajar'],
    ['強風', 'きょうふう', 'Angin kencang'],
    ['強力', 'きょうりょく', 'Kuat / Bertenaga'],
    ['強調', 'きょうちょう', 'Penekanan'],
    ['強制', 'きょうせい', 'Paksaan'],
  ],

  弱: [
    ['弱い', 'よわい', 'Lemah'],
    ['弱める', 'よわめる', 'Melemahkan'],
    ['弱点', 'じゃくてん', 'Kelemahan'],
    ['弱気', 'よわき', 'Tidak percaya diri'],
    ['弱者', 'じゃくしゃ', 'Orang lemah'],
    ['弱まる', 'よわまる', 'Menjadi lemah'],
  ],

  楽: [
    ['楽しい', 'たのしい', 'Menyenangkan'],
    ['楽しむ', 'たのしむ', 'Menikmati'],
    ['楽', 'らく', 'Mudah / Nyaman'],
    ['音楽', 'おんがく', 'Musik'],
    ['楽器', 'がっき', 'Alat musik'],
    ['楽園', 'らくえん', 'Surga / Taman indah'],
    ['気楽', 'きらく', 'Santai / Tidak terbebani'],
  ],

  軽: [
    ['軽い', 'かるい', 'Ringan'],
    ['軽く', 'かるく', 'Dengan ringan'],
    ['軽食', 'けいしょく', 'Makanan ringan'],
    ['軽自動車', 'けいじどうしゃ', 'Mobil kecil'],
    ['軽量', 'けいりょう', 'Bobot ringan'],
    ['軽視', 'けいし', 'Meremehkan'],
  ],

  重: [
    ['重い', 'おもい', 'Berat'],
    ['重ねる', 'かさねる', 'Menumpuk'],
    ['重なる', 'かさなる', 'Bertumpuk'],
    ['重要', 'じゅうよう', 'Penting'],
    ['体重', 'たいじゅう', 'Berat badan'],
    ['重量', 'じゅうりょう', 'Berat / Bobot'],
    ['重力', 'じゅうりょく', 'Gravitasi'],
    ['二重', 'にじゅう', 'Dua lapis / Ganda'],
  ],

  暑: [
    ['暑い', 'あつい', 'Panas (cuaca)'],
    ['暑さ', 'あつさ', 'Panasnya cuaca'],
    ['猛暑', 'もうしょ', 'Panas terik'],
    ['暑中', 'しょちゅう', 'Musim panas'],
    ['残暑', 'ざんしょ', 'Panas yang masih tersisa'],
    ['暑苦しい', 'あつくるしい', 'Gerah'],
  ],

  寒: [
    ['寒い', 'さむい', 'Dingin (cuaca)'],
    ['寒さ', 'さむさ', 'Rasa dingin'],
    ['寒気', 'さむけ', 'Menggigil / Merasa kedinginan'],
    ['寒冷', 'かんれい', 'Dingin'],
    ['寒暖', 'かんだん', 'Panas dan dingin'],
    ['防寒', 'ぼうかん', 'Perlindungan dari dingin'],
  ],

  短: [
    ['短い', 'みじかい', 'Pendek'],
    ['短時間', 'たんじかん', 'Waktu singkat'],
    ['短所', 'たんしょ', 'Kekurangan'],
    ['短期', 'たんき', 'Jangka pendek'],
    ['短文', 'たんぶん', 'Kalimat pendek'],
    ['短縮', 'たんしゅく', 'Pemendekan'],
    ['短大', 'たんだい', 'Perguruan tinggi junior'],
  ],

  仕: [
    ['仕事', 'しごと', 'Pekerjaan'],
    ['仕方', 'しかた', 'Cara / Metode'],
    ['仕上げる', 'しあげる', 'Menyelesaikan'],
    ['仕上がる', 'しあがる', 'Selesai'],
    ['仕組み', 'しくみ', 'Sistem / Mekanisme'],
    ['仕返し', 'しかえし', 'Balas dendam'],
  ],

  元: [
    ['元気', 'げんき', 'Sehat / Bersemangat'],
    ['元', 'もと', 'Asal / Dasar'],
    ['元々', 'もともと', 'Pada awalnya'],
    ['地元', 'じもと', 'Daerah asal'],
    ['元日', 'がんじつ', 'Hari pertama tahun baru'],
    ['元年', 'がんねん', 'Tahun pertama suatu era'],
    ['元通り', 'もとどおり', 'Seperti semula'],
  ],

  道: [
    ['道', 'みち', 'Jalan'],
    ['道路', 'どうろ', 'Jalan raya'],
    ['道具', 'どうぐ', 'Peralatan'],
    ['書道', 'しょどう', 'Kaligrafi Jepang'],
    ['柔道', 'じゅうどう', 'Judo'],
    ['剣道', 'けんどう', 'Kendo'],
    ['歩道', 'ほどう', 'Trotoar'],
    ['近道', 'ちかみち', 'Jalan pintas'],
  ],

  文: [
    ['文章', 'ぶんしょう', 'Tulisan / Karangan'],
    ['文化', 'ぶんか', 'Budaya'],
    ['文学', 'ぶんがく', 'Sastra'],
    ['文法', 'ぶんぽう', 'Tata bahasa'],
    ['作文', 'さくぶん', 'Karangan'],
    ['文字', 'もじ', 'Huruf'],
    ['文書', 'ぶんしょ', 'Dokumen tertulis'],
  ],

  字: [
    ['字', 'じ', 'Huruf / Karakter'],
    ['文字', 'もじ', 'Huruf'],
    ['漢字', 'かんじ', 'Kanji'],
    ['数字', 'すうじ', 'Angka'],
    ['名字', 'みょうじ', 'Nama keluarga'],
    ['字引', 'じびき', 'Kamus'],
    ['習字', 'しゅうじ', 'Latihan menulis huruf'],
  ],

  京: [
    ['東京', 'とうきょう', 'Tokyo'],
    ['京都', 'きょうと', 'Kyoto'],
    ['京阪', 'けいはん', 'Wilayah Kyoto dan Osaka'],
    ['京風', 'きょうふう', 'Gaya Kyoto'],
    ['上京', 'じょうきょう', 'Pergi ke Tokyo'],
  ],

  私: [
    ['私', 'わたし', 'Saya'],
    ['私立', 'しりつ', 'Swasta'],
    ['私服', 'しふく', 'Pakaian pribadi / Pakaian bebas'],
    ['私生活', 'しせいかつ', 'Kehidupan pribadi'],
    ['私用', 'しよう', 'Keperluan pribadi'],
    ['私有', 'しゆう', 'Kepemilikan pribadi'],
  ],

  自: [
    ['自分', 'じぶん', 'Diri sendiri'],
    ['自動', 'じどう', 'Otomatis'],
    ['自転車', 'じてんしゃ', 'Sepeda'],
    ['自動車', 'じどうしゃ', 'Mobil'],
    ['自然', 'しぜん', 'Alam'],
    ['自由', 'じゆう', 'Kebebasan'],
    ['自信', 'じしん', 'Kepercayaan diri'],
    ['自宅', 'じたく', 'Rumah sendiri'],
  ],

  心: [
    ['心', 'こころ', 'Hati / Pikiran'],
    ['安心', 'あんしん', 'Tenang / Lega'],
    ['心配', 'しんぱい', 'Khawatir'],
    ['中心', 'ちゅうしん', 'Pusat'],
    ['熱心', 'ねっしん', 'Antusias / Tekun'],
    ['関心', 'かんしん', 'Ketertarikan'],
    ['心臓', 'しんぞう', 'Jantung'],
    ['本心', 'ほんしん', 'Isi hati yang sebenarnya'],
  ],

  公: [
    ['公園', 'こうえん', 'Taman umum'],
    ['公共', 'こうきょう', 'Kepentingan umum'],
    ['公開', 'こうかい', 'Terbuka untuk umum'],
    ['公平', 'こうへい', 'Adil'],
    ['公務員', 'こうむいん', 'Pegawai negeri'],
    ['公立', 'こうりつ', 'Milik pemerintah'],
    ['公表', 'こうひょう', 'Pengumuman resmi'],
  ],

  台: [
    ['台', 'だい', 'Alas / Unit penghitung mesin'],
    ['台所', 'だいどころ', 'Dapur'],
    ['台風', 'たいふう', 'Topan'],
    ['台車', 'だいしゃ', 'Troli'],
    ['台本', 'だいほん', 'Naskah'],
    ['舞台', 'ぶたい', 'Panggung'],
    ['土台', 'どだい', 'Fondasi'],
    ['一台', 'いちだい', 'Satu unit (mesin/kendaraan)'],
  ],

  夕: [
    ['夕方', 'ゆうがた', 'Sore hari'],
    ['夕日', 'ゆうひ', 'Matahari senja'],
    ['夕焼け', 'ゆうやけ', 'Langit merah saat senja'],
    ['夕食', 'ゆうしょく', 'Makan malam'],
    ['夕刊', 'ゆうかん', 'Koran sore'],
    ['七夕', 'たなばた', 'Festival Tanabata'],
  ],

  春: [
    ['春', 'はる', 'Musim semi'],
    ['春休み', 'はるやすみ', 'Liburan musim semi'],
    ['春分', 'しゅんぶん', 'Ekuinoks musim semi'],
    ['青春', 'せいしゅん', 'Masa muda'],
    ['春風', 'はるかぜ', 'Angin musim semi'],
    ['春先', 'はるさき', 'Awal musim semi'],
  ],

  夏: [
    ['夏', 'なつ', 'Musim panas'],
    ['夏休み', 'なつやすみ', 'Liburan musim panas'],
    ['夏服', 'なつふく', 'Pakaian musim panas'],
    ['夏祭り', 'なつまつり', 'Festival musim panas'],
    ['真夏', 'まなつ', 'Pertengahan musim panas'],
    ['初夏', 'しょか', 'Awal musim panas'],
  ],

  秋: [
    ['秋', 'あき', 'Musim gugur'],
    ['秋分', 'しゅうぶん', 'Ekuinoks musim gugur'],
    ['秋風', 'あきかぜ', 'Angin musim gugur'],
    ['秋祭り', 'あきまつり', 'Festival musim gugur'],
    ['初秋', 'しょしゅう', 'Awal musim gugur'],
    ['秋冬', 'あきふゆ', 'Musim gugur dan dingin'],
  ],

  冬: [
    ['冬', 'ふゆ', 'Musim dingin'],
    ['冬休み', 'ふゆやすみ', 'Liburan musim dingin'],
    ['冬服', 'ふゆふく', 'Pakaian musim dingin'],
    ['真冬', 'まふゆ', 'Puncak musim dingin'],
    ['冬季', 'とうき', 'Musim dingin'],
    ['冬至', 'とうじ', 'Titik balik matahari musim dingin'],
  ],

  兄: [
    ['兄', 'あに', 'Kakak laki-laki sendiri'],
    ['お兄さん', 'おにいさん', 'Kakak laki-laki'],
    ['兄弟', 'きょうだい', 'Saudara kandung'],
    ['兄貴', 'あにき', 'Kakak laki-laki / Senior (informal)'],
    ['長兄', 'ちょうけい', 'Kakak laki-laki tertua'],
  ],

  姉: [
    ['姉', 'あね', 'Kakak perempuan sendiri'],
    ['お姉さん', 'おねえさん', 'Kakak perempuan'],
    ['姉妹', 'しまい', 'Saudara perempuan'],
    ['姉弟', 'してい', 'Kakak perempuan dan adik laki-laki'],
    ['義姉', 'ぎし', 'Kakak perempuan ipar'],
  ],

  弟: [
    ['弟', 'おとうと', 'Adik laki-laki'],
    ['兄弟', 'きょうだい', 'Saudara kandung'],
    ['弟子', 'でし', 'Murid / Pengikut'],
    ['兄弟愛', 'きょうだいあい', 'Kasih sayang antarsaudara'],
    ['義弟', 'ぎてい', 'Adik laki-laki ipar'],
  ],

  妹: [
    ['妹', 'いもうと', 'Adik perempuan'],
    ['姉妹', 'しまい', 'Saudara perempuan'],
    ['妹さん', 'いもうとさん', 'Adik perempuan (orang lain)'],
    ['義妹', 'ぎまい', 'Adik perempuan ipar'],
  ],

  不: [
    ['不便', 'ふべん', 'Tidak praktis / Tidak nyaman'],
    ['不安', 'ふあん', 'Cemas'],
    ['不思議', 'ふしぎ', 'Aneh / Misterius'],
    ['不満', 'ふまん', 'Ketidakpuasan'],
    ['不可能', 'ふかのう', 'Tidak mungkin'],
    ['不足', 'ふそく', 'Kekurangan'],
    ['不正', 'ふせい', 'Tidak jujur / Kecurangan'],
    ['不自由', 'ふじゆう', 'Tidak bebas / Terbatas'],
  ],

  工: [
    ['工場', 'こうじょう', 'Pabrik'],
    ['工事', 'こうじ', 'Pekerjaan konstruksi'],
    ['工業', 'こうぎょう', 'Industri'],
    ['工学', 'こうがく', 'Ilmu teknik'],
    ['工夫', 'くふう', 'Ide / Akal / Kreativitas'],
    ['人工', 'じんこう', 'Buatan manusia'],
    ['加工', 'かこう', 'Pengolahan'],
  ],

  方: [
    ['方', 'かた', 'Orang (bentuk hormat) / Arah'],
    ['方法', 'ほうほう', 'Metode / Cara'],
    ['方向', 'ほうこう', 'Arah'],
    ['地方', 'ちほう', 'Daerah'],
    ['夕方', 'ゆうがた', 'Sore hari'],
    ['味方', 'みかた', 'Pihak sendiri / Sekutu'],
    ['考え方', 'かんがえかた', 'Cara berpikir'],
    ['仕方', 'しかた', 'Cara'],
  ],

  図: [
    ['地図', 'ちず', 'Peta'],
    ['図書館', 'としょかん', 'Perpustakaan'],
    ['図書', 'としょ', 'Buku / Literatur'],
    ['図形', 'ずけい', 'Bentuk geometris'],
    ['図面', 'ずめん', 'Gambar rancangan'],
    ['合図', 'あいず', 'Isyarat'],
    ['図解', 'ずかい', 'Penjelasan dengan gambar'],
  ],

  声: [
    ['声', 'こえ', 'Suara manusia'],
    ['大声', 'おおごえ', 'Suara keras'],
    ['小声', 'こごえ', 'Suara pelan'],
    ['声優', 'せいゆう', 'Pengisi suara'],
    ['歌声', 'うたごえ', 'Suara nyanyian'],
    ['音声', 'おんせい', 'Suara / Audio'],
    ['声援', 'せいえん', 'Sorakan dukungan'],
  ],

  音: [
    ['音', 'おと', 'Bunyi / Suara'],
    ['音楽', 'おんがく', 'Musik'],
    ['音声', 'おんせい', 'Suara / Audio'],
    ['発音', 'はつおん', 'Pelafalan'],
    ['音読', 'おんどく', 'Membaca dengan suara keras'],
    ['騒音', 'そうおん', 'Kebisingan'],
    ['足音', 'あしおと', 'Suara langkah kaki'],
    ['物音', 'ものおと', 'Suara sesuatu'],
  ],

  歌: [
    ['歌', 'うた', 'Lagu'],
    ['歌う', 'うたう', 'Bernyanyi'],
    ['歌手', 'かしゅ', 'Penyanyi'],
    ['歌詞', 'かし', 'Lirik lagu'],
    ['国歌', 'こっか', 'Lagu kebangsaan'],
    ['歌声', 'うたごえ', 'Suara nyanyian'],
    ['鼻歌', 'はなうた', 'Bersenandung'],
  ],

  風: [
    ['風', 'かぜ', 'Angin'],
    ['台風', 'たいふう', 'Topan'],
    ['風邪', 'かぜ', 'Flu / Pilek'],
    ['風景', 'ふうけい', 'Pemandangan'],
    ['洋風', 'ようふう', 'Gaya Barat'],
    ['和風', 'わふう', 'Gaya Jepang'],
    ['風呂', 'ふろ', 'Bak mandi'],
    ['風船', 'ふうせん', 'Balon'],
  ],

  光: [
    ['光', 'ひかり', 'Cahaya'],
    ['光る', 'ひかる', 'Bersinar'],
    ['日光', 'にっこう', 'Cahaya matahari'],
    ['観光', 'かんこう', 'Wisata'],
    ['光景', 'こうけい', 'Pemandangan'],
    ['太陽光', 'たいようこう', 'Cahaya matahari'],
    ['蛍光灯', 'けいこうとう', 'Lampu fluoresen'],
  ],

  米: [
    ['米', 'こめ', 'Beras'],
    ['白米', 'はくまい', 'Beras putih'],
    ['玄米', 'げんまい', 'Beras merah / Beras pecah kulit'],
    ['米国', 'べいこく', 'Amerika Serikat'],
    ['米飯', 'べいはん', 'Nasi'],
    ['新米', 'しんまい', 'Beras baru / Pemula'],
    ['米屋', 'こめや', 'Toko beras'],
  ],

  回: [
    ['回る', 'まわる', 'Berputar'],
    ['回す', 'まわす', 'Memutar'],
    ['一回', 'いっかい', 'Satu kali'],
    ['毎回', 'まいかい', 'Setiap kali'],
    ['今回', 'こんかい', 'Kali ini'],
    ['次回', 'じかい', 'Kali berikutnya'],
    ['回数', 'かいすう', 'Jumlah kali'],
    ['回答', 'かいとう', 'Jawaban / Tanggapan'],
  ],

  同: [
    ['同じ', 'おなじ', 'Sama'],
    ['同時', 'どうじ', 'Bersamaan'],
    ['同級生', 'どうきゅうせい', 'Teman sekelas'],
    ['同僚', 'どうりょう', 'Rekan kerja'],
    ['同意', 'どうい', 'Persetujuan'],
    ['共同', 'きょうどう', 'Bersama-sama'],
    ['同様', 'どうよう', 'Serupa / Sama'],
    ['同一', 'どういつ', 'Identik / Sama'],
  ],

  品: [
    ['品物', 'しなもの', 'Barang'],
    ['食品', 'しょくひん', 'Bahan makanan'],
    ['商品', 'しょうひん', 'Produk / Barang dagangan'],
    ['作品', 'さくひん', 'Karya'],
    ['品質', 'ひんしつ', 'Kualitas'],
    ['上品', 'じょうひん', 'Elegan / Anggun'],
    ['部品', 'ぶひん', 'Komponen'],
    ['新品', 'しんぴん', 'Barang baru'],
  ],

  池: [
    ['池', 'いけ', 'Kolam'],
    ['電池', 'でんち', 'Baterai'],
    ['池袋', 'いけぶくろ', 'Ikebukuro'],
    ['貯水池', 'ちょすいち', 'Waduk'],
    ['池の水', 'いけのみず', 'Air kolam'],
  ],

  地: [
    ['地', 'ち', 'Tanah / Tempat'],
    ['地図', 'ちず', 'Peta'],
    ['地下', 'ちか', 'Bawah tanah'],
    ['地下鉄', 'ちかてつ', 'Kereta bawah tanah'],
    ['土地', 'とち', 'Tanah / Lahan'],
    ['地震', 'じしん', 'Gempa bumi'],
    ['地元', 'じもと', 'Daerah asal'],
    ['地球', 'ちきゅう', 'Bumi'],
  ],

  区: [
    ['区', 'く', 'Distrik / Kecamatan'],
    ['区役所', 'くやくしょ', 'Kantor distrik'],
    ['地区', 'ちく', 'Wilayah / Kawasan'],
    ['区別', 'くべつ', 'Pembedaan'],
    ['区間', 'くかん', 'Rentang / Bagian'],
    ['区長', 'くちょう', 'Kepala distrik'],
  ],

  以: [
    ['以上', 'いじょう', 'Lebih dari / Sekian'],
    ['以下', 'いか', 'Kurang dari / Di bawah'],
    ['以前', 'いぜん', 'Sebelumnya'],
    ['以後', 'いご', 'Setelah ini'],
    ['以来', 'いらい', 'Sejak'],
    ['以外', 'いがい', 'Selain / Kecuali'],
    ['以内', 'いない', 'Dalam batas'],
    ['以降', 'いこう', 'Mulai dari / Setelah'],
  ],

  林: [
    ['林', 'はやし', 'Hutan kecil'],
    ['森林', 'しんりん', 'Hutan'],
    ['林業', 'りんぎょう', 'Kehutanan'],
    ['山林', 'さんりん', 'Hutan pegunungan'],
    ['林道', 'りんどう', 'Jalan hutan'],
    ['森林浴', 'しんりんよく', 'Terapi berjalan di hutan'],
  ],

  森: [
    ['森', 'もり', 'Hutan'],
    ['森林', 'しんりん', 'Hutan'],
    ['森の中', 'もりのなか', 'Di dalam hutan'],
    ['森林浴', 'しんりんよく', 'Terapi berjalan di hutan'],
    ['森番', 'もりばん', 'Penjaga hutan'],
  ],

  英: [
    ['英語', 'えいご', 'Bahasa Inggris'],
    ['英国', 'えいこく', 'Inggris'],
    ['英会話', 'えいかいわ', 'Percakapan bahasa Inggris'],
    ['英文', 'えいぶん', 'Tulisan bahasa Inggris'],
    ['英雄', 'えいゆう', 'Pahlawan'],
    ['英才', 'えいさい', 'Orang berbakat'],
    ['英和', 'えいわ', 'Inggris-Jepang'],
  ],
  朝: [
    ['朝', 'あさ', 'Pagi'],
    ['朝日', 'あさひ', 'Matahari pagi'],
    ['朝食', 'ちょうしょく', 'Sarapan'],
    ['毎朝', 'まいあさ', 'Setiap pagi'],
    ['朝刊', 'ちょうかん', 'Koran pagi'],
    ['早朝', 'そうちょう', 'Pagi-pagi sekali'],
    ['朝礼', 'ちょうれい', 'Apel pagi'],
  ],

  昼: [
    ['昼', 'ひる', 'Siang'],
    ['昼間', 'ひるま', 'Waktu siang'],
    ['昼食', 'ちゅうしょく', 'Makan siang'],
    ['昼休み', 'ひるやすみ', 'Istirahat siang'],
    ['昼寝', 'ひるね', 'Tidur siang'],
    ['昼前', 'ひるまえ', 'Sebelum tengah hari'],
    ['真昼', 'まひる', 'Tengah hari'],
  ],

  夜: [
    ['夜', 'よる', 'Malam'],
    ['今夜', 'こんや', 'Malam ini'],
    ['夜中', 'よなか', 'Tengah malam'],
    ['夜間', 'やかん', 'Waktu malam'],
    ['深夜', 'しんや', 'Larut malam'],
    ['夜行', 'やこう', 'Perjalanan malam'],
    ['徹夜', 'てつや', 'Tidak tidur semalaman'],
  ],

  晩: [
    ['晩', 'ばん', 'Malam'],
    ['今晩', 'こんばん', 'Malam ini'],
    ['毎晩', 'まいばん', 'Setiap malam'],
    ['晩ご飯', 'ばんごはん', 'Makan malam'],
    ['晩年', 'ばんねん', 'Masa tua / Tahun-tahun terakhir hidup'],
    ['一晩', 'ひとばん', 'Semalam / Satu malam'],
  ],

  肉: [
    ['肉', 'にく', 'Daging'],
    ['牛肉', 'ぎゅうにく', 'Daging sapi'],
    ['豚肉', 'ぶたにく', 'Daging babi'],
    ['鶏肉', 'とりにく', 'Daging ayam'],
    ['肉屋', 'にくや', 'Toko daging'],
    ['肉料理', 'にくりょうり', 'Masakan daging'],
    ['筋肉', 'きんにく', 'Otot'],
    ['肉体', 'にくたい', 'Tubuh fisik'],
  ],

  菜: [
    ['野菜', 'やさい', 'Sayuran'],
    ['菜食', 'さいしょく', 'Pola makan nabati'],
    ['白菜', 'はくさい', 'Sawi putih'],
    ['菜園', 'さいえん', 'Kebun sayur'],
    ['菜の花', 'なのはな', 'Bunga rapa'],
    ['山菜', 'さんさい', 'Sayuran liar'],
  ],

  注: [
    ['注意', 'ちゅうい', 'Perhatian / Berhati-hati'],
    ['注文', 'ちゅうもん', 'Pesanan'],
    ['注目', 'ちゅうもく', 'Perhatian'],
    ['注射', 'ちゅうしゃ', 'Suntikan'],
    ['注ぐ', 'そそぐ', 'Menuangkan'],
    ['注入', 'ちゅうにゅう', 'Pemasukan / Penyuntikan'],
    ['集中', 'しゅうちゅう', 'Konsentrasi'],
  ],

  意: [
    ['意味', 'いみ', 'Arti / Makna'],
    ['意見', 'いけん', 'Pendapat'],
    ['注意', 'ちゅうい', 'Perhatian'],
    ['用意', 'ようい', 'Persiapan'],
    ['意識', 'いしき', 'Kesadaran'],
    ['意外', 'いがい', 'Di luar dugaan'],
    ['意思', 'いし', 'Niat / Kehendak'],
    ['意欲', 'いよく', 'Motivasi / Kemauan'],
  ],

  味: [
    ['味', 'あじ', 'Rasa'],
    ['味わう', 'あじわう', 'Menikmati rasa'],
    ['意味', 'いみ', 'Arti / Makna'],
    ['趣味', 'しゅみ', 'Hobi'],
    ['興味', 'きょうみ', 'Ketertarikan'],
    ['味方', 'みかた', 'Pihak sendiri / Sekutu'],
    ['味付け', 'あじつけ', 'Pemberian bumbu'],
    ['無味', 'むみ', 'Tidak berasa'],
  ],

  府: [
    ['大阪府', 'おおさかふ', 'Prefektur Osaka'],
    ['京都府', 'きょうとふ', 'Prefektur Kyoto'],
    ['政府', 'せいふ', 'Pemerintah'],
    ['府庁', 'ふちょう', 'Kantor pemerintahan prefektur (fu)'],
    ['府民', 'ふみん', 'Penduduk prefektur (fu)'],
  ],

  県: [
    ['県', 'けん', 'Prefektur'],
    ['県庁', 'けんちょう', 'Kantor pemerintahan prefektur'],
    ['県民', 'けんみん', 'Penduduk prefektur'],
    ['県内', 'けんない', 'Di dalam prefektur'],
    ['県外', 'けんがい', 'Di luar prefektur'],
    ['県立', 'けんりつ', 'Milik pemerintah prefektur'],
  ],

  市: [
    ['市', 'し', 'Kota'],
    ['市役所', 'しやくしょ', 'Balai kota'],
    ['市長', 'しちょう', 'Wali kota'],
    ['市民', 'しみん', 'Warga kota'],
    ['市内', 'しない', 'Di dalam kota'],
    ['市外', 'しがい', 'Di luar kota'],
    ['都市', 'とし', 'Kota'],
  ],

  町: [
    ['町', 'まち', 'Kota kecil / Kawasan'],
    ['町中', 'まちなか', 'Di tengah kota'],
    ['町長', 'ちょうちょう', 'Kepala kota kecil'],
    ['町民', 'ちょうみん', 'Penduduk kota kecil'],
    ['町内', 'ちょうない', 'Di dalam wilayah kota kecil'],
    ['下町', 'したまち', 'Kawasan kota lama'],
  ],

  村: [
    ['村', 'むら', 'Desa'],
    ['村人', 'むらびと', 'Penduduk desa'],
    ['村長', 'そんちょう', 'Kepala desa'],
    ['村民', 'そんみん', 'Warga desa'],
    ['農村', 'のうそん', 'Desa pertanian'],
    ['山村', 'さんそん', 'Desa pegunungan'],
  ],

  色: [
    ['色', 'いろ', 'Warna'],
    ['色々', 'いろいろ', 'Bermacam-macam'],
    ['色紙', 'いろがみ', 'Kertas berwarna'],
    ['景色', 'けしき', 'Pemandangan'],
    ['特色', 'とくしょく', 'Ciri khas'],
    ['色彩', 'しきさい', 'Warna / Pewarnaan'],
    ['顔色', 'かおいろ', 'Warna wajah / Raut muka'],
  ],

  黒: [
    ['黒い', 'くろい', 'Hitam'],
    ['黒', 'くろ', 'Warna hitam'],
    ['黒板', 'こくばん', 'Papan tulis'],
    ['黒字', 'くろじ', 'Keuntungan / Surplus'],
    ['黒人', 'こくじん', 'Orang berkulit hitam'],
    ['真っ黒', 'まっくろ', 'Hitam pekat'],
    ['黒髪', 'くろかみ', 'Rambut hitam'],
  ],

  赤: [
    ['赤い', 'あかい', 'Merah'],
    ['赤', 'あか', 'Warna merah'],
    ['赤ちゃん', 'あかちゃん', 'Bayi'],
    ['赤字', 'あかじ', 'Kerugian / Defisit'],
    ['赤道', 'せきどう', 'Garis khatulistiwa'],
    ['赤信号', 'あかしんごう', 'Lampu merah'],
    ['真っ赤', 'まっか', 'Merah menyala'],
  ],

  青: [
    ['青い', 'あおい', 'Biru'],
    ['青', 'あお', 'Warna biru'],
    ['青空', 'あおぞら', 'Langit biru'],
    ['青年', 'せいねん', 'Pemuda'],
    ['青信号', 'あおしんごう', 'Lampu hijau'],
    ['青少年', 'せいしょうねん', 'Kaum muda'],
    ['真っ青', 'まっさお', 'Biru pucat'],
  ],

  黄: [
    ['黄色', 'きいろ', 'Warna kuning'],
    ['黄色い', 'きいろい', 'Berwarna kuning'],
    ['黄緑', 'きみどり', 'Hijau kekuningan'],
    ['黄金', 'おうごん', 'Emas'],
    ['黄砂', 'こうさ', 'Debu kuning'],
    ['黄身', 'きみ', 'Kuning telur'],
  ],

  茶: [
    ['お茶', 'おちゃ', 'Teh'],
    ['茶色', 'ちゃいろ', 'Warna cokelat'],
    ['茶道', 'さどう', 'Upacara minum teh'],
    ['茶碗', 'ちゃわん', 'Mangkuk nasi / Cangkir teh'],
    ['喫茶店', 'きっさてん', 'Kedai kopi'],
    ['茶室', 'ちゃしつ', 'Ruang upacara minum teh'],
    ['紅茶', 'こうちゃ', 'Teh hitam'],
  ],

  銀: [
    ['銀', 'ぎん', 'Perak'],
    ['銀行', 'ぎんこう', 'Bank'],
    ['銀色', 'ぎんいろ', 'Warna perak'],
    ['銀貨', 'ぎんか', 'Koin perak'],
    ['銀メダル', 'ぎんメダル', 'Medali perak'],
    ['水銀', 'すいぎん', 'Raksa / Merkuri'],
    ['銀河', 'ぎんが', 'Galaksi'],
  ],

  世: [
    ['世界', 'せかい', 'Dunia'],
    ['世の中', 'よのなか', 'Dunia / Masyarakat'],
    ['世話', 'せわ', 'Mengurus / Merawat'],
    ['世代', 'せだい', 'Generasi'],
    ['世紀', 'せいき', 'Abad'],
    ['社会', 'しゃかい', 'Masyarakat'],
    ['一生', 'いっしょう', 'Seumur hidup'],
  ],

  死: [
    ['死ぬ', 'しぬ', 'Meninggal'],
    ['死者', 'ししゃ', 'Orang yang meninggal'],
    ['死亡', 'しぼう', 'Kematian'],
    ['死体', 'したい', 'Mayat'],
    ['死後', 'しご', 'Setelah kematian'],
    ['必死', 'ひっし', 'Berjuang mati-matian'],
    ['生死', 'せいし', 'Hidup dan mati'],
  ],

  医: [
    ['医者', 'いしゃ', 'Dokter'],
    ['医師', 'いし', 'Dokter (formal)'],
    ['医学', 'いがく', 'Ilmu kedokteran'],
    ['医学部', 'いがくぶ', 'Fakultas kedokteran'],
    ['医療', 'いりょう', 'Pelayanan medis'],
    ['医院', 'いいん', 'Klinik'],
    ['歯医者', 'はいしゃ', 'Dokter gigi'],
  ],

  質: [
    ['質問', 'しつもん', 'Pertanyaan'],
    ['品質', 'ひんしつ', 'Kualitas'],
    ['性質', 'せいしつ', 'Sifat / Karakteristik'],
    ['体質', 'たいしつ', 'Konstitusi tubuh'],
    ['質屋', 'しちや', 'Pegadaian'],
    ['本質', 'ほんしつ', 'Hakikat'],
    ['質量', 'しつりょう', 'Massa'],
  ],

  鉄: [
    ['鉄', 'てつ', 'Besi'],
    ['鉄道', 'てつどう', 'Jalur kereta api'],
    ['地下鉄', 'ちかてつ', 'Kereta bawah tanah'],
    ['鉄道駅', 'てつどうえき', 'Stasiun kereta api'],
    ['鉄板', 'てっぱん', 'Lempengan besi'],
    ['鉄分', 'てつぶん', 'Kandungan zat besi'],
    ['鉄橋', 'てっきょう', 'Jembatan besi'],
  ],

  民: [
    ['国民', 'こくみん', 'Rakyat'],
    ['市民', 'しみん', 'Warga kota'],
    ['住民', 'じゅうみん', 'Penduduk'],
    ['民間', 'みんかん', 'Swasta'],
    ['民族', 'みんぞく', 'Suku bangsa'],
    ['民宿', 'みんしゅく', 'Penginapan milik warga'],
    ['民話', 'みんわ', 'Cerita rakyat'],
  ],

  用: [
    ['用事', 'ようじ', 'Urusan / Keperluan'],
    ['使用', 'しよう', 'Penggunaan'],
    ['利用', 'りよう', 'Pemanfaatan'],
    ['用意', 'ようい', 'Persiapan'],
    ['用紙', 'ようし', 'Kertas formulir'],
    ['用語', 'ようご', 'Istilah'],
    ['用途', 'ようと', 'Kegunaan'],
    ['日用品', 'にちようひん', 'Barang kebutuhan sehari-hari'],
  ],

  和: [
    ['日本語', 'にほんご', 'Bahasa Jepang'],
    ['平和', 'へいわ', 'Perdamaian'],
    ['和食', 'わしょく', 'Masakan Jepang'],
    ['和室', 'わしつ', 'Kamar bergaya Jepang'],
    ['和服', 'わふく', 'Pakaian tradisional Jepang'],
    ['和風', 'わふう', 'Gaya Jepang'],
    ['調和', 'ちょうわ', 'Harmoni / Keselarasan'],
    ['和室', 'わしつ', 'Ruangan bergaya Jepang'],
  ],

  旅: [
    ['旅行', 'りょこう', 'Perjalanan / Wisata'],
    ['旅', 'たび', 'Perjalanan'],
    ['旅館', 'りょかん', 'Penginapan tradisional Jepang'],
    ['旅人', 'たびびと', 'Pelancong'],
    ['旅費', 'りょひ', 'Biaya perjalanan'],
    ['旅先', 'たびさき', 'Tempat tujuan perjalanan'],
    ['海外旅行', 'かいがいりょこう', 'Wisata ke luar negeri'],
  ],

  鳥: [
    ['鳥', 'とり', 'Burung'],
    ['小鳥', 'ことり', 'Burung kecil'],
    ['焼き鳥', 'やきとり', 'Sate ayam Jepang'],
    ['鳥肉', 'とりにく', 'Daging ayam'],
    ['白鳥', 'はくちょう', 'Angsa'],
    ['野鳥', 'やちょう', 'Burung liar'],
    ['鳥居', 'とりい', 'Gerbang kuil Shinto'],
  ],

  体: [
    ['体', 'からだ', 'Tubuh'],
    ['体育', 'たいいく', 'Pendidikan jasmani'],
    ['体力', 'たいりょく', 'Kekuatan fisik'],
    ['体重', 'たいじゅう', 'Berat badan'],
    ['体温', 'たいおん', 'Suhu tubuh'],
    ['体験', 'たいけん', 'Pengalaman'],
    ['具体的', 'ぐたいてき', 'Konkret'],
    ['全体', 'ぜんたい', 'Keseluruhan'],
  ],

  酒: [
    ['酒', 'さけ', 'Minuman beralkohol'],
    ['お酒', 'おさけ', 'Minuman beralkohol'],
    ['日本酒', 'にほんしゅ', 'Sake Jepang'],
    ['酒屋', 'さかや', 'Toko minuman beralkohol'],
    ['酒飲み', 'さけのみ', 'Peminum alkohol'],
    ['飲酒', 'いんしゅ', 'Konsumsi alkohol'],
    ['酒場', 'さかば', 'Tempat minum'],
  ],

  漢: [
    ['漢字', 'かんじ', 'Kanji'],
    ['漢語', 'かんご', 'Kosakata Sino-Jepang'],
    ['漢字表', 'かんじひょう', 'Daftar kanji'],
    ['漢和辞典', 'かんわじてん', 'Kamus kanji-Jepang'],
    ['漢方', 'かんぽう', 'Pengobatan tradisional Tiongkok'],
    ['漢民族', 'かんみんぞく', 'Etnis Han'],
  ],

  病: [
    ['病気', 'びょうき', 'Penyakit'],
    ['病院', 'びょういん', 'Rumah sakit'],
    ['病人', 'びょうにん', 'Orang sakit'],
    ['病室', 'びょうしつ', 'Kamar pasien'],
    ['病名', 'びょうめい', 'Nama penyakit'],
    ['看病', 'かんびょう', 'Merawat orang sakit'],
    ['病気になる', 'びょうきになる', 'Jatuh sakit'],
  ],

  物: [
    ['物', 'もの', 'Benda / Barang'],
    ['食べ物', 'たべもの', 'Makanan'],
    ['飲み物', 'のみもの', 'Minuman'],
    ['買い物', 'かいもの', 'Belanja'],
    ['建物', 'たてもの', 'Bangunan'],
    ['動物', 'どうぶつ', 'Hewan'],
    ['荷物', 'にもつ', 'Barang bawaan'],
    ['忘れ物', 'わすれもの', 'Barang yang tertinggal'],
  ],

  紙: [
    ['紙', 'かみ', 'Kertas'],
    ['手紙', 'てがみ', 'Surat'],
    ['新聞紙', 'しんぶんし', 'Kertas koran'],
    ['用紙', 'ようし', 'Kertas formulir'],
    ['折り紙', 'おりがみ', 'Seni melipat kertas'],
    ['紙袋', 'かみぶくろ', 'Kantong kertas'],
    ['白紙', 'はくし', 'Kertas kosong'],
  ],

  海: [
    ['海', 'うみ', 'Laut'],
    ['海外', 'かいがい', 'Luar negeri'],
    ['海岸', 'かいがん', 'Pantai'],
    ['海水', 'かいすい', 'Air laut'],
    ['海水浴', 'かいすいよく', 'Berenang di laut'],
    ['海洋', 'かいよう', 'Samudra'],
    ['北海道', 'ほっかいどう', 'Hokkaido'],
    ['海辺', 'うみべ', 'Tepi laut'],
  ],
  頭: [
    ['頭', 'あたま', 'Kepala'],
    ['頭痛', 'ずつう', 'Sakit kepala'],
    ['頭文字', 'かしらもじ', 'Huruf awal'],
    ['先頭', 'せんとう', 'Barisan terdepan'],
    ['頭脳', 'ずのう', 'Otak / Kecerdasan'],
    ['頭金', 'あたまきん', 'Uang muka'],
    ['頭上', 'ずじょう', 'Di atas kepala'],
  ],

  顔: [
    ['顔', 'かお', 'Wajah'],
    ['顔色', 'かおいろ', 'Warna wajah / Raut muka'],
    ['笑顔', 'えがお', 'Wajah tersenyum'],
    ['洗顔', 'せんがん', 'Mencuci wajah'],
    ['顔写真', 'かおじゃしん', 'Foto wajah'],
    ['真顔', 'まがお', 'Wajah serius'],
    ['顔見知り', 'かおみしり', 'Orang yang dikenal wajahnya'],
  ],

  首: [
    ['首', 'くび', 'Leher'],
    ['首都', 'しゅと', 'Ibu kota'],
    ['首相', 'しゅしょう', 'Perdana menteri'],
    ['手首', 'てくび', 'Pergelangan tangan'],
    ['足首', 'あしくび', 'Pergelangan kaki'],
    ['首輪', 'くびわ', 'Kalung hewan'],
    ['首都圏', 'しゅとけん', 'Wilayah metropolitan ibu kota'],
  ],

  利: [
    ['便利', 'べんり', 'Praktis'],
    ['利用', 'りよう', 'Pemanfaatan'],
    ['利益', 'りえき', 'Keuntungan'],
    ['有利', 'ゆうり', 'Menguntungkan'],
    ['不利', 'ふり', 'Tidak menguntungkan'],
    ['利口', 'りこう', 'Pintar / Cerdas'],
    ['利点', 'りてん', 'Keunggulan'],
    ['利害', 'りがい', 'Untung dan rugi'],
  ],

  家: [
    ['家', 'いえ', 'Rumah'],
    ['家族', 'かぞく', 'Keluarga'],
    ['家事', 'かじ', 'Pekerjaan rumah tangga'],
    ['家賃', 'やちん', 'Uang sewa rumah'],
    ['家庭', 'かてい', 'Rumah tangga'],
    ['作家', 'さっか', 'Penulis'],
    ['専門家', 'せんもんか', 'Ahli'],
    ['家内', 'かない', 'Istri (ungkapan untuk istri sendiri)'],
  ],

  族: [
    ['家族', 'かぞく', 'Keluarga'],
    ['民族', 'みんぞく', 'Suku bangsa'],
    ['親族', 'しんぞく', 'Kerabat'],
    ['水族館', 'すいぞくかん', 'Akuarium'],
    ['家族旅行', 'かぞくりょこう', 'Wisata keluarga'],
    ['一族', 'いちぞく', 'Klan / Keluarga besar'],
  ],

  洋: [
    ['洋服', 'ようふく', 'Pakaian Barat'],
    ['洋食', 'ようしょく', 'Masakan Barat'],
    ['洋室', 'ようしつ', 'Kamar bergaya Barat'],
    ['洋風', 'ようふう', 'Gaya Barat'],
    ['西洋', 'せいよう', 'Dunia Barat'],
    ['東洋', 'とうよう', 'Dunia Timur'],
    ['海洋', 'かいよう', 'Samudra'],
    ['洋画', 'ようが', 'Film Barat / Lukisan Barat'],
  ],

  室: [
    ['教室', 'きょうしつ', 'Ruang kelas'],
    ['部屋', 'へや', 'Kamar'],
    ['寝室', 'しんしつ', 'Kamar tidur'],
    ['会議室', 'かいぎしつ', 'Ruang rapat'],
    ['研究室', 'けんきゅうしつ', 'Ruang penelitian'],
    ['事務室', 'じむしつ', 'Ruang administrasi'],
    ['和室', 'わしつ', 'Kamar bergaya Jepang'],
    ['洋室', 'ようしつ', 'Kamar bergaya Barat'],
  ],

  員: [
    ['会社員', 'かいしゃいん', 'Karyawan perusahaan'],
    ['店員', 'てんいん', 'Pegawai toko'],
    ['社員', 'しゃいん', 'Pegawai perusahaan'],
    ['駅員', 'えきいん', 'Petugas stasiun'],
    ['公務員', 'こうむいん', 'Pegawai negeri'],
    ['会員', 'かいいん', 'Anggota'],
    ['定員', 'ていいん', 'Kapasitas / Jumlah anggota'],
    ['全員', 'ぜんいん', 'Semua orang / Seluruh anggota'],
  ],

  界: [
    ['世界', 'せかい', 'Dunia'],
    ['世界中', 'せかいじゅう', 'Di seluruh dunia'],
    ['業界', 'ぎょうかい', 'Dunia industri'],
    ['社会', 'しゃかい', 'Masyarakat'],
    ['限界', 'げんかい', 'Batas'],
    ['境界', 'きょうかい', 'Batas wilayah'],
    ['政界', 'せいかい', 'Dunia politik'],
  ],

  親: [
    ['親', 'おや', 'Orang tua'],
    ['親切', 'しんせつ', 'Ramah / Baik hati'],
    ['親友', 'しんゆう', 'Sahabat dekat'],
    ['両親', 'りょうしん', 'Kedua orang tua'],
    ['親子', 'おやこ', 'Orang tua dan anak'],
    ['親戚', 'しんせき', 'Kerabat'],
    ['親しい', 'したしい', 'Akrab / Dekat'],
    ['親指', 'おやゆび', 'Ibu jari'],
  ],

  薬: [
    ['薬', 'くすり', 'Obat'],
    ['薬局', 'やっきょく', 'Apotek'],
    ['薬屋', 'くすりや', 'Toko obat'],
    ['薬品', 'やくひん', 'Produk farmasi / Bahan kimia'],
    ['薬剤師', 'やくざいし', 'Apoteker'],
    ['目薬', 'めぐすり', 'Obat tetes mata'],
    ['飲み薬', 'のみぐすり', 'Obat minum'],
    ['薬指', 'くすりゆび', 'Jari manis'],
  ],

  堂: [
    ['食堂', 'しょくどう', 'Kantin'],
    ['講堂', 'こうどう', 'Aula'],
    ['教会堂', 'きょうかいどう', 'Gedung gereja'],
    ['堂々', 'どうどう', 'Gagah / Megah'],
    ['本堂', 'ほんどう', 'Bangunan utama kuil'],
    ['お堂', 'おどう', 'Bangunan kuil kecil'],
  ],

  真: [
    ['本当', 'ほんとう', 'Benar / Sungguh'],
    ['写真', 'しゃしん', 'Foto'],
    ['真ん中', 'まんなか', 'Tepat di tengah'],
    ['真面目', 'まじめ', 'Serius / Rajin'],
    ['真夜中', 'まよなか', 'Tengah malam'],
    ['真夏', 'まなつ', 'Puncak musim panas'],
    ['真冬', 'まふゆ', 'Puncak musim dingin'],
    ['真実', 'しんじつ', 'Kebenaran'],
  ],

  曜: [
    ['曜日', 'ようび', 'Hari dalam minggu'],
    ['月曜日', 'げつようび', 'Hari Senin'],
    ['火曜日', 'かようび', 'Hari Selasa'],
    ['水曜日', 'すいようび', 'Hari Rabu'],
    ['木曜日', 'もくようび', 'Hari Kamis'],
    ['金曜日', 'きんようび', 'Hari Jumat'],
    ['土曜日', 'どようび', 'Hari Sabtu'],
    ['日曜日', 'にちようび', 'Hari Minggu'],
  ],

  特: [
    ['特別', 'とくべつ', 'Istimewa / Khusus'],
    ['特に', 'とくに', 'Terutama'],
    ['特急', 'とっきゅう', 'Kereta ekspres khusus'],
    ['特徴', 'とくちょう', 'Ciri khas'],
    ['特定', 'とくてい', 'Penentuan khusus'],
    ['特技', 'とくぎ', 'Keahlian khusus'],
    ['特売', 'とくばい', 'Penjualan khusus / Diskon'],
    ['特産品', 'とくさんひん', 'Produk khas daerah'],
  ],

  屋: [
    ['部屋', 'へや', 'Kamar'],
    ['本屋', 'ほんや', 'Toko buku'],
    ['肉屋', 'にくや', 'Toko daging'],
    ['魚屋', 'さかなや', 'Toko ikan'],
    ['八百屋', 'やおや', 'Toko sayuran'],
    ['屋上', 'おくじょう', 'Atap gedung'],
    ['屋根', 'やね', 'Atap rumah'],
    ['屋外', 'おくがい', 'Luar ruangan'],
  ],

  事: [
    ['仕事', 'しごと', 'Pekerjaan'],
    ['事務所', 'じむしょ', 'Kantor administrasi'],
    ['用事', 'ようじ', 'Urusan / Keperluan'],
    ['食事', 'しょくじ', 'Makan'],
    ['事故', 'じこ', 'Kecelakaan'],
    ['事件', 'じけん', 'Peristiwa / Kasus'],
    ['事実', 'じじつ', 'Fakta'],
    ['大事', 'だいじ', 'Penting'],
  ],

  運: [
    ['運ぶ', 'はこぶ', 'Mengangkut'],
    ['運転', 'うんてん', 'Mengemudi'],
    ['運動', 'うんどう', 'Olahraga'],
    ['運転手', 'うんてんしゅ', 'Sopir'],
    ['運動会', 'うんどうかい', 'Pesta olahraga sekolah'],
    ['運命', 'うんめい', 'Takdir'],
    ['幸運', 'こううん', 'Keberuntungan'],
    ['運営', 'うんえい', 'Pengelolaan / Operasional'],
  ],

  部: [
    ['部屋', 'へや', 'Kamar'],
    ['部長', 'ぶちょう', 'Kepala bagian'],
    ['部下', 'ぶか', 'Bawahan'],
    ['全部', 'ぜんぶ', 'Semuanya'],
    ['一部', 'いちぶ', 'Sebagian'],
    ['部分', 'ぶぶん', 'Bagian'],
    ['部品', 'ぶひん', 'Komponen'],
    ['部活動', 'ぶかつどう', 'Kegiatan ekstrakurikuler'],
  ],

  飯: [
    ['ご飯', 'ごはん', 'Nasi / Makan'],
    ['朝ご飯', 'あさごはん', 'Sarapan'],
    ['昼ご飯', 'ひるごはん', 'Makan siang'],
    ['晩ご飯', 'ばんごはん', 'Makan malam'],
    ['炊飯', 'すいはん', 'Memasak nasi'],
    ['飯店', 'はんてん', 'Restoran (khususnya gaya Tiongkok)'],
    ['赤飯', 'せきはん', 'Nasi ketan merah'],
  ],

  野: [
    ['野菜', 'やさい', 'Sayuran'],
    ['野球', 'やきゅう', 'Bisbol'],
    ['野原', 'のはら', 'Padang rumput'],
    ['野外', 'やがい', 'Luar ruangan'],
    ['野生', 'やせい', 'Liar'],
    ['野鳥', 'やちょう', 'Burung liar'],
    ['分野', 'ぶんや', 'Bidang'],
    ['野党', 'やとう', 'Partai oposisi'],
  ],

  度: [
    ['一度', 'いちど', 'Satu kali'],
    ['今度', 'こんど', 'Kali ini / Lain kali'],
    ['何度', 'なんど', 'Berapa kali / Berapa derajat'],
    ['温度', 'おんど', 'Suhu'],
    ['程度', 'ていど', 'Tingkat / Derajat'],
    ['速度', 'そくど', 'Kecepatan'],
    ['態度', 'たいど', 'Sikap'],
    ['制度', 'せいど', 'Sistem'],
  ],

  濯: [
    ['洗濯', 'せんたく', 'Mencuci pakaian'],
    ['洗濯機', 'せんたくき', 'Mesin cuci'],
    ['洗濯物', 'せんたくもの', 'Pakaian cucian'],
    ['洗濯屋', 'せんたくや', 'Tempat laundry'],
    ['洗濯場', 'せんたくば', 'Tempat mencuci'],
  ],

  究: [
    ['研究', 'けんきゅう', 'Penelitian'],
    ['研究者', 'けんきゅうしゃ', 'Peneliti'],
    ['研究室', 'けんきゅうしつ', 'Ruang penelitian'],
    ['研究所', 'けんきゅうじょ', 'Lembaga penelitian'],
    ['究明', 'きゅうめい', 'Penyelidikan hingga tuntas'],
    ['探究', 'たんきゅう', 'Penelusuran / Penelitian mendalam'],
  ],

  料: [
    ['料理', 'りょうり', 'Masakan / Memasak'],
    ['料金', 'りょうきん', 'Biaya / Tarif'],
    ['無料', 'むりょう', 'Gratis'],
    ['有料', 'ゆうりょう', 'Berbayar'],
    ['材料', 'ざいりょう', 'Bahan'],
    ['食料', 'しょくりょう', 'Bahan makanan'],
    ['資料', 'しりょう', 'Dokumen / Materi referensi'],
    ['授業料', 'じゅぎょうりょう', 'Biaya sekolah'],
  ],

  理: [
    ['料理', 'りょうり', 'Masakan / Memasak'],
    ['理由', 'りゆう', 'Alasan'],
    ['理解', 'りかい', 'Pemahaman'],
    ['理科', 'りか', 'Ilmu pengetahuan alam'],
    ['地理', 'ちり', 'Geografi'],
    ['心理', 'しんり', 'Psikologi'],
    ['整理', 'せいり', 'Penataan / Pengaturan'],
    ['管理', 'かんり', 'Pengelolaan'],
  ],

  館: [
    ['図書館', 'としょかん', 'Perpustakaan'],
    ['映画館', 'えいがかん', 'Bioskop'],
    ['体育館', 'たいいくかん', 'Gedung olahraga'],
    ['美術館', 'びじゅつかん', 'Museum seni'],
    ['博物館', 'はくぶつかん', 'Museum'],
    ['水族館', 'すいぞくかん', 'Akuarium'],
    ['旅館', 'りょかん', 'Penginapan tradisional Jepang'],
    ['大使館', 'たいしかん', 'Kedutaan besar'],
  ],

  場: [
    ['場所', 'ばしょ', 'Tempat'],
    ['場合', 'ばあい', 'Keadaan / Kasus'],
    ['工場', 'こうじょう', 'Pabrik'],
    ['市場', 'いちば', 'Pasar'],
    ['駐車場', 'ちゅうしゃじょう', 'Tempat parkir'],
    ['会場', 'かいじょう', 'Tempat acara'],
    ['売り場', 'うりば', 'Tempat penjualan'],
    ['現場', 'げんば', 'Lokasi kejadian / Lapangan kerja'],
  ],

  所: [
    ['場所', 'ばしょ', 'Tempat'],
    ['住所', 'じゅうしょ', 'Alamat'],
    ['近所', 'きんじょ', 'Lingkungan sekitar'],
    ['台所', 'だいどころ', 'Dapur'],
    ['事務所', 'じむしょ', 'Kantor'],
    ['研究所', 'けんきゅうじょ', 'Lembaga penelitian'],
    ['長所', 'ちょうしょ', 'Kelebihan'],
    ['短所', 'たんしょ', 'Kekurangan'],
  ],

  都: [
    ['東京都', 'とうきょうと', 'Metropolitan Tokyo'],
    ['京都', 'きょうと', 'Kyoto'],
    ['都市', 'とし', 'Kota'],
    ['都合', 'つごう', 'Keadaan / Kesempatan'],
    ['都会', 'とかい', 'Kota besar'],
    ['都内', 'とない', 'Di dalam wilayah metropolitan'],
    ['都心', 'としん', 'Pusat kota'],
    ['首都', 'しゅと', 'Ibu kota'],
  ],

  業: [
    ['授業', 'じゅぎょう', 'Pelajaran / Kegiatan belajar mengajar'],
    ['卒業', 'そつぎょう', 'Kelulusan'],
    ['工業', 'こうぎょう', 'Industri'],
    ['農業', 'のうぎょう', 'Pertanian'],
    ['作業', 'さぎょう', 'Pekerjaan'],
    ['営業', 'えいぎょう', 'Kegiatan bisnis / Penjualan'],
    ['職業', 'しょくぎょう', 'Profesi'],
    ['残業', 'ざんぎょう', 'Lembur'],
  ],

  題: [
    ['問題', 'もんだい', 'Masalah / Soal'],
    ['宿題', 'しゅくだい', 'Pekerjaan rumah'],
    ['題名', 'だいめい', 'Judul'],
    ['話題', 'わだい', 'Topik pembicaraan'],
    ['課題', 'かだい', 'Tugas / Tantangan'],
    ['出題', 'しゅつだい', 'Pemberian soal'],
    ['例題', 'れいだい', 'Contoh soal'],
    ['題目', 'だいもく', 'Tema / Judul'],
  ],

  院: [
    ['病院', 'びょういん', 'Rumah sakit'],
    ['大学院', 'だいがくいん', 'Pascasarjana'],
    ['入院', 'にゅういん', 'Rawat inap'],
    ['退院', 'たいいん', 'Keluar dari rumah sakit'],
    ['医院', 'いいん', 'Klinik'],
    ['院長', 'いんちょう', 'Direktur rumah sakit / Kepala klinik'],
    ['美容院', 'びよういん', 'Salon kecantikan'],
  ],

  験: [
    ['経験', 'けいけん', 'Pengalaman'],
    ['試験', 'しけん', 'Ujian'],
    ['実験', 'じっけん', 'Eksperimen'],
    ['体験', 'たいけん', 'Pengalaman langsung'],
    ['受験', 'じゅけん', 'Mengikuti ujian'],
    ['経験者', 'けいけんしゃ', 'Orang berpengalaman'],
    ['未経験', 'みけいけん', 'Belum berpengalaman'],
  ],

  計: [
    ['時計', 'とけい', 'Jam'],
    ['計画', 'けいかく', 'Rencana'],
    ['計算', 'けいさん', 'Perhitungan'],
    ['合計', 'ごうけい', 'Jumlah keseluruhan'],
    ['家計', 'かけい', 'Keuangan rumah tangga'],
    ['体温計', 'たいおんけい', 'Termometer'],
    ['温度計', 'おんどけい', 'Alat pengukur suhu'],
    ['統計', 'とうけい', 'Statistik'],
  ],

  画: [
    ['計画', 'けいかく', 'Rencana'],
    ['映画', 'えいが', 'Film'],
    ['漫画', 'まんが', 'Komik'],
    ['画面', 'がめん', 'Layar'],
    ['画家', 'がか', 'Pelukis'],
    ['映画館', 'えいがかん', 'Bioskop'],
    ['企画', 'きかく', 'Perencanaan / Proyek'],
    ['計画的', 'けいかくてき', 'Terencana'],
  ],

  映: [
    ['映画', 'えいが', 'Film'],
    ['映画館', 'えいがかん', 'Bioskop'],
    ['映る', 'うつる', 'Tercermin / Terlihat'],
    ['映す', 'うつす', 'Memantulkan / Menayangkan'],
    ['上映', 'じょうえい', 'Pemutaran film'],
    ['映像', 'えいぞう', 'Gambar bergerak / Visual'],
    ['反映', 'はんえい', 'Pencerminan / Refleksi'],
  ],

  奥: [
    ['奥', 'おく', 'Bagian dalam'],
    ['奥さん', 'おくさん', 'Istri (orang lain)'],
    ['奥様', 'おくさま', 'Istri (bentuk hormat)'],
    ['奥行き', 'おくゆき', 'Kedalaman'],
    ['奥歯', 'おくば', 'Gigi geraham'],
    ['奥の部屋', 'おくのへや', 'Kamar bagian dalam'],
  ],

  服: [
    ['服', 'ふく', 'Pakaian'],
    ['洋服', 'ようふく', 'Pakaian Barat'],
    ['和服', 'わふく', 'Pakaian tradisional Jepang'],
    ['制服', 'せいふく', 'Seragam'],
    ['私服', 'しふく', 'Pakaian pribadi'],
    ['服装', 'ふくそう', 'Penampilan berpakaian'],
    ['服用', 'ふくよう', 'Mengonsumsi obat'],
    ['衣服', 'いふく', 'Pakaian'],
  ],

  者: [
    ['医者', 'いしゃ', 'Dokter'],
    ['学者', 'がくしゃ', 'Sarjana / Ilmuwan'],
    ['会社員', 'かいしゃいん', 'Karyawan perusahaan'],
    ['若者', 'わかもの', 'Anak muda'],
    ['読者', 'どくしゃ', 'Pembaca'],
    ['作者', 'さくしゃ', 'Pengarang'],
    ['利用者', 'りようしゃ', 'Pengguna'],
    ['参加者', 'さんかしゃ', 'Peserta'],
  ],

  代: [
    ['時代', 'じだい', 'Zaman / Era'],
    ['代表', 'だいひょう', 'Perwakilan'],
    ['代わる', 'かわる', 'Berganti / Menggantikan'],
    ['代える', 'かえる', 'Menggantikan'],
    ['代金', 'だいきん', 'Harga / Pembayaran'],
    ['年代', 'ねんだい', 'Dekade / Periode tahun'],
    ['現代', 'げんだい', 'Zaman modern'],
    ['電気代', 'でんきだい', 'Biaya listrik'],
  ],

  番: [
    ['番号', 'ばんごう', 'Nomor'],
    ['一番', 'いちばん', 'Nomor satu / Paling'],
    ['番組', 'ばんぐみ', 'Program televisi'],
    ['交番', 'こうばん', 'Pos polisi'],
    ['順番', 'じゅんばん', 'Urutan / Giliran'],
    ['当番', 'とうばん', 'Petugas piket'],
    ['番号札', 'ばんごうふだ', 'Kartu nomor antrean'],
    ['番地', 'ばんち', 'Nomor alamat'],
  ],

  問: [
    ['問題', 'もんだい', 'Masalah / Soal'],
    ['質問', 'しつもん', 'Pertanyaan'],
    ['質問する', 'しつもんする', 'Bertanya'],
    ['問い合わせ', 'といあわせ', 'Pertanyaan / Permintaan informasi'],
    ['問う', 'とう', 'Menanyakan'],
    ['訪問', 'ほうもん', 'Kunjungan'],
    ['学問', 'がくもん', 'Ilmu pengetahuan'],
    ['問答', 'もんどう', 'Tanya jawab'],
  ],
  //N3
  申: [
    ['申す', 'もうす', 'Mengatakan (merendahkan diri)'],
    ['申し込む', 'もうしこむ', 'Mendaftar'],
    ['申し訳', 'もうしわけ', 'Alasan; permintaan maaf'],
    ['申請', 'しんせい', 'Permohonan resmi'],
    ['申告', 'しんこく', 'Melaporkan; deklarasi'],
  ],

  助: [
    ['助ける', 'たすける', 'Menolong'],
    ['助かる', 'たすかる', 'Tertolong; selamat'],
    ['助け合う', 'たすけあう', 'Saling menolong'],
    ['助手', 'じょしゅ', 'Asisten'],
    ['助言', 'じょげん', 'Nasihat'],
  ],

  折: [
    ['折る', 'おる', 'Melipat; mematahkan'],
    ['折れる', 'おれる', 'Terlipat; patah'],
    ['折り紙', 'おりがみ', 'Seni melipat kertas'],
    ['骨折', 'こっせつ', 'Patah tulang'],
    ['右折', 'うせつ', 'Belok kanan'],
    ['左折', 'させつ', 'Belok kiri'],
  ],

  伝: [
    ['伝える', 'つたえる', 'Menyampaikan'],
    ['伝わる', 'つたわる', 'Tersampaikan; tersebar'],
    ['伝言', 'でんごん', 'Pesan titipan'],
    ['伝統', 'でんとう', 'Tradisi'],
    ['手伝う', 'てつだう', 'Membantu'],
  ],

  付: [
    ['付ける', 'つける', 'Memasang; menempelkan'],
    ['付く', 'つく', 'Menempel; terpasang'],
    ['受付', 'うけつけ', 'Resepsionis; loket penerimaan'],
    ['付近', 'ふきん', 'Sekitar'],
    ['気を付ける', 'きをつける', 'Berhati-hati'],
  ],

  困: [
    ['困る', 'こまる', 'Kesulitan; kebingungan'],
    ['困った', 'こまった', 'Dalam kesulitan'],
    ['困難', 'こんなん', 'Kesulitan; kesukaran'],
    ['貧困', 'ひんこん', 'Kemiskinan'],
    ['困惑', 'こんわく', 'Kebingungan'],
  ],

  当: [
    ['当たる', 'あたる', 'Mengenai; terkena; menang undian'],
    ['当てる', 'あてる', 'Mengenakan; menebak dengan benar'],
    ['本当', 'ほんとう', 'Benar; sungguh'],
    ['当日', 'とうじつ', 'Hari yang dimaksud'],
    ['当然', 'とうぜん', 'Tentu saja; sewajarnya'],
    ['担当', 'たんとう', 'Penanggung jawab'],
  ],

  必: [
    ['必ず', 'かならず', 'Pasti; selalu'],
    ['必要', 'ひつよう', 'Perlu; diperlukan'],
    ['必死', 'ひっし', 'Berjuang mati-matian'],
    ['必ずしも', 'かならずしも', 'Tidak selalu (dalam kalimat negatif)'],
    ['必勝', 'ひっしょう', 'Pasti menang'],
  ],

  全: [
    ['全部', 'ぜんぶ', 'Semuanya'],
    ['全員', 'ぜんいん', 'Semua anggota'],
    ['全体', 'ぜんたい', 'Keseluruhan'],
    ['安全', 'あんぜん', 'Aman; keselamatan'],
    ['全国', 'ぜんこく', 'Seluruh negeri'],
    ['完全', 'かんぜん', 'Sempurna; lengkap'],
  ],

  号: [
    ['番号', 'ばんごう', 'Nomor'],
    ['電話番号', 'でんわばんごう', 'Nomor telepon'],
    ['信号', 'しんごう', 'Lampu lalu lintas; sinyal'],
    ['記号', 'きごう', 'Simbol; tanda'],
    ['番号札', 'ばんごうふだ', 'Tiket nomor'],
  ],

  向: [
    ['向く', 'むく', 'Menghadap; cocok'],
    ['向ける', 'むける', 'Menghadapkan; mengarahkan'],
    ['向かう', 'むかう', 'Menuju'],
    ['方向', 'ほうこう', 'Arah'],
    ['向こう', 'むこう', 'Seberang; di sana'],
    ['向上', 'こうじょう', 'Peningkatan'],
  ],

  信: [
    ['信じる', 'しんじる', 'Mempercayai'],
    ['信号', 'しんごう', 'Lampu lalu lintas; sinyal'],
    ['自信', 'じしん', 'Kepercayaan diri'],
    ['信用', 'しんよう', 'Kepercayaan'],
    ['通信', 'つうしん', 'Komunikasi'],
    ['信頼', 'しんらい', 'Kepercayaan; keyakinan'],
  ],

  守: [
    ['守る', 'まもる', 'Melindungi; menaati'],
    ['守り', 'まもり', 'Perlindungan'],
    ['留守', 'るす', 'Tidak berada di rumah'],
    ['守備', 'しゅび', 'Pertahanan'],
    ['保守', 'ほしゅ', 'Pemeliharaan; konservatif'],
  ],

  交: [
    ['交わる', 'まじわる', 'Berpotongan; bergaul'],
    ['交ぜる', 'まぜる', 'Mencampurkan'],
    ['交通', 'こうつう', 'Lalu lintas; transportasi'],
    ['交換', 'こうかん', 'Pertukaran'],
    ['交際', 'こうさい', 'Pergaulan; hubungan'],
    ['交差点', 'こうさてん', 'Persimpangan jalan'],
  ],

  換: [
    ['換える', 'かえる', 'Mengganti; menukarkan'],
    ['交換', 'こうかん', 'Pertukaran'],
    ['換気', 'かんき', 'Ventilasi; pergantian udara'],
    ['乗り換え', 'のりかえ', 'Pindah kendaraan'],
    ['変換', 'へんかん', 'Perubahan; konversi'],
  ],

  払: [
    ['払う', 'はらう', 'Membayar'],
    ['支払う', 'しはらう', 'Melakukan pembayaran'],
    ['払い戻す', 'はらいもどす', 'Mengembalikan uang'],
    ['払い込み', 'はらいこみ', 'Pembayaran; penyetoran'],
    ['前払い', 'まえばらい', 'Pembayaran di muka'],
  ],

  失: [
    ['失う', 'うしなう', 'Kehilangan'],
    ['失敗', 'しっぱい', 'Kegagalan'],
    ['失礼', 'しつれい', 'Tidak sopan; permisi'],
    ['失業', 'しつぎょう', 'Pengangguran'],
    ['失望', 'しつぼう', 'Kekecewaan'],
    ['紛失', 'ふんしつ', 'Kehilangan barang'],
  ],

  加: [
    ['加える', 'くわえる', 'Menambahkan'],
    ['加わる', 'くわわる', 'Bergabung; bertambah'],
    ['参加', 'さんか', 'Partisipasi'],
    ['追加', 'ついか', 'Tambahan'],
    ['加熱', 'かねつ', 'Pemanasan'],
    ['加工', 'かこう', 'Pengolahan'],
  ],

  込: [
    ['込む', 'こむ', 'Ramai; padat'],
    ['申し込む', 'もうしこむ', 'Mendaftar'],
    ['入り込む', 'はいりこむ', 'Masuk ke dalam'],
    ['思い込む', 'おもいこむ', 'Menganggap; berkeyakinan kuat'],
    ['飛び込む', 'とびこむ', 'Melompat masuk'],
    ['振り込む', 'ふりこむ', 'Mentransfer uang'],
  ],

  支: [
    ['支える', 'ささえる', 'Menopang; mendukung'],
    ['支払う', 'しはらう', 'Membayar'],
    ['支店', 'してん', 'Cabang perusahaan'],
    ['支度', 'したく', 'Persiapan'],
    ['支持', 'しじ', 'Dukungan'],
    ['支配', 'しはい', 'Penguasaan'],
  ],

  流: [
    ['流れる', 'ながれる', 'Mengalir'],
    ['流す', 'ながす', 'Mengalirkan'],
    ['流行', 'りゅうこう', 'Tren; mode'],
    ['交流', 'こうりゅう', 'Pertukaran; interaksi'],
    ['流石', 'さすが', 'Memang pantas; hebat'],
    ['一流', 'いちりゅう', 'Kelas satu'],
  ],

  留: [
    ['留まる', 'とどまる', 'Tetap; berhenti'],
    ['留める', 'とめる', 'Menahan; menghentikan'],
    ['留守', 'るす', 'Tidak berada di rumah'],
    ['留学', 'りゅうがく', 'Belajar di luar negeri'],
    ['留学生', 'りゅうがくせい', 'Pelajar asing'],
    ['保留', 'ほりゅう', 'Penundaan'],
  ],

  比: [
    ['比べる', 'くらべる', 'Membandingkan'],
    ['比べ', 'くらべ', 'Perbandingan'],
    ['比較', 'ひかく', 'Perbandingan'],
    ['比例', 'ひれい', 'Proporsi'],
    ['比率', 'ひりつ', 'Rasio'],
    ['対比', 'たいひ', 'Kontras; perbandingan'],
  ],

  捨: [
    ['捨てる', 'すてる', 'Membuang'],
    ['捨て場', 'すてば', 'Tempat pembuangan'],
    ['使い捨て', 'つかいすて', 'Sekali pakai'],
    ['見捨てる', 'みすてる', 'Menelantarkan'],
    ['捨て身', 'すてみ', 'Pengorbanan diri'],
  ],

  受: [
    ['受ける', 'うける', 'Menerima; mengikuti'],
    ['受かる', 'うかる', 'Lulus ujian'],
    ['受け取る', 'うけとる', 'Menerima'],
    ['受付', 'うけつけ', 'Resepsionis; loket'],
    ['受験', 'じゅけん', 'Mengikuti ujian'],
    ['受信', 'じゅしん', 'Penerimaan sinyal'],
  ],

  笑: [
    ['笑う', 'わらう', 'Tertawa; tersenyum'],
    ['笑い', 'わらい', 'Tawa'],
    ['笑顔', 'えがお', 'Wajah tersenyum'],
    ['微笑む', 'ほほえむ', 'Tersenyum lembut'],
    ['苦笑い', 'にがわらい', 'Senyum kecut'],
  ],

  召: [
    ['召す', 'めす', 'Makan/minum; memakai (bahasa hormat)'],
    ['召し上がる', 'めしあがる', 'Makan/minum (bahasa hormat)'],
    ['召し物', 'めしもの', 'Pakaian (bahasa hormat)'],
    ['召集', 'しょうしゅう', 'Pemanggilan; pengumpulan'],
    ['召喚', 'しょうかん', 'Pemanggilan resmi'],
  ],

  変: [
    ['変わる', 'かわる', 'Berubah'],
    ['変える', 'かえる', 'Mengubah'],
    ['変な', 'へんな', 'Aneh'],
    ['変化', 'へんか', 'Perubahan'],
    ['大変', 'たいへん', 'Berat; sulit; sangat'],
    ['変更', 'へんこう', 'Perubahan; revisi'],
  ],

  消: [
    ['消える', 'きえる', 'Menghilang; padam'],
    ['消す', 'けす', 'Mematikan; menghapus'],
    ['消しゴム', 'けしごむ', 'Penghapus'],
    ['消火', 'しょうか', 'Pemadaman api'],
    ['消費', 'しょうひ', 'Konsumsi'],
    ['取消', 'とりけし', 'Pembatalan'],
  ],

  並: [
    ['並ぶ', 'ならぶ', 'Berbaris; berjajar'],
    ['並べる', 'ならべる', 'Menyusun; menjejerkan'],
    ['並み', 'なみ', 'Biasa; setara'],
    ['並行', 'へいこう', 'Sejajar; berjalan bersamaan'],
    ['人並み', 'ひとなみ', 'Seperti orang pada umumnya'],
    ['並列', 'へいれつ', 'Paralel'],
  ],

  忘: [
    ['忘れる', 'わすれる', 'Lupa'],
    ['忘れ物', 'わすれもの', 'Barang yang tertinggal'],
    ['忘年会', 'ぼうねんかい', 'Pesta akhir tahun'],
    ['忘れられない', 'わすれられない', 'Tidak bisa dilupakan'],
    ['物忘れ', 'ものわすれ', 'Sering lupa'],
  ],

  伺: [
    ['伺う', 'うかがう', 'Berkunjung; bertanya (bahasa hormat)'],
    ['伺い', 'うかがい', 'Pertanyaan; kunjungan (bahasa hormat)'],
    ['伺います', 'うかがいます', 'Saya akan berkunjung/bertanya'],
    ['お伺いする', 'おうかがいする', 'Berkunjung atau bertanya dengan sopan'],
  ],

  直: [
    ['直す', 'なおす', 'Memperbaiki'],
    ['直る', 'なおる', 'Menjadi baik; diperbaiki'],
    ['直接', 'ちょくせつ', 'Langsung'],
    ['直前', 'ちょくぜん', 'Tepat sebelum'],
    ['正直', 'しょうじき', 'Jujur'],
    ['直線', 'ちょくせん', 'Garis lurus'],
  ],

  造: [
    ['造る', 'つくる', 'Membuat; membangun'],
    ['製造', 'せいぞう', 'Produksi; manufaktur'],
    ['構造', 'こうぞう', 'Struktur'],
    ['造船', 'ぞうせん', 'Pembuatan kapal'],
    ['人造', 'じんぞう', 'Buatan manusia'],
  ],

  存: [
    ['存在', 'そんざい', 'Keberadaan'],
    ['保存', 'ほぞん', 'Penyimpanan; pelestarian'],
    ['存じる', 'ぞんじる', 'Mengetahui (bahasa sopan)'],
    ['存じ上げる', 'ぞんじあげる', 'Mengetahui (bahasa merendahkan diri)'],
    ['生存', 'せいぞん', 'Kelangsungan hidup'],
  ],

  返: [
    ['返す', 'かえす', 'Mengembalikan'],
    ['返る', 'かえる', 'Kembali'],
    ['返事', 'へんじ', 'Jawaban; balasan'],
    ['返却', 'へんきゃく', 'Pengembalian'],
    ['繰り返す', 'くりかえす', 'Mengulangi'],
    ['返金', 'へんきん', 'Pengembalian uang'],
  ],

  要: [
    ['要る', 'いる', 'Memerlukan'],
    ['必要', 'ひつよう', 'Perlu; diperlukan'],
    ['重要', 'じゅうよう', 'Penting'],
    ['要点', 'ようてん', 'Pokok penting'],
    ['要するに', 'ようするに', 'Singkatnya'],
    ['要求', 'ようきゅう', 'Permintaan; tuntutan'],
  ],

  救: [
    ['救う', 'すくう', 'Menyelamatkan'],
    ['救い', 'すくい', 'Pertolongan; penyelamatan'],
    ['救急車', 'きゅうきゅうしゃ', 'Ambulans'],
    ['救助', 'きゅうじょ', 'Pertolongan; penyelamatan'],
    ['救出', 'きゅうしゅつ', 'Penyelamatan; evakuasi'],
  ],

  授: [
    ['授ける', 'さずける', 'Menganugerahkan; memberikan'],
    ['授かる', 'さずかる', 'Menerima anugerah'],
    ['授業', 'じゅぎょう', 'Pelajaran; kegiatan belajar mengajar'],
    ['教授', 'きょうじゅ', 'Profesor; pengajaran'],
    ['授業料', 'じゅぎょうりょう', 'Biaya sekolah/kuliah'],
  ],

  保: [
    ['保つ', 'たもつ', 'Mempertahankan; menjaga'],
    ['保険', 'ほけん', 'Asuransi'],
    ['保護', 'ほご', 'Perlindungan'],
    ['保存', 'ほぞん', 'Penyimpanan'],
    ['保証', 'ほしょう', 'Jaminan'],
    ['保育園', 'ほいくえん', 'Tempat penitipan anak'],
  ],

  整: [
    ['整える', 'ととのえる', 'Merapikan; menyiapkan'],
    ['整う', 'ととのう', 'Tertata; siap'],
    ['整理', 'せいり', 'Penataan; pengaturan'],
    ['整備', 'せいび', 'Pemeliharaan; perbaikan'],
    ['調整', 'ちょうせい', 'Penyesuaian'],
    ['整列', 'せいれつ', 'Berbaris dengan rapi'],
  ],

  移: [
    ['移る', 'うつる', 'Berpindah'],
    ['移す', 'うつす', 'Memindahkan'],
    ['移動', 'いどう', 'Perpindahan'],
    ['移転', 'いてん', 'Pemindahan lokasi'],
    ['移住', 'いじゅう', 'Pindah tempat tinggal'],
    ['移民', 'いみん', 'Imigran'],
  ],

  協: [
    ['協力', 'きょうりょく', 'Kerja sama'],
    ['協会', 'きょうかい', 'Asosiasi; perkumpulan'],
    ['協議', 'きょうぎ', 'Diskusi; musyawarah'],
    ['協定', 'きょうてい', 'Kesepakatan'],
    ['協調', 'きょうちょう', 'Koordinasi; kerja sama'],
  ],

  改: [
    ['改める', 'あらためる', 'Memperbaiki; mengubah'],
    ['改まる', 'あらたまる', 'Menjadi lebih baik; berubah'],
    ['改札', 'かいさつ', 'Gerbang pemeriksaan tiket'],
    ['改善', 'かいぜん', 'Perbaikan'],
    ['改正', 'かいせい', 'Revisi; perubahan aturan'],
    ['改めて', 'あらためて', 'Sekali lagi; kembali'],
  ],

  示: [
    ['示す', 'しめす', 'Menunjukkan'],
    ['示し', 'しめし', 'Petunjuk; contoh'],
    ['表示', 'ひょうじ', 'Tampilan; penunjukan'],
    ['指示', 'しじ', 'Instruksi; petunjuk'],
    ['展示', 'てんじ', 'Pameran'],
    ['示談', 'じだん', 'Penyelesaian secara damai'],
  ],

  戻: [
    ['戻る', 'もどる', 'Kembali'],
    ['戻す', 'もどす', 'Mengembalikan'],
    ['戻り道', 'もどりみち', 'Jalan pulang'],
    ['払い戻し', 'はらいもどし', 'Pengembalian uang'],
    ['元に戻る', 'もとにもどる', 'Kembali ke keadaan semula'],
  ],

  与: [
    ['与える', 'あたえる', 'Memberikan'],
    ['与えられる', 'あたえられる', 'Diberikan'],
    ['給与', 'きゅうよ', 'Gaji'],
    ['与党', 'よとう', 'Partai yang berkuasa'],
    ['貸与', 'たいよ', 'Peminjaman; pemberian hak pakai'],
  ],

  求: [
    ['求める', 'もとめる', 'Meminta; mencari'],
    ['求人', 'きゅうじん', 'Lowongan pekerjaan'],
    ['要求', 'ようきゅう', 'Permintaan; tuntutan'],
    ['求職', 'きゅうしょく', 'Pencarian pekerjaan'],
    ['追求', 'ついきゅう', 'Pengejaran; pencarian mendalam'],
    ['請求', 'せいきゅう', 'Tagihan; tuntutan'],
  ],

  投: [
    ['投げる', 'なげる', 'Melempar'],
    ['投げ出す', 'なげだす', 'Meninggalkan; menyerah'],
    ['投票', 'とうひょう', 'Pemungutan suara'],
    ['投資', 'とうし', 'Investasi'],
    ['投稿', 'とうこう', 'Mengirim tulisan; mengunggah'],
    ['投手', 'とうしゅ', 'Pelempar bola (bisbol)'],
  ],

  告: [
    ['告げる', 'つげる', 'Memberitahukan'],
    ['告白', 'こくはく', 'Pengakuan; menyatakan cinta'],
    ['広告', 'こうこく', 'Iklan'],
    ['報告', 'ほうこく', 'Laporan'],
    ['警告', 'けいこく', 'Peringatan'],
    ['告知', 'こくち', 'Pemberitahuan'],
  ],

  録: [
    ['録る', 'とる', 'Merekam'],
    ['録音', 'ろくおん', 'Rekaman suara'],
    ['録画', 'ろくが', 'Rekaman video'],
    ['記録', 'きろく', 'Catatan; rekaman'],
    ['登録', 'とうろく', 'Pendaftaran'],
    ['録画予約', 'ろくがよやく', 'Pemesanan rekaman video'],
  ],
  戦: [
    ['戦う', 'たたかう', 'Bertarung; berperang'],
    ['戦い', 'たたかい', 'Pertarungan; peperangan'],
    ['戦争', 'せんそう', 'Perang'],
    ['作戦', 'さくせん', 'Strategi'],
    ['挑戦', 'ちょうせん', 'Tantangan'],
  ],

  増: [
    ['増える', 'ふえる', 'Bertambah'],
    ['増やす', 'ふやす', 'Menambah'],
    ['増加', 'ぞうか', 'Peningkatan'],
    ['増大', 'ぞうだい', 'Pembesaran; peningkatan'],
    ['急増', 'きゅうぞう', 'Peningkatan drastis'],
  ],

  勝: [
    ['勝つ', 'かつ', 'Menang'],
    ['勝ち', 'かち', 'Kemenangan'],
    ['勝負', 'しょうぶ', 'Pertandingan; persaingan'],
    ['優勝', 'ゆうしょう', 'Juara pertama'],
    ['勝利', 'しょうり', 'Kemenangan'],
  ],

  負: [
    ['負ける', 'まける', 'Kalah'],
    ['負け', 'まけ', 'Kekalahan'],
    ['負う', 'おう', 'Memikul; menanggung'],
    ['勝負', 'しょうぶ', 'Pertandingan'],
    ['負担', 'ふたん', 'Beban; tanggungan'],
  ],

  祝: [
    ['祝う', 'いわう', 'Merayakan'],
    ['お祝い', 'おいわい', 'Perayaan; ucapan selamat'],
    ['祝日', 'しゅくじつ', 'Hari libur nasional'],
    ['祝福', 'しゅくふく', 'Berkah; doa restu'],
    ['祝賀', 'しゅくが', 'Perayaan'],
  ],

  決: [
    ['決める', 'きめる', 'Memutuskan'],
    ['決まる', 'きまる', 'Diputuskan'],
    ['決定', 'けってい', 'Keputusan'],
    ['決心', 'けっしん', 'Tekad'],
    ['解決', 'かいけつ', 'Penyelesaian masalah'],
    ['決して', 'けっして', 'Sama sekali tidak'],
  ],

  吹: [
    ['吹く', 'ふく', 'Bertiup; meniup'],
    ['吹き出す', 'ふきだす', 'Tertawa terbahak-bahak; menyembur'],
    ['吹き込む', 'ふきこむ', 'Meniupkan; merekam suara'],
    ['吹雪', 'ふぶき', 'Badai salju'],
    ['吹奏楽', 'すいそうがく', 'Musik alat tiup'],
  ],

  禁: [
    ['禁止', 'きんし', 'Larangan'],
    ['禁煙', 'きんえん', 'Dilarang merokok'],
    ['禁酒', 'きんしゅ', 'Larangan minum alkohol'],
    ['禁じる', 'きんじる', 'Melarang'],
    ['禁物', 'きんもつ', 'Hal yang harus dihindari'],
  ],

  防: [
    ['防ぐ', 'ふせぐ', 'Mencegah; menghalangi'],
    ['防止', 'ぼうし', 'Pencegahan'],
    ['予防', 'よぼう', 'Pencegahan'],
    ['消防車', 'しょうぼうしゃ', 'Mobil pemadam kebakaran'],
    ['防災', 'ぼうさい', 'Pencegahan bencana'],
    ['防犯', 'ぼうはん', 'Pencegahan kejahatan'],
  ],

  断: [
    ['断る', 'ことわる', 'Menolak'],
    ['断つ', 'たつ', 'Memutuskan; menghentikan'],
    ['断水', 'だんすい', 'Pemutusan pasokan air'],
    ['判断', 'はんだん', 'Penilaian; keputusan'],
    ['断定', 'だんてい', 'Kesimpulan pasti'],
    ['無断', 'むだん', 'Tanpa izin'],
  ],

  関: [
    ['関係', 'かんけい', 'Hubungan'],
    ['関心', 'かんしん', 'Ketertarikan; perhatian'],
    ['関する', 'かんする', 'Berkaitan dengan'],
    ['関東', 'かんとう', 'Wilayah Kanto'],
    ['関西', 'かんさい', 'Wilayah Kansai'],
    ['機関', 'きかん', 'Lembaga; organisasi'],
  ],

  飛: [
    ['飛ぶ', 'とぶ', 'Terbang; melompat'],
    ['飛ばす', 'とばす', 'Menerbangkan; melewati'],
    ['飛行機', 'ひこうき', 'Pesawat terbang'],
    ['飛行場', 'ひこうじょう', 'Bandara; lapangan terbang'],
    ['飛び出す', 'とびだす', 'Melompat keluar'],
    ['飛行', 'ひこう', 'Penerbangan'],
  ],

  過: [
    ['過ぎる', 'すぎる', 'Melewati; berlebihan'],
    ['過ごす', 'すごす', 'Menghabiskan waktu'],
    ['過去', 'かこ', 'Masa lalu'],
    ['過程', 'かてい', 'Proses'],
    ['通過', 'つうか', 'Melewati'],
    ['過失', 'かしつ', 'Kesalahan; kelalaian'],
  ],

  記: [
    ['記す', 'しるす', 'Mencatat; menuliskan'],
    ['記念', 'きねん', 'Peringatan; kenangan'],
    ['記入', 'きにゅう', 'Pengisian formulir'],
    ['記者', 'きしゃ', 'Wartawan'],
    ['日記', 'にっき', 'Buku harian'],
    ['記録', 'きろく', 'Catatan; rekaman'],
  ],

  確: [
    ['確か', 'たしか', 'Benar; pasti; kalau tidak salah'],
    ['確かめる', 'たしかめる', 'Memastikan'],
    ['確実', 'かくじつ', 'Pasti; dapat diandalkan'],
    ['確認', 'かくにん', 'Konfirmasi'],
    ['正確', 'せいかく', 'Akurat'],
    ['確率', 'かくりつ', 'Probabilitas'],
  ],

  認: [
    ['認める', 'みとめる', 'Mengakui; menyetujui'],
    ['認められる', 'みとめられる', 'Diakui'],
    ['確認', 'かくにん', 'Konfirmasi'],
    ['認識', 'にんしき', 'Pemahaman; pengenalan'],
    ['承認', 'しょうにん', 'Persetujuan'],
  ],

  駐: [
    ['駐車', 'ちゅうしゃ', 'Parkir'],
    ['駐車場', 'ちゅうしゃじょう', 'Tempat parkir'],
    ['駐車禁止', 'ちゅうしゃきんし', 'Dilarang parkir'],
    ['駐在', 'ちゅうざい', 'Bertugas di suatu tempat'],
    ['駐日', 'ちゅうにち', 'Bertugas di Jepang'],
  ],

  満: [
    ['満ちる', 'みちる', 'Penuh'],
    ['満たす', 'みたす', 'Memenuhi'],
    ['満足', 'まんぞく', 'Puas'],
    ['満員', 'まんいん', 'Penuh penumpang'],
    ['満点', 'まんてん', 'Nilai sempurna'],
    ['不満', 'ふまん', 'Ketidakpuasan'],
  ],

  停: [
    ['止まる', 'とまる', 'Berhenti'],
    ['停止', 'ていし', 'Penghentian'],
    ['停車', 'ていしゃ', 'Berhenti (kendaraan)'],
    ['停電', 'ていでん', 'Listrik padam'],
    ['停留所', 'ていりゅうじょ', 'Halte'],
  ],

  案: [
    ['案', 'あん', 'Usulan; ide'],
    ['案内', 'あんない', 'Panduan; informasi'],
    ['案内所', 'あんないじょ', 'Pusat informasi'],
    ['提案', 'ていあん', 'Usulan'],
    ['答案', 'とうあん', 'Lembar jawaban'],
    ['案外', 'あんがい', 'Di luar dugaan'],
  ],

  備: [
    ['備える', 'そなえる', 'Mempersiapkan'],
    ['備わる', 'そなわる', 'Dilengkapi; tersedia'],
    ['準備', 'じゅんび', 'Persiapan'],
    ['設備', 'せつび', 'Fasilitas; perlengkapan'],
    ['備品', 'びひん', 'Peralatan inventaris'],
    ['予備', 'よび', 'Cadangan'],
  ],

  遊: [
    ['遊ぶ', 'あそぶ', 'Bermain'],
    ['遊び', 'あそび', 'Permainan'],
    ['遊園地', 'ゆうえんち', 'Taman hiburan'],
    ['遊び場', 'あそびば', 'Tempat bermain'],
    ['遊覧', 'ゆうらん', 'Wisata keliling'],
  ],

  凍: [
    ['凍る', 'こおる', 'Membeku'],
    ['凍らせる', 'こおらせる', 'Membekukan'],
    ['冷凍', 'れいとう', 'Pembekuan'],
    ['凍結', 'とうけつ', 'Pembekuan'],
    ['凍傷', 'とうしょう', 'Radang dingin'],
  ],

  混: [
    ['混ぜる', 'まぜる', 'Mencampurkan'],
    ['混ざる', 'まざる', 'Tercampur'],
    ['混む', 'こむ', 'Ramai; padat'],
    ['混雑', 'こんざつ', 'Keramaian; kepadatan'],
    ['混乱', 'こんらん', 'Kekacauan'],
    ['混合', 'こんごう', 'Campuran'],
  ],

  焼: [
    ['焼く', 'やく', 'Membakar; memanggang'],
    ['焼ける', 'やける', 'Terbakar; matang'],
    ['日焼け', 'ひやけ', 'Kulit terbakar matahari'],
    ['焼肉', 'やきにく', 'Daging panggang'],
    ['焼き鳥', 'やきとり', 'Sate ayam Jepang'],
    ['火傷', 'やけど', 'Luka bakar'],
  ],

  渡: [
    ['渡る', 'わたる', 'Menyeberang'],
    ['渡す', 'わたす', 'Menyerahkan'],
    ['渡し', 'わたし', 'Penyerahan'],
    ['渡航', 'とこう', 'Perjalanan ke luar negeri'],
    ['引き渡す', 'ひきわたす', 'Menyerahkan'],
  ],

  減: [
    ['減る', 'へる', 'Berkurang'],
    ['減らす', 'へらす', 'Mengurangi'],
    ['減少', 'げんしょう', 'Penurunan'],
    ['減点', 'げんてん', 'Pengurangan nilai'],
    ['削減', 'さくげん', 'Pengurangan; pemangkasan'],
  ],

  育: [
    ['育つ', 'そだつ', 'Tumbuh; berkembang'],
    ['育てる', 'そだてる', 'Membesarkan; mendidik'],
    ['育児', 'いくじ', 'Pengasuhan anak'],
    ['教育', 'きょういく', 'Pendidikan'],
    ['体育', 'たいいく', 'Pendidikan jasmani'],
    ['育成', 'いくせい', 'Pembinaan; pengembangan'],
  ],

  在: [
    ['在る', 'ある', 'Ada; berada'],
    ['存在', 'そんざい', 'Keberadaan'],
    ['現在', 'げんざい', 'Saat ini'],
    ['在学', 'ざいがく', 'Terdaftar sebagai siswa'],
    ['在宅', 'ざいたく', 'Berada di rumah'],
    ['在留', 'ざいりゅう', 'Tinggal di suatu negara'],
  ],

  想: [
    ['想像', 'そうぞう', 'Imajinasi'],
    ['感想', 'かんそう', 'Kesan; pendapat'],
    ['予想', 'よそう', 'Prediksi'],
    ['理想', 'りそう', 'Ideal'],
    ['想像する', 'そうぞうする', 'Membayangkan'],
    ['回想', 'かいそう', 'Kenangan; mengingat kembali'],
  ],

  治: [
    ['治る', 'なおる', 'Sembuh'],
    ['治す', 'なおす', 'Menyembuhkan'],
    ['治める', 'おさめる', 'Memerintah; mengendalikan'],
    ['政治', 'せいじ', 'Politik'],
    ['治療', 'ちりょう', 'Pengobatan'],
    ['自治', 'じち', 'Pemerintahan sendiri; otonomi'],
  ],

  参: [
    ['参加', 'さんか', 'Partisipasi'],
    ['参加する', 'さんかする', 'Berpartisipasi'],
    ['参考', 'さんこう', 'Referensi'],
    ['参る', 'まいる', 'Pergi/datang (bahasa merendahkan diri)'],
    ['参拝', 'さんぱい', 'Berdoa di kuil'],
    ['参議院', 'さんぎいん', 'Dewan Penasihat Jepang'],
  ],

  泊: [
    ['泊まる', 'とまる', 'Menginap'],
    ['泊める', 'とめる', 'Mengizinkan menginap'],
    ['一泊', 'いっぱく', 'Menginap satu malam'],
    ['宿泊', 'しゅくはく', 'Penginapan'],
    ['連泊', 'れんぱく', 'Menginap beberapa malam berturut-turut'],
  ],

  解: [
    ['解く', 'とく', 'Memecahkan; menguraikan'],
    ['解ける', 'とける', 'Terpecahkan; terurai'],
    ['解答', 'かいとう', 'Jawaban'],
    ['理解', 'りかい', 'Pemahaman'],
    ['解決', 'かいけつ', 'Penyelesaian'],
    ['説明', 'せつめい', 'Penjelasan'],
  ],

  替: [
    ['替える', 'かえる', 'Mengganti'],
    ['替わる', 'かわる', 'Digantikan'],
    ['着替える', 'きがえる', 'Berganti pakaian'],
    ['両替', 'りょうがえ', 'Penukaran uang'],
    ['入れ替える', 'いれかえる', 'Menukar; mengganti posisi'],
  ],

  泣: [
    ['泣く', 'なく', 'Menangis'],
    ['泣き声', 'なきごえ', 'Suara tangisan'],
    ['泣き虫', 'なきむし', 'Orang yang mudah menangis'],
    ['泣き出す', 'なきだす', 'Mulai menangis'],
    ['号泣', 'ごうきゅう', 'Menangis dengan keras'],
  ],

  呼: [
    ['呼ぶ', 'よぶ', 'Memanggil'],
    ['呼び方', 'よびかた', 'Cara memanggil'],
    ['呼び出す', 'よびだす', 'Memanggil keluar'],
    ['呼吸', 'こきゅう', 'Pernapasan'],
    ['呼びかける', 'よびかける', 'Menyerukan; mengajak'],
  ],

  吸: [
    ['吸う', 'すう', 'Mengisap; menghirup'],
    ['吸い込む', 'すいこむ', 'Menghirup ke dalam'],
    ['吸収', 'きゅうしゅう', 'Penyerapan'],
    ['吸血', 'きゅうけつ', 'Mengisap darah'],
    ['呼吸', 'こきゅう', 'Pernapasan'],
  ],

  成: [
    ['成る', 'なる', 'Menjadi'],
    ['成長', 'せいちょう', 'Pertumbuhan'],
    ['成功', 'せいこう', 'Keberhasilan'],
    ['完成', 'かんせい', 'Penyelesaian; kesempurnaan'],
    ['成人', 'せいじん', 'Orang dewasa'],
    ['成績', 'せいせき', 'Nilai; prestasi'],
  ],

  結: [
    ['結ぶ', 'むすぶ', 'Mengikat; menghubungkan'],
    ['結び', 'むすび', 'Ikatan'],
    ['結果', 'けっか', 'Hasil'],
    ['結婚', 'けっこん', 'Pernikahan'],
    ['結論', 'けつろん', 'Kesimpulan'],
    ['結局', 'けっきょく', 'Akhirnya'],
  ],

  婚: [
    ['結婚', 'けっこん', 'Pernikahan'],
    ['婚約', 'こんやく', 'Pertunangan'],
    ['新婚', 'しんこん', 'Pengantin baru'],
    ['離婚', 'りこん', 'Perceraian'],
    ['結婚式', 'けっこんしき', 'Upacara pernikahan'],
  ],

  済: [
    ['済む', 'すむ', 'Selesai; beres'],
    ['済ませる', 'すませる', 'Menyelesaikan'],
    ['経済', 'けいざい', 'Ekonomi'],
    ['返済', 'へんさい', 'Pelunasan'],
    ['使用済み', 'しようずみ', 'Sudah digunakan'],
    ['済み', 'ずみ', 'Sudah selesai'],
  ],

  感: [
    ['感じる', 'かんじる', 'Merasakan'],
    ['感動', 'かんどう', 'Tersentuh; terharu'],
    ['感情', 'かんじょう', 'Perasaan; emosi'],
    ['感覚', 'かんかく', 'Indra; sensasi'],
    ['感謝', 'かんしゃ', 'Rasa terima kasih'],
    ['安心感', 'あんしんかん', 'Perasaan tenang'],
  ],

  辞: [
    ['辞める', 'やめる', 'Berhenti; mengundurkan diri'],
    ['辞書', 'じしょ', 'Kamus'],
    ['辞典', 'じてん', 'Kamus; ensiklopedia'],
    ['辞職', 'じしょく', 'Pengunduran diri'],
    ['辞退', 'じたい', 'Menolak; mengundurkan diri'],
    ['お辞儀', 'おじぎ', 'Membungkuk sebagai salam'],
  ],

  登: [
    ['登る', 'のぼる', 'Mendaki; naik'],
    ['登山', 'とざん', 'Pendakian gunung'],
    ['登場', 'とうじょう', 'Kemunculan'],
    ['登録', 'とうろく', 'Pendaftaran'],
    ['登校', 'とうこう', 'Pergi ke sekolah'],
    ['登場人物', 'とうじょうじんぶつ', 'Tokoh dalam cerita'],
  ],

  疲: [
    ['疲れる', 'つかれる', 'Lelah'],
    ['疲れ', 'つかれ', 'Kelelahan'],
    ['疲労', 'ひろう', 'Kelelahan fisik'],
    ['疲れ果てる', 'つかれはてる', 'Sangat kelelahan'],
    ['疲れ目', 'つかれめ', 'Mata lelah'],
  ],

  続: [
    ['続く', 'つづく', 'Berlanjut'],
    ['続ける', 'つづける', 'Melanjutkan'],
    ['続き', 'つづき', 'Kelanjutan'],
    ['続行', 'ぞっこう', 'Melanjutkan pelaksanaan'],
    ['手続き', 'てつづき', 'Prosedur'],
    ['連続', 'れんぞく', 'Berturut-turut'],
  ],

  割: [
    ['割る', 'わる', 'Memecahkan; membagi'],
    ['割れる', 'われる', 'Pecah'],
    ['割合', 'わりあい', 'Perbandingan; persentase'],
    ['割引', 'わりびき', 'Diskon'],
    ['役割', 'やくわり', 'Peran; tugas'],
    ['割り勘', 'わりかん', 'Membayar patungan'],
  ],

  残: [
    ['残る', 'のこる', 'Tersisa'],
    ['残す', 'のこす', 'Menyisakan'],
    ['残念', 'ざんねん', 'Sayang sekali; mengecewakan'],
    ['残業', 'ざんぎょう', 'Lembur'],
    ['残り', 'のこり', 'Sisa'],
    ['残高', 'ざんだか', 'Saldo'],
  ],

  望: [
    ['望む', 'のぞむ', 'Mengharapkan'],
    ['望み', 'のぞみ', 'Harapan'],
    ['希望', 'きぼう', 'Harapan; keinginan'],
    ['希望者', 'きぼうしゃ', 'Orang yang berminat'],
    ['絶望', 'ぜつぼう', 'Keputusasaan'],
    ['望遠鏡', 'ぼうえんきょう', 'Teleskop'],
  ],

  連: [
    ['連れる', 'つれる', 'Membawa seseorang'],
    ['連れて行く', 'つれていく', 'Mengajak pergi'],
    ['連絡', 'れんらく', 'Kontak; komunikasi'],
    ['連続', 'れんぞく', 'Berturut-turut'],
    ['連休', 'れんきゅう', 'Libur beberapa hari berturut-turut'],
    ['関連', 'かんれん', 'Keterkaitan'],
  ],

  配: [
    ['配る', 'くばる', 'Membagikan'],
    ['配達', 'はいたつ', 'Pengantaran'],
    ['心配', 'しんぱい', 'Kekhawatiran'],
    ['配達員', 'はいたついん', 'Kurir'],
    ['配分', 'はいぶん', 'Pembagian'],
    ['配偶者', 'はいぐうしゃ', 'Pasangan hidup'],
  ],

  接: [
    ['接する', 'せっする', 'Berhubungan; bersentuhan'],
    ['接客', 'せっきゃく', 'Pelayanan pelanggan'],
    ['接続', 'せつぞく', 'Koneksi; penyambungan'],
    ['直接', 'ちょくせつ', 'Langsung'],
    ['面接', 'めんせつ', 'Wawancara'],
    ['接近', 'せっきん', 'Mendekat'],
  ],

  調: [
    ['調べる', 'しらべる', 'Memeriksa; mencari tahu'],
    ['調子', 'ちょうし', 'Kondisi; keadaan'],
    ['調査', 'ちょうさ', 'Penyelidikan; survei'],
    ['調整', 'ちょうせい', 'Penyesuaian'],
    ['強調', 'きょうちょう', 'Penekanan'],
    ['順調', 'じゅんちょう', 'Berjalan lancar'],
  ],

  募: [
    ['募集', 'ぼしゅう', 'Perekrutan; penerimaan'],
    ['応募', 'おうぼ', 'Pendaftaran; melamar'],
    ['応募者', 'おうぼしゃ', 'Pelamar'],
    ['募金', 'ぼきん', 'Pengumpulan dana'],
    ['募る', 'つのる', 'Semakin kuat; mengumpulkan'],
  ],

  預: [
    ['預ける', 'あずける', 'Menitipkan'],
    ['預かる', 'あずかる', 'Menerima titipan'],
    ['預金', 'よきん', 'Tabungan; deposito'],
    ['預金通帳', 'よきんつうちょう', 'Buku tabungan'],
    ['預かり所', 'あずかりじょ', 'Tempat penitipan'],
  ],

  選: [
    ['選ぶ', 'えらぶ', 'Memilih'],
    ['選び', 'えらび', 'Pilihan'],
    ['選手', 'せんしゅ', 'Atlet; pemain'],
    ['選挙', 'せんきょ', 'Pemilihan umum'],
    ['選択', 'せんたく', 'Pilihan'],
    ['選考', 'せんこう', 'Seleksi'],
  ],

  量: [
    ['量', 'りょう', 'Jumlah; takaran'],
    ['量る', 'はかる', 'Mengukur berat/volume'],
    ['大量', 'たいりょう', 'Jumlah besar'],
    ['数量', 'すうりょう', 'Kuantitas'],
    ['量産', 'りょうさん', 'Produksi massal'],
    ['測定量', 'そくていりょう', 'Besaran yang diukur'],
  ],

  練: [
    ['練る', 'ねる', 'Menguleni; menyusun dengan matang'],
    ['練習', 'れんしゅう', 'Latihan'],
    ['訓練', 'くんれん', 'Pelatihan'],
    ['熟練', 'じゅくれん', 'Kemahiran'],
    ['練習問題', 'れんしゅうもんだい', 'Soal latihan'],
  ],

  輸: [
    ['輸出', 'ゆしゅつ', 'Ekspor'],
    ['輸入', 'ゆにゅう', 'Impor'],
    ['輸送', 'ゆそう', 'Transportasi; pengangkutan'],
    ['輸血', 'ゆけつ', 'Transfusi darah'],
    ['運輸', 'うんゆ', 'Transportasi'],
  ],

  鳴: [
    ['鳴く', 'なく', 'Bersuara (hewan)'],
    ['鳴る', 'なる', 'Berbunyi'],
    ['鳴らす', 'ならす', 'Membunyikan'],
    ['鳴き声', 'なきごえ', 'Suara hewan'],
    ['雷鳴', 'らいめい', 'Suara guntur'],
  ],

  違: [
    ['違う', 'ちがう', 'Berbeda; salah'],
    ['違い', 'ちがい', 'Perbedaan'],
    ['間違える', 'まちがえる', 'Melakukan kesalahan'],
    ['間違い', 'まちがい', 'Kesalahan'],
    ['違反', 'いはん', 'Pelanggaran'],
    ['相違', 'そうい', 'Perbedaan'],
  ],

  願: [
    ['願う', 'ねがう', 'Memohon; berharap'],
    ['願い', 'ねがい', 'Permohonan; harapan'],
    ['お願い', 'おねがい', 'Permintaan; tolong'],
    ['願書', 'がんしょ', 'Formulir permohonan'],
    ['志願', 'しがん', 'Mengajukan diri'],
  ],

  観: [
    ['観る', 'みる', 'Menonton; mengamati'],
    ['観光', 'かんこう', 'Pariwisata'],
    ['観客', 'かんきゃく', 'Penonton'],
    ['観察', 'かんさつ', 'Pengamatan'],
    ['観念', 'かんねん', 'Gagasan; konsep'],
    ['外観', 'がいかん', 'Penampilan luar'],
  ],

  勤: [
    ['勤める', 'つとめる', 'Bekerja di suatu tempat'],
    ['勤め先', 'つとめさき', 'Tempat kerja'],
    ['勤務', 'きんむ', 'Dinas; pekerjaan'],
    ['通勤', 'つうきん', 'Pergi bekerja'],
    ['勤勉', 'きんべん', 'Rajin'],
    ['出勤', 'しゅっきん', 'Masuk kerja'],
  ],

  難: [
    ['難しい', 'むずかしい', 'Sulit'],
    ['難しい問題', 'むずかしいもんだい', 'Masalah yang sulit'],
    ['困難', 'こんなん', 'Kesulitan'],
    ['難問', 'なんもん', 'Soal sulit'],
    ['難しい言葉', 'むずかしいことば', 'Kata yang sulit'],
    ['非難', 'ひなん', 'Kritik; kecaman'],
  ],

  危: [
    ['危ない', 'あぶない', 'Berbahaya'],
    ['危険', 'きけん', 'Bahaya'],
    ['危険性', 'きけんせい', 'Tingkat risiko'],
    ['危機', 'きき', 'Krisis'],
    ['危うい', 'あやうい', 'Rawan; berbahaya'],
  ],

  忙: [
    ['忙しい', 'いそがしい', 'Sibuk'],
    ['忙しさ', 'いそがしさ', 'Kesibukan'],
    ['多忙', 'たぼう', 'Sangat sibuk'],
    ['忙殺', 'ぼうさつ', 'Terlalu sibuk hingga kewalahan'],
  ],

  美: [
    ['美しい', 'うつくしい', 'Indah; cantik'],
    ['美人', 'びじん', 'Orang cantik'],
    ['美術', 'びじゅつ', 'Seni rupa'],
    ['美術館', 'びじゅつかん', 'Museum seni'],
    ['美容', 'びよう', 'Kecantikan'],
    ['美味しい', 'おいしい', 'Enak; lezat'],
  ],

  汚: [
    ['汚い', 'きたない', 'Kotor'],
    ['汚れる', 'よごれる', 'Menjadi kotor'],
    ['汚す', 'よごす', 'Mengotori'],
    ['汚れ', 'よごれ', 'Kotoran'],
    ['汚染', 'おせん', 'Pencemaran'],
    ['汚職', 'おしょく', 'Korupsi'],
  ],

  若: [
    ['若い', 'わかい', 'Muda'],
    ['若者', 'わかもの', 'Anak muda'],
    ['若さ', 'わかさ', 'Kemudaan'],
    ['若々しい', 'わかわかしい', 'Tampak muda'],
    ['若干', 'じゃっかん', 'Sedikit; beberapa'],
  ],

  苦: [
    ['苦しい', 'くるしい', 'Menderita; sesak'],
    ['苦しむ', 'くるしむ', 'Menderita'],
    ['苦い', 'にがい', 'Pahit'],
    ['苦手', 'にがて', 'Tidak pandai; tidak suka'],
    ['苦労', 'くろう', 'Kesulitan; perjuangan'],
    ['苦情', 'くじょう', 'Keluhan'],
  ],

  快: [
    ['快い', 'こころよい', 'Menyenangkan; nyaman'],
    ['快適', 'かいてき', 'Nyaman'],
    ['快速', 'かいそく', 'Kereta cepat'],
    ['快晴', 'かいせい', 'Cuaca cerah'],
    ['不快', 'ふかい', 'Tidak nyaman'],
  ],

  易: [
    ['易しい', 'やさしい', 'Mudah'],
    ['容易', 'ようい', 'Mudah; sederhana'],
    ['簡易', 'かんい', 'Sederhana'],
    ['貿易', 'ぼうえき', 'Perdagangan internasional'],
    ['易者', 'えきしゃ', 'Peramal'],
  ],

  優: [
    ['優しい', 'やさしい', 'Baik hati; lembut'],
    ['優れる', 'すぐれる', 'Unggul; hebat'],
    ['優秀', 'ゆうしゅう', 'Berprestasi; unggul'],
    ['優勝', 'ゆうしょう', 'Juara pertama'],
    ['女優', 'じょゆう', 'Aktris'],
    ['優先', 'ゆうせん', 'Prioritas'],
  ],

  険: [
    ['危険', 'きけん', 'Bahaya'],
    ['険しい', 'けわしい', 'Terjal; curam'],
    ['保険', 'ほけん', 'Asuransi'],
    ['険悪', 'けんあく', 'Tidak bersahabat; buruk'],
    ['冒険', 'ぼうけん', 'Petualangan'],
  ],

  冷: [
    ['冷たい', 'つめたい', 'Dingin (benda/sentuhan)'],
    ['冷える', 'ひえる', 'Menjadi dingin'],
    ['冷やす', 'ひやす', 'Mendinginkan'],
    ['冷める', 'さめる', 'Menjadi dingin'],
    ['冷蔵庫', 'れいぞうこ', 'Kulkas'],
    ['冷静', 'れいせい', 'Tenang; berkepala dingin'],
  ],

  温: [
    ['温かい', 'あたたかい', 'Hangat'],
    ['温める', 'あたためる', 'Menghangatkan'],
    ['温まる', 'あたたまる', 'Menjadi hangat'],
    ['温度', 'おんど', 'Suhu'],
    ['温泉', 'おんせん', 'Pemandian air panas'],
    ['体温', 'たいおん', 'Suhu tubuh'],
  ],

  細: [
    ['細い', 'ほそい', 'Tipis; kecil'],
    ['細かい', 'こまかい', 'Kecil-kecil; terperinci'],
    ['細かく', 'こまかく', 'Secara terperinci'],
    ['細長い', 'ほそながい', 'Panjang dan tipis'],
    ['詳細', 'しょうさい', 'Detail; perincian'],
    ['細胞', 'さいぼう', 'Sel'],
  ],

  厚: [
    ['厚い', 'あつい', 'Tebal'],
    ['厚さ', 'あつさ', 'Ketebalan'],
    ['厚着', 'あつぎ', 'Memakai pakaian tebal'],
    ['厚生', 'こうせい', 'Kesejahteraan'],
    ['厚手', 'あつで', 'Berbahan tebal'],
    ['厚かましい', 'あつかましい', 'Tidak tahu malu'],
  ],

  眠: [
    ['眠る', 'ねむる', 'Tidur'],
    ['眠い', 'ねむい', 'Mengantuk'],
    ['眠り', 'ねむり', 'Tidur'],
    ['睡眠', 'すいみん', 'Tidur'],
    ['不眠', 'ふみん', 'Insomnia; sulit tidur'],
  ],

  濃: [
    ['濃い', 'こい', 'Pekat; kental'],
    ['濃くする', 'こくする', 'Memekatkan'],
    ['濃度', 'のうど', 'Konsentrasi; kadar'],
    ['濃厚', 'のうこう', 'Kental; pekat'],
    ['濃紺', 'のうこん', 'Biru tua'],
  ],

  薄: [
    ['薄い', 'うすい', 'Tipis; encer; pucat'],
    ['薄める', 'うすめる', 'Mengencerkan'],
    ['薄まる', 'うすまる', 'Menjadi encer'],
    ['薄暗い', 'うすぐらい', 'Agak gelap'],
    ['薄着', 'うすぎ', 'Pakaian tipis'],
    ['薄味', 'うすあじ', 'Rasa yang ringan'],
  ],

  痛: [
    ['痛い', 'いたい', 'Sakit; nyeri'],
    ['痛む', 'いたむ', 'Terasa sakit'],
    ['痛み', 'いたみ', 'Rasa sakit'],
    ['頭痛', 'ずつう', 'Sakit kepala'],
    ['腹痛', 'ふくつう', 'Sakit perut'],
    ['痛感', 'つうかん', 'Merasakan dengan kuat'],
  ],

  内: [
    ['内', 'うち', 'Bagian dalam'],
    ['内側', 'うちがわ', 'Sisi dalam'],
    ['以内', 'いない', 'Dalam batas'],
    ['国内', 'こくない', 'Dalam negeri'],
    ['内容', 'ないよう', 'Isi; konten'],
    ['案内', 'あんない', 'Panduan; informasi'],
  ],

  速: [
    ['速い', 'はやい', 'Cepat'],
    ['速さ', 'はやさ', 'Kecepatan'],
    ['速める', 'はやめる', 'Mempercepat'],
    ['速度', 'そくど', 'Kecepatan'],
    ['高速', 'こうそく', 'Kecepatan tinggi'],
    ['早速', 'さっそく', 'Segera; langsung'],
  ],

  各: [
    ['各', 'かく', 'Masing-masing'],
    ['各自', 'かくじ', 'Masing-masing orang'],
    ['各地', 'かくち', 'Berbagai daerah'],
    ['各国', 'かっこく', 'Berbagai negara'],
    ['各駅', 'かくえき', 'Setiap stasiun'],
  ],

  次: [
    ['次', 'つぎ', 'Berikutnya'],
    ['次ぐ', 'つぐ', 'Mengikuti; berada setelah'],
    ['次回', 'じかい', 'Kesempatan berikutnya'],
    ['次第', 'しだい', 'Tergantung; segera setelah'],
    ['目次', 'もくじ', 'Daftar isi'],
    ['次々', 'つぎつぎ', 'Berturut-turut'],
  ],

  石: [
    ['石', 'いし', 'Batu'],
    ['石油', 'せきゆ', 'Minyak bumi'],
    ['石鹸', 'せっけん', 'Sabun'],
    ['宝石', 'ほうせき', 'Batu permata'],
    ['石炭', 'せきたん', 'Batu bara'],
    ['石段', 'いしだん', 'Tangga batu'],
  ],

  夫: [
    ['夫', 'おっと', 'Suami'],
    ['夫婦', 'ふうふ', 'Pasangan suami istri'],
    ['夫妻', 'ふさい', 'Suami dan istri'],
    ['夫人', 'ふじん', 'Nyonya; istri'],
    ['工夫', 'くふう', 'Ide; akal; kreativitas'],
  ],

  葉: [
    ['葉', 'は', 'Daun'],
    ['葉書', 'はがき', 'Kartu pos'],
    ['言葉', 'ことば', 'Kata; bahasa'],
    ['葉っぱ', 'はっぱ', 'Daun'],
    ['落ち葉', 'おちば', 'Daun yang berguguran'],
    ['紅葉', 'こうよう', 'Daun musim gugur'],
  ],

  化: [
    ['化ける', 'ばける', 'Berubah bentuk; menyamar'],
    ['化学', 'かがく', 'Kimia'],
    ['文化', 'ぶんか', 'Budaya'],
    ['変化', 'へんか', 'Perubahan'],
    ['国際化', 'こくさいか', 'Internasionalisasi'],
    ['消化', 'しょうか', 'Pencernaan'],
  ],

  反: [
    ['反対', 'はんたい', 'Berlawanan; menentang'],
    ['反対する', 'はんたいする', 'Menentang'],
    ['反省', 'はんせい', 'Introspeksi'],
    ['反応', 'はんのう', 'Reaksi'],
    ['違反', 'いはん', 'Pelanggaran'],
    ['反射', 'はんしゃ', 'Pantulan'],
  ],

  亡: [
    ['亡くなる', 'なくなる', 'Meninggal dunia'],
    ['亡くす', 'なくす', 'Kehilangan (orang)'],
    ['死亡', 'しぼう', 'Kematian'],
    ['亡命', 'ぼうめい', 'Pengasingan; suaka politik'],
    ['亡者', 'もうじゃ', 'Arwah; orang yang meninggal'],
  ],

  欠: [
    ['欠ける', 'かける', 'Kurang; pecah sebagian'],
    ['欠く', 'かく', 'Kekurangan'],
    ['欠席', 'けっせき', 'Tidak hadir'],
    ['欠点', 'けってん', 'Kekurangan; kelemahan'],
    ['欠陥', 'けっかん', 'Cacat; kerusakan'],
    ['不足', 'ふそく', 'Kekurangan'],
  ],

  皿: [
    ['皿', 'さら', 'Piring'],
    ['小皿', 'こざら', 'Piring kecil'],
    ['大皿', 'おおざら', 'Piring besar'],
    ['灰皿', 'はいざら', 'Asbak'],
    ['皿洗い', 'さらあらい', 'Mencuci piring'],
  ],

  血: [
    ['血', 'ち', 'Darah'],
    ['血液', 'けつえき', 'Darah'],
    ['血圧', 'けつあつ', 'Tekanan darah'],
    ['出血', 'しゅっけつ', 'Pendarahan'],
    ['血管', 'けっかん', 'Pembuluh darah'],
    ['血液型', 'けつえきがた', 'Golongan darah'],
  ],

  寺: [
    ['寺', 'てら', 'Kuil Buddha'],
    ['お寺', 'おてら', 'Kuil Buddha'],
    ['寺院', 'じいん', 'Kuil Buddha'],
    ['寺社', 'じしゃ', 'Kuil dan tempat suci'],
    ['寺子屋', 'てらこや', 'Sekolah rakyat zaman Edo'],
  ],

  未: [
    ['未だ', 'まだ', 'Belum'],
    ['未来', 'みらい', 'Masa depan'],
    ['未定', 'みてい', 'Belum ditentukan'],
    ['未満', 'みまん', 'Kurang dari'],
    ['未成年', 'みせいねん', 'Belum dewasa'],
    ['未使用', 'みしよう', 'Belum digunakan'],
  ],

  末: [
    ['末', 'すえ', 'Akhir; ujung'],
    ['週末', 'しゅうまつ', 'Akhir pekan'],
    ['月末', 'げつまつ', 'Akhir bulan'],
    ['年末', 'ねんまつ', 'Akhir tahun'],
    ['末っ子', 'すえっこ', 'Anak bungsu'],
    ['末日', 'まつじつ', 'Hari terakhir'],
  ],

  由: [
    ['理由', 'りゆう', 'Alasan'],
    ['自由', 'じゆう', 'Kebebasan'],
    ['由来', 'ゆらい', 'Asal-usul'],
    ['経由', 'けいゆ', 'Melalui'],
    ['不自由', 'ふじゆう', 'Tidak bebas; keterbatasan'],
  ],

  非: [
    ['非常', 'ひじょう', 'Darurat; luar biasa'],
    ['非常口', 'ひじょうぐち', 'Pintu darurat'],
    ['非常に', 'ひじょうに', 'Sangat'],
    ['非常識', 'ひじょうしき', 'Tidak masuk akal; tidak tahu aturan'],
    ['非難', 'ひなん', 'Kecaman'],
    ['非公式', 'ひこうしき', 'Tidak resmi'],
  ],

  神: [
    ['神', 'かみ', 'Dewa; Tuhan'],
    ['神社', 'じんじゃ', 'Kuil Shinto'],
    ['神様', 'かみさま', 'Dewa; Tuhan'],
    ['神話', 'しんわ', 'Mitologi'],
    ['精神', 'せいしん', 'Mental; jiwa'],
    ['神経', 'しんけい', 'Saraf'],
  ],

  定: [
    ['決定', 'けってい', 'Keputusan'],
    ['予定', 'よてい', 'Rencana; jadwal'],
    ['定期', 'ていき', 'Berkala; rutin'],
    ['定休日', 'ていきゅうび', 'Hari libur tetap'],
    ['安定', 'あんてい', 'Stabil'],
    ['定める', 'さだめる', 'Menentukan'],
  ],

  港: [
    ['港', 'みなと', 'Pelabuhan'],
    ['空港', 'くうこう', 'Bandara'],
    ['港町', 'みなとまち', 'Kota pelabuhan'],
    ['港湾', 'こうわん', 'Pelabuhan'],
    ['入港', 'にゅうこう', 'Masuk pelabuhan'],
  ],

  形: [
    ['形', 'かたち', 'Bentuk'],
    ['形作る', 'かたちづくる', 'Membentuk'],
    ['人形', 'にんぎょう', 'Boneka'],
    ['形式', 'けいしき', 'Format; bentuk'],
    ['地形', 'ちけい', 'Bentuk permukaan bumi'],
    ['形容詞', 'けいようし', 'Kata sifat'],
  ],

  彼: [
    ['彼', 'かれ', 'Dia (laki-laki); pacar laki-laki'],
    ['彼女', 'かのじょ', 'Dia (perempuan); pacar perempuan'],
    ['彼ら', 'かれら', 'Mereka (laki-laki)'],
    ['彼氏', 'かれし', 'Pacar laki-laki'],
    ['彼方', 'かなた', 'Di kejauhan'],
  ],

  昔: [
    ['昔', 'むかし', 'Dahulu; zaman dahulu'],
    ['昔話', 'むかしばなし', 'Cerita rakyat'],
    ['昔から', 'むかしから', 'Sejak dahulu'],
    ['大昔', 'おおむかし', 'Zaman dahulu kala'],
    ['昔々', 'むかしむかし', 'Pada zaman dahulu kala'],
  ],

  活: [
    ['活きる', 'いきる', 'Hidup; bermanfaat'],
    ['生活', 'せいかつ', 'Kehidupan sehari-hari'],
    ['活動', 'かつどう', 'Kegiatan; aktivitas'],
    ['活用', 'かつよう', 'Pemanfaatan; konjugasi'],
    ['活発', 'かっぱつ', 'Aktif'],
    ['活気', 'かっき', 'Semangat; gairah'],
  ],

  位: [
    ['位', 'くらい', 'Tingkat; kira-kira'],
    ['位置', 'いち', 'Posisi; letak'],
    ['順位', 'じゅんい', 'Peringkat'],
    ['一位', 'いちい', 'Peringkat pertama'],
    ['単位', 'たんい', 'Satuan; kredit'],
    ['地位', 'ちい', 'Kedudukan; jabatan'],
  ],

  表: [
    ['表', 'おもて', 'Bagian depan; permukaan'],
    ['表す', 'あらわす', 'Menyatakan; mengungkapkan'],
    ['表れる', 'あらわれる', 'Terlihat; muncul'],
    ['表情', 'ひょうじょう', 'Ekspresi wajah'],
    ['発表', 'はっぴょう', 'Presentasi; pengumuman'],
    ['表面', 'ひょうめん', 'Permukaan'],
  ],

  才: [
    ['才能', 'さいのう', 'Bakat'],
    ['天才', 'てんさい', 'Jenius'],
    ['才能がある', 'さいのうがある', 'Memiliki bakat'],
    ['十才', 'じゅっさい', 'Sepuluh tahun'],
    ['何才', 'なんさい', 'Berapa umur'],
  ],

  雪: [
    ['雪', 'ゆき', 'Salju'],
    ['雪が降る', 'ゆきがふる', 'Salju turun'],
    ['大雪', 'おおゆき', 'Salju lebat'],
    ['雪国', 'ゆきぐに', 'Negeri bersalju'],
    ['雪だるま', 'ゆきだるま', 'Manusia salju'],
    ['新雪', 'しんせつ', 'Salju baru'],
  ],

  平: [
    ['平ら', 'たいら', 'Datar'],
    ['平日', 'へいじつ', 'Hari kerja'],
    ['平和', 'へいわ', 'Perdamaian'],
    ['平気', 'へいき', 'Tidak masalah; tenang'],
    ['平均', 'へいきん', 'Rata-rata'],
    ['平等', 'びょうどう', 'Kesetaraan'],
  ],

  供: [
    ['子供', 'こども', 'Anak-anak'],
    ['供える', 'そなえる', 'Mempersembahkan'],
    ['提供', 'ていきょう', 'Penyediaan'],
    ['供給', 'きょうきゅう', 'Pasokan'],
    ['供に', 'ともに', 'Bersama-sama'],
    ['供養', 'くよう', 'Ritual penghormatan kepada orang meninggal'],
  ],

  可: [
    ['可能', 'かのう', 'Mungkin; memungkinkan'],
    ['不可能', 'ふかのう', 'Tidak mungkin'],
    ['許可', 'きょか', 'Izin'],
    ['可愛い', 'かわいい', 'Lucu; imut'],
    ['可決', 'かけつ', 'Persetujuan; pengesahan'],
    ['可能性', 'かのうせい', 'Kemungkinan'],
  ],

  因: [
    ['原因', 'げんいん', 'Penyebab'],
    ['原因となる', 'げんいんとなる', 'Menjadi penyebab'],
    ['要因', 'よういん', 'Faktor penyebab'],
    ['因果', 'いんが', 'Sebab-akibat'],
    ['原因不明', 'げんいんふめい', 'Penyebab tidak diketahui'],
  ],

  王: [
    ['王', 'おう', 'Raja'],
    ['王様', 'おうさま', 'Raja'],
    ['王国', 'おうこく', 'Kerajaan'],
    ['王子', 'おうじ', 'Pangeran'],
    ['女王', 'じょおう', 'Ratu'],
    ['王様ゲーム', 'おうさまゲーム', 'Permainan raja'],
  ],

  様: [
    ['様', 'さま', 'Tuan/nyonya (sapaan hormat)'],
    ['様子', 'ようす', 'Keadaan; situasi'],
    ['様々', 'さまざま', 'Berbagai macam'],
    ['同様', 'どうよう', 'Sama; serupa'],
    ['神様', 'かみさま', 'Dewa; Tuhan'],
    ['お客様', 'おきゃくさま', 'Pelanggan; tamu'],
  ],

  骨: [
    ['骨', 'ほね', 'Tulang'],
    ['骨折', 'こっせつ', 'Patah tulang'],
    ['骨格', 'こっかく', 'Kerangka'],
    ['骨組み', 'ほねぐみ', 'Kerangka; struktur'],
    ['背骨', 'せぼね', 'Tulang belakang'],
    ['骨董品', 'こっとうひん', 'Barang antik'],
  ],

  氷: [
    ['氷', 'こおり', 'Es'],
    ['氷水', 'こおりみず', 'Air es'],
    ['氷山', 'ひょうざん', 'Gunung es'],
    ['氷点', 'ひょうてん', 'Titik beku'],
    ['氷河', 'ひょうが', 'Gletser'],
    ['製氷', 'せいひょう', 'Pembuatan es'],
  ],

  法: [
    ['方法', 'ほうほう', 'Cara; metode'],
    ['法律', 'ほうりつ', 'Hukum'],
    ['文法', 'ぶんぽう', 'Tata bahasa'],
    ['作法', 'さほう', 'Tata krama'],
    ['法則', 'ほうそく', 'Hukum; aturan'],
    ['使用法', 'しようほう', 'Cara penggunaan'],
  ],

  局: [
    ['局', 'きょく', 'Kantor; bagian'],
    ['郵便局', 'ゆうびんきょく', 'Kantor pos'],
    ['薬局', 'やっきょく', 'Apotek'],
    ['放送局', 'ほうそうきょく', 'Stasiun penyiaran'],
    ['局長', 'きょくちょう', 'Kepala bagian'],
    ['結局', 'けっきょく', 'Akhirnya'],
  ],

  役: [
    ['役', 'やく', 'Peran; tugas'],
    ['役に立つ', 'やくにたつ', 'Bermanfaat'],
    ['役割', 'やくわり', 'Peran; fungsi'],
    ['役所', 'やくしょ', 'Kantor pemerintahan'],
    ['役員', 'やくいん', 'Pejabat; pengurus'],
    ['主役', 'しゅやく', 'Pemeran utama'],
  ],

  予: [
    ['予定', 'よてい', 'Rencana; jadwal'],
    ['予約', 'よやく', 'Reservasi'],
    ['予習', 'よしゅう', 'Belajar sebelum pelajaran'],
    ['予報', 'よほう', 'Ramalan; prakiraan'],
    ['予想', 'よそう', 'Prediksi'],
    ['予算', 'よさん', 'Anggaran'],
  ],

  油: [
    ['油', 'あぶら', 'Minyak'],
    ['油絵', 'あぶらえ', 'Lukisan cat minyak'],
    ['石油', 'せきゆ', 'Minyak bumi'],
    ['油断', 'ゆだん', 'Lengah; kurang waspada'],
    ['油料理', 'あぶらりょうり', 'Masakan berminyak'],
    ['給油', 'きゅうゆ', 'Pengisian bahan bakar'],
  ],

  汗: [
    ['汗', 'あせ', 'Keringat'],
    ['汗をかく', 'あせをかく', 'Berkeringat'],
    ['汗だく', 'あせだく', 'Bermandikan keringat'],
    ['冷や汗', 'ひやあせ', 'Keringat dingin'],
    ['汗水', 'あせみず', 'Keringat dan air mata'],
  ],

  倍: [
    ['倍', 'ばい', 'Kali lipat'],
    ['二倍', 'にばい', 'Dua kali lipat'],
    ['倍増', 'ばいぞう', 'Bertambah dua kali lipat'],
    ['倍率', 'ばいりつ', 'Tingkat perbandingan'],
    ['何倍', 'なんばい', 'Berapa kali lipat'],
    ['倍返し', 'ばいがえし', 'Balasan berlipat ganda'],
  ],

  礼: [
    ['礼', 'れい', 'Salam; rasa terima kasih'],
    ['お礼', 'おれい', 'Ucapan terima kasih'],
    ['礼儀', 'れいぎ', 'Sopan santun'],
    ['失礼', 'しつれい', 'Tidak sopan; permisi'],
    ['礼金', 'れいきん', 'Uang terima kasih'],
    ['礼拝', 'れいはい', 'Ibadah; penyembahan'],
  ],

  了: [
    ['終了', 'しゅうりょう', 'Penyelesaian; berakhir'],
    ['完了', 'かんりょう', 'Selesai; tuntas'],
    ['了解', 'りょうかい', 'Mengerti; dipahami'],
    ['了承', 'りょうしょう', 'Persetujuan; pemahaman'],
    ['修了', 'しゅうりょう', 'Menyelesaikan pendidikan/kursus'],
  ],

  衣: [
    ['衣', 'ころも', 'Pakaian; jubah'],
    ['衣服', 'いふく', 'Pakaian'],
    ['衣類', 'いるい', 'Pakaian'],
    ['衣装', 'いしょう', 'Kostum; busana'],
    ['浴衣', 'ゆかた', 'Yukata'],
    ['衣替え', 'ころもがえ', 'Pergantian pakaian sesuai musim'],
  ],

  完: [
    ['完成', 'かんせい', 'Penyelesaian; selesai'],
    ['完全', 'かんぜん', 'Sempurna'],
    ['完了', 'かんりょう', 'Penyelesaian'],
    ['完璧', 'かんぺき', 'Sempurna; tanpa cela'],
    ['完売', 'かんばい', 'Terjual habis'],
    ['未完成', 'みかんせい', 'Belum selesai'],
  ],

  枚: [
    ['一枚', 'いちまい', 'Satu lembar'],
    ['二枚', 'にまい', 'Dua lembar'],
    ['何枚', 'なんまい', 'Berapa lembar'],
    ['枚数', 'まいすう', 'Jumlah lembar'],
    ['大人二枚', 'おとなにまい', 'Dua tiket dewasa'],
  ],

  性: [
    ['性格', 'せいかく', 'Kepribadian'],
    ['男性', 'だんせい', 'Laki-laki'],
    ['女性', 'じょせい', 'Perempuan'],
    ['性別', 'せいべつ', 'Jenis kelamin'],
    ['可能性', 'かのうせい', 'Kemungkinan'],
    ['安全性', 'あんぜんせい', 'Keamanan'],
  ],

  税: [
    ['税金', 'ぜいきん', 'Pajak'],
    ['消費税', 'しょうひぜい', 'Pajak konsumsi'],
    ['所得税', 'しょとくぜい', 'Pajak penghasilan'],
    ['税関', 'ぜいかん', 'Bea cukai'],
    ['税率', 'ぜいりつ', 'Tarif pajak'],
    ['納税', 'のうぜい', 'Pembayaran pajak'],
  ],

  型: [
    ['型', 'かた', 'Bentuk; model'],
    ['血液型', 'けつえきがた', 'Golongan darah'],
    ['大型', 'おおがた', 'Ukuran besar'],
    ['小型', 'こがた', 'Ukuran kecil'],
    ['新型', 'しんがた', 'Model baru'],
    ['髪型', 'かみがた', 'Gaya rambut'],
  ],

  故: [
    ['故障', 'こしょう', 'Kerusakan'],
    ['事故', 'じこ', 'Kecelakaan'],
    ['故意', 'こい', 'Kesengajaan'],
    ['故郷', 'こきょう', 'Kampung halaman'],
    ['故人', 'こじん', 'Almarhum'],
    ['何故', 'なぜ', 'Mengapa'],
  ],

  差: [
    ['差', 'さ', 'Perbedaan; selisih'],
    ['差す', 'さす', 'Menusukkan; mengarahkan; membuka payung'],
    ['差し出す', 'さしだす', 'Menyodorkan'],
    ['差別', 'さべつ', 'Diskriminasi'],
    ['時差', 'じさ', 'Perbedaan waktu'],
    ['温度差', 'おんどさ', 'Perbedaan suhu'],
  ],

  技: [
    ['技', 'わざ', 'Teknik; keterampilan'],
    ['技術', 'ぎじゅつ', 'Teknologi; keterampilan'],
    ['技師', 'ぎし', 'Teknisi; insinyur'],
    ['特技', 'とくぎ', 'Keahlian khusus'],
    ['競技', 'きょうぎ', 'Kompetisi olahraga'],
    ['演技', 'えんぎ', 'Akting; pertunjukan'],
  ],

  他: [
    ['他', 'ほか', 'Yang lain'],
    ['他人', 'たにん', 'Orang lain'],
    ['その他', 'そのほか', 'Selain itu'],
    ['他国', 'たこく', 'Negara lain'],
    ['他人事', 'ひとごと', 'Urusan orang lain'],
    ['他社', 'たしゃ', 'Perusahaan lain'],
  ],

  息: [
    ['息', 'いき', 'Napas'],
    ['息子', 'むすこ', 'Anak laki-laki'],
    ['息をする', 'いきをする', 'Bernapas'],
    ['息切れ', 'いきぎれ', 'Sesak napas'],
    ['ため息', 'ためいき', 'Tarikan napas; desahan'],
    ['休息', 'きゅうそく', 'Istirahat'],
  ],

  虫: [
    ['虫', 'むし', 'Serangga'],
    ['虫歯', 'むしば', 'Gigi berlubang'],
    ['昆虫', 'こんちゅう', 'Serangga'],
    ['害虫', 'がいちゅう', 'Hama'],
    ['虫取り', 'むしとり', 'Menangkap serangga'],
    ['虫眼鏡', 'むしめがね', 'Kaca pembesar'],
  ],

  波: [
    ['波', 'なみ', 'Ombak; gelombang'],
    ['波打つ', 'なみうつ', 'Bergelombang'],
    ['電波', 'でんぱ', 'Gelombang radio'],
    ['波長', 'はちょう', 'Panjang gelombang'],
    ['津波', 'つなみ', 'Tsunami'],
    ['波動', 'はどう', 'Gelombang; getaran'],
  ],

  単: [
    ['単に', 'たんに', 'Hanya; sekadar'],
    ['簡単', 'かんたん', 'Mudah; sederhana'],
    ['単語', 'たんご', 'Kosakata'],
    ['単位', 'たんい', 'Satuan; kredit'],
    ['単独', 'たんどく', 'Sendirian'],
    ['単純', 'たんじゅん', 'Sederhana'],
  ],

  昨: [
    ['昨日', 'きのう', 'Kemarin'],
    ['昨年', 'さくねん', 'Tahun lalu'],
    ['昨夜', 'さくや', 'Tadi malam'],
    ['昨晩', 'さくばん', 'Tadi malam'],
    ['一昨日', 'おととい', 'Kemarin lusa'],
    ['昨今', 'さっこん', 'Akhir-akhir ini'],
  ],

  曲: [
    ['曲', 'きょく', 'Lagu; musik'],
    ['曲がる', 'まがる', 'Berbelok'],
    ['曲げる', 'まげる', 'Membengkokkan'],
    ['作曲', 'さっきょく', 'Menggubah lagu'],
    ['名曲', 'めいきょく', 'Lagu terkenal'],
    ['曲線', 'きょくせん', 'Garis lengkung'],
  ],

  対: [
    ['対', 'たい', 'Lawan; pasangan'],
    ['反対', 'はんたい', 'Berlawanan; menentang'],
    ['対話', 'たいわ', 'Dialog'],
    ['対象', 'たいしょう', 'Objek; sasaran'],
    ['対策', 'たいさく', 'Langkah penanggulangan'],
    ['対立', 'たいりつ', 'Pertentangan'],
  ],

  否: [
    ['否', 'ひ', 'Tidak; penolakan'],
    ['否定', 'ひてい', 'Penolakan; negasi'],
    ['否定する', 'ひていする', 'Menyangkal'],
    ['否決', 'ひけつ', 'Penolakan usulan'],
    ['可否', 'かひ', 'Setuju atau tidak'],
    ['賛否', 'さんぴ', 'Pro dan kontra'],
  ],

  的: [
    ['的', 'まと', 'Sasaran'],
    ['目的', 'もくてき', 'Tujuan'],
    ['具体的', 'ぐたいてき', 'Konkret'],
    ['一般的', 'いっぱんてき', 'Umum'],
    ['基本的', 'きほんてき', 'Mendasar'],
    ['積極的', 'せっきょくてき', 'Aktif; proaktif'],
  ],

  宿: [
    ['宿', 'やど', 'Penginapan'],
    ['宿題', 'しゅくだい', 'Pekerjaan rumah'],
    ['宿泊', 'しゅくはく', 'Menginap'],
    ['宿屋', 'やどや', 'Penginapan tradisional'],
    ['下宿', 'げしゅく', 'Kos; indekos'],
    ['宿命', 'しゅくめい', 'Takdir'],
  ],

  束: [
    ['束', 'たば', 'Ikatan; berkas'],
    ['約束', 'やくそく', 'Janji'],
    ['花束', 'はなたば', 'Buket bunga'],
    ['束ねる', 'たばねる', 'Mengikat; mengumpulkan'],
    ['束縛', 'そくばく', 'Pengekangan'],
    ['一束', 'ひとたば', 'Satu ikat'],
  ],

  査: [
    ['調査', 'ちょうさ', 'Penyelidikan; survei'],
    ['検査', 'けんさ', 'Pemeriksaan'],
    ['審査', 'しんさ', 'Penilaian; pemeriksaan'],
    ['査定', 'さてい', 'Penilaian'],
    ['監査', 'かんさ', 'Audit'],
    ['調査員', 'ちょうさいん', 'Petugas survei'],
  ],

  実: [
    ['実', 'み', 'Buah; isi'],
    ['実る', 'みのる', 'Berbuah; membuahkan hasil'],
    ['実際', 'じっさい', 'Kenyataannya'],
    ['実験', 'じっけん', 'Eksperimen'],
    ['実力', 'じつりょく', 'Kemampuan sebenarnya'],
    ['現実', 'げんじつ', 'Kenyataan'],
  ],

  涙: [
    ['涙', 'なみだ', 'Air mata'],
    ['涙が出る', 'なみだがでる', 'Air mata keluar'],
    ['涙声', 'なみだごえ', 'Suara bergetar karena menangis'],
    ['涙ぐむ', 'なみだぐむ', 'Berkaca-kaca'],
    ['感涙', 'かんるい', 'Air mata haru'],
  ],

  労: [
    ['労働', 'ろうどう', 'Tenaga kerja'],
    ['労働者', 'ろうどうしゃ', 'Pekerja'],
    ['苦労', 'くろう', 'Kesulitan; perjuangan'],
    ['疲労', 'ひろう', 'Kelelahan'],
    ['労力', 'ろうりょく', 'Tenaga; usaha'],
    ['労働時間', 'ろうどうじかん', 'Jam kerja'],
  ],

  相: [
    ['相手', 'あいて', 'Lawan; pasangan'],
    ['相談', 'そうだん', 'Konsultasi'],
    ['相当', 'そうとう', 'Cukup; sepadan'],
    ['相変わらず', 'あいかわらず', 'Seperti biasa'],
    ['相互', 'そうご', 'Saling; timbal balik'],
    ['首相', 'しゅしょう', 'Perdana menteri'],
  ],

  点: [
    ['点', 'てん', 'Titik; nilai'],
    ['点数', 'てんすう', 'Jumlah nilai'],
    ['満点', 'まんてん', 'Nilai sempurna'],
    ['欠点', 'けってん', 'Kekurangan'],
    ['注意点', 'ちゅういてん', 'Hal yang perlu diperhatikan'],
    ['交差点', 'こうさてん', 'Persimpangan'],
  ],

  原: [
    ['原', 'はら', 'Padang; dataran'],
    ['原因', 'げんいん', 'Penyebab'],
    ['原料', 'げんりょう', 'Bahan baku'],
    ['原則', 'げんそく', 'Prinsip'],
    ['原作', 'げんさく', 'Karya asli'],
    ['原稿', 'げんこう', 'Naskah'],
  ],

  営: [
    ['営業', 'えいぎょう', 'Kegiatan usaha; operasional'],
    ['営業中', 'えいぎょうちゅう', 'Sedang buka'],
    ['経営', 'けいえい', 'Manajemen; pengelolaan'],
    ['運営', 'うんえい', 'Pengoperasian; penyelenggaraan'],
    ['自営業', 'じえいぎょう', 'Usaha sendiri'],
    ['営む', 'いとなむ', 'Menjalankan usaha'],
  ],

  指: [
    ['指', 'ゆび', 'Jari'],
    ['指す', 'さす', 'Menunjuk'],
    ['指輪', 'ゆびわ', 'Cincin'],
    ['指導', 'しどう', 'Bimbingan'],
    ['指示', 'しじ', 'Instruksi'],
    ['指定', 'してい', 'Penetapan'],
  ],

  席: [
    ['席', 'せき', 'Tempat duduk'],
    ['座席', 'ざせき', 'Kursi; tempat duduk'],
    ['出席', 'しゅっせき', 'Kehadiran'],
    ['欠席', 'けっせき', 'Ketidakhadiran'],
    ['席順', 'せきじゅん', 'Urutan tempat duduk'],
    ['満席', 'まんせき', 'Semua kursi terisi'],
  ],

  式: [
    ['式', 'しき', 'Upacara; rumus'],
    ['結婚式', 'けっこんしき', 'Upacara pernikahan'],
    ['入学式', 'にゅうがくしき', 'Upacara masuk sekolah'],
    ['卒業式', 'そつぎょうしき', 'Upacara kelulusan'],
    ['正式', 'せいしき', 'Resmi'],
    ['方式', 'ほうしき', 'Metode; sistem'],
  ],

  面: [
    ['面', 'めん', 'Permukaan; sisi'],
    ['面白い', 'おもしろい', 'Menarik; lucu'],
    ['面倒', 'めんどう', 'Merepotkan'],
    ['面接', 'めんせつ', 'Wawancara'],
    ['正面', 'しょうめん', 'Bagian depan'],
    ['方面', 'ほうめん', 'Arah; bidang'],
  ],

  客: [
    ['客', 'きゃく', 'Tamu; pelanggan'],
    ['お客さん', 'おきゃくさん', 'Tamu; pelanggan'],
    ['客室', 'きゃくしつ', 'Kamar tamu'],
    ['乗客', 'じょうきゃく', 'Penumpang'],
    ['観客', 'かんきゃく', 'Penonton'],
    ['客席', 'きゃくせき', 'Tempat duduk penonton'],
  ],

  係: [
    ['係', 'かかり', 'Petugas; bagian yang bertanggung jawab'],
    ['係員', 'かかりいん', 'Petugas'],
    ['関係', 'かんけい', 'Hubungan'],
    ['係長', 'かかりちょう', 'Kepala bagian'],
    ['無関係', 'むかんけい', 'Tidak berhubungan'],
  ],

  約: [
    ['約', 'やく', 'Kira-kira'],
    ['約束', 'やくそく', 'Janji'],
    ['予約', 'よやく', 'Reservasi'],
    ['約半分', 'やくはんぶん', 'Kira-kira setengah'],
    ['節約', 'せつやく', 'Penghematan'],
    ['約束する', 'やくそくする', 'Berjanji'],
  ],

  絵: [
    ['絵', 'え', 'Gambar; lukisan'],
    ['絵本', 'えほん', 'Buku bergambar'],
    ['絵画', 'かいが', 'Lukisan'],
    ['絵葉書', 'えはがき', 'Kartu pos bergambar'],
    ['似顔絵', 'にがおえ', 'Gambar wajah; karikatur'],
    ['絵の具', 'えのぐ', 'Cat lukis'],
  ],

  箱: [
    ['箱', 'はこ', 'Kotak'],
    ['箱入り', 'はこいり', 'Dikemas dalam kotak'],
    ['本箱', 'ほんばこ', 'Rak buku'],
    ['郵便箱', 'ゆうびんばこ', 'Kotak surat'],
    ['ごみ箱', 'ごみばこ', 'Tempat sampah'],
    ['箱詰め', 'はこづめ', 'Pengemasan ke dalam kotak'],
  ],

  科: [
    ['科', 'か', 'Bagian; jurusan'],
    ['科学', 'かがく', 'Ilmu pengetahuan'],
    ['学科', 'がっか', 'Jurusan pelajaran'],
    ['教科書', 'きょうかしょ', 'Buku pelajaran'],
    ['内科', 'ないか', 'Penyakit dalam'],
    ['外科', 'げか', 'Bedah'],
  ],

  常: [
    ['常に', 'つねに', 'Selalu'],
    ['日常', 'にちじょう', 'Kehidupan sehari-hari'],
    ['通常', 'つうじょう', 'Biasanya; normal'],
    ['常識', 'じょうしき', 'Akal sehat; pengetahuan umum'],
    ['非常', 'ひじょう', 'Darurat; luar biasa'],
    ['正常', 'せいじょう', 'Normal'],
  ],

  島: [
    ['島', 'しま', 'Pulau'],
    ['島国', 'しまぐに', 'Negara kepulauan'],
    ['半島', 'はんとう', 'Semenanjung'],
    ['離島', 'りとう', 'Pulau terpencil'],
    ['島民', 'とうみん', 'Penduduk pulau'],
    ['無人島', 'むじんとう', 'Pulau tak berpenghuni'],
  ],

  窓: [
    ['窓', 'まど', 'Jendela'],
    ['窓口', 'まどぐち', 'Loket'],
    ['窓側', 'まどがわ', 'Sisi dekat jendela'],
    ['窓ガラス', 'まどガラス', 'Kaca jendela'],
    ['車窓', 'しゃそう', 'Jendela kendaraan'],
    ['窓際', 'まどぎわ', 'Dekat jendela'],
  ],

  横: [
    ['横', 'よこ', 'Samping; horizontal'],
    ['横に', 'よこに', 'Ke samping'],
    ['横切る', 'よこぎる', 'Menyeberangi'],
    ['横断歩道', 'おうだんほどう', 'Tempat penyeberangan'],
    ['横顔', 'よこがお', 'Profil wajah'],
    ['横書き', 'よこがき', 'Tulisan horizontal'],
  ],

  果: [
    ['果物', 'くだもの', 'Buah-buahan'],
    ['結果', 'けっか', 'Hasil'],
    ['効果', 'こうか', 'Efek'],
    ['果たす', 'はたす', 'Melaksanakan; memenuhi'],
    ['果たして', 'はたして', 'Benarkah; ternyata'],
    ['成果', 'せいか', 'Hasil; pencapaian'],
  ],

  無: [
    ['無い', 'ない', 'Tidak ada'],
    ['無料', 'むりょう', 'Gratis'],
    ['無理', 'むり', 'Tidak mungkin; memaksakan diri'],
    ['無事', 'ぶじ', 'Selamat; tanpa masalah'],
    ['無駄', 'むだ', 'Sia-sia; mubazir'],
    ['無関係', 'むかんけい', 'Tidak berhubungan'],
  ],

  普: [
    ['普通', 'ふつう', 'Biasa; normal'],
    ['普段', 'ふだん', 'Biasanya; sehari-hari'],
    ['普及', 'ふきゅう', 'Penyebaran; popularisasi'],
    ['普遍', 'ふへん', 'Universal'],
    ['普及率', 'ふきゅうりつ', 'Tingkat penyebaran'],
  ],

  段: [
    ['段', 'だん', 'Tingkat; anak tangga'],
    ['階段', 'かいだん', 'Tangga'],
    ['段階', 'だんかい', 'Tahapan'],
    ['値段', 'ねだん', 'Harga'],
    ['手段', 'しゅだん', 'Cara; sarana'],
    ['段落', 'だんらく', 'Paragraf'],
  ],

  路: [
    ['道路', 'どうろ', 'Jalan raya'],
    ['通路', 'つうろ', 'Jalur; lorong'],
    ['線路', 'せんろ', 'Rel kereta'],
    ['路線', 'ろせん', 'Rute'],
    ['帰り道', 'かえりみち', 'Jalan pulang'],
    ['迷路', 'めいろ', 'Labirin'],
  ],

  側: [
    ['側', 'がわ', 'Sisi'],
    ['右側', 'みぎがわ', 'Sisi kanan'],
    ['左側', 'ひだりがわ', 'Sisi kiri'],
    ['内側', 'うちがわ', 'Bagian dalam'],
    ['外側', 'そとがわ', 'Bagian luar'],
    ['両側', 'りょうがわ', 'Kedua sisi'],
  ],

  術: [
    ['技術', 'ぎじゅつ', 'Teknologi; keterampilan'],
    ['手術', 'しゅじゅつ', 'Operasi bedah'],
    ['芸術', 'げいじゅつ', 'Seni'],
    ['美術', 'びじゅつ', 'Seni rupa'],
    ['話術', 'わじゅつ', 'Keterampilan berbicara'],
    ['術後', 'じゅつご', 'Setelah operasi'],
  ],

  券: [
    ['券', 'けん', 'Tiket; kupon'],
    ['乗車券', 'じょうしゃけん', 'Tiket naik kendaraan'],
    ['入場券', 'にゅうじょうけん', 'Tiket masuk'],
    ['定期券', 'ていきけん', 'Tiket langganan'],
    ['回数券', 'かいすうけん', 'Tiket beberapa kali perjalanan'],
    ['食券', 'しょっけん', 'Kupon makanan'],
  ],

  両: [
    ['両方', 'りょうほう', 'Keduanya'],
    ['両親', 'りょうしん', 'Kedua orang tua'],
    ['両手', 'りょうて', 'Kedua tangan'],
    ['両足', 'りょうあし', 'Kedua kaki'],
    ['両国', 'りょうこく', 'Kedua negara'],
    ['車両', 'しゃりょう', 'Kendaraan'],
  ],

  階: [
    ['階', 'かい', 'Lantai'],
    ['一階', 'いっかい', 'Lantai satu'],
    ['二階', 'にかい', 'Lantai dua'],
    ['階段', 'かいだん', 'Tangga'],
    ['階級', 'かいきゅう', 'Tingkatan; kelas'],
    ['段階', 'だんかい', 'Tahapan'],
  ],

  線: [
    ['線', 'せん', 'Garis'],
    ['電線', 'でんせん', 'Kabel listrik'],
    ['地下鉄線', 'ちかてつせん', 'Jalur kereta bawah tanah'],
    ['新幹線', 'しんかんせん', 'Kereta cepat Shinkansen'],
    ['路線', 'ろせん', 'Rute'],
    ['直線', 'ちょくせん', 'Garis lurus'],
  ],

  煙: [
    ['煙', 'けむり', 'Asap'],
    ['煙い', 'けむい', 'Berasap'],
    ['煙草', 'たばこ', 'Rokok'],
    ['禁煙', 'きんえん', 'Dilarang merokok'],
    ['煙突', 'えんとつ', 'Cerobong asap'],
  ],

  現: [
    ['現れる', 'あらわれる', 'Muncul'],
    ['現す', 'あらわす', 'Memperlihatkan'],
    ['現在', 'げんざい', 'Saat ini'],
    ['現実', 'げんじつ', 'Kenyataan'],
    ['表現', 'ひょうげん', 'Ekspresi; ungkapan'],
    ['現場', 'げんば', 'Lokasi kejadian'],
  ],

  準: [
    ['準備', 'じゅんび', 'Persiapan'],
    ['基準', 'きじゅん', 'Standar'],
    ['準決勝', 'じゅんけっしょう', 'Semifinal'],
    ['準急', 'じゅんきゅう', 'Kereta semi-ekspres'],
    ['標準', 'ひょうじゅん', 'Standar'],
    ['準じる', 'じゅんじる', 'Mengikuti; sesuai dengan'],
  ],

  橋: [
    ['橋', 'はし', 'Jembatan'],
    ['歩道橋', 'ほどうきょう', 'Jembatan penyeberangan'],
    ['鉄橋', 'てっきょう', 'Jembatan besi'],
    ['橋渡し', 'はしわたし', 'Perantara; penghubung'],
    ['大橋', 'おおはし', 'Jembatan besar'],
  ],

  組: [
    ['組', 'くみ', 'Kelompok; kelas'],
    ['組む', 'くむ', 'Menyusun; membentuk kelompok'],
    ['組み立てる', 'くみたてる', 'Merakit'],
    ['組合', 'くみあい', 'Serikat; perkumpulan'],
    ['番組', 'ばんぐみ', 'Program televisi'],
    ['組織', 'そしき', 'Organisasi'],
  ],

  郵: [
    ['郵便', 'ゆうびん', 'Pos'],
    ['郵便局', 'ゆうびんきょく', 'Kantor pos'],
    ['郵便物', 'ゆうびんぶつ', 'Kiriman pos'],
    ['郵便番号', 'ゆうびんばんごう', 'Kode pos'],
    ['郵送', 'ゆうそう', 'Pengiriman melalui pos'],
  ],

  販: [
    ['販売', 'はんばい', 'Penjualan'],
    ['販売員', 'はんばいいん', 'Petugas penjualan'],
    ['自動販売機', 'じどうはんばいき', 'Mesin penjual otomatis'],
    ['販売店', 'はんばいてん', 'Toko penjualan'],
    ['通信販売', 'つうしんはんばい', 'Penjualan melalui pesanan jarak jauh'],
  ],

  園: [
    ['公園', 'こうえん', 'Taman'],
    ['幼稚園', 'ようちえん', 'Taman kanak-kanak'],
    ['動物園', 'どうぶつえん', 'Kebun binatang'],
    ['植物園', 'しょくぶつえん', 'Kebun botani'],
    ['園児', 'えんじ', 'Murid taman kanak-kanak'],
    ['庭園', 'ていえん', 'Taman'],
  ],

  卵: [
    ['卵', 'たまご', 'Telur'],
    ['卵焼き', 'たまごやき', 'Telur dadar Jepang'],
    ['卵黄', 'らんおう', 'Kuning telur'],
    ['卵白', 'らんぱく', 'Putih telur'],
    ['産卵', 'さんらん', 'Bertelur'],
    ['鶏卵', 'けいらん', 'Telur ayam'],
  ],

  費: [
    ['費用', 'ひよう', 'Biaya'],
    ['生活費', 'せいかつひ', 'Biaya hidup'],
    ['交通費', 'こうつうひ', 'Biaya transportasi'],
    ['食費', 'しょくひ', 'Biaya makan'],
    ['消費', 'しょうひ', 'Konsumsi'],
    ['学費', 'がくひ', 'Biaya pendidikan'],
  ],

  賞: [
    ['賞', 'しょう', 'Penghargaan; hadiah'],
    ['賞金', 'しょうきん', 'Uang hadiah'],
    ['賞品', 'しょうひん', 'Barang hadiah'],
    ['優秀賞', 'ゆうしゅうしょう', 'Penghargaan keunggulan'],
    ['参加賞', 'さんかしょう', 'Hadiah partisipasi'],
    ['受賞', 'じゅしょう', 'Menerima penghargaan'],
  ],

  庫: [
    ['車庫', 'しゃこ', 'Garasi'],
    ['倉庫', 'そうこ', 'Gudang'],
    ['冷蔵庫', 'れいぞうこ', 'Kulkas'],
    ['金庫', 'きんこ', 'Brankas'],
    ['文庫', 'ぶんこ', 'Perpustakaan kecil; buku saku'],
    ['書庫', 'しょこ', 'Ruang penyimpanan buku'],
  ],

  材: [
    ['材料', 'ざいりょう', 'Bahan'],
    ['木材', 'もくざい', 'Kayu'],
    ['教材', 'きょうざい', 'Bahan ajar'],
    ['食材', 'しょくざい', 'Bahan makanan'],
    ['人材', 'じんざい', 'Sumber daya manusia'],
    ['素材', 'そざい', 'Bahan dasar'],
  ],

  製: [
    ['製品', 'せいひん', 'Produk'],
    ['製造', 'せいぞう', 'Produksi; manufaktur'],
    ['製作', 'せいさく', 'Pembuatan; produksi'],
    ['日本製', 'にほんせい', 'Buatan Jepang'],
    ['手製', 'てせい', 'Buatan tangan'],
    ['製本', 'せいほん', 'Penjilidan buku'],
  ],

  期: [
    ['期間', 'きかん', 'Jangka waktu'],
    ['期間中', 'きかんちゅう', 'Selama periode'],
    ['期待', 'きたい', 'Harapan; ekspektasi'],
    ['時期', 'じき', 'Waktu; masa'],
    ['学期', 'がっき', 'Semester'],
    ['延期', 'えんき', 'Penundaan'],
  ],

  件: [
    ['件', 'けん', 'Perkara; kejadian'],
    ['事件', 'じけん', 'Peristiwa; kasus'],
    ['条件', 'じょうけん', 'Syarat; kondisi'],
    ['用件', 'ようけん', 'Keperluan; urusan'],
    ['件数', 'けんすう', 'Jumlah kasus'],
    ['一件', 'いっけん', 'Satu perkara'],
  ],

  限: [
    ['限る', 'かぎる', 'Membatasi'],
    ['限り', 'かぎり', 'Batas; selama'],
    ['制限', 'せいげん', 'Pembatasan'],
    ['期限', 'きげん', 'Batas waktu'],
    ['限界', 'げんかい', 'Batas kemampuan'],
    ['限定', 'げんてい', 'Terbatas; khusus'],
  ],

  警: [
    ['警察', 'けいさつ', 'Polisi'],
    ['警官', 'けいかん', 'Polisi'],
    ['警備', 'けいび', 'Penjagaan keamanan'],
    ['警告', 'けいこく', 'Peringatan'],
    ['警報', 'けいほう', 'Peringatan bahaya'],
    ['警戒', 'けいかい', 'Kewaspadaan'],
  ],

  察: [
    ['警察', 'けいさつ', 'Polisi'],
    ['観察', 'かんさつ', 'Pengamatan'],
    ['診察', 'しんさつ', 'Pemeriksaan medis'],
    ['察する', 'さっする', 'Memahami perasaan orang lain'],
    ['考察', 'こうさつ', 'Pertimbangan; analisis'],
  ],

  乳: [
    ['牛乳', 'ぎゅうにゅう', 'Susu sapi'],
    ['乳製品', 'にゅうせいひん', 'Produk susu'],
    ['母乳', 'ぼにゅう', 'ASI'],
    ['乳児', 'にゅうじ', 'Bayi'],
    ['乳房', 'にゅうぼう', 'Payudara'],
    ['乳酸', 'にゅうさん', 'Asam laktat'],
  ],

  数: [
    ['数', 'かず', 'Angka; jumlah'],
    ['数える', 'かぞえる', 'Menghitung'],
    ['数字', 'すうじ', 'Angka'],
    ['数学', 'すうがく', 'Matematika'],
    ['人数', 'にんずう', 'Jumlah orang'],
    ['回数', 'かいすう', 'Frekuensi; jumlah kali'],
  ],

  冊: [
    ['一冊', 'いっさつ', 'Satu jilid buku'],
    ['二冊', 'にさつ', 'Dua jilid buku'],
    ['何冊', 'なんさつ', 'Berapa jilid buku'],
    ['冊数', 'さっすう', 'Jumlah jilid'],
    ['小冊子', 'しょうさっし', 'Buku kecil; pamflet'],
  ],

  価: [
    ['価格', 'かかく', 'Harga'],
    ['価値', 'かち', 'Nilai'],
    ['評価', 'ひょうか', 'Penilaian'],
    ['定価', 'ていか', 'Harga tetap'],
    ['物価', 'ぶっか', 'Harga barang'],
    ['価値観', 'かちかん', 'Pandangan tentang nilai'],
  ],

  粉: [
    ['粉', 'こな', 'Bubuk; tepung'],
    ['小麦粉', 'こむぎこ', 'Tepung terigu'],
    ['粉薬', 'こなぐすり', 'Obat bubuk'],
    ['粉末', 'ふんまつ', 'Serbuk'],
    ['粉雪', 'こなゆき', 'Salju halus'],
    ['花粉', 'かふん', 'Serbuk sari'],
  ],

  湯: [
    ['湯', 'ゆ', 'Air panas'],
    ['お湯', 'おゆ', 'Air panas'],
    ['湯飲み', 'ゆのみ', 'Cangkir teh'],
    ['熱湯', 'ねっとう', 'Air mendidih'],
    ['銭湯', 'せんとう', 'Pemandian umum'],
    ['湯船', 'ゆぶね', 'Bak mandi'],
  ],

  再: [
    ['再び', 'ふたたび', 'Sekali lagi'],
    ['再会', 'さいかい', 'Bertemu kembali'],
    ['再生', 'さいせい', 'Pemutaran ulang; regenerasi'],
    ['再利用', 'さいりよう', 'Penggunaan kembali'],
    ['再確認', 'さいかくにん', 'Konfirmasi ulang'],
    ['再来週', 'さらいしゅう', 'Dua minggu lagi'],
  ],

  格: [
    ['価格', 'かかく', 'Harga'],
    ['資格', 'しかく', 'Kualifikasi'],
    ['合格', 'ごうかく', 'Lulus ujian'],
    ['性格', 'せいかく', 'Kepribadian'],
    ['格好', 'かっこう', 'Penampilan; gaya'],
    ['格差', 'かくさ', 'Kesenjangan'],
  ],

  裏: [
    ['裏', 'うら', 'Bagian belakang'],
    ['裏側', 'うらがわ', 'Sisi belakang'],
    ['裏切る', 'うらぎる', 'Mengkhianati'],
    ['裏切り', 'うらぎり', 'Pengkhianatan'],
    ['裏口', 'うらぐち', 'Pintu belakang'],
    ['裏返す', 'うらがえす', 'Membalikkan'],
  ],

  商: [
    ['商売', 'しょうばい', 'Perdagangan; bisnis'],
    ['商品', 'しょうひん', 'Barang dagangan'],
    ['商店', 'しょうてん', 'Toko'],
    ['商業', 'しょうぎょう', 'Perdagangan'],
    ['商社', 'しょうしゃ', 'Perusahaan dagang'],
    ['商人', 'しょうにん', 'Pedagang'],
  ],

  機: [
    ['機械', 'きかい', 'Mesin'],
    ['機会', 'きかい', 'Kesempatan'],
    ['飛行機', 'ひこうき', 'Pesawat terbang'],
    ['自動販売機', 'じどうはんばいき', 'Mesin penjual otomatis'],
    ['機能', 'きのう', 'Fungsi'],
    ['機関', 'きかん', 'Lembaga; mesin'],
  ],

  紅: [
    ['紅', 'べに', 'Merah tua; pewarna merah'],
    ['紅茶', 'こうちゃ', 'Teh hitam'],
    ['紅葉', 'こうよう', 'Daun musim gugur'],
    ['口紅', 'くちべに', 'Lipstik'],
    ['紅白', 'こうはく', 'Merah dan putih'],
    ['紅色', 'べにいろ', 'Warna merah tua'],
  ],

  砂: [
    ['砂', 'すな', 'Pasir'],
    ['砂浜', 'すなはま', 'Pantai berpasir'],
    ['砂糖', 'さとう', 'Gula'],
    ['砂漠', 'さばく', 'Gurun pasir'],
    ['砂場', 'すなば', 'Tempat bermain pasir'],
    ['砂利', 'じゃり', 'Kerikil'],
  ],

  塩: [
    ['塩', 'しお', 'Garam'],
    ['塩水', 'しおみず', 'Air garam'],
    ['食塩', 'しょくえん', 'Garam dapur'],
    ['塩辛い', 'しおからい', 'Asin'],
    ['塩分', 'えんぶん', 'Kandungan garam'],
    ['塩焼き', 'しおやき', 'Masakan panggang dengan garam'],
  ],

  例: [
    ['例', 'れい', 'Contoh'],
    ['例えば', 'たとえば', 'Misalnya'],
    ['例文', 'れいぶん', 'Contoh kalimat'],
    ['例外', 'れいがい', 'Pengecualian'],
    ['実例', 'じつれい', 'Contoh nyata'],
    ['前例', 'ぜんれい', 'Contoh sebelumnya'],
  ],

  袋: [
    ['袋', 'ふくろ', 'Kantong; tas'],
    ['手袋', 'てぶくろ', 'Sarung tangan'],
    ['紙袋', 'かみぶくろ', 'Kantong kertas'],
    ['買い物袋', 'かいものぶくろ', 'Tas belanja'],
    ['ゴミ袋', 'ごみぶくろ', 'Kantong sampah'],
    ['袋詰め', 'ふくろづめ', 'Pengemasan ke dalam kantong'],
  ],

  師: [
    ['教師', 'きょうし', 'Guru'],
    ['医師', 'いし', 'Dokter'],
    ['看護師', 'かんごし', 'Perawat'],
    ['美容師', 'びようし', 'Penata rambut'],
    ['技師', 'ぎし', 'Teknisi'],
    ['講師', 'こうし', 'Pengajar; dosen'],
  ],

  角: [
    ['角', 'かど', 'Sudut; pojok'],
    ['角', 'つの', 'Tanduk'],
    ['三角', 'さんかく', 'Segitiga'],
    ['四角', 'しかく', 'Segi empat'],
    ['角度', 'かくど', 'Sudut; derajat'],
    ['直角', 'ちょっかく', 'Sudut siku-siku'],
  ],

  戸: [
    ['戸', 'と', 'Pintu geser'],
    ['戸棚', 'とだな', 'Lemari'],
    ['戸口', 'とぐち', 'Pintu masuk'],
    ['戸外', 'こがい', 'Luar ruangan'],
    ['雨戸', 'あまど', 'Pintu pelindung dari hujan'],
    ['井戸', 'いど', 'Sumur'],
  ],

  荷: [
    ['荷物', 'にもつ', 'Barang bawaan'],
    ['荷', 'に', 'Muatan; barang'],
    ['荷造り', 'にづくり', 'Mengepak barang'],
    ['荷物置き場', 'にもつおきば', 'Tempat meletakkan barang'],
    ['出荷', 'しゅっか', 'Pengiriman barang'],
    ['入荷', 'にゅうか', 'Barang masuk; kedatangan stok'],
  ],

  帯: [
    ['帯', 'おび', 'Ikat pinggang kimono'],
    ['携帯', 'けいたい', 'Ponsel; membawa'],
    ['地帯', 'ちたい', 'Wilayah; zona'],
    ['時間帯', 'じかんたい', 'Rentang waktu'],
    ['帯びる', 'おびる', 'Membawa; memiliki'],
    ['包帯', 'ほうたい', 'Perban'],
  ],

  宅: [
    ['自宅', 'じたく', 'Rumah sendiri'],
    ['住宅', 'じゅうたく', 'Perumahan'],
    ['お宅', 'おたく', 'Rumah Anda'],
    ['宅配', 'たくはい', 'Pengiriman ke rumah'],
    ['帰宅', 'きたく', 'Pulang ke rumah'],
    ['宅地', 'たくち', 'Lahan perumahan'],
  ],

  念: [
    ['念', 'ねん', 'Pikiran; perhatian'],
    ['記念', 'きねん', 'Peringatan; kenangan'],
    ['残念', 'ざんねん', 'Sayang sekali'],
    ['心配', 'しんぱい', 'Kekhawatiran'],
    ['念願', 'ねんがん', 'Harapan yang lama diinginkan'],
    ['理念', 'りねん', 'Prinsip; filosofi'],
  ],

  希: [
    ['希望', 'きぼう', 'Harapan'],
    ['希望者', 'きぼうしゃ', 'Orang yang berminat'],
    ['希少', 'きしょう', 'Langka'],
    ['希薄', 'きはく', 'Tipis; lemah'],
    ['希少価値', 'きしょうかち', 'Nilai kelangkaan'],
  ],

  欲: [
    ['欲しい', 'ほしい', 'Ingin; menginginkan'],
    ['欲しがる', 'ほしがる', 'Terlihat menginginkan'],
    ['欲', 'よく', 'Keinginan; nafsu'],
    ['食欲', 'しょくよく', 'Nafsu makan'],
    ['欲望', 'よくぼう', 'Hasrat; keinginan'],
    ['物欲', 'ぶつよく', 'Keinginan memiliki barang'],
  ],

  初: [
    ['初め', 'はじめ', 'Awal'],
    ['初めて', 'はじめて', 'Pertama kali'],
    ['初める', 'そめる', 'Mulai; mengawali'],
    ['最初', 'さいしょ', 'Pertama; awal'],
    ['初日', 'しょにち', 'Hari pertama'],
    ['初級', 'しょきゅう', 'Tingkat pemula'],
  ],

  政: [
    ['政治', 'せいじ', 'Politik'],
    ['政府', 'せいふ', 'Pemerintah'],
    ['政治家', 'せいじか', 'Politikus'],
    ['政策', 'せいさく', 'Kebijakan'],
    ['行政', 'ぎょうせい', 'Administrasi pemerintahan'],
    ['政党', 'せいとう', 'Partai politik'],
  ],

  容: [
    ['内容', 'ないよう', 'Isi; konten'],
    ['容易', 'ようい', 'Mudah'],
    ['容器', 'ようき', 'Wadah'],
    ['美容', 'びよう', 'Kecantikan'],
    ['容姿', 'ようし', 'Penampilan fisik'],
    ['許容', 'きょよう', 'Toleransi; penerimaan'],
  ],

  身: [
    ['身', 'み', 'Tubuh; diri'],
    ['自身', 'じしん', 'Diri sendiri'],
    ['身長', 'しんちょう', 'Tinggi badan'],
    ['身体', 'しんたい', 'Tubuh'],
    ['出身', 'しゅっしん', 'Asal daerah'],
    ['身分', 'みぶん', 'Status; kedudukan'],
  ],

  祭: [
    ['祭り', 'まつり', 'Festival'],
    ['祭日', 'さいじつ', 'Hari perayaan'],
    ['文化祭', 'ぶんかさい', 'Festival budaya'],
    ['学園祭', 'がくえんさい', 'Festival sekolah/kampus'],
    ['祭典', 'さいてん', 'Perayaan besar'],
    ['祭る', 'まつる', 'Memuja; mempersembahkan'],
  ],

  値: [
    ['値', 'ね', 'Harga; nilai'],
    ['値段', 'ねだん', 'Harga'],
    ['価値', 'かち', 'Nilai'],
    ['値上がり', 'ねあがり', 'Kenaikan harga'],
    ['値下がり', 'ねさがり', 'Penurunan harga'],
    ['数値', 'すうち', 'Nilai numerik'],
  ],

  船: [
    ['船', 'ふね', 'Kapal'],
    ['船員', 'せんいん', 'Awak kapal'],
    ['船長', 'せんちょう', 'Kapten kapal'],
    ['船便', 'ふなびん', 'Pengiriman melalui kapal'],
    ['客船', 'きゃくせん', 'Kapal penumpang'],
    ['造船', 'ぞうせん', 'Pembuatan kapal'],
  ],

  球: [
    ['球', 'たま', 'Bola'],
    ['野球', 'やきゅう', 'Bisbol'],
    ['地球', 'ちきゅう', 'Bumi'],
    ['電球', 'でんきゅう', 'Bola lampu'],
    ['球場', 'きゅうじょう', 'Stadion bisbol'],
    ['球技', 'きゅうぎ', 'Olahraga bola'],
  ],

  君: [
    ['君', 'きみ', 'Kamu (akrab)'],
    ['君たち', 'きみたち', 'Kalian'],
    ['君主', 'くんしゅ', 'Penguasa; raja'],
    ['諸君', 'しょくん', 'Saudara sekalian'],
    ['君付け', 'くんづけ', 'Penggunaan akhiran -kun'],
  ],

  専: [
    ['専門', 'せんもん', 'Bidang khusus; spesialisasi'],
    ['専門家', 'せんもんか', 'Ahli; spesialis'],
    ['専門学校', 'せんもんがっこう', 'Sekolah kejuruan'],
    ['専用', 'せんよう', 'Khusus; penggunaan khusus'],
    ['専攻', 'せんこう', 'Jurusan; bidang studi'],
    ['専念', 'せんねん', 'Memusatkan perhatian'],
  ],

  熱: [
    ['熱', 'ねつ', 'Panas; demam'],
    ['熱い', 'あつい', 'Panas'],
    ['熱する', 'ねっする', 'Memanaskan'],
    ['熱心', 'ねっしん', 'Antusias; tekun'],
    ['熱帯', 'ねったい', 'Daerah tropis'],
    ['熱中', 'ねっちゅう', 'Terlalu asyik; berkonsentrasi'],
  ],

  貿: [
    ['貿易', 'ぼうえき', 'Perdagangan internasional'],
    ['貿易会社', 'ぼうえきがいしゃ', 'Perusahaan perdagangan'],
    ['貿易港', 'ぼうえきこう', 'Pelabuhan perdagangan'],
    ['貿易黒字', 'ぼうえきくろじ', 'Surplus perdagangan'],
    ['貿易赤字', 'ぼうえきあかじ', 'Defisit perdagangan'],
  ],

  経: [
    ['経つ', 'たつ', 'Berlalu (waktu)'],
    ['経る', 'へる', 'Melewati; mengalami'],
    ['経験', 'けいけん', 'Pengalaman'],
    ['経済', 'けいざい', 'Ekonomi'],
    ['経営', 'けいえい', 'Manajemen'],
    ['経由', 'けいゆ', 'Melalui'],
  ],

  絡: [
    ['絡む', 'からむ', 'Terbelit; terkait'],
    ['絡める', 'からめる', 'Melilitkan'],
    ['連絡', 'れんらく', 'Kontak; komunikasi'],
    ['連絡先', 'れんらくさき', 'Informasi kontak'],
    ['絡み合う', 'からみあう', 'Saling terkait'],
  ],

  情: [
    ['情報', 'じょうほう', 'Informasi'],
    ['事情', 'じじょう', 'Keadaan; situasi'],
    ['感情', 'かんじょう', 'Emosi; perasaan'],
    ['友情', 'ゆうじょう', 'Persahabatan'],
    ['愛情', 'あいじょう', 'Kasih sayang'],
    ['表情', 'ひょうじょう', 'Ekspresi wajah'],
  ],

  個: [
    ['個人', 'こじん', 'Individu'],
    ['個性', 'こせい', 'Kepribadian; karakteristik'],
    ['個別', 'こべつ', 'Masing-masing; individual'],
    ['個室', 'こしつ', 'Kamar pribadi'],
    ['一個', 'いっこ', 'Satu buah'],
    ['個数', 'こすう', 'Jumlah buah'],
  ],

  歯: [
    ['歯', 'は', 'Gigi'],
    ['歯医者', 'はいしゃ', 'Dokter gigi'],
    ['歯ブラシ', 'はぶらし', 'Sikat gigi'],
    ['歯磨き', 'はみがき', 'Menggosok gigi; pasta gigi'],
    ['虫歯', 'むしば', 'Gigi berlubang'],
    ['歯科', 'しか', 'Kedokteran gigi'],
  ],

  復: [
    ['復習', 'ふくしゅう', 'Mengulang pelajaran'],
    ['回復', 'かいふく', 'Pemulihan'],
    ['復活', 'ふっかつ', 'Kebangkitan; kembali hidup'],
    ['復帰', 'ふっき', 'Kembali; pemulihan'],
    ['往復', 'おうふく', 'Pulang-pergi'],
    ['復旧', 'ふっきゅう', 'Pemulihan; perbaikan'],
  ],

  級: [
    ['級', 'きゅう', 'Tingkat; kelas'],
    ['上級', 'じょうきゅう', 'Tingkat lanjutan'],
    ['中級', 'ちゅうきゅう', 'Tingkat menengah'],
    ['初級', 'しょきゅう', 'Tingkat pemula'],
    ['学級', 'がっきゅう', 'Kelas sekolah'],
    ['同級生', 'どうきゅうせい', 'Teman sekelas'],
  ],

  妻: [
    ['妻', 'つま', 'Istri'],
    ['妻子', 'さいし', 'Istri dan anak'],
    ['夫妻', 'ふさい', 'Suami dan istri'],
    ['愛妻', 'あいさい', 'Istri tercinta'],
    ['妻帯', 'さいたい', 'Memiliki istri; menikah'],
  ],

  際: [
    ['際', 'さい', 'Saat; kesempatan'],
    ['実際', 'じっさい', 'Kenyataannya'],
    ['国際', 'こくさい', 'Internasional'],
    ['その際', 'そのさい', 'Pada saat itu'],
    ['交際', 'こうさい', 'Pergaulan; hubungan'],
    ['際立つ', 'きわだつ', 'Menonjol'],
  ],

  類: [
    ['種類', 'しゅるい', 'Jenis; macam'],
    ['人類', 'じんるい', 'Umat manusia'],
    ['分類', 'ぶんるい', 'Klasifikasi'],
    ['書類', 'しょるい', 'Dokumen'],
    ['同類', 'どうるい', 'Golongan yang sama'],
    ['類似', 'るいじ', 'Kemiripan'],
  ],

  適: [
    ['適当', 'てきとう', 'Sesuai; cocok; asal-asalan (tergantung konteks)'],
    ['適切', 'てきせつ', 'Tepat; sesuai'],
    ['適用', 'てきよう', 'Penerapan'],
    ['適応', 'てきおう', 'Adaptasi'],
    ['快適', 'かいてき', 'Nyaman'],
    ['適度', 'てきど', 'Secukupnya; dalam kadar tepat'],
  ],

  課: [
    ['課', 'か', 'Bagian; bab; pelajaran'],
    ['課長', 'かちょう', 'Kepala bagian'],
    ['課題', 'かだい', 'Tugas; masalah'],
    ['課税', 'かぜい', 'Pengenaan pajak'],
    ['日課', 'にっか', 'Rutinitas harian'],
    ['課外活動', 'かがいかつどう', 'Kegiatan ekstrakurikuler'],
  ],

  般: [
    ['一般', 'いっぱん', 'Umum'],
    ['一般的', 'いっぱんてき', 'Secara umum'],
    ['一般人', 'いっぱんじん', 'Masyarakat umum'],
    ['全般', 'ぜんぱん', 'Keseluruhan'],
    ['一般論', 'いっぱんろん', 'Pembahasan umum'],
  ],

  種: [
    ['種', 'たね', 'Benih; biji'],
    ['種類', 'しゅるい', 'Jenis; macam'],
    ['種族', 'しゅぞく', 'Suku; ras'],
    ['人種', 'じんしゅ', 'Ras manusia'],
    ['種目', 'しゅもく', 'Jenis perlombaan'],
    ['品種', 'ひんしゅ', 'Varietas'],
  ],

  額: [
    ['額', 'がく', 'Jumlah; nilai uang'],
    ['金額', 'きんがく', 'Jumlah uang'],
    ['額', 'ひたい', 'Dahi'],
    ['総額', 'そうがく', 'Jumlah keseluruhan'],
    ['高額', 'こうがく', 'Jumlah besar; mahal'],
    ['額縁', 'がくぶち', 'Bingkai gambar'],
  ],

  簡: [
    ['簡単', 'かんたん', 'Mudah; sederhana'],
    ['簡単な', 'かんたんな', 'Sederhana'],
    ['簡潔', 'かんけつ', 'Singkat dan jelas'],
    ['簡易', 'かんい', 'Sederhana'],
    ['簡略', 'かんりゃく', 'Ringkas'],
    ['簡単に', 'かんたんに', 'Dengan mudah'],
  ],

  議: [
    ['会議', 'かいぎ', 'Rapat'],
    ['議員', 'ぎいん', 'Anggota parlemen'],
    ['議会', 'ぎかい', 'Parlemen'],
    ['議論', 'ぎろん', 'Diskusi; perdebatan'],
    ['議長', 'ぎちょう', 'Ketua rapat'],
    ['不思議', 'ふしぎ', 'Aneh; misterius'],
  ],

  最: [
    ['最も', 'もっとも', 'Paling'],
    ['最高', 'さいこう', 'Tertinggi; terbaik'],
    ['最低', 'さいてい', 'Terendah; terburuk'],
    ['最初', 'さいしょ', 'Pertama; awal'],
    ['最後', 'さいご', 'Terakhir'],
    ['最近', 'さいきん', 'Akhir-akhir ini'],
  ],

  達: [
    ['友達', 'ともだち', 'Teman'],
    ['私達', 'わたしたち', 'Kami; kita'],
    ['子供達', 'こどもたち', 'Anak-anak'],
    ['達する', 'たっする', 'Mencapai'],
    ['配達', 'はいたつ', 'Pengantaran'],
    ['到達', 'とうたつ', 'Pencapaian'],
  ],

  職: [
    ['職業', 'しょくぎょう', 'Profesi'],
    ['職場', 'しょくば', 'Tempat kerja'],
    ['就職', 'しゅうしょく', 'Mendapatkan pekerjaan'],
    ['退職', 'たいしょく', 'Pensiun; berhenti kerja'],
    ['職員', 'しょくいん', 'Pegawai'],
    ['転職', 'てんしょく', 'Pindah pekerjaan'],
  ],

  齢: [
    ['年齢', 'ねんれい', 'Usia'],
    ['高齢', 'こうれい', 'Usia lanjut'],
    ['高齢者', 'こうれいしゃ', 'Lansia'],
    ['同年齢', 'どうねんれい', 'Usia yang sama'],
    ['年齢制限', 'ねんれいせいげん', 'Batas usia'],
  ],

  歳: [
    ['一歳', 'いっさい', 'Satu tahun'],
    ['二十歳', 'はたち', 'Dua puluh tahun'],
    ['何歳', 'なんさい', 'Berapa umur'],
    ['歳月', 'さいげつ', 'Waktu; tahun-tahun'],
    ['歳末', 'さいまつ', 'Akhir tahun'],
  ],

  鼻: [
    ['鼻', 'はな', 'Hidung'],
    ['鼻水', 'はなみず', 'Ingus'],
    ['鼻血', 'はなぢ', 'Mimisan'],
    ['鼻声', 'はなごえ', 'Suara sengau'],
    ['鼻歌', 'はなうた', 'Bersenandung'],
    ['鼻先', 'はなさき', 'Ujung hidung'],
  ],

  蔵: [
    ['冷蔵庫', 'れいぞうこ', 'Kulkas'],
    ['倉庫', 'そうこ', 'Gudang'],
    ['貯蔵', 'ちょぞう', 'Penyimpanan'],
    ['蔵書', 'ぞうしょ', 'Koleksi buku'],
    ['蔵元', 'くらもと', 'Produsen sake'],
    ['土蔵', 'どぞう', 'Gudang tradisional Jepang'],
  ],

  草: [
    ['草', 'くさ', 'Rumput'],
    ['草原', 'そうげん', 'Padang rumput'],
    ['草花', 'くさばな', 'Tanaman bunga'],
    ['草取り', 'くさとり', 'Mencabut rumput liar'],
    ['雑草', 'ざっそう', 'Rumput liar'],
    ['草履', 'ぞうり', 'Sandal tradisional Jepang'],
  ],
  //N2
  泳: [
    ['泳ぐ', 'およぐ', 'Berenang'],
    ['水泳', 'すいえい', 'Olahraga renang'],
    ['泳ぎ', 'およぎ', 'Cara berenang'],
    ['平泳ぎ', 'ひらおよぎ', 'Renang gaya dada'],
    ['背泳ぎ', 'せおよぎ', 'Renang gaya punggung'],
  ],

  包: [
    ['包む', 'つつむ', 'Membungkus'],
    ['包装', 'ほうそう', 'Pembungkusan'],
    ['包み', 'つつみ', 'Bungkusan'],
    ['小包', 'こづつみ', 'Paket kecil'],
    ['包丁', 'ほうちょう', 'Pisau dapur'],
    ['包帯', 'ほうたい', 'Perban'],
  ],

  含: [
    ['含む', 'ふくむ', 'Mengandung; termasuk'],
    ['含める', 'ふくめる', 'Memasukkan; menyertakan'],
    ['内容を含む', 'ないようをふくむ', 'Mengandung isi'],
    ['含有', 'がんゆう', 'Kandungan'],
    ['含み', 'ふくみ', 'Makna tersirat; kandungan'],
  ],

  悩: [
    ['悩む', 'なやむ', 'Bingung; merasa kesulitan'],
    ['悩み', 'なやみ', 'Masalah; kekhawatiran'],
    ['悩ます', 'なやます', 'Membuat khawatir'],
    ['悩ましい', 'なやましい', 'Merisaukan; membingungkan'],
    ['苦悩', 'くのう', 'Penderitaan batin'],
  ],

  占: [
    ['占う', 'うらなう', 'Meramal'],
    ['占い', 'うらない', 'Ramalan'],
    ['占い師', 'うらないし', 'Peramal'],
    ['占める', 'しめる', 'Menguasai; menempati'],
    ['占有', 'せんゆう', 'Kepemilikan eksklusif'],
  ],

  任: [
    ['任せる', 'まかせる', 'Mempercayakan; menyerahkan'],
    ['任す', 'まかす', 'Mempercayakan'],
    ['責任', 'せきにん', 'Tanggung jawab'],
    ['任務', 'にんむ', 'Tugas; kewajiban'],
    ['主任', 'しゅにん', 'Kepala; penanggung jawab'],
    ['任命', 'にんめい', 'Pengangkatan jabatan'],
  ],

  拡: [
    ['拡大', 'かくだい', 'Perluasan; pembesaran'],
    ['拡張', 'かくちょう', 'Ekspansi; perluasan'],
    ['拡げる', 'ひろげる', 'Memperluas; membentangkan'],
    ['拡がる', 'ひろがる', 'Meluas; menyebar'],
    ['拡散', 'かくさん', 'Penyebaran; difusi'],
  ],

  浮: [
    ['浮く', 'うく', 'Mengapung'],
    ['浮かぶ', 'うかぶ', 'Terapung; terlintas dalam pikiran'],
    ['浮かべる', 'うかべる', 'Mengapungkan; menampilkan'],
    ['浮き', 'うき', 'Pelampung'],
    ['浮気', 'うわき', 'Selingkuh'],
    ['浮上', 'ふじょう', 'Muncul ke permukaan'],
  ],

  沈: [
    ['沈む', 'しずむ', 'Tenggelam; terbenam'],
    ['沈める', 'しずめる', 'Menenggelamkan'],
    ['沈黙', 'ちんもく', 'Keheningan'],
    ['沈没', 'ちんぼつ', 'Tenggelam; karam'],
    ['沈下', 'ちんか', 'Penurunan; ambles'],
    ['沈む夕日', 'しずむゆうひ', 'Matahari terbenam'],
  ],

  刻: [
    ['刻む', 'きざむ', 'Mengukir; mencincang'],
    ['刻み', 'きざみ', 'Potongan kecil; irisan'],
    ['時刻', 'じこく', 'Waktu; jam'],
    ['深刻', 'しんこく', 'Serius; parah'],
    ['刻々', 'こっこく', 'Dari waktu ke waktu'],
    ['彫刻', 'ちょうこく', 'Patung; seni ukir'],
  ],

  寄: [
    ['寄る', 'よる', 'Mampir; mendekat'],
    ['寄せる', 'よせる', 'Mendekatkan; mengumpulkan'],
    ['寄り道', 'よりみち', 'Mampir dalam perjalanan'],
    ['寄付', 'きふ', 'Sumbangan; donasi'],
    ['寄宿舎', 'きしゅくしゃ', 'Asrama'],
    ['年寄り', 'としより', 'Orang lanjut usia'],
  ],

  担: [
    ['担ぐ', 'かつぐ', 'Memikul; mengangkat di bahu'],
    ['担当', 'たんとう', 'Penanggung jawab'],
    ['担当者', 'たんとうしゃ', 'Orang yang bertanggung jawab'],
    ['負担', 'ふたん', 'Beban; tanggungan'],
    ['担任', 'たんにん', 'Wali kelas'],
    ['担保', 'たんぽ', 'Jaminan'],
  ],

  放: [
    ['放す', 'はなす', 'Melepaskan'],
    ['放れる', 'はなれる', 'Terlepas'],
    ['放送', 'ほうそう', 'Siaran'],
    ['放課後', 'ほうかご', 'Setelah pulang sekolah'],
    ['放置', 'ほうち', 'Membiarkan; menelantarkan'],
    ['解放', 'かいほう', 'Pembebasan'],
  ],

  落: [
    ['落ちる', 'おちる', 'Jatuh; turun'],
    ['落とす', 'おとす', 'Menjatuhkan'],
    ['落ち着く', 'おちつく', 'Tenang; menjadi stabil'],
    ['落第', 'らくだい', 'Tidak lulus'],
    ['落下', 'らっか', 'Jatuh; terjatuh'],
    ['落書き', 'らくがき', 'Coretan; mencoret-coret'],
  ],

  除: [
    ['除く', 'のぞく', 'Menghilangkan; mengecualikan'],
    ['除ける', 'のける', 'Menyingkirkan'],
    ['掃除', 'そうじ', 'Membersihkan; bersih-bersih'],
    ['除外', 'じょがい', 'Pengecualian'],
    ['削除', 'さくじょ', 'Penghapusan'],
    ['解除', 'かいじょ', 'Pembatalan; pelepasan'],
  ],

  貯: [
    ['貯める', 'ためる', 'Menabung; mengumpulkan'],
    ['貯まる', 'たまる', 'Terkumpul'],
    ['貯金', 'ちょきん', 'Tabungan'],
    ['貯金箱', 'ちょきんばこ', 'Celengan'],
    ['貯水', 'ちょすい', 'Penyimpanan air'],
    ['貯蔵', 'ちょぞう', 'Penyimpanan; persediaan'],
  ],

  招: [
    ['招く', 'まねく', 'Mengundang; menyebabkan'],
    ['招待', 'しょうたい', 'Undangan'],
    ['招待状', 'しょうたいじょう', 'Surat undangan'],
    ['招待客', 'しょうたいきゃく', 'Tamu undangan'],
    ['招き猫', 'まねきねこ', 'Patung kucing pembawa keberuntungan'],
    ['招集', 'しょうしゅう', 'Pemanggilan; pengumpulan'],
  ],

  干: [
    ['干す', 'ほす', 'Menjemur'],
    ['干る', 'ひる', 'Menjadi kering (bentuk klasik)'],
    ['干し物', 'ほしもの', 'Barang yang dijemur'],
    ['干物', 'ひもの', 'Ikan kering'],
    ['干渉', 'かんしょう', 'Campur tangan'],
    ['干ばつ', 'かんばつ', 'Kekeringan'],
  ],

  犯: [
    ['犯す', 'おかす', 'Melakukan pelanggaran; melakukan kejahatan'],
    ['犯人', 'はんにん', 'Pelaku kejahatan'],
    ['犯罪', 'はんざい', 'Kejahatan; tindak kriminal'],
    ['犯行', 'はんこう', 'Tindakan kriminal'],
    ['違反', 'いはん', 'Pelanggaran'],
    ['防犯', 'ぼうはん', 'Pencegahan kejahatan'],
  ],

  打: [
    ['打つ', 'うつ', 'Memukul; mengetik'],
    ['打ち合わせ', 'うちあわせ', 'Rapat koordinasi'],
    ['打ち消す', 'うちけす', 'Menyangkal; meniadakan'],
    ['打撃', 'だげき', 'Pukulan; dampak'],
    ['打開', 'だかい', 'Membuka jalan keluar'],
    ['打者', 'だしゃ', 'Pemukul (bisbol)'],
  ],

  迷: [
    ['迷う', 'まよう', 'Bingung; tersesat'],
    ['迷子', 'まいご', 'Anak yang tersesat'],
    ['迷惑', 'めいわく', 'Gangguan; menyusahkan'],
    ['迷信', 'めいしん', 'Takhayul'],
    ['迷路', 'めいろ', 'Labirin'],
    ['迷う道', 'まようみち', 'Jalan yang membingungkan'],
  ],

  囲: [
    ['囲む', 'かこむ', 'Mengelilingi'],
    ['囲う', 'かこう', 'Memagari; mengurung'],
    ['周囲', 'しゅうい', 'Sekeliling'],
    ['範囲', 'はんい', 'Lingkup; jangkauan'],
    ['囲碁', 'いご', 'Permainan Go'],
    ['包囲', 'ほうい', 'Pengepungan'],
  ],

  刺: [
    ['刺す', 'さす', 'Menusuk; menyengat'],
    ['刺さる', 'ささる', 'Tertusuk'],
    ['刺身', 'さしみ', 'Sashimi'],
    ['名刺', 'めいし', 'Kartu nama'],
    ['刺客', 'しかく', 'Pembunuh bayaran'],
    ['刺激', 'しげき', 'Rangsangan; stimulasi'],
  ],

  責: [
    ['責める', 'せめる', 'Menyalahkan; menegur'],
    ['責任', 'せきにん', 'Tanggung jawab'],
    ['責任者', 'せきにんしゃ', 'Orang yang bertanggung jawab'],
    ['責任感', 'せきにんかん', 'Rasa tanggung jawab'],
    ['自責', 'じせき', 'Menyalahkan diri sendiri'],
    ['責務', 'せきむ', 'Kewajiban; tanggung jawab'],
  ],

  余: [
    ['余る', 'あまる', 'Tersisa; berlebih'],
    ['余す', 'あます', 'Menyisakan'],
    ['余計', 'よけい', 'Berlebihan; tidak perlu'],
    ['余裕', 'よゆう', 'Kelonggaran; waktu luang'],
    ['余分', 'よぶん', 'Kelebihan; tambahan'],
    ['残り', 'のこり', 'Sisa'],
  ],
  争: [
    ['争う', 'あらそう', 'Bertengkar; bersaing'],
    ['争い', 'あらそい', 'Pertengkaran; perselisihan'],
    ['戦争', 'せんそう', 'Perang'],
    ['競争', 'きょうそう', 'Persaingan'],
    ['争点', 'そうてん', 'Pokok perselisihan'],
    ['紛争', 'ふんそう', 'Konflik; sengketa'],
  ],

  拝: [
    ['拝む', 'おがむ', 'Menyembah; berdoa'],
    ['拝見', 'はいけん', 'Melihat (bentuk hormat)'],
    ['拝借', 'はいしゃく', 'Meminjam (bentuk hormat)'],
    ['拝礼', 'はいれい', 'Memberi hormat; membungkuk'],
    ['参拝', 'さんぱい', 'Berziarah; berdoa di kuil'],
    ['拝啓', 'はいけい', 'Dengan hormat (pembuka surat)'],
  ],

  突: [
    ['突く', 'つく', 'Menusuk; mendorong'],
    ['突き当たり', 'つきあたり', 'Ujung jalan'],
    ['突然', 'とつぜん', 'Tiba-tiba'],
    ['突入', 'とつにゅう', 'Menyerbu; memasuki'],
    ['衝突', 'しょうとつ', 'Tabrakan; benturan'],
    ['突破', 'とっぱ', 'Menerobos; menembus'],
  ],

  伸: [
    ['伸びる', 'のびる', 'Memanjang; bertambah'],
    ['伸ばす', 'のばす', 'Memanjangkan; memperpanjang'],
    ['伸び', 'のび', 'Pertumbuhan; perkembangan'],
    ['伸縮', 'しんしゅく', 'Mengembang dan menyusut'],
    ['背伸び', 'せのび', 'Berjinjit; memaksakan diri'],
    ['成長を伸ばす', 'せいちょうをのばす', 'Meningkatkan perkembangan'],
  ],

  延: [
    ['延びる', 'のびる', 'Diperpanjang; tertunda'],
    ['延ばす', 'のばす', 'Memperpanjang; menunda'],
    ['延期', 'えんき', 'Penundaan'],
    ['延長', 'えんちょう', 'Perpanjangan'],
    ['延滞', 'えんたい', 'Keterlambatan pembayaran'],
    ['延々', 'えんえん', 'Terus-menerus; tanpa akhir'],
  ],

  埋: [
    ['埋める', 'うめる', 'Mengubur; mengisi'],
    ['埋まる', 'うまる', 'Tertimbun; terisi'],
    ['埋め立てる', 'うめたてる', 'Menguruk; mereklamasi'],
    ['埋め合わせ', 'うめあわせ', 'Kompensasi; penggantian'],
    ['埋蔵', 'まいぞう', 'Terpendam; tersimpan di dalam tanah'],
    ['埋葬', 'まいそう', 'Pemakaman; penguburan'],
  ],

  祈: [
    ['祈る', 'いのる', 'Berdoa'],
    ['祈り', 'いのり', 'Doa'],
    ['祈願', 'きがん', 'Permohonan dalam doa'],
    ['祈祷', 'きとう', 'Doa; ritual keagamaan'],
    ['祈念', 'きねん', 'Mendoakan; memohon dengan sungguh-sungguh'],
  ],

  効: [
    ['効く', 'きく', 'Berkhasiat; efektif'],
    ['効果', 'こうか', 'Efek; hasil'],
    ['効率', 'こうりつ', 'Efisiensi'],
    ['有効', 'ゆうこう', 'Berlaku; efektif'],
    ['無効', 'むこう', 'Tidak berlaku; tidak sah'],
    ['効力', 'こうりょく', 'Daya guna; kekuatan hukum'],
  ],

  依: [
    ['依る', 'よる', 'Bergantung pada; berdasarkan'],
    ['依頼', 'いらい', 'Permintaan; permohonan'],
    ['依頼する', 'いらいする', 'Meminta; memohon'],
    ['依存', 'いぞん', 'Ketergantungan'],
    ['依然', 'いぜん', 'Masih tetap; seperti sebelumnya'],
    ['依存症', 'いぞんしょう', 'Kecanduan; gangguan ketergantungan'],
  ],

  似: [
    ['似る', 'にる', 'Mirip; menyerupai'],
    ['似合う', 'にあう', 'Cocok; serasi'],
    ['似せる', 'にせる', 'Membuat menyerupai'],
    ['似顔絵', 'にがおえ', 'Gambar potret wajah'],
    ['類似', 'るいじ', 'Kemiripan'],
    ['そっくり', 'そっくり', 'Sangat mirip; persis'],
  ],

  応: [
    ['応える', 'こたえる', 'Menanggapi; memenuhi harapan'],
    ['応じる', 'おうじる', 'Merespons; menanggapi'],
    ['応援', 'おうえん', 'Dukungan; memberi semangat'],
    ['反応', 'はんのう', 'Reaksi; respons'],
    ['対応', 'たいおう', 'Penanganan; respons'],
    ['応募', 'おうぼ', 'Pendaftaran; lamaran'],
  ],

  承: [
    ['承る', 'うけたまわる', 'Menerima; mendengar (bentuk sangat sopan)'],
    ['承知', 'しょうち', 'Mengerti; memahami'],
    ['承知する', 'しょうちする', 'Memahami; menyetujui'],
    ['承認', 'しょうにん', 'Persetujuan; pengakuan'],
    ['了承', 'りょうしょう', 'Persetujuan; pemahaman'],
    ['継承', 'けいしょう', 'Pewarisan; penerusan'],
  ],

  枯: [
    ['枯れる', 'かれる', 'Lay u; mengering; mati (tumbuhan)'],
    ['枯らす', 'からす', 'Membuat layu; mengeringkan'],
    ['枯れ葉', 'かれは', 'Daun kering'],
    ['枯れ木', 'かれき', 'Pohon mati; kayu kering'],
    ['枯草', 'かれくさ', 'Rumput kering'],
    ['枯渇', 'こかつ', 'Kekeringan; kehabisan sumber daya'],
  ],

  巻: [
    ['巻く', 'まく', 'Menggulung; melilit'],
    ['巻き込む', 'まきこむ', 'Melibatkan; menyeret masuk'],
    ['巻き戻す', 'まきもどす', 'Memutar kembali'],
    ['一巻', 'いっかん', 'Jilid pertama'],
    ['巻物', 'まきもの', 'Gulungan tulisan'],
    ['渦巻き', 'うずまき', 'Pusaran; spiral'],
  ],

  抱: [
    ['抱く', 'だく', 'Memeluk; menggendong'],
    ['抱える', 'かかえる', 'Memegang; menanggung'],
    ['抱きしめる', 'だきしめる', 'Memeluk erat'],
    ['抱き合う', 'だきあう', 'Saling berpelukan'],
    ['抱負', 'ほうふ', 'Cita-cita; ambisi'],
    ['抱擁', 'ほうよう', 'Pelukan'],
  ],

  照: [
    ['照る', 'てる', 'Bersinar'],
    ['照らす', 'てらす', 'Menyinari'],
    ['照れる', 'てれる', 'Merasa malu'],
    ['照明', 'しょうめい', 'Penerangan; pencahayaan'],
    ['照会', 'しょうかい', 'Pemeriksaan; permintaan informasi'],
    ['参照', 'さんしょう', 'Referensi; rujukan'],
  ],

  採: [
    ['採る', 'とる', 'Mengambil; memetik; mengadopsi'],
    ['採用', 'さいよう', 'Penerimaan; perekrutan'],
    ['採点', 'さいてん', 'Penilaian; pemberian nilai'],
    ['採集', 'さいしゅう', 'Pengumpulan; koleksi'],
    ['採決', 'さいけつ', 'Pengambilan keputusan melalui pemungutan suara'],
    ['採算', 'さいさん', 'Perhitungan keuntungan dan kerugian'],
  ],
  逃: [
    ['逃げる', 'にげる', 'Melarikan diri'],
    ['逃がす', 'にがす', 'Melepaskan; membiarkan lolos'],
    ['逃げ出す', 'にげだす', 'Melarikan diri'],
    ['逃げ道', 'にげみち', 'Jalan untuk melarikan diri'],
    ['逃亡', 'とうぼう', 'Pelarian'],
    ['逃走', 'とうそう', 'Melarikan diri'],
  ],

  設: [
    ['設ける', 'もうける', 'Mendirikan; menyediakan'],
    ['設置', 'せっち', 'Pemasangan; penempatan'],
    ['設定', 'せってい', 'Pengaturan; penetapan'],
    ['設計', 'せっけい', 'Desain; perancangan'],
    ['施設', 'しせつ', 'Fasilitas'],
    ['建設', 'けんせつ', 'Pembangunan'],
  ],

  拾: [
    ['拾う', 'ひろう', 'Memungut; mengambil'],
    ['拾い物', 'ひろいもの', 'Barang temuan'],
    ['拾得', 'しゅうとく', 'Penemuan barang'],
    ['拾得物', 'しゅうとくぶつ', 'Barang yang ditemukan'],
    ['拾い集める', 'ひろいあつめる', 'Mengumpulkan dengan memungut'],
  ],

  得: [
    ['得る', 'える', 'Memperoleh; mendapatkan'],
    ['得意', 'とくい', 'Keahlian; mahir'],
    ['得点', 'とくてん', 'Nilai; skor'],
    ['得意先', 'とくいさき', 'Pelanggan tetap'],
    ['納得', 'なっとく', 'Pemahaman; penerimaan'],
    ['所得', 'しょとく', 'Pendapatan'],
  ],

  掃: [
    ['掃く', 'はく', 'Menyapu'],
    ['掃除', 'そうじ', 'Membersihkan'],
    ['掃除機', 'そうじき', 'Penyedot debu'],
    ['掃除する', 'そうじする', 'Membersihkan'],
    ['清掃', 'せいそう', 'Pembersihan'],
    ['掃除当番', 'そうじとうばん', 'Petugas piket kebersihan'],
  ],

  修: [
    ['修める', 'おさめる', 'Mempelajari; menguasai'],
    ['修理', 'しゅうり', 'Perbaikan'],
    ['修正', 'しゅうせい', 'Revisi; koreksi'],
    ['修学旅行', 'しゅうがくりょこう', 'Karyawisata sekolah'],
    ['研修', 'けんしゅう', 'Pelatihan'],
    ['修士', 'しゅうし', 'Gelar magister'],
  ],

  頂: [
    ['頂く', 'いただく', 'Menerima; makan (bahasa sopan)'],
    ['頂上', 'ちょうじょう', 'Puncak'],
    ['山頂', 'さんちょう', 'Puncak gunung'],
    ['頂点', 'ちょうてん', 'Titik tertinggi; puncak'],
    ['頂戴', 'ちょうだい', 'Menerima; meminta (bahasa sopan)'],
    ['頂き物', 'いただきもの', 'Hadiah atau pemberian yang diterima'],
  ],

  取: [
    ['取る', 'とる', 'Mengambil'],
    ['取り出す', 'とりだす', 'Mengeluarkan; mengambil keluar'],
    ['取り替える', 'とりかえる', 'Mengganti'],
    ['受け取る', 'うけとる', 'Menerima'],
    ['取り消す', 'とりけす', 'Membatalkan'],
    ['取引', 'とりひき', 'Transaksi; perdagangan'],
  ],
  封: [
    ['封じる', 'ふうじる', 'Menyegel; menutup'],
    ['封筒', 'ふうとう', 'Amplop'],
    ['封切り', 'ふうぎり', 'Pemutaran perdana film'],
    ['封印', 'ふういん', 'Segel'],
    ['封鎖', 'ふうさ', 'Blokade; penutupan'],
    ['開封', 'かいふう', 'Membuka segel atau amplop'],
  ],

  刷: [
    ['刷る', 'する', 'Mencetak'],
    ['印刷', 'いんさつ', 'Percetakan'],
    ['印刷物', 'いんさつぶつ', 'Barang cetakan'],
    ['刷り直す', 'すりなおす', 'Mencetak ulang'],
    ['増刷', 'ぞうさつ', 'Cetak ulang; penambahan cetakan'],
    ['刷り込み', 'すりこみ', 'Pencetakan; penanaman pengaruh'],
  ],

  届: [
    ['届ける', 'とどける', 'Mengantarkan; menyampaikan'],
    ['届く', 'とどく', 'Sampai; tiba'],
    ['届け出', 'とどけで', 'Pemberitahuan resmi'],
    ['届け出る', 'とどけでる', 'Melaporkan secara resmi'],
    ['届出書', 'とどけでしょ', 'Formulir pemberitahuan'],
    ['未届け', 'みとどけ', 'Belum dilaporkan'],
  ],

  装: [
    ['装う', 'よそおう', 'Berpakaian; berpura-pura'],
    ['服装', 'ふくそう', 'Pakaian; penampilan'],
    ['衣装', 'いしょう', 'Kostum; busana'],
    ['装置', 'そうち', 'Peralatan; perangkat'],
    ['包装', 'ほうそう', 'Pembungkusan'],
    ['化粧', 'けしょう', 'Tata rias'],
  ],

  異: [
    ['異なる', 'ことなる', 'Berbeda'],
    ['異常', 'いじょう', 'Tidak normal; abnormal'],
    ['異文化', 'いぶんか', 'Budaya yang berbeda'],
    ['異国', 'いこく', 'Negeri asing'],
    ['異性', 'いせい', 'Lawan jenis'],
    ['異議', 'いぎ', 'Keberatan; sanggahan'],
  ],

  殺: [
    ['殺す', 'ころす', 'Membunuh'],
    ['殺人', 'さつじん', 'Pembunuhan'],
    ['殺人者', 'さつじんしゃ', 'Pembunuh'],
    ['殺害', 'さつがい', 'Pembunuhan'],
    ['自殺', 'じさつ', 'Bunuh diri'],
    ['殺虫剤', 'さっちゅうざい', 'Obat pembasmi serangga'],
  ],

  燃: [
    ['燃える', 'もえる', 'Terbakar'],
    ['燃やす', 'もやす', 'Membakar'],
    ['燃料', 'ねんりょう', 'Bahan bakar'],
    ['燃焼', 'ねんしょう', 'Pembakaran'],
    ['燃費', 'ねんぴ', 'Efisiensi bahan bakar'],
    ['不燃物', 'ふねんぶつ', 'Benda yang tidak mudah terbakar'],
  ],

  抜: [
    ['抜く', 'ぬく', 'Mencabut; mengeluarkan'],
    ['抜ける', 'ぬける', 'Terlepas; tercabut'],
    ['抜け出す', 'ぬけだす', 'Menyelinap keluar'],
    ['抜き打ち', 'ぬきうち', 'Mendadak; tanpa pemberitahuan'],
    ['抜群', 'ばつぐん', 'Luar biasa; unggul'],
    ['手抜き', 'てぬき', 'Pengerjaan asal-asalan'],
  ],

  到: [
    ['到着', 'とうちゃく', 'Kedatangan; tiba'],
    ['到達', 'とうたつ', 'Pencapaian; mencapai'],
    ['到来', 'とうらい', 'Kedatangan; datangnya'],
    ['到着駅', 'とうちゃくえき', 'Stasiun tujuan'],
    ['殺到', 'さっとう', 'Berdatangan secara berbondong-bondong'],
    ['到底', 'とうてい', 'Sama sekali (biasanya dalam kalimat negatif)'],
  ],

  追: [
    ['追う', 'おう', 'Mengejar'],
    ['追いかける', 'おいかける', 'Mengejar'],
    ['追いつく', 'おいつく', 'Menyusul'],
    ['追い越す', 'おいこす', 'Mendahului'],
    ['追伸', 'ついしん', 'Catatan tambahan dalam surat'],
    ['追跡', 'ついせき', 'Pelacakan'],
  ],

  塗: [
    ['塗る', 'ぬる', 'Mengecat; mengoleskan'],
    ['塗り薬', 'ぬりぐすり', 'Obat oles'],
    ['塗装', 'とそう', 'Pengecatan'],
    ['塗料', 'とりょう', 'Cat; bahan pelapis'],
    ['塗り絵', 'ぬりえ', 'Buku gambar untuk diwarnai'],
    ['塗り替える', 'ぬりかえる', 'Mengecat ulang'],
  ],

  紹: [
    ['紹介', 'しょうかい', 'Perkenalan'],
    ['紹介する', 'しょうかいする', 'Memperkenalkan'],
    ['自己紹介', 'じこしょうかい', 'Perkenalan diri'],
    ['紹介状', 'しょうかいじょう', 'Surat pengantar'],
    ['紹介者', 'しょうかいしゃ', 'Orang yang memperkenalkan'],
    ['紹介記事', 'しょうかいきじ', 'Artikel pengenalan'],
  ],

  越: [
    ['越える', 'こえる', 'Melewati; melampaui'],
    ['越す', 'こす', 'Pindah; melewati'],
    ['引っ越す', 'ひっこす', 'Pindah rumah'],
    ['引っ越し', 'ひっこし', 'Kepindahan rumah'],
    ['乗り越える', 'のりこえる', 'Mengatasi; melewati rintangan'],
    ['年越し', 'としこし', 'Pergantian tahun'],
  ],
  憎: [
    ['憎む', 'にくむ', 'Membenci'],
    ['憎しみ', 'にくしみ', 'Kebencian'],
    ['憎い', 'にくい', 'Dibenci; menyebalkan'],
    ['憎らしい', 'にくらしい', 'Menyebalkan; menjengkelkan'],
    ['憎悪', 'ぞうお', 'Kebencian mendalam'],
  ],

  張: [
    ['張る', 'はる', 'Meregangkan; menempelkan'],
    ['張り紙', 'はりがみ', 'Pengumuman yang ditempel'],
    ['頑張る', 'がんばる', 'Berusaha keras; pantang menyerah'],
    ['緊張', 'きんちょう', 'Ketegangan; gugup'],
    ['主張', 'しゅちょう', 'Pendapat; pernyataan'],
    ['出張', 'しゅっちょう', 'Perjalanan dinas'],
  ],

  退: [
    ['退く', 'しりぞく', 'Mundur; mengundurkan diri'],
    ['退ける', 'しりぞける', 'Menyingkirkan; menolak'],
    ['退院', 'たいいん', 'Keluar dari rumah sakit'],
    ['退学', 'たいがく', 'Keluar dari sekolah'],
    ['退職', 'たいしょく', 'Berhenti bekerja; pensiun'],
    ['引退', 'いんたい', 'Pensiun dari kegiatan atau karier'],
  ],

  暮: [
    ['暮らす', 'くらす', 'Hidup; menjalani kehidupan'],
    ['暮らし', 'くらし', 'Kehidupan sehari-hari'],
    ['暮れる', 'くれる', 'Menjadi gelap; berakhir'],
    ['夕暮れ', 'ゆうぐれ', 'Senja'],
    ['年暮れ', 'としくれ', 'Akhir tahun'],
    ['一人暮らし', 'ひとりぐらし', 'Hidup sendirian'],
  ],

  誤: [
    ['誤る', 'あやまる', 'Melakukan kesalahan'],
    ['誤り', 'あやまり', 'Kesalahan'],
    ['誤解', 'ごかい', 'Kesalahpahaman'],
    ['誤字', 'ごじ', 'Salah penulisan huruf'],
    ['誤差', 'ごさ', 'Kesalahan pengukuran; selisih'],
    ['誤報', 'ごほう', 'Berita yang salah'],
  ],

  咲: [
    ['咲く', 'さく', 'Mekar'],
    ['咲き始める', 'さきはじめる', 'Mulai mekar'],
    ['咲き終わる', 'さきおわる', 'Selesai mekar'],
    ['咲き誇る', 'さきほこる', 'Mekar dengan indah'],
    ['早咲き', 'はやざき', 'Mekar lebih awal'],
  ],

  浴: [
    ['浴びる', 'あびる', 'Mandi; terkena pancaran'],
    ['浴びせる', 'あびせる', 'Menyiramkan; melontarkan'],
    ['入浴', 'にゅうよく', 'Mandi; berendam'],
    ['浴室', 'よくしつ', 'Kamar mandi'],
    ['浴衣', 'ゆかた', 'Yukata; kimono musim panas'],
    ['日光浴', 'にっこうよく', 'Berjemur'],
  ],

  栄: [
    ['栄える', 'さかえる', 'Makmur; berkembang'],
    ['栄え', 'さかえ', 'Kemakmuran; kejayaan'],
    ['栄養', 'えいよう', 'Nutrisi; gizi'],
    ['栄養士', 'えいようし', 'Ahli gizi'],
    ['栄光', 'えいこう', 'Kemuliaan; kejayaan'],
    ['繁栄', 'はんえい', 'Kemakmuran; kemajuan'],
  ],

  務: [
    ['務める', 'つとめる', 'Menjabat; menjalankan tugas'],
    ['務まる', 'つとまる', 'Mampu menjalankan tugas'],
    ['事務', 'じむ', 'Administrasi; pekerjaan kantor'],
    ['事務所', 'じむしょ', 'Kantor'],
    ['勤務', 'きんむ', 'Bekerja; dinas'],
    ['義務', 'ぎむ', 'Kewajiban'],
  ],

  傾: [
    ['傾く', 'かたむく', 'Miring; condong'],
    ['傾ける', 'かたむける', 'Memiringkan'],
    ['傾向', 'けいこう', 'Kecenderungan; tren'],
    ['傾斜', 'けいしゃ', 'Kemiringan; lereng'],
    ['傾聴', 'けいちょう', 'Mendengarkan dengan saksama'],
    ['右に傾く', 'みぎにかたむく', 'Miring ke kanan'],
  ],

  溶: [
    ['溶ける', 'とける', 'Mencair; larut'],
    ['溶かす', 'とかす', 'Mencairkan; melarutkan'],
    ['溶かる', 'とける', 'Mencair (bentuk tidak baku)'],
    ['溶け込む', 'とけこむ', 'Melebur; menyatu'],
    ['溶液', 'ようえき', 'Larutan'],
    ['溶岩', 'ようがん', 'Lava'],
  ],

  震: [
    ['震える', 'ふるえる', 'Bergetar; gemetar'],
    ['震わせる', 'ふるわせる', 'Membuat bergetar'],
    ['地震', 'じしん', 'Gempa bumi'],
    ['震度', 'しんど', 'Skala intensitas gempa'],
    ['震災', 'しんさい', 'Bencana gempa bumi'],
    ['余震', 'よしん', 'Gempa susulan'],
  ],

  固: [
    ['固い', 'かたい', 'Keras; kuat'],
    ['固まる', 'かたまる', 'Mengeras; membeku'],
    ['固める', 'かためる', 'Mengeraskan; memperkuat'],
    ['固体', 'こたい', 'Benda padat'],
    ['固定', 'こてい', 'Penetapan; penguncian'],
    ['頑固', 'がんこ', 'Keras kepala'],
  ],

  沸: [
    ['沸く', 'わく', 'Mendidih'],
    ['沸かす', 'わかす', 'Merebus'],
    ['沸騰', 'ふっとう', 'Pendidihan'],
    ['沸点', 'ふってん', 'Titik didih'],
    ['湯を沸かす', 'ゆをわかす', 'Merebus air'],
  ],

  迎: [
    ['迎える', 'むかえる', 'Menyambut; menjemput'],
    ['出迎える', 'でむかえる', 'Menyambut kedatangan'],
    ['迎え', 'むかえ', 'Jemputan'],
    ['歓迎', 'かんげい', 'Sambutan; selamat datang'],
    ['送迎', 'そうげい', 'Antar-jemput'],
    ['迎春', 'げいしゅん', 'Menyambut tahun baru'],
  ],

  敗: [
    ['敗れる', 'やぶれる', 'Kalah'],
    ['敗北', 'はいぼく', 'Kekalahan'],
    ['失敗', 'しっぱい', 'Kegagalan'],
    ['敗戦', 'はいせん', 'Kekalahan dalam perang atau pertandingan'],
    ['勝敗', 'しょうはい', 'Menang atau kalah'],
    ['敗者', 'はいしゃ', 'Pihak yang kalah'],
  ],

  盗: [
    ['盗む', 'ぬすむ', 'Mencuri'],
    ['盗み', 'ぬすみ', 'Pencurian'],
    ['盗難', 'とうなん', 'Kejadian pencurian'],
    ['盗難届', 'とうなんとどけ', 'Laporan kehilangan akibat pencurian'],
    ['強盗', 'ごうとう', 'Perampokan'],
    ['盗作', 'とうさく', 'Plagiarisme'],
  ],

  乱: [
    ['乱れる', 'みだれる', 'Menjadi kacau; tidak teratur'],
    ['乱す', 'みだす', 'Mengacaukan'],
    ['混乱', 'こんらん', 'Kekacauan; kebingungan'],
    ['乱暴', 'らんぼう', 'Kasar; brutal'],
    ['乱用', 'らんよう', 'Penyalahgunaan'],
    ['反乱', 'はんらん', 'Pemberontakan'],
  ],

  叫: [
    ['叫ぶ', 'さけぶ', 'Berteriak'],
    ['叫び', 'さけび', 'Teriakan'],
    ['叫び声', 'さけびごえ', 'Suara teriakan'],
    ['絶叫', 'ぜっきょう', 'Teriakan keras'],
    ['悲鳴を上げる', 'ひめいをあげる', 'Menjerit'],
  ],

  判: [
    ['判定', 'はんてい', 'Penilaian; keputusan'],
    ['判断', 'はんだん', 'Pertimbangan; penilaian'],
    ['判子', 'はんこ', 'Stempel pribadi'],
    ['判明', 'はんめい', 'Menjadi jelas; terungkap'],
    ['裁判', 'さいばん', 'Pengadilan'],
    ['評判', 'ひょうばん', 'Reputasi; kabar'],
  ],

  測: [
    ['測る', 'はかる', 'Mengukur'],
    ['測定', 'そくてい', 'Pengukuran'],
    ['測量', 'そくりょう', 'Survei; pengukuran lahan'],
    ['予測', 'よそく', 'Prediksi; perkiraan'],
    ['観測', 'かんそく', 'Pengamatan; observasi'],
    ['測定器', 'そくていき', 'Alat ukur'],
  ],

  給: [
    ['給料', 'きゅうりょう', 'Gaji'],
    ['給食', 'きゅうしょく', 'Makanan sekolah'],
    ['給水', 'きゅうすい', 'Pasokan air'],
    ['給油', 'きゅうゆ', 'Pengisian bahan bakar'],
    ['支給', 'しきゅう', 'Pemberian; pembayaran'],
    ['供給', 'きょうきゅう', 'Pasokan; penyediaan'],
  ],

  探: [
    ['探す', 'さがす', 'Mencari'],
    ['探る', 'さぐる', 'Menyelidiki; meraba'],
    ['探し物', 'さがしもの', 'Barang yang sedang dicari'],
    ['探検', 'たんけん', 'Penjelajahan'],
    ['探偵', 'たんてい', 'Detektif'],
    ['探索', 'たんさく', 'Pencarian; penelusuran'],
  ],

  居: [
    ['居る', 'いる', 'Ada; berada (untuk makhluk hidup)'],
    ['居間', 'いま', 'Ruang keluarga'],
    ['居酒屋', 'いざかや', 'Tempat makan dan minum bergaya Jepang'],
    ['居眠り', 'いねむり', 'Tertidur sambil duduk'],
    ['同居', 'どうきょ', 'Tinggal bersama'],
    ['転居', 'てんきょ', 'Pindah tempat tinggal'],
  ],

  昇: [
    ['昇る', 'のぼる', 'Naik; terbit'],
    ['上昇', 'じょうしょう', 'Kenaikan'],
    ['昇進', 'しょうしん', 'Promosi jabatan'],
    ['昇給', 'しょうきゅう', 'Kenaikan gaji'],
    ['昇格', 'しょうかく', 'Kenaikan pangkat'],
    ['日の出', 'ひので', 'Matahari terbit'],
  ],

  批: [
    ['批判', 'ひはん', 'Kritik'],
    ['批評', 'ひひょう', 'Ulasan; kritik'],
    ['批判的', 'ひはんてき', 'Kritis'],
    ['批評家', 'ひひょうか', 'Kritikus'],
    ['批難', 'ひなん', 'Kecaman; celaan'],
  ],

  評: [
    ['評価', 'ひょうか', 'Penilaian; evaluasi'],
    ['評判', 'ひょうばん', 'Reputasi'],
    ['評判がいい', 'ひょうばんがいい', 'Memiliki reputasi baik'],
    ['批評', 'ひひょう', 'Kritik; ulasan'],
    ['好評', 'こうひょう', 'Sambutan baik; ulasan positif'],
    ['不評', 'ふひょう', 'Penilaian buruk; tidak populer'],
  ],

  訪: [
    ['訪ねる', 'たずねる', 'Mengunjungi'],
    ['訪れる', 'おとずれる', 'Berkunjung; datang'],
    ['訪問', 'ほうもん', 'Kunjungan'],
    ['訪問者', 'ほうもんしゃ', 'Pengunjung'],
    ['訪日', 'ほうにち', 'Kunjungan ke Jepang'],
    ['来訪', 'らいほう', 'Kedatangan pengunjung'],
  ],

  蒸: [
    ['蒸す', 'むす', 'Mengukus'],
    ['蒸れる', 'むれる', 'Menjadi pengap; lembap'],
    ['蒸し暑い', 'むしあつい', 'Panas dan lembap'],
    ['蒸気', 'じょうき', 'Uap'],
    ['蒸発', 'じょうはつ', 'Penguapan'],
    ['蒸し器', 'むしき', 'Alat pengukus'],
  ],

  耕: [
    ['耕す', 'たがやす', 'Membajak; mengolah tanah'],
    ['耕地', 'こうち', 'Lahan pertanian'],
    ['耕作', 'こうさく', 'Pengolahan tanah; bercocok tanam'],
    ['農耕', 'のうこう', 'Pertanian'],
    ['耕作者', 'こうさくしゃ', 'Petani penggarap'],
  ],

  掘: [
    ['掘る', 'ほる', 'Menggali'],
    ['掘り出す', 'ほりだす', 'Menggali dan mengeluarkan'],
    ['掘り返す', 'ほりかえす', 'Menggali kembali'],
    ['穴掘り', 'あなほり', 'Penggalian lubang'],
    ['発掘', 'はっくつ', 'Penggalian; ekskavasi'],
    ['採掘', 'さいくつ', 'Penambangan'],
  ],

  植: [
    ['植える', 'うえる', 'Menanam'],
    ['植わる', 'うわる', 'Ditanam; tertanam'],
    ['植物', 'しょくぶつ', 'Tumbuhan'],
    ['植木', 'うえき', 'Tanaman hias'],
    ['植木鉢', 'うえきばち', 'Pot tanaman'],
    ['植民地', 'しょくみんち', 'Koloni'],
  ],

  倒: [
    ['倒れる', 'たおれる', 'Jatuh; roboh'],
    ['倒す', 'たおす', 'Menjatuhkan; merobohkan'],
    ['倒産', 'とうさん', 'Kebangkrutan perusahaan'],
    ['面倒', 'めんどう', 'Merepotkan; menyusahkan'],
    ['転倒', 'てんとう', 'Terjatuh; terguling'],
    ['圧倒', 'あっとう', 'Mengalahkan secara telak; mengungguli'],
  ],

  敬: [
    ['敬う', 'うやまう', 'Menghormati'],
    ['敬語', 'けいご', 'Bahasa hormat'],
    ['尊敬', 'そんけい', 'Rasa hormat'],
    ['敬意', 'けいい', 'Penghormatan'],
    ['敬礼', 'けいれい', 'Memberi hormat'],
    ['失敬', 'しっけい', 'Permisi; kurang sopan'],
  ],

  詰: [
    ['詰める', 'つめる', 'Memasukkan; memadatkan'],
    ['詰まる', 'つまる', 'Tersumbat; penuh'],
    ['詰め込む', 'つめこむ', 'Memasukkan sebanyak-banyaknya'],
    ['詰め所', 'つめしょ', 'Pos jaga'],
    ['缶詰', 'かんづめ', 'Makanan kaleng'],
    ['質問攻め', 'しつもんぜめ', 'Dihujani pertanyaan'],
  ],

  述: [
    ['述べる', 'のべる', 'Menyatakan; mengemukakan'],
    ['述語', 'じゅつご', 'Predikat'],
    ['記述', 'きじゅつ', 'Deskripsi; uraian tertulis'],
    ['口述', 'こうじゅつ', 'Penjelasan lisan'],
    ['前述', 'ぜんじゅつ', 'Yang telah disebutkan sebelumnya'],
    ['陳述', 'ちんじゅつ', 'Pernyataan; kesaksian'],
  ],

  演: [
    ['演じる', 'えんじる', 'Memerankan; berakting'],
    ['演技', 'えんぎ', 'Akting'],
    ['演奏', 'えんそう', 'Pertunjukan musik'],
    ['演説', 'えんぜつ', 'Pidato'],
    ['講演', 'こうえん', 'Ceramah'],
    ['出演', 'しゅつえん', 'Tampil; berpartisipasi dalam pertunjukan'],
  ],

  捕: [
    ['捕まえる', 'つかまえる', 'Menangkap'],
    ['捕まる', 'つかまる', 'Tertangkap'],
    ['捕る', 'とる', 'Menangkap; memburu'],
    ['捕虜', 'ほりょ', 'Tawanan perang'],
    ['逮捕', 'たいほ', 'Penangkapan'],
    ['捕獲', 'ほかく', 'Penangkapan; penjeratan'],
  ],

  補: [
    ['補う', 'おぎなう', 'Melengkapi; menutupi kekurangan'],
    ['補助', 'ほじょ', 'Bantuan; dukungan'],
    ['補足', 'ほそく', 'Tambahan; pelengkap'],
    ['補習', 'ほしゅう', 'Pelajaran tambahan'],
    ['補充', 'ほじゅう', 'Pengisian kembali'],
    ['候補', 'こうほ', 'Kandidat; calon'],
  ],

  置: [
    ['置く', 'おく', 'Meletakkan'],
    ['置き場', 'おきば', 'Tempat meletakkan barang'],
    ['置き忘れる', 'おきわすれる', 'Tertinggal karena lupa meletakkan'],
    ['位置', 'いち', 'Posisi; letak'],
    ['設置', 'せっち', 'Pemasangan; penempatan'],
    ['放置', 'ほうち', 'Membiarkan; menelantarkan'],
  ],
  頼: [
    ['頼む', 'たのむ', 'Meminta; memohon'],
    ['頼る', 'たよる', 'Mengandalkan; bergantung'],
    ['頼もしい', 'たのもしい', 'Dapat diandalkan'],
    ['お願い', 'おねがい', 'Permohonan; permintaan'],
    ['依頼', 'いらい', 'Permintaan; pesanan'],
    ['信頼', 'しんらい', 'Kepercayaan'],
  ],

  踊: [
    ['踊る', 'おどる', 'Menari'],
    ['踊り', 'おどり', 'Tarian'],
    ['踊り場', 'おどりば', 'Tempat menari; bordes tangga'],
    ['踊り子', 'おどりこ', 'Penari'],
    ['盆踊り', 'ぼんおどり', 'Tarian festival Obon'],
    ['舞踊', 'ぶよう', 'Seni tari'],
  ],

  築: [
    ['築く', 'きずく', 'Membangun; membina'],
    ['建築', 'けんちく', 'Arsitektur; konstruksi'],
    ['築地', 'つきじ', 'Tsukiji (nama tempat)'],
    ['新築', 'しんちく', 'Bangunan baru'],
    ['改築', 'かいちく', 'Renovasi bangunan'],
    ['築年数', 'ちくねんすう', 'Usia bangunan'],
  ],

  散: [
    ['散る', 'ちる', 'Berguguran; bertebaran'],
    ['散らす', 'ちらす', 'Menyebarkan; menghamburkan'],
    ['散らかる', 'ちらかる', 'Berantakan'],
    ['散らかす', 'ちらかす', 'Mengacak-acak'],
    ['散歩', 'さんぽ', 'Jalan-jalan'],
    ['解散', 'かいさん', 'Pembubaran'],
  ],

  磨: [
    ['磨く', 'みがく', 'Menggosok; memoles'],
    ['歯磨き', 'はみがき', 'Menggosok gigi; pasta gigi'],
    ['磨き粉', 'みがきこ', 'Bubuk penggosok'],
    ['研磨', 'けんま', 'Pengasahan; pemolesan'],
    ['磨き上げる', 'みがきあげる', 'Memoles hingga sempurna'],
    ['腕を磨く', 'うでをみがく', 'Mengasah keterampilan'],
  ],

  曇: [
    ['曇る', 'くもる', 'Mendung; berkabut'],
    ['曇り', 'くもり', 'Cuaca berawan'],
    ['曇り空', 'くもりぞら', 'Langit mendung'],
    ['曇りガラス', 'くもりガラス', 'Kaca buram'],
    ['曇天', 'どんてん', 'Langit mendung'],
  ],

  舞: [
    ['舞う', 'まう', 'Menari; melayang'],
    ['舞', 'まい', 'Tarian'],
    ['舞台', 'ぶたい', 'Panggung'],
    ['舞踊', 'ぶよう', 'Seni tari'],
    ['舞踏会', 'ぶとうかい', 'Pesta dansa'],
    ['見舞い', 'みまい', 'Kunjungan kepada orang sakit'],
  ],

  暴: [
    ['暴れる', 'あばれる', 'Mengamuk; mengamuk liar'],
    ['暴れる人', 'あばれるひと', 'Orang yang mengamuk'],
    ['暴力', 'ぼうりょく', 'Kekerasan'],
    ['暴風', 'ぼうふう', 'Angin kencang; badai'],
    ['暴言', 'ぼうげん', 'Ucapan kasar'],
    ['暴走', 'ぼうそう', 'Melaju tak terkendali'],
  ],

  爆: [
    ['爆発', 'ばくはつ', 'Ledakan'],
    ['爆弾', 'ばくだん', 'Bom'],
    ['爆発する', 'ばくはつする', 'Meledak'],
    ['爆笑', 'ばくしょう', 'Tertawa terbahak-bahak'],
    ['原爆', 'げんばく', 'Bom atom'],
    ['爆風', 'ばくふう', 'Gelombang ledakan'],
  ],

  絶: [
    ['絶える', 'たえる', 'Terputus; habis'],
    ['絶つ', 'たつ', 'Memutuskan; menghentikan'],
    ['絶対', 'ぜったい', 'Mutlak; pasti'],
    ['絶対に', 'ぜったいに', 'Sama sekali; pasti'],
    ['絶滅', 'ぜつめつ', 'Kepunahan'],
    ['絶望', 'ぜつぼう', 'Keputusasaan'],
  ],
  被: [
    ['被る', 'こうむる', 'Menderita; menerima (kerugian atau bencana)'],
    ['被せる', 'かぶせる', 'Menutupi; memasangkan'],
    ['被害', 'ひがい', 'Kerugian; kerusakan'],
    ['被害者', 'ひがいしゃ', 'Korban'],
    ['被災', 'ひさい', 'Terkena bencana'],
    ['被告', 'ひこく', 'Terdakwa'],
  ],

  編: [
    ['編む', 'あむ', 'Merajut; menganyam'],
    ['編み物', 'あみもの', 'Rajutan'],
    ['編集', 'へんしゅう', 'Penyuntingan; pengeditan'],
    ['編集者', 'へんしゅうしゃ', 'Editor'],
    ['編入', 'へんにゅう', 'Pindah masuk; transfer'],
    ['短編', 'たんぺん', 'Cerita pendek'],
  ],

  報: [
    ['報いる', 'むくいる', 'Membalas; membalas jasa'],
    ['報告', 'ほうこく', 'Laporan'],
    ['報告書', 'ほうこくしょ', 'Dokumen laporan'],
    ['情報', 'じょうほう', 'Informasi'],
    ['新聞報道', 'しんぶんほうどう', 'Pemberitaan surat kabar'],
    ['予報', 'よほう', 'Ramalan; prakiraan'],
  ],

  捜: [
    ['捜す', 'さがす', 'Mencari; menyelidiki'],
    ['捜査', 'そうさ', 'Penyelidikan (polisi)'],
    ['捜査員', 'そうさいん', 'Petugas penyelidik'],
    ['捜索', 'そうさく', 'Pencarian'],
    ['行方不明者を捜す', 'ゆくえふめいしゃをさがす', 'Mencari orang hilang'],
  ],

  雇: [
    ['雇う', 'やとう', 'Mempekerjakan'],
    ['雇われる', 'やとわれる', 'Dipekerjakan'],
    ['雇い主', 'やといぬし', 'Majikan'],
    ['雇用', 'こよう', 'Ketenagakerjaan; perekrutan'],
    ['雇用者', 'こようしゃ', 'Pemberi kerja'],
    ['解雇', 'かいこ', 'Pemecatan'],
  ],

  競: [
    ['競う', 'きそう', 'Bersaing'],
    ['競争', 'きょうそう', 'Persaingan'],
    ['競技', 'きょうぎ', 'Pertandingan; olahraga kompetitif'],
    ['競馬', 'けいば', 'Pacuan kuda'],
    ['競売', 'きょうばい', 'Lelang'],
    ['競争相手', 'きょうそうあいて', 'Pesaing'],
  ],

  触: [
    ['触る', 'さわる', 'Menyentuh'],
    ['触れる', 'ふれる', 'Menyentuh; menyinggung'],
    ['手触り', 'てざわり', 'Tekstur saat disentuh'],
    ['感触', 'かんしょく', 'Sensasi sentuhan'],
    ['接触', 'せっしょく', 'Kontak; persentuhan'],
    ['触覚', 'しょっかく', 'Indra peraba'],
  ],

  操: [
    ['操る', 'あやつる', 'Mengendalikan; mengoperasikan'],
    ['操作', 'そうさ', 'Pengoperasian'],
    ['操作方法', 'そうさほうほう', 'Cara pengoperasian'],
    ['体操', 'たいそう', 'Senam'],
    ['操縦', 'そうじゅう', 'Mengemudikan; mengendalikan'],
    ['操業', 'そうぎょう', 'Operasi perusahaan atau pabrik'],
  ],

  疑: [
    ['疑う', 'うたがう', 'Meragukan; mencurigai'],
    ['疑い', 'うたがい', 'Keraguan; kecurigaan'],
    ['疑問', 'ぎもん', 'Pertanyaan; keraguan'],
    ['疑問文', 'ぎもんぶん', 'Kalimat tanya'],
    ['疑問点', 'ぎもんてん', 'Hal yang diragukan'],
    ['容疑者', 'ようぎしゃ', 'Tersangka'],
  ],
  幸: [
    ['幸せ', 'しあわせ', 'Kebahagiaan'],
    ['幸い', 'さいわい', 'Untungnya; keberuntungan'],
    ['幸運', 'こううん', 'Keberuntungan'],
    ['幸福', 'こうふく', 'Kebahagiaan'],
    ['不幸', 'ふこう', 'Ketidakberuntungan; kemalangan'],
    ['幸せ者', 'しあわせもの', 'Orang yang bahagia'],
  ],

  悲: [
    ['悲しい', 'かなしい', 'Sedih'],
    ['悲しむ', 'かなしむ', 'Bersedih'],
    ['悲しみ', 'かなしみ', 'Kesedihan'],
    ['悲劇', 'ひげき', 'Tragedi'],
    ['悲鳴', 'ひめい', 'Jeritan ketakutan atau kesakitan'],
    ['悲観', 'ひかん', 'Pesimisme'],
  ],

  静: [
    ['静か', 'しずか', 'Tenang; sunyi'],
    ['静まる', 'しずまる', 'Menjadi tenang'],
    ['静める', 'しずめる', 'Menenangkan'],
    ['静かに', 'しずかに', 'Dengan tenang'],
    ['静止', 'せいし', 'Diam; berhenti bergerak'],
    ['冷静', 'れいせい', 'Tenang; berkepala dingin'],
  ],

  良: [
    ['良い', 'よい', 'Baik'],
    ['良く', 'よく', 'Dengan baik; sering'],
    ['良さ', 'よさ', 'Kebaikan; keunggulan'],
    ['良好', 'りょうこう', 'Baik; bagus'],
    ['仲良し', 'なかよし', 'Teman akrab'],
    ['改良', 'かいりょう', 'Perbaikan; penyempurnaan'],
  ],

  柔: [
    ['柔らかい', 'やわらかい', 'Lembut; lunak'],
    ['柔らか', 'やわらか', 'Kelembutan'],
    ['柔らげる', 'やわらげる', 'Melunakkan; meredakan'],
    ['柔道', 'じゅうどう', 'Judo'],
    ['柔軟', 'じゅうなん', 'Fleksibel; lentur'],
    ['柔軟性', 'じゅうなんせい', 'Kelenturan; fleksibilitas'],
  ],

  硬: [
    ['硬い', 'かたい', 'Keras; kaku'],
    ['硬さ', 'かたさ', 'Kekerasan'],
    ['硬貨', 'こうか', 'Uang logam'],
    ['硬式', 'こうしき', 'Sistem resmi; tipe keras (olahraga)'],
    ['硬直', 'こうちょく', 'Kekakuan'],
    ['硬水', 'こうすい', 'Air sadah'],
  ],

  深: [
    ['深い', 'ふかい', 'Dalam'],
    ['深まる', 'ふかまる', 'Semakin dalam'],
    ['深める', 'ふかめる', 'Memperdalam'],
    ['深夜', 'しんや', 'Tengah malam'],
    ['深刻', 'しんこく', 'Serius; parah'],
    ['深呼吸', 'しんこきゅう', 'Menarik napas dalam-dalam'],
  ],

  浅: [
    ['浅い', 'あさい', 'Dangkal'],
    ['浅瀬', 'あさせ', 'Perairan dangkal'],
    ['浅はか', 'あさはか', 'Dangkal pemikirannya; kurang bijaksana'],
    ['浅草', 'あさくさ', 'Asakusa (nama daerah di Tokyo)'],
    ['浅学', 'せんがく', 'Pengetahuan yang terbatas'],
    ['浅見', 'せんけん', 'Pandangan yang dangkal'],
  ],

  湿: [
    ['湿る', 'しめる', 'Menjadi lembap'],
    ['湿らす', 'しめらす', 'Melembapkan'],
    ['湿気', 'しっけ', 'Kelembapan'],
    ['湿度', 'しつど', 'Tingkat kelembapan'],
    ['湿原', 'しつげん', 'Rawa; lahan basah'],
    ['湿布', 'しっぷ', 'Kompres obat; plester kompres'],
  ],

  暖: [
    ['暖かい', 'あたたかい', 'Hangat'],
    ['暖まる', 'あたたまる', 'Menjadi hangat'],
    ['暖める', 'あたためる', 'Menghangatkan'],
    ['暖房', 'だんぼう', 'Pemanas ruangan'],
    ['暖炉', 'だんろ', 'Perapian'],
    ['温暖', 'おんだん', 'Hangat; beriklim sedang'],
  ],

  涼: [
    ['涼しい', 'すずしい', 'Sejuk'],
    ['涼む', 'すずむ', 'Berteduh; menikmati kesejukan'],
    ['涼しさ', 'すずしさ', 'Kesejukan'],
    ['涼風', 'りょうふう', 'Angin sejuk'],
    ['清涼飲料水', 'せいりょういんりょうすい', 'Minuman ringan'],
  ],

  珍: [
    ['珍しい', 'めずらしい', 'Langka; tidak biasa'],
    ['珍しさ', 'めずらしさ', 'Keunikan; kelangkaan'],
    ['珍しく', 'めずらしく', 'Tidak seperti biasanya'],
    ['珍品', 'ちんぴん', 'Barang langka'],
    ['珍味', 'ちんみ', 'Makanan lezat yang langka'],
    ['珍事', 'ちんじ', 'Peristiwa aneh'],
  ],

  遅: [
    ['遅い', 'おそい', 'Lambat; terlambat'],
    ['遅れる', 'おくれる', 'Terlambat'],
    ['遅らせる', 'おくらせる', 'Menunda'],
    ['遅刻', 'ちこく', 'Terlambat datang'],
    ['遅れ', 'おくれ', 'Keterlambatan'],
    ['手遅れ', 'ておくれ', 'Terlambat untuk bertindak'],
  ],

  軟: [
    ['軟らかい', 'やわらかい', 'Lunak; lembut'],
    ['軟らかさ', 'やわらかさ', 'Kelembutan'],
    ['軟水', 'なんすい', 'Air lunak'],
    ['軟式', 'なんしき', 'Tipe lunak (olahraga)'],
    ['軟弱', 'なんじゃく', 'Lemah; tidak kokoh'],
    ['軟骨', 'なんこつ', 'Tulang rawan'],
  ],

  賢: [
    ['賢い', 'かしこい', 'Pintar; bijaksana'],
    ['賢さ', 'かしこさ', 'Kepintaran; kebijaksanaan'],
    ['賢明', 'けんめい', 'Bijaksana'],
    ['賢者', 'けんじゃ', 'Orang bijak'],
    ['賢人', 'けんじん', 'Orang yang arif'],
    ['賢くなる', 'かしこくなる', 'Menjadi lebih pintar'],
  ],

  善: [
    ['善い', 'よい', 'Baik'],
    ['善悪', 'ぜんあく', 'Baik dan buruk'],
    ['善意', 'ぜんい', 'Niat baik'],
    ['善人', 'ぜんにん', 'Orang baik'],
    ['改善', 'かいぜん', 'Perbaikan'],
    ['親善', 'しんぜん', 'Persahabatan; hubungan baik'],
  ],

  幼: [
    ['幼い', 'おさない', 'Masih kecil; kanak-kanak'],
    ['幼児', 'ようじ', 'Anak kecil; balita'],
    ['幼稚園', 'ようちえん', 'Taman kanak-kanak'],
    ['幼年', 'ようねん', 'Masa kanak-kanak'],
    ['幼少', 'ようしょう', 'Masa kecil'],
    ['幼稚', 'ようち', 'Kekanak-kanakan'],
  ],

  甘: [
    ['甘い', 'あまい', 'Manis'],
    ['甘える', 'あまえる', 'Bermanja'],
    ['甘やかす', 'あまやかす', 'Memanjakan'],
    ['甘口', 'あまくち', 'Rasa manis; tidak pedas'],
    ['甘さ', 'あまさ', 'Rasa manis'],
    ['甘党', 'あまとう', 'Orang yang suka makanan manis'],
  ],

  辛: [
    ['辛い', 'からい', 'Pedas'],
    ['辛い', 'つらい', 'Berat; menyakitkan; sulit'],
    ['辛さ', 'からさ', 'Tingkat kepedasan'],
    ['辛口', 'からくち', 'Rasa pedas; komentar tajam'],
    ['辛抱', 'しんぼう', 'Kesabaran; ketabahan'],
    ['辛勝', 'しんしょう', 'Kemenangan tipis'],
  ],

  荒: [
    ['荒い', 'あらい', 'Kasar; ganas'],
    ['荒れる', 'あれる', 'Menjadi kacau; bergelombang'],
    ['荒らす', 'あらす', 'Mengacaukan; merusak'],
    ['荒野', 'こうや', 'Padang tandus'],
    ['荒波', 'あらなみ', 'Ombak besar'],
    ['荒天', 'こうてん', 'Cuaca buruk'],
  ],

  丸: [
    ['丸い', 'まるい', 'Bulat'],
    ['丸める', 'まるめる', 'Membulatkan; menggulung'],
    ['丸ごと', 'まるごと', 'Seluruhnya; utuh'],
    ['丸々', 'まるまる', 'Sepenuhnya; bulat penuh'],
    ['丸太', 'まるた', 'Kayu gelondongan'],
    ['丸暗記', 'まるあんき', 'Menghafal secara keseluruhan'],
  ],

  純: [
    ['純粋', 'じゅんすい', 'Murni'],
    ['純情', 'じゅんじょう', 'Berhati polos'],
    ['純度', 'じゅんど', 'Tingkat kemurnian'],
    ['純金', 'じゅんきん', 'Emas murni'],
    ['純文学', 'じゅんぶんがく', 'Sastra murni'],
    ['単純', 'たんじゅん', 'Sederhana'],
  ],

  怖: [
    ['怖い', 'こわい', 'Takut; menakutkan'],
    ['怖がる', 'こわがる', 'Merasa takut'],
    ['怖がらせる', 'こわがらせる', 'Menakut-nakuti'],
    ['恐怖', 'きょうふ', 'Ketakutan; kengerian'],
    ['怖さ', 'こわさ', 'Rasa takut'],
    ['物怖じ', 'ものおじ', 'Rasa gentar; malu menghadapi sesuatu'],
  ],
  貧: [
    ['貧しい', 'まずしい', 'Miskin; kekurangan'],
    ['貧乏', 'びんぼう', 'Kemiskinan; miskin'],
    ['貧困', 'ひんこん', 'Kemiskinan'],
    ['貧血', 'ひんけつ', 'Anemia; kurang darah'],
    ['貧富', 'ひんぷ', 'Kaya dan miskin'],
    ['貧弱', 'ひんじゃく', 'Lemah; tidak memadai'],
  ],

  恐: [
    ['恐れる', 'おそれる', 'Takut; merasa khawatir'],
    ['恐ろしい', 'おそろしい', 'Mengerikan; menakutkan'],
    ['恐怖', 'きょうふ', 'Ketakutan; kengerian'],
    ['恐怖心', 'きょうふしん', 'Perasaan takut'],
    ['恐竜', 'きょうりゅう', 'Dinosaurus'],
    ['恐れ', 'おそれ', 'Ketakutan; kekhawatiran'],
  ],

  緑: [
    ['緑', 'みどり', 'Hijau; warna hijau'],
    ['緑色', 'みどりいろ', 'Warna hijau'],
    ['緑茶', 'りょくちゃ', 'Teh hijau'],
    ['新緑', 'しんりょく', 'Daun-daun hijau muda'],
    ['緑地', 'りょくち', 'Area hijau; ruang terbuka hijau'],
    ['緑化', 'りょっか', 'Penghijauan'],
  ],

  岩: [
    ['岩', 'いわ', 'Batu besar; batu karang'],
    ['岩石', 'がんせき', 'Batuan'],
    ['岩場', 'いわば', 'Tempat berbatu'],
    ['岩山', 'いわやま', 'Gunung berbatu'],
    ['岩壁', 'がんぺき', 'Dinding batu; tebing batu'],
    ['火山岩', 'かざんがん', 'Batuan vulkanik'],
  ],

  湖: [
    ['湖', 'みずうみ', 'Danau'],
    ['湖水', 'こすい', 'Air danau'],
    ['湖畔', 'こはん', 'Tepi danau'],
    ['湖底', 'こてい', 'Dasar danau'],
    ['湖岸', 'こがん', 'Pantai atau tepi danau'],
    ['火口湖', 'かこうこ', 'Danau kawah'],
  ],

  門: [
    ['門', 'もん', 'Gerbang; pintu gerbang'],
    ['門番', 'もんばん', 'Penjaga gerbang'],
    ['門前', 'もんぜん', 'Di depan gerbang'],
    ['専門', 'せんもん', 'Bidang keahlian; spesialisasi'],
    ['入門', 'にゅうもん', 'Pengantar; pengenalan dasar'],
    ['正門', 'せいもん', 'Gerbang utama'],
  ],

  玉: [
    ['玉', 'たま', 'Bola; benda berbentuk bulat'],
    ['玉ねぎ', 'たまねぎ', 'Bawang bombai'],
    ['玉子', 'たまご', 'Telur'],
    ['目玉', 'めだま', 'Bola mata; sesuatu yang menjadi daya tarik utama'],
    ['玉石', 'ぎょくせき', 'Batu permata dan batu biasa'],
    ['玉手箱', 'たまてばこ', 'Kotak harta karun'],
  ],

  灰: [
    ['灰', 'はい', 'Abu'],
    ['灰色', 'はいいろ', 'Warna abu-abu'],
    ['灰皿', 'はいざら', 'Asbak'],
    ['火山灰', 'かざんばい', 'Abu vulkanik'],
    ['石灰', 'せっかい', 'Kapur; batu kapur'],
    ['灰になる', 'はいになる', 'Menjadi abu'],
  ],

  炭: [
    ['炭', 'すみ', 'Arang'],
    ['石炭', 'せきたん', 'Batu bara'],
    ['木炭', 'もくたん', 'Arang kayu'],
    ['炭火', 'すみび', 'Api arang'],
    ['炭水化物', 'たんすいかぶつ', 'Karbohidrat'],
    ['炭鉱', 'たんこう', 'Tambang batu bara'],
  ],

  印: [
    ['印', 'しるし', 'Tanda; simbol'],
    ['印', 'いん', 'Cap; stempel'],
    ['印刷', 'いんさつ', 'Percetakan; mencetak'],
    ['印象', 'いんしょう', 'Kesan'],
    ['印鑑', 'いんかん', 'Stempel pribadi'],
    ['目印', 'めじるし', 'Tanda petunjuk; penanda'],
  ],

  泥: [
    ['泥', 'どろ', 'Lumpur'],
    ['泥水', 'どろみず', 'Air berlumpur'],
    ['泥棒', 'どろぼう', 'Pencuri'],
    ['泥だらけ', 'どろだらけ', 'Penuh lumpur'],
    ['泥沼', 'どろぬま', 'Rawa berlumpur; situasi sulit'],
    ['泥んこ', 'どろんこ', 'Berlumpur; penuh lumpur'],
  ],

  仏: [
    ['仏', 'ほとけ', 'Buddha; orang yang telah meninggal'],
    ['仏教', 'ぶっきょう', 'Agama Buddha'],
    ['仏像', 'ぶつぞう', 'Patung Buddha'],
    ['仏壇', 'ぶつだん', 'Altar Buddha di rumah'],
    ['仏国', 'ふっこく', 'Prancis (sebutan singkat/tertulis)'],
    ['大仏', 'だいぶつ', 'Patung Buddha besar'],
  ],

  圧: [
    ['圧力', 'あつりょく', 'Tekanan'],
    ['気圧', 'きあつ', 'Tekanan udara'],
    ['血圧', 'けつあつ', 'Tekanan darah'],
    ['圧倒', 'あっとう', 'Mengalahkan secara telak; membuat kewalahan'],
    ['圧迫', 'あっぱく', 'Penekanan; tekanan'],
    ['水圧', 'すいあつ', 'Tekanan air'],
  ],

  双: [
    ['双子', 'ふたご', 'Anak kembar'],
    ['双方', 'そうほう', 'Kedua belah pihak'],
    ['双方向', 'そうほうこう', 'Dua arah; dua arah komunikasi'],
    ['双眼鏡', 'そうがんきょう', 'Teropong binokular'],
    ['双手', 'そうしゅ', 'Kedua tangan'],
    ['一双', 'いっそう', 'Sepasang (benda tertentu)'],
  ],
  兆: [
    ['兆', 'ちょう', 'Triliun; satuan angka 10¹²'],
    ['兆し', 'きざし', 'Tanda-tanda; gejala awal'],
    ['兆候', 'ちょうこう', 'Pertanda; indikasi'],
    ['前兆', 'ぜんちょう', 'Pertanda sebelumnya'],
    ['吉兆', 'きっちょう', 'Pertanda baik'],
    ['凶兆', 'きょうちょう', 'Pertanda buruk'],
  ],

  芸: [
    ['芸', 'げい', 'Seni; keterampilan'],
    ['芸術', 'げいじゅつ', 'Seni'],
    ['芸能', 'げいのう', 'Dunia hiburan; seni pertunjukan'],
    ['芸人', 'げいにん', 'Pelawak; entertainer'],
    ['芸者', 'げいしゃ', 'Geisha'],
    ['園芸', 'えんげい', 'Berkebun; hortikultura'],
  ],

  団: [
    ['団体', 'だんたい', 'Organisasi; kelompok'],
    ['集団', 'しゅうだん', 'Kelompok; kumpulan'],
    ['団地', 'だんち', 'Kompleks perumahan'],
    ['布団', 'ふとん', 'Futon; kasur tradisional Jepang'],
    ['団結', 'だんけつ', 'Persatuan; solidaritas'],
    ['団長', 'だんちょう', 'Ketua kelompok; pemimpin rombongan'],
  ],

  永: [
    ['永遠', 'えいえん', 'Keabadian; selamanya'],
    ['永久', 'えいきゅう', 'Kekekalan; permanen'],
    ['永続', 'えいぞく', 'Kelangsungan jangka panjang'],
    ['永住', 'えいじゅう', 'Menetap secara permanen'],
    ['永年', 'ながねん', 'Bertahun-tahun; waktu yang lama'],
    ['永い', 'ながい', 'Panjang; lama (bentuk penulisan alternatif)'],
  ],

  卒: [
    ['卒業', 'そつぎょう', 'Lulus; kelulusan'],
    ['卒業生', 'そつぎょうせい', 'Lulusan; alumni'],
    ['卒業式', 'そつぎょうしき', 'Upacara kelulusan'],
    ['卒業論文', 'そつぎょうろんぶん', 'Skripsi; karya tulis kelulusan'],
    ['卒業旅行', 'そつぎょうりょこう', 'Perjalanan setelah lulus'],
    ['大卒', 'だいそつ', 'Lulusan universitas'],
  ],

  皮: [
    ['皮', 'かわ', 'Kulit; kulit hewan atau buah'],
    ['皮膚', 'ひふ', 'Kulit manusia'],
    ['毛皮', 'けがわ', 'Kulit berbulu; bulu hewan'],
    ['皮肉', 'ひにく', 'Sindiran; ironi'],
    ['皮革', 'ひかく', 'Kulit samak; bahan kulit'],
    ['皮むき', 'かわむき', 'Mengupas kulit'],
  ],

  老: [
    ['老人', 'ろうじん', 'Orang lanjut usia'],
    ['老後', 'ろうご', 'Masa tua'],
    ['老化', 'ろうか', 'Penuaan'],
    ['老いる', 'おいる', 'Menjadi tua'],
    ['老年', 'ろうねん', 'Usia lanjut'],
    ['長老', 'ちょうろう', 'Tetua; orang yang dituakan'],
  ],

  符: [
    ['切符', 'きっぷ', 'Tiket'],
    ['符号', 'ふごう', 'Kode; simbol'],
    ['音符', 'おんぷ', 'Not musik'],
    ['記号', 'きごう', 'Simbol; tanda'],
    ['符丁', 'ふちょう', 'Kode; istilah khusus'],
    ['符牒', 'ふちょう', 'Kode; tanda rahasia'],
  ],

  片: [
    ['片方', 'かたほう', 'Salah satu dari dua sisi'],
    ['片手', 'かたて', 'Satu tangan'],
    ['片足', 'かたあし', 'Satu kaki'],
    ['片付ける', 'かたづける', 'Merapikan; membereskan'],
    ['片道', 'かたみち', 'Satu arah; perjalanan pergi saja'],
    ['片仮名', 'かたかな', 'Katakana'],
  ],

  共: [
    ['共に', 'ともに', 'Bersama-sama'],
    ['共通', 'きょうつう', 'Kesamaan; umum'],
    ['共同', 'きょうどう', 'Bersama; gabungan'],
    ['共働き', 'ともばたらき', 'Suami istri sama-sama bekerja'],
    ['共感', 'きょうかん', 'Empati; rasa sependapat'],
    ['共産党', 'きょうさんとう', 'Partai Komunis'],
  ],

  央: [
    ['中央', 'ちゅうおう', 'Pusat; bagian tengah'],
    ['中央線', 'ちゅうおうせん', 'Jalur Chūō'],
    ['中央口', 'ちゅうおうぐち', 'Pintu keluar tengah'],
    ['中央銀行', 'ちゅうおうぎんこう', 'Bank sentral'],
    ['中央政府', 'ちゅうおうせいふ', 'Pemerintah pusat'],
    ['中央部', 'ちゅうおうぶ', 'Bagian tengah'],
  ],

  札: [
    ['札', 'ふだ', 'Label; kartu; papan kecil'],
    ['お札', 'おさつ', 'Uang kertas'],
    ['札束', 'さつたば', 'Tumpukan uang kertas'],
    ['名札', 'なふだ', 'Label nama'],
    ['改札', 'かいさつ', 'Gerbang pemeriksaan tiket'],
    ['入札', 'にゅうさつ', 'Penawaran harga; tender'],
  ],

  児: [
    ['児童', 'じどう', 'Anak-anak; murid sekolah dasar'],
    ['幼児', 'ようじ', 'Anak usia dini'],
    ['育児', 'いくじ', 'Pengasuhan anak'],
    ['小児科', 'しょうにか', 'Departemen pediatri'],
    ['孤児', 'こじ', 'Anak yatim piatu'],
    ['児童館', 'じどうかん', 'Pusat kegiatan anak-anak'],
  ],

  逆: [
    ['逆', 'ぎゃく', 'Terbalik; kebalikan'],
    ['逆さ', 'さかさ', 'Terbalik'],
    ['逆らう', 'さからう', 'Melawan; menentang'],
    ['逆転', 'ぎゃくてん', 'Pembalikan keadaan'],
    ['逆方向', 'ぎゃくほうこう', 'Arah berlawanan'],
    ['逆効果', 'ぎゃくこうか', 'Efek yang berlawanan; hasil kontraproduktif'],
  ],

  検: [
    ['検査', 'けんさ', 'Pemeriksaan; tes'],
    ['検討', 'けんとう', 'Pertimbangan; peninjauan'],
    ['検索', 'けんさく', 'Pencarian; menelusuri informasi'],
    ['検討する', 'けんとうする', 'Mempertimbangkan; meninjau'],
    ['検定', 'けんてい', 'Ujian sertifikasi'],
    ['検温', 'けんおん', 'Pemeriksaan suhu tubuh'],
  ],

  久: [
    ['久しぶり', 'ひさしぶり', 'Sudah lama tidak bertemu'],
    ['久しい', 'ひさしい', 'Sudah lama; berlangsung lama'],
    ['永久', 'えいきゅう', 'Kekekalan; permanen'],
    ['久々', 'ひさびさ', 'Setelah sekian lama'],
    ['長久', 'ちょうきゅう', 'Keabadian; waktu yang sangat lama'],
    ['久遠', 'くおん', 'Keabadian; masa yang sangat jauh'],
  ],

  状: [
    ['状態', 'じょうたい', 'Keadaan; kondisi'],
    ['状況', 'じょうきょう', 'Situasi; keadaan'],
    ['症状', 'しょうじょう', 'Gejala penyakit'],
    ['形状', 'けいじょう', 'Bentuk; wujud'],
    ['現状', 'げんじょう', 'Keadaan saat ini'],
    ['礼状', 'れいじょう', 'Surat ucapan terima kasih'],
  ],

  互: [
    ['互い', 'たがい', 'Satu sama lain'],
    ['互いに', 'たがいに', 'Saling; satu sama lain'],
    ['相互', 'そうご', 'Timbal balik; saling'],
    ['相互理解', 'そうごりかい', 'Saling pengertian'],
    ['互角', 'ごかく', 'Seimbang; sama kuat'],
    ['互助', 'ごじょ', 'Saling membantu'],
  ],

  貨: [
    ['貨物', 'かもつ', 'Barang kargo'],
    ['貨物列車', 'かもつれっしゃ', 'Kereta barang'],
    ['貨物船', 'かもつせん', 'Kapal kargo'],
    ['通貨', 'つうか', 'Mata uang'],
    ['外貨', 'がいか', 'Mata uang asing'],
    ['貨幣', 'かへい', 'Uang; mata uang'],
  ],

  枝: [
    ['枝', 'えだ', 'Dahan; ranting'],
    ['枝分かれ', 'えだわかれ', 'Percabangan'],
    ['枝豆', 'えだまめ', 'Edamame; kedelai muda'],
    ['小枝', 'こえだ', 'Ranting kecil'],
    ['枝先', 'えださき', 'Ujung ranting'],
    ['枝葉', 'えだは', 'Dahan dan daun; hal-hal sampingan'],
  ],

  毛: [
    ['毛', 'け', 'Rambut; bulu'],
    ['毛糸', 'けいと', 'Benang wol'],
    ['毛布', 'もうふ', 'Selimut'],
    ['毛皮', 'けがわ', 'Kulit berbulu'],
    ['髪の毛', 'かみのけ', 'Rambut kepala'],
    ['眉毛', 'まゆげ', 'Alis mata'],
  ],

  羽: [
    ['羽', 'はね', 'Bulu; sayap'],
    ['羽毛', 'うもう', 'Bulu halus burung'],
    ['羽根', 'はね', 'Bulu; sayap; baling-baling'],
    ['羽織', 'はおり', 'Haori; mantel tradisional Jepang'],
    ['一羽', 'いちわ', 'Seekor burung (kata bantu bilangan)'],
    ['羽田', 'はねだ', 'Haneda (nama tempat)'],
  ],

  竹: [
    ['竹', 'たけ', 'Bambu'],
    ['竹林', 'ちくりん', 'Hutan bambu'],
    ['竹の子', 'たけのこ', 'Rebung'],
    ['竹細工', 'たけざいく', 'Kerajinan bambu'],
    ['竹刀', 'しない', 'Pedang bambu untuk latihan kendo'],
    ['竹やぶ', 'たけやぶ', 'Semak bambu; rumpun bambu'],
  ],

  糸: [
    ['糸', 'いと', 'Benang'],
    ['毛糸', 'けいと', 'Benang wol'],
    ['糸口', 'いとぐち', 'Petunjuk awal; jalan keluar'],
    ['糸電話', 'いとでんわ', 'Telepon benang'],
    ['糸巻き', 'いとまき', 'Gulungan benang'],
    ['絹糸', 'きぬいと', 'Benang sutra'],
  ],

  仲: [
    ['仲', 'なか', 'Hubungan; kedekatan'],
    ['仲間', 'なかま', 'Teman; rekan; kelompok'],
    ['仲良し', 'なかよし', 'Teman akrab'],
    ['仲直り', 'なかなおり', 'Berbaikan kembali'],
    ['仲良く', 'なかよく', 'Dengan rukun; akrab'],
    ['仲介', 'ちゅうかい', 'Perantaraan; mediasi'],
  ],
  介: [
    ['介する', 'かいする', 'Menjadi perantara; memperantarai'],
    ['紹介', 'しょうかい', 'Perkenalan; memperkenalkan'],
    ['介護', 'かいご', 'Perawatan; pengasuhan orang yang membutuhkan bantuan'],
    ['仲介', 'ちゅうかい', 'Perantaraan; mediasi'],
    ['介入', 'かいにゅう', 'Campur tangan; intervensi'],
    ['自己紹介', 'じこしょうかい', 'Perkenalan diri'],
  ],

  旧: [
    ['旧', 'きゅう', 'Lama; dahulu; bekas'],
    ['旧友', 'きゅうゆう', 'Teman lama'],
    ['旧式', 'きゅうしき', 'Model lama; cara lama'],
    ['旧姓', 'きゅうせい', 'Nama keluarga sebelum menikah'],
    ['旧正月', 'きゅうしょうがつ', 'Tahun Baru Imlek'],
    ['旧住所', 'きゅうじゅうしょ', 'Alamat lama'],
  ],

  匹: [
    ['一匹', 'いっぴき', 'Seekor (hewan kecil)'],
    ['二匹', 'にひき', 'Dua ekor (hewan kecil)'],
    ['匹敵', 'ひってき', 'Sebanding; setara'],
    ['匹夫', 'ひっぷ', 'Orang biasa; rakyat jelata'],
    ['匹婦', 'ひっぷ', 'Perempuan biasa'],
  ],

  宇: [
    ['宇宙', 'うちゅう', 'Alam semesta; luar angkasa'],
    ['宇宙人', 'うちゅうじん', 'Makhluk luar angkasa'],
    ['宇宙船', 'うちゅうせん', 'Pesawat luar angkasa'],
    ['宇宙飛行士', 'うちゅうひこうし', 'Astronaut'],
    ['宇宙旅行', 'うちゅうりょこう', 'Perjalanan ke luar angkasa'],
    ['宇宙開発', 'うちゅうかいはつ', 'Pengembangan teknologi luar angkasa'],
  ],

  宙: [
    ['宙', 'ちゅう', 'Ruang angkasa; udara'],
    ['宇宙', 'うちゅう', 'Alam semesta; luar angkasa'],
    ['宙返り', 'ちゅうがえり', 'Gerakan salto di udara'],
    ['宙に浮く', 'ちゅうにうく', 'Melayang di udara'],
    ['宙ぶらりん', 'ちゅうぶらりん', 'Terombang-ambing; tidak jelas'],
    ['宙吊り', 'ちゅうづり', 'Tergantung di udara'],
  ],

  庁: [
    ['庁', 'ちょう', 'Kantor pemerintahan; badan pemerintah'],
    ['官庁', 'かんちょう', 'Instansi pemerintah'],
    ['市庁', 'しちょう', 'Balai kota'],
    ['県庁', 'けんちょう', 'Kantor pemerintah prefektur'],
    ['警視庁', 'けいしちょう', 'Kepolisian Metropolitan Tokyo'],
    ['気象庁', 'きしょうちょう', 'Badan Meteorologi Jepang'],
  ],

  床: [
    ['床', 'ゆか', 'Lantai'],
    ['床', 'とこ', 'Tempat tidur; alas tidur'],
    ['床屋', 'とこや', 'Tempat pangkas rambut'],
    ['床の間', 'とこのま', 'Ruang kecil untuk pajangan dalam rumah Jepang'],
    ['床下', 'ゆかした', 'Bagian bawah lantai'],
    ['床上', 'ゆかうえ', 'Di atas lantai'],
  ],

  巨: [
    ['巨大', 'きょだい', 'Sangat besar; raksasa'],
    ['巨人', 'きょじん', 'Raksasa'],
    ['巨額', 'きょがく', 'Jumlah uang yang sangat besar'],
    ['巨匠', 'きょしょう', 'Maestro; ahli besar'],
    ['巨木', 'きょぼく', 'Pohon raksasa'],
    ['巨体', 'きょたい', 'Tubuh yang sangat besar'],
  ],

  臣: [
    ['大臣', 'だいじん', 'Menteri'],
    ['首相', 'しゅしょう', 'Perdana menteri'],
    ['家臣', 'かしん', 'Pengikut seorang bangsawan; pengawal'],
    ['臣下', 'しんか', 'Bawahan; abdi'],
    ['重臣', 'じゅうしん', 'Pejabat tinggi; penasihat utama'],
    ['忠臣', 'ちゅうしん', 'Abdi yang setia'],
  ],

  板: [
    ['板', 'いた', 'Papan; lembaran kayu'],
    ['板書', 'ばんしょ', 'Tulisan di papan tulis'],
    ['黒板', 'こくばん', 'Papan tulis hitam'],
    ['看板', 'かんばん', 'Papan nama; papan reklame'],
    ['板前', 'いたまえ', 'Koki masakan Jepang'],
    ['鉄板', 'てっぱん', 'Lempengan besi; pelat besi'],
  ],

  姓: [
    ['姓', 'せい', 'Nama keluarga'],
    ['名字', 'みょうじ', 'Nama keluarga'],
    ['姓名', 'せいめい', 'Nama lengkap'],
    ['旧姓', 'きゅうせい', 'Nama keluarga sebelum menikah'],
    ['同姓', 'どうせい', 'Nama keluarga yang sama'],
    ['姓氏', 'せいし', 'Nama keluarga; marga'],
  ],

  季: [
    ['季節', 'きせつ', 'Musim'],
    ['四季', 'しき', 'Empat musim'],
    ['季語', 'きご', 'Kata yang menunjukkan musim dalam puisi haiku'],
    ['季刊', 'きかん', 'Terbit setiap tiga bulan'],
    ['季節風', 'きせつふう', 'Angin muson; angin musiman'],
    ['雨季', 'うき', 'Musim hujan'],
  ],

  肌: [
    ['肌', 'はだ', 'Kulit'],
    ['肌色', 'はだいろ', 'Warna kulit'],
    ['肌着', 'はだぎ', 'Pakaian dalam'],
    ['肌寒い', 'はださむい', 'Terasa agak dingin'],
    ['肌触り', 'はだざわり', 'Tekstur atau rasa saat disentuh kulit'],
    ['肌荒れ', 'はだあれ', 'Kulit kasar atau iritasi'],
  ],

  辺: [
    ['辺', 'へん', 'Sekitar; daerah; sisi'],
    ['この辺', 'このへん', 'Sekitar sini'],
    ['辺り', 'あたり', 'Sekitar; kurang lebih'],
    ['周辺', 'しゅうへん', 'Daerah sekitar'],
    ['海辺', 'うみべ', 'Tepi laut'],
    ['辺境', 'へんきょう', 'Daerah perbatasan; wilayah terpencil'],
  ],

  史: [
    ['歴史', 'れきし', 'Sejarah'],
    ['日本史', 'にほんし', 'Sejarah Jepang'],
    ['世界史', 'せかいし', 'Sejarah dunia'],
    ['史上', 'しじょう', 'Dalam sejarah'],
    ['史跡', 'しせき', 'Situs bersejarah'],
    ['歴史家', 'れきしか', 'Sejarawan'],
  ],

  志: [
    ['志', 'こころざし', 'Cita-cita; tekad'],
    ['志す', 'こころざす', 'Bercita-cita; bertekad'],
    ['志望', 'しぼう', 'Keinginan; aspirasi'],
    ['志望校', 'しぼうこう', 'Sekolah atau universitas tujuan'],
    ['意志', 'いし', 'Kehendak; kemauan'],
    ['同志', 'どうし', 'Rekan seperjuangan; orang yang memiliki tujuan sama'],
  ],

  柱: [
    ['柱', 'はしら', 'Tiang; pilar'],
    ['電柱', 'でんちゅう', 'Tiang listrik'],
    ['柱時計', 'はしらどけい', 'Jam dinding model lama'],
    ['支柱', 'しちゅう', 'Tiang penyangga'],
    ['円柱', 'えんちゅう', 'Silinder; tabung'],
    ['大黒柱', 'だいこくばしら', 'Tiang utama rumah; tulang punggung keluarga'],
  ],

  況: [
    ['状況', 'じょうきょう', 'Situasi; keadaan'],
    ['近況', 'きんきょう', 'Keadaan atau kabar terbaru'],
    ['実況', 'じっきょう', 'Laporan langsung; siaran langsung'],
    ['不況', 'ふきょう', 'Resesi; keadaan ekonomi lesu'],
    ['好況', 'こうきょう', 'Keadaan ekonomi yang baik'],
    ['盛況', 'せいきょう', 'Keadaan yang ramai dan sukses'],
  ],

  仮: [
    ['仮', 'かり', 'Sementara; sementara waktu'],
    ['仮に', 'かりに', 'Seandainya; misalnya'],
    ['仮名', 'かな', 'Kana; huruf fonetik Jepang'],
    ['仮定', 'かてい', 'Asumsi; pengandaian'],
    ['仮病', 'けびょう', 'Berpura-pura sakit'],
    ['仮面', 'かめん', 'Topeng'],
  ],

  州: [
    ['州', 'しゅう', 'Negara bagian; wilayah'],
    ['九州', 'きゅうしゅう', 'Kyushu'],
    ['本州', 'ほんしゅう', 'Honshu'],
    ['州都', 'しゅうと', 'Ibu kota negara bagian'],
    ['欧州', 'おうしゅう', 'Eropa'],
    ['豪州', 'ごうしゅう', 'Australia'],
  ],

  布: [
    ['布', 'ぬの', 'Kain'],
    ['布団', 'ふとん', 'Futon; kasur tradisional Jepang'],
    ['毛布', 'もうふ', 'Selimut'],
    ['財布', 'さいふ', 'Dompet'],
    ['布地', 'ぬのじ', 'Bahan kain'],
    ['配布', 'はいふ', 'Pembagian; distribusi'],
  ],

  列: [
    ['列', 'れつ', 'Barisan; antrean'],
    ['行列', 'ぎょうれつ', 'Antrean; barisan'],
    ['列車', 'れっしゃ', 'Kereta api'],
    ['列島', 'れっとう', 'Kepulauan'],
    ['列席', 'れっせき', 'Menghadiri suatu acara'],
    ['整列', 'せいれつ', 'Berbaris dengan rapi'],
  ],

  革: [
    ['革', 'かわ', 'Kulit (bahan kulit)'],
    ['革靴', 'かわぐつ', 'Sepatu kulit'],
    ['革製品', 'かわせいひん', 'Produk berbahan kulit'],
    ['革新', 'かくしん', 'Inovasi; pembaruan'],
    ['改革', 'かいかく', 'Reformasi; perubahan besar'],
    ['革命', 'かくめい', 'Revolusi'],
  ],

  河: [
    ['河', 'かわ', 'Sungai (bentuk penulisan kanji)'],
    ['河川', 'かせん', 'Sungai-sungai'],
    ['河口', 'かこう', 'Muara sungai'],
    ['河岸', 'かがん', 'Tepi sungai'],
    ['銀河', 'ぎんが', 'Galaksi Bima Sakti; galaksi'],
    ['運河', 'うんが', 'Kanal'],
  ],

  令: [
    ['命令', 'めいれい', 'Perintah; instruksi'],
    ['指令', 'しれい', 'Instruksi; komando'],
    ['法令', 'ほうれい', 'Undang-undang dan peraturan'],
    ['令和', 'れいわ', 'Reiwa; nama era Jepang saat ini'],
    ['司令', 'しれい', 'Komando; pimpinan komando'],
    ['辞令', 'じれい', 'Surat keputusan pengangkatan atau pemindahan jabatan'],
  ],

  坂: [
    ['坂', 'さか', 'Tanjakan; lereng'],
    ['坂道', 'さかみち', 'Jalan menanjak atau menurun'],
    ['上り坂', 'のぼりざか', 'Jalan menanjak'],
    ['下り坂', 'くだりざか', 'Jalan menurun'],
    ['急坂', 'きゅうさか', 'Tanjakan curam'],
    ['坂の上', 'さかのうえ', 'Bagian atas tanjakan'],
  ],

  畑: [
    ['畑', 'はたけ', 'Ladang; kebun'],
    ['畑仕事', 'はたけしごと', 'Pekerjaan di ladang'],
    ['畑作', 'はたさく', 'Pertanian tanaman ladang'],
    ['麦畑', 'むぎばたけ', 'Ladang gandum'],
    ['茶畑', 'ちゃばたけ', 'Kebun teh'],
    ['花畑', 'はなばたけ', 'Kebun bunga'],
  ],

  兵: [
    ['兵', 'へい', 'Prajurit; tentara'],
    ['兵士', 'へいし', 'Tentara; prajurit'],
    ['兵隊', 'へいたい', 'Pasukan tentara'],
    ['兵器', 'へいき', 'Senjata; persenjataan'],
    ['兵力', 'へいりょく', 'Kekuatan militer'],
    ['兵役', 'へいえき', 'Wajib militer'],
  ],

  灯: [
    ['灯', 'ひ', 'Lampu; cahaya'],
    ['電灯', 'でんとう', 'Lampu listrik'],
    ['街灯', 'がいとう', 'Lampu jalan'],
    ['灯台', 'とうだい', 'Mercusuar'],
    ['点灯', 'てんとう', 'Menyalakan lampu'],
    ['消灯', 'しょうとう', 'Mematikan lampu'],
  ],

  処: [
    ['処理', 'しょり', 'Pengolahan; penanganan'],
    ['処分', 'しょぶん', 'Pembuangan; tindakan; hukuman'],
    ['処置', 'しょち', 'Tindakan; penanganan'],
    ['処方', 'しょほう', 'Resep (obat); peresepan'],
    ['対処', 'たいしょ', 'Penanganan; mengatasi'],
    ['処刑', 'しょけい', 'Eksekusi hukuman mati'],
  ],

  具: [
    ['道具', 'どうぐ', 'Alat; perkakas'],
    ['家具', 'かぐ', 'Perabot rumah tangga'],
    ['文房具', 'ぶんぼうぐ', 'Alat tulis'],
    ['工具', 'こうぐ', 'Peralatan kerja'],
    ['具合', 'ぐあい', 'Kondisi; keadaan'],
    ['具体的', 'ぐたいてき', 'Konkret; spesifik'],
  ],

  杯: [
    ['一杯', 'いっぱい', 'Satu gelas; satu cangkir; penuh'],
    ['乾杯', 'かんぱい', 'Bersulang'],
    ['優勝杯', 'ゆうしょうはい', 'Piala juara'],
    ['杯', 'さかずき', 'Cawan kecil untuk minum sake'],
    ['満杯', 'まんぱい', 'Penuh; terisi sampai penuh'],
    ['苦杯', 'くはい', 'Pengalaman pahit; kekalahan yang menyakitkan'],
  ],

  独: [
    ['独り', 'ひとり', 'Sendiri'],
    ['独身', 'どくしん', 'Lajang; belum menikah'],
    ['独立', 'どくりつ', 'Kemerdekaan; kemandirian'],
    ['独自', 'どくじ', 'Khas; unik; milik sendiri'],
    ['独学', 'どくがく', 'Belajar secara otodidak'],
    ['独特', 'どくとく', 'Khas; memiliki keunikan tersendiri'],
  ],

  香: [
    ['香り', 'かおり', 'Aroma; harum'],
    ['香水', 'こうすい', 'Parfum'],
    ['香辛料', 'こうしんりょう', 'Rempah-rempah'],
    ['香ばしい', 'こうばしい', 'Harum (seperti makanan yang dipanggang)'],
    ['香典', 'こうでん', 'Uang belasungkawa'],
    ['線香', 'せんこう', 'Dupa; hio'],
  ],

  泉: [
    ['泉', 'いずみ', 'Mata air'],
    ['温泉', 'おんせん', 'Pemandian air panas'],
    ['泉水', 'せんすい', 'Air mata air; air kolam'],
    ['源泉', 'げんせん', 'Sumber mata air'],
    ['泉質', 'せんしつ', 'Kualitas air mata air panas'],
    ['鉱泉', 'こうせん', 'Mata air mineral'],
  ],

  訓: [
    ['訓読み', 'くんよみ', 'Cara baca kun (bacaan asli Jepang)'],
    ['音訓', 'おんくん', 'Bacaan on dan kun'],
    ['訓練', 'くんれん', 'Latihan; pelatihan'],
    ['教訓', 'きょうくん', 'Pelajaran; nasihat'],
    ['訓示', 'くんじ', 'Arahan; instruksi resmi'],
    ['訓話', 'くんわ', 'Nasihat; cerita yang mengandung pelajaran'],
  ],

  刊: [
    ['刊行', 'かんこう', 'Penerbitan'],
    ['週刊', 'しゅうかん', 'Mingguan'],
    ['月刊', 'げっかん', 'Bulanan'],
    ['季刊', 'きかん', 'Terbit setiap tiga bulan'],
    ['日刊', 'にっかん', 'Terbit harian'],
    ['創刊', 'そうかん', 'Penerbitan perdana; peluncuran terbitan'],
  ],

  官: [
    ['官', 'かん', 'Pejabat pemerintah; birokrat'],
    ['官庁', 'かんちょう', 'Instansi pemerintah'],
    ['警官', 'けいかん', 'Polisi'],
    ['官僚', 'かんりょう', 'Birokrat'],
    ['長官', 'ちょうかん', 'Kepala badan atau lembaga pemerintah'],
    ['官公庁', 'かんこうちょう', 'Instansi pemerintah'],
  ],
  周: [
    ['周り', 'まわり', 'Sekitar; sekeliling'],
    ['周囲', 'しゅうい', 'Lingkungan sekitar'],
    ['周辺', 'しゅうへん', 'Daerah sekitar'],
    ['一周', 'いっしゅう', 'Satu putaran; satu keliling'],
    ['周知', 'しゅうち', 'Pengetahuan umum; diketahui banyak orang'],
    ['周年', 'しゅうねん', 'Peringatan tahunan'],
  ],

  談: [
    ['相談', 'そうだん', 'Konsultasi; berdiskusi'],
    ['会談', 'かいだん', 'Pertemuan; pembicaraan resmi'],
    ['雑談', 'ざつだん', 'Obrolan santai'],
    ['面談', 'めんだん', 'Wawancara; pertemuan langsung'],
    ['商談', 'しょうだん', 'Negosiasi bisnis'],
    ['談話', 'だんわ', 'Percakapan; pembicaraan'],
  ],

  努: [
    ['努力', 'どりょく', 'Usaha; upaya keras'],
    ['努める', 'つとめる', 'Berusaha; berupaya'],
    ['努めて', 'つとめて', 'Dengan sungguh-sungguh; sebisa mungkin'],
    ['努力家', 'どりょくか', 'Orang yang pekerja keras'],
    ['努力賞', 'どりょくしょう', 'Penghargaan atas usaha keras'],
  ],

  郊: [
    ['郊外', 'こうがい', 'Pinggiran kota'],
    ['近郊', 'きんこう', 'Daerah sekitar kota'],
    ['郊外住宅', 'こうがいじゅうたく', 'Perumahan di pinggiran kota'],
    ['郊外型', 'こうがいがた', 'Tipe pinggiran kota'],
    ['郊外電車', 'こうがいでんしゃ', 'Kereta menuju daerah pinggiran kota'],
  ],

  第: [
    ['第一', 'だいいち', 'Pertama; nomor satu'],
    ['第二', 'だいに', 'Kedua; nomor dua'],
    ['第三者', 'だいさんしゃ', 'Pihak ketiga'],
    ['第何', 'だいなん', 'Keberapa'],
    ['第六感', 'だいろっかん', 'Indra keenam'],
    ['第何回', 'だいなんかい', 'Keberapa kali'],
  ],

  机: [
    ['机', 'つくえ', 'Meja belajar; meja kerja'],
    ['机上', 'きじょう', 'Di atas meja; secara teoretis'],
    ['机上の空論', 'きじょうのくうろん', 'Teori kosong yang tidak realistis'],
    ['学習机', 'がくしゅうづくえ', 'Meja belajar'],
    ['机仕事', 'つくえしごと', 'Pekerjaan yang dilakukan di meja'],
  ],

  更: [
    ['更に', 'さらに', 'Lebih lanjut; semakin'],
    ['変更', 'へんこう', 'Perubahan; mengubah'],
    ['更新', 'こうしん', 'Pembaruan; memperbarui'],
    ['更衣室', 'こういしつ', 'Ruang ganti pakaian'],
    ['更年期', 'こうねんき', 'Masa menopause'],
    ['夜更かし', 'よふかし', 'Begadang'],
  ],

  清: [
    ['清い', 'きよい', 'Bersih; murni'],
    ['清潔', 'せいけつ', 'Bersih; higienis'],
    ['清掃', 'せいそう', 'Pembersihan'],
    ['清水', 'しみず', 'Air jernih; mata air'],
    ['清書', 'せいしょ', 'Menyalin tulisan dengan rapi'],
    ['清涼飲料水', 'せいりょういんりょうすい', 'Minuman ringan'],
  ],

  看: [
    ['看護', 'かんご', 'Perawatan pasien; keperawatan'],
    ['看護師', 'かんごし', 'Perawat'],
    ['看病', 'かんびょう', 'Merawat orang sakit'],
    ['看板', 'かんばん', 'Papan nama; papan reklame'],
    ['看守', 'かんしゅ', 'Sipir penjara'],
    ['看取る', 'みとる', 'Merawat seseorang hingga meninggal'],
  ],

  算: [
    ['計算', 'けいさん', 'Perhitungan; menghitung'],
    ['算数', 'さんすう', 'Aritmetika'],
    ['予算', 'よさん', 'Anggaran'],
    ['決算', 'けっさん', 'Penyelesaian perhitungan keuangan'],
    ['暗算', 'あんざん', 'Menghitung di luar kepala'],
    ['算出', 'さんしゅつ', 'Menghitung; menghasilkan angka'],
  ],

  谷: [
    ['谷', 'たに', 'Lembah'],
    ['谷間', 'たにま', 'Lembah; celah di antara bukit'],
    ['渓谷', 'けいこく', 'Ngarai; lembah sungai'],
    ['谷川', 'たにがわ', 'Sungai di lembah'],
    ['谷底', 'たにぞこ', 'Dasar lembah'],
    ['谷風', 'たにかぜ', 'Angin lembah'],
  ],

  晴: [
    ['晴れる', 'はれる', 'Cerah; menjadi cerah'],
    ['晴れ', 'はれ', 'Cuaca cerah'],
    ['晴れ着', 'はれぎ', 'Pakaian untuk acara istimewa'],
    ['晴天', 'せいてん', 'Cuaca cerah'],
    ['快晴', 'かいせい', 'Cerah tanpa awan'],
    ['晴れ間', 'はれま', 'Celah waktu ketika cuaca menjadi cerah'],
  ],

  雲: [
    ['雲', 'くも', 'Awan'],
    ['雲海', 'うんかい', 'Lautan awan'],
    ['雲行き', 'くもゆき', 'Pergerakan awan; perkembangan situasi'],
    ['白雲', 'はくうん', 'Awan putih'],
    ['雨雲', 'あまぐも', 'Awan hujan'],
    ['雲一つない', 'くもひとつない', 'Tidak ada awan sama sekali'],
  ],
  星: [
    ['星', 'ほし', 'Bintang'],
    ['星空', 'ほしぞら', 'Langit berbintang'],
    ['星座', 'せいざ', 'Rasi bintang'],
    ['流星', 'りゅうせい', 'Meteor; bintang jatuh'],
    ['惑星', 'わくせい', 'Planet'],
    ['衛星', 'えいせい', 'Satelit'],
  ],

  麦: [
    ['麦', 'むぎ', 'Gandum; jelai'],
    ['小麦', 'こむぎ', 'Gandum'],
    ['麦茶', 'むぎちゃ', 'Teh barley'],
    ['麦畑', 'むぎばたけ', 'Ladang gandum'],
    ['麦飯', 'むぎめし', 'Nasi campur jelai'],
    ['大麦', 'おおむぎ', 'Jelai'],
  ],

  舟: [
    ['舟', 'ふね', 'Perahu'],
    ['小舟', 'こぶね', 'Perahu kecil'],
    ['舟旅', 'ふなたび', 'Perjalanan menggunakan perahu'],
    ['舟遊び', 'ふなあそび', 'Bermain atau bersantai naik perahu'],
    ['舟乗り', 'ふなのり', 'Pelaut; orang yang mengemudikan perahu'],
    ['渡し舟', 'わたしぶね', 'Perahu penyeberangan'],
  ],

  湾: [
    ['湾', 'わん', 'Teluk'],
    ['湾岸', 'わんがん', 'Daerah pesisir teluk'],
    ['湾内', 'わんない', 'Di dalam teluk'],
    ['湾口', 'わんこう', 'Mulut teluk'],
    ['東京湾', 'とうきょうわん', 'Teluk Tokyo'],
    ['湾岸道路', 'わんがんどうろ', 'Jalan pesisir teluk'],
  ],

  岸: [
    ['岸', 'きし', 'Tepi; pantai'],
    ['海岸', 'かいがん', 'Pantai'],
    ['岸辺', 'きしべ', 'Tepi sungai atau danau'],
    ['対岸', 'たいがん', 'Seberang sungai atau teluk'],
    ['川岸', 'かわぎし', 'Tepi sungai'],
    ['沿岸', 'えんがん', 'Wilayah pesisir'],
  ],

  宗: [
    ['宗教', 'しゅうきょう', 'Agama'],
    ['宗派', 'しゅうは', 'Aliran atau sekte agama'],
    ['宗教家', 'しゅうきょうか', 'Tokoh agama'],
    ['宗教的', 'しゅうきょうてき', 'Bersifat keagamaan'],
    ['改宗', 'かいしゅう', 'Berpindah agama'],
    ['宗旨', 'しゅうし', 'Ajaran atau prinsip suatu aliran agama'],
  ],
  坊: [
    ['坊さん', 'ぼうさん', 'Biksu; pendeta Buddha'],
    ['坊主', 'ぼうず', 'Biksu; kepala plontos'],
    ['坊や', 'ぼうや', 'Anak laki-laki kecil; nak'],
    ['寝坊', 'ねぼう', 'Bangun kesiangan'],
    ['朝寝坊', 'あさねぼう', 'Kebiasaan bangun kesiangan'],
    ['坊ちゃん', 'ぼっちゃん', 'Anak laki-laki; tuan muda'],
  ],

  恋: [
    ['恋', 'こい', 'Cinta; asmara'],
    ['恋しい', 'こいしい', 'Merindukan; dirindukan'],
    ['恋人', 'こいびと', 'Kekasih; pacar'],
    ['恋愛', 'れんあい', 'Percintaan; hubungan asmara'],
    ['恋心', 'こいごころ', 'Perasaan cinta'],
    ['失恋', 'しつれん', 'Patah hati'],
  ],

  愛: [
    ['愛', 'あい', 'Cinta; kasih sayang'],
    ['愛する', 'あいする', 'Mencintai; menyayangi'],
    ['愛情', 'あいじょう', 'Kasih sayang'],
    ['愛人', 'あいじん', 'Kekasih; pasangan gelap'],
    ['愛用', 'あいよう', 'Sering menggunakan; menjadi barang kesayangan'],
    ['恋愛', 'れんあい', 'Percintaan; hubungan asmara'],
  ],

  災: [
    ['災い', 'わざわい', 'Bencana; malapetaka'],
    ['災害', 'さいがい', 'Bencana'],
    ['火災', 'かさい', 'Kebakaran'],
    ['災難', 'さいなん', 'Musibah; kemalangan'],
    ['災害地', 'さいがいち', 'Daerah terdampak bencana'],
    ['自然災害', 'しぜんさいがい', 'Bencana alam'],
  ],

  背: [
    ['背', 'せ', 'Punggung; tinggi badan'],
    ['背中', 'せなか', 'Punggung'],
    ['背が高い', 'せがたかい', 'Bertubuh tinggi'],
    ['背負う', 'せおう', 'Memikul; menggendong di punggung'],
    ['背広', 'せびろ', 'Setelan jas pria'],
    ['背景', 'はいけい', 'Latar belakang'],
  ],

  祖: [
    ['祖父', 'そふ', 'Kakek'],
    ['祖母', 'そぼ', 'Nenek'],
    ['祖先', 'そせん', 'Leluhur; nenek moyang'],
    ['祖国', 'そこく', 'Tanah air'],
    ['祖父母', 'そふぼ', 'Kakek dan nenek'],
    ['先祖', 'せんぞ', 'Nenek moyang; leluhur'],
  ],

  孫: [
    ['孫', 'まご', 'Cucu'],
    ['孫娘', 'まごむすめ', 'Cucu perempuan'],
    ['孫息子', 'まごむすこ', 'Cucu laki-laki'],
    ['初孫', 'ういまご', 'Cucu pertama'],
    ['子孫', 'しそん', 'Keturunan; anak cucu'],
    ['孫の手', 'まごのて', 'Alat penggaruk punggung'],
  ],

  規: [
    ['規則', 'きそく', 'Peraturan'],
    ['規定', 'きてい', 'Ketentuan; ketetapan'],
    ['規模', 'きぼ', 'Skala; ukuran'],
    ['規準', 'きじゅん', 'Standar; patokan'],
    ['規制', 'きせい', 'Regulasi; pembatasan'],
    ['新規', 'しんき', 'Baru; hal yang baru dimulai'],
  ],

  総: [
    ['総合', 'そうごう', 'Keseluruhan; gabungan'],
    ['総理', 'そうり', 'Perdana menteri'],
    ['総人口', 'そうじんこう', 'Jumlah penduduk keseluruhan'],
    ['総額', 'そうがく', 'Jumlah total'],
    ['総務', 'そうむ', 'Urusan umum; administrasi umum'],
    ['総選挙', 'そうせんきょ', 'Pemilihan umum'],
  ],

  漁: [
    ['漁', 'りょう', 'Penangkapan ikan'],
    ['漁業', 'ぎょぎょう', 'Industri perikanan'],
    ['漁師', 'りょうし', 'Nelayan'],
    ['漁船', 'ぎょせん', 'Kapal nelayan'],
    ['漁村', 'ぎょそん', 'Desa nelayan'],
    ['漁港', 'ぎょこう', 'Pelabuhan perikanan'],
  ],

  塔: [
    ['塔', 'とう', 'Menara'],
    ['鉄塔', 'てっとう', 'Menara besi; menara transmisi'],
    ['東京タワー', 'とうきょうタワー', 'Menara Tokyo'],
    ['五重塔', 'ごじゅうのとう', 'Pagoda lima tingkat'],
    ['電波塔', 'でんぱとう', 'Menara pemancar'],
    ['塔の上', 'とうのうえ', 'Di atas menara'],
  ],

  器: [
    ['器', 'うつわ', 'Wadah; mangkuk; kapasitas seseorang'],
    ['食器', 'しょっき', 'Peralatan makan'],
    ['楽器', 'がっき', 'Alat musik'],
    ['器具', 'きぐ', 'Peralatan; perlengkapan'],
    ['容器', 'ようき', 'Wadah; kontainer'],
    ['器用', 'きよう', 'Terampil; cekatan'],
  ],

  域: [
    ['地域', 'ちいき', 'Wilayah; daerah'],
    ['区域', 'くいき', 'Zona; kawasan'],
    ['領域', 'りょういき', 'Wilayah; ruang lingkup'],
    ['地域社会', 'ちいきしゃかい', 'Masyarakat setempat'],
    ['全域', 'ぜんいき', 'Seluruh wilayah'],
    ['域内', 'いきない', 'Di dalam wilayah'],
  ],

  精: [
    ['精神', 'せいしん', 'Jiwa; mental'],
    ['精一杯', 'せいいっぱい', 'Dengan segenap kemampuan'],
    ['精密', 'せいみつ', 'Presisi; sangat teliti'],
    ['精算', 'せいさん', 'Perhitungan akhir; pelunasan'],
    ['精力', 'せいりょく', 'Energi; tenaga'],
    ['精通', 'せいつう', 'Sangat memahami; ahli dalam suatu bidang'],
  ],

  管: [
    ['管', 'くだ', 'Pipa; tabung'],
    ['管理', 'かんり', 'Pengelolaan; manajemen'],
    ['管理人', 'かんりにん', 'Pengelola; penjaga'],
    ['水道管', 'すいどうかん', 'Pipa air'],
    ['血管', 'けっかん', 'Pembuluh darah'],
    ['管楽器', 'かんがっき', 'Alat musik tiup'],
  ],

  賃: [
    ['賃金', 'ちんぎん', 'Upah; gaji'],
    ['家賃', 'やちん', 'Uang sewa rumah'],
    ['運賃', 'うんちん', 'Ongkos transportasi'],
    ['料金', 'りょうきん', 'Biaya; tarif'],
    ['賃貸', 'ちんたい', 'Penyewaan'],
    ['賃貸住宅', 'ちんたいじゅうたく', 'Rumah kontrakan; hunian sewa'],
  ],

  資: [
    ['資金', 'しきん', 'Dana; modal'],
    ['資料', 'しりょう', 'Dokumen; bahan referensi'],
    ['資源', 'しげん', 'Sumber daya'],
    ['資格', 'しかく', 'Kualifikasi; sertifikat'],
    ['資産', 'しさん', 'Aset; kekayaan'],
    ['資本', 'しほん', 'Modal; kapital'],
  ],

  福: [
    ['幸福', 'こうふく', 'Kebahagiaan'],
    ['福祉', 'ふくし', 'Kesejahteraan sosial'],
    ['福袋', 'ふくぶくろ', 'Tas keberuntungan berisi barang acak'],
    ['祝福', 'しゅくふく', 'Berkah; ucapan selamat'],
    ['幸福感', 'こうふくかん', 'Perasaan bahagia'],
    ['福引', 'ふくびき', 'Undian berhadiah'],
  ],

  副: [
    ['副', 'ふく', 'Wakil; tambahan; sekunder'],
    ['副作用', 'ふくさよう', 'Efek samping'],
    ['副社長', 'ふくしゃちょう', 'Wakil direktur perusahaan'],
    ['副大統領', 'ふくだいとうりょう', 'Wakil presiden'],
    ['副教材', 'ふくきょうざい', 'Bahan ajar tambahan'],
    ['副題', 'ふくだい', 'Subjudul'],
  ],
  婦: [
    ['婦人', 'ふじん', 'Wanita; perempuan dewasa'],
    ['主婦', 'しゅふ', 'Ibu rumah tangga'],
    ['夫婦', 'ふうふ', 'Suami istri; pasangan menikah'],
    ['婦人服', 'ふじんふく', 'Pakaian wanita'],
    ['産婦人科', 'さんふじんか', 'Klinik atau departemen kebidanan dan kandungan'],
    ['新婦', 'しんぷ', 'Pengantin wanita'],
  ],

  腰: [
    ['腰', 'こし', 'Pinggang; punggung bagian bawah'],
    ['腰痛', 'ようつう', 'Nyeri pinggang'],
    ['腰掛ける', 'こしかける', 'Duduk; mengambil tempat duduk'],
    ['腰掛け', 'こしかけ', 'Tempat duduk; bangku'],
    ['腰回り', 'こしまわり', 'Lingkar pinggang'],
    ['腰が低い', 'こしがひくい', 'Rendah hati; sopan'],
  ],

  軒: [
    ['軒', 'のき', 'Tepian atap'],
    ['一軒', 'いっけん', 'Satu rumah; satu bangunan'],
    ['二軒', 'にけん', 'Dua rumah; dua bangunan'],
    ['軒先', 'のきさき', 'Bagian depan di bawah tepian atap'],
    ['軒下', 'のきした', 'Bagian bawah tepian atap'],
    ['軒並み', 'のきなみ', 'Berderet sepanjang jalan; hampir semuanya'],
  ],

  械: [
    ['機械', 'きかい', 'Mesin'],
    ['機械化', 'きかいか', 'Mekanisasi'],
    ['機械工学', 'きかいこうがく', 'Teknik mesin'],
    ['機械的', 'きかいてき', 'Mekanis; seperti mesin'],
    ['機械音', 'きかいおん', 'Suara mesin'],
    ['機械部品', 'きかいぶひん', 'Komponen mesin'],
  ],

  翌: [
    ['翌日', 'よくじつ', 'Hari berikutnya'],
    ['翌朝', 'よくあさ', 'Pagi berikutnya'],
    ['翌週', 'よくしゅう', 'Minggu berikutnya'],
    ['翌月', 'よくげつ', 'Bulan berikutnya'],
    ['翌年', 'よくねん', 'Tahun berikutnya'],
    ['翌々日', 'よくよくじつ', 'Dua hari kemudian'],
  ],

  誌: [
    ['雑誌', 'ざっし', 'Majalah'],
    ['週刊誌', 'しゅうかんし', 'Majalah mingguan'],
    ['月刊誌', 'げっかんし', 'Majalah bulanan'],
    ['日誌', 'にっし', 'Catatan harian; jurnal'],
    ['会誌', 'かいし', 'Buletin atau majalah organisasi'],
    ['専門誌', 'せんもんし', 'Majalah khusus bidang tertentu'],
  ],
  像: [
    ['想像', 'そうぞう', 'Imajinasi; membayangkan'],
    ['映像', 'えいぞう', 'Gambar bergerak; visual'],
    ['画像', 'がぞう', 'Gambar; citra digital'],
    ['肖像', 'しょうぞう', 'Potret; lukisan wajah'],
    ['現像', 'げんぞう', 'Mencuci film foto'],
    ['印象', 'いんしょう', 'Kesan'],
  ],

  能: [
    ['能力', 'のうりょく', 'Kemampuan'],
    ['可能', 'かのう', 'Mungkin; memungkinkan'],
    ['才能', 'さいのう', 'Bakat'],
    ['性能', 'せいのう', 'Performa; kemampuan kerja'],
    ['能率', 'のうりつ', 'Efisiensi'],
    ['能動的', 'のうどうてき', 'Aktif; proaktif'],
  ],

  毒: [
    ['毒', 'どく', 'Racun'],
    ['毒薬', 'どくやく', 'Obat beracun'],
    ['消毒', 'しょうどく', 'Disinfeksi'],
    ['中毒', 'ちゅうどく', 'Keracunan; kecanduan'],
    ['毒物', 'どくぶつ', 'Zat beracun'],
    ['毒性', 'どくせい', 'Sifat beracun; toksisitas'],
  ],

  歴: [
    ['歴史', 'れきし', 'Sejarah'],
    ['経歴', 'けいれき', 'Riwayat hidup; pengalaman'],
    ['学歴', 'がくれき', 'Riwayat pendidikan'],
    ['職歴', 'しょくれき', 'Riwayat pekerjaan'],
    ['履歴', 'りれき', 'Riwayat; rekam jejak'],
    ['歴代', 'れきだい', 'Dari generasi ke generasi'],
  ],

  喫: [
    ['喫茶店', 'きっさてん', 'Kedai kopi'],
    ['喫茶', 'きっさ', 'Minum teh atau kopi'],
    ['喫煙', 'きつえん', 'Merokok'],
    ['喫煙所', 'きつえんじょ', 'Tempat merokok'],
    ['喫煙者', 'きつえんしゃ', 'Perokok'],
    ['喫煙室', 'きつえんしつ', 'Ruang merokok'],
  ],

  達: [
    ['友達', 'ともだち', 'Teman'],
    ['私達', 'わたしたち', 'Kami; kita'],
    ['子供達', 'こどもたち', 'Anak-anak'],
    ['配達', 'はいたつ', 'Pengantaran'],
    ['到達', 'とうたつ', 'Pencapaian; sampai ke tujuan'],
    ['達成', 'たっせい', 'Pencapaian; keberhasilan'],
  ],

  標: [
    ['目標', 'もくひょう', 'Target; tujuan'],
    ['標準', 'ひょうじゅん', 'Standar'],
    ['標識', 'ひょうしき', 'Rambu; tanda'],
    ['標本', 'ひょうほん', 'Spesimen; sampel'],
    ['標語', 'ひょうご', 'Slogan'],
    ['道標', 'みちしるべ', 'Penunjuk jalan'],
  ],

  夢: [
    ['夢', 'ゆめ', 'Mimpi; impian'],
    ['夢中', 'むちゅう', 'Asyik; tenggelam dalam sesuatu'],
    ['悪夢', 'あくむ', 'Mimpi buruk'],
    ['夢見る', 'ゆめみる', 'Bermimpi; mengimpikan'],
    ['夢想', 'むそう', 'Lamunan; khayalan'],
    ['初夢', 'はつゆめ', 'Mimpi pertama pada tahun baru'],
  ],

  肩: [
    ['肩', 'かた', 'Bahu'],
    ['肩書き', 'かたがき', 'Jabatan; gelar'],
    ['肩幅', 'かたはば', 'Lebar bahu'],
    ['肩こり', 'かたこり', 'Bahu kaku; pegal bahu'],
    ['肩代わり', 'かたがわり', 'Mengambil alih tanggungan'],
    ['肩身', 'かたみ', 'Kedudukan atau perasaan harga diri'],
  ],

  胃: [
    ['胃', 'い', 'Lambung'],
    ['胃痛', 'いつう', 'Sakit lambung'],
    ['胃薬', 'いぐすり', 'Obat lambung'],
    ['胃炎', 'いえん', 'Radang lambung'],
    ['胃腸', 'いちょう', 'Lambung dan usus'],
    ['胃カメラ', 'いカメラ', 'Endoskopi lambung'],
  ],

  液: [
    ['液体', 'えきたい', 'Cairan'],
    ['液', 'えき', 'Cairan'],
    ['血液', 'けつえき', 'Darah'],
    ['液晶', 'えきしょう', 'Kristal cair'],
    ['液体洗剤', 'えきたいせんざい', 'Deterjen cair'],
    ['消毒液', 'しょうどくえき', 'Cairan disinfektan'],
  ],

  将: [
    ['将来', 'しょうらい', 'Masa depan'],
    ['将軍', 'しょうぐん', 'Jenderal; shogun'],
    ['将棋', 'しょうぎ', 'Permainan shogi'],
    ['大将', 'たいしょう', 'Komandan; pemimpin'],
    ['将校', 'しょうこう', 'Perwira militer'],
    ['将来性', 'しょうらいせい', 'Prospek masa depan'],
  ],
  委: [
    ['委員', 'いいん', 'Anggota komite'],
    ['委員会', 'いいんかい', 'Komite; panitia'],
    ['委員長', 'いいんちょう', 'Ketua komite'],
    ['委任', 'いにん', 'Pelimpahan wewenang'],
    ['委託', 'いたく', 'Penyerahan tugas; penitipan'],
    ['委ねる', 'ゆだねる', 'Mempercayakan; menyerahkan'],
  ],

  恥: [
    ['恥', 'はじ', 'Rasa malu'],
    ['恥ずかしい', 'はずかしい', 'Malu'],
    ['恥じる', 'はじる', 'Merasa malu'],
    ['恥をかく', 'はじをかく', 'Mempermalukan diri; mendapat malu'],
    ['恥知らず', 'はじしらず', 'Tidak tahu malu'],
    ['赤恥', 'あかはじ', 'Malu besar'],
  ],

  皆: [
    ['皆', 'みんな', 'Semua orang'],
    ['皆さん', 'みなさん', 'Saudara sekalian'],
    ['皆様', 'みなさま', 'Semua hadirin (sopan)'],
    ['皆無', 'かいむ', 'Sama sekali tidak ada'],
    ['皆勤', 'かいきん', 'Hadir tanpa absen'],
    ['皆既日食', 'かいきにっしょく', 'Gerhana matahari total'],
  ],

  章: [
    ['文章', 'ぶんしょう', 'Kalimat; tulisan'],
    ['第一章', 'だいいっしょう', 'Bab pertama'],
    ['章', 'しょう', 'Bab; pasal'],
    ['章立て', 'しょうだて', 'Pembagian bab'],
    ['勲章', 'くんしょう', 'Medali kehormatan'],
    ['記章', 'きしょう', 'Lencana; tanda kehormatan'],
  ],

  途: [
    ['途中', 'とちゅう', 'Di tengah perjalanan; dalam proses'],
    ['用途', 'ようと', 'Kegunaan'],
    ['途上', 'とじょう', 'Dalam perjalanan; sedang berkembang'],
    ['帰途', 'きと', 'Dalam perjalanan pulang'],
    ['前途', 'ぜんと', 'Masa depan; prospek'],
    ['途絶える', 'とだえる', 'Terputus; berhenti'],
  ],

  然: [
    ['自然', 'しぜん', 'Alam; alami'],
    ['当然', 'とうぜん', 'Tentu saja; sewajarnya'],
    ['突然', 'とつぜん', 'Tiba-tiba'],
    ['全然', 'ぜんぜん', 'Sama sekali (biasanya dengan bentuk negatif)'],
    ['偶然', 'ぐうぜん', 'Kebetulan'],
    ['天然', 'てんねん', 'Alami; natural'],
  ],

  詞: [
    ['歌詞', 'かし', 'Lirik lagu'],
    ['名詞', 'めいし', 'Kata benda'],
    ['動詞', 'どうし', 'Kata kerja'],
    ['形容詞', 'けいようし', 'Kata sifat-i'],
    ['副詞', 'ふくし', 'Kata keterangan'],
    ['助詞', 'じょし', 'Partikel'],
  ],
  諸: [
    ['諸国', 'しょこく', 'Berbagai negara'],
    ['諸問題', 'しょもんだい', 'Berbagai masalah'],
    ['諸君', 'しょくん', 'Saudara sekalian'],
    ['諸外国', 'しょがいこく', 'Negara-negara asing'],
    ['諸事情', 'しょじじょう', 'Berbagai keadaan'],
    ['諸説', 'しょせつ', 'Berbagai pendapat atau teori'],
  ],

  殿: [
    ['殿', 'との', 'Tuan; bangsawan'],
    ['殿様', 'とのさま', 'Tuan bangsawan; daimyo'],
    ['宮殿', 'きゅうでん', 'Istana'],
    ['殿堂', 'でんどう', 'Aula besar; tempat terhormat'],
    ['殿下', 'でんか', 'Yang Mulia'],
    ['殿方', 'とのがた', 'Para pria (ungkapan sopan)'],
  ],

  秒: [
    ['秒', 'びょう', 'Detik'],
    ['一秒', 'いちびょう', 'Satu detik'],
    ['秒読み', 'びょうよみ', 'Hitung mundur'],
    ['秒速', 'びょうそく', 'Kecepatan per detik'],
    ['秒針', 'びょうしん', 'Jarum detik'],
    ['秒単位', 'びょうたんい', 'Satuan detik'],
  ],

  司: [
    ['司会', 'しかい', 'Pembawa acara; moderator'],
    ['司会者', 'しかいしゃ', 'Pembawa acara'],
    ['上司', 'じょうし', 'Atasan'],
    ['司令', 'しれい', 'Komando; perintah'],
    ['司令官', 'しれいかん', 'Komandan'],
    ['祭司', 'さいし', 'Pendeta; imam'],
  ],

  均: [
    ['平均', 'へいきん', 'Rata-rata'],
    ['均等', 'きんとう', 'Merata; sama rata'],
    ['均一', 'きんいつ', 'Seragam; sama'],
    ['均衡', 'きんこう', 'Keseimbangan'],
    ['不均等', 'ふきんとう', 'Tidak merata'],
    ['均す', 'ならす', 'Meratakan'],
  ],

  粒: [
    ['粒', 'つぶ', 'Butir; biji'],
    ['一粒', 'ひとつぶ', 'Satu butir'],
    ['粒子', 'りゅうし', 'Partikel'],
    ['米粒', 'こめつぶ', 'Butiran beras'],
    ['大粒', 'おおつぶ', 'Butiran besar'],
    ['小粒', 'こつぶ', 'Butiran kecil'],
  ],

  宝: [
    ['宝', 'たから', 'Harta; benda berharga'],
    ['宝物', 'たからもの', 'Barang berharga; harta karun'],
    ['宝石', 'ほうせき', 'Batu permata'],
    ['宝くじ', 'たからくじ', 'Lotre'],
    ['国宝', 'こくほう', 'Harta nasional'],
    ['宝箱', 'たからばこ', 'Kotak harta'],
  ],

  城: [
    ['城', 'しろ', 'Kastel; istana'],
    ['城下町', 'じょうかまち', 'Kota di sekitar kastel'],
    ['城主', 'じょうしゅ', 'Penguasa kastel'],
    ['城跡', 'しろあと', 'Reruntuhan bekas kastel'],
    ['城門', 'じょうもん', 'Gerbang kastel'],
    ['築城', 'ちくじょう', 'Pembangunan kastel'],
  ],

  命: [
    ['命', 'いのち', 'Nyawa; kehidupan'],
    ['生命', 'せいめい', 'Kehidupan'],
    ['命令', 'めいれい', 'Perintah'],
    ['運命', 'うんめい', 'Takdir'],
    ['命日', 'めいにち', 'Hari peringatan kematian'],
    ['救命', 'きゅうめい', 'Penyelamatan nyawa'],
  ],
  脂: [
    ['脂', 'あぶら', 'Lemak; minyak'],
    ['脂肪', 'しぼう', 'Lemak tubuh'],
    ['脂身', 'あぶらみ', 'Bagian daging berlemak'],
    ['脂質', 'ししつ', 'Kandungan lemak'],
    ['油脂', 'ゆし', 'Minyak dan lemak'],
    ['脂っこい', 'あぶらっこい', 'Berminyak; berlemak'],
  ],

  条: [
    ['条件', 'じょうけん', 'Syarat; kondisi'],
    ['条約', 'じょうやく', 'Perjanjian; traktat'],
    ['条例', 'じょうれい', 'Peraturan daerah'],
    ['条文', 'じょうぶん', 'Pasal dalam peraturan'],
    ['一条', 'いちじょう', 'Pasal satu'],
    ['箇条書き', 'かじょうがき', 'Penulisan dalam bentuk poin'],
  ],

  党: [
    ['政党', 'せいとう', 'Partai politik'],
    ['党員', 'とういん', 'Anggota partai'],
    ['党首', 'とうしゅ', 'Ketua partai'],
    ['与党', 'よとう', 'Partai yang berkuasa'],
    ['野党', 'やとう', 'Partai oposisi'],
    ['党派', 'とうは', 'Faksi; kelompok politik'],
  ],

  欧: [
    ['欧米', 'おうべい', 'Eropa dan Amerika'],
    ['欧州', 'おうしゅう', 'Eropa'],
    ['欧州連合', 'おうしゅうれんごう', 'Uni Eropa'],
    ['北欧', 'ほくおう', 'Eropa Utara'],
    ['南欧', 'なんおう', 'Eropa Selatan'],
    ['東欧', 'とうおう', 'Eropa Timur'],
  ],

  順: [
    ['順番', 'じゅんばん', 'Urutan; giliran'],
    ['順序', 'じゅんじょ', 'Susunan; urutan'],
    ['順調', 'じゅんちょう', 'Lancar; berjalan baik'],
    ['手順', 'てじゅん', 'Prosedur; langkah-langkah'],
    ['順番に', 'じゅんばんに', 'Secara bergiliran'],
    ['従順', 'じゅうじゅん', 'Patuh; penurut'],
  ],

  底: [
    ['底', 'そこ', 'Dasar; bagian bawah'],
    ['海底', 'かいてい', 'Dasar laut'],
    ['底辺', 'ていへん', 'Dasar; lapisan terbawah'],
    ['底力', 'そこぢから', 'Kekuatan tersembunyi'],
    ['底面', 'ていめん', 'Permukaan bawah'],
    ['徹底', 'てってい', 'Menyeluruh; tuntas'],
  ],

  則: [
    ['規則', 'きそく', 'Peraturan'],
    ['原則', 'げんそく', 'Prinsip dasar'],
    ['法則', 'ほうそく', 'Hukum; kaidah'],
    ['反則', 'はんそく', 'Pelanggaran aturan'],
    ['規則正しい', 'きそくただしい', 'Teratur; disiplin'],
    ['不規則', 'ふきそく', 'Tidak teratur'],
  ],
  損: [
    ['損', 'そん', 'Kerugian'],
    ['損害', 'そんがい', 'Kerugian; kerusakan'],
    ['損失', 'そんしつ', 'Kehilangan; kerugian'],
    ['損得', 'そんとく', 'Untung dan rugi'],
    ['破損', 'はそん', 'Kerusakan'],
    ['損なう', 'そこなう', 'Merusak; mengganggu'],
  ],

  版: [
    ['版', 'はん', 'Edisi; cetakan'],
    ['出版', 'しゅっぱん', 'Penerbitan'],
    ['出版社', 'しゅっぱんしゃ', 'Penerbit'],
    ['版画', 'はんが', 'Cetakan gambar; seni grafis'],
    ['改訂版', 'かいていばん', 'Edisi revisi'],
    ['最新版', 'さいしんばん', 'Edisi terbaru'],
  ],

  財: [
    ['財産', 'ざいさん', 'Harta kekayaan'],
    ['財政', 'ざいせい', 'Keuangan negara'],
    ['財団', 'ざいだん', 'Yayasan'],
    ['文化財', 'ぶんかざい', 'Warisan budaya'],
    ['財宝', 'ざいほう', 'Harta karun'],
    ['財源', 'ざいげん', 'Sumber keuangan'],
  ],

  制: [
    ['制度', 'せいど', 'Sistem;制度'],
    ['制限', 'せいげん', 'Pembatasan'],
    ['制服', 'せいふく', 'Seragam'],
    ['規制', 'きせい', 'Regulasi; pengaturan'],
    ['強制', 'きょうせい', 'Pemaksaan'],
    ['制御', 'せいぎょ', 'Pengendalian'],
  ],

  徒: [
    ['生徒', 'せいと', 'Murid; siswa'],
    ['徒歩', 'とほ', 'Berjalan kaki'],
    ['徒競走', 'ときょうそう', 'Lomba lari'],
    ['教徒', 'きょうと', 'Penganut agama'],
    ['信徒', 'しんと', 'Umat; orang beriman'],
    ['無駄な', 'むだな', 'Sia-sia; tidak berguna'],
  ],

  庭: [
    ['庭', 'にわ', 'Halaman; taman'],
    ['庭園', 'ていえん', 'Taman'],
    ['家庭', 'かてい', 'Rumah tangga; keluarga'],
    ['校庭', 'こうてい', 'Halaman sekolah'],
    ['庭先', 'にわさき', 'Bagian depan halaman'],
    ['中庭', 'なかにわ', 'Halaman tengah'],
  ],

  脳: [
    ['脳', 'のう', 'Otak'],
    ['脳みそ', 'のうみそ', 'Otak'],
    ['脳波', 'のうは', 'Gelombang otak'],
    ['脳裏', 'のうり', 'Dalam pikiran'],
    ['頭脳', 'ずのう', 'Kecerdasan; otak'],
    ['脳科学', 'のうかがく', 'Ilmu saraf; neurosains'],
  ],

  超: [
    ['超える', 'こえる', 'Melampaui; melebihi'],
    ['超す', 'こす', 'Melebihi; melampaui'],
    ['超過', 'ちょうか', 'Kelebihan; melampaui batas'],
    ['超能力', 'ちょうのうりょく', 'Kekuatan supranatural'],
    ['超音波', 'ちょうおんぱ', 'Gelombang ultrasonik'],
    ['超高速', 'ちょうこうそく', 'Kecepatan sangat tinggi'],
  ],

  候: [
    ['気候', 'きこう', 'Iklim'],
    ['候補', 'こうほ', 'Kandidat; calon'],
    ['候補者', 'こうほしゃ', 'Para kandidat'],
    ['天候', 'てんこう', 'Cuaca'],
    ['兆候', 'ちょうこう', 'Tanda; gejala'],
    ['候文', 'そうろうぶん', 'Gaya bahasa surat Jepang kuno'],
  ],

  勇: [
    ['勇気', 'ゆうき', 'Keberanian'],
    ['勇敢', 'ゆうかん', 'Berani; gagah berani'],
    ['勇者', 'ゆうしゃ', 'Pahlawan; pemberani'],
    ['勇ましい', 'いさましい', 'Gagah; berani'],
    ['勇気づける', 'ゆうきづける', 'Memberi semangat'],
    ['武勇', 'ぶゆう', 'Keberanian dalam pertempuran'],
  ],
  象: [
    ['象', 'ぞう', 'Gajah'],
    ['印象', 'いんしょう', 'Kesan'],
    ['現象', 'げんしょう', 'Fenomena; gejala'],
    ['対象', 'たいしょう', 'Objek; sasaran'],
    ['想像', 'そうぞう', 'Imajinasi; membayangkan'],
    ['象徴', 'しょうちょう', 'Simbol; lambang'],
  ],

  針: [
    ['針', 'はり', 'Jarum'],
    ['針金', 'はりがね', 'Kawat'],
    ['針仕事', 'はりしごと', 'Pekerjaan menjahit'],
    ['方針', 'ほうしん', 'Kebijakan; arah'],
    ['針路', 'しんろ', 'Arah perjalanan; haluan'],
    ['秒針', 'びょうしん', 'Jarum detik'],
  ],
  率: [
    ['率', 'りつ', 'Rasio; tingkat'],
    ['確率', 'かくりつ', 'Probabilitas; kemungkinan'],
    ['割合', 'わりあい', 'Persentase; perbandingan'],
    ['効率', 'こうりつ', 'Efisiensi'],
    ['率直', 'そっちょく', 'Terus terang; jujur'],
    ['引率', 'いんそつ', 'Memimpin; mendampingi rombongan'],
  ],

  武: [
    ['武器', 'ぶき', 'Senjata'],
    ['武道', 'ぶどう', 'Seni bela diri'],
    ['武士', 'ぶし', 'Samurai'],
    ['武力', 'ぶりょく', 'Kekuatan militer'],
    ['武装', 'ぶそう', 'Persenjataan'],
    ['武術', 'ぶじゅつ', 'Ilmu bela diri'],
  ],

  腹: [
    ['腹', 'はら', 'Perut'],
    ['腹痛', 'ふくつう', 'Sakit perut'],
    ['腹いっぱい', 'はらいっぱい', 'Kenyang; perut penuh'],
    ['空腹', 'くうふく', 'Lapar'],
    ['満腹', 'まんぷく', 'Kenyang'],
    ['腹立つ', 'はらだつ', 'Menjadi marah'],
  ],

  畜: [
    ['家畜', 'かちく', 'Hewan ternak'],
    ['畜産', 'ちくさん', 'Peternakan'],
    ['牧畜', 'ぼくちく', 'Peternakan; penggembalaan'],
    ['畜生', 'ちくしょう', 'Binatang; umpatan kekesalan'],
    ['畜舎', 'ちくしゃ', 'Kandang ternak'],
    ['畜力', 'ちくりょく', 'Tenaga hewan'],
  ],

  程: [
    ['程度', 'ていど', 'Tingkat; taraf'],
    ['日程', 'にってい', 'Jadwal kegiatan'],
    ['予定', 'よてい', 'Rencana; jadwal'],
    ['過程', 'かてい', 'Proses; tahapan'],
    ['課程', 'かてい', 'Kurikulum; program pendidikan'],
    ['程よい', 'ほどよい', 'Pas; cukup; sesuai'],
  ],
  滴: [
    ['水滴', 'すいてき', 'Tetesan air'],
    ['一滴', 'いってき', 'Satu tetes'],
    ['点滴', 'てんてき', 'Infus; tetesan cairan'],
    ['滴る', 'したたる', 'Menetes'],
    ['雨滴', 'うてき', 'Tetesan hujan'],
    ['滴下', 'てきか', 'Penetesan; meneteskan cairan'],
  ],

  航: [
    ['航空', 'こうくう', 'Penerbangan'],
    ['航海', 'こうかい', 'Pelayaran'],
    ['航路', 'こうろ', 'Jalur pelayaran atau penerbangan'],
    ['航行', 'こうこう', 'Navigasi; perjalanan kapal atau pesawat'],
    ['航空機', 'こうくうき', 'Pesawat udara'],
    ['航続距離', 'こうぞくきょり', 'Jarak tempuh kendaraan'],
  ],

  署: [
    ['署名', 'しょめい', 'Tanda tangan'],
    ['警察署', 'けいさつしょ', 'Kantor polisi'],
    ['消防署', 'しょうぼうしょ', 'Kantor pemadam kebakaran'],
    ['署長', 'しょちょう', 'Kepala kantor'],
    ['税務署', 'ぜいむしょ', 'Kantor pajak'],
    ['署員', 'しょいん', 'Petugas kantor'],
  ],

  景: [
    ['景色', 'けしき', 'Pemandangan'],
    ['風景', 'ふうけい', 'Lanskap; panorama'],
    ['景気', 'けいき', 'Kondisi ekonomi; suasana bisnis'],
    ['光景', 'こうけい', 'Pemandangan; kejadian yang terlihat'],
    ['景品', 'けいひん', 'Hadiah; barang hadiah'],
    ['背景', 'はいけい', 'Latar belakang'],
  ],

  猫: [
    ['猫', 'ねこ', 'Kucing'],
    ['子猫', 'こねこ', 'Anak kucing'],
    ['野良猫', 'のらねこ', 'Kucing liar'],
    ['黒猫', 'くろねこ', 'Kucing hitam'],
    ['猫背', 'ねこぜ', 'Punggung bungkuk'],
    ['招き猫', 'まねきねこ', 'Patung kucing pembawa keberuntungan'],
  ],
  根: [
    ['根', 'ね', 'Akar'],
    ['根本', 'こんぽん', 'Dasar; akar permasalahan'],
    ['根拠', 'こんきょ', 'Dasar; bukti'],
    ['根性', 'こんじょう', 'Mental; keteguhan hati'],
    ['屋根', 'やね', 'Atap rumah'],
    ['根回し', 'ねまわし', 'Persiapan atau koordinasi sebelumnya'],
  ],

  害: [
    ['害', 'がい', 'Bahaya; kerugian'],
    ['被害', 'ひがい', 'Kerugian; kerusakan akibat bencana'],
    ['害虫', 'がいちゅう', 'Serangga hama'],
    ['公害', 'こうがい', 'Pencemaran lingkungan'],
    ['災害', 'さいがい', 'Bencana'],
    ['害する', 'がいする', 'Merugikan; membahayakan'],
  ],

  罪: [
    ['罪', 'つみ', 'Dosa; kejahatan'],
    ['犯罪', 'はんざい', 'Tindak kriminal'],
    ['罪人', 'つみびと', 'Orang berdosa; penjahat'],
    ['有罪', 'ゆうざい', 'Bersalah'],
    ['無罪', 'むざい', 'Tidak bersalah'],
    ['罪悪感', 'ざいあくかん', 'Perasaan bersalah'],
  ],

  鉱: [
    ['鉱山', 'こうざん', 'Tambang'],
    ['鉱石', 'こうせき', 'Bijih mineral'],
    ['鉱物', 'こうぶつ', 'Mineral'],
    ['鉱業', 'こうぎょう', 'Industri pertambangan'],
    ['炭鉱', 'たんこう', 'Tambang batu bara'],
    ['鉱脈', 'こうみゃく', 'Urat mineral'],
  ],

  軍: [
    ['軍', 'ぐん', 'Militer; tentara'],
    ['軍隊', 'ぐんたい', 'Angkatan bersenjata'],
    ['軍人', 'ぐんじん', 'Prajurit; anggota militer'],
    ['軍事', 'ぐんじ', 'Urusan militer'],
    ['軍服', 'ぐんぷく', 'Seragam militer'],
    ['軍事力', 'ぐんじりょく', 'Kekuatan militer'],
  ],
  律: [
    ['法律', 'ほうりつ', 'Hukum; undang-undang'],
    ['規律', 'きりつ', 'Disiplin; tata tertib'],
    ['自律', 'じりつ', 'Kemandirian; pengendalian diri'],
    ['一律', 'いちりつ', 'Seragam; sama rata'],
    ['律儀', 'りちぎ', 'Jujur; dapat dipercaya'],
    ['旋律', 'せんりつ', 'Melodi'],
  ],

  畳: [
    ['畳', 'たたみ', 'Tikar tatami'],
    ['畳む', 'たたむ', 'Melipat'],
    ['畳屋', 'たたみや', 'Toko atau tukang tatami'],
    ['畳替え', 'たたみがえ', 'Penggantian tatami'],
    ['六畳', 'ろくじょう', 'Enam tikar tatami (ukuran ruangan)'],
    ['畳表', 'たたみおもて', 'Permukaan tikar tatami'],
  ],

  零: [
    ['零', 'れい', 'Nol'],
    ['零点', 'れいてん', 'Nilai nol'],
    ['零下', 'れいか', 'Di bawah nol'],
    ['零時', 'れいじ', 'Pukul dua belas malam'],
    ['零細', 'れいさい', 'Kecil; berskala sangat kecil'],
    ['零落', 'れいらく', 'Kemerosotan; jatuh miskin'],
  ],

  陸: [
    ['陸', 'りく', 'Daratan'],
    ['陸地', 'りくち', 'Tanah daratan'],
    ['大陸', 'たいりく', 'Benua'],
    ['陸上', 'りくじょう', 'Atletik; daratan'],
    ['上陸', 'じょうりく', 'Mendarat'],
    ['陸軍', 'りくぐん', 'Angkatan darat'],
  ],

  幅: [
    ['幅', 'はば', 'Lebar'],
    ['幅広い', 'はばひろい', 'Luas; beragam'],
    ['横幅', 'よこはば', 'Lebar horizontal'],
    ['車幅', 'しゃはば', 'Lebar kendaraan'],
    ['値幅', 'ねはば', 'Rentang harga'],
    ['大幅', 'おおはば', 'Dalam jumlah besar; secara signifikan'],
  ],
  富: [
    ['富む', 'とむ', 'Kaya; memiliki banyak'],
    ['富', 'とみ', 'Kekayaan'],
    ['富豪', 'ふごう', 'Orang kaya raya'],
    ['豊富', 'ほうふ', 'Berlimpah; kaya akan'],
    ['富士山', 'ふじさん', 'Gunung Fuji'],
    ['富国', 'ふこく', 'Negara kaya'],
  ],

  髪: [
    ['髪', 'かみ', 'Rambut'],
    ['髪の毛', 'かみのけ', 'Helai rambut'],
    ['白髪', 'しらが', 'Rambut putih; uban'],
    ['黒髪', 'くろかみ', 'Rambut hitam'],
    ['長髪', 'ちょうはつ', 'Rambut panjang'],
    ['髪型', 'かみがた', 'Model rambut'],
  ],

  銅: [
    ['銅', 'どう', 'Tembaga'],
    ['銅像', 'どうぞう', 'Patung perunggu'],
    ['銅貨', 'どうか', 'Uang logam tembaga'],
    ['銅板', 'どうばん', 'Lembaran tembaga'],
    ['青銅', 'せいどう', 'Perunggu'],
    ['銅線', 'どうせん', 'Kawat tembaga'],
  ],

  童: [
    ['童', 'わらべ', 'Anak kecil'],
    ['子供', 'こども', 'Anak-anak'],
    ['児童', 'じどう', 'Anak-anak; murid usia sekolah dasar'],
    ['童話', 'どうわ', 'Cerita anak-anak; dongeng'],
    ['童謡', 'どうよう', 'Lagu anak-anak'],
    ['童心', 'どうしん', 'Hati atau pikiran seperti anak kecil'],
  ],

  億: [
    ['億', 'おく', 'Seratus juta'],
    ['一億', 'いちおく', 'Seratus juta'],
    ['十億', 'じゅうおく', 'Satu miliar'],
    ['億万長者', 'おくまんちょうじゃ', 'Miliarder'],
    ['数億', 'すうおく', 'Beberapa ratus juta'],
    ['億単位', 'おくたんい', 'Dalam satuan seratus juta'],
  ],

  層: [
    ['層', 'そう', 'Lapisan; tingkatan'],
    ['階層', 'かいそう', 'Tingkatan; strata'],
    ['高層', 'こうそう', 'Gedung tinggi; lapisan atas'],
    ['地層', 'ちそう', 'Lapisan tanah'],
    ['年齢層', 'ねんれいそう', 'Kelompok usia'],
    ['利用者層', 'りようしゃそう', 'Kelompok pengguna'],
  ],

  綿: [
    ['綿', 'わた', 'Kapas'],
    ['綿花', 'めんか', 'Bunga kapas'],
    ['木綿', 'もめん', 'Kain katun'],
    ['綿菓子', 'わたがし', 'Arumanis; permen kapas'],
    ['綿棒', 'めんぼう', 'Kapas lidi'],
    ['綿毛', 'わたげ', 'Serat halus seperti kapas'],
  ],
  境: [
    ['境', 'さかい', 'Batas; perbatasan'],
    ['環境', 'かんきょう', 'Lingkungan'],
    ['国境', 'こっきょう', 'Perbatasan negara'],
    ['境界', 'きょうかい', 'Batas; garis pemisah'],
    ['境内', 'けいだい', 'Area dalam kuil'],
    ['境遇', 'きょうぐう', 'Keadaan hidup; nasib'],
  ],

  農: [
    ['農業', 'のうぎょう', 'Pertanian'],
    ['農家', 'のうか', 'Petani; keluarga petani'],
    ['農民', 'のうみん', 'Petani'],
    ['農村', 'のうそん', 'Desa pertanian'],
    ['農薬', 'のうやく', 'Pestisida pertanian'],
    ['農産物', 'のうさんぶつ', 'Hasil pertanian'],
  ],

  基: [
    ['基本', 'きほん', 'Dasar; fundamental'],
    ['基礎', 'きそ', 'Fondasi; dasar'],
    ['基準', 'きじゅん', 'Standar; patokan'],
    ['基地', 'きち', 'Pangkalan; basis'],
    ['基づく', 'もとづく', 'Berdasarkan; berlandaskan'],
    ['基盤', 'きばん', 'Landasan; fondasi'],
  ],

  陽: [
    ['太陽', 'たいよう', 'Matahari'],
    ['陽気', 'ようき', 'Ceria; suasana hangat'],
    ['陽光', 'ようこう', 'Sinar matahari'],
    ['陽性', 'ようせい', 'Positif (hasil pemeriksaan)'],
    ['陽だまり', 'ひだまり', 'Tempat yang terkena sinar matahari'],
    ['陰陽', 'いんよう', 'Yin dan yang'],
  ],

  筒: [
    ['筒', 'つつ', 'Tabung; silinder'],
    ['水筒', 'すいとう', 'Botol minum'],
    ['封筒', 'ふうとう', 'Amplop'],
    ['円筒', 'えんとう', 'Silinder'],
    ['筒状', 'つつじょう', 'Berbentuk tabung'],
    ['竹筒', 'たけづつ', 'Tabung bambu'],
  ],

  論: [
    ['論', 'ろん', 'Pendapat; argumen'],
    ['議論', 'ぎろん', 'Diskusi; perdebatan'],
    ['論文', 'ろんぶん', 'Karya ilmiah; makalah'],
    ['結論', 'けつろん', 'Kesimpulan'],
    ['理論', 'りろん', 'Teori'],
    ['反論', 'はんろん', 'Sanggahan; bantahan'],
  ],

  恵: [
    ['恵み', 'めぐみ', 'Berkah; karunia'],
    ['恵む', 'めぐむ', 'Memberi; mengaruniai'],
    ['恩恵', 'おんけい', 'Manfaat; berkah'],
    ['知恵', 'ちえ', 'Kebijaksanaan; kecerdikan'],
    ['恵まれる', 'めぐまれる', 'Diberkahi; dianugerahi'],
    ['恵比寿', 'えびす', 'Ebisu (nama dewa keberuntungan)'],
  ],

  勢: [
    ['勢い', 'いきおい', 'Momentum; tenaga; semangat'],
    ['勢力', 'せいりょく', 'Kekuatan; pengaruh'],
    ['大勢', 'おおぜい', 'Banyak orang'],
    ['姿勢', 'しせい', 'Postur; sikap'],
    ['情勢', 'じょうせい', 'Situasi; keadaan'],
    ['勢いよく', 'いきおいよく', 'Dengan penuh tenaga'],
  ],

  複: [
    ['複数', 'ふくすう', 'Jumlah lebih dari satu'],
    ['複雑', 'ふくざつ', 'Rumit; kompleks'],
    ['複写', 'ふくしゃ', 'Salinan; penggandaan'],
    ['複製', 'ふくせい', 'Reproduksi; duplikasi'],
    ['複合', 'ふくごう', 'Gabungan; kombinasi'],
    ['複線', 'ふくせん', 'Jalur ganda'],
  ],
  劇: [
    ['劇', 'げき', 'Drama; sandiwara'],
    ['演劇', 'えんげき', 'Seni teater'],
    ['劇場', 'げきじょう', 'Gedung teater'],
    ['悲劇', 'ひげき', 'Tragedi'],
    ['喜劇', 'きげき', 'Komedi'],
    ['劇的', 'げきてき', 'Dramatis'],
  ],

  腕: [
    ['腕', 'うで', 'Lengan'],
    ['腕時計', 'うでどけい', 'Jam tangan'],
    ['腕前', 'うでまえ', 'Kemampuan; keterampilan'],
    ['腕力', 'わんりょく', 'Kekuatan lengan'],
    ['片腕', 'かたうで', 'Satu lengan; tangan kanan seseorang'],
    ['腕を組む', 'うでをくむ', 'Menyilangkan tangan'],
  ],

  靴: [
    ['靴', 'くつ', 'Sepatu'],
    ['靴下', 'くつした', 'Kaos kaki'],
    ['革靴', 'かわぐつ', 'Sepatu kulit'],
    ['運動靴', 'うんどうぐつ', 'Sepatu olahraga'],
    ['長靴', 'ながぐつ', 'Sepatu bot'],
    ['靴屋', 'くつや', 'Toko sepatu'],
  ],

  節: [
    ['季節', 'きせつ', 'Musim'],
    ['節約', 'せつやく', 'Penghematan'],
    ['大切', 'たいせつ', 'Penting; berharga'],
    ['関節', 'かんせつ', 'Persendian'],
    ['節電', 'せつでん', 'Penghematan listrik'],
    ['節目', 'ふしめ', 'Titik penting; tonggak'],
  ],

  績: [
    ['成績', 'せいせき', 'Nilai; hasil belajar'],
    ['実績', 'じっせき', 'Prestasi; rekam jejak'],
    ['業績', 'ぎょうせき', 'Hasil kerja; pencapaian'],
    ['功績', 'こうせき', 'Jasa; prestasi besar'],
    ['成績表', 'せいせきひょう', 'Daftar nilai; rapor'],
    ['業績不振', 'ぎょうせきふしん', 'Kinerja buruk; penurunan hasil usaha'],
  ],

  極: [
    ['極める', 'きわめる', 'Menguasai; mencapai puncak'],
    ['極まる', 'きわまる', 'Mencapai batas; menjadi sangat'],
    ['極端', 'きょくたん', 'Ekstrem'],
    ['南極', 'なんきょく', 'Kutub Selatan'],
    ['北極', 'ほっきょく', 'Kutub Utara'],
    ['積極的', 'せっきょくてき', 'Aktif; proaktif'],
  ],

  壁: [
    ['壁', 'かべ', 'Dinding; tembok'],
    ['壁紙', 'かべがみ', 'Wallpaper; kertas dinding'],
    ['壁画', 'へきが', 'Lukisan dinding'],
    ['岸壁', 'がんぺき', 'Dinding dermaga; tebing pantai'],
    ['壁際', 'かべぎわ', 'Dekat dinding'],
    ['壁にぶつかる', 'かべにぶつかる', 'Menghadapi hambatan'],
  ],

  輪: [
    ['輪', 'わ', 'Lingkaran; cincin'],
    ['指輪', 'ゆびわ', 'Cincin'],
    ['車輪', 'しゃりん', 'Roda kendaraan'],
    ['輪ゴム', 'わゴム', 'Karet gelang'],
    ['花輪', 'はなわ', 'Karangan bunga berbentuk lingkaran'],
    ['一輪車', 'いちりんしゃ', 'Sepeda roda satu'],
  ],

  緒: [
    ['一緒', 'いっしょ', 'Bersama'],
    ['緒に就く', 'しょにつく', 'Mulai berjalan; mulai berkembang'],
    ['端緒', 'たんしょ', 'Awal; petunjuk awal'],
    ['情緒', 'じょうちょ', 'Emosi; suasana perasaan'],
    ['内緒', 'ないしょ', 'Rahasia'],
    ['由緒', 'ゆいしょ', 'Asal-usul; sejarah'],
  ],
  臓: [
    ['心臓', 'しんぞう', 'Jantung'],
    ['内臓', 'ないぞう', 'Organ dalam'],
    ['肝臓', 'かんぞう', 'Hati; liver'],
    ['腎臓', 'じんぞう', 'Ginjal'],
    ['臓器', 'ぞうき', 'Organ tubuh'],
    ['五臓', 'ごぞう', 'Lima organ dalam utama'],
  ],

  膚: [
    ['皮膚', 'ひふ', 'Kulit'],
    ['皮膚科', 'ひふか', 'Departemen dermatologi'],
    ['皮膚病', 'ひふびょう', 'Penyakit kulit'],
    ['皮膚炎', 'ひふえん', 'Radang kulit'],
    ['皮膚感覚', 'ひふかんかく', 'Indra peraba kulit'],
    ['皮膚呼吸', 'ひふこきゅう', 'Pernapasan melalui kulit'],
  ],

  筆: [
    ['筆', 'ふで', 'Kuas; pena kaligrafi'],
    ['鉛筆', 'えんぴつ', 'Pensil'],
    ['筆記', 'ひっき', 'Tulisan; pencatatan'],
    ['筆者', 'ひっしゃ', 'Penulis'],
    ['筆箱', 'ふでばこ', 'Tempat pensil'],
    ['筆記用具', 'ひっきようぐ', 'Alat tulis'],
  ],

  略: [
    ['略', 'りゃく', 'Singkatan; ringkasan'],
    ['省略', 'しょうりゃく', 'Penghilangan; penyingkatan'],
    ['略語', 'りゃくご', 'Kata singkatan'],
    ['略す', 'りゃくす', 'Menyingkat; menghilangkan'],
    ['略歴', 'りゃくれき', 'Riwayat singkat'],
    ['戦略', 'せんりゃく', 'Strategi'],
  ],

  菓: [
    ['菓子', 'かし', 'Kue; penganan'],
    ['和菓子', 'わがし', 'Kue tradisional Jepang'],
    ['洋菓子', 'ようがし', 'Kue gaya Barat'],
    ['菓子パン', 'かしパン', 'Roti manis'],
    ['菓子屋', 'かしや', 'Toko kue'],
    ['茶菓子', 'ちゃがし', 'Penganan pendamping teh'],
  ],

  燥: [
    ['乾燥', 'かんそう', 'Kekeringan; pengeringan'],
    ['乾燥機', 'かんそうき', 'Mesin pengering'],
    ['乾燥肌', 'かんそうはだ', 'Kulit kering'],
    ['乾燥剤', 'かんそうざい', 'Bahan penyerap kelembapan'],
    ['乾燥食品', 'かんそうしょくひん', 'Makanan kering'],
    ['乾燥注意報', 'かんそうちゅういほう', 'Peringatan kondisi udara kering'],
  ],
  較: [
    ['比較', 'ひかく', 'Perbandingan'],
    ['比較的', 'ひかくてき', 'Relatif; cukup'],
    ['比較する', 'ひかくする', 'Membandingkan'],
    ['比較文化', 'ひかくぶんか', 'Budaya perbandingan'],
    ['比較研究', 'ひかくけんきゅう', 'Penelitian komparatif'],
    ['比較対象', 'ひかくたいしょう', 'Objek perbandingan'],
  ],

  著: [
    ['著者', 'ちょしゃ', 'Penulis; pengarang'],
    ['著作', 'ちょさく', 'Karya tulis'],
    ['著書', 'ちょしょ', 'Buku karya seseorang'],
    ['著名', 'ちょめい', 'Terkenal; ternama'],
    ['顕著', 'けんちょ', 'Menonjol; nyata'],
    ['著しい', 'いちじるしい', 'Sangat jelas; mencolok'],
  ],

  尊: [
    ['尊敬', 'そんけい', 'Rasa hormat'],
    ['尊重', 'そんちょう', 'Menghargai; menghormati'],
    ['尊い', 'とうとい', 'Mulia; berharga'],
    ['尊ぶ', 'とうとぶ', 'Menghormati; menjunjung tinggi'],
    ['尊厳', 'そんげん', 'Martabat; kehormatan'],
    ['尊敬語', 'そんけいご', 'Bahasa hormat (keigo)'],
  ],

  療: [
    ['治療', 'ちりょう', 'Pengobatan; perawatan medis'],
    ['医療', 'いりょう', 'Pelayanan medis'],
    ['療養', 'りょうよう', 'Pemulihan kesehatan'],
    ['診療', 'しんりょう', 'Pemeriksaan dan perawatan medis'],
    ['療法', 'りょうほう', 'Terapi; metode pengobatan'],
    ['療養所', 'りょうようじょ', 'Tempat perawatan atau pemulihan'],
  ],

  雑: [
    ['雑誌', 'ざっし', 'Majalah'],
    ['複雑', 'ふくざつ', 'Rumit; kompleks'],
    ['雑音', 'ざつおん', 'Suara bising; gangguan suara'],
    ['雑談', 'ざつだん', 'Obrolan ringan'],
    ['雑貨', 'ざっか', 'Barang kebutuhan sehari-hari'],
    ['雑草', 'ざっそう', 'Rumput liar'],
  ],

  権: [
    ['権利', 'けんり', 'Hak'],
    ['権力', 'けんりょく', 'Kekuasaan'],
    ['人権', 'じんけん', 'Hak asasi manusia'],
    ['著作権', 'ちょさくけん', 'Hak cipta'],
    ['選挙権', 'せんきょけん', 'Hak pilih'],
    ['権限', 'けんげん', 'Wewenang'],
  ],

  講: [
    ['講義', 'こうぎ', 'Kuliah; ceramah'],
    ['講演', 'こうえん', 'Pidato; presentasi'],
    ['講師', 'こうし', 'Pengajar; instruktur'],
    ['講座', 'こうざ', 'Kursus; program kuliah'],
    ['講習', 'こうしゅう', 'Pelatihan'],
    ['受講', 'じゅこう', 'Mengikuti kuliah atau kursus'],
  ],

  構: [
    ['構造', 'こうぞう', 'Struktur'],
    ['構成', 'こうせい', 'Komposisi; susunan'],
    ['構内', 'こうない', 'Area dalam kompleks'],
    ['構う', 'かまう', 'Memedulikan; mengganggu'],
    ['構える', 'かまえる', 'Mengambil posisi; membangun'],
    ['構想', 'こうそう', 'Konsep; rancangan'],
  ],

  康: [
    ['健康', 'けんこう', 'Kesehatan'],
    ['健康的', 'けんこうてき', 'Sehat'],
    ['健康診断', 'けんこうしんだん', 'Pemeriksaan kesehatan'],
    ['健康保険', 'けんこうほけん', 'Asuransi kesehatan'],
    ['小康', 'しょうこう', 'Keadaan yang agak membaik; mereda sementara'],
    ['康平', 'こうへい', 'Nama era Jepang; juga nama orang'],
  ],
  御: [
    ['御', 'お', 'Awalan kehormatan (misalnya お名前)'],
    ['御飯', 'ごはん', 'Nasi; makanan'],
    ['御礼', 'おれい', 'Ucapan terima kasih; penghargaan'],
    ['御客様', 'おきゃくさま', 'Tamu; pelanggan (bentuk hormat)'],
    ['御存じ', 'ごぞんじ', 'Mengetahui (bentuk hormat)'],
    ['御覧', 'ごらん', 'Melihat (bentuk hormat)'],
    ['御免', 'ごめん', 'Maaf; permisi'],
    ['制御', 'せいぎょ', 'Pengendalian; kontrol'],
  ],
  //N1
  炊: [
    ['炊く', 'たく', 'Memasak (nasi)'],
    ['炊事', 'すいじ', 'Urusan masak/dapur'],
    ['炊飯器', 'すいはんき', 'Penanak nasi'],
    ['自炊', 'じすい', 'Memasak sendiri'],
    ['炊き込みご飯', 'たきこみごはん', 'Nasi tanak dengan bumbu dan lauk'],
  ],
  煮: [
    ['煮る', 'にる', 'Merebus'],
    ['煮物', 'にもの', 'Masakan rebus'],
    ['煮込む', 'にこむ', 'Merebus lama'],
    ['煮える', 'にえる', 'Matang (direbus)'],
    ['煮魚', 'にざかな', 'Ikan rebus'],
  ],
  渇: [
    ['渇く', 'かわく', 'Haus/kering'],
    ['喉が渇く', 'のどがかわく', 'Haus'],
    ['渇水', 'かっすい', 'Kekeringan (kekurangan air)'],
    ['枯渇', 'こかつ', 'Kehabisan/mengering'],
    ['渇望', 'かつぼう', 'Dambaan yang kuat'],
  ],
  悟: [
    ['悟る', 'さとる', 'Menyadari/memahami'],
    ['悟り', 'さとり', 'Pencerahan'],
    ['覚悟', 'かくご', 'Tekad/kesiapan mental'],
    ['悟りを開く', 'さとりをひらく', 'Mencapai pencerahan'],
  ],
  染: [
    ['染める', 'そめる', 'Mewarnai'],
    ['染まる', 'そまる', 'Terwarnai'],
    ['染み', 'しみ', 'Noda'],
    ['感染', 'かんせん', 'Infeksi/tertular'],
    ['汚染', 'おせん', 'Pencemaran'],
    ['伝染', 'でんせん', 'Penularan'],
  ],
  尽: [
    ['尽きる', 'つきる', 'Habis'],
    ['尽くす', 'つくす', 'Mengerahkan segalanya'],
    ['尽力', 'じんりょく', 'Upaya keras'],
    ['理不尽', 'りふじん', 'Tidak masuk akal'],
    ['無尽蔵', 'むじんぞう', 'Tak terbatas'],
  ],
  攻: [
    ['攻める', 'せめる', 'Menyerang'],
    ['攻撃', 'こうげき', 'Serangan'],
    ['専攻', 'せんこう', 'Jurusan utama'],
    ['攻略', 'こうりゃく', 'Penaklukan/strategi'],
    ['先攻', 'せんこう', 'Giliran menyerang lebih dulu'],
  ],
  侵: [
    ['侵す', 'おかす', 'Melanggar/menyerbu'],
    ['侵略', 'しんりゃく', 'Invasi'],
    ['侵入', 'しんにゅう', 'Masuk secara ilegal'],
    ['侵害', 'しんがい', 'Pelanggaran (hak)'],
    ['不法侵入', 'ふほうしんにゅう', 'Masuk tanpa izin'],
  ],
  狙: [
    ['狙う', 'ねらう', 'Membidik/mengincar'],
    ['狙い', 'ねらい', 'Sasaran/tujuan'],
    ['狙撃', 'そげき', 'Tembakan jitu'],
    ['狙い撃ち', 'ねらいうち', 'Menembak tepat sasaran'],
  ],
  迫: [
    ['迫る', 'せまる', 'Mendekat/mendesak'],
    ['圧迫', 'あっぱく', 'Tekanan'],
    ['迫力', 'はくりょく', 'Daya pikat/kesan kuat'],
    ['切迫', 'せっぱく', 'Mendesak'],
    ['脅迫', 'きょうはく', 'Ancaman'],
    ['緊迫', 'きんぱく', 'Tegang'],
  ],
  叱: [
    ['叱る', 'しかる', 'Memarahi'],
    ['叱られる', 'しかられる', 'Dimarahi'],
    ['叱責', 'しっせき', 'Teguran keras'],
    ['叱咤', 'しった', 'Menyemangati dengan keras'],
  ],
  拒: [
    ['拒む', 'こばむ', 'Menolak'],
    ['拒否', 'きょひ', 'Penolakan'],
    ['拒絶', 'きょぜつ', 'Penolakan tegas'],
    ['拒否権', 'きょひけん', 'Hak veto'],
  ],
  抗: [
    ['抗議', 'こうぎ', 'Protes'],
    ['抵抗', 'ていこう', 'Perlawanan'],
    ['対抗', 'たいこう', 'Persaingan/menandingi'],
    ['反抗', 'はんこう', 'Pembangkangan'],
    ['抗生物質', 'こうせいぶっしつ', 'Antibiotik'],
  ],
  惜: [
    ['惜しい', 'おしい', 'Sayang sekali'],
    ['惜しむ', 'おしむ', 'Menyayangkan/menghemat'],
    ['名残惜しい', 'なごりおしい', 'Berat untuk berpisah'],
    ['惜別', 'せきべつ', 'Perpisahan yang berat'],
  ],
  奇: [
    ['奇妙', 'きみょう', 'Aneh'],
    ['奇跡', 'きせき', 'Keajaiban'],
    ['好奇心', 'こうきしん', 'Rasa ingin tahu'],
    ['奇数', 'きすう', 'Bilangan ganjil'],
    ['奇襲', 'きしゅう', 'Serangan mendadak'],
  ],
  怪: [
    ['怪しい', 'あやしい', 'Mencurigakan'],
    ['怪我', 'けが', 'Luka/cedera'],
    ['怪物', 'かいぶつ', 'Monster'],
    ['怪談', 'かいだん', 'Cerita hantu'],
    ['怪獣', 'かいじゅう', 'Monster raksasa'],
  ],
  乏: [
    ['乏しい', 'とぼしい', 'Kekurangan/miskin akan'],
    ['貧乏', 'びんぼう', 'Miskin'],
    ['欠乏', 'けつぼう', 'Kekurangan'],
    ['貧乏人', 'びんぼうにん', 'Orang miskin'],
  ],
  壮: [
    ['壮大', 'そうだい', 'Megah'],
    ['壮観', 'そうかん', 'Pemandangan megah'],
    ['壮年', 'そうねん', 'Usia dewasa matang'],
    ['悲壮', 'ひそう', 'Tragis namun heroik'],
  ],
  忍: [
    ['忍ぶ', 'しのぶ', 'Menahan/bersembunyi'],
    ['忍耐', 'にんたい', 'Kesabaran/ketahanan'],
    ['忍者', 'にんじゃ', 'Ninja'],
    ['残忍', 'ざんにん', 'Kejam'],
    ['忍び込む', 'しのびこむ', 'Menyelinap masuk'],
  ],
  刀: [
    ['刀', 'かたな', 'Pedang'],
    ['日本刀', 'にほんとう', 'Pedang Jepang'],
    ['短刀', 'たんとう', 'Belati'],
    ['名刀', 'めいとう', 'Pedang terkenal'],
  ],
  刃: [
    ['刃', 'は', 'Mata pisau'],
    ['刃物', 'はもの', 'Benda tajam'],
    ['刃先', 'はさき', 'Ujung mata pisau'],
    ['両刃', 'りょうば', 'Bermata dua'],
  ],
  汽: [
    ['汽車', 'きしゃ', 'Kereta uap'],
    ['汽船', 'きせん', 'Kapal uap'],
    ['汽笛', 'きてき', 'Peluit uap'],
  ],
  紺: [
    ['紺', 'こん', 'Biru tua'],
    ['紺色', 'こんいろ', 'Biru dongker'],
    ['濃紺', 'のうこん', 'Biru tua pekat'],
    ['紺碧', 'こんぺき', 'Biru tua cerah'],
  ],
  紫: [
    ['紫', 'むらさき', 'Ungu'],
    ['紫色', 'むらさきいろ', 'Warna ungu'],
    ['紫外線', 'しがいせん', 'Sinar ultraviolet'],
    ['紫陽花', 'あじさい', 'Hortensia'],
  ],
  丘: [
    ['丘', 'おか', 'Bukit'],
    ['砂丘', 'さきゅう', 'Bukit pasir'],
    ['丘陵', 'きゅうりょう', 'Perbukitan'],
  ],
  嵐: [
    ['嵐', 'あらし', 'Badai'],
    ['大嵐', 'おおあらし', 'Badai besar'],
    ['砂嵐', 'すなあらし', 'Badai pasir'],
    ['嵐山', 'あらしやま', 'Arashiyama (nama tempat)'],
  ],
  又: [
    ['又', 'また', 'Lagi/juga'],
    ['又は', 'または', 'Atau'],
    ['又々', 'またまた', 'Lagi dan lagi'],
    ['又聞き', 'またぎき', 'Mendengar dari orang lain'],
  ],
  乙: [
    ['乙', 'おつ', 'Kedua (B)/unik'],
    ['乙女', 'おとめ', 'Gadis'],
    ['甲乙', 'こうおつ', 'A dan B/peringkat pertama dan kedua'],
    ['乙な', 'おつな', 'Menarik/berselera'],
  ],
  弓: [
    ['弓', 'ゆみ', 'Busur'],
    ['弓道', 'きゅうどう', 'Panahan Jepang'],
    ['弓矢', 'ゆみや', 'Busur dan anak panah'],
    ['洋弓', 'ようきゅう', 'Panahan gaya Barat'],
  ],
  士: [
    ['弁護士', 'べんごし', 'Pengacara'],
    ['博士', 'はかせ', 'Doktor/profesor'],
    ['武士', 'ぶし', 'Samurai'],
    ['紳士', 'しんし', 'Pria terhormat'],
    ['兵士', 'へいし', 'Prajurit'],
    ['会計士', 'かいけいし', 'Akuntan'],
  ],
  寸: [
    ['寸法', 'すんぽう', 'Ukuran'],
    ['一寸', 'ちょっと', 'Sedikit/sebentar'],
    ['寸前', 'すんぜん', 'Tepat sebelum'],
    ['寸劇', 'すんげき', 'Sketsa pendek'],
  ],
  及: [
    ['及ぶ', 'およぶ', 'Mencapai/meluas'],
    ['及ぼす', 'およぼす', 'Memberi pengaruh'],
    ['普及', 'ふきゅう', 'Penyebaran/popularisasi'],
    ['言及', 'げんきゅう', 'Menyinggung/menyebut'],
    ['波及', 'はきゅう', 'Merambat/menjalar'],
  ],
  凡: [
    ['平凡', 'へいぼん', 'Biasa saja'],
    ['凡人', 'ぼんじん', 'Orang biasa'],
    ['非凡', 'ひぼん', 'Luar biasa'],
    ['凡そ', 'およそ', 'Kira-kira'],
    ['凡例', 'はんれい', 'Petunjuk penggunaan (legenda)'],
  ],
  豆: [
    ['豆', 'まめ', 'Kacang'],
    ['大豆', 'だいず', 'Kedelai'],
    ['豆腐', 'とうふ', 'Tahu'],
    ['納豆', 'なっとう', 'Natto (kedelai fermentasi)'],
    ['小豆', 'あずき', 'Kacang merah'],
    ['豆乳', 'とうにゅう', 'Susu kedelai'],
  ],
  浦: [
    ['浦', 'うら', 'Teluk/pantai'],
    ['津々浦々', 'つつうらうら', 'Seluruh pelosok negeri'],
    ['浦島太郎', 'うらしまたろう', 'Urashima Taro (dongeng)'],
    ['浦和', 'うらわ', 'Urawa (nama tempat)'],
  ],
  旬: [
    ['旬', 'しゅん', 'Musim terbaik (bahan makanan)'],
    ['上旬', 'じょうじゅん', 'Awal bulan (tgl 1–10)'],
    ['中旬', 'ちゅうじゅん', 'Pertengahan bulan (tgl 11–20)'],
    ['下旬', 'げじゅん', 'Akhir bulan (tgl 21–akhir)'],
    ['旬の野菜', 'しゅんのやさい', 'Sayuran musiman'],
  ],
  玄: [
    ['玄関', 'げんかん', 'Pintu masuk/teras rumah'],
    ['玄米', 'げんまい', 'Beras merah/beras pecah kulit'],
    ['玄人', 'くろうと', 'Ahli/profesional'],
    ['幽玄', 'ゆうげん', 'Keindahan misterius dan dalam'],
  ],
  呂: [
    ['風呂', 'ふろ', 'Bak mandi/mandi'],
    ['お風呂', 'おふろ', 'Mandi/bak mandi (sopan)'],
    ['風呂場', 'ふろば', 'Kamar mandi'],
    ['風呂敷', 'ふろしき', 'Kain pembungkus'],
    ['語呂合わせ', 'ごろあわせ', 'Permainan kata/mnemonik'],
  ],
  丈: [
    ['丈夫', 'じょうぶ', 'Kuat/tahan lama'],
    ['大丈夫', 'だいじょうぶ', 'Tidak apa-apa/aman'],
    ['丈', 'たけ', 'Panjang/tinggi'],
    ['着丈', 'きたけ', 'Panjang pakaian'],
    ['気丈', 'きじょう', 'Tabah'],
  ],
  匂: [
    ['匂い', 'におい', 'Bau/aroma'],
    ['匂う', 'におう', 'Berbau/beraroma'],
    ['匂わす', 'においわす', 'Mengisyaratkan'],
  ],
  企: [
    ['企業', 'きぎょう', 'Perusahaan'],
    ['企画', 'きかく', 'Perencanaan/proyek'],
    ['企てる', 'くわだてる', 'Merencanakan/mencoba'],
    ['企む', 'たくらむ', 'Merencanakan (niat buruk)'],
    ['企図', 'きと', 'Rencana/maksud'],
  ],
  矢: [
    ['矢', 'や', 'Anak panah'],
    ['矢印', 'やじるし', 'Tanda panah'],
    ['矢先', 'やさき', 'Tepat pada saat'],
    ['一矢報いる', 'いっしむくいる', 'Membalas sedikit'],
  ],
  我: [
    ['我々', 'われわれ', 'Kita/kami'],
    ['我慢', 'がまん', 'Menahan diri/bersabar'],
    ['自我', 'じが', 'Ego/jati diri'],
    ['我が家', 'わがや', 'Rumah kami'],
    ['我が国', 'わがくに', 'Negara kita'],
  ],
  井: [
    ['井戸', 'いど', 'Sumur'],
    ['天井', 'てんじょう', 'Langit-langit'],
    ['油井', 'ゆせい', 'Sumur minyak'],
    ['市井', 'しせい', 'Masyarakat awam'],
  ],
  丼: [
    ['丼', 'どんぶり', 'Mangkuk besar/nasi mangkuk'],
    ['牛丼', 'ぎゅうどん', 'Nasi mangkuk daging sapi'],
    ['親子丼', 'おやこどん', 'Nasi mangkuk ayam dan telur'],
    ['天丼', 'てんどん', 'Nasi mangkuk tempura'],
    ['カツ丼', 'かつどん', 'Nasi mangkuk katsu'],
  ],
  冗: [
    ['冗談', 'じょうだん', 'Lelucon'],
    ['冗長', 'じょうちょう', 'Bertele-tele'],
    ['冗費', 'じょうひ', 'Pemborosan'],
    ['冗漫', 'じょうまん', 'Berlebihan/bertele-tele'],
  ],
  卓: [
    ['卓球', 'たっきゅう', 'Tenis meja'],
    ['食卓', 'しょくたく', 'Meja makan'],
    ['電卓', 'でんたく', 'Kalkulator'],
    ['卓越', 'たくえつ', 'Unggul/luar biasa'],
    ['卓上', 'たくじょう', 'Di atas meja'],
  ],
  肢: [
    ['四肢', 'しし', 'Keempat anggota badan'],
    ['選択肢', 'せんたくし', 'Pilihan/opsi'],
    ['肢体', 'したい', 'Anggota tubuh'],
    ['上肢', 'じょうし', 'Anggota gerak atas (lengan)'],
    ['下肢', 'かし', 'Anggota gerak bawah (kaki)'],
  ],
  芝: [
    ['芝', 'しば', 'Rumput'],
    ['芝生', 'しばふ', 'Hamparan rumput/halaman rumput'],
    ['芝居', 'しばい', 'Sandiwara/drama'],
    ['芝刈り', 'しばかり', 'Memotong rumput'],
    ['芝犬', 'しばいぬ', 'Anjing Shiba'],
  ],
  己: [
    ['自己', 'じこ', 'Diri sendiri'],
    ['自己紹介', 'じこしょうかい', 'Perkenalan diri'],
    ['利己的', 'りこてき', 'Egois'],
    ['知己', 'ちき', 'Kenalan dekat'],
    ['己', 'おのれ', 'Diri sendiri'],
  ],
  蚊: [
    ['蚊', 'か', 'Nyamuk'],
    ['蚊帳', 'かや', 'Kelambu'],
    ['蚊取り線香', 'かとりせんこう', 'Obat nyamuk bakar'],
    ['蚊柱', 'かばしら', 'Kerumunan nyamuk'],
  ],
  汁: [
    ['汁', 'しる', 'Sup/cairan'],
    ['味噌汁', 'みそしる', 'Sup miso'],
    ['果汁', 'かじゅう', 'Sari buah'],
    ['汁物', 'しるもの', 'Hidangan sup'],
    ['肉汁', 'にくじゅう', 'Sari daging'],
  ],
  俳: [
    ['俳句', 'はいく', 'Haiku'],
    ['俳優', 'はいゆう', 'Aktor'],
    ['俳人', 'はいじん', 'Penyair haiku'],
    ['俳諧', 'はいかい', 'Puisi komikal Jepang'],
  ],
  匠: [
    ['匠', 'たくみ', 'Pengrajin ulung'],
    ['巨匠', 'きょしょう', 'Maestro'],
    ['師匠', 'ししょう', 'Guru/mentor'],
    ['意匠', 'いしょう', 'Desain'],
    ['名匠', 'めいしょう', 'Pengrajin terkenal'],
  ],
  洞: [
    ['洞窟', 'どうくつ', 'Gua'],
    ['洞察', 'どうさつ', 'Wawasan tajam'],
    ['空洞', 'くうどう', 'Rongga'],
    ['洞穴', 'ほらあな', 'Gua'],
    ['洞察力', 'どうさつりょく', 'Daya tilik'],
  ],
  伯: [
    ['伯父', 'おじ', 'Paman (kakak ayah/ibu)'],
    ['伯母', 'おば', 'Bibi (kakak ayah/ibu)'],
    ['伯爵', 'はくしゃく', 'Count/bangsawan'],
    ['画伯', 'がはく', 'Pelukis ulung'],
  ],
  妊: [
    ['妊娠', 'にんしん', 'Kehamilan'],
    ['妊婦', 'にんぷ', 'Ibu hamil'],
    ['不妊', 'ふにん', 'Kemandulan'],
    ['妊娠中', 'にんしんちゅう', 'Sedang hamil'],
    ['避妊', 'ひにん', 'Kontrasepsi'],
  ],
  泡: [
    ['泡', 'あわ', 'Busa/gelembung'],
    ['泡立つ', 'あわだつ', 'Berbusa'],
    ['水泡', 'すいほう', 'Gelembung air'],
    ['気泡', 'きほう', 'Gelembung udara'],
    ['泡立て器', 'あわだてき', 'Pengocok'],
  ],
  虎: [
    ['虎', 'とら', 'Harimau'],
    ['虎穴', 'こけつ', 'Sarang harimau'],
    ['猛虎', 'もうこ', 'Harimau ganas'],
    ['虎の子', 'とらのこ', 'Harta berharga'],
  ],
  矛: [
    ['矛', 'ほこ', 'Tombak'],
    ['矛盾', 'むじゅん', 'Kontradiksi'],
    ['矛先', 'ほこさき', 'Ujung tombak/sasaran'],
    ['矛盾点', 'むじゅんてん', 'Titik kontradiksi'],
  ],
  尻: [
    ['尻', 'しり', 'Pantat'],
    ['尻尾', 'しっぽ', 'Ekor'],
    ['目尻', 'めじり', 'Sudut luar mata'],
    ['尻込み', 'しりごみ', 'Ragu/mundur'],
    ['尻餅', 'しりもち', 'Jatuh terduduk'],
  ],
  肖: [
    ['肖像', 'しょうぞう', 'Potret'],
    ['肖像画', 'しょうぞうが', 'Lukisan potret'],
    ['肖像権', 'しょうぞうけん', 'Hak potret'],
    ['不肖', 'ふしょう', 'Tidak berbakat (rendah hati)'],
  ],
  句: [
    ['句', 'く', 'Frasa/bait'],
    ['文句', 'もんく', 'Keluhan'],
    ['俳句', 'はいく', 'Haiku'],
    ['語句', 'ごく', 'Kata dan frasa'],
    ['句読点', 'くとうてん', 'Tanda baca'],
  ],
  刑: [
    ['刑罰', 'けいばつ', 'Hukuman'],
    ['死刑', 'しけい', 'Hukuman mati'],
    ['刑事', 'けいじ', 'Detektif/kasus pidana'],
    ['刑務所', 'けいむしょ', 'Penjara'],
    ['求刑', 'きゅうけい', 'Tuntutan hukuman'],
  ],
  亜: [
    ['亜熱帯', 'あねったい', 'Subtropis'],
    ['亜鉛', 'あえん', 'Seng'],
    ['東亜', 'とうあ', 'Asia Timur'],
    ['亜種', 'あしゅ', 'Anak spesies'],
  ],
  析: [
    ['分析', 'ぶんせき', 'Analisis'],
    ['解析', 'かいせき', 'Analisis/penguraian'],
    ['透析', 'とうせき', 'Dialisis'],
    ['分析結果', 'ぶんせきけっか', 'Hasil analisis'],
  ],
  吉: [
    ['吉', 'きち', 'Keberuntungan'],
    ['大吉', 'だいきち', 'Keberuntungan besar'],
    ['不吉', 'ふきつ', 'Pertanda buruk'],
    ['吉報', 'きっぽう', 'Kabar baik'],
    ['吉日', 'きちじつ', 'Hari baik'],
  ],
  克: [
    ['克服', 'こくふく', 'Mengatasi'],
    ['克明', 'こくめい', 'Terperinci'],
    ['超克', 'ちょうこく', 'Melampaui'],
    ['下克上', 'げこくじょう', 'Bawahan mengalahkan atasan'],
  ],
  冒: [
    ['冒険', 'ぼうけん', 'Petualangan'],
    ['冒す', 'おかす', 'Mempertaruhkan'],
    ['感冒', 'かんぼう', 'Flu'],
    ['冒頭', 'ぼうとう', 'Pembukaan'],
    ['冒涜', 'ぼうとく', 'Penistaan'],
  ],
  孝: [
    ['親孝行', 'おやこうこう', 'Berbakti kepada orang tua'],
    ['孝行', 'こうこう', 'Bakti'],
    ['孝心', 'こうしん', 'Hati berbakti'],
    ['不孝', 'ふこう', 'Tidak berbakti'],
  ],
  択: [
    ['選択', 'せんたく', 'Pilihan'],
    ['選択肢', 'せんたくし', 'Opsi'],
    ['採択', 'さいたく', 'Pengadopsian'],
    ['二者択一', 'にしゃたくいつ', 'Memilih satu dari dua'],
  ],
  帝: [
    ['皇帝', 'こうてい', 'Kaisar'],
    ['帝国', 'ていこく', 'Kekaisaran'],
    ['帝王', 'ていおう', 'Raja/penguasa'],
    ['女帝', 'じょてい', 'Maharani'],
  ],
  盆: [
    ['お盆', 'おぼん', 'Festival Obon/nampan'],
    ['盆踊り', 'ぼんおどり', 'Tarian Obon'],
    ['盆地', 'ぼんち', 'Cekungan'],
    ['盆休み', 'ぼんやすみ', 'Libur Obon'],
    ['盆栽', 'ぼんさい', 'Bonsai'],
  ],
  丁: [
    ['丁寧', 'ていねい', 'Sopan/teliti'],
    ['丁目', 'ちょうめ', 'Blok (alamat)'],
    ['包丁', 'ほうちょう', 'Pisau dapur'],
    ['丁度', 'ちょうど', 'Tepat/pas'],
    ['丁重', 'ていちょう', 'Hormat'],
  ],
  派: [
    ['派手', 'はで', 'Mencolok'],
    ['立派', 'りっぱ', 'Mengagumkan'],
    ['派遣', 'はけん', 'Pengiriman/dispatch'],
    ['党派', 'とうは', 'Faksi partai'],
    ['流派', 'りゅうは', 'Aliran'],
  ],
  缶: [
    ['缶', 'かん', 'Kaleng'],
    ['缶詰', 'かんづめ', 'Makanan kaleng'],
    ['空き缶', 'あきかん', 'Kaleng kosong'],
    ['缶ジュース', 'かんジュース', 'Jus kaleng'],
    ['缶切り', 'かんきり', 'Pembuka kaleng'],
  ],
  枠: [
    ['枠', 'わく', 'Bingkai/kerangka'],
    ['窓枠', 'まどわく', 'Bingkai jendela'],
    ['枠組み', 'わくぐみ', 'Kerangka'],
    ['枠外', 'わくがい', 'Di luar bingkai'],
    ['黒枠', 'くろわく', 'Bingkai hitam'],
  ],
  浄: [
    ['浄水器', 'じょうすいき', 'Penjernih air'],
    ['清浄', 'せいじょう', 'Bersih/murni'],
    ['浄化', 'じょうか', 'Pemurnian'],
    ['浄水', 'じょうすい', 'Air bersih'],
    ['不浄', 'ふじょう', 'Tidak suci'],
  ],
  炉: [
    ['暖炉', 'だんろ', 'Perapian'],
    ['原子炉', 'げんしろ', 'Reaktor nuklir'],
    ['炉', 'ろ', 'Tungku'],
    ['火炉', 'かろ', 'Tungku api'],
    ['溶鉱炉', 'ようこうろ', 'Tanur tinggi'],
  ],
  枕: [
    ['枕', 'まくら', 'Bantal'],
    ['枕元', 'まくらもと', 'Samping tempat tidur'],
    ['枕詞', 'まくらことば', 'Kata pembuka puisi klasik'],
    ['抱き枕', 'だきまくら', 'Guling'],
  ],
  袖: [
    ['袖', 'そで', 'Lengan baju'],
    ['半袖', 'はんそで', 'Lengan pendek'],
    ['長袖', 'ながそで', 'Lengan panjang'],
    ['袖口', 'そでぐち', 'Ujung lengan'],
    ['袖振り合うも他生の縁', 'そでふりあうもたしょうのえん', 'Bertemu pun sudah takdir'],
  ],
  傘: [
    ['傘', 'かさ', 'Payung'],
    ['日傘', 'ひがさ', 'Payung penangkal matahari'],
    ['折り畳み傘', 'おりたたみがさ', 'Payung lipat'],
    ['傘下', 'さんか', 'Di bawah naungan'],
    ['雨傘', 'あまがさ', 'Payung hujan'],
  ],
  抹: [
    ['抹茶', 'まっちゃ', 'Matcha'],
    ['抹消', 'まっしょう', 'Penghapusan'],
    ['抹殺', 'まっさつ', 'Pemusnahan'],
    ['一抹', 'いちまつ', 'Sedikit/sekelumit'],
  ],
  垣: [
    ['垣', 'かき', 'Pagar'],
    ['生け垣', 'いけがき', 'Pagar tanaman'],
    ['垣根', 'かきね', 'Pagar/sekat'],
    ['石垣', 'いしがき', 'Dinding batu'],
    ['垣間見る', 'かいまみる', 'Mengintip'],
  ],
  扉: [
    ['扉', 'とびら', 'Pintu'],
    ['鉄扉', 'てっぴ', 'Pintu besi'],
    ['門扉', 'もんぴ', 'Gerbang'],
    ['扉絵', 'とびらえ', 'Ilustrasi sampul dalam'],
  ],
  芳: [
    ['芳しい', 'かんばしい', 'Harum/menggembirakan'],
    ['芳香', 'ほうこう', 'Aroma harum'],
    ['芳名', 'ほうめい', 'Nama Anda (hormat)'],
    ['芳醇', 'ほうじゅん', 'Kaya aroma'],
  ],
  麻: [
    ['麻', 'あさ', 'Rami/linen'],
    ['麻酔', 'ますい', 'Bius'],
    ['麻薬', 'まやく', 'Narkotika'],
    ['麻痺', 'まひ', 'Kelumpuhan'],
    ['麻雀', 'マージャン', 'Mahjong'],
  ],
  斎: [
    ['斎場', 'さいじょう', 'Tempat upacara pemakaman'],
    ['書斎', 'しょさい', 'Ruang kerja/perpustakaan pribadi'],
    ['斎戒', 'さいかい', 'Pemurnian diri'],
    ['潔斎', 'けっさい', 'Penyucian diri'],
  ],
  肪: [
    ['脂肪', 'しぼう', 'Lemak'],
    ['体脂肪', 'たいしぼう', 'Lemak tubuh'],
    ['脂肪分', 'しぼうぶん', 'Kandungan lemak'],
    ['皮下脂肪', 'ひかしぼう', 'Lemak subkutan'],
  ],
  裕: [
    ['余裕', 'よゆう', 'Kelonggaran'],
    ['裕福', 'ゆうふく', 'Kaya'],
    ['富裕', 'ふゆう', 'Kaya raya'],
    ['余裕がある', 'よゆうがある', 'Punya keleluasaan'],
  ],
  倉: [
    ['倉庫', 'そうこ', 'Gudang'],
    ['鎌倉', 'かまくら', 'Kamakura (nama tempat)'],
    ['穀倉', 'こくそう', 'Lumbung padi'],
    ['冷凍倉庫', 'れいとうそうこ', 'Gudang pendingin'],
    ['倉', 'くら', 'Gudang'],
  ],
  塀: [
    ['塀', 'へい', 'Pagar/tembok'],
    ['ブロック塀', 'ブロックべい', 'Pagar blok'],
    ['板塀', 'いたべい', 'Pagar papan'],
    ['土塀', 'どべい', 'Tembok tanah'],
  ],
  椅: [
    ['椅子', 'いす', 'Kursi'],
    ['車椅子', 'くるまいす', 'Kursi roda'],
    ['座椅子', 'ざいす', 'Kursi lesehan'],
    ['安楽椅子', 'あんらくいす', 'Kursi santai'],
  ],
  珠: [
    ['真珠', 'しんじゅ', 'Mutiara'],
    ['数珠', 'じゅず', 'Tasbih Buddha'],
    ['珠', 'たま', 'Permata/manik'],
    ['珠算', 'しゅざん', 'Hitung sempoa'],
  ],
  扇: [
    ['扇', 'おうぎ', 'Kipas lipat'],
    ['扇子', 'せんす', 'Kipas lipat'],
    ['扇風機', 'せんぷうき', 'Kipas angin'],
    ['換気扇', 'かんきせん', 'Kipas ventilasi'],
    ['扇動', 'せんどう', 'Hasutan'],
  ],
  迅: [
    ['迅速', 'じんそく', 'Cepat tanggap'],
    ['迅速な対応', 'じんそくなたいおう', 'Respons cepat'],
    ['奮迅', 'ふんじん', 'Berjuang gagah berani'],
    ['疾風迅雷', 'しっぷうじんらい', 'Secepat kilat'],
  ],
  姿: [
    ['姿', 'すがた', 'Sosok/penampilan'],
    ['姿勢', 'しせい', 'Postur/sikap'],
    ['後ろ姿', 'うしろすがた', 'Tampak belakang'],
    ['姿見', 'すがたみ', 'Cermin besar'],
    ['容姿', 'ようし', 'Penampilan fisik'],
  ],
  但: [
    ['但し', 'ただし', 'Namun/dengan catatan'],
    ['但し書き', 'ただしがき', 'Klausul pengecualian'],
  ],
  往: [
    ['往復', 'おうふく', 'Pulang pergi'],
    ['往来', 'おうらい', 'Lalu lintas'],
    ['右往左往', 'うおうさおう', 'Kebingungan'],
    ['往診', 'おうしん', 'Kunjungan dokter'],
    ['既往', 'きおう', 'Masa lalu'],
  ],
  即: [
    ['即座に', 'そくざに', 'Seketika'],
    ['即席', 'そくせき', 'Instan'],
    ['即答', 'そくとう', 'Jawaban langsung'],
    ['即日', 'そくじつ', 'Hari itu juga'],
    ['即する', 'そくする', 'Sesuai dengan'],
  ],
  潔: [
    ['清潔', 'せいけつ', 'Bersih'],
    ['簡潔', 'かんけつ', 'Ringkas'],
    ['潔い', 'いさぎよい', 'Ksatria/berjiwa besar'],
    ['潔白', 'けっぱく', 'Tak bersalah'],
    ['不潔', 'ふけつ', 'Kotor'],
  ],
  契: [
    ['契約', 'けいやく', 'Kontrak'],
    ['契機', 'けいき', 'Momentum'],
    ['契約書', 'けいやくしょ', 'Surat kontrak'],
    ['契る', 'ちぎる', 'Berjanji'],
    ['解約', 'かいやく', 'Pemutusan kontrak'],
  ],
  宜: [
    ['宜しい', 'よろしい', 'Baik/boleh'],
    ['宜しく', 'よろしく', 'Mohon bantuannya'],
    ['便宜', 'べんぎ', 'Kemudahan'],
    ['適宜', 'てきぎ', 'Sesuai kebutuhan'],
  ],
  至: [
    ['至る', 'いたる', 'Sampai/mencapai'],
    ['至急', 'しきゅう', 'Segera'],
    ['冬至', 'とうじ', 'Titik balik matahari musim dingin'],
    ['夏至', 'げし', 'Titik balik matahari musim panas'],
    ['必至', 'ひっし', 'Tak terelakkan'],
  ],
  屈: [
    ['退屈', 'たいくつ', 'Membosankan'],
    ['屈む', 'かがむ', 'Membungkuk'],
    ['理屈', 'りくつ', 'Logika/alasan'],
    ['窮屈', 'きゅうくつ', 'Sesak/kaku'],
    ['屈辱', 'くつじょく', 'Penghinaan'],
  ],
  扱: [
    ['扱う', 'あつかう', 'Menangani'],
    ['取り扱い', 'とりあつかい', 'Penanganan'],
    ['扱い', 'あつかい', 'Perlakuan'],
    ['客扱い', 'きゃくあつかい', 'Pelayanan tamu'],
    ['子供扱い', 'こどもあつかい', 'Diperlakukan seperti anak kecil'],
  ],
  促: [
    ['促す', 'うながす', 'Mendorong'],
    ['催促', 'さいそく', 'Desakan/penagihan'],
    ['促進', 'そくしん', 'Percepatan/promosi'],
    ['販売促進', 'はんばいそくしん', 'Promosi penjualan'],
  ],
  託: [
    ['委託', 'いたく', 'Penyerahan/konsinyasi'],
    ['託す', 'たくす', 'Mempercayakan'],
    ['信託', 'しんたく', 'Perwalian/trust'],
    ['結託', 'けったく', 'Bersekongkol'],
    ['預託', 'よたく', 'Penitipan'],
  ],
  討: [
    ['検討', 'けんとう', 'Pertimbangan'],
    ['討論', 'とうろん', 'Debat'],
    ['討つ', 'うつ', 'Menumpas'],
    ['再検討', 'さいけんとう', 'Pertimbangan ulang'],
    ['討議', 'とうぎ', 'Diskusi'],
  ],
  益: [
    ['利益', 'りえき', 'Keuntungan'],
    ['有益', 'ゆうえき', 'Bermanfaat'],
    ['収益', 'しゅうえき', 'Pendapatan'],
    ['公益', 'こうえき', 'Kepentingan umum'],
    ['無益', 'むえき', 'Tidak berguna'],
  ],
  秀: [
    ['優秀', 'ゆうしゅう', 'Unggul'],
    ['秀才', 'しゅうさい', 'Jenius'],
    ['秀でる', 'ひいでる', 'Menonjol'],
    ['秀作', 'しゅうさく', 'Karya luar biasa'],
  ],
  致: [
    ['一致', 'いっち', 'Kesepakatan/kecocokan'],
    ['致す', 'いたす', 'Melakukan (rendah hati)'],
    ['招致', 'しょうち', 'Mengundang/menarik'],
    ['合致', 'がっち', 'Sesuai'],
    ['拉致', 'らち', 'Penculikan'],
  ],
  挑: [
    ['挑戦', 'ちょうせん', 'Tantangan'],
    ['挑む', 'いどむ', 'Menantang'],
    ['挑発', 'ちょうはつ', 'Provokasi'],
    ['挑戦者', 'ちょうせんしゃ', 'Penantang'],
  ],
  添: [
    ['添える', 'そえる', 'Menyertakan'],
    ['添付', 'てんぷ', 'Lampiran'],
    ['添削', 'てんさく', 'Koreksi'],
    ['付き添う', 'つきそう', 'Mendampingi'],
    ['添加物', 'てんかぶつ', 'Zat aditif'],
  ],
  怠: [
    ['怠ける', 'なまける', 'Bermalas-malasan'],
    ['怠る', 'おこたる', 'Lalai'],
    ['怠惰', 'たいだ', 'Kemalasan'],
    ['怠慢', 'たいまん', 'Kelalaian'],
    ['怠け者', 'なまけもの', 'Pemalas'],
  ],
  岐: [
    ['分岐', 'ぶんき', 'Percabangan'],
    ['岐阜', 'ぎふ', 'Gifu (nama prefektur)'],
    ['岐路', 'きろ', 'Persimpangan'],
    ['多岐', 'たき', 'Beragam'],
  ],
  詳: [
    ['詳しい', 'くわしい', 'Rinci/menguasai'],
    ['詳細', 'しょうさい', 'Detail'],
    ['詳述', 'しょうじゅつ', 'Uraian rinci'],
    ['詳しく', 'くわしく', 'Secara rinci'],
    ['未詳', 'みしょう', 'Tidak diketahui'],
  ],
  抑: [
    ['抑える', 'おさえる', 'Menahan'],
    ['抑制', 'よくせい', 'Pengendalian'],
    ['抑止', 'よくし', 'Pencegahan'],
    ['抑揚', 'よくよう', 'Intonasi'],
    ['抑圧', 'よくあつ', 'Penindasan'],
  ],
  施: [
    ['施設', 'しせつ', 'Fasilitas'],
    ['実施', 'じっし', 'Pelaksanaan'],
    ['施す', 'ほどこす', 'Memberikan/melakukan'],
    ['施工', 'せこう', 'Konstruksi'],
    ['施行', 'しこう', 'Pemberlakuan'],
  ],
  痴: [
    ['愚痴', 'ぐち', 'Keluhan'],
    ['音痴', 'おんち', 'Tuli nada'],
    ['痴漢', 'ちかん', 'Pelaku pelecehan'],
    ['痴呆', 'ちほう', 'Demensia'],
  ],
  挫: [
    ['挫折', 'ざせつ', 'Kegagalan/frustrasi'],
    ['挫く', 'くじく', 'Terkilir/mematahkan'],
    ['捻挫', 'ねんざ', 'Keseleo'],
    ['頓挫', 'とんざ', 'Terhenti/gagal'],
  ],
  寧: [
    ['丁寧', 'ていねい', 'Sopan/teliti'],
    ['安寧', 'あんねい', 'Kedamaian'],
    ['丁寧語', 'ていねいご', 'Bahasa sopan'],
    ['寧ろ', 'むしろ', 'Justru/lebih baik'],
  ],
  該: [
    ['該当', 'がいとう', 'Sesuai/terkait'],
    ['当該', 'とうがい', 'Yang bersangkutan'],
    ['該博', 'がいはく', 'Berpengetahuan luas'],
    ['該当者', 'がいとうしゃ', 'Orang yang memenuhi syarat'],
  ],
  剣: [
    ['剣', 'けん', 'Pedang'],
    ['真剣', 'しんけん', 'Serius'],
    ['剣道', 'けんどう', 'Kendo'],
    ['刀剣', 'とうけん', 'Pedang-pedangan'],
    ['剣術', 'けんじゅつ', 'Ilmu pedang'],
  ],
  瓶: [
    ['瓶', 'びん', 'Botol'],
    ['花瓶', 'かびん', 'Vas bunga'],
    ['魔法瓶', 'まほうびん', 'Termos'],
    ['瓶詰め', 'びんづめ', 'Dikemas dalam botol'],
    ['ビール瓶', 'ビールびん', 'Botol bir'],
  ],
  弊: [
    ['弊社', 'へいしゃ', 'Perusahaan kami (rendah hati)'],
    ['疲弊', 'ひへい', 'Kelelahan/kemerosotan'],
    ['弊害', 'へいがい', 'Dampak buruk'],
    ['貨幣', 'かへい', 'Mata uang'],
  ],
  頑: [
    ['頑張る', 'がんばる', 'Berusaha keras'],
    ['頑固', 'がんこ', 'Keras kepala'],
    ['頑丈', 'がんじょう', 'Kokoh'],
    ['頑張って', 'がんばって', 'Semangat!'],
  ],
  彩: [
    ['色彩', 'しきさい', 'Warna'],
    ['水彩画', 'すいさいが', 'Lukisan cat air'],
    ['彩る', 'いろどる', 'Mewarnai/menghias'],
    ['多彩', 'たさい', 'Beragam warna'],
    ['精彩', 'せいさい', 'Gemilang'],
  ],
  威: [
    ['威力', 'いりょく', 'Kekuatan'],
    ['権威', 'けんい', 'Otoritas'],
    ['威張る', 'いばる', 'Bersikap sombong'],
    ['脅威', 'きょうい', 'Ancaman'],
    ['威厳', 'いげん', 'Wibawa'],
  ],
  邦: [
    ['連邦', 'れんぽう', 'Federasi'],
    ['邦人', 'ほうじん', 'Warga negara (Jepang)'],
    ['邦楽', 'ほうがく', 'Musik tradisional Jepang'],
    ['邦画', 'ほうが', 'Film Jepang'],
    ['異邦人', 'いほうじん', 'Orang asing'],
  ],
  拍: [
    ['拍手', 'はくしゅ', 'Tepuk tangan'],
    ['拍子', 'ひょうし', 'Irama/ketukan'],
    ['手拍子', 'てびょうし', 'Tepuk tangan berirama'],
    ['脈拍', 'みゃくはく', 'Denyut nadi'],
    ['一拍', 'いっぱく', 'Satu ketukan'],
  ],
  刈: [
    ['刈る', 'かる', 'Memotong/memangkas'],
    ['草刈り', 'くさかり', 'Memotong rumput'],
    ['刈り取る', 'かりとる', 'Memanen/memangkas'],
    ['稲刈り', 'いねかり', 'Panen padi'],
  ],
  脅: [
    ['脅す', 'おどす', 'Mengancam'],
    ['脅かす', 'おびやかす', 'Membahayakan'],
    ['脅迫', 'きょうはく', 'Ancaman'],
    ['脅威', 'きょうい', 'Ancaman'],
    ['脅し', 'おどし', 'Gertakan'],
  ],
  爪: [
    ['爪', 'つめ', 'Kuku'],
    ['爪切り', 'つめきり', 'Gunting kuku'],
    ['爪先', 'つまさき', 'Ujung jari kaki'],
    ['深爪', 'ふかづめ', 'Kuku terpotong terlalu pendek'],
  ],
  肺: [
    ['肺', 'はい', 'Paru-paru'],
    ['肺炎', 'はいえん', 'Pneumonia'],
    ['肺活量', 'はいかつりょう', 'Kapasitas paru-paru'],
    ['肺がん', 'はいがん', 'Kanker paru-paru'],
  ],
  舌: [
    ['舌', 'した', 'Lidah'],
    ['舌打ち', 'したうち', 'Berdecak kesal'],
    ['猫舌', 'ねこじた', 'Tidak tahan makanan panas'],
    ['毒舌', 'どくぜつ', 'Lidah tajam'],
    ['舌鼓', 'したつづみ', 'Berdecak nikmat'],
  ],
  肘: [
    ['肘', 'ひじ', 'Siku'],
    ['肘掛け', 'ひじかけ', 'Sandaran lengan'],
    ['肘鉄', 'ひじてつ', 'Sikutan/penolakan'],
    ['肘掛け椅子', 'ひじかけいす', 'Kursi berlengan'],
  ],
  肝: [
    ['肝臓', 'かんぞう', 'Hati (organ)'],
    ['肝心', 'かんじん', 'Penting/utama'],
    ['肝', 'きも', 'Hati/keberanian'],
    ['肝炎', 'かんえん', 'Hepatitis'],
    ['肝試し', 'きもだめし', 'Uji nyali'],
  ],
  狩: [
    ['狩る', 'かる', 'Berburu'],
    ['狩り', 'かり', 'Perburuan'],
    ['狩人', 'かりうど', 'Pemburu'],
    ['潮干狩り', 'しおひがり', 'Mencari kerang di pantai'],
    ['紅葉狩り', 'もみじがり', 'Menikmati daun musim gugur'],
  ],
  孤: [
    ['孤独', 'こどく', 'Kesepian'],
    ['孤立', 'こりつ', 'Terisolasi'],
    ['孤児', 'こじ', 'Anak yatim piatu'],
    ['孤島', 'ことう', 'Pulau terpencil'],
  ],
  苗: [
    ['苗', 'なえ', 'Bibit'],
    ['苗字', 'みょうじ', 'Nama keluarga'],
    ['種苗', 'しゅびょう', 'Benih dan bibit'],
    ['苗木', 'なえぎ', 'Bibit pohon'],
  ],
  描: [
    ['描く', 'えがく', 'Menggambar'],
    ['描写', 'びょうしゃ', 'Penggambaran'],
    ['素描', 'そびょう', 'Sketsa'],
    ['描く', 'かく', 'Melukis'],
  ],
  滑: [
    ['滑る', 'すべる', 'Tergelincir'],
    ['滑らか', 'なめらか', 'Halus'],
    ['円滑', 'えんかつ', 'Lancar'],
    ['滑り台', 'すべりだい', 'Perosotan'],
    ['滑走路', 'かっそうろ', 'Landasan pacu'],
  ],
  架: [
    ['架空', 'かくう', 'Fiktif'],
    ['十字架', 'じゅうじか', 'Salib'],
    ['書架', 'しょか', 'Rak buku'],
    ['高架', 'こうか', 'Jalan layang'],
    ['架かる', 'かかる', 'Terbentang (jembatan)'],
  ],
  培: [
    ['培う', 'つちかう', 'Menumbuhkan/memupuk'],
    ['栽培', 'さいばい', 'Budidaya'],
    ['培養', 'ばいよう', 'Kultur/pembiakan'],
    ['培地', 'ばいち', 'Media tanam'],
  ],
  妬: [
    ['妬む', 'ねたむ', 'Iri hati'],
    ['嫉妬', 'しっと', 'Cemburu'],
    ['妬み', 'ねたみ', 'Rasa iri'],
  ],
  焦: [
    ['焦る', 'あせる', 'Terburu-buru/gelisah'],
    ['焦げる', 'こげる', 'Gosong'],
    ['焦点', 'しょうてん', 'Titik fokus'],
    ['焦がす', 'こがす', 'Membakar hingga hangus'],
    ['焦燥', 'しょうそう', 'Kegelisahan'],
  ],
  眉: [
    ['眉', 'まゆ', 'Alis'],
    ['眉毛', 'まゆげ', 'Alis'],
    ['眉間', 'みけん', 'Di antara alis'],
    ['眉唾', 'まゆつば', 'Meragukan'],
  ],
  侮: [
    ['侮る', 'あなどる', 'Meremehkan'],
    ['侮辱', 'ぶじょく', 'Penghinaan'],
    ['侮蔑', 'ぶべつ', 'Penghinaan/cemoohan'],
    ['侮れない', 'あなどれない', 'Tidak bisa diremehkan'],
  ], //YANG DI ONLINE SAMPAI SINI
  奨: [
    ['奨励', 'しょうれい', 'Dorongan; anjuran'],
    ['奨学金', 'しょうがくきん', 'Beasiswa'],
    ['推薦奨励', 'すいせんしょうれい', 'Dorongan rekomendasi'],
    ['奨学生', 'しょうがくせい', 'Penerima beasiswa'],
  ],

  挿: [
    ['挿入', 'そうにゅう', 'Penyisipan; memasukkan'],
    ['挿絵', 'さしえ', 'Ilustrasi; gambar sisipan'],
    ['挿し木', 'さしき', 'Stek tanaman'],
    ['挿し込む', 'さしこむ', 'Memasukkan; menyisipkan'],
  ],

  援: [
    ['援助', 'えんじょ', 'Bantuan; pertolongan'],
    ['応援', 'おうえん', 'Dukungan; menyemangati'],
    ['支援', 'しえん', 'Dukungan; bantuan'],
    ['救援', 'きゅうえん', 'Bantuan penyelamatan'],
    ['援護', 'えんご', 'Perlindungan; dukungan'],
  ],

  詩: [
    ['詩', 'し', 'Puisi'],
    ['詩人', 'しじん', 'Penyair'],
    ['詩集', 'ししゅう', 'Kumpulan puisi'],
    ['詩歌', 'しいか', 'Puisi dan lagu'],
  ],

  卑: [
    ['卑怯', 'ひきょう', 'Pengecut; licik'],
    ['卑しい', 'いやしい', 'Rendah; hina; tidak bermoral'],
    ['卑下', 'ひげ', 'Merendahkan diri'],
    ['卑劣', 'ひれつ', 'Keji; licik'],
  ],

  娯: [
    ['娯楽', 'ごらく', 'Hiburan'],
    ['娯楽施設', 'ごらくしせつ', 'Fasilitas hiburan'],
    ['娯楽番組', 'ごらくばんぐみ', 'Program hiburan'],
  ],

  辱: [
    ['屈辱', 'くつじょく', 'Penghinaan; rasa malu'],
    ['侮辱', 'ぶじょく', 'Penghinaan'],
    ['恥辱', 'ちじょく', 'Aib; penghinaan'],
    ['辱める', 'はずかしめる', 'Mempermalukan; menghina'],
  ],

  漫: [
    ['漫画', 'まんが', 'Komik'],
    ['漫画家', 'まんがか', 'Pengarang komik'],
    ['漫才', 'まんざい', 'Komedi dua orang'],
    ['漫然', 'まんぜん', 'Tanpa tujuan; sembarangan'],
    ['漫談', 'まんだん', 'Obrolan humor'],
  ],

  菌: [
    ['細菌', 'さいきん', 'Bakteri'],
    ['殺菌', 'さっきん', 'Sterilisasi; membunuh kuman'],
    ['雑菌', 'ざっきん', 'Kuman; bakteri liar'],
    ['菌類', 'きんるい', 'Jenis-jenis jamur'],
    ['抗菌', 'こうきん', 'Antibakteri'],
  ],

  恩: [
    ['恩', 'おん', 'Budi; kebaikan yang diterima'],
    ['恩人', 'おんじん', 'Orang yang berjasa'],
    ['恩返し', 'おんがえし', 'Membalas budi'],
    ['恩恵', 'おんけい', 'Manfaat; berkah'],
    ['恩師', 'おんし', 'Guru yang berjasa'],
  ],

  吐: [
    ['吐く', 'はく', 'Muntah; mengeluarkan'],
    ['吐き気', 'はきけ', 'Rasa mual'],
    ['嘔吐', 'おうと', 'Muntah'],
    ['吐息', 'といき', 'Hembusan napas'],
    ['吐き出す', 'はきだす', 'Memuntahkan; mengeluarkan'],
  ],

  梅: [
    ['梅', 'うめ', 'Buah plum Jepang'],
    ['梅雨', 'つゆ', 'Musim hujan'],
    ['梅干し', 'うめぼし', 'Acar plum Jepang'],
    ['梅酒', 'うめしゅ', 'Minuman alkohol plum'],
    ['梅林', 'ばいりん', 'Hutan pohon plum'],
  ],

  豚: [
    ['豚', 'ぶた', 'Babi'],
    ['豚肉', 'ぶたにく', 'Daging babi'],
    ['豚骨', 'とんこつ', 'Tulang babi'],
    ['豚カツ', 'とんかつ', 'Daging babi goreng tepung'],
    ['養豚', 'ようとん', 'Peternakan babi'],
  ],

  挨: [
    ['挨拶', 'あいさつ', 'Salam; sapaan'],
    ['挨拶文', 'あいさつぶん', 'Kalimat salam'],
    ['挨拶状', 'あいさつじょう', 'Surat ucapan; surat salam'],
  ],

  拶: [
    ['挨拶', 'あいさつ', 'Salam; sapaan'],
    ['挨拶文', 'あいさつぶん', 'Kalimat salam'],
    ['挨拶状', 'あいさつじょう', 'Surat ucapan'],
  ],

  嫁: [
    ['嫁', 'よめ', 'Menantu perempuan; istri'],
    ['花嫁', 'はなよめ', 'Pengantin perempuan'],
    ['嫁ぐ', 'とつぐ', 'Menikah; menjadi istri'],
    ['嫁入り', 'よめいり', 'Pernikahan perempuan'],
    ['嫁姑', 'よめしゅうとめ', 'Hubungan menantu perempuan dan ibu mertua'],
  ],

  郎: [
    ['長男', 'ちょうなん', 'Anak laki-laki tertua'],
    ['新郎', 'しんろう', 'Pengantin pria'],
    ['野郎', 'やろう', 'Pria; orang itu (kasar)'],
    ['太郎', 'たろう', 'Taro (nama laki-laki)'],
    ['郎党', 'ろうとう', 'Pengikut; anak buah'],
  ],

  誘: [
    ['誘う', 'さそう', 'Mengajak'],
    ['誘惑', 'ゆうわく', 'Godaan'],
    ['誘導', 'ゆうどう', 'Panduan; pengarahan'],
    ['誘拐', 'ゆうかい', 'Penculikan'],
    ['勧誘', 'かんゆう', 'Ajakan; perekrutan'],
  ],

  弔: [
    ['弔う', 'とむらう', 'Berbelasungkawa; memberikan penghormatan kepada orang meninggal'],
    ['弔辞', 'ちょうじ', 'Pidato belasungkawa'],
    ['弔問', 'ちょうもん', 'Kunjungan belasungkawa'],
    ['弔電', 'ちょうでん', 'Telegram belasungkawa'],
    ['弔意', 'ちょうい', 'Ungkapan belasungkawa'],
  ],

  涯: [
    ['生涯', 'しょうがい', 'Seumur hidup'],
    ['涯', 'がい', 'Ujung; batas (pemakaian terbatas)'],
    ['天涯', 'てんがい', 'Ujung dunia; tempat yang jauh'],
    ['涯しない', 'はてしない', 'Tidak berujung; tak terbatas'],
  ],

  従: [
    ['従う', 'したがう', 'Mengikuti; menaati'],
    ['従業員', 'じゅうぎょういん', 'Karyawan'],
    ['従来', 'じゅうらい', 'Sebelumnya; selama ini'],
    ['従兄弟', 'いとこ', 'Sepupu laki-laki'],
    ['従事', 'じゅうじ', 'Terlibat dalam pekerjaan'],
    ['服従', 'ふくじゅう', 'Kepatuhan; tunduk'],
  ],

  桜: [
    ['桜', 'さくら', 'Bunga sakura'],
    ['桜の木', 'さくらのき', 'Pohon sakura'],
    ['桜並木', 'さくらなみき', 'Deretan pohon sakura'],
    ['桜餅', 'さくらもち', 'Mochi sakura'],
    ['夜桜', 'よざくら', 'Sakura pada malam hari'],
  ],

  滝: [
    ['滝', 'たき', 'Air terjun'],
    ['滝壺', 'たきつぼ', 'Kolam di bawah air terjun'],
    ['滝行', 'たきぎょう', 'Ritual meditasi di bawah air terjun'],
    ['滝登り', 'たきのぼり', 'Mendaki air terjun'],
  ],

  尾: [
    ['尾', 'お', 'Ekor'],
    ['尾行', 'びこう', 'Menguntit; membuntuti'],
    ['尾根', 'おね', 'Punggung gunung'],
    ['末尾', 'まつび', 'Bagian akhir'],
    ['尾翼', 'びよく', 'Sayap ekor pesawat'],
  ],

  沼: [
    ['沼', 'ぬま', 'Rawa'],
    ['沼地', 'ぬまち', 'Tanah rawa'],
    ['泥沼', 'どろぬま', 'Rawa berlumpur; situasi yang rumit'],
    ['沼沢', 'しょうたく', 'Rawa dan danau kecil'],
  ],

  崖: [
    ['崖', 'がけ', 'Tebing'],
    ['崖っぷち', 'がけっぷち', 'Tepi jurang; situasi kritis'],
    ['崖崩れ', 'がけくずれ', 'Longsor tebing'],
    ['断崖', 'だんがい', 'Tebing curam'],
  ],

  蛍: [
    ['蛍', 'ほたる', 'Kunang-kunang'],
    ['蛍光灯', 'けいこうとう', 'Lampu fluoresen'],
    ['蛍光', 'けいこう', 'Fluoresensi'],
    ['蛍光ペン', 'けいこうペン', 'Stabilo'],
  ],

  芽: [
    ['芽', 'め', 'Tunas'],
    ['発芽', 'はつが', 'Perkecambahan'],
    ['芽生える', 'めばえる', 'Mulai tumbuh; mulai muncul'],
    ['新芽', 'しんめ', 'Tunas baru'],
    ['芽吹く', 'めぶく', 'Mulai bertunas'],
  ],

  峡: [
    ['峡谷', 'きょうこく', 'Ngarai'],
    ['海峡', 'かいきょう', 'Selat'],
    ['峡', 'きょう', 'Lembah sempit'],
    ['山峡', 'さんきょう', 'Lembah pegunungan'],
  ],

  浸: [
    ['浸す', 'ひたす', 'Merendam'],
    ['浸かる', 'つかる', 'Terendam; berendam'],
    ['浸水', 'しんすい', 'Kebanjiran; kemasukan air'],
    ['浸透', 'しんとう', 'Penyerapan; penetrasi'],
    ['浸食', 'しんしょく', 'Erosi'],
  ],

  昆: [
    ['昆虫', 'こんちゅう', 'Serangga'],
    ['昆虫学', 'こんちゅうがく', 'Ilmu entomologi'],
    ['昆虫採集', 'こんちゅうさいしゅう', 'Pengumpulan serangga'],
    ['昆布', 'こんぶ', 'Rumput laut kombu'],
  ],

  脈: [
    ['脈', 'みゃく', 'Denyut nadi; pembuluh darah'],
    ['脈拍', 'みゃくはく', 'Denyut nadi'],
    ['血脈', 'けつみゃく', 'Garis keturunan'],
    ['山脈', 'さんみゃく', 'Pegunungan'],
    ['文脈', 'ぶんみゃく', 'Konteks'],
    ['動脈', 'どうみゃく', 'Pembuluh arteri'],
  ],

  唇: [
    ['唇', 'くちびる', 'Bibir'],
    ['上唇', 'うわくちびる', 'Bibir atas'],
    ['下唇', 'したくちびる', 'Bibir bawah'],
    ['唇を噛む', 'くちびるをかむ', 'Menggigit bibir'],
  ],

  脇: [
    ['脇', 'わき', 'Samping; ketiak'],
    ['脇道', 'わきみち', 'Jalan samping'],
    ['脇役', 'わきやく', 'Pemeran pendukung'],
    ['脇見', 'わきみ', 'Melihat ke samping'],
    ['脇腹', 'わきばら', 'Sisi perut'],
  ],

  胴: [
    ['胴', 'どう', 'Badan; batang tubuh'],
    ['胴体', 'どうたい', 'Tubuh; badan utama'],
    ['胴上げ', 'どうあげ', 'Mengangkat seseorang ke udara beramai-ramai'],
    ['胴着', 'どうぎ', 'Pakaian pelindung tubuh'],
    ['胴回り', 'どうまわり', 'Lingkar badan'],
  ],

  倫: [
    ['倫理', 'りんり', 'Etika'],
    ['倫理学', 'りんりがく', 'Ilmu etika'],
    ['倫理的', 'りんりてき', 'Bersifat etis'],
    ['不倫', 'ふりん', 'Perselingkuhan'],
    ['道徳倫理', 'どうとくりんり', 'Moral dan etika'],
  ],

  旨: [
    ['旨い', 'うまい', 'Enak; mahir'],
    ['趣旨', 'しゅし', 'Maksud; tujuan utama'],
    ['要旨', 'ようし', 'Inti; ringkasan'],
    ['旨', 'むね', 'Isi; maksud'],
    ['旨味', 'うまみ', 'Rasa gurih'],
  ],

  功: [
    ['成功', 'せいこう', 'Keberhasilan'],
    ['功績', 'こうせき', 'Prestasi; jasa'],
    ['功労', 'こうろう', 'Jasa besar'],
    ['功名', 'こうみょう', 'Ketenaran karena prestasi'],
    ['人工', 'じんこう', 'Buatan manusia'],
  ],

  筋: [
    ['筋', 'すじ', 'Otot; garis; alur'],
    ['筋肉', 'きんにく', 'Otot'],
    ['筋力', 'きんりょく', 'Kekuatan otot'],
    ['筋道', 'すじみち', 'Alur logis; urutan yang benar'],
    ['大筋', 'おおすじ', 'Garis besar'],
    ['腹筋', 'ふっきん', 'Otot perut'],
  ],

  斜: [
    ['斜め', 'ななめ', 'Miring; diagonal'],
    ['斜面', 'しゃめん', 'Permukaan miring; lereng'],
    ['斜線', 'しゃせん', 'Garis miring'],
    ['斜視', 'しゃし', 'Mata juling'],
    ['傾斜', 'けいしゃ', 'Kemiringan'],
  ],

  邪: [
    ['邪魔', 'じゃま', 'Gangguan; menghalangi'],
    ['邪悪', 'じゃあく', 'Jahat'],
    ['邪心', 'じゃしん', 'Niat buruk'],
    ['邪道', 'じゃどう', 'Cara yang menyimpang'],
    ['風邪', 'かぜ', 'Pilek'],
  ],

  侍: [
    ['侍', 'さむらい', 'Samurai'],
    ['侍女', 'じじょ', 'Pelayan perempuan'],
    ['侍従', 'じじゅう', 'Pelayan istana'],
    ['武士', 'ぶし', 'Prajurit Jepang'],
    ['侍姿', 'さむらいすがた', 'Penampilan seorang samurai'],
  ],

  滅: [
    ['滅びる', 'ほろびる', 'Hancur; musnah'],
    ['滅ぼす', 'ほろぼす', 'Memusnahkan'],
    ['消滅', 'しょうめつ', 'Kepunahan; penghilangan'],
    ['絶滅', 'ぜつめつ', 'Kepunahan'],
    ['滅亡', 'めつぼう', 'Kehancuran; keruntuhan'],
    ['壊滅', 'かいめつ', 'Kehancuran total'],
  ],

  訳: [
    ['訳', 'わけ', 'Alasan; makna'],
    ['翻訳', 'ほんやく', 'Terjemahan'],
    ['通訳', 'つうやく', 'Penerjemah lisan'],
    ['訳す', 'やくす', 'Menerjemahkan'],
    ['言い訳', 'いいわけ', 'Alasan; dalih'],
    ['訳文', 'やくぶん', 'Teks terjemahan'],
  ],

  肥: [
    ['肥える', 'こえる', 'Menjadi gemuk; menjadi subur'],
    ['肥満', 'ひまん', 'Obesitas'],
    ['肥料', 'ひりょう', 'Pupuk'],
    ['肥大', 'ひだい', 'Pembesaran'],
    ['肥やす', 'こやす', 'Menyuburkan; menggemukkan'],
  ],

  晶: [
    ['結晶', 'けっしょう', 'Kristal'],
    ['水晶', 'すいしょう', 'Kristal kuarsa'],
    ['液晶', 'えきしょう', 'Kristal cair'],
    ['結晶化', 'けっしょうか', 'Kristalisasi'],
    ['結晶体', 'けっしょうたい', 'Benda kristal'],
  ],

  抽: [
    ['抽出', 'ちゅうしゅつ', 'Ekstraksi; pengambilan'],
    ['抽選', 'ちゅうせん', 'Undian; pengundian'],
    ['抽象', 'ちゅうしょう', 'Abstrak'],
    ['抽象的', 'ちゅうしょうてき', 'Bersifat abstrak'],
    ['抽出物', 'ちゅうしゅつぶつ', 'Hasil ekstraksi'],
  ],

  併: [
    ['併用', 'へいよう', 'Penggunaan secara bersamaan'],
    ['併合', 'へいごう', 'Penggabungan; aneksasi'],
    ['併設', 'へいせつ', 'Pendirian fasilitas secara bersamaan'],
    ['併記', 'へいき', 'Penulisan secara berdampingan'],
    ['合併', 'がっぺい', 'Merger; penggabungan'],
  ],

  亜: [
    ['亜熱帯', 'あねったい', 'Subtropis'],
    ['亜鉛', 'あえん', 'Seng (zinc)'],
    ['亜種', 'あしゅ', 'Subspesies'],
    ['亜流', 'ありゅう', 'Aliran turunan; pengikut'],
    ['亜大陸', 'あたいりく', 'Anak benua'],
  ],

  惧: [
    ['危惧', 'きぐ', 'Kekhawatiran; kecemasan'],
    ['恐惧', 'きょうく', 'Ketakutan; rasa takut yang mendalam'],
    ['危惧する', 'きぐする', 'Mengkhawatirkan'],
  ],

  胎: [
    ['胎児', 'たいじ', 'Janin'],
    ['胎盤', 'たいばん', 'Plasenta'],
    ['胎内', 'たいない', 'Di dalam rahim'],
    ['胎動', 'たいどう', 'Gerakan janin'],
    ['胎教', 'たいきょう', 'Pendidikan prenatal'],
  ],

  劣: [
    ['劣る', 'おとる', 'Lebih rendah; kalah'],
    ['劣等', 'れっとう', 'Inferior; rendah'],
    ['劣化', 'れっか', 'Penurunan kualitas'],
    ['劣勢', 'れっせい', 'Posisi yang kurang menguntungkan'],
    ['優劣', 'ゆうれつ', 'Keunggulan dan kelemahan'],
  ],

  穴: [
    ['穴', 'あな', 'Lubang'],
    ['穴場', 'あなば', 'Tempat tersembunyi yang bagus'],
    ['穴埋め', 'あなうめ', 'Menutup lubang; mengisi kekosongan'],
    ['洞穴', 'どうけつ', 'Gua'],
    ['毛穴', 'けあな', 'Pori-pori'],
    ['落とし穴', 'おとしあな', 'Perangkap; lubang jebakan'],
  ],

  序: [
    ['順序', 'じゅんじょ', 'Urutan'],
    ['序文', 'じょぶん', 'Kata pengantar'],
    ['序章', 'じょしょう', 'Bab pendahuluan'],
    ['序列', 'じょれつ', 'Hierarki; urutan tingkatan'],
    ['序盤', 'じょばん', 'Bagian awal'],
  ],

  忠: [
    ['忠実', 'ちゅうじつ', 'Setia; sungguh-sungguh'],
    ['忠告', 'ちゅうこく', 'Nasihat; peringatan'],
    ['忠誠', 'ちゅうせい', 'Kesetiaan'],
    ['忠義', 'ちゅうぎ', 'Loyalitas; kesetiaan'],
    ['忠臣', 'ちゅうしん', 'Pengikut yang setia'],
  ],

  氾: [
    ['氾濫', 'はんらん', 'Luapan; banjir'],
    ['氾濫する', 'はんらんする', 'Melimpah; meluap'],
    ['氾濫原', 'はんらんげん', 'Dataran banjir'],
  ],

  廷: [
    ['法廷', 'ほうてい', 'Ruang sidang pengadilan'],
    ['宮廷', 'きゅうてい', 'Istana kerajaan'],
    ['廷内', 'ていない', 'Di dalam istana atau pengadilan'],
    ['出廷', 'しゅってい', 'Menghadiri persidangan'],
  ],

  如: [
    ['如実', 'にょじつ', 'Sesuai kenyataan'],
    ['如何', 'いかん', 'Bagaimana; tergantung pada'],
    ['突如', 'とつじょ', 'Tiba-tiba'],
    ['欠如', 'けつじょ', 'Kekurangan; ketiadaan'],
    ['如来', 'にょらい', 'Tathagata; Buddha'],
  ],

  充: [
    ['充電', 'じゅうでん', 'Mengisi daya'],
    ['十分', 'じゅうぶん', 'Cukup; memadai'],
    ['充実', 'じゅうじつ', 'Kelengkapan; kepuasan'],
    ['充満', 'じゅうまん', 'Memenuhi; melimpah'],
    ['補充', 'ほじゅう', 'Pengisian ulang; penambahan'],
  ],

  密: [
    ['秘密', 'ひみつ', 'Rahasia'],
    ['密接', 'みっせつ', 'Erat; berkaitan erat'],
    ['密度', 'みつど', 'Kepadatan'],
    ['密室', 'みっしつ', 'Ruangan tertutup'],
    ['密輸', 'みつゆ', 'Penyelundupan'],
    ['厳密', 'げんみつ', 'Sangat teliti; ketat'],
  ],

  仰: [
    ['仰ぐ', 'あおぐ', 'Memandang ke atas; meminta bantuan'],
    ['仰向け', 'あおむけ', 'Telentang'],
    ['仰天', 'ぎょうてん', 'Sangat terkejut'],
    ['信仰', 'しんこう', 'Kepercayaan; keyakinan agama'],
    ['仰せ', 'おおせ', 'Perintah; titah'],
  ],

  免: [
    ['免許', 'めんきょ', 'Izin; lisensi'],
    ['免許証', 'めんきょしょう', 'Surat izin; kartu lisensi'],
    ['免除', 'めんじょ', 'Pembebasan'],
    ['免税', 'めんぜい', 'Bebas pajak'],
    ['免れる', 'まぬかれる', 'Terhindar dari'],
    ['免疫', 'めんえき', 'Imunitas'],
  ],

  罰: [
    ['罰', 'ばつ', 'Hukuman'],
    ['罰金', 'ばっきん', 'Denda'],
    ['罰則', 'ばっそく', 'Sanksi'],
    ['処罰', 'しょばつ', 'Penghukuman'],
    ['天罰', 'てんばつ', 'Hukuman dari Tuhan'],
    ['体罰', 'たいばつ', 'Hukuman fisik'],
  ],

  訴: [
    ['訴える', 'うったえる', 'Mengadukan; menggugat'],
    ['訴訟', 'そしょう', 'Gugatan hukum'],
    ['告訴', 'こくそ', 'Pengaduan pidana'],
    ['起訴', 'きそ', 'Penuntutan'],
    ['訴状', 'そじょう', 'Surat gugatan'],
    ['訴え', 'うったえ', 'Keluhan; tuntutan'],
  ],

  貢: [
    ['貢献', 'こうけん', 'Kontribusi; sumbangan'],
    ['貢献する', 'こうけんする', 'Berkontribusi'],
    ['貢物', 'みつぎもの', 'Upeti; persembahan'],
    ['朝貢', 'ちょうこう', 'Persembahan upeti kepada negara lain'],
  ],

  惑: [
    ['迷惑', 'めいわく', 'Gangguan; ketidaknyamanan'],
    ['困惑', 'こんわく', 'Kebingungan'],
    ['誘惑', 'ゆうわく', 'Godaan'],
    ['疑惑', 'ぎわく', 'Kecurigaan'],
    ['惑星', 'わくせい', 'Planet'],
    ['戸惑う', 'とまどう', 'Bingung; kehilangan arah'],
  ],

  控: [
    ['控える', 'ひかえる', 'Menahan diri; mencatat; menunggu'],
    ['控え室', 'ひかえしつ', 'Ruang tunggu'],
    ['控除', 'こうじょ', 'Pengurangan; potongan'],
    ['控訴', 'こうそ', 'Banding dalam perkara hukum'],
    ['控えめ', 'ひかえめ', 'Sederhana; tidak berlebihan'],
  ],

  柵: [
    ['柵', 'さく', 'Pagar; terali'],
    ['鉄柵', 'てっさく', 'Pagar besi'],
    ['防護柵', 'ぼうごさく', 'Pagar pengaman'],
    ['柵で囲む', 'さくでかこむ', 'Mengelilingi dengan pagar'],
  ],

  紀: [
    ['紀元', 'きげん', 'Era; awal penanggalan'],
    ['紀行', 'きこう', 'Catatan perjalanan'],
    ['紀念', 'きねん', 'Peringatan (pemakaian terbatas)'],
    ['世紀', 'せいき', 'Abad'],
    ['紀律', 'きりつ', 'Disiplin; tata tertib'],
    ['風紀', 'ふうき', 'Moral dan ketertiban umum'],
  ],

  津: [
    ['津波', 'つなみ', 'Tsunami'],
    ['津々浦々', 'つつうらうら', 'Seluruh pelosok negeri'],
    ['津', 'つ', 'Pelabuhan (pemakaian dalam nama tempat)'],
    ['興津', 'おきつ', 'Nama tempat di Jepang'],
  ],

  徐: [
    ['徐々に', 'じょじょに', 'Sedikit demi sedikit'],
    ['徐行', 'じょこう', 'Berjalan atau berkendara perlahan'],
    ['徐々', 'じょじょ', 'Secara bertahap'],
    ['徐冷', 'じょれい', 'Pendinginan perlahan'],
  ],

  捗: [
    ['進捗', 'しんちょく', 'Kemajuan; perkembangan'],
    ['進捗状況', 'しんちょくじょうきょう', 'Situasi perkembangan'],
    ['捗る', 'はかどる', 'Berjalan lancar; mengalami kemajuan'],
    ['仕事が捗る', 'しごとがはかどる', 'Pekerjaan berjalan lancar'],
  ],

  耐: [
    ['耐える', 'たえる', 'Bertahan; menahan'],
    ['耐久', 'たいきゅう', 'Daya tahan'],
    ['耐久性', 'たいきゅうせい', 'Ketahanan'],
    ['忍耐', 'にんたい', 'Kesabaran; ketabahan'],
    ['耐熱', 'たいねつ', 'Tahan panas'],
    ['耐震', 'たいしん', 'Tahan gempa'],
  ],

  盾: [
    ['盾', 'たて', 'Perisai'],
    ['防盾', 'ぼうじゅん', 'Perisai pelindung'],
    ['矛盾', 'むじゅん', 'Kontradiksi; pertentangan'],
    ['盾にする', 'たてにする', 'Menjadikan sebagai tameng'],
  ],

  漏: [
    ['漏れる', 'もれる', 'Bocor; keluar; terlewat'],
    ['漏らす', 'もらす', 'Membocorkan; meluapkan'],
    ['漏水', 'ろうすい', 'Kebocoran air'],
    ['雨漏り', 'あまもり', 'Atap bocor'],
    ['漏電', 'ろうでん', 'Kebocoran listrik'],
    ['情報漏洩', 'じょうほうろうえい', 'Kebocoran informasi'],
  ],

  滞: [
    ['滞在', 'たいざい', 'Tinggal sementara'],
    ['滞納', 'たいのう', 'Tunggakan pembayaran'],
    ['停滞', 'ていたい', 'Stagnasi; kemacetan'],
    ['滞る', 'とどこおる', 'Terhambat; tertunda'],
    ['渋滞', 'じゅうたい', 'Kemacetan lalu lintas'],
  ],

  拘: [
    ['拘束', 'こうそく', 'Penahanan; pembatasan'],
    ['拘留', 'こうりゅう', 'Penahanan'],
    ['拘置', 'こうち', 'Penahanan sementara'],
    ['拘る', 'こだわる', 'Terlalu memperhatikan; berpegang teguh'],
    ['拘置所', 'こうちしょ', 'Rumah tahanan'],
  ],

  頃: [
    ['頃', 'ころ', 'Sekitar; waktu'],
    ['この頃', 'このごろ', 'Akhir-akhir ini'],
    ['近頃', 'ちかごろ', 'Belakangan ini'],
    ['日頃', 'ひごろ', 'Sehari-hari; biasanya'],
    ['子供の頃', 'こどものころ', 'Masa kecil'],
  ],

  釣: [
    ['釣る', 'つる', 'Memancing'],
    ['釣り', 'つり', 'Memancing'],
    ['釣り銭', 'つりせん', 'Uang kembalian'],
    ['釣り合う', 'つりあう', 'Seimbang; sepadan'],
    ['釣り堀', 'つりぼり', 'Kolam pemancingan'],
    ['釣り竿', 'つりざお', 'Joran pancing'],
  ],

  宴: [
    ['宴会', 'えんかい', 'Pesta; jamuan'],
    ['宴', 'うたげ', 'Perjamuan; pesta'],
    ['歓迎宴', 'かんげいえん', 'Jamuan penyambutan'],
    ['祝宴', 'しゅくえん', 'Pesta perayaan'],
    ['宴席', 'えんせき', 'Tempat jamuan'],
  ],

  秩: [
    ['秩序', 'ちつじょ', 'Ketertiban; keteraturan'],
    ['秩序立つ', 'ちつじょだつ', 'Tersusun secara teratur'],
    ['無秩序', 'むちつじょ', 'Kekacauan; tidak teratur'],
    ['社会秩序', 'しゃかいちつじょ', 'Ketertiban sosial'],
  ],

  源: [
    ['源', 'みなもと', 'Sumber; asal'],
    ['原因', 'げんいん', 'Penyebab'],
    ['資源', 'しげん', 'Sumber daya'],
    ['電源', 'でんげん', 'Sumber listrik'],
    ['水源', 'すいげん', 'Sumber air'],
    ['起源', 'きげん', 'Asal-usul'],
  ],

  脱: [
    ['脱ぐ', 'ぬぐ', 'Melepas pakaian'],
    ['脱出', 'だっしゅつ', 'Melarikan diri; keluar'],
    ['脱線', 'だっせん', 'Keluar dari rel; menyimpang dari topik'],
    ['脱税', 'だつぜい', 'Penggelapan pajak'],
    ['脱力', 'だつりょく', 'Kehilangan tenaga'],
    ['脱落', 'だつらく', 'Gugur; tertinggal'],
  ],

  湧: [
    ['湧く', 'わく', 'Muncul; memancar; timbul'],
    ['湧き水', 'わきみず', 'Mata air'],
    ['湧出', 'ゆうしゅつ', 'Kemunculan; pancaran'],
    ['湧泉', 'ゆうせん', 'Mata air'],
    ['湧き上がる', 'わきあがる', 'Melonjak; membuncah'],
  ],

  潜: [
    ['潜る', 'もぐる', 'Menyelam; masuk ke bawah'],
    ['潜水', 'せんすい', 'Menyelam'],
    ['潜在', 'せんざい', 'Potensial; tersembunyi'],
    ['潜入', 'せんにゅう', 'Menyusup'],
    ['潜伏', 'せんぷく', 'Bersembunyi; masa inkubasi'],
    ['潜水艦', 'せんすいかん', 'Kapal selam'],
  ],

  詐: [
    ['詐欺', 'さぎ', 'Penipuan'],
    ['詐欺師', 'さぎし', 'Penipu'],
    ['詐欺事件', 'さぎじけん', 'Kasus penipuan'],
    ['詐称', 'さしょう', 'Pemalsuan identitas atau klaim'],
    ['詐取', 'さしゅ', 'Memperoleh sesuatu dengan menipu'],
  ],

  妙: [
    ['妙', 'みょう', 'Aneh; misterius; luar biasa'],
    ['微妙', 'びみょう', 'Samar; rumit; sulit dijelaskan'],
    ['妙な', 'みょうな', 'Aneh'],
    ['妙案', 'みょうあん', 'Ide yang brilian'],
    ['奇妙', 'きみょう', 'Aneh; ganjil'],
    ['妙技', 'みょうぎ', 'Keterampilan luar biasa'],
  ],

  患: [
    ['患者', 'かんじゃ', 'Pasien'],
    ['病患', 'びょうかん', 'Penderita penyakit'],
    ['患う', 'わずらう', 'Menderita penyakit'],
    ['患部', 'かんぶ', 'Bagian tubuh yang sakit'],
    ['疾患', 'しっかん', 'Penyakit; gangguan kesehatan'],
  ],

  衰: [
    ['衰える', 'おとろえる', 'Melemah; menurun'],
    ['衰退', 'すいたい', 'Kemunduran'],
    ['衰弱', 'すいじゃく', 'Kelemahan fisik'],
    ['老衰', 'ろうすい', 'Kelemahan akibat usia tua'],
    ['衰亡', 'すいぼう', 'Kemerosotan dan kehancuran'],
  ],

  隊: [
    ['隊', 'たい', 'Regu; kelompok'],
    ['軍隊', 'ぐんたい', 'Angkatan bersenjata'],
    ['部隊', 'ぶたい', 'Pasukan; unit'],
    ['隊員', 'たいいん', 'Anggota regu'],
    ['消防隊', 'しょうぼうたい', 'Regu pemadam kebakaran'],
    ['自衛隊', 'じえいたい', 'Pasukan Bela Diri Jepang'],
  ],

  偏: [
    ['偏る', 'かたよる', 'Berat sebelah; tidak seimbang'],
    ['偏見', 'へんけん', 'Prasangka'],
    ['偏差値', 'へんさち', 'Nilai deviasi'],
    ['偏食', 'へんしょく', 'Pola makan tidak seimbang'],
    ['偏向', 'へんこう', 'Keberpihakan; bias'],
    ['偏屈', 'へんくつ', 'Keras kepala; eksentrik'],
  ],

  啓: [
    ['啓発', 'けいはつ', 'Pencerahan; peningkatan kesadaran'],
    ['啓示', 'けいじ', 'Wahyu; petunjuk'],
    ['啓蒙', 'けいもう', 'Pencerahan intelektual'],
    ['拝啓', 'はいけい', 'Dengan hormat (pembuka surat)'],
    ['啓く', 'ひらく', 'Membuka; memberikan pencerahan'],
  ],

  巣: [
    ['巣', 'す', 'Sarang'],
    ['巣箱', 'すばこ', 'Kotak sarang burung'],
    ['巣立ち', 'すだち', 'Meninggalkan sarang; mandiri'],
    ['巣穴', 'すあな', 'Lubang sarang'],
    ['蜂の巣', 'はちのす', 'Sarang lebah'],
    ['巣作り', 'すづくり', 'Pembuatan sarang'],
  ],

  剤: [
    ['薬剤', 'やくざい', 'Bahan obat'],
    ['洗剤', 'せんざい', 'Deterjen'],
    ['消毒剤', 'しょうどくざい', 'Cairan disinfektan'],
    ['殺虫剤', 'さっちゅうざい', 'Obat pembasmi serangga'],
    ['接着剤', 'せっちゃくざい', 'Lem; perekat'],
    ['錠剤', 'じょうざい', 'Obat tablet'],
  ],

  寿: [
    ['寿司', 'すし', 'Sushi'],
    ['長寿', 'ちょうじゅ', 'Umur panjang'],
    ['寿命', 'じゅみょう', 'Rentang hidup; usia'],
    ['寿命が延びる', 'じゅみょうがのびる', 'Usia hidup bertambah'],
    ['還暦祝い', 'かんれきいわい', 'Perayaan ulang tahun ke-60'],
    ['寿', 'ことぶき', 'Kebahagiaan; umur panjang'],
  ],

  挙: [
    ['挙げる', 'あげる', 'Mengangkat; menyebutkan'],
    ['挙手', 'きょしゅ', 'Mengangkat tangan'],
    ['選挙', 'せんきょ', 'Pemilihan umum'],
    ['挙式', 'きょしき', 'Upacara pernikahan'],
    ['列挙', 'れっきょ', 'Menyebutkan satu per satu'],
    ['一挙に', 'いっきょに', 'Sekaligus; dalam satu langkah'],
  ],

  戒: [
    ['戒める', 'いましめる', 'Memperingatkan; menasihati'],
    ['警戒', 'けいかい', 'Kewaspadaan'],
    ['戒律', 'かいりつ', 'Aturan agama; sila'],
    ['戒告', 'かいこく', 'Peringatan resmi'],
    ['訓戒', 'くんかい', 'Nasihat; teguran'],
  ],

  誇: [
    ['誇る', 'ほこる', 'Bangga; membanggakan'],
    ['誇り', 'ほこり', 'Kebanggaan'],
    ['誇大', 'こだい', 'Berlebihan'],
    ['誇張', 'こちょう', 'Melebih-lebihkan'],
    ['誇示', 'こじ', 'Memamerkan'],
    ['誇らしい', 'ほこらしい', 'Membanggakan'],
  ],

  雷: [
    ['雷', 'かみなり', 'Petir; guntur'],
    ['雷雨', 'らいう', 'Hujan badai'],
    ['落雷', 'らくらい', 'Sambaran petir'],
    ['雷鳴', 'らいめい', 'Suara guntur'],
    ['雷雲', 'らいうん', 'Awan badai'],
    ['雷注意報', 'かみなりちゅういほう', 'Peringatan petir'],
  ],

  謎: [
    ['謎', 'なぞ', 'Teka-teki; misteri'],
    ['謎解き', 'なぞとき', 'Pemecahan teka-teki'],
    ['謎めく', 'なぞめく', 'Menjadi misterius'],
    ['謎の人物', 'なぞのじんぶつ', 'Sosok misterius'],
    ['謎の事件', 'なぞのじけん', 'Peristiwa misterius'],
    ['謎々', 'なぞなぞ', 'Teka-teki'],
  ],
  膝: [
    ['膝', 'ひざ', 'Lutut'],
    ['膝小僧', 'ひざこぞう', 'Tempurung lutut'],
    ['膝枕', 'ひざまくら', 'Bantal pangkuan'],
    ['膝元', 'ひざもと', 'Sekitar lutut; dekat seseorang'],
    ['膝関節', 'ひざかんせつ', 'Sendi lutut'],
  ],

  豪: [
    ['豪華', 'ごうか', 'Mewah; megah'],
    ['豪雨', 'ごうう', 'Hujan lebat'],
    ['豪雪', 'ごうせつ', 'Salju lebat'],
    ['豪快', 'ごうかい', 'Gagah; berani; mengesankan'],
    ['豪州', 'ごうしゅう', 'Australia'],
    ['豪邸', 'ごうてい', 'Rumah mewah'],
  ],

  誠: [
    ['誠', 'まこと', 'Ketulusan; kejujuran'],
    ['誠実', 'せいじつ', 'Tulus; jujur'],
    ['誠意', 'せいい', 'Niat baik; ketulusan'],
    ['誠心', 'せいしん', 'Hati yang tulus'],
    ['忠誠', 'ちゅうせい', 'Kesetiaan'],
  ],

  兼: [
    ['兼ねる', 'かねる', 'Merangkap; sekaligus'],
    ['兼用', 'けんよう', 'Penggunaan ganda'],
    ['兼業', 'けんぎょう', 'Pekerjaan sampingan'],
    ['兼任', 'けんにん', 'Merangkap jabatan'],
    ['兼ね備える', 'かねそなえる', 'Memiliki sekaligus'],
    ['兼職', 'けんしょく', 'Merangkap pekerjaan'],
  ],

  粗: [
    ['粗い', 'あらい', 'Kasar; tidak halus'],
    ['粗末', 'そまつ', 'Buruk; sederhana; tidak layak'],
    ['粗大', 'そだい', 'Besar dan kasar'],
    ['粗品', 'そしな', 'Hadiah sederhana'],
    ['粗雑', 'そざつ', 'Ceroboh; tidak teliti'],
    ['粗利益', 'あらりえき', 'Laba kotor'],
  ],

  慢: [
    ['自慢', 'じまん', 'Kebanggaan; membanggakan diri'],
    ['我慢', 'がまん', 'Kesabaran; menahan diri'],
    ['慢性', 'まんせい', 'Kronis'],
    ['慢心', 'まんしん', 'Kesombongan'],
    ['怠慢', 'たいまん', 'Kelalaian; kemalasan'],
    ['傲慢', 'ごうまん', 'Arogan; sombong'],
  ],

  絹: [
    ['絹', 'きぬ', 'Sutra'],
    ['絹糸', 'きぬいと', 'Benang sutra'],
    ['絹織物', 'きぬおりもの', 'Kain tenun sutra'],
    ['絹布', 'けんぷ', 'Kain sutra'],
    ['正絹', 'しょうけん', 'Sutra murni'],
  ],

  暇: [
    ['暇', 'ひま', 'Waktu luang'],
    ['暇な', 'ひまな', 'Senggang; tidak sibuk'],
    ['暇つぶし', 'ひまつぶし', 'Mengisi waktu luang'],
    ['休暇', 'きゅうか', 'Liburan; cuti'],
    ['有給休暇', 'ゆうきゅうきゅうか', 'Cuti berbayar'],
    ['暇を持て余す', 'ひまをもてあます', 'Bingung karena terlalu banyak waktu luang'],
  ],

  禅: [
    ['禅', 'ぜん', 'Zen'],
    ['禅宗', 'ぜんしゅう', 'Aliran Buddha Zen'],
    ['禅寺', 'ぜんでら', 'Kuil Zen'],
    ['座禅', 'ざぜん', 'Meditasi Zen dengan duduk'],
    ['禅僧', 'ぜんそう', 'Biksu Zen'],
  ],

  策: [
    ['対策', 'たいさく', 'Langkah penanggulangan'],
    ['政策', 'せいさく', 'Kebijakan'],
    ['計画', 'けいかく', 'Perencanaan'],
    ['策略', 'さくりゃく', 'Siasat; strategi'],
    ['解決策', 'かいけつさく', 'Solusi'],
    ['改善策', 'かいぜんさく', 'Langkah perbaikan'],
  ],

  雰: [
    ['雰囲気', 'ふんいき', 'Suasana; atmosfer'],
    ['雰囲気がいい', 'ふんいきがいい', 'Suasananya bagus'],
    ['雰囲気を変える', 'ふんいきをかえる', 'Mengubah suasana'],
  ],

  箇: [
    ['箇所', 'かしょ', 'Tempat; bagian; titik'],
    ['箇条書き', 'かじょうがき', 'Daftar berbentuk poin'],
    ['数箇所', 'すうかしょ', 'Beberapa tempat'],
    ['一箇所', 'いっかしょ', 'Satu tempat'],
    ['数箇月', 'すうかげつ', 'Beberapa bulan'],
  ],

  溺: [
    ['溺れる', 'おぼれる', 'Tenggelam'],
    ['溺死', 'できし', 'Mati tenggelam'],
    ['溺愛', 'できあい', 'Kasih sayang berlebihan'],
    ['溺れかける', 'おぼれかける', 'Hampir tenggelam'],
  ],

  創: [
    ['創造', 'そうぞう', 'Penciptaan'],
    ['創作', 'そうさく', 'Karya ciptaan'],
    ['創立', 'そうりつ', 'Pendirian organisasi'],
    ['創業', 'そうぎょう', 'Memulai usaha'],
    ['創傷', 'そうしょう', 'Luka'],
    ['独創的', 'どくそうてき', 'Orisinal; kreatif'],
  ],

  煩: [
    ['煩わしい', 'わずらわしい', 'Merepotkan; menjengkelkan'],
    ['煩雑', 'はんざつ', 'Rumit; berbelit-belit'],
    ['煩悩', 'ぼんのう', 'Nafsu duniawi'],
    ['煩悩を断つ', 'ぼんのうをたつ', 'Memutus nafsu duniawi'],
    ['煩い', 'わずらい', 'Penderitaan; gangguan'],
  ],

  裁: [
    ['裁判', 'さいばん', 'Pengadilan'],
    ['裁判所', 'さいばんしょ', 'Gedung pengadilan'],
    ['裁判官', 'さいばんかん', 'Hakim'],
    ['裁く', 'さばく', 'Mengadili'],
    ['裁判員', 'さいばんいん', 'Anggota juri pengadilan'],
    ['独裁', 'どくさい', 'Kediktatoran'],
    ['裁縫', 'さいほう', 'Menjahit'],
  ],

  熟: [
    ['熟れる', 'うれる', 'Matang'],
    ['熟す', 'こなす', 'Mencerna; menguasai; menyelesaikan'],
    ['熟練', 'じゅくれん', 'Kemahiran'],
    ['熟語', 'じゅくご', 'Kata majemuk'],
    ['熟睡', 'じゅくすい', 'Tidur nyenyak'],
    ['成熟', 'せいじゅく', 'Kedewasaan; kematangan'],
    ['未熟', 'みじゅく', 'Belum matang; belum berpengalaman'],
  ],

  挙: [
    ['挙げる', 'あげる', 'Mengangkat; menyebutkan'],
    ['挙手', 'きょしゅ', 'Mengangkat tangan'],
    ['選挙', 'せんきょ', 'Pemilihan umum'],
    ['挙式', 'きょしき', 'Upacara pernikahan'],
    ['列挙', 'れっきょ', 'Menyebutkan satu per satu'],
    ['一挙に', 'いっきょに', 'Sekaligus'],
  ],

  鮮: [
    ['新鮮', 'しんせん', 'Segar'],
    ['鮮やか', 'あざやか', 'Cemerlang; jelas; indah'],
    ['鮮明', 'せんめい', 'Jelas; tajam'],
    ['鮮魚', 'せんぎょ', 'Ikan segar'],
    ['鮮度', 'せんど', 'Tingkat kesegaran'],
    ['朝鮮', 'ちょうせん', 'Korea'],
  ],

  樹: [
    ['樹木', 'じゅもく', 'Pepohonan'],
    ['樹林', 'じゅりん', 'Hutan pepohonan'],
    ['樹脂', 'じゅし', 'Resin; getah pohon'],
    ['果樹', 'かじゅ', 'Pohon buah'],
    ['植樹', 'しょくじゅ', 'Penanaman pohon'],
    ['樹齢', 'じゅれい', 'Usia pohon'],
  ],

  鈴: [
    ['鈴', 'すず', 'Lonceng kecil'],
    ['鈴木', 'すずき', 'Suzuki (nama keluarga)'],
    ['風鈴', 'ふうりん', 'Lonceng angin'],
    ['鈴虫', 'すずむし', 'Jangkrik lonceng'],
    ['鈴の音', 'すずのね', 'Suara lonceng kecil'],
  ],

  濁: [
    ['濁る', 'にごる', 'Menjadi keruh'],
    ['濁す', 'にごす', 'Mengaburkan; membuat keruh'],
    ['濁音', 'だくおん', 'Bunyi bersuara (dakuon)'],
    ['濁流', 'だくりゅう', 'Arus air keruh'],
    ['汚濁', 'おだく', 'Pencemaran; kekotoran'],
    ['濁点', 'だくてん', 'Tanda dakuten (゛)'],
  ],

  典: [
    ['辞典', 'じてん', 'Kamus'],
    ['事典', 'じてん', 'Ensiklopedia'],
    ['古典', 'こてん', 'Karya klasik'],
    ['典型', 'てんけい', 'Contoh khas; tipikal'],
    ['式典', 'しきてん', 'Upacara resmi'],
    ['特典', 'とくてん', 'Keistimewaan; bonus'],
  ],

  唆: [
    ['唆す', 'そそのかす', 'Menghasut; membujuk'],
    ['示唆', 'しさ', 'Petunjuk; indikasi'],
    ['教唆', 'きょうさ', 'Penghasutan'],
    ['唆る', 'そそる', 'Membangkitkan minat atau selera'],
  ],

  弧: [
    ['弧', 'こ', 'Busur; lengkungan'],
    ['円弧', 'えんこ', 'Busur lingkaran'],
    ['弧線', 'こせん', 'Garis lengkung'],
    ['弧を描く', 'こをえがく', 'Membentuk garis melengkung'],
  ],

  飼: [
    ['飼う', 'かう', 'Memelihara hewan'],
    ['飼い主', 'かいぬし', 'Pemilik hewan peliharaan'],
    ['飼育', 'しいく', 'Pemeliharaan hewan'],
    ['飼料', 'しりょう', 'Pakan ternak'],
    ['飼い犬', 'かいいぬ', 'Anjing peliharaan'],
    ['飼い猫', 'かいねこ', 'Kucing peliharaan'],
  ],

  倹: [
    ['倹約', 'けんやく', 'Hemat; penghematan'],
    ['倹約家', 'けんやくか', 'Orang yang hemat'],
    ['勤倹', 'きんけん', 'Rajin dan hemat'],
    ['節倹', 'せっけん', 'Penghematan'],
    ['倹素', 'けんそ', 'Hidup sederhana'],
  ],

  叔: [
    ['叔父', 'おじ', 'Paman'],
    ['叔母', 'おば', 'Bibi'],
    ['叔父さん', 'おじさん', 'Paman'],
    ['叔母さん', 'おばさん', 'Bibi'],
    ['叔父叔母', 'おじおば', 'Paman dan bibi'],
  ],

  飢: [
    ['飢える', 'うえる', 'Kelaparan'],
    ['飢え', 'うえ', 'Kelaparan'],
    ['飢餓', 'きが', 'Kelaparan; kelaparan parah'],
    ['飢饉', 'ききん', 'Bencana kelaparan'],
    ['飢餓状態', 'きがじょうたい', 'Kondisi kelaparan'],
  ],

  葬: [
    ['葬る', 'ほうむる', 'Menguburkan'],
    ['葬式', 'そうしき', 'Upacara pemakaman'],
    ['葬儀', 'そうぎ', 'Pemakaman'],
    ['火葬', 'かそう', 'Kremasi'],
    ['埋葬', 'まいそう', 'Penguburan jenazah'],
    ['葬祭', 'そうさい', 'Upacara pemakaman dan ritual terkait'],
  ],

  疎: [
    ['疎い', 'うとい', 'Tidak akrab; kurang memahami'],
    ['疎遠', 'そえん', 'Hubungan yang renggang'],
    ['疎外', 'そがい', 'Pengasingan; keterasingan'],
    ['疎通', 'そつう', 'Komunikasi; saling memahami'],
    ['過疎', 'かそ', 'Penurunan kepadatan penduduk'],
    ['疎か', 'おろそか', 'Mengabaikan; lalai'],
  ],

  陥: [
    ['陥る', 'おちいる', 'Terjerumus; jatuh ke dalam'],
    ['陥れる', 'おとしいれる', 'Menjebak; menjerumuskan'],
    ['欠陥', 'けっかん', 'Cacat; kekurangan'],
    ['陥没', 'かんぼつ', 'Amblas; ambles'],
    ['陥落', 'かんらく', 'Jatuh; takluk'],
    ['窮地に陥る', 'きゅうちにおちいる', 'Terjebak dalam situasi sulit'],
  ],

  傷: [
    ['傷', 'きず', 'Luka; goresan'],
    ['傷つく', 'きずつく', 'Terluka'],
    ['傷つける', 'きずつける', 'Melukai'],
    ['傷害', 'しょうがい', 'Penganiayaan; cedera'],
    ['負傷', 'ふしょう', 'Luka akibat kecelakaan atau pertempuran'],
    ['傷口', 'きずぐち', 'Luka terbuka'],
    ['重傷', 'じゅうしょう', 'Luka berat'],
  ],

  祥: [
    ['吉祥', 'きっしょう', 'Pertanda baik; keberuntungan'],
    ['発祥', 'はっしょう', 'Asal mula; tempat lahirnya'],
    ['祥月', 'しょうつき', 'Bulan peringatan kematian'],
    ['不祥事', 'ふしょうじ', 'Skandal; peristiwa memalukan'],
    ['祥瑞', 'しょうずい', 'Pertanda baik'],
  ],

  索: [
    ['検索', 'けんさく', 'Pencarian'],
    ['索引', 'さくいん', 'Indeks'],
    ['捜索', 'そうさく', 'Pencarian; penyelidikan'],
    ['探索', 'たんさく', 'Penjelajahan; pencarian'],
    ['模索', 'もさく', 'Mencari cara; meraba-raba solusi'],
    ['索道', 'さくどう', 'Kereta gantung'],
  ],

  甚: [
    ['甚だしい', 'はなはだしい', 'Sangat; luar biasa'],
    ['甚だ', 'はなはだ', 'Sangat; amat'],
    ['甚大', 'じんだい', 'Sangat besar; dahsyat'],
    ['激甚', 'げきじん', 'Sangat parah'],
    ['甚句', 'じんく', 'Lagu rakyat Jepang'],
  ],

  循: [
    ['循環', 'じゅんかん', 'Sirkulasi; perputaran'],
    ['循環器', 'じゅんかんき', 'Organ peredaran darah'],
    ['循環型', 'じゅんかんがた', 'Bersifat siklus'],
    ['循環バス', 'じゅんかんバス', 'Bus yang berputar dalam rute melingkar'],
    ['悪循環', 'あくじゅんかん', 'Lingkaran setan'],
  ],

  阻: [
    ['阻む', 'はばむ', 'Menghalangi'],
    ['阻止', 'そし', 'Pencegahan; penghalangan'],
    ['阻害', 'そがい', 'Hambatan; gangguan'],
    ['妨害', 'ぼうがい', 'Gangguan; sabotase'],
    ['阻止する', 'そしする', 'Menghalangi; mencegah'],
  ],

  跳: [
    ['跳ぶ', 'とぶ', 'Melompat'],
    ['跳ねる', 'はねる', 'Melompat; memantul'],
    ['跳躍', 'ちょうやく', 'Lompatan'],
    ['縄跳び', 'なわとび', 'Lompat tali'],
    ['跳ね返る', 'はねかえる', 'Memantul kembali'],
    ['跳び箱', 'とびばこ', 'Peti lompat'],
  ],

  眼: [
    ['眼', 'め', 'Mata'],
    ['眼鏡', 'めがね', 'Kacamata'],
    ['眼科', 'がんか', 'Dokter mata; bagian oftalmologi'],
    ['眼球', 'がんきゅう', 'Bola mata'],
    ['眼力', 'がんりき', 'Daya pengamatan; ketajaman mata'],
    ['近眼', 'きんがん', 'Rabun jauh'],
  ],

  諾: [
    ['承諾', 'しょうだく', 'Persetujuan'],
    ['許諾', 'きょだく', 'Izin; persetujuan resmi'],
    ['快諾', 'かいだく', 'Persetujuan dengan senang hati'],
    ['受諾', 'じゅだく', 'Penerimaan; persetujuan'],
    ['諾否', 'だくひ', 'Persetujuan atau penolakan'],
  ],

  棚: [
    ['棚', 'たな', 'Rak'],
    ['本棚', 'ほんだな', 'Rak buku'],
    ['食器棚', 'しょっきだな', 'Lemari peralatan makan'],
    ['棚卸し', 'たなおろし', 'Inventarisasi stok barang'],
    ['棚上げ', 'たなあげ', 'Menunda; mengesampingkan'],
    ['棚ぼた', 'たなぼた', 'Keberuntungan yang datang tiba-tiba'],
  ],

  麺: [
    ['麺', 'めん', 'Mi'],
    ['麺類', 'めんるい', 'Berbagai jenis mi'],
    ['ラーメン', 'ラーメン', 'Ramen'],
    ['麺料理', 'めんりょうり', 'Masakan mi'],
    ['生麺', 'なまめん', 'Mi segar'],
    ['乾麺', 'かんめん', 'Mi kering'],
  ],

  粧: [
    ['化粧', 'けしょう', 'Riasan; berdandan'],
    ['化粧品', 'けしょうひん', 'Kosmetik'],
    ['化粧水', 'けしょうすい', 'Toner wajah'],
    ['厚化粧', 'あつげしょう', 'Riasan tebal'],
    ['薄化粧', 'うすげしょう', 'Riasan tipis'],
  ],

  裂: [
    ['裂く', 'さく', 'Merobek; membelah'],
    ['裂ける', 'さける', 'Robek; terbelah'],
    ['分裂', 'ぶんれつ', 'Perpecahan; pembelahan'],
    ['破裂', 'はれつ', 'Meledak; pecah'],
    ['決裂', 'けつれつ', 'Putusnya hubungan atau negosiasi'],
    ['亀裂', 'きれつ', 'Retakan'],
  ],

  逝: [
    ['逝く', 'ゆく', 'Meninggal dunia (ungkapan halus)'],
    ['逝去', 'せいきょ', 'Wafat; meninggal dunia'],
    ['急逝', 'きゅうせい', 'Meninggal secara mendadak'],
    ['長逝', 'ちょうせい', 'Meninggal dunia'],
  ],

  赴: [
    ['赴く', 'おもむく', 'Pergi menuju; bertugas ke'],
    ['赴任', 'ふにん', 'Penempatan kerja'],
    ['赴任先', 'ふにんさき', 'Tempat penempatan kerja'],
    ['赴任地', 'ふにんち', 'Daerah penugasan'],
    ['赴任する', 'ふにんする', 'Mulai bertugas di tempat baru'],
  ],

  虚: [
    ['虚しい', 'むなしい', 'Hampa; sia-sia'],
    ['虚偽', 'きょぎ', 'Kepalsuan; kebohongan'],
    ['虚構', 'きょこう', 'Fiksi; rekaan'],
    ['虚弱', 'きょじゃく', 'Lemah; rapuh'],
    ['謙虚', 'けんきょ', 'Rendah hati'],
    ['空虚', 'くうきょ', 'Kekosongan; kehampaan'],
  ],

  隣: [
    ['隣', 'となり', 'Sebelah; tetangga'],
    ['隣人', 'りんじん', 'Tetangga'],
    ['隣国', 'りんごく', 'Negara tetangga'],
    ['隣接', 'りんせつ', 'Berbatasan langsung'],
    ['隣町', 'となりまち', 'Kota sebelah'],
    ['隣同士', 'となりどうし', 'Berdampingan'],
  ],

  酢: [
    ['酢', 'す', 'Cuka'],
    ['酢飯', 'すめし', 'Nasi sushi berbumbu cuka'],
    ['酢豚', 'すぶた', 'Babi asam manis'],
    ['米酢', 'こめず', 'Cuka beras'],
    ['酢の物', 'すのもの', 'Hidangan berbumbu cuka'],
    ['黒酢', 'くろず', 'Cuka hitam'],
  ],

  欺: [
    ['欺く', 'あざむく', 'Menipu; memperdaya'],
    ['欺瞞', 'ぎまん', 'Penipuan; penyamaran kebenaran'],
    ['詐欺', 'さぎ', 'Penipuan'],
    ['欺罔', 'ぎもう', 'Penipuan; tipu muslihat'],
    ['自己欺瞞', 'じこぎまん', 'Penipuan terhadap diri sendiri'],
  ],

  憧: [
    ['憧れる', 'あこがれる', 'Mengagumi; mendambakan'],
    ['憧れ', 'あこがれ', 'Kekaguman; dambaan'],
    ['憧憬', 'しょうけい', 'Kerinduan; kekaguman'],
    ['憧れの人', 'あこがれのひと', 'Orang yang dikagumi'],
  ],

  娠: [
    ['妊娠', 'にんしん', 'Kehamilan'],
    ['妊娠中', 'にんしんちゅう', 'Sedang hamil'],
    ['妊娠検査', 'にんしんけんさ', 'Tes kehamilan'],
    ['妊娠期間', 'にんしんきかん', 'Masa kehamilan'],
  ],

  蜜: [
    ['蜜', 'みつ', 'Madu; nektar'],
    ['蜂蜜', 'はちみつ', 'Madu lebah'],
    ['蜜蜂', 'みつばち', 'Lebah madu'],
    ['蜜月', 'みつげつ', 'Bulan madu; hubungan yang sangat akrab'],
    ['蜜柑', 'みかん', 'Jeruk mandarin'],
  ],

  腐: [
    ['腐る', 'くさる', 'Membusuk'],
    ['腐らせる', 'くさらせる', 'Membuat busuk'],
    ['腐敗', 'ふはい', 'Pembusukan'],
    ['豆腐', 'とうふ', 'Tahu'],
    ['腐食', 'ふしょく', 'Korosi'],
    ['腐女子', 'ふじょし', 'Penggemar karya fiksi BL (istilah budaya populer)'],
    ['陳腐', 'ちんぷ', 'Usang; klise'],
  ],

  践: [
    ['実践', 'じっせん', 'Praktik; penerapan'],
    ['実践的', 'じっせんてき', 'Bersifat praktis'],
    ['践行', 'せんこう', 'Pelaksanaan; penerapan'],
    ['実践する', 'じっせんする', 'Mempraktikkan'],
  ],

  潰: [
    ['潰す', 'つぶす', 'Menghancurkan; meremukkan'],
    ['潰れる', 'つぶれる', 'Hancur; bangkrut'],
    ['潰れた', 'つぶれた', 'Penyok; hancur'],
    ['暇を潰す', 'ひまをつぶす', 'Menghabiskan waktu'],
    ['食い潰す', 'くいつぶす', 'Menghabiskan harta'],
    ['押し潰す', 'おしつぶす', 'Meremukkan dengan tekanan'],
  ],

  敵: [
    ['敵', 'てき', 'Musuh'],
    ['敵対', 'てきたい', 'Bermusuhan'],
    ['敵意', 'てきい', 'Permusuhan'],
    ['敵国', 'てきこく', 'Negara musuh'],
    ['無敵', 'むてき', 'Tak terkalahkan'],
    ['宿敵', 'しゅくてき', 'Musuh bebuyutan'],
    ['敵わない', 'かなわない', 'Tidak mampu menandingi'],
  ],

  鍋: [
    ['鍋', 'なべ', 'Panci; hidangan hot pot'],
    ['鍋料理', 'なべりょうり', 'Masakan hot pot'],
    ['土鍋', 'どなべ', 'Panci tanah liat'],
    ['鍋物', 'なべもの', 'Hidangan hot pot'],
    ['一人鍋', 'ひとりなべ', 'Hot pot untuk satu orang'],
  ],

  鉢: [
    ['鉢', 'はち', 'Pot; mangkuk'],
    ['植木鉢', 'うえきばち', 'Pot tanaman'],
    ['鉢植え', 'はちうえ', 'Tanaman dalam pot'],
    ['火鉢', 'ひばち', 'Anglo; pemanas arang'],
    ['鉢巻き', 'はちまき', 'Ikat kepala'],
    ['洗面鉢', 'せんめんばち', 'Baskom cuci muka'],
  ],

  婿: [
    ['婿', 'むこ', 'Menantu laki-laki'],
    ['花婿', 'はなむこ', 'Pengantin pria'],
    ['婿入り', 'むこいり', 'Menjadi menantu laki-laki'],
    ['婿養子', 'むこようし', 'Menantu laki-laki yang diangkat menjadi anak'],
    ['婿殿', 'むこどの', 'Menantu laki-laki (sebutan hormat)'],
  ],

  睡: [
    ['睡眠', 'すいみん', 'Tidur'],
    ['睡眠時間', 'すいみんじかん', 'Waktu tidur'],
    ['睡眠不足', 'すいみんぶそく', 'Kurang tidur'],
    ['睡眠薬', 'すいみんやく', 'Obat tidur'],
    ['熟睡', 'じゅくすい', 'Tidur nyenyak'],
    ['睡魔', 'すいま', 'Rasa kantuk'],
  ],

  雅: [
    ['優雅', 'ゆうが', 'Anggun; elegan'],
    ['雅', 'みやび', 'Keanggunan tradisional Jepang'],
    ['雅楽', 'ががく', 'Musik istana Jepang'],
    ['雅語', 'がご', 'Bahasa yang elegan atau klasik'],
    ['風雅', 'ふうが', 'Keindahan artistik; keanggunan'],
    ['雅号', 'がごう', 'Nama pena artistik'],
  ],

  掲: [
    ['掲げる', 'かかげる', 'Mengangkat; memasang; mengusung'],
    ['掲載', 'けいさい', 'Pemuatan; publikasi'],
    ['掲示', 'けいじ', 'Pengumuman; pemberitahuan'],
    ['掲示板', 'けいじばん', 'Papan pengumuman'],
    ['掲揚', 'けいよう', 'Pengibaran bendera'],
    ['目標を掲げる', 'もくひょうをかかげる', 'Menetapkan atau mengusung tujuan'],
  ],

  請: [
    ['請求', 'せいきゅう', 'Tagihan; tuntutan'],
    ['請求書', 'せいきゅうしょ', 'Faktur; surat tagihan'],
    ['申請', 'しんせい', 'Permohonan resmi'],
    ['依頼', 'いらい', 'Permintaan; permohonan'],
    ['請負', 'うけおい', 'Kontrak kerja; pekerjaan borongan'],
    ['請け負う', 'うけおう', 'Menerima pekerjaan kontrak'],
    ['招請', 'しょうせい', 'Undangan resmi'],
  ],

  偽: [
    ['偽', 'にせ', 'Palsu'],
    ['偽物', 'にせもの', 'Barang palsu'],
    ['偽る', 'いつわる', 'Memalsukan; berpura-pura'],
    ['偽造', 'ぎぞう', 'Pemalsuan'],
    ['偽名', 'ぎめい', 'Nama samaran'],
    ['偽善', 'ぎぜん', 'Kemunafikan'],
    ['真偽', 'しんぎ', 'Kebenaran atau kepalsuan'],
  ],

  嫉: [
    ['嫉妬', 'しっと', 'Iri hati; cemburu'],
    ['嫉妬心', 'しっとしん', 'Perasaan iri atau cemburu'],
    ['嫉妬深い', 'しっとぶかい', 'Mudah cemburu'],
  ],

  磁: [
    ['磁石', 'じしゃく', 'Magnet'],
    ['磁気', 'じき', 'Kemagnetan'],
    ['磁力', 'じりょく', 'Gaya magnet'],
    ['磁場', 'じば', 'Medan magnet'],
    ['磁器', 'じき', 'Porselen'],
    ['磁性', 'じせい', 'Sifat magnetik'],
  ],

  範: [
    ['範囲', 'はんい', 'Jangkauan; cakupan'],
    ['模範', 'もはん', 'Teladan'],
    ['範例', 'はんれい', 'Contoh; model'],
    ['規範', 'きはん', 'Norma; standar'],
    ['範囲内', 'はんいない', 'Dalam batas cakupan'],
    ['模範的', 'もはんてき', 'Patut dicontoh'],
  ],

  嘆: [
    ['嘆く', 'なげく', 'Meratapi; mengeluhkan'],
    ['嘆き', 'なげき', 'Ratapan; kesedihan'],
    ['嘆息', 'たんそく', 'Keluhan; desahan'],
    ['感嘆', 'かんたん', 'Kekaguman'],
    ['嘆願', 'たんがん', 'Permohonan yang sungguh-sungguh'],
    ['悲嘆', 'ひたん', 'Kesedihan mendalam'],
  ],

  懐: [
    ['懐かしい', 'なつかしい', 'Membuat rindu; nostalgik'],
    ['懐かしむ', 'なつかしむ', 'Mengenang dengan rindu'],
    ['懐', 'ふところ', 'Saku bagian dalam; dada'],
    ['懐中', 'かいちゅう', 'Di dalam saku'],
    ['懐疑', 'かいぎ', 'Keraguan; skeptisisme'],
    ['懐妊', 'かいにん', 'Kehamilan'],
    ['懐柔', 'かいじゅう', 'Membujuk agar berpihak'],
  ],

  釜: [
    ['釜', 'かま', 'Panci besar; periuk'],
    ['釜飯', 'かまめし', 'Nasi yang dimasak dalam periuk'],
    ['釜戸', 'かまど', 'Tungku masak'],
    ['茶釜', 'ちゃがま', 'Ketel untuk upacara minum teh'],
    ['釜揚げ', 'かまあげ', 'Direbus dan diangkat langsung dari air'],
  ],

  濫: [
    ['濫用', 'らんよう', 'Penyalahgunaan'],
    ['乱用', 'らんよう', 'Penyalahgunaan'],
    ['氾濫', 'はんらん', 'Luapan; banjir'],
    ['濫発', 'らんぱつ', 'Penerbitan atau pengeluaran secara berlebihan'],
    ['濫造', 'らんぞう', 'Produksi berlebihan tanpa memperhatikan kualitas'],
    ['濫立', 'らんりつ', 'Berdirinya terlalu banyak organisasi atau lembaga'],
  ],

  揚: [
    ['揚げる', 'あげる', 'Menggoreng; mengangkat'],
    ['揚がる', 'あがる', 'Terangkat; terbang; terangkat ke atas'],
    ['唐揚げ', 'からあげ', 'Ayam goreng Jepang'],
    ['揚げ物', 'あげもの', 'Makanan yang digoreng'],
    ['掲揚', 'けいよう', 'Pengibaran bendera'],
    ['水揚げ', 'みずあげ', 'Hasil tangkapan ikan; bongkar muat'],
  ],

  飽: [
    ['飽きる', 'あきる', 'Bosan; jenuh'],
    ['飽きっぽい', 'あきっぽい', 'Mudah bosan'],
    ['飽き飽き', 'あきあき', 'Sangat bosan'],
    ['飽食', 'ほうしょく', 'Makan berlebihan'],
    ['飽和', 'ほうわ', 'Kejenuhan; saturasi'],
    ['飽き足りない', 'あきたりない', 'Belum merasa puas'],
  ],

  裸: [
    ['裸', 'はだか', 'Telanjang'],
    ['裸足', 'はだし', 'Bertelanjang kaki'],
    ['裸眼', 'らがん', 'Mata tanpa kacamata'],
    ['裸電球', 'はだかでんきゅう', 'Bola lampu tanpa penutup'],
    ['全裸', 'ぜんら', 'Telanjang bulat'],
    ['裸一貫', 'はだかいっかん', 'Memulai hidup tanpa modal atau harta'],
  ],

  唐: [
    ['唐揚げ', 'からあげ', 'Ayam goreng Jepang'],
    ['唐辛子', 'とうがらし', 'Cabai'],
    ['唐突', 'とうとつ', 'Mendadak; tiba-tiba'],
    ['唐草模様', 'からくさもよう', 'Motif tanaman merambat'],
    ['唐物', 'からもの', 'Barang dari Tiongkok'],
    ['唐風', 'とうふう', 'Gaya Tiongkok'],
  ],

  壊: [
    ['壊す', 'こわす', 'Merusak'],
    ['壊れる', 'こわれる', 'Rusak'],
    ['破壊', 'はかい', 'Penghancuran'],
    ['崩壊', 'ほうかい', 'Keruntuhan'],
    ['壊滅', 'かいめつ', 'Kehancuran total'],
    ['壊れ物', 'こわれもの', 'Barang pecah belah'],
  ],

  堅: [
    ['堅い', 'かたい', 'Keras; teguh'],
    ['堅実', 'けんじつ', 'Mantap; dapat diandalkan'],
    ['堅固', 'けんご', 'Kokoh; kuat'],
    ['堅苦しい', 'かたくるしい', 'Kaku; terlalu formal'],
    ['堅持', 'けんじ', 'Mempertahankan dengan teguh'],
    ['中堅', 'ちゅうけん', 'Lapisan menengah; inti'],
  ],

  壇: [
    ['壇', 'だん', 'Panggung; altar'],
    ['演壇', 'えんだん', 'Podium'],
    ['祭壇', 'さいだん', 'Altar'],
    ['仏壇', 'ぶつだん', 'Altar Buddha di rumah'],
    ['花壇', 'かだん', 'Petak bunga'],
    ['論壇', 'ろんだん', 'Dunia diskusi; forum intelektual'],
  ],

  握: [
    ['握る', 'にぎる', 'Menggenggam'],
    ['握手', 'あくしゅ', 'Berjabat tangan'],
    ['握り寿司', 'にぎりずし', 'Sushi nigiri'],
    ['握力', 'あくりょく', 'Kekuatan genggaman'],
    ['把握', 'はあく', 'Memahami; menguasai'],
    ['握りしめる', 'にぎりしめる', 'Menggenggam erat'],
  ],

  圏: [
    ['圏', 'けん', 'Lingkup; wilayah'],
    ['首都圏', 'しゅとけん', 'Wilayah metropolitan ibu kota'],
    ['大気圏', 'たいきけん', 'Atmosfer'],
    ['圏内', 'けんない', 'Dalam wilayah atau jangkauan'],
    ['圏外', 'けんがい', 'Di luar jangkauan'],
    ['経済圏', 'けいざいけん', 'Wilayah ekonomi'],
    ['生活圏', 'せいかつけん', 'Wilayah aktivitas sehari-hari'],
  ],

  腫: [
    ['腫れる', 'はれる', 'Membengkak'],
    ['腫れ', 'はれ', 'Pembengkakan'],
    ['腫瘍', 'しゅよう', 'Tumor'],
    ['腫れ物', 'はれもの', 'Bagian tubuh yang membengkak'],
    ['炎症性腫脹', 'えんしょうせいしゅちょう', 'Pembengkakan akibat peradangan'],
  ],

  襟: [
    ['襟', 'えり', 'Kerah baju'],
    ['襟元', 'えりもと', 'Bagian sekitar kerah'],
    ['襟首', 'えりくび', 'Tengkuk; bagian belakang leher'],
    ['開襟', 'かいきん', 'Kerah terbuka'],
    ['襟を正す', 'えりをただす', 'Memperbaiki sikap; bersikap serius'],
  ],

  遇: [
    ['待遇', 'たいぐう', 'Perlakuan; kondisi kerja'],
    ['遇う', 'あう', 'Bertemu (pemakaian jarang)'],
    ['遇する', 'ぐうする', 'Memperlakukan'],
    ['優遇', 'ゆうぐう', 'Perlakuan istimewa'],
    ['冷遇', 'れいぐう', 'Perlakuan dingin; tidak ramah'],
    ['厚遇', 'こうぐう', 'Perlakuan baik'],
  ],

  飾: [
    ['飾る', 'かざる', 'Menghias'],
    ['飾り', 'かざり', 'Hiasan'],
    ['装飾', 'そうしょく', 'Dekorasi'],
    ['飾り物', 'かざりもの', 'Barang hiasan'],
    ['着飾る', 'きかざる', 'Berdandan; mengenakan pakaian indah'],
    ['飾り付け', 'かざりつけ', 'Dekorasi; penghiasan'],
  ],

  憤: [
    ['憤る', 'いきどおる', 'Marah; geram'],
    ['憤り', 'いきどおり', 'Kemarahan; kejengkelan'],
    ['憤慨', 'ふんがい', 'Kemarahan besar'],
    ['憤怒', 'ふんぬ', 'Amarah yang hebat'],
    ['義憤', 'ぎふん', 'Kemarahan karena ketidakadilan'],
  ],

  勧: [
    ['勧める', 'すすめる', 'Menganjurkan; menyarankan'],
    ['勧誘', 'かんゆう', 'Ajakan; perekrutan'],
    ['勧告', 'かんこく', 'Rekomendasi; anjuran resmi'],
    ['勧進', 'かんじん', 'Penggalangan dana untuk kuil'],
    ['勧善懲悪', 'かんぜんちょうあく', 'Mendorong kebaikan dan menghukum kejahatan'],
    ['推奨', 'すいしょう', 'Rekomendasi'],
  ],

  倣: [
    ['倣う', 'ならう', 'Meniru; mengikuti contoh'],
    ['模倣', 'もほう', 'Peniruan'],
    ['模倣品', 'もほうひん', 'Barang tiruan'],
    ['先例に倣う', 'せんれいにならう', 'Mengikuti preseden'],
    ['右へ倣え', 'みぎへならえ', 'Mengikuti orang lain tanpa berpikir'],
  ],

  督: [
    ['監督', 'かんとく', 'Sutradara; pelatih; pengawas'],
    ['督促', 'とくそく', 'Desakan; penagihan'],
    ['督促状', 'とくそくじょう', 'Surat penagihan'],
    ['監督者', 'かんとくしゃ', 'Pengawas'],
    ['総監督', 'そうかんとく', 'Kepala pengawas; sutradara utama'],
  ],

  糖: [
    ['砂糖', 'さとう', 'Gula'],
    ['糖分', 'とうぶん', 'Kandungan gula'],
    ['糖尿病', 'とうにょうびょう', 'Diabetes'],
    ['糖質', 'とうしつ', 'Karbohidrat; zat gula'],
    ['血糖値', 'けっとうち', 'Kadar gula darah'],
    ['糖類', 'とうるい', 'Jenis-jenis gula'],
    ['低糖', 'ていとう', 'Rendah gula'],
  ],

  銭: [
    ['お金', 'おかね', 'Uang'],
    ['小銭', 'こぜに', 'Uang receh'],
    ['金銭', 'きんせん', 'Uang; keuangan'],
    ['銭湯', 'せんとう', 'Pemandian umum'],
    ['銭形', 'ぜにがた', 'Bentuk uang logam'],
    ['一銭', 'いっせん', 'Satu sen (satuan uang lama)'],
  ],

  票: [
    ['投票', 'とうひょう', 'Pemungutan suara'],
    ['投票所', 'とうひょうじょ', 'Tempat pemungutan suara'],
    ['票', 'ひょう', 'Suara; kertas suara'],
    ['得票', 'とくひょう', 'Jumlah suara yang diperoleh'],
    ['開票', 'かいひょう', 'Penghitungan suara'],
    ['伝票', 'でんぴょう', 'Slip transaksi; nota'],
  ],

  撮: [
    ['撮る', 'とる', 'Memotret; mengambil gambar'],
    ['撮影', 'さつえい', 'Pemotretan; pengambilan gambar'],
    ['撮影会', 'さつえいかい', 'Sesi pemotretan'],
    ['写真撮影', 'しゃしんさつえい', 'Fotografi'],
    ['盗撮', 'とうさつ', 'Memotret secara diam-diam'],
    ['撮り直す', 'とりなおす', 'Mengambil gambar ulang'],
  ],

  輩: [
    ['先輩', 'せんぱい', 'Senior'],
    ['後輩', 'こうはい', 'Junior'],
    ['同輩', 'どうはい', 'Rekan sejawat'],
    ['先輩後輩', 'せんぱいこうはい', 'Hubungan senior dan junior'],
    ['若輩', 'じゃくはい', 'Orang yang masih muda dan kurang berpengalaman'],
  ],

  閣: [
    ['内閣', 'ないかく', 'Kabinet'],
    ['閣僚', 'かくりょう', 'Menteri kabinet'],
    ['閣議', 'かくぎ', 'Rapat kabinet'],
    ['閣下', 'かっか', 'Yang Mulia'],
    ['天守閣', 'てんしゅかく', 'Menara utama kastil Jepang'],
    ['組閣', 'そかく', 'Pembentukan kabinet'],
  ],

  拠: [
    ['根拠', 'こんきょ', 'Dasar; landasan'],
    ['証拠', 'しょうこ', 'Bukti'],
    ['拠点', 'きょてん', 'Basis; pusat kegiatan'],
    ['本拠地', 'ほんきょち', 'Markas utama'],
    ['依拠', 'いきょ', 'Bersandar pada; berdasarkan'],
    ['占拠', 'せんきょ', 'Pendudukan; penguasaan'],
  ],

  喪: [
    ['喪', 'も', 'Masa berkabung'],
    ['喪失', 'そうしつ', 'Kehilangan'],
    ['喪服', 'もふく', 'Pakaian berkabung'],
    ['喪中', 'もちゅう', 'Dalam masa berkabung'],
    ['喪主', 'もしゅ', 'Kepala keluarga yang mewakili pemakaman'],
    ['喪に服する', 'もにふくする', 'Berada dalam masa berkabung'],
  ],

  稿: [
    ['原稿', 'げんこう', 'Naskah'],
    ['原稿用紙', 'げんこうようし', 'Kertas manuskrip'],
    ['投稿', 'とうこう', 'Mengirim tulisan; mengunggah'],
    ['草稿', 'そうこう', 'Draf tulisan'],
    ['寄稿', 'きこう', 'Kontribusi tulisan'],
    ['稿料', 'こうりょう', 'Honorarium penulisan'],
  ],

  隔: [
    ['隔てる', 'へだてる', 'Memisahkan; memberi jarak'],
    ['隔たる', 'へだたる', 'Terpisah; berjauhan'],
    ['間隔', 'かんかく', 'Jarak; interval'],
    ['隔週', 'かくしゅう', 'Setiap dua minggu sekali'],
    ['隔日', 'かくじつ', 'Selang sehari'],
    ['隔離', 'かくり', 'Isolasi'],
    ['隔たり', 'へだたり', 'Jarak; kesenjangan'],
  ],
  箋: [
    ['便箋', 'びんせん', 'Kertas surat'],
    ['処方箋', 'しょほうせん', 'Resep dokter'],
    ['付箋', 'ふせん', 'Catatan tempel'],
    ['箋紙', 'せんし', 'Kertas untuk menulis'],
  ],

  唱: [
    ['歌う', 'うたう', 'Bernyanyi'],
    ['合唱', 'がっしょう', 'Paduan suara'],
    ['唱える', 'となえる', 'Mengucapkan; melafalkan'],
    ['唱歌', 'しょうか', 'Lagu; nyanyian'],
    ['提唱', 'ていしょう', 'Mengusulkan; mencetuskan gagasan'],
    ['暗唱', 'あんしょう', 'Menghafal dan melafalkan'],
  ],

  寮: [
    ['寮', 'りょう', 'Asrama'],
    ['学生寮', 'がくせいりょう', 'Asrama mahasiswa'],
    ['社員寮', 'しゃいんりょう', 'Asrama karyawan'],
    ['寮生活', 'りょうせいかつ', 'Kehidupan asrama'],
    ['寮生', 'りょうせい', 'Penghuni asrama'],
    ['独身寮', 'どくしんりょう', 'Asrama untuk orang lajang'],
  ],

  縫: [
    ['縫う', 'ぬう', 'Menjahit'],
    ['縫い物', 'ぬいもの', 'Pekerjaan menjahit'],
    ['縫い目', 'ぬいめ', 'Jahitan'],
    ['縫製', 'ほうせい', 'Penjahitan; pembuatan pakaian'],
    ['縫合', 'ほうごう', 'Penjahitan luka'],
    ['縫い合わせる', 'ぬいあわせる', 'Menjahit menjadi satu'],
  ],

  端: [
    ['端', 'はし', 'Ujung; tepi'],
    ['端末', 'たんまつ', 'Terminal; perangkat'],
    ['端的', 'たんてき', 'Singkat dan jelas'],
    ['先端', 'せんたん', 'Ujung; terdepan'],
    ['極端', 'きょくたん', 'Ekstrem'],
    ['端子', 'たんし', 'Terminal listrik'],
    ['端から', 'はなから', 'Sejak awal'],
  ],

  噴: [
    ['噴く', 'ふく', 'Menyembur'],
    ['噴火', 'ふんか', 'Letusan gunung berapi'],
    ['噴水', 'ふんすい', 'Air mancur'],
    ['噴出', 'ふんしゅつ', 'Semburan; pancaran'],
    ['噴射', 'ふんしゃ', 'Penyemprotan; pancaran'],
    ['噴火口', 'ふんかこう', 'Kawah gunung berapi'],
  ],

  遭: [
    ['遭う', 'あう', 'Mengalami; tertimpa'],
    ['遭遇', 'そうぐう', 'Pertemuan; berpapasan'],
    ['遭難', 'そうなん', 'Kecelakaan; musibah'],
    ['災難に遭う', 'さいなんにあう', 'Mengalami musibah'],
    ['事故に遭う', 'じこにあう', 'Mengalami kecelakaan'],
    ['遭難者', 'そうなんしゃ', 'Korban musibah'],
  ],

  憶: [
    ['記憶', 'きおく', 'Ingatan; memori'],
    ['記憶力', 'きおくりょく', 'Daya ingat'],
    ['憶測', 'おくそく', 'Dugaan; spekulasi'],
    ['追憶', 'ついおく', 'Kenangan masa lalu'],
    ['記憶喪失', 'きおくそうしつ', 'Kehilangan ingatan'],
    ['記憶に残る', 'きおくにのこる', 'Membekas dalam ingatan'],
  ],

  継: [
    ['継ぐ', 'つぐ', 'Mewarisi; meneruskan'],
    ['継続', 'けいぞく', 'Kelanjutan'],
    ['継承', 'けいしょう', 'Pewarisan; penerusan'],
    ['引き継ぐ', 'ひきつぐ', 'Mengambil alih; meneruskan'],
    ['継母', 'ままはは', 'Ibu tiri'],
    ['継父', 'ままちち', 'Ayah tiri'],
    ['中継', 'ちゅうけい', 'Siaran langsung; relay'],
  ],

  慎: [
    ['慎む', 'つつしむ', 'Menahan diri; berhati-hati'],
    ['慎重', 'しんちょう', 'Hati-hati; cermat'],
    ['慎重に', 'しんちょうに', 'Dengan hati-hati'],
    ['謹慎', 'きんしん', 'Penahanan diri; skorsing'],
    ['不謹慎', 'ふきんしん', 'Tidak sopan; tidak pantas'],
    ['慎み深い', 'つつしみぶかい', 'Rendah hati; penuh kesopanan'],
  ],

  僚: [
    ['同僚', 'どうりょう', 'Rekan kerja'],
    ['僚友', 'りょうゆう', 'Teman sejawat'],
    ['官僚', 'かんりょう', 'Birokrat'],
    ['官僚制度', 'かんりょうせいど', 'Sistem birokrasi'],
    ['閣僚', 'かくりょう', 'Menteri kabinet'],
    ['僚機', 'りょうき', 'Pesawat pendamping'],
  ],

  遣: [
    ['遣う', 'つかう', 'Menggunakan; memakai'],
    ['遣い', 'つかい', 'Pesuruh; utusan'],
    ['派遣', 'はけん', 'Pengiriman; penugasan'],
    ['遣唐使', 'けんとうし', 'Utusan Jepang ke Dinasti Tang'],
    ['遣り方', 'やりかた', 'Cara melakukan'],
    ['遣り取り', 'やりとり', 'Pertukaran; komunikasi'],
    ['気遣い', 'きづかい', 'Perhatian; kepedulian'],
  ],

  婆: [
    ['老婆', 'ろうば', 'Wanita tua'],
    ['婆さん', 'ばあさん', 'Nenek; wanita tua'],
    ['お婆ちゃん', 'おばあちゃん', 'Nenek'],
    ['婆や', 'ばあや', 'Pengasuh perempuan tua'],
    ['婆臭い', 'ばばくさい', 'Berkesan seperti wanita tua'],
  ],

  貴: [
    ['貴重', 'きちょう', 'Berharga'],
    ['貴重品', 'きちょうひん', 'Barang berharga'],
    ['貴族', 'きぞく', 'Bangsawan'],
    ['貴重な経験', 'きちょうなけいけん', 'Pengalaman berharga'],
    ['貴社', 'きしゃ', 'Perusahaan Anda (bahasa hormat)'],
    ['貴方', 'あなた', 'Anda'],
    ['高貴', 'こうき', 'Mulia; luhur'],
  ],

  締: [
    ['締める', 'しめる', 'Mengencangkan; mengikat'],
    ['締まる', 'しまる', 'Menjadi kencang'],
    ['締め切り', 'しめきり', 'Batas waktu'],
    ['締結', 'ていけつ', 'Penandatanganan perjanjian'],
    ['締切日', 'しめきりび', 'Tanggal batas akhir'],
    ['取り締まる', 'とりしまる', 'Mengawasi; menertibkan'],
    ['締め付ける', 'しめつける', 'Mengencangkan dengan kuat'],
  ],

  獄: [
    ['地獄', 'じごく', 'Neraka'],
    ['監獄', 'かんごく', 'Penjara'],
    ['投獄', 'とうごく', 'Pemenjaraan'],
    ['獄中', 'ごくちゅう', 'Di dalam penjara'],
    ['獄死', 'ごくし', 'Meninggal di penjara'],
    ['地獄絵', 'じごくえ', 'Gambaran neraka'],
  ],

  障: [
    ['障る', 'さわる', 'Mengganggu; merugikan'],
    ['障害', 'しょうがい', 'Hambatan; disabilitas'],
    ['障害者', 'しょうがいしゃ', 'Penyandang disabilitas'],
    ['故障', 'こしょう', 'Kerusakan'],
    ['障子', 'しょうじ', 'Pintu geser kertas Jepang'],
    ['支障', 'ししょう', 'Hambatan; gangguan'],
    ['障害物', 'しょうがいぶつ', 'Rintangan'],
  ],

  慰: [
    ['慰める', 'なぐさめる', 'Menghibur'],
    ['慰め', 'なぐさめ', 'Hiburan; penghiburan'],
    ['慰安', 'いあん', 'Penghiburan; rekreasi'],
    ['慰謝料', 'いしゃりょう', 'Uang kompensasi atas penderitaan'],
    ['慰問', 'いもん', 'Kunjungan untuk menghibur'],
    ['慰労', 'いろう', 'Penghargaan atas kerja keras'],
  ],

  謡: [
    ['謡う', 'うたう', 'Menyanyikan (lagu tradisional)'],
    ['謡曲', 'ようきょく', 'Lagu dalam drama Noh'],
    ['謡', 'うたい', 'Nyanyian Noh'],
    ['民謡', 'みんよう', 'Lagu rakyat'],
    ['謡い物', 'うたいもの', 'Lagu atau nyanyian tradisional'],
  ],

  寛: [
    ['寛大', 'かんだい', 'Murah hati; toleran'],
    ['寛容', 'かんよう', 'Toleransi'],
    ['寛ぐ', 'くつろぐ', 'Bersantai'],
    ['寛ぎ', 'くつろぎ', 'Kenyamanan; waktu bersantai'],
    ['寛容な態度', 'かんようなたいど', 'Sikap toleran'],
  ],

  聴: [
    ['聴く', 'きく', 'Mendengarkan'],
    ['聴力', 'ちょうりょく', 'Kemampuan mendengar'],
    ['聴覚', 'ちょうかく', 'Indra pendengaran'],
    ['聴衆', 'ちょうしゅう', 'Para pendengar'],
    ['視聴', 'しちょう', 'Menonton dan mendengarkan'],
    ['傍聴', 'ぼうちょう', 'Menghadiri dan mendengarkan sidang'],
    ['聴講', 'ちょうこう', 'Mengikuti kuliah'],
  ],

  跡: [
    ['跡', 'あと', 'Bekas; jejak'],
    ['足跡', 'あしあと', 'Jejak kaki'],
    ['遺跡', 'いせき', 'Situs peninggalan sejarah'],
    ['跡地', 'あとち', 'Bekas lokasi'],
    ['傷跡', 'きずあと', 'Bekas luka'],
    ['痕跡', 'こんせき', 'Jejak; tanda yang tertinggal'],
    ['奇跡', 'きせき', 'Keajaiban'],
  ],

  携: [
    ['携える', 'たずさえる', 'Membawa serta'],
    ['携帯', 'けいたい', 'Telepon genggam; membawa'],
    ['携帯電話', 'けいたいでんわ', 'Telepon seluler'],
    ['携帯品', 'けいたいひん', 'Barang bawaan'],
    ['連携', 'れんけい', 'Kerja sama; koordinasi'],
    ['提携', 'ていけい', 'Kemitraan'],
    ['携わる', 'たずさわる', 'Terlibat dalam pekerjaan'],
  ],

  叙: [
    ['叙述', 'じょじゅつ', 'Pemaparan; penggambaran'],
    ['叙事', 'じょじ', 'Narasi; kisah'],
    ['叙情', 'じょじょう', 'Ekspresi perasaan'],
    ['叙勲', 'じょくん', 'Penganugerahan tanda jasa'],
    ['叙位', 'じょい', 'Penganugerahan pangkat'],
    ['叙事詩', 'じょじし', 'Puisi epik'],
  ],

  弾: [
    ['弾く', 'ひく', 'Memainkan alat musik'],
    ['弾む', 'はずむ', 'Memantul; menjadi bersemangat'],
    ['弾丸', 'だんがん', 'Peluru'],
    ['爆弾', 'ばくだん', 'Bom'],
    ['弾力', 'だんりょく', 'Elastisitas'],
    ['弾薬', 'だんやく', 'Amunisi'],
    ['弾き語り', 'ひきがたり', 'Bernyanyi sambil memainkan alat musik'],
  ],

  喩: [
    ['比喩', 'ひゆ', 'Kiasan; metafora'],
    ['比喩的', 'ひゆてき', 'Bersifat kiasan'],
    ['比喩表現', 'ひゆひょうげん', 'Ungkapan metaforis'],
    ['暗喩', 'あんゆ', 'Metafora'],
    ['直喩', 'ちょくゆ', 'Simile; perumpamaan langsung'],
  ],

  酸: [
    ['酸っぱい', 'すっぱい', 'Asam'],
    ['酸味', 'さんみ', 'Rasa asam'],
    ['酸素', 'さんそ', 'Oksigen'],
    ['酸性', 'さんせい', 'Bersifat asam'],
    ['炭酸', 'たんさん', 'Karbonasi; asam karbonat'],
    ['胃酸', 'いさん', 'Asam lambung'],
    ['酸化', 'さんか', 'Oksidasi'],
  ],

  罵: [
    ['罵る', 'ののしる', 'Memaki; mencaci'],
    ['罵声', 'ばせい', 'Teriakan makian'],
    ['罵倒', 'ばとう', 'Hinaan; makian'],
    ['罵詈雑言', 'ばりぞうごん', 'Caci maki yang kasar'],
    ['悪罵', 'あくば', 'Hinaan kasar'],
  ],

  銃: [
    ['銃', 'じゅう', 'Senjata api'],
    ['銃声', 'じゅうせい', 'Suara tembakan'],
    ['銃弾', 'じゅうだん', 'Peluru'],
    ['拳銃', 'けんじゅう', 'Pistol'],
    ['銃撃', 'じゅうげき', 'Penembakan'],
    ['銃殺', 'じゅうさつ', 'Hukuman mati dengan ditembak'],
    ['銃規制', 'じゅうきせい', 'Pengaturan senjata api'],
  ],

  射: [
    ['射る', 'いる', 'Memanah; menembak'],
    ['射撃', 'しゃげき', 'Penembakan'],
    ['発射', 'はっしゃ', 'Peluncuran; penembakan'],
    ['放射', 'ほうしゃ', 'Radiasi; pancaran'],
    ['注射', 'ちゅうしゃ', 'Suntikan'],
    ['反射', 'はんしゃ', 'Pantulan; refleksi'],
    ['日射し', 'ひざし', 'Sinar matahari'],
  ],

  羨: [
    ['羨ましい', 'うらやましい', 'Iri; merasa ingin memiliki'],
    ['羨む', 'うらやむ', 'Merasa iri'],
    ['羨望', 'せんぼう', 'Kekaguman yang disertai rasa iri'],
    ['羨望の的', 'せんぼうのまと', 'Objek kekaguman dan kecemburuan'],
  ],

  縦: [
    ['縦', 'たて', 'Vertikal'],
    ['縦書き', 'たてがき', 'Tulisan vertikal'],
    ['縦長', 'たてなが', 'Berbentuk memanjang vertikal'],
    ['縦横', 'じゅうおう', 'Vertikal dan horizontal'],
    ['縦断', 'じゅうだん', 'Melintasi dari utara ke selatan'],
    ['縦線', 'たてせん', 'Garis vertikal'],
    ['縦社会', 'たてしゃかい', 'Masyarakat dengan hierarki vertikal'],
  ],

  陰: [
    ['陰', 'かげ', 'Bayangan; sisi tersembunyi'],
    ['陰気', 'いんき', 'Suram; muram'],
    ['陰口', 'かげぐち', 'Gosip buruk di belakang seseorang'],
    ['陰性', 'いんせい', 'Negatif (hasil pemeriksaan)'],
    ['陰謀', 'いんぼう', 'Konspirasi'],
    ['陰影', 'いんえい', 'Bayangan dan gradasi'],
    ['日陰', 'ひかげ', 'Tempat teduh'],
  ],

  揮: [
    ['指揮', 'しき', 'Komando; pengarahan'],
    ['指揮者', 'しきしゃ', 'Konduktor; pemimpin'],
    ['発揮', 'はっき', 'Menunjukkan kemampuan'],
    ['揮発', 'きはつ', 'Penguapan'],
    ['揮発油', 'きはつゆ', 'Bensin'],
    ['実力を発揮する', 'じつりょくをはっきする', 'Menunjukkan kemampuan sebenarnya'],
  ],

  憾: [
    ['遺憾', 'いかん', 'Penyesalan; disayangkan'],
    ['遺憾ながら', 'いかんながら', 'Dengan sangat menyesal'],
    ['遺憾の意', 'いかんのい', 'Ungkapan penyesalan'],
    ['残念至極', 'ざんねんしごく', 'Sangat disayangkan'],
  ],

  為: [
    ['為', 'ため', 'Demi; untuk; manfaat'],
    ['為替', 'かわせ', 'Nilai tukar; wesel'],
    ['行為', 'こうい', 'Tindakan; perbuatan'],
    ['為す', 'なす', 'Melakukan; menghasilkan'],
    ['為になる', 'ためになる', 'Bermanfaat'],
    ['為替相場', 'かわせそうば', 'Kurs valuta asing'],
    ['人工的', 'じんこうてき', 'Buatan manusia'],
  ],

  虐: [
    ['虐める', 'いじめる', 'Merundung; menyiksa'],
    ['虐待', 'ぎゃくたい', 'Penganiayaan'],
    ['児童虐待', 'じどうぎゃくたい', 'Kekerasan terhadap anak'],
    ['虐殺', 'ぎゃくさつ', 'Pembantaian'],
    ['残虐', 'ざんぎゃく', 'Kejam; brutal'],
    ['自虐', 'じぎゃく', 'Merendahkan diri sendiri'],
  ],

  軌: [
    ['軌道', 'きどう', 'Orbit; jalur'],
    ['軌跡', 'きせき', 'Jejak perjalanan'],
    ['軌道修正', 'きどうしゅうせい', 'Koreksi arah'],
    ['軌道に乗る', 'きどうにのる', 'Mulai berjalan lancar'],
    ['軌道交通', 'きどうこうつう', 'Transportasi berbasis rel'],
    ['正軌', 'せいき', 'Jalur atau aturan yang benar'],
  ],

  廊: [
    ['廊下', 'ろうか', 'Koridor'],
    ['回廊', 'かいろう', 'Koridor melingkar'],
    ['画廊', 'がろう', 'Galeri seni'],
    ['廊門', 'ろうもん', 'Gerbang koridor'],
    ['渡り廊下', 'わたりろうか', 'Koridor penghubung'],
  ],

  懲: [
    ['懲りる', 'こりる', 'Jera; kapok'],
    ['懲らしめる', 'こらしめる', 'Menghukum; memberi pelajaran'],
    ['懲罰', 'ちょうばつ', 'Hukuman'],
    ['懲戒', 'ちょうかい', 'Tindakan disipliner'],
    ['懲役', 'ちょうえき', 'Hukuman penjara dengan kerja paksa'],
    ['懲りずに', 'こりずに', 'Tanpa merasa jera'],
  ],

  碑: [
    ['碑', 'いしぶみ', 'Prasasti; monumen batu'],
    ['記念碑', 'きねんひ', 'Monumen peringatan'],
    ['石碑', 'せきひ', 'Prasasti batu'],
    ['墓碑', 'ぼひ', 'Batu nisan'],
    ['碑文', 'ひぶん', 'Tulisan pada prasasti'],
  ],

  寂: [
    ['寂しい', 'さびしい', 'Kesepian'],
    ['寂しさ', 'さびしさ', 'Rasa kesepian'],
    ['寂れる', 'さびれる', 'Menjadi sepi; mengalami kemunduran'],
    ['静寂', 'せいじゃく', 'Keheningan'],
    ['寂寞', 'せきばく', 'Kesunyian; kesepian mendalam'],
    ['閑寂', 'かんじゃく', 'Kesunyian yang tenang'],
  ],

  措: [
    ['措置', 'そち', 'Tindakan; langkah penanganan'],
    ['措置を取る', 'そちをとる', 'Mengambil tindakan'],
    ['応急措置', 'おうきゅうそち', 'Tindakan darurat'],
    ['措定', 'そてい', 'Penetapan; pengandaian'],
    ['措辞', 'そじ', 'Pilihan kata; gaya ungkapan'],
  ],

  奮: [
    ['奮う', 'ふるう', 'Membangkitkan semangat'],
    ['奮闘', 'ふんとう', 'Berjuang keras'],
    ['興奮', 'こうふん', 'Kegembiraan; kegairahan'],
    ['奮発', 'ふんぱつ', 'Mengeluarkan usaha atau biaya ekstra'],
    ['奮起', 'ふんき', 'Bangkit dengan semangat'],
    ['奮い立つ', 'ふるいたつ', 'Bangkit dengan penuh semangat'],
  ],

  興: [
    ['興味', 'きょうみ', 'Minat; ketertarikan'],
    ['興奮', 'こうふん', 'Kegembiraan; kegairahan'],
    ['興味深い', 'きょうみぶかい', 'Sangat menarik'],
    ['興行', 'こうぎょう', 'Pertunjukan; bisnis hiburan'],
    ['復興', 'ふっこう', 'Pemulihan; pembangunan kembali'],
    ['興味津々', 'きょうみしんしん', 'Sangat tertarik'],
    ['振興', 'しんこう', 'Pengembangan; promosi'],
  ],

  褒: [
    ['褒める', 'ほめる', 'Memuji'],
    ['褒め言葉', 'ほめことば', 'Kata-kata pujian'],
    ['褒賞', 'ほうしょう', 'Penghargaan'],
    ['褒美', 'ほうび', 'Hadiah; imbalan'],
    ['褒め称える', 'ほめたたえる', 'Memuji dengan sangat tinggi'],
    ['褒め殺し', 'ほめごろし', 'Pujian berlebihan yang justru merugikan'],
  ],

  監: [
    ['監督', 'かんとく', 'Sutradara; pelatih; pengawas'],
    ['監視', 'かんし', 'Pengawasan'],
    ['監視カメラ', 'かんしカメラ', 'Kamera pengawas'],
    ['監査', 'かんさ', 'Audit; pemeriksaan'],
    ['監禁', 'かんきん', 'Pengurungan'],
    ['監獄', 'かんごく', 'Penjara'],
    ['監修', 'かんしゅう', 'Pengawasan editorial'],
  ],

  催: [
    ['催す', 'もよおす', 'Menyelenggarakan; mengadakan'],
    ['開催', 'かいさい', 'Penyelenggaraan'],
    ['主催', 'しゅさい', 'Penyelenggara utama'],
    ['催促', 'さいそく', 'Desakan; pengingat'],
    ['催眠', 'さいみん', 'Hipnosis'],
    ['催し物', 'もよおしもの', 'Acara; kegiatan'],
    ['共催', 'きょうさい', 'Penyelenggaraan bersama'],
  ],

  衆: [
    ['大衆', 'たいしゅう', 'Masyarakat umum'],
    ['観衆', 'かんしゅう', 'Penonton'],
    ['群衆', 'ぐんしゅう', 'Kerumunan'],
    ['聴衆', 'ちょうしゅう', 'Pendengar'],
    ['民衆', 'みんしゅう', 'Rakyat'],
    ['衆議院', 'しゅうぎいん', 'Dewan Perwakilan Rakyat Jepang'],
    ['公衆', 'こうしゅう', 'Masyarakat umum'],
  ],

  債: [
    ['債務', 'さいむ', 'Utang; kewajiban finansial'],
    ['債権', 'さいけん', 'Piutang; hak tagih'],
    ['国債', 'こくさい', 'Obligasi pemerintah'],
    ['社債', 'しゃさい', 'Obligasi perusahaan'],
    ['債券', 'さいけん', 'Surat obligasi'],
    ['負債', 'ふさい', 'Utang; kewajiban'],
    ['債務者', 'さいむしゃ', 'Pihak yang berutang'],
  ],

  慌: [
    ['慌てる', 'あわてる', 'Panik; terburu-buru'],
    ['慌ただしい', 'あわただしい', 'Sibuk; kacau'],
    ['慌て者', 'あわてもの', 'Orang yang mudah panik'],
    ['大慌て', 'おおあわて', 'Sangat panik'],
    ['慌てふためく', 'あわてふためく', 'Panik dan kebingungan'],
  ],

  振: [
    ['振る', 'ふる', 'Mengayunkan; mengibaskan'],
    ['振り返る', 'ふりかえる', 'Menoleh; mengenang kembali'],
    ['振動', 'しんどう', 'Getaran'],
    ['振興', 'しんこう', 'Pengembangan; promosi'],
    ['振込', 'ふりこみ', 'Transfer uang'],
    ['振替', 'ふりかえ', 'Pemindahan; pengalihan'],
    ['振り向く', 'ふりむく', 'Menoleh'],
    ['振る舞う', 'ふるまう', 'Bertingkah laku; menjamu'],
  ],

  素: [
    ['素', 'もと', 'Dasar; bahan asal'],
    ['素晴らしい', 'すばらしい', 'Luar biasa'],
    ['素直', 'すなお', 'Jujur; polos; patuh'],
    ['素敵', 'すてき', 'Menarik; indah'],
    ['素材', 'そざい', 'Bahan; material'],
    ['素人', 'しろうと', 'Orang awam; pemula'],
    ['素顔', 'すがお', 'Wajah asli tanpa riasan'],
    ['素早い', 'すばやい', 'Cepat; tangkas'],
    ['素朴', 'そぼく', 'Sederhana; polos'],
  ],

  属: [
    ['所属', 'しょぞく', 'Keanggotaan; afiliasi'],
    ['所属する', 'しょぞくする', 'Bergabung; menjadi anggota'],
    ['属性', 'ぞくせい', 'Atribut; karakteristik'],
    ['金属', 'きんぞく', 'Logam'],
    ['専属', 'せんぞく', 'Khusus; eksklusif'],
    ['属する', 'ぞくする', 'Termasuk; tergolong'],
    ['付属', 'ふぞく', 'Lampiran; bagian yang melekat'],
  ],

  釈: [
    ['解釈', 'かいしゃく', 'Penafsiran'],
    ['釈放', 'しゃくほう', 'Pembebasan tahanan'],
    ['釈明', 'しゃくめい', 'Penjelasan; klarifikasi'],
    ['注釈', 'ちゅうしゃく', 'Catatan penjelasan'],
    ['釈迦', 'しゃか', 'Sang Buddha'],
    ['会釈', 'えしゃく', 'Membungkukkan kepala sebagai salam'],
    ['保釈', 'ほしゃく', 'Pembebasan dengan jaminan'],
  ],

  紛: [
    ['紛れる', 'まぎれる', 'Tercampur; tersamarkan'],
    ['紛らす', 'まぎらす', 'Mengalihkan; menghilangkan perasaan'],
    ['紛らわしい', 'まぎらわしい', 'Membingungkan; mirip'],
    ['紛争', 'ふんそう', 'Konflik; perselisihan'],
    ['紛失', 'ふんしつ', 'Kehilangan barang'],
    ['紛らわす', 'まぎらわす', 'Mengalihkan perhatian'],
    ['内紛', 'ないふん', 'Konflik internal'],
  ],

  頬: [
    ['頬', 'ほお', 'Pipi'],
    ['頬張る', 'ほおばる', 'Memasukkan banyak makanan ke mulut'],
    ['頬杖', 'ほおづえ', 'Menopang dagu dengan tangan'],
    ['頬紅', 'ほおべに', 'Pemerah pipi'],
    ['頬骨', 'ほおぼね', 'Tulang pipi'],
    ['頬笑む', 'ほほえむ', 'Tersenyum tipis'],
  ],

  頻: [
    ['頻繁', 'ひんぱん', 'Sering; kerap'],
    ['頻度', 'ひんど', 'Frekuensi'],
    ['頻発', 'ひんぱつ', 'Sering terjadi'],
    ['頻出', 'ひんしゅつ', 'Sering muncul'],
    ['頻尿', 'ひんにょう', 'Sering buang air kecil'],
    ['頻々', 'ひんぴん', 'Berulang kali; sering'],
  ],

  逮: [
    ['逮捕', 'たいほ', 'Penangkapan'],
    ['逮捕状', 'たいほじょう', 'Surat perintah penangkapan'],
    ['現行犯逮捕', 'げんこうはんたいほ', 'Penangkapan tertangkap tangan'],
    ['逮捕者', 'たいほしゃ', 'Orang yang ditangkap'],
    ['逮捕歴', 'たいほれき', 'Riwayat penangkapan'],
  ],

  視: [
    ['見る', 'みる', 'Melihat'],
    ['視力', 'しりょく', 'Ketajaman penglihatan'],
    ['視線', 'しせん', 'Pandangan mata'],
    ['視聴', 'しちょう', 'Menonton dan mendengarkan'],
    ['無視', 'むし', 'Mengabaikan'],
    ['重視', 'じゅうし', 'Mengutamakan'],
    ['視野', 'しや', 'Bidang pandang; wawasan'],
    ['監視', 'かんし', 'Pengawasan'],
  ],

  盟: [
    ['同盟', 'どうめい', 'Aliansi; persekutuan'],
    ['連盟', 'れんめい', 'Federasi; liga'],
    ['加盟', 'かめい', 'Keanggotaan; bergabung'],
    ['盟約', 'めいやく', 'Perjanjian; pakta'],
    ['加盟国', 'かめいこく', 'Negara anggota'],
    ['同盟国', 'どうめいこく', 'Negara sekutu'],
  ],

  廃: [
    ['廃れる', 'すたれる', 'Menjadi usang; ditinggalkan'],
    ['廃止', 'はいし', 'Penghapusan; penghentian'],
    ['廃棄', 'はいき', 'Pembuangan'],
    ['廃業', 'はいぎょう', 'Penutupan usaha'],
    ['廃墟', 'はいきょ', 'Bangunan terbengkalai'],
    ['廃車', 'はいしゃ', 'Kendaraan yang dihapus dari penggunaan'],
    ['廃品', 'はいひん', 'Barang bekas'],
  ],

  剰: [
    ['余剰', 'よじょう', 'Surplus; kelebihan'],
    ['過剰', 'かじょう', 'Berlebihan'],
    ['剰余', 'じょうよ', 'Sisa; kelebihan'],
    ['剰余金', 'じょうよきん', 'Dana surplus'],
    ['過剰反応', 'かじょうはんのう', 'Reaksi berlebihan'],
    ['余剰人員', 'よじょうじんいん', 'Kelebihan tenaga kerja'],
  ],

  既: [
    ['既に', 'すでに', 'Sudah'],
    ['既婚', 'きこん', 'Sudah menikah'],
    ['既存', 'きそん', 'Sudah ada; yang sudah ada'],
    ['既成', 'きせい', 'Sudah terbentuk'],
    ['既定', 'きてい', 'Sudah ditetapkan'],
    ['既製品', 'きせいひん', 'Barang jadi'],
    ['既往症', 'きおうしょう', 'Riwayat penyakit sebelumnya'],
  ],

  慮: [
    ['配慮', 'はいりょ', 'Pertimbangan; perhatian'],
    ['遠慮', 'えんりょ', 'Sungkan; menahan diri'],
    ['考慮', 'こうりょ', 'Pertimbangan'],
    ['熟慮', 'じゅくりょ', 'Pemikiran matang'],
    ['不慮', 'ふりょ', 'Tidak terduga'],
    ['思慮深い', 'しりょぶかい', 'Bijaksana; penuh pertimbangan'],
  ],

  蔑: [
    ['蔑む', 'さげすむ', 'Merendahkan; memandang hina'],
    ['蔑視', 'べっし', 'Penghinaan; memandang rendah'],
    ['軽蔑', 'けいべつ', 'Penghinaan; rasa meremehkan'],
    ['蔑称', 'べっしょう', 'Sebutan yang menghina'],
    ['侮蔑', 'ぶべつ', 'Penghinaan; pelecehan'],
  ],

  媒: [
    ['媒体', 'ばいたい', 'Media; perantara'],
    ['媒介', 'ばいかい', 'Perantaraan'],
    ['媒介者', 'ばいかいしゃ', 'Perantara'],
    ['触媒', 'しょくばい', 'Katalis'],
    ['媒介物', 'ばいかいぶつ', 'Benda perantara'],
    ['媒質', 'ばいしつ', 'Medium; zat perantara'],
  ],

  隠: [
    ['隠す', 'かくす', 'Menyembunyikan'],
    ['隠れる', 'かくれる', 'Bersembunyi'],
    ['隠れ家', 'かくれが', 'Tempat persembunyian'],
    ['隠居', 'いんきょ', 'Pensiun; mengundurkan diri dari kehidupan aktif'],
    ['隠し事', 'かくしごと', 'Rahasia'],
    ['隠語', 'いんご', 'Bahasa sandi; slang khusus'],
    ['隠密', 'おんみつ', 'Rahasia; mata-mata'],
  ],

  傑: [
    ['傑作', 'けっさく', 'Mahakarya'],
    ['傑出', 'けっしゅつ', 'Unggul; menonjol'],
    ['傑物', 'けつぶつ', 'Orang hebat'],
    ['傑士', 'けっし', 'Tokoh luar biasa'],
    ['傑出した才能', 'けっしゅつしたさいのう', 'Bakat yang luar biasa'],
  ],

  穀: [
    ['穀物', 'こくもつ', 'Biji-bijian'],
    ['穀類', 'こくるい', 'Jenis-jenis serealia'],
    ['穀倉', 'こくそう', 'Lumbung biji-bijian'],
    ['雑穀', 'ざっこく', 'Biji-bijian campuran'],
    ['五穀', 'ごこく', 'Lima jenis biji-bijian'],
    ['穀物市場', 'こくもつしじょう', 'Pasar biji-bijian'],
  ],

  窮: [
    ['窮屈', 'きゅうくつ', 'Sempit; tidak leluasa'],
    ['窮地', 'きゅうち', 'Situasi sulit'],
    ['窮乏', 'きゅうぼう', 'Kemiskinan; kekurangan'],
    ['困窮', 'こんきゅう', 'Kesulitan; kesengsaraan'],
    ['窮する', 'きゅうする', 'Mengalami kesulitan'],
    ['窮極', 'きゅうきょく', 'Paling akhir; ekstrem'],
  ],

  趣: [
    ['趣味', 'しゅみ', 'Hobi'],
    ['趣旨', 'しゅし', 'Maksud; tujuan utama'],
    ['趣向', 'しゅこう', 'Gagasan; konsep'],
    ['趣がある', 'おもむきがある', 'Memiliki daya tarik; memiliki suasana khas'],
    ['趣味がいい', 'しゅみがいい', 'Memiliki selera yang bagus'],
    ['趣味人', 'しゅみじん', 'Orang yang memiliki banyak minat'],
  ],

  厳: [
    ['厳しい', 'きびしい', 'Ketat; keras'],
    ['厳重', 'げんじゅう', 'Sangat ketat'],
    ['厳格', 'げんかく', 'Tegas; disiplin'],
    ['厳守', 'げんしゅ', 'Mematuhi dengan ketat'],
    ['厳密', 'げんみつ', 'Teliti; presisi'],
    ['厳選', 'げんせん', 'Seleksi ketat'],
    ['厳禁', 'げんきん', 'Dilarang keras'],
    ['厳粛', 'げんしゅく', 'Khidmat; serius'],
  ],

  魅: [
    ['魅力', 'みりょく', 'Daya tarik'],
    ['魅力的', 'みりょくてき', 'Menarik; memikat'],
    ['魅了', 'みりょう', 'Pesona; daya pikat'],
    ['魅惑', 'みわく', 'Pesona; godaan'],
    ['魅せる', 'みせる', 'Memperlihatkan sesuatu yang memukau'],
    ['人を魅了する', 'ひとをみりょうする', 'Memikat hati orang'],
  ],

  徹: [
    ['徹底', 'てってい', 'Menyeluruh; menyelami sampai tuntas'],
    ['徹底的', 'てっていてき', 'Secara menyeluruh'],
    ['貫徹', 'かんてつ', 'Melaksanakan sampai tuntas'],
    ['徹夜', 'てつや', 'Begadang semalaman'],
    ['徹する', 'てっする', 'Bertekad penuh; mengabdikan diri'],
    ['冷徹', 'れいてつ', 'Dingin dan rasional'],
  ],

  維: [
    ['維持', 'いじ', 'Pemeliharaan; mempertahankan'],
    ['維持費', 'いじひ', 'Biaya pemeliharaan'],
    ['繊維', 'せんい', 'Serat'],
    ['維新', 'いしん', 'Restorasi; pembaruan besar'],
    ['現状維持', 'げんじょういじ', 'Mempertahankan kondisi saat ini'],
    ['繊維質', 'せんいしつ', 'Kandungan serat'],
  ],

  鎖: [
    ['鎖', 'くさり', 'Rantai'],
    ['鎖骨', 'さこつ', 'Tulang selangka'],
    ['閉鎖', 'へいさ', 'Penutupan'],
    ['封鎖', 'ふうさ', 'Blokade; penutupan'],
    ['連鎖', 'れんさ', 'Rangkaian; rantai'],
    ['鎖国', 'さこく', 'Kebijakan isolasi Jepang pada masa lalu'],
    ['鎖状', 'さじょう', 'Berbentuk rantai'],
  ],

  歓: [
    ['歓迎', 'かんげい', 'Sambutan; penyambutan'],
    ['歓声', 'かんせい', 'Sorak-sorai'],
    ['歓喜', 'かんき', 'Kegembiraan besar'],
    ['歓談', 'かんだん', 'Percakapan yang menyenangkan'],
    ['歓送会', 'かんそうかい', 'Acara perpisahan'],
    ['歓迎会', 'かんげいかい', 'Pesta penyambutan'],
  ],

  模: [
    ['模様', 'もよう', 'Pola; motif; keadaan'],
    ['模倣', 'もほう', 'Peniruan'],
    ['模型', 'もけい', 'Model; miniatur'],
    ['模範', 'もはん', 'Teladan'],
    ['模索', 'もさく', 'Mencari cara; meraba-raba solusi'],
    ['規模', 'きぼ', 'Skala; ukuran'],
    ['模擬試験', 'もぎしけん', 'Ujian simulasi'],
    ['模造品', 'もぞうひん', 'Barang tiruan'],
  ],

  薦: [
    ['薦める', 'すすめる', 'Merekomendasikan'],
    ['推薦', 'すいせん', 'Rekomendasi'],
    ['推薦状', 'すいせんじょう', 'Surat rekomendasi'],
    ['推薦者', 'すいせんしゃ', 'Pemberi rekomendasi'],
    ['推薦入試', 'すいせんにゅうし', 'Ujian masuk melalui jalur rekomendasi'],
    ['お薦め', 'おすすめ', 'Rekomendasi'],
  ],

  瞬: [
    ['瞬間', 'しゅんかん', 'Saat; sekejap'],
    ['一瞬', 'いっしゅん', 'Sesaat'],
    ['瞬時', 'しゅんじ', 'Dalam sekejap'],
    ['瞬く', 'またたく', 'Berkedip; berkelap-kelip'],
    ['瞬き', 'まばたき', 'Kedipan mata'],
    ['瞬間的', 'しゅんかんてき', 'Sesaat; sementara'],
    ['瞬く間に', 'またたくまに', 'Dalam sekejap mata'],
  ],

  脚: [
    ['脚', 'あし', 'Kaki (bagian bawah tubuh)'],
    ['脚力', 'きゃくりょく', 'Kekuatan kaki'],
    ['脚本', 'きゃくほん', 'Naskah drama atau film'],
    ['脚光', 'きゃっこう', 'Sorotan publik'],
    ['三脚', 'さんきゃく', 'Tripod'],
    ['脚立', 'きゃたつ', 'Tangga lipat'],
    ['脚注', 'きゃくちゅう', 'Catatan kaki'],
  ],

  殉: [
    ['殉職', 'じゅんしょく', 'Gugur saat menjalankan tugas'],
    ['殉死', 'じゅんし', 'Meninggal mengikuti orang yang dihormati'],
    ['殉教', 'じゅんきょう', 'Mati sebagai martir'],
    ['殉難', 'じゅんなん', 'Menjadi korban saat menjalankan tugas'],
    ['殉職者', 'じゅんしょくしゃ', 'Orang yang gugur dalam tugas'],
  ],

  糾: [
    ['糾弾', 'きゅうだん', 'Kecaman keras'],
    ['追及', 'ついきゅう', 'Pengejaran; penyelidikan mendalam'],
    ['糾明', 'きゅうめい', 'Penyelidikan; pengungkapan'],
    ['糾合', 'きゅうごう', 'Mengumpulkan; menyatukan'],
    ['糾問', 'きゅうもん', 'Pemeriksaan; interogasi'],
  ],

  潮: [
    ['潮', 'しお', 'Air pasang; arus laut'],
    ['潮風', 'しおかぜ', 'Angin laut'],
    ['潮干狩り', 'しおひがり', 'Mencari kerang saat air surut'],
    ['潮流', 'ちょうりゅう', 'Arus laut; tren'],
    ['満潮', 'まんちょう', 'Air pasang'],
    ['干潮', 'かんちょう', 'Air surut'],
    ['潮時', 'しおどき', 'Waktu yang tepat'],
  ],

  慕: [
    ['慕う', 'したう', 'Merindukan; mengagumi'],
    ['慕わしい', 'したわしい', 'Dirindukan; disayangi'],
    ['慕情', 'ぼじょう', 'Perasaan rindu'],
    ['敬慕', 'けいぼ', 'Rasa hormat dan kekaguman'],
    ['思慕', 'しぼ', 'Kerinduan; rasa kasih'],
    ['慕う心', 'したうこころ', 'Perasaan rindu dan kasih'],
  ],

  幕: [
    ['幕', 'まく', 'Tirai; babak'],
    ['幕開け', 'まくあけ', 'Awal; pembukaan'],
    ['幕末', 'ばくまつ', 'Akhir zaman Edo'],
    ['幕府', 'ばくふ', 'Pemerintahan shogun'],
    ['幕僚', 'ばくりょう', 'Staf militer'],
    ['開幕', 'かいまく', 'Pembukaan acara'],
    ['閉幕', 'へいまく', 'Penutupan acara'],
    ['字幕', 'じまく', 'Teks terjemahan film'],
  ],

  履: [
    ['履く', 'はく', 'Memakai sepatu atau celana'],
    ['履歴', 'りれき', 'Riwayat'],
    ['履歴書', 'りれきしょ', 'Daftar riwayat hidup'],
    ['履修', 'りしゅう', 'Mengambil mata pelajaran'],
    ['履行', 'りこう', 'Pelaksanaan; pemenuhan kewajiban'],
    ['履物', 'はきもの', 'Alas kaki'],
    ['履き替える', 'はきかえる', 'Mengganti alas kaki'],
  ],

  誉: [
    ['誉れ', 'ほまれ', 'Kehormatan; kebanggaan'],
    ['名誉', 'めいよ', 'Kehormatan'],
    ['栄誉', 'えいよ', 'Kehormatan; penghargaan'],
    ['不名誉', 'ふめいよ', 'Aib; tidak terhormat'],
    ['名誉教授', 'めいよきょうじゅ', 'Profesor emeritus'],
    ['名誉会員', 'めいよかいいん', 'Anggota kehormatan'],
  ],

  蓄: [
    ['蓄える', 'たくわえる', 'Menyimpan; menimbun'],
    ['蓄積', 'ちくせき', 'Akumulasi; penimbunan'],
    ['貯蓄', 'ちょちく', 'Tabungan'],
    ['蓄電', 'ちくでん', 'Penyimpanan listrik'],
    ['蓄電池', 'ちくでんち', 'Baterai penyimpan listrik'],
    ['蓄音機', 'ちくおんき', 'Gramofon'],
    ['蓄財', 'ちくざい', 'Mengumpulkan kekayaan'],
  ],

  窟: [
    ['洞窟', 'どうくつ', 'Gua'],
    ['巣窟', 'そうくつ', 'Sarang; tempat persembunyian'],
    ['石窟', 'せっくつ', 'Gua batu'],
    ['岩窟', 'がんくつ', 'Gua di pegunungan'],
    ['窟院', 'くついん', 'Tempat ibadah di dalam gua'],
  ],

  償: [
    ['償う', 'つぐなう', 'Mengganti kerugian; menebus'],
    ['補償', 'ほしょう', 'Kompensasi'],
    ['賠償', 'ばいしょう', 'Ganti rugi'],
    ['弁償', 'べんしょう', 'Mengganti barang yang rusak atau hilang'],
    ['代償', 'だいしょう', 'Pengorbanan; harga yang harus dibayar'],
    ['損害賠償', 'そんがいばいしょう', 'Ganti rugi kerusakan'],
  ],

  猿: [
    ['猿', 'さる', 'Monyet'],
    ['猿回し', 'さるまわし', 'Pertunjukan monyet'],
    ['猿真似', 'さるまね', 'Meniru secara membabi buta'],
    ['猿知恵', 'さるぢえ', 'Kecerdikan yang dangkal'],
    ['猿芝居', 'さるしばい', 'Pertunjukan yang dibuat-buat'],
    ['猿山', 'さるやま', 'Tempat bermain monyet'],
  ],

  棄: [
    ['捨てる', 'すてる', 'Membuang'],
    ['放棄', 'ほうき', 'Pengabaian; pelepasan hak'],
    ['棄権', 'きけん', 'Tidak memberikan suara'],
    ['遺棄', 'いき', 'Penelantaran'],
    ['廃棄', 'はいき', 'Pembuangan'],
    ['棄却', 'ききゃく', 'Penolakan; penolakan gugatan'],
    ['自暴自棄', 'じぼうじき', 'Putus asa; menyerah pada keadaan'],
  ],

  慨: [
    ['感慨', 'かんがい', 'Perasaan mendalam'],
    ['慨嘆', 'がいたん', 'Penyesalan; ratapan'],
    ['憤慨', 'ふんがい', 'Kemarahan besar'],
    ['感慨深い', 'かんがいぶかい', 'Sangat mengharukan'],
    ['慨然', 'がいぜん', 'Penuh penyesalan atau kesedihan'],
  ],

  餌: [
    ['餌', 'えさ', 'Makanan hewan; umpan'],
    ['餌付け', 'えづけ', 'Pemberian makan hewan'],
    ['餌食', 'えじき', 'Mangsa; korban'],
    ['餌場', 'えさば', 'Tempat hewan mencari makan'],
    ['釣り餌', 'つりえ', 'Umpan pancing'],
    ['餌を与える', 'えさをあたえる', 'Memberi makan hewan'],
  ],

  遍: [
    ['普遍', 'ふへん', 'Universal; berlaku umum'],
    ['遍歴', 'へんれき', 'Perjalanan hidup; pengalaman berpindah-pindah'],
    ['遍在', 'へんざい', 'Tersebar di mana-mana'],
    ['普遍的', 'ふへんてき', 'Bersifat universal'],
    ['遍く', 'あまねく', 'Di seluruh tempat; secara luas'],
  ],

  緊: [
    ['緊張', 'きんちょう', 'Ketegangan'],
    ['緊急', 'きんきゅう', 'Darurat'],
    ['緊急事態', 'きんきゅうじたい', 'Situasi darurat'],
    ['緊密', 'きんみつ', 'Erat; rapat'],
    ['緊迫', 'きんぱく', 'Ketegangan yang meningkat'],
    ['緊縮', 'きんしゅく', 'Penghematan; pengetatan'],
    ['緊急連絡', 'きんきゅうれんらく', 'Kontak darurat'],
  ],

  敷: [
    ['敷く', 'しく', 'Menghamparkan; memasang'],
    ['敷地', 'しきち', 'Lahan; tanah bangunan'],
    ['敷金', 'しききん', 'Uang deposit sewa'],
    ['敷物', 'しきもの', 'Alas; karpet'],
    ['座敷', 'ざしき', 'Ruangan berlantai tatami'],
    ['屋敷', 'やしき', 'Rumah besar; kediaman'],
    ['敷布団', 'しきぶとん', 'Kasur bawah'],
  ],

  稽: [
    ['稽古', 'けいこ', 'Latihan; praktik'],
    ['稽古場', 'けいこば', 'Tempat latihan'],
    ['稽古着', 'けいこぎ', 'Pakaian latihan'],
    ['稽古事', 'けいこごと', 'Kegiatan belajar keterampilan'],
    ['お稽古', 'おけいこ', 'Pelajaran atau latihan keterampilan'],
  ],

  戚: [
    ['親戚', 'しんせき', 'Kerabat; sanak saudara'],
    ['親戚付き合い', 'しんせきづきあい', 'Hubungan dengan kerabat'],
    ['姻戚', 'いんせき', 'Kerabat karena pernikahan'],
    ['外戚', 'がいせき', 'Kerabat dari pihak ibu'],
    ['皇親', 'こうしん', 'Kerabat keluarga kekaisaran'],
  ],

  僅: [
    ['僅か', 'わずか', 'Hanya sedikit'],
    ['僅かな', 'わずかな', 'Sedikit; kecil'],
    ['僅差', 'きんさ', 'Selisih tipis'],
    ['僅少', 'きんしょう', 'Sangat sedikit'],
    ['僅差で勝つ', 'きんさでかつ', 'Menang dengan selisih tipis'],
    ['僅かに残る', 'わずかにのこる', 'Tersisa sedikit'],
  ],

  緩: [
    ['緩い', 'ゆるい', 'Longgar; tidak ketat'],
    ['緩む', 'ゆるむ', 'Menjadi longgar'],
    ['緩める', 'ゆるめる', 'Melonggarkan'],
    ['緩和', 'かんわ', 'Pelunakan; pengurangan'],
    ['緩急', 'かんきゅう', 'Cepat dan lambat; keadaan darurat'],
    ['緩やか', 'ゆるやか', 'Landai; perlahan'],
    ['緩衝材', 'かんしょうざい', 'Bahan peredam benturan'],
  ],

  購: [
    ['購入', 'こうにゅう', 'Pembelian'],
    ['購買', 'こうばい', 'Pembelian'],
    ['購読', 'こうどく', 'Berlangganan bacaan'],
    ['購読者', 'こうどくしゃ', 'Pelanggan publikasi'],
    ['購入者', 'こうにゅうしゃ', 'Pembeli'],
    ['購買意欲', 'こうばいいよく', 'Keinginan untuk membeli'],
  ],

  閑: [
    ['閑', 'ひま', 'Waktu senggang'],
    ['閑静', 'かんせい', 'Tenang; sepi'],
    ['閑散', 'かんさん', 'Sepi; tidak ramai'],
    ['閑話', 'かんわ', 'Percakapan santai'],
    ['閑古鳥', 'かんこどり', 'Suasana sepi; bisnis yang tidak laku'],
    ['繁閑', 'はんかん', 'Ramai dan sepi'],
  ],

  郷: [
    ['故郷', 'こきょう', 'Kampung halaman'],
    ['郷里', 'きょうり', 'Tempat asal'],
    ['郷土', 'きょうど', 'Daerah asal'],
    ['郷土料理', 'きょうどりょうり', 'Masakan khas daerah'],
    ['郷愁', 'きょうしゅう', 'Kerinduan terhadap kampung halaman'],
    ['異郷', 'いきょう', 'Negeri asing'],
    ['望郷', 'ぼうきょう', 'Kerinduan terhadap kampung halaman'],
  ],

  遡: [
    ['遡る', 'さかのぼる', 'Menyusuri ke hulu; menelusuri masa lalu'],
    ['遡及', 'そきゅう', 'Berlaku surut'],
    ['遡及効', 'そきゅうこう', 'Efek berlaku surut'],
    ['遡行', 'そこう', 'Perjalanan menyusuri ke hulu'],
    ['歴史を遡る', 'れきしをさかのぼる', 'Menelusuri sejarah ke masa lalu'],
  ],

  鍵: [
    ['鍵', 'かぎ', 'Kunci'],
    ['鍵穴', 'かぎあな', 'Lubang kunci'],
    ['鍵盤', 'けんばん', 'Papan tuts'],
    ['合鍵', 'あいかぎ', 'Kunci duplikat'],
    ['鍵を掛ける', 'かぎをかける', 'Mengunci'],
    ['鍵を開ける', 'かぎをあける', 'Membuka kunci'],
    ['暗号鍵', 'あんごうかぎ', 'Kunci enkripsi'],
  ],

  融: [
    ['融ける', 'とける', 'Mencair'],
    ['融かす', 'とかす', 'Mencairkan'],
    ['融資', 'ゆうし', 'Pembiayaan; pinjaman'],
    ['金融', 'きんゆう', 'Keuangan'],
    ['融合', 'ゆうごう', 'Penggabungan; fusi'],
    ['融通', 'ゆうずう', 'Fleksibilitas; keluwesan'],
    ['融解', 'ゆうかい', 'Pencairan'],
    ['金融機関', 'きんゆうきかん', 'Lembaga keuangan'],
  ],

  綻: [
    ['綻びる', 'ほころびる', 'Mulai terbuka; mulai robek'],
    ['綻び', 'ほころび', 'Robekan; celah'],
    ['綻ぶ', 'ほころぶ', 'Mekar sedikit; tersenyum'],
    ['綻びを繕う', 'ほころびをつくろう', 'Memperbaiki bagian yang robek'],
    ['口元が綻ぶ', 'くちもとがほころぶ', 'Mulut mulai tersenyum'],
  ],

  礎: [
    ['基礎', 'きそ', 'Dasar; fondasi'],
    ['基礎知識', 'きそちしき', 'Pengetahuan dasar'],
    ['基礎工事', 'きそこうじ', 'Pekerjaan fondasi bangunan'],
    ['礎石', 'そせき', 'Batu fondasi'],
    ['礎を築く', 'いしずえをきずく', 'Membangun fondasi'],
    ['学問の礎', 'がくもんのいしずえ', 'Fondasi ilmu pengetahuan'],
  ],

  翻: [
    ['翻訳', 'ほんやく', 'Terjemahan'],
    ['翻訳者', 'ほんやくしゃ', 'Penerjemah'],
    ['翻訳機', 'ほんやくき', 'Mesin penerjemah'],
    ['翻る', 'ひるがえる', 'Berkibar; berbalik'],
    ['翻す', 'ひるがえす', 'Membalikkan; mengubah pendirian'],
    ['翻弄', 'ほんろう', 'Mempermainkan; memperdaya'],
    ['翻案', 'ほんあん', 'Adaptasi karya'],
  ],

  駄: [
    ['駄目', 'だめ', 'Tidak boleh; tidak berguna'],
    ['無駄', 'むだ', 'Sia-sia; pemborosan'],
    ['駄菓子', 'だがし', 'Permen atau camilan murah'],
    ['駄作', 'ださく', 'Karya yang buruk'],
    ['駄文', 'だぶん', 'Tulisan yang buruk; ungkapan merendah'],
    ['駄賃', 'だちん', 'Upah kecil; ongkos'],
    ['駄々をこねる', 'だだをこねる', 'Merengek; mengamuk seperti anak kecil'],
  ],

  自転車: [['自転車', 'じてんしゃ', 'Sepeda']],
  自動車: [['自動車', 'じどうしゃ', 'Mobil']],
  図書館: [['図書館', 'としょかん', 'Perpustakaan']],
  大使館: [['大使館', 'たいしかん', 'Kedutaan besar']],
  美術館: [['美術館', 'びじゅつかん', 'Museum seni']],
  博物館: [['博物館', 'はくぶつかん', 'Museum']],
  公民館: [['公民館', 'こうみんかん', 'Balai warga']],
  化粧品: [['化粧品', 'けしょうひん', 'Kosmetik']],
  自動販売機: [['自動販売機', 'じどうはんばいき', 'Mesin pen jual otomatis']],
};
