<b>tldr; I have documented how to use ReactJS, SCSS, and GitHub to quickly build and host your portfolio website.</b>

I believe that a portfolio website is an incredible way to showcase your skills and creativity. So to get inspiration for my portfolio I did what most people would do, started digging through different programming subreddits 😛

After looking at countless portfolios, I found some neat examples. However, as I started building my website, I realized that there were so many aspects and requirements that I didn't plan beforehand:
- Where to host the website (for free)?
- How to make it responsive with different screen sizes?
- How to organize information?
- How to make it self-updating (partially)?
- How to add images to my project?

Most importantly how to organize the content so you could not only build the website but extend it as you add new and exciting projects to your list of accomplishments 🚀

This motivated me to document my website building process from start to finish and hopefully, it'll give you some ideas to start your own portfolio website. 

# Pre-requisites
- GitHub account
- CSS experience as it'll help you to grasp SCSS faster
- ReactJs knowledge
- Dropbox account for image hosting

If you need help with any of the above, I have linked some resources and video tutorials [below](#resources) 🤝

## Table Of Contents
[Step 1: Setup React Project](#step1)
[Step 2: Setup GitHub Repository](#step2)
[Step 3: Setup dropbox for hosting](#step3)
[Step 4: Organize Components](#step4)
[Step 5: Styling with SASS](#step5)
[Step 6: Deploy for free](#step6)

<a name="step1"></a>
## Step 1: Setup React Project
Run the following command to create-react-app:
```npx create-react-app portfolio```

This will setup the complete react project with all the required files. To run your development server, run the following command:

```npm run start```

Usually, your server opens a tab on your default browser and runs the application on http://localhost:3000

Awesome! Now lets set up our repository so we can use GitHub pages to host our website and keep our work someplace safe 🔒

<a name="step2"></a>
## Step 2: Setup GitHub Repository
Setting up the repository is pretty straight forward. Make sure you flag the repository as `public` since it'll be needed for hosting.

Follow this [link](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo) for setup.

Now link it to the React project that we set up locally. Using terminal, `cd` into the project and enter: 
`git init`

Now, get the link for your newly created git repository and enter the following command (replace the URL with your repository URL):

`git remote add origin git@github.com:username/new_repo`

This will connect your local portfolio instance to a remote repository. At this point, you can start pushing your code and we'll utilize the `gh-pages` npm package to build and deploy the portfolio website on GitHub pages.

If you have any questions, please feel free to comment below and we can figure out any issues 🙂

<a name="step4"></a>
## Step 3: Setup Dropbox for hosting images
You can totally skip this step if you are planning on using a different method for hosting images. I was trying to find something free and stumbled upon an efficient way of using dropbox for creating a publicly accessible URL for my images.

Here are the steps:
* Log into your dropbox account
* Create a new folder
* Now upload your images in this folder

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/v90jr12nbtmdv73c4bbe.png)

* Click on the ellipsis as shown in the image and click share:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/059vj75teab9haj3lq3n.png)

* A pop-up will appear with a sharing link at the bottom. Leave it to default options ('anyone can view') and copy the sharable link.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3qlcoi2otuja4krz7uul.png)

* We're almost there, now if you enter this link in a new tab, you'll notice that the image is opened in dropbox viewer but we need a raw image that could be used on the website.

`https://www.dropbox.com/s/shdjsdhjsdjshdsjh/0.jpeg?dl=0`

In the shareable URL replace `?dl=0` with `?raw=1` and visit the link again. You'll notice its actual raw image being displayed! 💃

You can upload as many images and use their links in the `<img>` tag of your react application to render images in your portfolio!

<a name="step4"></a>
## Step 4: Organize Components
I used the following directory layout to organize the components and styles:

```
src
│
└───components
└───constants
└───context
└───pages
└───styles
```

* components: This directory contains components specific to each page/ view

* constant: The information that remains somewhat similar unless small changes are required is placed here. For example, I placed constant information for `experience` in the following format:
```
export const EXPERIENCE = [
    {
        "workTitle": "",
        "description": [],
        "timeline": "",
        "image": "",
        "company": {
            "name": "",
            "link": ""
        }
    },
    {
        "workTitle": "",
        "description": [],
        "timeline": "",
        "image": "",
        "company": {
            "name": "",
            "link": ""
        }
    }
]
```
I organized data into JSON to render this information easily in the presentational components.

* context: All the context files were organized in this directory. One of the main reasons I used React context hooks is to prevent the need for passing information (props) from parent to child to grandchild to great-grandchild..... 🥱😴
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * I used to pass information from one component to the next when was a rookie, but this made data handling in my projects a nightmare. Instead, I have now started using context hooks. For a formal explanation follow this [link](https://reactjs.org/docs/context.html)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Now that you have read about context and how it's used, I'll show you how I used it to make my program self-updating in the [next](#selfupdating) section.

* pages: I used this directory to organize main views of the website - such as projects, experience, contact me, etc. So this is a large container that holds presentational components.

* styles: Since I used SCSS for styling, I created different files that hold information to style the functional components.

<a name="step4"></a>
### Step 4: Styling with SASS 💁‍♀️💁‍♂️
**Very Important: Always design for mobile-first, You'll thank yourself later!**

The reason why I decided to switch to SASS from CSS:
* It became very difficult to manage and organize the CSS code as the project size increased
* I was failing the DRY (Don't Repeat Yourself) principle as the number of components increased since they used the same CSS classes with minor changes.

`SASS` is a preprocessor scripting language that is compiled and interpreted into Cascading stylesheets. Here are the benefits that I found:

* I was able to split the CSS code into more meaningful files and import them into a single index.scss file
* I used variables to define values for colors, font-size etc. in the index.scss and used it in other files. This helped me to quickly make changes since there was a single point of change now.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vo5cu8x7a6tstfg2jntd.png)

* Best part, It forced me to plan out how to style my components and follow the DRY principle. For example, I used _Layout.scss, _Card.scss where I defined the common layout which was used in different views.

I would highly recommend reading the [documentation](https://sass-lang.com/documentation/syntax)

<a name="step5"></a>
### Step 5: Deploy our Portfolio
I was finding a way to deploy my website to GitHub pages and came across this [post](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) written by Ibrahim Ragab.

Hence, I used the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package to deploy the application on GitHub.

** Important: I created my website without react-routers, so if you are planning to add different pages, you might need to make changes to `gh-pages` configuration accordingly **

1. Install the gh-pages npm package as a dev dependency:
`npm install --save-dev gh-pages`
2. Update your scripts in package.json to add two more key-value pairs: `predeploy and deploy`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/v8kwfzjuqovdpgn3v58h.png)

3. Test out if our react-app deploys as expected.
`npm run deploy`

This will build our react application and deploy it on the public GitHub repository under gh-pages branch.

4. Now go to your remote repository and go to settings and scroll down all the way to ** GitHub Pages ** section. You will see the source dropdown. Select the dropdown and choose `gh-pages` branch to serve the latest built code to your GitHub pages.

If you go to the link, the website should be visible. Now, you can work on your website locally and redeploy it to add new updates. 

** Make sure you push your work to one of the other branches **

<a name="selfupdating"></a>
### How to make your website self-updating?
I am sure as you learn new skills and create new and exciting projects, You would want to update your website to showcase these projects. What if I told you, your website will automatically update itself to show your new projects and articles 👽👽

Here's how I did it for mine:

### Showcasing GitHub projects:
GitHub has (API)[https://developer.github.com/v3/] that can be used to extract different information about our public repositories (in JSON format). I created a ProjectContext file that accesses the `projects` endpoint using a GET Axios request. Then I passed down this information via the ProjectProvider. The functional component takes this data, loop through it and display is nicely using SCSS style: 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ls5g5ji145kwvagt4jtf.png)

### Showcasing Dev.To Articles
Same as GitHub API, DEV.to also has an API that can be used to brief details about an article. I created another context file and provided information to my functional components. 

<a name="resources"></a>
## Resources
* [SASS tutorial](https://www.youtube.com/watch?v=Zz6eOVaaelI)
* [React tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2968s)
* [React useContext hook](https://www.youtube.com/watch?v=5LrDIWkK_Bc)
* [How to use dev.to API](https://dev.to/nataliedeweerd/how-to-use-the-dev-to-api-5gl3)
* [GitHub API](https://developer.github.com/v3/)
