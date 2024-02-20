<template>
    <div class="price">
        <h1 class="subtitle green padding-20 border-bottom">Стоимость</h1>
        <div class="flex price-content">
            <div class="price-table">
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Взрослые</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Школьники, студенты средних учебных заведений, студенты ВУЗов РФ, пенсионеры и др. льготные категории</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет<br>(с человека)</p>
                    <p class="cell-second cell">Дошкольники (3-7 лет)</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Все категории посетителей, стоимость для одного человека.Входной билет с экскурсионным обслуживанием для одного посетителя, группа от 6 до 20 человек.</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Интерактивные занятия<br>(с человека)</p>
                    <p class="cell-second cell">Все категории посетителей, стоимость для одного человека.Группа до 20 чел.</p>
                    <p class="cell-third cell">250,00</p>
                </div>

                

                <div class="row flex" >
                    <p class="cell-first cell">Входной билет<br>(с человека)</p>
                    <p class="cell-second cell">Взрослые</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Школьники, студенты средних учебных заведений, студенты ВУЗов РФ, пенсионеры и др. льготные категории</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Дошкольники (3-7 лет)</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Входной билет <br>(с человека)</p>
                    <p class="cell-second cell">Все категории посетителей, стоимость для одного человека.Входной билет с экскурсионным обслуживанием для одного посетителя, группа от 6 до 20 человек.</p>
                    <p class="cell-third cell">250,00</p>
                </div>
                <div class="row flex" >
                    <p class="cell-first cell">Интерактивные занятия<br>(с человека)</p>
                    <p class="cell-second cell">Все категории посетителей, стоимость для одного человека.Группа до 20 чел.</p>
                    <p class="cell-third cell">250,00</p>
                </div>
            </div>
            <div class="timetable" style="padding-bottom: 40px;">
                <div class="text border-bottom">
                <h1 class="subtitle green border-bottom" style="padding: 20px;">Часы работы</h1>
                <p style="padding: 0px 20px;"><strong>Среда — воскресенье,</strong> с 10.00 до 18.00 (касса и вход — до 17.00)</p>
                <p style="padding: 0px 20px;"><strong>Понедельник, вторник</strong> — выходные дни.</p>
                <p class="" style="padding: 0px 20px 20px 20px;"><strong>Санитарный день</strong> — последняя среда месяца.</p>
            </div>
                <div class="flex border-bottom" style="justify-content: center; width: 100%; padding: 30px 0px 30px 0px;" >
                    <a href=""><img class="timetable-img" src="../assets/pushkinskaya_karta.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>


</template>

<script>



</script>

<style scoped>
.price-table{
    flex: 1;
}
.timetable p{
  font-size: 24px;
  margin-top: 30px;
  max-width: 415px;
}
.row{
    justify-content: space-between;
}
.cell-first{
    flex: 2;
    padding: 20px;
    border: 1px solid black;
    border-top: 0px;
    font-weight: bold;
    text-align: center;
}
.cell-second{
    flex: 2;
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
}
.cell-third{
    flex: 1;
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
}
.cell{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 19px;
}
@media screen and (max-width : 800px) {
    .price-content{
        flex-direction: column;
        align-items: center;
    }
    .cell{
        padding: 10px;
        font-size: 16px;
    }
    .timetable{
        width: 100%;
        text-align: center;
    }
    
    .timetable p{
            font-size: 20px;
            margin: 20px auto;
        }
}
    @media screen and (max-width : 500px) {
        .timetable p{
            width: 100%;
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
        .text{
            text-align: center;
        }
        .cell{
            padding: 5px;
            font-size: 13px;
        }
        .cell-third{
            flex: none !important;
        }
        .timetable-img{
            max-width: 80%;
        }
    }


</style>