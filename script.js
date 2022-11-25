const container = document.querySelector('.container');
// kotak satu
const kotakSatu = document.querySelector('.kotak-satu');
// teks kotak satu
const from = document.querySelector('.from');
const x = document.querySelector('.x');
const cpdxseven = document.querySelector('.cpdxseven');

// kotak dua
const kotakDua = document.querySelector('.kotak-dua');
// teks kotak dua
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

// tap
const tap = document.querySelector('.tap');

// kotak tiga
const kotakTiga = document.querySelector('.kotak-tiga');

const logo = document.querySelector('.logo');
// teks kotak tiga
const por1 = document.querySelector('.for:nth-child(1)');
const por2 = document.querySelector('.for:nth-child(2)');
const por3 = document.querySelector('.for:nth-child(3)');

// audio terima kasihku (guru)
const music = new Audio('./mp3/terima-kasihku.mp3');

const selamat = document.querySelector('.selamat');
const hari= document.querySelector('.hari');
const guru = document.querySelector('.guru');

window.onload = () => {
    setTimeout(() => {
        // nongol
        kotakSatu.classList.toggle('skala-satu');
        kotakSatu.classList.toggle('opasiti-satu');

        setTimeout(() => {
            // nongol
            from.classList.toggle('x-nol');
            from.classList.toggle('opasiti-satu');
            x.classList.toggle('x-nol');
            x.classList.toggle('opasiti-satu');
            cpdxseven.classList.toggle('y-nol');
            cpdxseven.classList.toggle('opasiti-satu');

            setTimeout(() => {
                // ilang
                from.classList.toggle('x-nol');
                from.classList.toggle('opasiti-satu');
                x.classList.toggle('x-nol');
                x.classList.toggle('opasiti-satu');
                cpdxseven.classList.toggle('y-nol');
                cpdxseven.classList.toggle('opasiti-satu');

                setTimeout(() => {
                    // ilang
                    kotakSatu.classList.toggle('skala-satu');
                    kotakSatu.classList.toggle('opasiti-satu');

                    // nongol
                    container.style.backgroundColor = 'rgb(1, 41, 46)';

                    kotakDua.classList.toggle('x-nol');
                    kotakDua.classList.toggle('opasiti-satu');

                    p1.classList.toggle('y-nol');
                    p1.classList.toggle('opasiti-satu');

                    p3.classList.toggle('y-nol');
                    p3.classList.toggle('opasiti-satu');

                    setTimeout(() => {
                        // nongol
                        p2.classList.toggle('x-nol');
                        p2.classList.toggle('opasiti-satu');

                        setTimeout(() => {
                            // sengah
                            kotakDua.classList.toggle('opasiti-sengah');

                            // nongol
                            tap.classList.toggle('skala-satu');
                            tap.classList.toggle('opasiti-satu');

                            tap.addEventListener('click', function() {
                                this.classList.toggle('skala-satu');
                                this.classList.toggle('opasiti-satu');
                                kotakDua.classList.toggle('opasiti-sengah');
                                music.play();
                                
                                // ilang
                                kotakDua.classList.toggle('x-100');
                                kotakDua.classList.toggle('opasiti-satu');

                                // nongol
                                container.style.backgroundColor = '#eaeaea';

                                kotakTiga.classList.toggle('x-nol');
                                kotakTiga.classList.toggle('opasiti-satu');
                                kotakTiga.style.scale = '1';

                                setTimeout(() => {
                                    por1.classList.toggle('opasiti-satu');

                                    setTimeout(() => {
                                        por2.classList.toggle('opasiti-satu');

                                        setTimeout(() => {
                                            por3.classList.toggle('opasiti-satu');

                                            setTimeout(() => {
                                                por1.classList.toggle('opasiti-satu');
                                                por2.classList.toggle('opasiti-satu');
                                                por3.classList.toggle('opasiti-satu');

                                                setTimeout(() => {
                                                    logo.classList.toggle('opasiti-satu');
                                                    logo.classList.toggle('y-nol');

                                                    selamat.classList.toggle('skala-satu');
                                                    hari.classList.toggle('skala-satu');
                                                    guru.classList.toggle('y-nol');

                                                    selamat.classList.toggle('opasiti-satu');
                                                    hari.classList.toggle('opasiti-satu');
                                                    guru.classList.toggle('opasiti-satu');
                                                }, 2000);
                                            }, 1000);
                                        }, 700);
                                    }, 700);
                                }, 1000); 
                            });
                        }, 5000);
                    }, 700);
                }, 1000);
            }, 3000);
        }, 1000);
    }, 2000);
}