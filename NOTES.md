# 6/23/21

This is a new repo for a cleaned-up version of the original siena app. As of tonight I have got it more or less looking like the original version looked, with functional components instead of class component and a more nicely designed frame component. The next step will be to implement navigation.

# 6/24/21

I'm having trouble figuring out how to implement routing from the menu screen to the item card screen. Let's think about what's happening here. In the App, first everything is wrapped in a NavigationContainer, and a Stack Navigator component with two screens: BoxList and ItemCard. The idea is that BoxList is a simple list of all the items in the box, and if you click on one of the list items you will navigate to the ItemCard screen for that item. 

From the user's perspective, it sounds a lot simpler: There is a menu of items, and if you tap one you go to a screen with information about that item.

This is exactly the sort of simple thing that React makes slightly complicated. 

Ok, here is what I am going to try: I am going to try and jettison React Navigation, and do the routing just with hooks and conditional rendering instead. Just to keep it simple.

Addendum: That's the move! useState does exactly what I need it to do and nothing more. The only thing I'm struggling with right now, for some reason, is styling. I will figure that out later.

# 6/30/21

The app is looking good, and so is the code. Right now it launches right to the box item list. Today I will change it so that instead it launches to a main menu, and routes to the box item list from there. I like the practice of using useState for simple routing. I might need to put in React Navigation at some point in the future, but I don't like it so I will try to put it off.

The idea is, using the useState hook instead of a full-on router like React Navigation, whose API I find cumbersome and annoying, will force me to maintain a strictly hierarchical routing structure. Indeed, the question of what pages should be accessible from what other pages is one of the fundamental questions of UX design. I think designers these days are too eager to make everything accessible from everywhere. They think the purpose of design is to remove constraint, where actually the purpose of design is to *provide* constraint.

In the Siena app, after I'm done with this next step, it will go like this: You start at the main menu. From the main menu, you can select "In The Box". There will be other buttons, but they won't work yet. If you tap "In The Box", you will be taken to the box list screen, which will now have a back button. Aside from that, everything will be the same.

The way I'm going to do this is with another hook. I just tried to explain it in words, but I think it will actually be easier to just do it. But first I'm going to sketch it out in Framer.

In fact, I think it would be a good use of my time to spend perhaps the rest of the morning boning up on how to use Framer. I've played around with a few prototyping tools, mostly Figma (which I gather is the most popular), but I think I like Framer the best. I'm not sure why, but I'm sure there's a reason.