<template>
      <div class="new">
        <div class="photos">
          <div class="photos-first-grid"><img src="../assets/beautiful picture of bread 1.png" alt=""></div>
          <div class="photos-second-grid"><img style="margin-bottom: 20px;" src="../assets/beautiful picture of bread 1.png" alt="">
          <img src="../assets/beautiful picture of bread 1.png" alt="">
          </div>
        </div>
        <div class="text">
        <h1 class="news-subtitle green border-bottom">Культурный форум в музее Хлеба</h1>
        <p class="news-text">Уважаемые посетители! В дни IX Международного культурного форума наш музей продлевает часы работы! 16, 17 и 18 ноября музей открыт с 10.00 до 21.00 (касса и вход закрываются в 20.00). Бесплатный входной билет в музей можно получить в кассе только с 18.00 до 20.00!</p>
      </div>
    </div>
</template>
<script>
export default{
    setup(){

    }
}

</script>
<style scoped>
.new{
  padding: 0px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text{
  max-width: 80%;
}
.news-subtitle{
  font-size: 24px;
  font-family: 'Miratrix';
  padding: 20px 0px;
}
.photos{
  display: flex;
  justify-content: center;
  max-width: 90%;
  max-height: 500px;
}
.photos-first-grid{
  flex: 3;
  display: flex;
  margin-right: 20px;
  max-height: 100%;
  
}

.photos-first-grid img{
  width: 100%;
  object-fit: cover;
}
.photos-second-grid{
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.photos-second-grid img{ 
  width: 100%;
  height: 240px;
  object-fit: cover;
  
}
.news-text{
  font-size: 20px;
  font-weight: lighter;
}

@media screen and (max-width : 1200px) {
  .photos-first-grid img{
  }
  .photos-second-grid img{

  }
  .new{
    padding: 0px;
  }
}
@media screen and (max-width : 600px) {
  .new{
    margin-top: 20px !important;
  }
  .photos{
  flex-direction: column;
  align-items: center;
  max-height: fit-content;
  }
  .photos-first-grid{
    margin: 0px;
    margin-bottom: 20px;
    display: flex;
  }
  .photos-second-grid{
    display: flex;
    margin-bottom: 20px;
  }
  .photos-second-grid img:nth-child(even){
    display: none;
  }
  .photos-second-grid img{
    display: flex;
    flex-wrap: wrap;
    height: auto;

  }
  .text{
    margin-bottom: 10px;
  }
.text h1{
  font-size: 20px;
}
}

</style>