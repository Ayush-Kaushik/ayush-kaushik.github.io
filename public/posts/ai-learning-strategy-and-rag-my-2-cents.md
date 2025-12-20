# AI Learning Strategy and RAG (my 2 cents)

## Initial Roadblocks when Learning about AI

While I began learning about Artificial Intelligence and its applications, I realized that it heavily relied on statistics and mathematics knowledge. I initially followed bottom-up approach by learning the basics first and then built my way up to more complex concepts. But I kept getting stuck in the weeds since one concept leveraged another concept. I couldn't retain all the information and connect the dots. In the end, I just ended up reading a bunch of research papers and watched countless YouTube videos without really absorbing the concepts.

So, I had to think differently. In the past, every-time I learned a new concept, I used to either document it as an article or build a small project to enforce my learning. But where do I even start with AI? 

While figuring out this answer, I was also making some security upgrades to my portfolio website. I started reviewing the content from a third person perspective and wondered if someone will be able to read through all of my content presented in the website and retain all the information. That’s when I realized that I needed to provide another means of interaction with my website. Low and behold, that's when I thought of a smart chat-bot. Personally, I have used chat-bots in the past and always begged them to transfer me to a real human so I knew the least this bot could do was not be boring and provide coherent answers.

So, I looked at ChatGPT and wondered, it knows everything about everything. What if I built my own AyushGPT which will be trained exclusively on my content (my learning, projects and articles) and answer questions about me. Well, I think it is possible and I have seen people do it in the past so I started looking into models and how they are built, trained and fine-tuned. But again the barrier to entry was the process being costly and resource intensive. So I started looking at other means and this is when I came across RAG (Retrieval Augmented Generation).

The name sounded pretty intimidating to me at first but then I used top-down approach. I started by treating the entire concept as a BlackBox and then peeled it layer by layer. I made sure to understand each stage so thoroughly that I could even to explain it to my dog (of course, he already knows way more about RAGs). I digress, but let me explain RAG in most non-technical way possible.

Suppose your LLM is like a Genie which answers any questions you have because it has been trained on the knowledge of the entire world. But its power is also its biggest hurdle. If I go ahead and ask a genie, “What CI-CD tool is Ayush proficient at?”, then it will produce an answer but it may not be relevant to me. 

I am sure there must be thousands of of Ayush out there which the genie knows about. Maybe, the poor fellow was trained on some other Ayush’s information. And it’ll most likely give incorrect answer (or hallucinate). So how do I let Genie know about me? This is where I gave the fellow a potion called RAG.

Here comes the technical definition:

RAG (Retrieval Augmentation Generation) is a tool that provides context to an LLM by querying a database of related information based on prompt. 

In simpler terms, when I query an LLM, its not going in blind when answering my question, it actually receives accompanying information related to me (called context) and then answers the question in a more relevant manner. 

So, coming back to the smart ChatBot, In the remaining article, I will explain RAG concepts with my own data and show the entire pipeline. You should also be able to interact with it on my website.

## Architectural Diagram

Here is the overall diagram:

In case you didn't understand my hand-writing above (I know it is like hieroglyphics). Lets break this down into small sections:

User Query: This is you, the user accessing my website, clicking on the Ask AI button and asking a question to Chat-Bot. Your question is the query. Once, you hit enter the journey begins.
When the Chat-Bot receives the query, it also adds a prompt for the LLM - I won't give the exact prompt due to security concerns but it goes something like this "Suppose you know everything about Ayush, now answer this question".
So now we have prompt and query, but like said before our Genie (LLM) doesn't know about Ayush. So we generate embedding out of the query and use special algorithms to find the closest vectors to prompt. So what we have now is prompt + query + contextual information.
Now final step is passing prompt + query + contextual data to LLM and asking it to generate a coherent response that we can send back to user.

**How do I query an LLM?**

That’s pretty simple, you can leverage APIs from any LLMs available OpenAI, Google Gemini etc.

**How is relevant context related to Ayush is passed?**

This is where the crux of RAG lies, the information that is to be passed as context is pre-processed, chunked, embedding and generated and stored in a vector database.

what…what…what??

Let me break this down:

By pre-processing, I mean I took all the data related to me (for example - my past resumes, my GitHub readme files etc.) and built a Python script which reads them and breaks them down into smaller pieces of information (called chunks) which hold a subset of the entire documents information. For example, if my project’s readme contains 200 lines with 3 headings:

```
Overview

….

Idea

….

Conclusion

….
```

Now, I could ask my python script to break this down into smaller chunks (which in its own hold a subset of the entire information):

chunk 1:
```
Overview

….
```

chunk 2:
```
Idea

….
```

chunk 3:
```
Conclusion

….
```

If you would like to learn more about chunking strategy, there are many strategies online: Here is research paper link to some.

Now these chunks are what we call unstructured data. Unstructured data is data which does not fall within a schema like SQL database where we have predefined structure to store data. So how do we make sense of this unstructured data?

We generate embeddings from it. Now what is this embedding?

To understand embedding, its better to give a small crash course on what a vector is first.

Suppose, you have a car. In physics, a vector is used to represent that has speed and direction. So for an entry, there are two attributes [speed = 20km/hr, direction = north-east]

So a vector is a way to represent the attributes of a component. A vector is not just limited to 2 attributes, you could have 1000s of attributes to denote characteristics of an item.

[2343, 23233, 11212, 23233, …, ….]

So embedding is this special kind of vector which hold contextual information. To generate embeddings, there are a lot of formulas or algorithms, For ths project, I used the following: []

So once I have data in chunks, I have created embeddings and I used an open source vector database Pinecone to store the embeddings alongside metadata which is the actual chunk in human readable format. This is what it looks like:

Why do we even need these embeddings in the first place?

That’s integral to how RAG works, when I ask a question, my question or prompt will be vectorized first and then the vector database will be used to find the information that’s closest to the question. The top three closest results are found and its accompanying metadata is produced. Now this data is appended to the prompt and a question is put to LLM.

The LLM will generate the answer which should be contextually coherent and provide answers relevant to me.

You can build your own functioning RAG pipeline (for free*)

I have always built my hobby projects with no-cost/ low cost solution in mind as a challenge to optimize the workings. Credit where credit is due, so many services nowadays offer free tiers that building a POC/ working solution has become easy.

When I built my portfolio website, it is hosted free of cost in GitHub pages. Similarly, the RAG pipeline is built with no cost. 

For backend, I used CloudFlare workers, they receive query and have to perform RAG steps and return response in timely manner. For vector database, I used Pinecone opensource as I could generate/ update embeddings. My website with frontend related to chat is hosted on GitHub pages. Authentication via Auth0 free tier. LLM provided by OpenAI, Google gemini.