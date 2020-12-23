export default [
    {
        id: 'take-split',
        image: 'takeSplit.png',
        title: 'Take Split',
        description: 'An application process for new Split drivers.',
        projectImages: [
            'takeSplitQuestions.png',
            'takeSplitUploads.png',
        ],
        longDescription: 'Take Split was a scooter ride share company based out of Los Angeles, CA. They contracted me for a short period of time to build out a new online step-by-step process for new potential Take Split drivers. My work on this was solely from a frontend perspective since the backend architecture was never fully fleshed out due to the company unfortunately shutting down during the early months of the 2020 global pandemic.',
        highlights: [
            {
                title: 'Type',
                content: 'Freelance Project',
            },
            {
                title: 'The Tech',
                content: [
                    'Firebase',
                    'Netlify',
                    'Vue (Gridsome framework)',
                    'Vuelidate',
                    'Vuetify',
                    'Vuex',
                ],
            },
            {
                title: 'Show Me The Code',
                isLink: true,
                content: 'https://github.com/jeffnhorner/split-test-project',
            },
            {
                title: 'View It',
                isLink: true,
                content: 'https://takesplit-become-a-driver.netlify.app/',
            }
        ],
        theNeed: 'Take Split was previously using an online platform to handle all new driver applications. It was a very unorganized admin and the monthly fee was not cheap. This was ultimately the motivation behind the new application flow since Take Split would own the frontend and backend code. As I mentioned above, the backend was never built out, however, in addition to the API layer, the plan was going to build a custom admin so Take Split employees could manage/review the submitted applications.',
        theStack: "The CEO gave me full control over what tech stack I wanted to use in order to quickly build out the frontend. My decision to use Vue (Gridsome to be more specific) was a no brainer since 1) I was passionate about Vue as a reactive Javascript framework, 2) I'm pretty proficient with Vue considering I've used it professionally since 2018, and 3) I could build out the prototype quickly to present to the CEO and his team. I also needed to store the driver's license and resume uploads so I used Firebase since this was a super easy API to implement into the application. Lastly, I had freerange of the design and since I have a bit of design under my belt, this was an exciting project to work on.",
        problemsAndLessons: 'While having the freedom to design and build this application how I chose to was great, it was also a challenge since the CEO wanted a working prototype fleshed out asap. If I would have been given designs, a user flow, and was told, "just build it", it would have taken a lot less time. However, it gave me an opportunity to push myself and build some UI friendly (imo) working software under a strict time limit.',
    },
    {
        id: 'wheels',
        image: 'wheels.png',
        title: 'Wheels',
        description: "A scooter rental checkfout flow for Wheel's users.",
        projectImages: [
            'wheelsGoogle.png',
            'wheelsStripe.png',
        ],
        longDescription: 'Wheels is a scooter rental company based out of Los Angeles, California. They are focused on creating an easy way for people to rent scooters for quick transporation in busy cities. Through a friend of mine, I was hired on as a contractor to build a new rental checkout flow for users.',
        highlights: [
            {
                title: 'Type',
                content: 'Freelance Project',
            },
            {
                title: 'The Tech',
                content: [
                    'Google Maps',
                    'Google Places Autocomplete',
                    'Mixpanel',
                    'Netlify',
                    'Stripe',
                    'Vue (Gridsome framework)',
                    'Vuelidate',
                    'Vuetify',
                    'Vuex',
                ],
            },
            {
                title: 'Show Me The Code',
                isLink: true,
                'content': 'https://github.com/jeffnhorner/wheels-rental',
            },
            {
                title: 'View It',
                isLink: true,
                content: 'https://takesplit-become-a-driver.netlify.app/',
            }
        ],
        theNeed: "Prior to me being hired, the rental checkout flow for user's was a bit dated and not super user friendly. Wheels internal design and user expereience team provided designs and research for the new checkout experience. This new flow was created to help users convert easier, determine eleigible delivery addresses, and processing their payment much more seamlessly.",
        theStack: "The CTO didn't have any preference on the frontend architecture or framework so because I'm proficient in Vue, I decided to use Gridsome. Not to your surprise (most likely), I used Stripe as the payment processing system which is such a simple and elegant way for companies to process payments securely online. Lastly, Wheels wanted to track how users were engaging the application and because they had a decent amount of exposure to Mixpanel, this was the third party analytics software that I configured for them.",
        problemsAndLessons: "The most challenging part of this project was synergizing the frontend application with the backend server since the Wheels internal backend team built the GraphQL server. When it came to putting it all together, there was a decent amount of re-write needed based upon how the data was being served to the frontend and the complex user states that were available after the payment was processed. The user state (Wheel's membership plans), had quite a few different possibilities. All in all, there was a lot of growth in this project and I thoroughly enjoyed getting my feet wet with some new tech.",
    },
    {
        id: 'cpap',
        homepageImage: 'cpap.png',
        image: 'cpapBanner.png',
        title: 'CPAP.com',
        description: 'This has been my full-time gig since Fall of 2018 and man has it been an exciting journey. When I first started, the e-commerce application was a ~15 year old frankenstein legacy system that desparately needed some updating. Since I started, we built a new web application using modern technologies in a rather unqiue way…',
        callToActionText: 'Read My Experience',
        projectImages: [
            'cpapPlp.png',
            'cpapCheckout.png',
        ],
        longDescription: "This has been my full-time gig since Fall of 2018 and man has it been an exciting journey. When I first started, the e-commerce application was a ~15 year old frankenstein legacy system that desparately needed some updating. Since I started, we built a new web application using modern technologies in a rather unqiue way. CPAP.com has been in business for close to 20 years. When I first came on, the e-commerce-application we worked on was a monolithic application that housed both the frontend and the backend. This legacy system was tied to other homebrewed systems such as a Product Management System (PMS), Content Management System (CMS), Warehouse Management System (WMS), and a few others. It was (and is) fragile and all of the systems were very dependent on each other, especially the client-facing application. About one month after I started, that's when all the fun began...",
        highlights: [
            {
                title: 'Type',
                content: 'Full-time Job',
            },
            {
                title: "All the Tech I've Worked With",
                content: [
                    'Apollo',
                    'GraphQL',
                    'Jest',
                    'Kentico (headless CMS)',
                    'Laravel',
                    'Mageno (headless PMS)',
                    'Nuxt',
                    'PHP',
                    'Twig',
                    'Vue',
                    'Vuetify',
                    'Vuelidate',
                    'Vuex',
                    'Webpack',
                ],
            },
            {
                title: 'View It',
                isLink: true,
                content: 'https://cpap.com',
            }
        ],
        theSpaDescription: "The Technology team decided it was time to take advantage of more modern web technologies including a Single Page Application with a Microservice (REST API) layer. This would give us a more performant application and let us keep the code base modular by separating client-side and server-side logic. At the same time, we also adopted Agile so we had to think of creative solutions in order to launch a Single Page Application before re-writing the entire system to the new SPA/Microservice architecture. So what was the plan? For the initial launch project, we only re-wrote the header and footer to use the new architecture and kept all of the legacy body content. This would let us work in sprints and overtime, slowly transition each chunk of logic from the legacy system to the new architecture. Not to get too deep into the magic but we essentially used the new API layer to inject the legacy body content into the SPA via an API request.<br /><br />I wish I could remember how many sprints it took us to complete this task but all I can remember is working long hours with the team. I believe it only took a month or two but after some extensive UAT, the new architecture was (and is) live at <a href=https://www.cpap.com>CPAP.com</a>. From then until Summer of 2020, we re-wrote a large majority of the application. However, now, we've been working on an entirely new application that has a beta launch in early 2021. I can't share too much about it but it's a massive re-write and architectural shift that will positively affect all systems at CPAP.com.",
        notableWork: "It's been a heck of an experience working on some really big features with some incredibly talented Software Engineers. I've learned an insane amount from everyone but most importantly, my lead has made the largest impact on my skillset since joining the team. He's one of those guys that has an amazing work ethic and deeply understands the technologies we use.<br /><br /> Here are a couple of my notable contributions are: increased our SPA unit test coverage to ~70%, implemented Apple Pay to work within all of our systems that interact with cpap.com, wrote a large portion of the window history state logic on our new product listing pages, re-wrote the CSR instant product search logic for the new architecture, re-wrote the mobile header for the inital project launch, implemented bread financing within the new architecture, writing a ridiculously advance component (that I never want to see again lol) that gives the marketing team full control over our homepage banner, and implemented enhanced e-commerce analytics for Google Analytics.<br /><br />I worked on so much more than just this and there's a lot more I could talk about but I think I'll leave it here for now.",
        problemsAndLessons: "Burn out is real. During and after the inital SPA launched, the entire Software team was cranking out so much work from re-writes to bugs that went well over the mandatory 40 hour work week. Being a self-taught Developer, and I don't know why I thought this, but I really believe 'burn out' was a real thing since my juices were always pumping with passion (not that non self-taught Devs don't feel this way). Boy was I wrong. However, once management noticed this, we scaled approrpiate and create more realistic expectations which was a great lesson learned.",
    },
]