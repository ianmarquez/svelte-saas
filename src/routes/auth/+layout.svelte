<div
	class="flex flex-col md:flex-row w-full top-0 bottom-0 fixed left-0 right-0 overflow-scroll bg-white grainy"
>
	<div
		class="h-1/3 md:w-1/2 md:h-full w-full bg-black inset-0 bg-cover"
		style="
    background-image:
      url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
	/>
	<div class="md:w-1/2 h-2/3 w-full flex flex-row items-center justify-center md:h-full md:px-16">
		<slot />
	</div>
</div>
