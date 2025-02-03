document.getElementById('btnSi').addEventListener('click', function() {
    // Redirige primero a Acepto.html
    window.location.href = "Acepto.html";

    // Espera 10 segundos antes de abrir el enlace de WhatsApp
    setTimeout(function() {
        window.open('https://wa.me/522871041240?text=Si%20acepto%20ser%20tu%20San%20Valentín', '_blank');
    }, 10);
});


const textsAndImages = {
    1: { text: "ok volvemos a empezar aver si me das otra vez el si", img: "/images/1.gif" },
    2: { text: "Porque elegistes que no, querias probarlo verdad jajaja", img: "/images/2.gif" },
    3: { text: "¿Porque no quieres?", img: "/images/3.gif" },
    4: { text: "¿En que piensas?", img: "/images/4.gif" },
    5: { text: "¡Di que si!", img: "/images/5.gif" },
    6: { text: "Sigues diciendo no?", img: "/images/6.gif" },
    7: { text: "El 'Si' está ahí por algo...", img: "/images/7.gif" },
    8: { text: "Porfasss, hazlo por mi! Presiona Sí", img: "/images/8.gif" },
    9: { text: "Estás empezando a asustarme :c, ¿Por qué sigues eligiendo No?", img: "/images/9.gif" },
    10: { text: "Mira, podemos hablar... pero primero presiona SI", img: "/images/10.gif" },
    11: { text: "¡¿Pues qué te hizo el Sí para que lo ignores así?!", img: "/images/11.gif" },
    12: { text: "Ok, ok, entiendo no me quieres aprobar facilmente... pero ¿y si pruebas SI solo una vez?", img: "/images/12.gif" },
    13: { text: "¡POR FAVOR! Un solo SI, solo uno, te lo ruego :ccc", img: "/images/13.gif" },
    14: { text: "¡Voy a llorar si sigues eligiendo No!", img: "/images/14.gif" },
    15: { text: "Mira, si eliges Si, te prometo que no te suplico mas, te parece?", img: "/images/15.gif" },
    16: { text: "¡Por favor! ¡No más No! ¡No seas asi BB! ¡SÍIIIIIIIIIIII!:ccc", img: "/images/16.gif" },
};
document.getElementById('btnNo').addEventListener('click', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const img = document.querySelector('img');
    
    btnSi.style.transform = `scale(${btnSi.scaleFactor || 1.1})`;
    btnSi.scaleFactor = (btnSi.scaleFactor || 1.1) + 0.1;
    btnSi.style.margin = `${(btnSi.scaleFactor - 1) * 40}px`;
    btnNo.style.margin = `${(btnSi.scaleFactor - 1) * 40}px`;
    
 const clickCount = btnNo.clickCount || 1;
    
 const data = textsAndImages[clickCount % 15 + 1];
 btnNo.textContent = data.text;
 img.src = data.img;
 
 btnNo.clickCount = clickCount + 1;
});