<template>
    <div class="info">
        <h1 class="info-title border-bottom orange padding-20">Контакты</h1>
        <div class="social flex border-bottom">
            <div class="text">
                <div class="text-block flex">
                    <img src="../assets/twitter.svg" alt="">
                    <p>Электронная почта: <a href="">musbread@cult.gugov.spb.ru</a>
                    </p>
                </div>
                <div class="text-block flex">
                    <img src="../assets/twitter.svg" alt="">
                    <p>Электронная почта: <a href="">musbread@cult.gugov.spb.ru</a>
                    </p>
                </div>
                <div class="text-block flex">
                    <img src="../assets/twitter.svg" alt="">
                    <p>Электронная почта: <a href="">musbread@cult.gugov.spb.ru</a>
                    </p>
                </div>   <div class="text-block flex">
                    <img src="../assets/twitter.svg" alt="">
                    <p>Электронная почта: <a href="">musbread@cult.gugov.spb.ru</a>
                    </p>
                </div>
                <div class="info-way">
                    <h1 class="info-title border-bottom orange padding-20">Как добраться</h1>
                    <p class="text-block">Адрес: 195009, Санкт-Петербург, Михайлова, д.2, метро Пл. Ленина, выход на Финляндский вокзал
                    Ближайшее метро: Метро - Площадь Ленина, выход на Финляндский вокзал</p>
                </div>
            </div>
        <div class="timetable" style="padding-bottom: 40px;">
          <h1 class="subtitle green border-bottom" style="padding: 20px;">Часы работы</h1>
          <p><strong>Среда — воскресенье,</strong> с 10.00 до 18.00 (касса и вход — до 17.00)</p>
          <p><strong>Понедельник, вторник</strong> — выходные дни.</p>
          <p><strong>Санитарный день</strong> — последняя среда месяца.</p>
        </div>
        </div>
        <div class="map">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/sankt_peterburgskiy_muzey_khleba/171846371395/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт-Петербургский музей хлеба</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/museum/184105894/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Музей в Санкт‑Петербурге</a><iframe src="https://yandex.ru/map-widget/v1/?ll=30.360397%2C59.953624&mode=search&oid=171846371395&ol=biz&z=16.1" width="100%" height="350" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
    </div>
</template>

<script>



</script>

<style scoped>
.social{
    justify-content: space-around;
    margin-top: 10px;
    padding-bottom: 20px;
}
.text{
    max-width: 50%;
}
.info-title{
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
}
.text-block{
    align-items: center;
    margin-top: 15px;
}
.text-block p{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-left: 13px; 
    text-align: center; 
}
p a{
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;   
}
.timetable p{
  font-size: 24px;
  margin-top: 30px;
  max-width: 415px;
}
.map{
    margin-top: 40px;
    padding: 0px 60px;
}
.info-way p{
    padding: 0px 20px;
}
@media screen and (max-width : 750px) {
    .social{
        flex-direction: column;
    }
    .text{
        max-width: 100%
    }
    .info-way{
        width: 100%;
    }
    .timetable p{
        font-size: 20px;
    }
}

</style>