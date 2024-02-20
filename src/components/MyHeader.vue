<template>
<header class="header">
    <div class="container">
        <div class="header__inner">
            <router-link class="logo" to="/">
                <img class="logo__img" src="../assets/Logo.svg" alt="logo">
            </router-link>
            <div class="menu__item burger">
                        <img @click="openMenu" src="../assets/burger.svg">
                    </div>
            <nav class="menu" :class="{'dis-block': menuAble === true}">
                <div class="closeMenu"><img @click="closeMenu" src="../assets/closeButton.svg" alt=""></div>
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link class="menu__link" :class="{orange: '/' === activeRoute}" to="/">Новости</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link class="menu__link" to="/Poster" :class="{orange: '/Poster' === activeRoute}">Афиша</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link class="menu__link" :class="{orange: '/Info' === activeRoute}" to="/Info">Контакты</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link class="menu__link" :class="{orange: '/Price' === activeRoute}" to="/Price">Стоимость</router-link>
                    </li>
                    <li class="menu__item button">
                        <router-link  class="menu__button" to="/Poster">Купить билеты</router-link>
                    </li>
                    <div class="social">
                    <li class="menu__item">
                    <a href="">
                        <img class="menu__link-social" src="../assets/twitter.svg">
                    </a>
                    </li>
                    <li class="menu__item">
                    <a href="">
                        <img class="menu__link-social" src="../assets/instagram.svg">
                    </a>
                    </li>
                    <li class="menu__item">
                    <a href="">
                        <img class="menu__link-social" src="../assets/vk.svg">
                    </a>
                    </li>
                </div>
                </ul>
            </nav>
        </div>  
    </div>
</header>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from "vue-router";
export default {
    components: {
       
    },
    setup(){
        const menuAble = ref('')
        const route = useRoute();
        const activeRoute = computed(() => {
            return route.path;
        })
        const openMenu = () => {
          menuAble.value = true
        }
        const closeMenu = () => {
          menuAble.value = false
        }
        return {
         activeRoute, openMenu, menuAble, closeMenu,
        }
    }
}


</script>

<style scoped>
.closeMenu {
    display: none;
}
.burger{
    display: none !important;
}
.dis-block {
    display: flex !important;
}
.menu__button:hover{
  background-color: #006E4A;
}
.menu__link:hover{
    color: #FF8040;
}
.header__inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px ;
    padding-top: 10px;
    border-bottom: 1px solid black;
}

.menu__list{
    display: flex;
}
.menu__item{
    display: flex;
    align-items: center;

}
.menu__link{
text-transform: uppercase;
padding: 0px 20px;

}
.social{
    margin-left: 10px;
    display: flex;
}
.menu__link-social {
    margin-left: 10px;
    height: 40px;
    width: 40px;
}
.menu__button{
    background-color: #FF8040;
    border: none !important;
    color: white;
    padding: 10px 20px;
}
@media screen and (max-width : 1200px) {
    .menu__link-social{
        display: none;
    }
    .menu__button{
        text-align: center;
        padding: 10px;
    }

}
@media screen and (max-width : 750px) {
    .closeMenu{
        position: absolute;
        top: 30px;
        right: 30px;
        display: block;
    }
    .menu__button{
        display: none;
    }
    .burger{
        display: block !important;
        margin-right: 30px;
    }
    .menu{
        z-index: 999;
        margin: auto;
        position: absolute;
        top: 0; 
        left: 0;
        bottom: 0; 
        right: 0;		  
        background: white;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: none;
    }
    .menu__list{
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    .menu__item{
        margin-top: 20px;
    }
    .menu__link{
        padding: 0px;
    }
}
@media screen and (max-width : 700px) {
    
}

</style>