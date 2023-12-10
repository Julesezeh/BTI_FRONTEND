import "./navbarstyles.css"
import logo from  "../assets/smaller_logo.png"
export default function NavBar () {
    return (
        <div class="flex flex-wrap top-0 sm:md-0 place-items-center sticky  ">
		<section >
		<nav class="flex justify-between bg-gray-950 text-white w-[100vw] ">
			<div class="px-5 xl:px-12 py-2 flex w-full items-center">
			<a class="text-3xl font-bold font-heading " href="#">
				<img src={logo} alt="Logo"/>
			</a>
			<ul class="hidden md:flex px-4 mx-auto font-semibold font-heading font-mono  space-x-12">
				<li ><a class="hover:text-gray-200 hover:text-yellow-200 link link-underline link-underline-black px-4 py-3" href="#">Home</a></li>
				<li ><a class="hover:text-gray-200 hover:text-yellow-200 link link-underline link-underline-black px-4 py-3" href="#">Courses</a></li>
				<li><a class="hover:text-gray-200 hover:text-yellow-200 link link-underline link-underline-black px-4 py-3" href="#">Collections</a></li>
				<li><a class="hover:text-gray-200 hover:text-yellow-200 link link-underline link-underline-black px-4 py-3" href="#">About Us</a></li>
			</ul>
			<div class="hidden xl:flex lg:flex items-center space-x-5 items-center">
				<a class="hover:text-gray-200" href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
				</svg>
				</a>
				<a class="flex items-center hover:text-gray-200" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				<span class="flex absolute -mt-1 ml-4">
					<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">
					</span>
					</span>
				</a>
				<a class="flex items-center hover:text-gray-200" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</a>
				
			</div>
			</div>
			<a class="xl:hidden lg:hidden flex mr-6 items-center" href="#">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
			<span class="flex absolute -mt-0 ml-4">
				<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">
				</span>
			</span>
			</a>
			<button class="navbar-burger self-center mr-12 xl:hidden lg:hidden md:hidden" data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false" >
				<span class="sr-only">Open main menu</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</nav>
		<div class="lg:hidden xl:hidden md:hidden hidden font-mono  top-0 mt-0 w-full duration-500 transition-all " id="navbar-default">
			<ul class="font-medium flex flex-col p-4 md:p-0 mt-0 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-950 md:dark:bg-gray-950 dark:border-gray-700">
				<li>
				  <a aria-current="page" href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:hover:text-yellow-400 dark:hover:bg-gray-700">Home</a>
				</li>
				<li>
				  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">Courses</a>
				</li>
				<li>
				  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">Collections</a>
				</li>
				<li>
				  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">About us</a>
				</li>
				<li>
					<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">REGISTER</a>
				  </li>
  
			</ul>			
		</div>
	
	    </section>
	</div>
    );
}