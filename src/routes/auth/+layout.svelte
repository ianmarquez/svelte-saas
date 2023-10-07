<div class="flex flex-col md:flex-row w-full bg-transparent h-[calc(100vh-3.5rem)]">
	<div
		class="opacity-80 h-1/3 md:w-1/2 md:h-full flex-grow w-full bg-black bg-cover"
		style="
    background-image:
      url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
	/>
	<div
		class="md:w-1/2 h-2/3 w-full flex flex-col gap-32 items-center md:h-full justify-center overflow-y-scroll md:px-16"
	>
		<slot />
	</div>
</div>
