CALL ONLY WITH PRADEEP (CHAMPION)

Oh. Hey! Sorry. Sorry. Sorry. I was trying to figure out, like... God damn it. I was trying to figure out, like... Usually my calendar adds The Zoom link, I don't know why I didn't do it this time. Do you mind if I... See, how do I... The problem is I don't have WhatsApp on my desktop.

And the link, the Zoom link wasn't in the Google calendar invite. Yeah, I can update it now. Can you just send it to me? And then I will join from there. Yep, that sounds good. Okay, I see you soon. See ya.

Hey, okay. Hey, hey. Nice. All right. Okay. Perfect. Oh, boy. How are you doing? Are you back in DC? Yes. I am. I'm sorry. Sorry to delay. I'm trying to wrap up some. It's an interesting ML problem. Is it for Untold or is it a different company? Completely different. They're trying to engineer plants. Oh no. Yeah. Exactly. That's the right response. Oh no. Yeah.

Well, there's agrobacteria. Yeah, yeah, exactly. Dead one, yeah, yeah, yeah. Yeah. No, they're actually trying to engineer... It's basically the problem is to like, Find homologs of this enzyme. So this is an enzyme that is naturally present in the specific plants that they're working in.

What they want instead is, but that enzyme doesn't catalyze the chemistry they want. Instead, there are bacterial orthologs of the same enzyme Which is closer to the chemistry that they want. And so what they want to do is they want some way to morph The plant enzyme to behave more like the bacterial enzyme while fixing the number of mutations to less than 20.

And they're fixing the mutation, is that because of synthesis reasons or is it? Regulatory. The European agencies will consider something gene edited if it's beyond. Yeah, that's a really interesting ML problem actually. It is, right? So which models are you using? So right now I'm in the homolog curation step. Oh, I see.

Originally, I was thinking of basically training fine-tuning a language model on One distribution and then the plant distribution and then fine tuning a separate copy on the microbial distribution. And then either trying some version, some variant of DTO.

Yeah, either DPO or like a mixture. But yeah, so we were just talking about that. Anyways, let's talk about our stuff because all of this enzyme engineering stuff, I mean, it's fascinating, but I have to find a way to wrap it up. Just like, yeah, just give them the enzyme, you know, don't hold it back. Yeah. Yeah. But yeah, so.

I just want to run you through the deck because I want to have you tuned in to what matters to you and your team because it's about you convincing the team. So yeah, so then I'll just take some notes like around maybe the storyline essentially. Because you know, there will be... Oh sorry, go on.

So, yeah, so I could just give you, again, just to recap, like, what the message we're trying to communicate. Yeah. So... The way the scientists currently work, sorry, the way that the experimental scientists currently store their data Every experiment is a folder. And inside of the folder is a Word doc that contains the protocol.

It has been used for data acquisition and data analysis. Right. And what we want is to build It has been edited to include proper punctuation. Something else. And typically what happens is they will copy, they will clone the folder and then modify the stuff inside it when they do like an experiment.

And I think that model fits very nicely with what you're saying. So the problem that you need to speak to is How do I make it easy to extract metadata from a series of Word files, Excel files, MATLAB scripts? And expose it in a way such that it will be very easy downstream to build an LLM API or LLM layer on top

That allows me to answer questions about what were the conditions that was done on this day or give me all the experiments that used this construct. And the raw source data itself is just a link to either Google GCP or S3 bucket, whatever. Probably going to be GCP.

And then the last piece that you need to speak to is if people wanted to do analysis How do we connect a Merimo notebook to let them do the analysis? In real time by querying that data. Right. Yeah. I mean, like what is the architecture diagram look like so that a bare-mo notebook can

It has been edited to include proper punctuation. And do whatever analysis they want to do. Yeah, yeah, yeah. I mean, that part is actually pretty standard. It's just with exposing API to essentially or an SDK so that they can just pip install You know, let's say the SDK and then now they can call that SDK to retrieve like sequences or whatever, you know. So that's, yeah, that's not the difficult part because once you have the structured data, then, you know, the API is perfect for it, right?

So it's not like magic or AI or anything. Great. Yeah, yeah. Okay, that's interesting. And then the system of folders are hierarchically organized. So each set of experiments will be a meta folder, and inside it, let's say, each experiment will be a folder, and inside it will be a...

It is already structured in a rational way. Inside it, it is a hot mess. Right. Yeah. And in the future, like you would want essentially them to just be able to drop these things in the right context, basically. Right. So, yeah. Exactly. Because given that they're working in this way, it will be very difficult to convince them to do anything. I mean, that's fine as long as they keep the files because then you can also test how well this input step works.

Once you have parity with their current workflow of this folder system, then at some point, once you actually have the system in place to drop or even So if they want to talk to the system right then they can just switch to it without any friction. But yeah, first you have to essentially map into the existing process.

Yeah. Right. So that is what you need to speak to. Yeah. So I guess currently the presentation was kind of more So the general sort of product concepts that map to that. But like if you want to like a specific example of like with these folders and exactly how they do it and then what happens or which models are kind of used.

So, yeah, I wasn't sure which one was relevant, but maybe I can just show you for now. Yeah, go for it. Yeah, love to.

All right.

Can you see the screen? Yeah, I can see it. Yeah, so currently it's called the Tiles AI Native Lab Operating System. But we'll have to see if there's a better name, essentially. But... This is kind of the introduction to the problem basically. When you start a new team with La Science, you have two paths. The path of least resistance is up here.

Right, protocol binding assay, new, new, one, PPTX. And then there's like the path of intentional design where we should have essentially structured records of, you know, your experimental data protocols, compounds, binding assays, and things like that.

And so the point here being that you can build a foundation where your data really becomes a compounding asset rather than a liability essentially. This is the vision, the new standard for R&D, so that you get velocity and integrity of the data by design. Scientists are freed from manual data entry. Everything is linked to its origin, so any result to assay, batch, sequence, and notebook entry that's spawned it.

And then the whole history of research becomes like a queryable brain. So you can ask things like show experiments with protein X versus cell line Y, you know, generate a dose response curve. And then the last one is the one that actually I'm most passionate about is that the lab becomes an automated engine for discovery so that you can trigger things that are just manual, things that are just like don't need like

It can be automated, like a new gene sequence, automated trigger structure prediction and primary design. Not that every time you need to spin up an alpha fold again. You have automated workflows based on triggers in your lab. That's the vision. The platform is called Modern Relay. It provides a single source of truth that powers the entire R&D lifecycle. It doesn't necessarily replace it, but unifies them. It's designed from first principles for humans and AI agents to collaborate on the data.

It's supposed to provide the foundation for automated, reproducible, and These are the pillars to it. The first pillar is that it has a modular unified data layer so that you can define custom data modes and ontologies that match your biology rather than the other way around.

I think that's the common failure mode with LIM systems that they impose a data model that doesn't really fit your science. And then you can create new modules, integrate experiments, instruments, and also like external data like UniProt or things like that.

And then the second pillar is this sort of intelligence layer, right? So this is kind of like, What you were asking for, right? In terms of like, okay, I can ask questions from my database and if it's actually structured properly in the first place, that's where this becomes possible. This is impossible on top of these file systems that you saw in the first slide.

So yeah, so agents can read, write, and reason about the data. And then the system becomes like a common line to query, analyze, or visualize in sort of natural language. The third pillar is, as I mentioned before, the Git style branching is super important because

Also, once you actually start using, for example, agents, let's say, to extract metadata, you want it to still go through an approval step, right? So that a person will approve that everything was extracted correctly, right? Obviously, it becomes much easier to approve than to enter it manually in the first place, but you still need this kind of approval step

And also separately, sometimes you're just experimenting with the workflow, right? You might try like a specific analysis and then you want essentially like a sort of collaboration layer essentially that So you don't manipulate your source of truth or you, yeah, that you kind of dismantle the integrity of it. And then the fourth pillar is like this event driven workflow so that

It's essentially based on common workflows in the lab that they can trigger based on structured entry. So every time a new sequence is added, you should be able to then design primers or predict structure without having to think about it. And that's kind of, I think, over time, if you actually have a lot of these small automations, right, then they...

It builds up. Exactly, it builds up, yeah, because like... I remember for me in the lab, that was one of the most frustrating things. I had to do that every time. It's like, it's every time the same thing, right? And so it frees up time to scientists, but also eventually you can imagine that

Your data store becomes proactive that it will actually find or discover new things if you actually compound or build up these small automations. I think he is not to expect a magic automation of everything, but it's like a compounding of very small steps that are deterministic or

It's predicting the structure. And then that actually compounds to really accelerating discovery, essentially. And here I was going to add just a day in the life of a scientist. So upload a CSV and photo of handwritten notes. And then AI powered metadata extraction.

Then event-based workflow that triggers anomaly detection. And then it automatically links that compound maybe to a sequence, or like a sequence to Uniprot or entry essentially so you can actually enrich it. So this was going to be like, yeah, I didn't get to the perfect animation here yet.

Here is the flywheel. When you have better structured data, you can do faster, more parallel experiments. You get more insights and more hypotheses and therefore you can perform more experiments. This is basically how we actually work in terms of going deep. They usually call it forward deployed engineering at Palantir and things like that. Basically working really closely with teams so they want to actually make sure that it actually works with, not just be like, oh, this is the solution and just hope you will use it,

To actually sit with the scientists in the lab to make sure that their life is actually getting improved rather than worsened. This was the why us that you asked for as well. So we hired two engineers and my co-founders from Recurge and Goldman. But as you know, from having worked together, I've been obsessed about this problem for a very long time. Yeah, I think so.

I think this is great. Can you go back to the previous slide? So I will, I think this is exactly what we need. So I'm going to do my best to persuade them. I think the questions that you will need to answer is if this is the model that you envision, What is the cost? What is your business model? And how much...

Like, let's say we sign a partnership, right? How much are you suggesting that By three months, you will have a POC that can enable the animations that you're talking about. Is that what you're promising? Yeah, I'm not sure if you've seen, but the architecture is already built. That's what I spent a month working on.

So right now it's kind of like, imagine, right, imagine like, you know, these building blocks are there essentially, right? And now it's actually about, You know, making sure that the actual user experience, right, and sort of how you assemble these blocks essentially matches, you know, exactly your science and workflow. Right, of course, there's like, there's gonna be,

For example, depending on these types of workflows, the question will... For example, the way agents work when they query data is that they can be tuned in terms of the prompting and which tools you give them access to and things like that. So this is where being more hands-on with the team members is actually...

It's helpful to adapt the system to work well. If you look at most You know, a system of record companies like from Salesforce to, you know, they usually, they always work either with implementation partners or they have like service on their own because it's such a powerful system and to make it like,

It's really useful to the end user. You need to still customize it. Because you can't get a super customizable system necessarily and then at the same time, it's going to be super... It's easy to set up initially, but I think AI is still changing the game because, I'm not sure if I showed you as well, how it created the data model from scratch in the video.

You know, so like, I'm not sure if I showed you that part, but, you know, I instruct the agent, my assistant to automate. So can I ask you, so I think, so I, I'm not, I don't doubt you on it. I think all of this makes sense. Yeah. Yeah. Yeah. But do you have a sense of how much it would cost? Like, what would the pricing look like? Because you are going to get that question, right? Yeah. And that is also another thing that I will have to...

So what is your pricing relative to, let's say, Benchling or Kaleidoscope? I agree that this is much better. Yeah, yeah. Okay. What is it going to cost to build this?

So that's the first question. I guess it's like the way we actually obviously would price it is actually less in terms of cost, but more in terms of value. You know, how much, you know, how much value does it actually add to the, you know, because Yeah, in general, that's what kind of matters, right? Sure, sure. I'm just saying, like, that is... I completely agree. Yeah, yeah. So, but the question that I have to answer is...

What is the budget that's going to be allocated for this? So do you have a sense of numbers? Like how much would it cost to build this for, let's say, A set of workflows. Sorry, you are breaking up a bit. One sec. Can you hear me? Yeah, I can hear it. It's just a bit leggy right now.

Can you hear me? Yeah. Okay, I think that was better. Okay. Okay. Okay. Okay. Yeah, so I guess there's two parts, right? One would be like the The initial engagement, right? Because that's where a lot of the work will happen on like engagement. And then there will be the recurring structure, right?

I think obviously the initial engagement will be like maybe like the bigger chunk and then yeah I mean and then after that the recurring part when it becomes more productized essentially right that's where it will kind of probably match the The benching of kaleidoscope. But I think it would be based on the model. Yeah. So do you have... So that's one question, right? It's like, how much is this going to cost? Yeah.

The second question is, is it possible for you to build it in such a way that the internal data engineering team can just manage and build off of it? Oh, yeah. I mean, or is. Yeah. Yeah. Go ahead. You know, it will be made to also like have like a really clean way that already has an API, but essentially super clean API to be extensible by

By engineering team. In some sense it also provides the right building blocks to do that because the workflows that I mentioned are actually code-based. It's not some kind of drag and drop That you cannot really extend. Basically it's like code first. It can be extended any way you could extend with code essentially.

This is something I was very strong about because in the past these kind of GUIs to assemble workflows were fine before AI, but now code is like the ultimate flexibility because you can have non-technical people actually generate workflow logic in code, but then you can have technical people also actually write more complex or manual code on their own.

And that way, it gives you essentially no lock-in or ultimate flexibility because anything can be then coded. Right? Yeah. And then last but not least, I didn't see any example of time series. So a lot of the data that we're going to work with is imaging and time series.

And one of the things that we want to do, one of the events that we want to do is do automate like an analysis pipeline, which would be a custom ML model. Right? That would basically do some version of out... Let's just say some version of outlier detection. So somebody is doing recording, essentially kinetics.

And so they get a curve, affinity versus time, let's call it that. And what I want is to trigger an event that basically says, Okay. I just observed this kinetics trace. Relative to the controls That I'm aware of, this is an inlier or this is an outlier. That would be a simple model that I would build and then I want to deploy it and have the event call that model up to do this.

Great. Yeah. So are you saying that with what you've built, that is something that is doable? Yes. Or will that take extra work? Yeah, so it would be doable essentially if you store the data because essentially you wouldn't want to store everything as records like that, but essentially the metadata for these data types, right? Because if let's say you have like

You know, like a billion rows time series, right? That it would make sense to actually store that as a record, but you essentially would create for each time series a record and then link to the actual time series file that may be inefficient, right? And then it actually works because essentially,

The system can just point to any file in object storage. So you would have essentially the time series file indexed essentially. And then the trigger would still work because if you have essentially a new time series coming up, then you can essentially trigger another workflow from there essentially.

So that works, but I wouldn't recommend, for example, storing the time series every time point as a record because in any database system, basically you will face challenges there. So that's actually... But what's important is the metadata, yeah. So in these folders, the way that people are working right now,

They're calling up an instrument and the instrument will dump the time series as a text file in the same folder. Okay. Yeah, yeah. Right. So part of what we would need to do is upload that data, index it, and then create what you're saying. Okay, I think this is a great pitch. But yeah, I had asked you, how much is this going to cost?

I guess I will have to talk with my co-founder about it as well. But do you think in the range of the budget you mentioned, around like 500k, It depends on the scope of the involvement. It also means that now, at least for the month period time, we would have to actually

It's also in terms of the opportunity cost because we're working with Pharma on systems like that. Yeah, of course, this is actually a super interesting one as well, given that also we get to work with you. But yeah, I think that we can affect it in a sense because I think we have to be quite hands on.

Yeah, I agree that you'll have to answer. I mean, there's no other way. Yeah. There's just no other way, right? Yeah, exactly. Okay, that's good to know. And I think that is... And I think... So I will write the intro email today. I will set them up and then go through it.

With them, with Tyson and Bruno. And then just be prepared to answer questions on cost and really have it thought through very well. And timelines. So like, how long would it take to build one workflow, for example? So is it possible that we could do like,

We take a look at all the experiments and we're like, okay, here's an example workflow that if you could build something like this from that, then we could start to build on it internally. Because what we're really looking for is good bones And as long as... And given that in the Bethke scenario, you build a skeleton for us. We start using it.

And if something breaks because you built it, we can always come back to you and say, hey, like, engage you and say, like, hey, how would I extend the skeleton for this? New workflow or how would I write? I think that's that would be, I think, the preferred model, if I had to guess. Yeah. The nature of the people in the team. Yeah.

So I think that would be the key thing. You mean the preferred nature would be basically to start with a scoped workflow, you mean?

Yeah, for sure. I'm pretty confident that we will be able to deliver very quickly on it because You know, these building blocks kind of already exist, right? So it's like about like tuning the system to the specific use case, right? Because like, I think I've picked out- I think so too, but- Sorry? I think so too, but I would love for you to meet

Sorry, I was going to say, I would love for you to meet with one of the scientists and see how long it would take, because I already have an example workflow. Okay. And I'm wondering if that is the right, like, do you really get details on it? But yeah, that would be the piece. Yeah. Awesome.

I will write that into your email right now. Let's try to set this up and let's try to get this going. That sounds good. What is Bruno's last name or Tyson's last name?

His last name is Tyson.

Bruno's last name is Beltran. B E L T R A N

Yeah. This is not St. Tyson. Yeah. So where's the Zoom chat?

Okay, nice. So where do you know them from actually? He was at Waymo. Okay, Tyson. I mean... Tyson is a co-founder at Forest Neuroscience. Bruno hired Oh, I see. And Bruno is doing what?

He's the head of software and data engineering. Oh, okay, okay. So he's good. Okay, nice. I see I have... Yeah. Yeah. He's leaving Forrest. Well, Forrest is going to get absorbed. Oh, okay, so merge acquired. Oh, that's the ultrasound one. Okay, now it makes sense. Okay. Yeah, yeah. Was this more like an AQUI hire or was it for the tech?

It's more for the tech, I would say. And the people who know how to do it. Yeah, exactly. What's going to team structure be? You are the head of... So, I think I'm going to be head of data science and probably to some extent At least early days, lab automation and platform development.

But as we hire those roles, I will shift primarily back into data science. And Bruno and Tyson's roles are... ISON is really going to drive the device side of things. And Bruno is basically going to be head of software and data engineering. Right, okay, okay, okay. Anything to know about them basically to qualify or before I chat with Bruno?

Just that they are very nice guys, but they prefer very blunt things. Short answers. Yeah. So they don't like they're also very quiet. So do not expect them to talk a lot. But they do like. I will be on the call. I will I will make sure that I set this up today because I really want to get this going. Because this is super important. Yeah, because what's currently the mode of the sequencing?

Are people already in the labs right now? No, the money hasn't even hit the bank yet. The company hasn't even started yet. But once it starts... The office space is going to be procured probably by end of October. And so we would be starting sometime in November.

It would be difficult to do experiments. I guess it would be good for us to know... I guess, yeah, early because then we can already prepare before we start even with engagement actually to, or like reallocate some of the resources because, yeah, we had some,

Yeah, in terms of stuff we've got going on at the moment. Yeah. Yeah, I think so. I think there's a world that this can happen. I feel pretty confident that you can do it. So now we just have to get it done, right? And so now we just have to convince them. Obviously, it's going to be expensive. And so we're trying to totally understand, but...

As you said, it's the value add over time. I think what's beautiful about this is if you have a greenfield project, Now you have the ability to redesign it from the beginning to be a compounding asset and not a deteriorating one. That's going to be super interesting as a sort of example, right? Yeah, I think so. Awesome. Thanks so much, Ragnar. I will talk to you soon. I'll send you that intro. Do you actually need the deck?

I'd love for you to present it. Okay, I will present it. Okay, okay. Yeah, and then basically, yeah, I think let's go with that. Okay, okay. That sounds good. Yeah, and then internally, the questions are going to be So I think I showed you Tabulous, right? The company. So internally the question is, okay, well BenchLink is going to charge

20,000 annually for 20 seats or something, but everybody hates it. Kaleidoscope was, I think, 150K all in. With engineering support. And that's 150k recurrent. Stabilus is very cheap. I think it's like... It's like a thousand per person or something like super cheap. It seems like they just integrate with Google Sheets, right? Something like that. That's right. Yeah.

That's right. That's right. So I think it's really a question of like, hey, how do we build it in a way So when they think about pricing, I just know that Mikel is going to say, well, why don't we just go with the I don't know, bench laying or whatever, because it's cheaper up front. And I think there'll be a course of people who'll push back against that. But yeah, I think it's good to...

It's good to basically think about the cost of your pricing. Yeah, yeah. But I think that there's maybe two components to it, right? One is that it's not just like you're dumping... Some piece of software and hope it will be useful to you. I guess part of it is actually, even Kaleidoscope or PenchLink will not, even they have engineering support, they're not gonna be full-time working on this. And then the second component is also that

I guess it's not supposed to be just like the ELN or just the LIMS, but basically it's like the, I guess, a foundation that you can actually build on top of, right? Where like new data goes, right? Because I think eventually it also makes sense to connect the R&D then to

It's kind of more like the A foundational source of truth, a system of record. Punishment. Punishment. That's why I'm pushing for this. Maybe that would be the two arguments I would sort of... Yeah, yeah, yeah. I hear you. I hear you. You could totally replicate, like, so, like, Kaleidoscope's, you know, current is actually still worse than Airtable, you know, in my opinion. But you could still replicate it and just, you know, dump it and be like, okay, here's your database, you know, and then sort of use it, right?

But... I understand. Let me do that. I will take some time to write a nice email and then let's go from there. One last thing I'll say, I guess because the titles are more made for outcome focus, for essentially the I would definitely... I don't think it needs to be more technical at this stage because I think you can answer the questions dynamically.

Because what I would like them to walk away with is it is sufficiently high level that it's easy to grasp what the concept is. So that when somebody like Mikael looks at it, he can intuitively see what it is that is being offered. But at the same time, on the call,

As the engineers ask questions, being able to dynamically respond with detailed answers, I think will provide a measure of confidence that says, Why you? I think strategically that's how I would approach it. So who would be on the court? Tyson Blue and Mikel as well?

Not Mikkel. Mikkel, it'll just be Bruno, Tyson, and me. And maybe Bruno might want to do a one-on-one, but I will leave it at that. Awesome. I will write that in. Okay, perfect. Awesome. Thanks Ragnar. I'll talk to you soon. Bye-bye. Ciao.

Bruno Beltran.


---- CALL WITH everybody ---
Speaker 1: Hello?
Speaker 2: Hello?
Ragnor Comerford: Hey Bruno, can you hear me?
Speaker 1: Yes. Can you hear me okay?
Ragnor Comerford: Yeah, can you hear you fine? You just connect to my. See better now.
Speaker 1: Yeah, perfect.
Ragnor Comerford: So I guess we're still waiting for Tyson and Pradeep, right?
Speaker 1: Yes, for sure. Okay, I believe they should both definitely be here.
Ragnor Comerford: Yeah, I mean since you all know each other already right.
Speaker 1: Yes. I would start with intros if you want.
Ragnor Comerford: Yeah so I know pretty well but so maybe yeah you will start with the intro and then hopefully by that time Ty will have joined so then I don't admit have to like repeat.
Speaker 1: Yeah, absolutely. So yeah, so obviously the. I think that at this new company we're starting we haven't formally given everyone titles yet but roughly speaking I'm like lead software I think for deep is lead data science, something like this and yeah, I don't know how much context Pradeep is giving you about the company itself. I'll see. You're amazing. But yeah, my background is that I've historically worked. I was a biologist for my Ph.D. i sold out to big tech like self driving cars, AI consultancy, eventually circled back into yeah I like making money. I think eventually when I got senior enough they tell me I could make money and be in bio again and I was like no way. So I, I came back to biotech when I was at a startup for a few years where we were you know basically developing a new, new sequencing technology using like so we had some like integrated microscopy and like a Lumina derived like combined platform and you know was in charge of basically all software for that company, most of bioinformatics and helps with a lot like the process engineering and the robotics and stuff and so really deep, really really deep unfortunately deep love for trying to set up good scientists facing notebook and meta tracking interfaces and we use benchling so obviously everyone hates fletchling and we always want to like see what else is around so we can try to avoid it in the future. But yeah, that's kind of like my background so hopefully that makes some context of where I'll be coming. Yeah, it's also here with me.
Ragnor Comerford: Oh yeah. Hi guys. Nothing is great. Also that you made sort of the loop back because you know you brought back some of the engineering practices from you know, I guess big tech which I think is always really good to have people, I guess some other disciplines go into the field or mix because that's where I think new ideas emerge and can flow I guess between each other. So we're doing intros so maybe Tyson would love to Hear about you as well.
Speaker 2: Yep.
Speaker 4: Hey Tyson. So systems neuroscientists by training. So sticking electrodes into monkey brains, recording signal activity as they move around, zapping them, evoking complex movements. Excited about BCI during that time and so came to Caltech, set up a BCI program basically from the ground up. We're implanting microelectrode arrays into the brains of paralyzed individuals. Using that to allow them to control robotic arms and play video games and drive cars halfway across the country and do all sorts of fun stuff. It was very clear that neurotechnology has amazing potential but that if you really care about meaningfully interacting with the human experience using the bci, kind of available technologies just aren't going to cut it. So the chips I was using, you have to like kill 200 neurons to record from one. Right. Like there's a scale of technology.
Ragnor Comerford: Yeah.
Speaker 4: So transition and end up co founding force Neurotech to create an ultrasonic UCI. The kind of advantage there is you don't need to like penetrate something into brain tissue to like meaningfully interact with the brain. Problem is endogenous contrast agents like just don't like cut it like in terms of ultra high gamuthill in the base. And so doing this new company to basically couple devices with, you know, molecular sensors and actuators to like realize the ultimate vision.
Speaker 1: Right.
Ragnor Comerford: To yeah.
Speaker 4: Kind of directly interface with the human experience at you know, whatever gigabits a second.
Ragnor Comerford: Yeah, for sure. Oh yeah. So Merge obviously acquired your company then ready to understand correctly?
Speaker 4: Yeah, we're like we're kind of shutting it down and starting a new company. So it wasn't like aqua hire, it.
Ragnor Comerford: Was a. Yeah, yeah. I guess you get, you still get to fulfill your vision I suppose now with resources I guess. Yeah.
Speaker 4: There's no doubt that, you know, there's no better thing to do with one's life than join Merge and create the future of compute platforms.
Ragnor Comerford: Yeah, for sure, for sure. Yeah. I'd be able to give a quick background as well. So actually Pradeep and I know each other from working with Ontolabs, which is sort of cryopreservation company. We've been working on the protein engineering side and compound screening process and he was the great scientist and I was the engineer.
Speaker 2: Right.
Ragnor Comerford: So it was a really nice pairing. We've been working about the year together which is what's really fun. Yeah. So by training I'm also like a computer scientist and also did AI in my undergrad or machine learning.
Speaker 2: Right.
Ragnor Comerford: What's called before depending on your audience. Right. And then moved more into life sciences. So biotech in Cambridge and then worked in San Francisco at a startup that was developing like a digital twin. So it's called qbio. They built their own MRI from scratch and was kind of ingesting kind of other clinical biomarkers like blood panels and had to pass PDFs right. From Quest Diagnostics to get my data as a data scientist. So I've gone through all the pains of working with kind of different data stacks and also there are built our internal medical knowledge graphs and she had all the information about our biomarkers and use that I guess for predictions. And then also spending some time in the lab as well, on the wet lab side at the Francis Creek Institute in London. So I was doing sort of AI protein design so you can train the transformers or LLMs on amino acids. And I was kind of sampling mutations, expressing them in bacterial cells. And this is the way I came across all this interesting world of lymph systems and the lens and hating benchling and ended up using Airtable as my sort of limb system. But yeah, I encountered a lot of frustrations, you know, coming from the software background, how there, you know, you have all these automations and everything is good and obviously you're really underserved in the biospace. And that's when I started kind of diving much more into it and ended up also then for onto our lives with building sort of our central source of truth of I guess, experimental data that if structured properly, allowed to automate things such as when new model tools came in, automatically trigger the memos to actually generate the next predictions using Bayesian optimization. And then that could be tested and things like that and reproducible and ultimately.
Speaker 5: Sorry, yeah, just to emphasize that point. So we built this system for until labs where Ragnar actually did all the engineering, where the central database basically queries this vast repository of small molecules. I think it's like 4 million. 4 million was the smallest one. But the actual database is like billions of small molecules. And what he built was a system, a database system where the actual experimental tests are like 100 compounds which are drawn from this large distribution. An ML model is trained dynamically and it automatically then pings this large repository, selects the next set of compounds based on pick your favorite acquisition metric. And so what we've been able to do in one year of working together is they prior to us kind of working with them, their hit rate was like maybe 10% or so in terms of compounds that they were testing. And they act. The efficacy of the compounds that they were testing was also not that great. But in the last year we've kind of brought that up to about 70% hit rate. And the efficacy of the compounds that are hits is better than what they. In every iteration it's been getting better, which is exactly what you would expect with a Bayesian optimization paradigm. And I think a lot of it was because of the engineering data standardization that Ragnar built, which is kind of what convinced me about all of this. So yeah, so I just wanted to give that context.
Ragnor Comerford: Yeah, I mean, what's interesting is also that until last I didn't necessarily ask for a new piece of infrastructure, but it's more that in some sense I wanted to automate myself out of the job.
Speaker 2: Right.
Ragnor Comerford: So that not every time they send a CSV file on Slack and then now I need to figure out, you know, how do I get the embeddings now, how do I rerun the pipeline? And then also if they ask a piece of data, I can just point them to the database, right. Not dig into all kind of files on my computer, essentially. So actually the primary intention was actually to automate myself as well. And I guess also that coming in as a data scientist and you want to actually produce results, you don't essentially want to have to rely on CSV files being passed on Slack and then hoping that whatever you give them, they're not going to notice that I guess if the primary goal is really to actually deliver results, had to actually build infrastructure internally first. It was just pretty than I using it. But then eventually they started using it on their own. But yeah, that's kind of the context.
Speaker 5: Awesome. Do you want to now walk us through Equator?
Ragnor Comerford: Yeah. And maybe you can also. I can run through that. I want to talk like 30 minutes to a ball as well. So maybe we can also frame this discussion so that. Feel free to kind of just interrupt, ask questions or. I mean this is kind of many things like presenting how we kind of see the world. So I joined up with a co founder from Recursion Pharma and we started this company, I guess building sort of a new sort of infrastructure for I guess LIMS and air Lens for biotechs. But yeah, maybe I can start off with the presentation. As you see, I write my slides in code.
Speaker 2: Right.
Ragnor Comerford: So maybe you see here the local host. But anyway, so let me start with sort of like maybe the kind of problem statement. Right. So you know, whenever you're very familiar with that, I guess having worked in biotech Right. But whenever you start, I guess you face two choices on day one, essentially, right? One is the path of least resistance, right? And there you kind of grab the tools that you already know, like spreadsheets, slides, who drive things like that, and you kind of end up with a state, maybe familiar.
Speaker 2: Right.
Ragnor Comerford: On the left, you know how you name and tracking metadata and things like that. This kind of works. It's kind of a low friction, you know, sort of way to store data. And it's kind of the power of least resistance. But obviously over time it creates a huge data depth, right. And kind of inhibits automating anything if the metadata is not clear what is what. And I guess the right side is how it should ideally be the part of intentional design where you really build a foundation where data actually always becomes a compounding asset rather than depreciating one. And then every experiment really increases context and structure and things like that. And so the question we ask ourselves actually, what if that path of least resistance was actually the one that built a compounding asset by default?
Speaker 2: Right.
Ragnor Comerford: And this is kind of the vision we have, I guess, with our platform, so setting a new standard for R and D in terms of getting velocity and also the integrity of data by design. And so what does that mean? Whereas on the first hand, the scientists are the ones who actually primarily interact with the system. So you need to find a way essentially for scientists to be free from manual data entry and make it as low friction as possible, really, to actually enter data metadata protocols and so that the context is almost kind of captured as automatic as possible. Obviously you want everything to be linked to its origin, right? Where did that result come from, which file, which essay or notebook entry. And then obviously you want to be able to query your history, almost like a second brain showing experiments with security in a cell line, generating plots and reports. And then last, maybe that's the one I'm kind of most passionate about, is that if you actually set the right infrastructure and as we discussed with onto our labs, we could actually make your lab with like an automated engine for discovery. So that simple tasks that just require like manual effort but are not necessarily worthy of catching a scientist's attention can essentially be automated in the background, right? So just like maybe predicting structures automatically when a new sequence is added, or ordering primers once they're added to the database. And so kind of, yeah, this is kind of the vision we tried to fulfill, I guess, with the AI native lab operating system. It's supposed to be essentially a single source of truth that powers this entire R and D lifecycle and unifying different tools, instruments, and not replacing every tool, but so to be designed in AI native way on first principles so that humans AI can collaborate on that data. And now I can explain why AI is kind of relevant in this case, right? So yeah, in terms of product concept, there's like four major important pillars, right? So this is the one that I frequently encounter essentially that when you try to have a single software, you also need modularity at the same time, right? Because different sciences need different data models and ontologies. So essentially you want a way to describe different areas with different languages to be able to connect data to, to each other, integrate new modes and databases. So designing things with modularity in mind is actually key to evolving something that also, as the science evolves, you also need to kind of evolve the way you store and operate on your data. And then the second one is like the intelligence layers. And she's like, can you utilize AI relating a core team member, not a gadget, Right. So in this case you'll be able to read, write a reason about the data you have in your system, such in this case, for example, asking a question about binding essays and generating a QC report, everything like low friction. We need to retrieve the right information so that we can focus as scientists actually focus on their task at hand. Another one that I think is really important is how do you make it almost like instantly structure metadata, right? So you want essentially a low friction way for scientists to enter data or document things at the same time, have structure. That's obviously where alarms excel at really extracting, for example, metadata, let's say from code files or unstructured lab protocols and ultimately extracting them into this structured format so that now it becomes sort of like a compounding carbo asset. Because you can imagine, right, if you want to, in a previous example, ask questions about your experiments, it's not possible when all the metadata that you need actually is stored in unstructured lab nodes.
Speaker 2: Right.
Ragnor Comerford: And this is kind of the key really to enable the right structure to do that.
Speaker 1: Can I ask about the vision of. So I mean, I think the key to every ELN and LIM solution is some way for scientists to specify what are different kinds of protocols. Exactly the structure. We can basically say that I guarantee that we're going to need to have a high level of metadata specification in the BAR protocols early on because we're skipping straight to some high throughput style work streams. And so I think the question for me isn't are we going to make a table. But actually what is the interface for the scientists to be able to design? They're gonna be writing like structure protocols anyway. So then is the. Is the. How does it like look from the scientist perspective? I have an experiment and I'm changing the structure. I'm changing like what kinds of meta I want to save. And so there should be like some. Is there some like new, like under the hood? Like, what is like going on? Like this. Are they driving this? Do I drive this for them? And they enter the data. Like, I'm trying to figure out what is like the. Where are these tables coming from basically, and who's controlling them and what's like the model for that.
Ragnor Comerford: Yeah, So I guess I'll be able to maybe shut down because these are kind of just animations supposed to actually just show the core value.
Speaker 2: Right.
Ragnor Comerford: But essentially the way the scientists would interact with it is. Are you familiar with like, ltable or even like the notion database? Right. So just a standard database. And then there's a way also to enter data, you know, in an unstructured way. You know, for example, dumping, let's say a lab node and then structure into the database. So there's both actually tabular interface, but also, you know, like the assistant interface, essentially. Does that make sense?
Speaker 1: Yes, yes, yes. Sorry, I just. I was. There's a stream. People were walking. Silence. Making sure people were still. Oh, okay. On here. But yeah, sounds good.
Ragnor Comerford: Yeah. So like straight like a tableau interface, right? There's like a relational database that essentially makes. So that both technical and non technical people can actually enter and edit data, essentially.
Speaker 1: Yeah.
Ragnor Comerford: Or was that the key concern or.
Speaker 1: Yeah, I just wanted to make sure that we were going to get to that at some point.
Speaker 2: And then.
Speaker 5: Sorry, guys, because we were moving. Could you please summarize the response? Like, so what is the interface layer for the wet lab scientists?
Ragnor Comerford: Yes. So I guess that was the question. Right, so it's just like a tabular interface. Right. Maybe you can see similar to here, you essay records.
Speaker 2: Right.
Ragnor Comerford: It also means you can maybe you can dump the lab note in there, you know, to actually automatically create the record.
Speaker 2: Right.
Ragnor Comerford: But the primary interface is. Yeah, it's supposed to tabular.
Speaker 1: Does that mean that, like, I think the key question there for me would be basically like, in what way are they creating those lab notes? Because, like, as a process lead at a previous, like team of biologists, like, I. A lot of my work was literally making sure all the protocols were structured enough to be useful like templates. You have Like I said, one half of. To me, one half of the LIMS ELN system is the LIMS part is the metadata. And they say the back end is something airtable that's editable, like a notion database. That sounds great. That's kind of what people kind of want. And the other half of that is the actual notebook interface itself. It makes it quickly easy to like pop up a nice example plate and like highlight someone's. And color some red and color some green and then be able to extract from that like type of data as well. But also make it easy to like, make it easy to type. People need to type before notes as well. You guys manage or that like, are you guys basically mostly a LIMS and leaving the electronic notebook to like external.
Ragnor Comerford: So it is mostly like a limbs in the sense that it's like structured data. But like, for example, obviously if you expand a row, right, you can have essentially write a note or unstructured text, right? And I guess that's maybe the less difficult part to add like, you know, different sort of, you know, unstructured sort of elements. I mean, you need to add a table or plates, essentially, plate layout and things like that, right? But in that sense, like you want almost like, you know, one node to be also a row, essentially, right? In a unsens, it's kind of like almost a link, in my opinion, is like a generalization, I guess, of the notebook, right? It's just, okay, one note is actually just a row with metadata in that database. But actually the interface side is never kind of difficult for us to kind of adapt, right. As long as the data infrastructure behind it is like, correct. But yeah, I mean, just to answer your question, the focus obviously was much more on the limps, essentially.
Speaker 2: Yeah.
Speaker 1: Yeah, makes sense. That totally answered my question. Thank you.
Ragnor Comerford: Yeah, yeah. Then next, once you actually start using, I mean, this was already a problem before AI, but I think one of the things that is really important, I guess when you collaborate on data is how do you enable essentially to edit data without essentially manipulating the source of truth. Right. To be able to go by like a review process.
Speaker 2: Right.
Ragnor Comerford: And that also applies especially when you start using MMAB to automate, let's say, some of the extraction parts. And so we did develop as like a way to actually branch off that LIM system. And it's almost like saying like, you create a copy, right? And then you edit the data and then kind of submitting it for approval so that you can actually review the changes and then sort of merge it into a source of truth. I guess this came from the observation that actually everybody was using spreadsheets or database where actually create copies or duplicate them to edit something before they actually merge it back. That's why I kind of developed this kind of git style branching so that also as a non technical person, it almost looks like you're creating a copy and then you're editing the data and then you can submit almost like a pull request if you're familiar.
Speaker 2: Right.
Ragnor Comerford: That shows actually what data changed. And I think this is going to become more and more important as we. You want to automate parts of the work with LM in the future so that you have a way to, you know, review the changes later and then merge them and not just have your source of views actually manipulated. Does that make sense at that point?
Speaker 1: It's like a, it's like a nice. I assume it's not actually good on the front end since it's got to be dealing with a relational table. So I assume it's like something postgres, like where you're tracking like a whole provenance of all versions of the rows for all time and you're just writing a nice like UI on top of that for people to make these requests and then.
Ragnor Comerford: Exactly, exactly the way. I mean since you're technical and we can build that, the data itself is actually stored as an event log. Right. So every like every data changes an event. And so when you branch off you actually just add the events to a separate branch and then when you see the actual table, it obviously reconstructs all the events on that branch without copying it.
Speaker 2: Right?
Ragnor Comerford: It just reconstructs when it branched off. And so this required quite a bit of engineering to get right. But I think this is kind of really important to have like clean data that. So many times I've worked in labs where things would change like the sequence of one of our pages. Right. And it meant three months of work was kind of down the drain.
Speaker 2: Right.
Ragnor Comerford: To be able to really sort of like as humans both edit data, but also especially as you use, I don't see any other way to use essentially AI on top of your data unless you have a way to somehow branch off and sort of, rather than editing.
Speaker 1: The source of truth directly is the branching model. Did you basically compare that to the model of keeping like a trunk based development approach where there is one source of truth and it's multiple editing or branching like one commits and everybody is then implicitly branching off of the new version of data or what did you guys Think compare the user relative user interface benefits of having everything be relative to the thing you branch off versus relative to the current source of truth. Because branching is useful, but usually when I have four scientists all independently updating some protocol, they've each found a different thing that they want to update.
Ragnor Comerford: Yeah.
Speaker 1: And so making that merge happen correctly feels like it was something that we want to happen, like basically as soon as possible, like greedily. But I wonder if you guys have thought about the different user applications of like greedy versus lazy merge of the branches at the end.
Ragnor Comerford: Yeah, yeah, I thought a lot about that. But actually, so the goal is not necessarily to someone to work for like, you know, weeks on a separate branch. It's more essentially to make a change, you know, that is safe and then, you know, as quickly as possible merge it.
Speaker 2: Right.
Ragnor Comerford: It's not meant to be like isolated work, but more a way to kind of propose a change almost. You know, when you look, I'm not sure if you look at Google Docs, right. And then sometimes you can do suggest changes.
Speaker 2: Right.
Ragnor Comerford: So you will actually edit it. It keeps track of the difference and then somebody can accept these changes. So it's more that in terms of use case. Right. Doing proposal rather than working isolated.
Speaker 2: Right.
Ragnor Comerford: So that's really the use case.
Speaker 5: So Ragnar, what would happen in the use case that Bruno suggested, where we have four scientists who want, who are tweaking different aspects of the same source of truth. What would the workflow look like or what would the process look like in that situation?
Ragnor Comerford: Right. So they essentially just make that change. Right. And currently the branches inherit the source of truth, like live, essentially because it's a data proposal, not meant to be an isolated branch.
Speaker 2: Right.
Ragnor Comerford: I think this was something that we had to think about very hard. Should it be isolated or should it be live? So but because it's a data proposal, it makes sense to be live so that almost if there's conflicts, you see them immediately. And so the use case here is that these four scientists make changes, then they submit it for essentially approval and then either they can approve it themselves or somebody else, and then it just gets merged into sort of the main software, essentially.
Speaker 1: That's great. That's what I was hoping you would say. Okay.
Ragnor Comerford: No, it's. And yeah, the last one is kind of like what's going to really enable kind of to automate the low level part essentially of the lab.
Speaker 2: Right.
Ragnor Comerford: Of course this depends on your lab, but I think the key is, okay, if something happens, you know, in this limb system, Right click On new sequences, added a new compound.
Speaker 2: Right.
Ragnor Comerford: Can you actually trigger other workflows from it like designing, ordering primers, predicting structure.
Speaker 2: Right.
Ragnor Comerford: All the things that take up scientists time where they should be focused maybe on the unique aspects of their science rather than maybe the low level workflows that should be there, but they shouldn't be spending time on. For example, there's well known algorithms to design primers. You know, should you be actually manually Visually, of course there's a lot of cases where you need to do things unique, but essentially the goal is that can you actually automate the sort of automatable part of your work? And that's I think what's really can drive then sort of like you know, this kind of compounding flywheel right off your science essentially. Yeah. Any questions on this one or. Yeah, you can imagine setting up workflow like you're doing a QC automatically.
Speaker 2: Right.
Ragnor Comerford: Or that you have a model maybe that predicts specific properties and then you can use that later then to triage your data and things like that. And then last, of course that's coming from a more developer experience, right. Is there a way to. I mean this is something that's always really important and maybe also if you look at Airtable, one of the most important features, you have a way to kind of edit or read and write your data sort of programmatically. And that's kind of where the SDK come in. Right. So you can actually query your database on your custom schema with essentially a nice SDK that almost anybody can understand with sort of these primitives and. Yeah, so that's kind of it. And then you can.
Speaker 1: Oh yeah, sorry Pruno, can I ask two SDK questions?
Ragnor Comerford: Yeah.
Speaker 1: So easy one and hard one, easy one is if these are all relational tables, is there some way I can connect to it and execute just SQL.
Ragnor Comerford: On it to connect with to SQL?
Speaker 1: Yeah, any kind of. It's like a Postgres connector or DuckDB connector or is there some way to actually just use the views that you guys are computing using that logs as like the stack of SQL tables and create my own views on top of that or materialized views or various things like this.
Ragnor Comerford: I mean so you could, I guess there's something we have in like open up. Yeah. Because so the SDK is meant to be sort of like a level of abstraction above this. So it's almost like an orm, right. So that you have essentially these sort of object types, like a compound, an essay, maybe a sequence. And then you can have like essentially this sort of rational UI and there would be a way you could actually access the raw, I guess, SQL data. But so far we focus more on the SDK side. But yeah, what would be the use of?
Speaker 1: I think to be clear, the SDK is a very valuable way. I mean having LED light teams, people like this, I think most people come in and need some kind of wrapper to not learn SQL. And so this is very valuable. Mostly I ask for a backdoor because I come from this data engineering background at Big Tech, so at times I would want to do advanced. I've written queries that do 17 way dynamic joins on recursive CTEs in order to pop out an iterator that's efficient for data processing. That's the thing that's actually happened to me in the past with the level of complexity of data that sometimes appears in these situations. So obviously I can do that in Python also, but it would suck.
Ragnor Comerford: Yeah.
Speaker 1: So the question is like, is it hypothetically possible? That's the only question. Not really. Like is it good or not or.
Ragnor Comerford: Yeah, I mean it's definitely very possible because obviously the data is stored in the most atomic way possible. Right. The event log, which, which is like, you know, like almost like a triple. Each event is actually a triple and then we create like projections from them, some materializations to actually, you know, have like low query latency. But, but yeah, like I think it'd be pretty easy to do like, almost like also like a CDC from that even logging to your own warehouse. That's pretty easy to do. Yeah, just that.
Speaker 1: I mean if I could set up like an hourly materialization of some key table that would solve 99% of the use cases. I don't usually, I don't want to use an ORM for basically that would be kind of.
Ragnor Comerford: Yeah, yeah, for sure.
Speaker 2: Yeah.
Ragnor Comerford: I mean just I guess the advantage of having event logs that you can also query like at different points in time especially. Exactly, yeah, exactly.
Speaker 1: Like manually materialize a historical point.
Ragnor Comerford: Yeah, yeah, yeah, exactly.
Speaker 2: You can.
Ragnor Comerford: It gets like crazy. You know, I always also kind of have ideas of kind of maybe adding like version endpoints. You can actually just go back to different versions I think. Especially when you think about also evolving the schema. Right. So maybe the science changes now. We need to keep track of new field and data.
Speaker 1: That was my next question. Yes, that was a nice question. Usually I use a benchling SDK purely to be able to do things that I can't do in SQL because they're fundamentally a migration, like and so I My unfortunate history is like having my engineers write these like massive 700 line like complicated migration scripts. It was eventually automated away. But like migrations of schemas are like a big pain point in these labs. And historically my experience is that you either nail it or throw a bunch of resources at it, or you just make V1, V2, V3, V4 schemas and just lose the old data. Because it's just so much work to say like I've changed how I understand this field or I can't backpack. So I was curious like if there is an example somewhere we can look at a couple of simple migrations of some schemas and how that would affect, you know, like how that would affect like a. You know, some migrations like you know, are obviously possible for you guys to handle. If I like add a field and you asking for the default value you can back. But like some things would need a manual SDK based backfill presumably. Or like what is the stories for cfo?
Ragnor Comerford: Yeah, I mean because sort of the schema is actually treated as data. So actually the schema itself is also an event log basically. So it's kind of almost like providing the semantics to these raw sort of like values that essentially ouids. So that means like doing migrations such as renaming field is like trivial, right? Because you just change the schema entity because the actual data is not. Because the problem with I think raw relational database obviously is that the schema is kind of represented in the storage model essentially.
Speaker 2: Right.
Ragnor Comerford: In our case, kind of the schema is almost like virtual.
Speaker 2: It's like data.
Ragnor Comerford: I'm sure you're familiar with Sparkle or like rdf but it's very much inspired by that essentially where in RDF you can have different ontologies and they are data itself so you can also query it and things like that. And makes migration so much easier because in our case when you add an entity or you add like a field basically it doesn't run like SQL migrations or creating tables and columns and things like that. It essentially just creates a virtual schema basically.
Speaker 1: I assume you peak it eventually back end. I'm pretty sure that's what they're doing under the as well.
Speaker 2: Right.
Speaker 1: Like everything is clearly UID based and clearly the schemas are also just event log entry that you kind of like see by inference. Right. Like they're kind of doing similar things, I think.
Ragnor Comerford: Yeah. And I mean the I think even like Salesforce if you look at notion and lt. But they will have similar needs because then you essentially use the defined data models and then you obviously can't run migrations every time a user adds a few and things like that. So there's been actually quite a few mods experimenting with different ways of implementing this sort of flexible schemas.
Speaker 2: Right.
Ragnor Comerford: And then you obviously have trade offs and things like that. But yeah, so that means. Also what's interesting is in this branching model is that you can actually change the schema on a separate branch as well and explore like different schemas before you actually commit it. Because essentially the schema is just data so that actually just add your schema changes to the separate branch and then if you're happy with it then you can actually merge it actually into the main record. So it's actually a safe way of exploring those schema changes.
Speaker 1: So then is it safe to say then that basically from the perspective of the programmatic LIMS user, the main difference between you and Benchling here is that you actually expose the underlying event log and we can mess with it because I think benchling just doesn't let you. Or is that API also pretty unstable for now or how should I expect in terms of like visibility of example?
Ragnor Comerford: That's extremely easy to expose the event log because in fact we're actually also exposing it on the history tab. So you can actually look at every event that happened on that, on that repository essentially, if that makes sense. I'm just trying to see here. In the meantime, would there sort of any other sort of questions or.
Speaker 1: So.
Ragnor Comerford: Just trying to see if we can pull up something here maybe actually I can send you guys a video of the actual interface because I feel like that's the one thing you wanted essentially.
Speaker 2: Right. See.
Ragnor Comerford: Can you see my screen?
Speaker 1: Yeah, I can see, yeah. Seeing some of those review demo and stuff is very nice. I was gonna say the. Am I inferring correctly from that drop down that there is a sense in which you guys have first class citizens type like internal representations for that specific list of things, assay plate, all the other stuff or that just happens to be the schemas from this particular tenants or whatever you call it.
Ragnor Comerford: So can you repeat the question? Are you asking if it's like if that demo is fixed essentially or.
Speaker 1: Oh no, what I mean is that like. So having worked with several like basically LIM style vendors, there's often this distinction between like categories of like objects in the LIM system versus like individual specific schemas that are defined by a user. Everybody's different. Interpol. Imagine for example a nucleotide sequence always has bases and like a special thing which is like different than like an amino acid sequence. And for both of those you want to be able to find user defined columns. But there's also like the underlying first classes and like data model for like each type. And there's always some generic like general thing which is just the metadata with no extra instructions. My question was, when I see like instruments, assays, plates here in your tables, are those like fully user defined tables or do you provide any kind of like starting template or helper stuff that's like extra columns for like 10 sequence that are always there or something like this?
Ragnor Comerford: Yeah. So in this case they're kind of all user defined. That kind of provides like the maximum flexibility.
Speaker 2: Right.
Ragnor Comerford: But actually this here actually just designed using AI.
Speaker 2: Right.
Ragnor Comerford: I just asked it to generate essentially like create a simple limb system here, for example, right. When they created all the properties, all the classes, right. Custom to the user, define how they need to treat their signs, essentially read and somebody asking questions. But we do have kind of system fields or types, right. In this case it's like a relational field.
Speaker 2: Right.
Ragnor Comerford: And then you have like dates and numbers and it's pretty, I guess, easy to add in 124 nucleotide sequence.
Speaker 2: Right.
Ragnor Comerford: They have a separate UI for that cell, essentially.
Speaker 2: Right.
Ragnor Comerford: But what's interesting is that I guess you can also reference other repositories that you could actually add here a field that reference actually data from a different repository. Let's say it was one from the machine learning team.
Speaker 2: Right.
Ragnor Comerford: Maybe they make predictions on their sequences.
Speaker 2: Right.
Ragnor Comerford: And now you want to essentially reference the prediction from the ML team now. Okay, that doesn't live in the LIMS system.
Speaker 2: Right.
Ragnor Comerford: And maybe lives in the ML teams database, but you can still reference it within the lims so that you can maybe filter your sequences by the ML predictions, for example.
Speaker 2: Right.
Ragnor Comerford: So this is kind of like how having this modularity but still be able to link things means different teams can own different data products. It's almost like a data mesh concept, right. Or data fabric.
Speaker 1: Right. I'm back in the day now. I haven't heard that in a while.
Ragnor Comerford: But yeah, then also there's like system. There's some system classes, like for files, for example. So if you drop a file, right. It will have specific type of fields like you know, the media type and the file size and then auto computer. Right. So that's the system entity. Yeah, if that answers your question.
Speaker 1: Yeah, absolutely. Yeah, absolutely, that's my question. Thank you, Ragnar.
Speaker 5: I guess now I Want to maybe take a step back and ask some higher level questions. So one is where would this system that you developed break? Can you give us a sense like today where it currently stands? Where do you think it would break?
Ragnor Comerford: So break in the engineering sensor.
Speaker 1: Yeah.
Ragnor Comerford: So for example, right. That's the thing that I mentioned the last time. Right. So it's meant to, to store records or method that always be like a registry rather than storing for example terabytes of rows. For example, let's say if you had, let's say sequencing data and then you were storing actually every sequence, there's a row in there that essentially would break the system because it's designed more to footwear to essentially as a registry essentially.
Speaker 2: Right.
Ragnor Comerford: Of course, if you have compounds, let's say compound screening and things like that, that makes sense to store them as individual compound and you can do automation, things like that. But there's many cases where essentially you want to store the raw data as a file essentially.
Speaker 2: Right.
Ragnor Comerford: Like maybe like a packet file and things like that. But then all the metadata is stored in there.
Speaker 2: Right.
Ragnor Comerford: I mean this is a classical, I guess, trade off, right. In any sort of database system, right. That you can't have, you know, billions of rows and low latency and everything. Right. And custom data model, things like that. So there's always kind of trade offs. So that would be one area and yeah, so many ask me like on the technical side or the user side.
Speaker 5: Wait, so the practical is that in your schema today, basically it would be a pointer to some bucket that would contain the raw data.
Ragnor Comerford: Yeah, it depends though, because if the data basically is right in the, in the thousands or even hundred thousand.
Speaker 2: Right.
Ragnor Comerford: You know, it makes sense to store them as actual rows in that system.
Speaker 2: Right.
Ragnor Comerford: But as soon as you go to like you know, big numbers.
Speaker 2: Right.
Ragnor Comerford: And I mean this is the same reason why, you know, I guess in companies often they will have let's say you know, a transactional database, you know, for storing like, you know, like customers and orders and things like that. And then if you're tracking like click events on the websites, right. That occur like in the millions, you know, every day, you're not going to store that in a transactional database, essentially. Although obviously we also using Postgres and, and Postgres is evolving a lot as a database and that you can have this sort of pluggable storage engine so you can actually back some of your data by you know, actual files and S3, things like that. I mean, yeah, that's getting quite technical. But you know, it's just like the normal database trade offs you have. I mean, if you try to store like a million sequences or more like on benchling as kind of records, probably be bad already, but yeah.
Speaker 1: Okay.
Speaker 5: And then in terms of like storyboarding, just so we walk away with a clear picture.
Ragnor Comerford: Yeah.
Speaker 5: What would be the starting point? Would it be that because today scientists store things as Word docs and you know, Excel files.
Speaker 1: So do our scientists do that? If. So that's changing no matter what product we use. Sure, sure.
Speaker 5: So like, what is the. So if we wanted to engage, right. What, what is step one?
Ragnor Comerford: Right. I guess step one. Step one would be. I guess I have to slide that. But step one would be, I guess, you know, designing the data models beforehand, right. And then looking especially at the, at the science and the workflow to do that. Right. In order to actually have the query to look at the actual science biology. What are the entities that we are tracking?
Speaker 2: Right?
Ragnor Comerford: Tracking sequences, proteins, right. Do we actually make use of XML data? So actually mapping essentially sort of the data model, right. And then after that it's like, okay, what's the data collection process? So how are we gathering the data and things like that, right? Are we getting like from instruments, are we tracking Excel sheets from the lab and things like that? And obviously we're kind of also, let's say if we're going to leveraging AI, if we're going to do import. So let's say you have an Excel file, right, that has essentially the columns and headers and things like that. So the system can do like the mapping. So in the Excel file we have these columns, right? And then in our database now we have these columns. So they will actually generate the code to actually import, I guess load the Excel file in the right columns. Maybe you need to do some transformation, right? Maybe you need to convert into a number and things like that. And then it automatically inserts it into the database. Well, on a separate branch, right? And then you can approve it if it looks good to you. But doing these things, like these are the things that really reduce the friction from the scientists that even that they quickly jot it down maybe on an Excel sheet and then they can just dump it on that table and then the AI is going to automatically generate the code essentially to import that. That actually works surprisingly well. If your Excel sheet has, you know, the right column names and then it actually deterministically imports the data by writing the code to import it.
Speaker 2: Right.
Ragnor Comerford: You don't feed, you know, the data through the LLM because then you're going to have a recall problem, right. That will forget half your data, whatever. So you actually need, you can use it to generate the code to import it.
Speaker 2: Right.
Ragnor Comerford: But not, you know, to transform it necessarily. But I think this is something that I think is like super high leverage. If you can actually reduce the friction of entering data in there so that the model is cleanly tracked, that you can then reuse it and you know, to ask questions and things like that.
Speaker 2: Right, okay.
Speaker 5: And then now take, maybe taking one more step back. What is, what is the business model like? How do you engage with client? What is the. Yeah, how does that look? What does that process look like? And you have a sense of pricing.
Ragnor Comerford: Yeah. So I guess there's like the implementation part, right? Like a service plot. Because I think one thing that, that we really want to do is obviously before deployed actually working also with the scientists understanding their workflow to make sure that, you know, it's a system that really reduces burden rather than increases it so that you, you really get this sort of, you know, combining data. I said like no in a low friction way. So that's part of service part. And then obviously there's like the recurring sort of platform, I guess fee that we do for the platform its own. Obviously that's kind of different modules and things like that. But yeah, I think the implementation part is kind of more I guess one off to really be on site and help sort of really make sure that the system really works really well and drive the value. And then obviously ideally it's like self running over time.
Speaker 5: And the recurring platform cost, how is that priced?
Ragnor Comerford: I guess that's priceless on the. Yeah, I mean it depends which modules you would get and you know, how many seats and things like that usually would be for the implementation part like around 400k and then and around like 100k for the recurring yearly parts of the platform.
Speaker 5: Essentially the 100k recurring is. Is that the Ferrari Bugatti version or is that the stripped down like base version?
Ragnor Comerford: Yeah, again, I mean, because that's difficult to tell because it depends like you know, what are all the modules that will be recurring. Right. And that's why I think probably also start with like a pilot, you know, over like two or three months and then kind of figure out, you know, from there essentially.
Speaker 5: And when the. Let's just say that after the forward deployment stage is finished, ye own essentially the entirety of the data model and the infrastructure is it built in such a way that it's deployed on our servers or our cloud storage accounts. Is it built in such a way that we have full control, editorial control over the schemas and whatnot?
Ragnor Comerford: Yeah.
Speaker 5: Or do we need to engage you to fix that?
Ragnor Comerford: Well, I mean the whole system I guess was designed, you know, from first principles to be like extremely modular and flexible. I think that's one of the biggest problems with LIM systems, that they are so kind of rigid.
Speaker 2: Right.
Ragnor Comerford: And that's one of the core parts of the infrastructure was these flexible data models.
Speaker 2: Right.
Ragnor Comerford: And also that you can actually orchestrate your own workflows that actually code base and not a drag and drop, right. Of like, you know, this blocking and this block. But actually you can deploy code that, that essentially triggers based on a change in the LIM system and then writes back to the LIM system and things like that. Of course it's cloud focused because being sort of on prem is really something that they want to kind of avoid. But obviously running ML and stuff like that, you can obviously do all on your cloud and systems, right? And especially things like training models and things like that because you have essentially the API or ones you can get even access to the raw event log. I guess there's actually no problem of actually providing access to that.
Speaker 1: I mean it runs on your cloud basically. The reason we ask partially is for compliance purposes as well. Like some of our data will be tagged to certain geofence regions, do the collaborations and so forth. So really, really want to nail down whose cloud it runs in. Basically the back end.
Ragnor Comerford: Yeah, I mean also I guess the videos of having everything structured as kind of this event log, it means it's actually very extremely movable. So you can actually just give get a dump of these events and then essentially basically doing an ejection. Ejecting your entire data is actually extremely easy compared to even like if you just had like a relational database.
Speaker 1: So I'm gonna like really push you on this. One point though is that I'm less worried about ejecting data, more worried about being able to ingest it into the system in the first place. Like if a collaborator is collecting lab data in the UK and the data is not allowed to leave UK soil without writing actually agreement. Can we ingest into your system? If we can. If the system works in our cloud, I can deploy it in the UK and we can be okay. If the system runs in your cloud, it's okay. We can do all of our on in house data collection and then have a separate system. But I have to know sort of like what is like A picture for that. Like which cloud owns the actual postgres database that contains the event or whatever contains the actual event log information that ingests the data when a user enters into the ui.
Ragnor Comerford: Okay, you want to know which cloud actually is, you mean?
Speaker 1: Yeah.
Ragnor Comerford: Oh, it's just on aws in the U.S. right. Also we're a U.S. based company as well. Yeah, it's just AWS.
Speaker 5: But there's no reason it couldn't be built in our Google cloud.
Ragnor Comerford: Yeah, I mean it could technically obviously but because you know if we do obviously like multi tenant sort of deployments, obviously having outliers kind of optimize having multiple tenants and things like that. But yeah, it would be possible, you know, if it's necessary. That's a question.
Speaker 2: Yeah.
Speaker 1: Can I just go back to the pricing question when you play like 100k approximately and we'll talk more about details. Is are you asked is your pricing per seat as well? So I expect at the scale if we double in size like 200k, 300k triple inside or is that like a fixed access to the platform?
Ragnor Comerford: Assuming the 100k you said or the recurring.
Speaker 1: The recurring cost. Yeah, the recurring cost.
Ragnor Comerford: Yeah. So I mean so I originally said like it was like 400k but that was based essentially an issue like the. For the first year like a fixed on the fixed number of seats. Right. But yeah, at the end I must answer.
Speaker 5: Wait, the 100k is that. How many seats does the 100k give you?
Ragnor Comerford: Oh sorry. It was like the, the 400k but.
Speaker 1: That was actually like 400k.
Ragnor Comerford: Yeah, but it was kind of like unlimited like number of seats. In that case.
Speaker 4: You also said there charge moving forward after that initial deployment.
Ragnor Comerford: Sorry, isn't that.
Speaker 5: I thought what you were saying is there's 400k that is spent for the forward deployment and build out and then that is separate from a recurring 100k.
Ragnor Comerford: It was the 400k initial deployment and the 400k platform fee and that one essentially was like I guess unlimited seats. I guess also because we also still think about the pricing model there because a lot of things are kind of moving more to usage based.
Speaker 2: Right.
Ragnor Comerford: Because now Azure course is more in terms of running the workflows or the LLMs and things like that. So that's kind of evolving a bit away from kind of the seed based pricing.
Speaker 2: Right.
Ragnor Comerford: I mean this is something we can sort of, you know, discuss I guess it's kind of highly custom as well.
Speaker 5: But the initial number just to hold you down is 800 that is a number that we should walk away with.
Ragnor Comerford: And then obviously we do like a pilot of three months before, like, engaging in that.
Speaker 2: Right.
Speaker 5: What materials can you send us so that we can kind of poke around and learn more about what can you share with us?
Ragnor Comerford: I can send you some. Some more demos and materials.
Speaker 2: Yeah, okay. Yeah. Okay.
Speaker 5: Those are all the questions I had. Any questions from you guys?
Speaker 4: I guess just like thinking about a situation in which, you know, it's a startup maybe doesn't go well. You know, you have to fold up in like two years. Like, how do you see the kind of transition happening there?
Ragnor Comerford: Well, I'm sorry. Yeah, sorry.
Speaker 4: Yes, I'm sorry. Like, if you're, if you're hosting everything and you're going to close down, like, what? You know what, how do you anticipate a transition where, like, we didn't invest in all this infrastructure and in two years have to like, come up with a different solution?
Ragnor Comerford: Yeah, sure. I mean, that's kind of a very natural question, right. With startups, but so if it was the case, right. We'd still actually, you know, have like the period, like essentially like the transition period.
Speaker 2: Right.
Ragnor Comerford: To move into whatever system you're using.
Speaker 2: Right.
Ragnor Comerford: And I mean, yeah, I guess that's kind of the bottom line here. So we actually spent on the engineering effort, I guess, really, to make sure that, that you onboard onto the next system for it to do that. Obviously, because the data model is very flexible, it will be more essentially available on the workflow side.
Speaker 2: Right.
Ragnor Comerford: If scientists are maybe using this on a daily basis now, they have to use a different sort of system, but the data itself would be the easier part, essentially.
Speaker 1: Cool.
Speaker 5: I think we have to hop to our next thing, but thank you so much, Ragnar, for walking us through the platform. And if you could just respond in the same thread, if you could just send all of the materials and also just put down the numbers that you quoted us. So like 400k for the initial build out.
Speaker 2: Right.
Speaker 5: Like that would be super useful for us.
Speaker 4: Yeah, like we modeled out over five years, so there's like no ambiguity. Sorry, modeled out over like five years.
Ragnor Comerford: Yeah, yeah, that sounds good.
Speaker 2: All right.
Speaker 5: Yeah, because we just want like an initial estimate of costs. So it would be super helpful.
Ragnor Comerford: Yeah, I mean, I think, I guess also would be helpful then to also work on that in terms of like, what did you expect to sort of increase in sort of like scientists and things like that and users to work out. Like I said, the pricing model actually works for you, so long term, Right. Because I think obviously we're also interested in working like long term together. Right. So. Because again, what I was saying, like the pricing is kind of difficult these days because LLMs, I guess, take a huge part of the pricing now in terms of usage. Right. Because when you, for example, extract unstructured information. Right. On a sort of large scale.
Speaker 2: Right.
Ragnor Comerford: That's kind of dominates over time, sort of the cost. And so, for example, this one, they kind of almost represented like almost this buffer.
Speaker 2: Right.
Ragnor Comerford: For the LLM usage.
Speaker 2: Right.
Ragnor Comerford: But we could also go way down and essentially just do a usage based on top of it so that it's just basically based on what you consume, you know, in terms of usage. So I think there's a lot of ways we can just work on the, on the pricing because I guess it's a tricky, a tricky one. But yeah, just to kind of. It's not as straightforward as seed based anymore.
Speaker 5: Yeah, yeah, I would just say if you needed a number to work with, just assume 40 people. Just price it out. Five years with 40 people.
Ragnor Comerford: Right, right.
Speaker 2: Okay.
Speaker 5: I think that's rough, you know, Number.
Speaker 2: Okay, yeah.
Speaker 5: Awesome. Okay, thanks so much.
Ragnor Comerford: All right, thank you. Bye. Bye.
Speaker 1: Nice to meet you. Awesome.
Speaker 2: Bye. Bye. It.