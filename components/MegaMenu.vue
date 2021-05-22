<template>
    <div>
      <nav class="bg-gradient-to-r from-green-400 to-blue-600">
        <div class="max-w-full mx-auto px-16 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0 space-x-4">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                  alt="Workflow logo"/>
              </div>
              <div class="hidden md:block justify-items-center">
                <div class="ml-10 block space-x-8 place-items-stretch">
                  <a href="#" class="px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
                  <a href="#" class="px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
                  <a href="#" class="px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
                  <a href="#" class="px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
                  <a href="#" class="px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name:"MegaMenu",
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>