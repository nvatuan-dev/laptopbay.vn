<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-900 mb-3">
        <div class="container px-4 mx-auto flex flex-inline items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <img src="../assets/Logo.png" class="w-16 h-16 flex-none inline-block">
                <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                    <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
            </div>
            <div class="lg:flex flex-grow justify-start items-center" id="example-navbar-warning">
                <ul class="flex flex-inline lg:flex-row list-none mr-auto">
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75" href="#pablo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
                                <line x1="13" y1="8" x2="15" y2="8"></line>
                                <line x1="13" y1="12" x2="15" y2="12"></line>
                            </svg>
                            <i class="fab fa-twitter text-lg leading-lg text-gray-400 opacity-75" /> <span class="ml-2">Đăng ký</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75" href="#pablo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            <i class="fab fa-twitter text-lg leading-lg text-gray-400 opacity-75" /> <span class="ml-2">Đăng nhập</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75" href="#pablo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-money" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                                <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                                <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
                                <path d="M12 17v1m0 -8v1"></path>
                            </svg>
                            <span class="ml-2">Khuyến mãi</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75" href="#pablo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="6" cy="19" r="2"></circle>
                                <circle cx="17" cy="19" r="2"></circle>
                                <path d="M17 17h-11v-14h-2"></path>
                                <path d="M6 5l14 1l-1 7h-13"></path>
                            </svg>
                            <span class="ml-2">Giỏ hàng</span>
                        </a>
                    </li>
                </ul>
                <div class="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-center lg:ml-auto">
                    <div class="flex">
                        <span class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-blue-600 rounded-full text-sm bg-white items-center rounded-r-none pb-2 pl-2 py-1 text-gray-800 border-r-0 placeholder-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                                <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </span>
                    </div>
                    <input type="text" class="px-2 py-1 h-8 border border-solid  border-blue-600 rounded-full text-sm leading-snug text-gray-800 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-400" placeholder="Bạn đang tìm sản phẩm gì?" />
                </div>
            </div>
        </div>
    </nav>
</template>