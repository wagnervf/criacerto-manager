import Vue from "vue";
import VueRouter from "vue-router";
//import NProgress from "nprogress";

Vue.use(VueRouter);

import routes from "./router";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(next);
//  console.log(localStorage.getItem("userLogged"))

  if (to.name !== "login" && !localStorage.getItem("userLogged")) {

   // let storePermissions = store.state.permissions;
  //  let includesPermissions;

      for (const key in to.meta.permission) {

        console.log(key)
        // for (const chave in storePermissions) {
        //     if ((storePermissions[chave]).includes(to.meta.permission[key])) {
        //     includesPermissions = true;
        //  }
       // }
      }


   next({
      name: "login",
    });
  } else {
   next();
  }

  
});



//console.log(from);
// if (to.matched.some(record => record.meta.requireAuth)) {

//});

// router.afterEach((to, from) => {
//   // Completando a animação da rota no NProgress
//   NProgress.done();
// });

export default router;
