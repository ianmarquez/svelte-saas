<div class="flex flex-col md:flex-row w-full bg-transparent h-[calc(100vh-3.5rem)]">
	<div
		class="relative md:h-full h-1/3 md:w-1/2 flex flex-col justify-center items-center text-center"
	>
		<div
			class="bg-cover absolute top-0 left-0 bottom-0 right-0 -z-[1] opacity-80"
			style="background-image:
        url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<h1 class="text-white max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl z-[1]">
			Start chatting with your <span class="text-blue-600">documents</span>.
		</h1>
	</div>
	<div
		class="md:w-1/2 h-2/3 w-full flex flex-col gap-32 items-center md:h-full justify-center overflow-y-scroll md:px-16"
	>
		<slot />
	</div>
</div>
