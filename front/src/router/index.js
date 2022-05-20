
import Vue from "vue";
import VueRouter from "vue-router";
//import NProgress from "nprogress";

Vue.use(VueRouter);

import routes from './router';

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


 // Se caso não for uma página inicial de carregamento
//router.beforeResolve((to, from, next) => {
 

 //if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    
 // }
 // next();
//});


// // Lógica inerente ao realizar o 'Log out' remover o token no local Storage:
router.beforeEach((to) => {
  if(to.name == 'login' ){
    console.log( !localStorage.getItem("jwt") );
  }
  // if (to.matched.some(record => record.meta.requireAuth)) { 
   
  //   if (localStorage.getItem("jwt") == null) {
  //     next({
  //       path: "/"
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }

});

// router.afterEach((to, from) => {
//   // Completando a animação da rota no NProgress
//   NProgress.done();
// });

export default router;
