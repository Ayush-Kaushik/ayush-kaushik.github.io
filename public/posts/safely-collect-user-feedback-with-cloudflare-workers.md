# Safely Collect User Feedback with Cloudflare Workers + Slack

TL;DR → Don’t expose API keys in frontend. Instead, use serverless functions (Cloudflare Workers) to safely handle user feedback and add a layer of security against bad actors.

## So... I Revisited My Portfolio 
You know that feeling when you revisit your old projects and wonder what you were thinking? Yeah, I had that moment while reviewing my portfolio site ([React + GitHub = Professional Portfolio Website](https://dev.to/ayushkaushik/react-github-awesome-portfolio-website-3gi))

Upon reviewing my existing work, I discovered a glaring security risk! I injected Firebase API keys into the react app to push user feedback directly into Firestore... with **no read and write restrictions**. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mjbfx4pgxasds18lbb0s.jpg)

This meant anyone can read/ write to my FireStore without restriction. Moreover, I wasn’t really notified when new feedback was submitted, so I missed out on important messages.

My goals were to make following improvements:
- Remove security defect and receive notifications.
- The new solution must be low cost/ free since this is a hobby project.

-----

## Let's get to work 👷‍♂️🏗️

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2njn9km8kar8lcxmkd2l.gif)

### Remove the vulnerable code
I ripped out the `Contact me` section. That's where I initialized Firebase app instance and exposed API keys via good old `REACT_APP` route to a vulnerable Firestore instance. I also deleted the firestore project so the credentials embedded into my code cannot be misused.

> Key learning: Never inject sensitive data into frontend code

### Explore options for Serverless functions
To securely handle user feedback without exposing API keys, I explored  [serverless functions](https://blog.hubspot.com/website/serverless-functions#what-is-a-serverless-function).

Since this is a hobby project, I wanted a free solution. I started exploring different options and stumbled upon [CloudFlare Workers](https://developers.cloudflare.com/workers/) which offers up to 1000,000 invocations per day [source](https://developers.cloudflare.com/workers/platform/pricing/).

Honestly, if my portfolio form ever reaches that many feedback or collaboration requests, I’d consider it a great problem to have — and only then would I think about paying for extra capacity. 💵💵 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wnipr337oz5i58c1fny2.jpg)

> **Or if a bad actor decides to run a Denial of Service attack on my function then I'll use up my daily request limit and will have to wait for the limit to reset.

### Workflow

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gsqxaler2ure4srorywk.png)

So, the game plan is, the `Contact me` form submission invokes a serverless function that receives request, verifies the data and perform the required action. Thus, the sensitive keys remain on the server-side only, not visible to the user, making them much harder to compromise.

### Cloudflare Worker Setup
> [Full guide](https://developers.cloudflare.com/workers/development-testing/)

> You can also checkout my code for contact-worker: [Contact Worker Source Code](https://github.com/Ayush-Kaushik/portfolio-backend/tree/main/Cloudflare/contact-worker)

For testing, I followed this article to perform behavioural tests on my function locally before I could really deploy it for the world to use: [Behavioural tests with vitest](https://blog.cloudflare.com/workers-vitest-integration/)

To deploy the worker, I used GitHub workflows and passed the required keys via secrets.

> You can checkout my workflow file: [GitHub Workflow](https://github.com/Ayush-Kaushik/portfolio-backend/blob/main/.github/workflows/deploy-workers.yml)

With the backend ready and deployed, you can modify the Frontend to send requests to the function.

> ⚠️ Ensure your serverless function handles preflight requests. Without this, CORS may block requests from the browser. You can check how I handled it here: [CORS Support](https://github.com/Ayush-Kaushik/portfolio-backend/blob/fa6ce246a4497ae7d250dc54e891369cc90d6b4c/Cloudflare/contact-worker/src/index.ts#L21)

### Pass all the credentials via Dashboard as secret
Go to Cloudflare Dashboard > Compute Workers > Workers and Pages > Select the worker you deployed > Settings > Variables and Secrets

Define all the secrets here.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pyofvqjug1mprdft786l.png)

> The benefit of defining secrets instead of environment variables is it doesn't get overwritten when worker is redeployed via GitHub workflow. The wrangler.toml file doesn't take precedence.

### Setup Slack bot and Channel
To relay message from worker to slack, we will need a slack bot. There are tons of tutorials and videos online about the setup. Here is the one I followed: [Send Message to Slack with a Node.js Script](https://www.youtube.com/watch?v=SbUv1nCS7a0)

> Again, you can reference my worker implementation to understand how I enabled it.

---

### Result

#### Front end contact form
The submission process remains the same. The difference lies in how the request from frontend is handled and responded to.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3e85s2c4sqd84u42p4a2.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t21auqb3fz4efru4qdvc.png)

#### Message received in Slack channel
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zahgsieb8bncit3v8scq.png)

---

## Benefits of this approach
- With Cloudflare workers, I have increased visibility into where the requests are originating from so I can promptly respond to bad actors and block them if required.
- I have more control over kind of data I accept, any malicious data can be stopped at worker before relaying it to Slack as a message.
- Credentials are stored as secrets so bad actors will have a hard-time deducing them.

## Future improvements
- Rate limiting is a paid feature provided by Cloudflare so I will need added protection against DDOS attacks. I will come up with my own rate limiting design to handle such cases (if they occur).

Hope this article gave you some insights into security practice and technologies used! 

Feel free to comment below if you have more ideas on improving my strategy and feedback 😊😊