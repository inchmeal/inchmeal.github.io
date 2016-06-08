---
layout: blog
title:  "Hiring in Software Industry"
tags: personal-views
sitemap:
    priority: 0.7
---

Like many other things in IT industry, there is always a contention in the hiring process for programmers. While on one end of the spectrum, there are ardent supporters of algorithmic 
puzzles and on the other end there are passionate haters of the same.
<!--more-->
   
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

[post]: https://medium.com/@evnowandforever/f-you-i-quit-hiring-is-broken-bb8f3a48d324#.u9t8znqwa
[fizz-buzz]: http://c2.com/cgi/wiki?FizzBuzzTest
[four-square-hw]: http://engineering.foursquare.com/2016/04/04/improving-our-engineering-interview-process/
[puzzle]: http://puzzles.makkhichoose.com/SolveForMakkhi
[rocky]: https://en.wikipedia.org/wiki/Rocky_(film_series)
[rocky_quote]: http://samplage.com/movie-quotes/it-aint-about-how-hard-you-hit/
[dp]: https://en.wikipedia.org/wiki/Dynamic_programming
       