# Exploring AI Through RAG: A Hands-On Learning Journey

## Initial Roadblocks when Learning about AI

While I began learning about Artificial Intelligence and its applications, I realized that it heavily relied on deep statistics and mathematical knowledge. I initially followed bottom-up approach by learning the basics first and then built my way up to more complex concepts. But I kept getting stuck in the weeds since one concept leveraged another. I couldn't retain all the information and connect the dots.

I needed a practical entrypoint to kick-start my learning journey about AI concepts. While looking for that 'in', I was also making some security upgrades to my portfolio website. Reviewing my content from a third person perspective made me wonder if a reader will be able to retain all the information presented on the website. That’s when I realized that I needed to offer another means of interaction with my website. This is what birthed the idea of a smart chat-bot that answers questions based on my own content.

## Exploring ways to build my ChatBot

So, I looked at ChatGPT and wondered, it has been trained on oceans of data and can answer questions about any topic. What if I built my own version of ChatGPT trained exclusively on my content (projects and blogs) to answer questions about me? Well, it seemed doable so I started looking into models and how they are built, trained and fine-tuned. But the barrier to entry was the process being costly and resource-intensive. I explored more alternatives which led me to **RAG (Retrieval Augmented Generation)**.

The name sounded pretty intimidating to me at first but then I used top-down approach. I treated RAG like a **black box** and then peeled it layer by layer. I made sure to understand each layer so thoroughly that I could even explain it to my dog (of course, he already knows way more about RAGs). I digress, but here's a simple analogy to understand why RAG is needed.

## The Genie Analogy

Suppose your LLM is like a genie which answers any questions you have because it has been trained on the knowledge of the entire world. But its power is also its biggest hurdle. If I go ahead and ask a genie, “What CI-CD tool is Ayush proficient at?”, then it will produce an answer but it may not be relevant to me. I am sure there must be thousands of Ayush out there that the genie knows about. It will most likely give an incorrect answer (also known as **hallucination**). So how do I let genie know about me? By giving him a potion called RAG.

Here comes the technical definition:

```
RAG (Retrieval Augmentation Generation) is a framework that provides context to an LLM by querying a database of related information based on the user query. 
```

In simpler terms, when I query an LLM, it's not going in blind when answering my question. It receives relevant data from my dataset (called context) and produces a coherent answer. With this understanding, the rest of the article will show how I applied RAG to my own data and built a smart ChatBot. You will be able to interact with it on my website.

## Architectural Diagram

![RAG Architecure](/images/rag-architecture-diagram.jpg)

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