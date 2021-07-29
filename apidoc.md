Api doc

Info Table {
    User: berisi table pengguna yang sudah mendaftarkan diri,
    Car: berisi table dari fetch 3rd api dengan link url https://parseapi.back4app.com/classes/ menggunakan scraping dengan mengambil data dari internet tapi dan langsung memasukkan beserta dengan fetch data nya,
    Favorites: berisi table favorites yang memiliki asosiasi dengan User dan Car melalui id masing masing
    Message: berisi table isi percakapan atau mesage yang dikirimkan tiap user, memilki aosisasi dengan User melalui id,
    Log: berisi table tentang informasi status User jika dia sudah login maka akan menampilkan status on jika sudah logout maka akan off
}


routes pertama ada "/" di sign
 post "/register" require req.body = username,email,password,address,quotes. Akan mengcreate user baru jika berhasil menghasilkan status 201 dengan mengirimkan data dari user yang sudah di create
 post "/login" require req.body = email, password. Verify user yang masuk dengan data user di database jika berhasil mengirimkan status 200 dengan access_token yang sudah dibuat oleh jwt
 middleware authenticate require access_token untuk memfilter jika sudah login atau belum, beserta jwt yang valid atau tidak, status error 400 BAD REQUEST dan 401 Invalid JWT dan 401 Authenticate
 get "/user" memfilter data user yang sedang login untuk di tampilkan identifikasi nya menggunakan req.user yang dikirimkan oleh middleware, jika berhasil maka akan di kirimkan status 200 dengan data nya
 put "/user/:id" mengubah/update data user yang dpilih melalui id yang dikirimkan oleh req.params.id serta require req.body = username,email,address,quotes, jika berhasil maka akan mengirmkan status 200 dengan mengirimkan message succes to update

router selanjutnya harus melewati middleware authenticate 

router kedua yaitu /cars
 get "/cars/" require headers=access_token menampilkan semua list dari table car jika berhasil akan mengirimkan 200 dan data dari car nya
 get "/cars/:id" require headers=access_token dan req.params=id, menampilkan car yang sudah dipilih dan difilter sesuai dengan id yang diminta, jika berhasil mengirimkan 200 dengan data dari item yang sesuai dengan id

router ketiga yaitu /favorites
 get "/favorites/" require headers=access_token menampilkan semua list dari favorites, jika berhasil akan mengirimkan status 200 dan data table favorites
 post "/favorites/" require headers=access_token dan req.body=CarId, dilakukan pengecekan apakah sudah ada di table favorites atau belum, jika berhasil akan dikirimkan status 200 dengan data yang sudah dibuat
 delete "/favorites/:id" require headers=access_token dan req.params=id dilakukan delete item dengan id yang dikirimkan dari req.params, jika berhasil maka akan mengirimkan status 200 dengan mesage success to delete

router keempat yaitu /socket
 get "/socket/message" require headers=access_token, akan menampilkan semua data dari table message, jika berhasil akan menampilkan status 200 dengan data dari table message
 get "/socket/log" require headers=access_token, akan menampilkan semua data dari table log, jika berhasil akan menampilkan status 200 dengan data dari table log

 *untuk info table message berisi semua percakapan yang ada di socket, dan table log untuk mengetahui siapa yang sedang off dan sedang on
