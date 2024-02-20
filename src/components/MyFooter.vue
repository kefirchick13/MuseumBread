<template>
    <div class="footer flex">
        <p class="cell-fir">© 2015-2023,<br> Санкт-Петербургский музей Хлеба</p>
        <p class="cell-sec">Создание и поддержка сайта:<br> ИП Иванов Савелий Сергеевич</p>
        <div class="cell-th"><img src="../assets/Logo.svg" alt=""></div>
    </div>
</template>

<script>
export default{
    setup(){

        return{
            
        }
    }
}


</script>

<style scoped>
.footer {
    margin-top: 50px;
    border-top: 1px solid black;
    min-height: 170px;
    display: flex;
    align-items: center;
}
p{
    font-size: 18px;
}
.cell-fir, .cell-sec{
    flex: 2;
    padding: 20px;
    width: 100%;
    border-right: 1px solid black;
}
.cell-th{
    flex: 1;
    text-align: center;
    width: 100%;
}
.cell-th img{
    width: 80%;
}
@media screen and (max-width : 800px) {
    .cell-fir, .cell-sec{
        padding: 10px;
        flex: 1;
    }
    p{
        font-size: 14px;
    }
}

</style>