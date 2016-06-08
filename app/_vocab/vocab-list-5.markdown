---
title: Vocab List - 5
date: 2016-06-01
---

<h3> Hiring in Software Industry </h3> 
 
Like many other things in IT industry, there is always a contention in the hiring process for programmers. While on one end of the spectrum, there are ardent supporters of algorithmic 
puzzles and on the other end there are passionate haters of the same.
   
Recently I read a blog [post][post], where the author had shared many anecdotes of his interview experiences and questioned the veracity of hiring process. After multiple
 trials in many companies, he got so frustrated that he decided to quit. His rant may sound a bit hyperbole but there is some truth in it.

The problem with algorithmic puzzles is that it takes a lot of time to get a hang of them. Many people argue that they are not interested in solving these problems and 
are more interested to put their efforts in solving *real world problems*. For an experienced developer it is much more difficult to take out time for practicing algorithms.        
       
I have my own fair share of experiences from both sides of the process. On one hand there are pedantic interviewers expecting error free solution of a fairly complex [dynamic programming][dp] problem in an hour
 and on the other hand there are interviewees who can't even clear a [fizz-buzz][fizz-buzz] test.

However, bashing algorithmic problems completely by saying that they are not *real world problems* only proves the *ignorance* of the person towards importance of algorithms in *real world*.
They will never go an extra mile to optimize or even worse they may not even able to know what is making their programs slow. A candidate must have minimal skills to
comprehend the complexity and trade-offs  of a solution. It is difficult to remember all the nitty-gritty details but one must have a broad understanding so that she 
can *fill* in the gaps. In need one should be able to take a deep dive to find new solutions or enhance the existing ones. 
     
In general, a candidate is required to solve the problem in front of one or more interviewers in the company premises. An apprehensive candidate may not be able to *think loudly* 
under the seemingly intrusive presence of the interviewer. Also the unfamiliar environment of the company may appear obtrusive and aids to the pressure. Companies like 
four-square are coming with innovative ways like [*home-work problems*][four-square-hw] for mitigating such pressure. 

The ubiquitous availability of the solutions have raised the bars of the problems. To assess a candidate, it is desirable to see how she performs on problems that she has 
not encountered before. To tackle this, many companies ask daunting problems in the interviews. The downside of this is solutions of these daunting problems eventually appear online. 
Thus it makes the interview process a lucky draw of how many similar problems candidate has seen before, thus defeating the entire purpose of the interview.   
  
> Luck and chance should not be part of the tech interview process.
<cite>[Sahat Yalkabov][post]</cite>

Also many deserving candidates are not avid for putting a lot of efforts only for the sake of interviews. 
              
A typical interview should be a mixture of following:

- candidate's current knowledge(projects, technologies, languages).
- asking problems relevant to the job.

It is not uncommon for a candidate to apply for jobs requiring different set of skills from his existing experience. Thus there are cases when a interviewer is not aware of
 the technologies(or languages) in which candidate has worked and vice versa. Since algorithms are the generally accepted *common denominator*, this situation further bolsters 
 the algorithmic approach. 

Recently I stumbled upon an interesting coding [puzzle][puzzle]. It did not require any knowledge of algorithms but was decent enough to assess a candidate. It was so enticing 
that I couldn't get my hands off till I was able to solve it. It was a decently exhilarating experience. Others should also come up with similar novel ways instead of following the 
realm of ever increasing complexity in problems.


In one of my interview experiences, I had cleared four rounds only to get rejected in the fifth one because of a conceited interviewer. Each of the 
 earlier four rounds consisted of algorithm problems. In the fifth round he asked me which *Design Patterns* I am aware of and asked for an implementation
 of Singleton(in java). I told him that we can use enum as it inherently will not have any synchronisation problem. Clearly he was not anticipating this answer and asked me to implement 
 singleton without using enum. In the subsequent discussion I told him that singletons violates single responsibility principle of which he was not aware of. Quite expectedly,
 my apparently eccentric views were not able to satiate him.  

It is very difficult if not impossible to have low false positives as well as low false negatives in the hiring process. There is a huge cost of false positives but no 
apparent cost of false negatives. Thus in general companies focus on reducing the cost of false positive at the expense of higher number of false negatives. This also 
unravels one of the reason why employers avoid sharing feedback while apprising the candidates for rejection. 
    
Rejections are hard and insulting. They hurt. They are quite capable of destroying one's confidence forever. The silver lining of multiple rejections is blurry. I have seen most
 deserving and meticulous ones getting rejected and lunatics getting through. Like many other things in life, hiring is not fair. I shall end this rant
 with a quote from the movie [rocky][rocky]:
  
> Let me tell you something you already know. The world ain’t all sunshine and rainbows. It’s a very mean and nasty place, and I don’t care how tough you are, it will 
> beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit. It’s about 
> how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That’s how winning is done! Now, if you know what you’re worth, then 
> go out and get what you’re worth. But you gotta be willing to take the hits, and not pointing fingers saying you ain’t where you wanna be because of him, or her, or 
> anybody. Cowards do that and that ain’t you. You’re better than that!
<cite> [Rocky Balboa][rocky_quote] </cite> 
       
       
<hr/>

<br/>
<br/>

<h3> Word Definitions </h3> 

<hr/>

<h4 word id="obtrusive" > Obtrusive </h4>

(adj)

noticeable or prominent in an unwelcome or unlikable way.

undesirably noticeable

- *Usages*:
    - The vinegar in the sauce was **obtrusive** and ruined the taste of the steak.
    - During the test, the clock on the wall was **obtrusive** as it ticked unusually loud.
    - The woman’s **obtrusive** hat blocked my view of the concert stage.
    - You will have the benefit of my advice which I hope you will not find too **obtrusive**.
    - Without being **obtrusive**, when he was wanted he was always there.
          
<hr/>

<h4 word id="intrusive" > Intrusive </h4>

(adj)

causing disruption or annoyance through being unwelcome or uninvited.

(phonetics)(of a sound) pronounced between words or syllables to facilitate pronunciation, such as an r in saw a film.

(geology)relating to or formed by intrusion.

Something intrusive is getting in your face or invading your space. 

Things that are intrusive are a real pain in the neck: they intrude on you. If someone asks you a million questions, especially personal questions, that's intrusive behavior. 
When photographers hound celebrities, they're being intrusive. If a rock is sticking out and getting in people's way, then it's intrusive. All meanings of intrusive involve something being where it doesn't belong.
    
- *Usages*:
    - He gets a date with her, but his approach is creepy and **intrusive**.
    - Do you have any suggestions that would be helpful without being **intrusive**?
    - Analysts say such efforts may breach so-called net neutrality rules, which require all online data, including **intrusive** ads, to be treated equally.
    - I’m going to ask you some personal questions that might seem a little **intrusive**.
    - One of the striking features in the geology of Arran is the remarkable series of **intrusive** igneous rocks of Tertiary age which occupy nearly one-half of the area and form the wildest and grandest scenery in the island.         

**Intrusive vs Obtrusive**
          
To be intrusive is to involve oneself into the affairs of others, generally in an objectionable manner, tactlessly but not necessarily in a way that calls attention to oneself. To be obtrusive, by contrast, is to interfere without regard for propriety or subtlety. They therefore can apply to the same situation, but intrusive emphasizes the effect on the recipient of the attention, while obtrusive focuses how the attention is perceived from the outside.
          
Use intrusive where the unwelcome advice or presence also violates a privacy boundary - for example, it would be obtrusive if my mother-in-law relentlessly brings up her desire for grandchildren at every family function, but intrusive if she has snuck into our bedroom and poked pinholes through our condoms.          

<hr/>

<h4 word id="clandestine" > Clandestine </h4>

(adj)

kept secret or done secretively, especially because illicit.

conducted with or marked by hidden aims or methods.

done in an unobtrusive manner to avoid detection

Clandestine, an adjective imported from Latin, describes a secret, usually illegal activity. Often these things have to do with political and spy organizations. The CIA might run a clandestine operation to infiltrate terrorist organizations. 

- *Usages*:
    - I understand from my wife that most of the massage parlours in Ho Chi Minh City's suburban districts are involved in **clandestine** activities behind closed doors, and the local police are aware of this phenomenon.
    - Racism is a much more **clandestine**, much more hidden kind of phenomenon, but at the same time it's perhaps far more terrible than it's ever been.
    - In the prison, some of the inmates have developed a **clandestine** means of selling drugs.
    - For safety reasons, the government cannot release information about the **clandestine** plan to rescue the hostages.
    - Perhaps they knew too well that, behind his back, his wife and brother held **clandestine** meetings.
    - A **clandestine** love affair was a hideous possibility.
    - There were also **clandestine** abortions and intentional neglect of newborns in the city.
      
<hr/>

<h4 word id="lunatic" > Lunatic </h4>

(n)

A lunatic is someone who is either clinically insane or just acting really crazy. Someone driving too fast and zigging in and out of traffic is driving like a lunatic.

The root of this word is luna, which means moon. That's because lunatic originally meant someone who went crazy with every phase of the moon, kind of like a werewolf. Most people these days don't believe in moon-caused insanity, but we still talk about lunatics, sometimes meaning clinically insane people.

an insane person

- *Usages*:
    - The only thing he ever convinced us of was that he was an utter **lunatic**.
    - She continued to gape at him as if he was a runaway **lunatic** from a nearby mental asylum.
    - These deaths were not the random work of a **lunatic**!
    - He knew he had to pretend he didn’t have voices in his head—the others would think he was a **lunatic**.
    - If you are clear on your goals, you'll be able to better identify and filter the good advice from the unwarranted ranting of **lunatics**.
        
<hr/>

<h4 word id="conceit" > Conceit </h4>

(n) 

excessive pride in oneself:       

If you’re always boasting and can’t stop talking about yourself, you have that character flaw known as conceit. Your friends — if you have any — may also complain about your arrogance, vanity, and egotism.

an ingenious or fanciful comparison or metaphor:

A conceit can also be an artistic device — probably a little forced — like the plot of a movie built on the conceit of everything that happens being foretold in song. You might find an architectural conceit in a Baroque palace, where you think you’re looking down a long hallway lined with columns, but when you get closer you see that it's really a mural painted in perspective so that the columns only seem to disappear in the distance.

an artistic device or effect. eg: “the architect's brilliant conceit was to build the house around the tree”

an elaborate poetic image or a far-fetched comparison of very dissimilar things.

a witty or ingenious turn of phrase. eg: “he could always come up with some inspired off-the-wall conceit”


(adj) Conceited:

characteristic of false pride; having an exaggerated sense of self-importance

A conceited person has an inflated self-image and perceives himself as incredibly entertaining and wonderful.

Holding an overblown view of one’s assets

- *Usages*:
    - The **conceit** and selfishness of you lads surprise me more and more, there are literally no bounds to them.
    - To know that all round you people are saying that your **conceit** has led you into trouble is not pleasant.
    - At this moment he was a little out of **conceit**, and he thought that the other might be right.
    - The **conceited** boxer put a statue of himself in his front yard.
    - My **conceited** ex-boyfriend told me I would never find anyone as great as he was.
    - In Frank’s **conceited** mind, he is so gorgeous he can have any woman he wants.
    - I don't want to sound **conceited**, but now I feel like it's my show too.      
            
<hr/>

<h4 word id="avid" > Avid </h4>

(adj)

eager or enthusiastic

having or showing a keen interest in or enthusiasm for something. eg: "an avid reader of science fiction", “an avid sports fan”.

having an eager desire for.(excessive desire) eg: "she was avid for information about the murder inquiry", “avid for adventure”, “an avid ambition to succeed”, 

- *Usages*:
    - James is an **avid** supporter of any organization that is trying to improve the environment.
    - Janet is an **avid** reader of mystery novels and considers herself an amateur sleuth.
    - Rome and London both **avid** of religious novelty.
    - She sat forward on the extreme edge of her chair, imperceptibly aquiver with excitement, **avid** of every sight and sound.
    - Unrestrained by public opinion, and **avid** for the beautiful, they cultivated their senses and emotions, and developed their wildest passions.
    - It is a curious fact that people are often more **avid** of praise for the thing they cannot do, than for the thing they can.

<hr/>

<h4 word id="unravel" > Unravel </h4>

(v)

undo (twisted, knitted, or woven threads). eg: "he cut the rope and started to **unravel** its strands"

(of knitted or woven threads) become undone, fall apart. eg: "a society that does not shelter its young is a society starting to **unravel**"

investigate and solve or explain (something complicated or puzzling). eg: "they were attempting to **unravel** the cause of death"

- *Usages*:
    - The threads **unraveled** and sank to the bottom of the tub.
    - **Unraveling** it all was not easy, but I’m so glad I did.
    - They are starting to **unravel** the reasons bariatric surgery allows most people to lose significant amounts of weight when dieting so often fails.
    - Stephen Hawking was talking metaphorically when he famously wrote that to **unravel** the laws of nature would be to know the mind of God.
    - The planetary dust cloud is only one of Pluto's mysteries that researchers are hoping to **unravel**.
      
<hr/>

<h4 word id="novel" > Novel(ty) </h4>

(n)Novel:

an extended fictional work in prose; usually in the form of a story.

a fictitious prose narrative of book length, typically representing character and action with some degree of realism.


(adj)Novel:

original and of a kind not seen before. eg: "he hit on a novel idea to solve his financial problems"


(n)Novelty:

the quality of being new, original, or unusual. eg: "the novelty of being a married woman wore off"

a new or unfamiliar thing or experience. eg: "in 1914 air travel was still a novelty"

denoting an object intended to be amusing as a result of its unusual design. eg: "a novelty teapot"

a small and inexpensive toy or ornament. eg: "he bought chocolate novelties to decorate the Christmas tree"

- *Usages*:
    - Everyone wanted to place a bid on the painter’s last **novel** painting.
    - Jim is always able to find **novel** ways to make use of broken appliances around the house.
    - Research shows new experiences stimulate the brain in **novel** ways, and the physical demand of exposing yourself to new movement patterns is beneficial.
    - Everyone is waiting to see what **novelty** the toy manufacturer will come out with next.
    - Today seeing a half naked woman in a music video is not a **novelty**.
    - Even when it is not very pleasant, apparently, **novelty** is better than monotony.
    - The desire for **novelty** drives researchers to overestimate the conclusiveness of their own work.  
    - The **novelty** of our system here is that we involved the artists from the very beginning.      
    - Humans and animals have a natural preference for **novelty**, says Morris.
      
<hr/>

<h4 word id="anecdote" > Anecdote </h4>

(n)

a short amusing or interesting story about a real incident or person. eg: "he told anecdotes about his job"

The word can have connotations of unreliability, as in the phrase "anecdotal information." But the most common sense today is that of "a funny story about something that happened."

- *Usages*:
    - To get a smile from the bullied student, the counselor shared an **anecdote** about her school days.     
    - Bill’s funny **anecdote** about his first day at college put the nervous freshmen at ease.
    - Let me share an **anecdote** that illustrates values vs. convenience.
    - All I have to offer is **anecdotes**, gathered in recent years from my own experiences and those of friends.
    - We’re good at picking out interesting **anecdotes** and drawing analogies and connections.
    - At the mayor’s funeral, every person in town wanted to share an **anecdote** about the popular man.
    
<hr/>

<h4 word id="hyperbole" > Hyperbole </h4>

(n)

exaggerated statements or claims not meant to be taken literally. eg: "he vowed revenge with oaths and hyperboles"

Praising your favorite sports team is one thing, but if you call the team the most incredible group of humans ever to walk the earth, then you're going overboard and indulging in hyperbole.

- *Usages*:
    - Although what I said may sound like a **hyperbole**, it really is the truth.
    - The author used one **hyperbole** after another to get his point across to his readers.
    - It would be great if you could simply tell me the basic facts without including a **hyperbole** of any sort.
    - It's probably not **hyperbole** to say the fate of our food supply and hence our world depends on how hospitable our gardens are to pollinators.
    - It’s **hyperbole**, of course, but there’s a grain of truth to it.
    - **Hyperbole** about disruptive innovation in higher education is rampant.
    - There are conditions in which it is scarcely a **hyperbole** to say that slavery itself is a stage on the road to freedom.

<hr/>

<h4 word id="ardent" > Ardent </h4>

(adj)

very enthusiastic or passionate. eg: "an ardent supporter of the conservative cause"

Ardent is most often used to modify words like supporter, fan, advocate, admirer, and defender — but also opponent. Although you can either ardently support or oppose something, support is 
by far the more common use. The word literally means "burning" or "glowing" — it's from Latin ardere, "to burn." In poetic use, the word is sometimes used to mean "glowing," as Alexander 
Pope did in his 1718 translation of Homer's Iliad: "From rank to rank she darts her ardent eyes."

- *Usages*:
    - When the rock star checks his mail, he almost always finds one or two bizarre gifts from some of his **ardent** fans.
    - Melissa has always been an **ardent** supporter of the city’s community theater.
    - It’s amazing how even the most **ardent** desires you have as a teenager tend to fade away as you face the reality of adulthood.
    - The architects, who are **ardent** environmentalists, hope to forgo air-conditioning at the facility.
    - Star Wars fans are known for being **ardent**.
    - He is an **ardent** admirer and most able supporter of Mrs. Rand’s views.
      
<hr/>

<h4 word id="pedantic" > Pedantic </h4>

(n) Pedant:

a person who pays more attention to formal rules and book learning than they merit. 

A pedant is an annoying person who is focused on minor details and book knowledge rather than ordinary common sense. In war, it can be dangerous to have a pedant as commander––he'll insist 
on textbook maneuvers instead of adapting to circumstances on the ground.

(adj) Pedantic:

excessively concerned with minor details or rules; overscrupulous. eg: "his analyses are careful and even painstaking, but never pedantic"

It's a negative term that implies someone is showing off book learning or trivia, especially in a tiresome way.

- *Usages*:
    - Grammar **pedants** are more likely to be introverts.
    - My father is a **pedantic** man who usually misses all the vacation fun because he is busy reviewing travel documents.
    - Although I am a decent proofreader, I do not believe I have the **pedantic** skills necessary to be a good editor.
    - The best critics and philosophers slide, necessarily, to and fro on the scale from butterfly to **pedant**.
    - If you're not a history **pedant** and can muster the discipline to suspend disbelief most of the time, this is highly entertaining stuff.
    - He bit hungrily into his bread and swallowed a couple of mouthfuls, then continued speaking, with a sort of **pedant’s** passion.
    - Since the teacher said the purpose of this essay is to show off our **pedantic** skills, I will make sure I focus on the grammar practices I learned in class.
                  
<hr/>

<h4 word id="satiate" > Satiate </h4>

(v)

fill to satisfaction. eg: "he folded up his newspaper, his curiosity satiated"

Satiate is often used in situations in which a thirst, craving, or need is satisfied. 

(adj)

satisfied to the full; sated. eg: "satiate with power, of fame and wealth possess'd"


- *Usages*:
    - The combination of protein and fat will keep you **satiated** longer.
    - They **satiate** our wish for bliss and powerfully alleviate mental and bodily pain.
    - Hopefully this feast I am preparing will **satiate** your hunger.
    - A trip to the library will **satiate** Jeremy’s thirst for knowledge.
    - Her belly button protruded from her **satiated** satin stomach like a domed monument on a hill.
    - Revenge is sweet, though cruel and inhuman; and though it sometimes thirsts even for blood, yet may be glutted and **satiated**.
    - Reckless of consequences, they drank and drank again, as if they never could be **satiated** with the delicious beverage.
                      
<hr/>

<h4 word id="apprise" > Apprise </h4>

(v)

inform (somebody) of something. eg: "I thought it right to apprise Chris of what had happened"

to report on the status of something

The word has a formal, weighty tone. Presidents get apprised of foreign affairs, but you will most likely not get apprised of weather conditions or dinner plans.

- *Usages*:
    - How long will it be before the doctor comes out of surgery to **apprise** me of my wife’s condition?       
    - As soon as he was **apprised** of the massacre, he sent Peter Skeen Ogden with a force to rescue the survivors.
    - She turned swiftly, her heart standing still, her brain already **apprised** of treachery.
    - The scouts went back to **apprise** their commanding officer of the enemy’s location.
    - The new reporter was **apprised** of developments in this story.
    - Please keep me **apprised** of any new information.      
                  
<hr/>

<h4 word id="exhilarating" > Exhilarating </h4>

(adj)Exhilarating:
 
making one feel very happy, animated, or elated; thrilling. eg: "an exhilarating two-hour rafting experience"

(v)Exhilarate:

make (someone) feel very happy, animated, or elated. eg: "she was exhilarated by the day's events"

A ride on a glass elevator with a cute vampire could be exhilarating, and so could a surprise party, or a ride on an old roller coaster. It can be so refreshing, you can't exhale after something exhilarating happens.

- *Usages*:
    - While having sex, it was an **exhilarating** feeling to be on top of her.
    - He darts through the maze — sweaty, **exhilarated**, kind of drunk.
    - And you want to know why Saturday night I was exhausted, then **exhilarated** Sunday morning thinking about what lies ahead.    
    - Watching the air battle over the city had been **exhilarating**, but when the men saw the consequences, they were shocked.
    - “Flying is a rather **exhilarating** experience,” she confessed.
    - An **exhilarating** workout is a great way to start the day.
    - Swimming under the beautiful waterfall is an **exhilarating** experience.
    - While my husband finds skydiving to be **exhilarating**, I have a fear of heights and would never consider the activity.
                
<hr/>

<h4 word id="ubiquitous" > Ubiquitous </h4>

(adj)

present, appearing, or found everywhere. eg: "his ubiquitous influence was felt by all the family"

- *Usages*:
    - What happens when the Internet becomes so **ubiquitous** and search engines so refined that we can all suddenly hear everything whispered about us?
    - When I was a kid, I thought my parents were **ubiquitous** because it seemed as if they knew everything I did.
    - In the summer months, tourists are **ubiquitous** at every beachfront hotel in Florida.
    - Suddenly it became **ubiquitously** popular, and it is now certainly one of the best-known pieces of the kind in the language.
    - Time exists ubiquitously, Space exists eternally, God exists **ubiquitously** and eternally.
    - The **ubiquitous** image of the atom bomb is the inciting or concluding event; the fallout is technology.
    - Fingerprint readers are increasingly **ubiquitous** in smartphone design, so much so that the question is not whether to include one, but where to put it.
                         
<hr/>

<h4 word id="eccentric" > Eccentric </h4>

(adj)Eccentric:

(of a person or their behaviour) unconventional and slightly strange. eg: "he noted her eccentric appearance".

displaying behavior that is different from that which is viewed as normal

not placed centrally or not having its axis or other part placed centrally. eg: "a servo driving an eccentric cam"

(n)Eccentric:

a person of unconventional and slightly strange views or behaviour. eg: "he's seen as a local eccentric"

a disc or wheel mounted eccentrically on a revolving shaft in order to transform rotation into backward-and-forward motion, e.g. a cam in an internal-combustion engine.


- *Usages*:
    - Most geniuses come across as **eccentric** because they are very unique people.      
    - Two hundred years ago their clothes were even more **eccentric** then they are today.
    - To him it seems appropriate, to me **eccentric**: it’s a defiance of convention, but of a convention he’s never heard of.
    - Given how **eccentric** the musician was, and the mysterious conditions of his passing, that was probably inevitable.
    - The amiably **eccentric** — but emotionally direct — comedy series is written and directed by Crook, who plays Andy, a temp worker yearning for archaeological greatness.
    - When I looked out my front window, I saw my **eccentric** neighbor dancing naked in my yard.
    - Because I often wear clothes that were popular in another century, many people refer to me as **eccentric**.
                               
<hr/>

<h4 word id="meticulous" > Meticulous </h4>

(adj)

showing great attention to detail; very careful and precise. eg: "the designs are hand-glazed with meticulous care"

People who are meticulous can be pretty annoying, what with their extreme attention to detail. But if that person is, say, your surgeon or your accountant, you'll want them to be meticulous.

Someone who's meticulous is afraid of what will happen if they're not careful enough to get every detail right. "Detail oriented" and "perfectionist" are other ways of describing someone who cares deeply about the small things and about getting things exactly right, every time. 

- *Usages*:
    - Delicate in stature, she was as **meticulous** about her attire as she was about her studies.
    - Her hands fly up to her perfect, glossy red hair, brushing it back into her **meticulous** bun.
    - They made their preparations with **meticulous** care, taking no risk.
    - When it came to getting ready for a role, the actor was quite **meticulous** in his preparation.
    - As a sculptor, Alan was especially **meticulous** about the materials he used.
      
<hr/>

<h4 word id="bolster" > Bolster </h4>

(n)

a long, thick pillow that is placed under other pillows for support. eg: "most of them were sitting on the floor which was strewn with cushions, bolsters, and rugs".

a part on a vehicle or tool providing structural support or reducing friction.

(v)

support or strengthen. eg: "the fall in interest rates is starting to bolster confidence"

provide (a seat) with padded support. eg: "I snuggled down into the heavily bolstered seat"

A bolster is also the name of a long pillow you might use to make your back feel better. And the two uses are not dissimilar. When you bolster your friends, you support them and prop them up, just like the pillow does for your back. When you're trying to bolster your credibility, you find people and/or documents that support you or your view. Bolster efforts to learn this word!

- *Usages*:
    - He could repeat each word of the book in perfect order, but that did not **bolster** his confidence.
    - The pale yellow **bolster** pillow is the ugliest thing I’ve ever seen, packaged on the ends like a big yellow hotdog.
    - Many people use science to debunk religion, but Reverend Scheffler enlisted science to **bolster** his beliefs.
    - Did you fake an illness to **bolster** sympathy from your ex-boyfriend?
    - The king begged permission to **bolster** himself up with pillows.
    - John’s recent lottery win is sure to **bolster** his appeal to women.
    - She made two **bolsters** and three pillows for me at different times; though I'm not quite sure it was not two pillows and three **bolsters**.
      
<hr/>

<h4 word id="entice" > Entice </h4>

(v) Entice

attract or tempt by offering pleasure or advantage. eg: "a show which should entice a new audience into the theatre"

The word entice means to lure or tempt someone by promising them something that they like. It is a little manipulative but in a fairly straightforward way. You always know it when someone is enticing you. If a company really wants to hire you, they will entice you with a good salary and generous benefits.

(adj)

highly attractive and able to arouse hope or desire. eg: “difficult to say no to an enticing advertisement”

- *Usages*:
    - Her smoky voice and welcoming smile all **enticed** Bernard.
    - We are commonly **enticed** into evil by appeals to our passions.
    - I found her still more **enticing** in bed than at table.
    - He **enticed** her into his house by deceit, dishonoured her and thrust her in scorn into the street.
    - The cat pretends to be dead, hoping by this means to **entice** the mice within her reach.
    - With a glance **enticing** beyond words, she raised her eyes to his.
    - It must be that there is in you something—I don't know what—more **enticing** than in other women.
    - They **enticed** him into the canteen and made him drink more than was good for him.
    - Her dress was extremely **enticing**, drawing the attention of all the men gathered.
    - After just recently quitting cigarettes, he found the mere sight of others smoking to be **enticing**.
    - As more researchers entered the field and initiated small clinical tests, they began to produce **enticing** anecdotes.
    - **Enticing** people to drink recycled water, however, requires getting past what experts call the “yuck” factor.
          
<hr/>

[post]: https://medium.com/@evnowandforever/f-you-i-quit-hiring-is-broken-bb8f3a48d324#.u9t8znqwa
[fizz-buzz]: http://c2.com/cgi/wiki?FizzBuzzTest
[four-square-hw]: http://engineering.foursquare.com/2016/04/04/improving-our-engineering-interview-process/
[puzzle]: http://puzzles.makkhichoose.com/SolveForMakkhi
[rocky]: https://en.wikipedia.org/wiki/Rocky_(film_series)
[rocky_quote]: http://samplage.com/movie-quotes/it-aint-about-how-hard-you-hit/
[dp]: https://en.wikipedia.org/wiki/Dynamic_programming
