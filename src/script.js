document.querySelector('.envelope').addEventListener('click', function() {
    // Tambahkan kelas open ke amplop untuk membuka flap
    this.classList.toggle('open');
    document.querySelector('.click-message').style.display = 'none';
    
    // Mainkan lagu
    let audio = new Audio('happy-birthday.mp3');
    audio.play();

    // Tampilkan dan mainkan background video
    const videoElement = document.getElementById('birthdayVideo');
    document.querySelector('.background-video').style.display = 'block';
    videoElement.play();

    // Tangani ketika audio siap diputar
    audio.addEventListener('loadedmetadata', function() {
        const songDuration = 44000;

        // Setelah 1 detik, tampilkan gambar di dalam amplop
        setTimeout(() => {
            document.querySelector('.card').style.opacity = 1;
            document.querySelector('.surprise-image').style.display = 'block';

            Swal.fire({
                title: 'Selamat Ulang Tahun Sayangku!',
                html: '<p>Semoga sehat selalu💕💕💕<br>I LOVE YOU ❤️</p>',
                imageUrl: 'https://media.istockphoto.com/id/1311461815/vector/illustration-vector-graphic-design-asset-of-cream-cake-suitable-for-multipurpose-content.jpg?s=612x612&w=0&k=20&c=JeNpdxUftEdYWWjPRiqUCWxYQs10Y8ulLy03RFNFdIE=',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Birthday cake',
                timer: 20000,
                showConfirmButton: false
            });
        }, 10000);

        // Tampilkan bunga mawar mendekati akhir lagu
        setTimeout(() => {
            const rose = document.querySelector('.rose');
            rose.classList.add('show');
        }, songDuration - 5000);
    });
});
