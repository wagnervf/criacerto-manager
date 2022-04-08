

//import VueJwtDecode from "vue-jwt-decode";

import Menu from "../../assets/json/listParametros.json";
import breadCrumbs from "../../components/breadCrumbs"

  export default {
    components:{breadCrumbs},
   props: {
    
   },
    data: () => ({
      items: Menu,
      outer: [
        {
          id: 1,
          name: 'Parâmentro do Cria Certo',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      search: null,
      meta: null
     
    }),
    


    computed: {

      currentRouteName() {
        console.log(this.$router)
        return this.$route.name;
      },

      // compareTitle(){
      //   //this.meta = breadCrumbs;
      //   if (typeof this.$route.meta.breadCrumb === "function") {
      //     this.meta = this.$route.meta.breadCrumb.call(this, this.$route);
      //   }
      //   console.log(this.meta);
      //   //return meta == this.$route.name
      // },
     

      breadCrumbs() {
        if (typeof this.$route.meta.breadCrumb === "function") {
          return this.$route.meta.breadCrumb.call(this, this.$route);
        }
        return this.$route.meta.breadCrumb;
      },
    
    },
    
    created() {
      this.getUser();
      console.log(this.$route.name);
    },
  
    methods: {
      getUser() {
      //  let token = localStorage.getItem("jwt");
      //  let tokenDecoded = VueJwtDecode.decode(token);
       // this.user = tokenDecoded;
      },
      logOutUser() {
        localStorage.removeItem("jwt");
        this.$router.push("/");
      }
    },
  }


