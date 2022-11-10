//BURASI ÇOK KARIŞIK GELDİYSE ORTALARDA Bİ YERDE TÜM BUNLARIN YAPTIĞINI YAPAN 2 SATIRLIK KOD OLCAK ONU İNCELE

let name = prompt("adınızı girin");
document.getElementById("name").innerHTML = `Selam <b>${name}</b>! Bugün nasılsın? Senin için saati aşağıda gösteriyorum.` //KULLANICIYLA ETKİLEŞİME GİREREK ADINI ALDIK.

name = 
(name === "")? prompt("boş.adınızı girin") : //ADINI BOŞ GİRERSE GELECEK UYARI.
(name === null)? prompt("adınızı girmezseniz adınızı ekrana yazamayız :(") : //AÇILAN PROMPT TA İPTALE BASMASI DURUMUNDA GELECEK UYARI
(name < 10000) ? prompt("sayı girdiniz.adınızı girin") :""; // VE SAYI GİRMESİ DURUMUNDA GELECEK UYARI

function time (){ //SENKRON ŞEKİLDE ÇALIŞTIRMAK İÇİN FUNCTİON OLUŞTURDUK.

 let timeDate = new Date(); //ZAMANI DEĞİŞKEN İÇERİSİNE ATADIK. EKRANA TEK TEK YAZDIRILACAĞI İÇİN SAAT, DAKİKA VE SANİYEYİ DE DEĞİŞKENLER İÇERİSİNE ATADIK
 let timeHours = timeDate.getHours(); 
 let timeMinutes = timeDate.getMinutes();
 let timeSeconds = timeDate.getSeconds();
 let timeMilliSecons = timeDate.getMilliseconds();

 if( timeHours< 10){          //SAATİN 10 DAN KÜÇÜK OLMASI DURUMUNDA YANINA 0 EKLENMESİNİ İSTEDİK. AYNILARI DAKİKA VE SANİYE İÇİNDE YAPILDI.
   timeHours = "0" + timeHours
 }else if (timeMinutes < 10){
    timeMinutes = "0" +timeMinutes
 } else if (timeSeconds < 10){
    timeSeconds = "0" + timeSeconds //!!! FAKAT BURDA Bİ HATA SÖZ KONUSU EĞER DAKİKA 10 KÜÇÜKSE DAKİKANIN YANINA "0" YAZARKEN SANİYEYE YAZMIYOR.BUNU ÇÖZEMEDİM.
 }

let d = new Date(); //GÜNÜ AYARLAMAK VE DAHA NET OKUNABİLMESİ ADINA ZAMANI TEKRAR DEĞİŞKEN İÇERİSİNE ATADIK.
 let TimeDay = d.getDay()

 TimeDay = 
 (TimeDay = 1)? "Pazartesi": //TERNARY OPERATÖRLERİYLE 1.GÜNÜ PAZARTESİYE VE SIRASIYLE DİĞER GÜNLERE KOŞUL OLARAK YAZDIRDIK.
 (TimeDay = 2)? "Salı":
 (TimeDay = 3)? "Çarşamba":
 (TimeDay = 4)? "Perşembe":
 (TimeDay = 5)? "Cuma":
 (TimeDay = 6)? "Cumartesi":
 (TimeDay = 0)? "Pazar": "";

 let date = new Date(); //YILI GÜN/AY/YIL ŞEKLİNDE YAZDIRIYORUZ.O YÜZDEN BU ŞEKİLDE TEK TEK TANIMLIYORUZ.DİĞER TÜRLÜ SAATİ DE ALIYOR.AMA ZATEN BİZ SAATİ İSTEİĞİMİZ GİBİ YAZDIRMAK İÇİN YİNE BURASI GİBİ TEK TEK DEĞİŞKENLERE ATADIK.
 let dateDay = new Date().getDate();
 let dateMonth = new Date().getMonth();
 let dateYear = new Date().getFullYear();

 if( dateDay< 10){          
   dateDay = "0" + dateDay
 }else if (dateMonth < 10){
   dateMonth = "0" +dateMonth
 };

 document.querySelector(".clock").innerHTML = timeHours+ ":"+ timeMinutes+":" + timeSeconds +":"+ timeMilliSecons ;  //OLUŞTURDUĞUMUZ DEĞİŞKENLERİ HTML ELEMENTİMİZE AKTARDIK
  document.querySelector(".day").innerHTML = `<b>${TimeDay}</b>`;
  document.querySelector(".date").innerHTML = dateDay+"."+dateMonth+"."+dateYear;
} setInterval(time) //VE FUNCTİONUMUZU ÇALIŞTIRDIK. SETİNTERVAL ARACILIĞI İLE SANİYE DEĞİŞİMİNİ CANLI OLARAK ALDIK.


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TÜM BU DURUM KAFANI KARIŞTIRDIYSA İŞİN ÇOĞUNU HALLEDEN ŞU 2 SATIR KOD VAR.

 //let date = new Date().toLocaleString("tr-TR") 
//document.querySelector(".date").innerHTML = date; veya = `${date}`; diye ekrana basıp işin %90 ını halletmiş oluruz.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







 //VE BURADA DA DAHA BAŞKA VE BASİT HALİYLE OLUŞTURULAN YAPI.

// let kullaniciadi = prompt("Kullanıcı Adınızı Giriniz");
// let myName = document.querySelector("#name");
// myName.innerHTML = kullaniciadi;


// function zaman ()
// {   
//     let anlık = new Date();  
//     // saat 
//     let saat = anlık.getHours(); 
//     // dakika 
//     let dakika = anlık.getMinutes(); 
//     // saniye 
//     let saniye = anlık.getSeconds(); 
//     // güne ekstra zaman
//     var d = new Date(); 
//     // günleri ekledik
//     var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
//     // id tanımmladık
//     let iceaktarma = document.querySelector(".clock") 
//     // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
//     iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
// }
// let simdi = setInterval(zaman,100); 
