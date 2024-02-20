<template>
    <div class="poster flex border-bottom" style="justify-content: space-between; padding-bottom: 20px;"> 
        <div class="text">
            <h1 class="border-bottom subtitle green padding-20">Экспозиции</h1>
            <p class="padding-20 ">
                Музей проводит активную собирательскую, экспозиционно-выставочную, научно-исследовательскую и просветительную работу. Музейное собрание насчитывает около 14-ти тысяч экспонатов. В настоящее время музей начал комплектовать коллекция живописи на тему "Пища и мир живописи". Экспозиция рассчитана на экскурсионное обслуживание различных категорий посетителей. Вплоть до начала 20 века традиции хлебопечения и приспособления для выпечки изделий из теста, применявшиеся на протяжении веков, не претерпели существенных изменений. Совки, лопаты, опарники, ручные мельницы широко использовались и сельскими и городскими жителями. Динамично развивающаяся культура города приводила к быстрому изменению всего уклада жизни его обитателей. Наряду с традиционной глиняной и деревянной кухонной утварью в обиход прочно вошли металлическая посуда и формы для выпечки кексов, пряников, коврижек и других изделий, которыми издавна славилась русская кухня.
            </p>
        </div>
        <div class="photos column">
        <img class="first padding-20" src="../assets/PosterPhoto.png" alt="">
        <img class="second padding-20" src="../assets/P.png" alt="">
        </div>
    </div>
    <div class="poster-posts">
        <h1 class="border-bottom subtitle green padding-20">Выставочные элементы</h1>
        <div class="post" v-for="post in 4">
            <h2 class="border-bottom orange padding-20 event-name">Выставка "Печной угол в русской избе"</h2>
            <carousel v-bind="settings" :breakpoints="breakpoints" class="carousel">
                <slide v-for="slide in 5" :key="slide">
                <img src="../assets/beautiful picture of bread 1.png" alt="" class="carousel-img">
                </slide>
                <template #addons>
                <navigation />
                </template>
            </carousel>
            <h1 class="border-bottom green padding-20 event-title">Культурный форум в музее Хлеба</h1>
            <p class="event-text padding-20">Уважаемые посетители! В дни IX Международного культурного форума наш музей продлевает часы работы! 16, 17 и 18 ноября музей открыт с 10.00 до 21.00 (касса и вход закрываются в 20.00). Бесплатный входной билет в музей можно получить в кассе только с 18.00 до 20.00!</p>
        </div>
        </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3.60,
      snapAlign: 'center',
      wrapAround: true,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
        300: {
        itemsToShow: 1,
        snapAlign: 'start',
      wrapAround: true,

      },
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'start',
      wrapAround: true,

      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      wrapAround: true,

      },
    },
  }),
})

</script>

<style scoped>
    .post{
        margin-top: 30px;
    }
    .text{
        flex: 1;
    }
  
    .second{ 
        display: none;
    }
    .event-name{
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-weight: normal;
        font-size: 28px;
    }
    .carousel{
        width: 90%;
        margin: 0 auto;
        margin-top: 25px;
    }
 

    .carousel-img{
        margin: 0 10px;
        width: 100%;
        object-fit: cover;
    }
    .event-title{
        font-family: 'Miratrix';
        font-size: 24px;
        padding-bottom: 10px;
    }
    .event-text{

    }

    @media screen and (max-width : 890px) {
        .second{
            display: block;
        }
    }
    @media screen and (max-width : 750px) {
        .poster{
            flex-direction: column;
        }
        .second{
            display: none;
        }
    }


</style>