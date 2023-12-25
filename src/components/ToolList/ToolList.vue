<script setup>

import ToolListItem from '@/components/ToolList/ToolListItem.vue';
import ToolListContainer from '@/components/ToolList/ToolListContainer.vue';

const toolList = [
    {
        name: 'Vs Code',
        image: '/icons/tools/vscode.png',
        desc: 'Visual Studio Code (VS Code) is a lightweight, powerful source code editor with excellent features, extensions, and robust support for various languages.'
    },
    {
        name: 'Figma',
        image: '/icons/tools/figma.png',
        desc: 'Figma is a collaborative design platform enabling teams to create, prototype, and collaborate on digital designs in real-time. Its cloud-based nature fosters seamless collaboration, making design processes efficient.'
    },
    {
        name: 'Dribble',
        image: '/icons/tools/dribbble.png',
        desc: 'Dribbble is a creative platform where designers showcase their work, gain inspiration, and connect. It is a vibrant community fostering collaboration, innovation, and design excellence.'
    },
    {
        name: 'Docker',
        image: '/icons/tools/docker.png',
        desc: 'Docker is a platform for developing, shipping, and running applications in containers. It provides a consistent environment, simplifying deployment across different systems and enhancing scalability and efficiency in software development.'
    },
    {
        name: 'Notion',
        image: '/icons/tools/notion.png',
        desc: 'Notion is an all-in-one workspace that combines note-taking, task management, and collaboration. It features a versatile and intuitive interface, making it a popular choice for personal and team productivity.'
    },
]


const languagesList = [
    {
        name: 'Python',
        image: '/icons/langs/py.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'JavaScript',
        image: '/icons/langs/js.png',
        desc: 'avaScript (JS) is a dynamic, versatile scripting language primarily used for web development. It enables interactive and dynamic web pages, offering client-side functionality and seamless integration with HTML and CSS.'    
    },
    {
        name: 'C',
        image: '/icons/langs/c.png',
        desc: 'C is a powerful and widely-used programming language known for its efficiency and low-level control. It is essential in system programming, embedded systems, and software development, providing direct memory manipulation capabilities.'    
    },
    {
        name: 'Dart',
        image: '/icons/langs/dart.png',
        desc: 'Dart is a client-optimized programming language for building web, mobile, and desktop apps. Flutter, a UI toolkit by Google, utilizes Dart to create natively compiled, cross-platform applications with expressive and flexible interfaces.'    
    },
]


const frameworks = [
    {
        name: 'Django',
        image: '/icons/frameworks/dj.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'Vue Js',
        image: '/icons/frameworks/vue.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'FastAPI',
        image: '/icons/frameworks/fastapi.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'Nuxt Js',
        image: '/icons/frameworks/nuxt.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'flutter',
        image: '/icons/frameworks/flutter.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
    {
        name: 'TailwindCss',
        image: '/icons/frameworks/tailwind.png',
        desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. Widely used in web development, data science, artificial intelligence, and automation, Python promotes efficient and elegant coding.'    
    },
]

</script>
<template>
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

      <ToolListContainer :items="toolList" itemsTitle="Favourite Tools." itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎"/>
      <ToolListContainer :items="languagesList" itemsTitle="Programming Languages" itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎"/>
      <ToolListContainer :items="frameworks" itemsTitle="Frameworks" itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎" />

  </div>
</section>
</template>