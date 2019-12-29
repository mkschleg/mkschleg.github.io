---
layout: single
title: About
permalink: /about/
---




![me](/assets/images/me_2.png){: .align-left}
<p>
I'm a PhD student at University of Alberta in Edmonton, Alberta, Canada. I have a BS in Physics and an MS in Computer Science both from Indiana University Bloomington. My current PhD work is focused on reinforcement learning, and specifically in understanding how agents may perceive their world. I focus primarily on prediction making, but have been known to dabble in control from time-to-time. My active research interests include: predictions as a component in intelligence (both artificial and biological), off-policy prediction and policy evaluation, deep learning and resulting learned representations in the reinforcement learning context, and discovery or attention of important abstractions (described as predictions) through interaction.
</p>

<h2> About My Research </h2>

<h3> Predictions as cognition </h3>
<p class="research_desc">
I am keenly interested in the relationship of prior work in predictive cognition in the brain and current research in reinforcement learning, specifically the use and learning of general value functions (GVFs) as predictive units. While there are many types of predictions (and subsequent definitions and nuances) the most interesting is in how predictions effect behavior---defined as anticipation (Bubic, 2010). There are several issues with using GVFs trained online to effect behavior that informs much of my research: stability, off-policy policy evaluation, predictions as representation, and others.
</p>
<h3> Off-policy Policy Evaluation and Prediction </h3>
<p class="research_desc">
To learn many predictions online, it is beneficial to learn about behaviors which are not currently being followed, this is where off-policy policy evaluation comes in. The main contribution of this line of work has been the importance resampling algorithm, which manages to empirically reduce variance in many scenarios without interjecting significant bias or computation requirements, like VTrace or Weighted Importance Sampling respectively. I also have interests in understanding how RMSProp/AMSGrad type learning rate adaptation algorithms interact with off-policy learning, and in extending importance resampling to the case of many value functions with a shared representation.
</p>
<h3> Discovery in Predictive Representations </h3>
<p class="research_desc">
Representations built from predictions (and really all methods using predictions to effect behavior) all face a common hurdle, the discovery problem. This is the creation and learning of useful predictions in an online process. My current work focuses on defining the base aspects of the problem, and describing a general framework to do discovery. This leads in two directions. The first is describing an ontology, or an ordering, of general value function question specification to be able to generate a diverse set of questions. The second is in credit assignment or the usefulness of a prediction in driving behavior.
</p>


<h2> Other Interests </h2>

<p class="research_desc">
I've spent a lot of time developing my musical ability, and even spent a short amount of time as a music student in the Jacobs School of Music. I'm not currently playing in any ensembles, but in the past I've been apart of Indiana University's All-campus Band (first chair), IU's Concert Band, and the Southern Indiana Wind Ensemble (SIWE) (soloist/2nd chair). I also enjoy Jazz (mostly bebop and big-band) and enjoy going to orchestral concerts (my favourites include the Chicago Symphonic Orchestra and Grant Park Orchestra). In my free time I like playing around with elisp and my emacs configuration, playing clarinet, reading popsci (especially about intelligence/neuroscience), and drinking espresso!
</p>
