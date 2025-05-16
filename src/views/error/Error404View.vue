<template>
    <main
        class="min-h-full mx-auto flex w-full mt-20 max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"
    >
        <div class="flex flex-shrink-0 justify-center">
            <router-link :to="{ name: 'root' }" class="inline-flex" />
        </div>
        <div class="py-16">
            <div class="text-center">
                <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    ¡Ups!
                </h1>
                <p class="mt-2 text-base text-gray-500">
                    Lo sentimos, la página que estás buscando, no está disponible.
                </p>
                <div class="mt-6">
                    <router-link
                        :to="{ name: 'root' }"
                        class="text-base font-medium text-primary-400 hover:text-primary-300"
                    >
                        Regresar
                        <span aria-hidden="true"> &rarr;</span>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>
