<template>
    <nav class="block md:flex md:flex-wrap items-center justify-between rounded-xl w-full md:px-2 py-3 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 border-blue-400 border-4">
        <div class="block py-2 px-4 mx-auto justify-end lg:flex lg:flex-inline lg:items-center justify-between border-blue-400">
            <div class="w-full relative flex justify-between pl-12 md:pl-8 lg:w-auto lg:static lg:block lg:justify-start">
                <img src="../assets/Logo.png" class="h-16 w-24 md:h-24 md:w-32 inline-block">
                <button 
                    class="cursor-pointer static text-xl leading-none px-3 py-1 border border-solid border-transparent inline-block md:hidden outline-none focus:outline-none" 
                    type="button"
                    v-on:click="toggleNavbar()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div 
                class="lg:flex lg:flex-grow justify-items-start bg-white lg:bg-transparent lg:shadow-none"
                v-bind:class="{'hidden': !showMenu, 'flex': showMenu}">
       
                <el-input placeholder="Tìm sản phẩm" class="bg-white border-blue-400 rounded-lg hidden lg:inline-block lg:px-8 lg:py-4 xl:px-16 "></el-input>
              
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto md:pl-32">
                    <li class="flex items-center">
                        <a class="lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            <span class="lg:hidden inline-flex ml-2">Đăng nhập</span>
                            <p class="ml-2 hidden lg:flex text-sm ">Đăng nhập</p>
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            <span class="lg:hidden inline-block ml-2">Đăng nhập</span>
                            <p class="ml-2 hidden lg:flex text-sm ">Đăng nhập</p>
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            <span class="lg:hidden inline-block ml-2">Đăng nhập</span>
                            <p class="ml-2 hidden lg:flex text-sm ">Đăng nhập</p>
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            <span class="lg:hidden inline-flex ml-2">Đăng nhập</span>
                            <p class="ml-2 hidden lg:flex text-sm ">Đăng nhập</p>
                        </a>
                    </li>
                </ul>
            
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>