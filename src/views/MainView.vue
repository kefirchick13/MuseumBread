<template>
      <div class="">
    <div class="border-bottom" style="padding: 20px;">
    <h1 class="main-title"><span class="green">Музей хлеба</span> представляет большой выбор выставок
    и мастер классов</h1>
    </div>
      <div class="container border-bottom" style="display: flex; align-items: center;">
          <div class="info">
              <h1 class="subtitle green border-bottom" style="padding: 0px 20px 20px 20px;">О музее</h1>
              <div class="info-text">
                <p>Санкт-Петербургский музей Хлеба был создан в 1988 году как ведомственный объединения «Ленхлебпром» в здании хлебозавода «Лиговка» и носил название «Музей истории хлебопечения».
              </p>
              <p>
                В 1993 году Распоряжением Мэра Санкт-Петербурга № 629-р от 06.08.93 «о государственном Санкт-Петербургском музее хлеба» музей перешел в ведение Комитета по культуре и туризма Мэрии Санкт-Петербурга.
                </p>
                <p>
                25 декабря 2015 года музей переехал в новое здание по адресу: ул. Михайлова, д. 2 литера А. Здание, в котором музей сегодня располагается, является памятником деревянной городской архитектуры Санкт-Петербурга первой половины XIX века. Построен дом был в 1829 году по проекту архитектора Мартына Ливена для потомственного почетного гражданина Санкт-Петербурга И. А. Пастухова.
                </p>
                <p>
                Экспозиция представляет период от освоения сельскохозяйственных культур на Руси до настоящего времени. Главный акцент в экспозиции сделан на показе производства, продажи и потребления хлеба в Санкт-Петербурге.
              </p>
              <p>
                Свои двери для посетителей сегодня открывают двенадцать залов постоянной экспозиции музея и выставочные пространства.
              </p>
              </div>
              <img class="info-img" src="../assets/mainView-photo.png" alt="" style="padding: 20px; margin-top: 30px; max-width: 80%;">
        </div>
        <div class="timetable" style="padding-bottom: 40px;">
          <img src="../assets/beautiful picture of bread 1.png" alt="" class="border-bottom timetable-img" style="padding: 20px; max-width:300px; max-height: 400px;">
          <h1 class="subtitle green border-bottom" style="padding: 20px;">Часы работы</h1>
          <p><strong>Среда — воскресенье,</strong> с 10.00 до 18.00 (касса и вход — до 17.00)</p>
          <p><strong>Понедельник, вторник</strong> — выходные дни.</p>
          <p><strong>Санитарный день</strong> — последняя среда месяца.</p>
        </div>
      </div>
    </div>
    <div class="news">
      <h1 class="subtitle border-bottom green" style="padding: 20px;">Новости</h1>
      <MainPosts v-for="n in 4"></MainPosts>
    </div>
</template>
<script>
import MyHeader from '../components/MyHeader.vue';
import MainPosts from '../components/MainPosts.vue';

export default{
  components: {MainPosts, MyHeader},
  setup(){

  }
}
</script>

<style scoped>
.main-title {
  font-family: 'Miratrix';
  font-size: 64px;
  line-height: 130%;
  letter-spacing: 5px;
  margin: 0px;
}

.info-text{
  font-size: 20px;
  padding: 0 20px;
}
.info-text p{
  margin-top: 15px;
}
.timetable p{
  font-size: 24px;
  margin-top: 30px;
}
.new{
  margin-top: 60px;
}

@media screen and (max-width : 1200px) {
 .container{
  flex-wrap: wrap;
  justify-content: center;
 }
 .main-title{
  
 }
 .subtitle{
  padding: 20px !important;
 }
 .info{
  text-align: center;
  border-bottom: 1px solid black;
 }
 .info-text{
  text-align: start;
 }
 .info-img{
  margin-top: 10px !important;
 }
 .timetable{
  width: 100%;
 }
 .timetable h1{
  text-align: center
 }
 .timetable-img{
  display: none;
 }
}
@media screen and (max-width : 800px){
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info h1{
    width: 90%;
    padding: 20px 0px;
  }
  .info-text{
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
  }
}

@media screen and (max-width : 800px){
.main-title{
  font-size: 48px;
}
}
@media screen and (max-width : 500px){
  .main-title{
  font-size: 32px;
}

}
</style>