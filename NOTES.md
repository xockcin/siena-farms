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

# 7/3/21 

I've just been reorganizing my stylesheets. Right now I am trying out the unusual approach of having all the stylesheet objects as named exports in one big file in my shared folder, and then importing and destructuring them. I like having them all in one file, but I think that the destructuring part is a bridge too far. Namespace is good. I think what I will do is import the stylesheet "as" styles, that way the name is still nice and compact.

Okay, that's done. Now I think I'll make it so the recipe links actually work.

Actually, I can do that later. Copying and pasting the links in will be annoying busy work. I would rather figure out a better way of adding the data into the app first. Which I guess means it's time for me to put together the backend.

I should mention that I still haven't put the main menu screen in yet, because I'm not sure how I want it to look, and also just because I don't feel like it, both of which are perfectly valid reasons for not doing something that isn't urgent. Not that any of this is urgent.

Anyway, let's think about the backend logic. What is a box item? A box item is an object that looks like this:

```
{
  id: number,
  name: string,
  image: require(filepath),
  source: {
    name: string,
    url: string,
    location: string,
  },
  description: string,
  storage: string,
  recipes: [
    {
      name: string,
      url: string
    },
    ...
  ]
}
```

As I am thinking about how to organize the backend of this app, my main thought is that, although naturally there will be a menu of potential items for the admin to choose from while assembling the contents of the box, a box item will not be quite the same sort of thing as a *potential* box item.

Actually, it is premature to even think about potential box item menus. All you need to be able to do at first is add items. I should begin by doing the back4app tutorial.

I have spent most of the afternoon reading the Back4App documentation, and I think it will be just the thing for me to build my backend. There is some more stuff I need to read, but pretty soon it will be time for me to think a little more carefully about how I actually want my backend to work. That will be for tomorrow.

# 7/4/21

Let's talk backend.

The first thing the backend needs to do is serve the box item data.

A box is just an array of box items. Each box item is an object with the properties enumerated above. All the app front-end needs to do is get that array of objects and use it as props. Simple.

But the next question is, how to get that box item data into the database to begin with? For that I suppose I will need to also build out another, web-based front end for the admin. There are probably nice premade templates, but before I go looking for one I need to think about exactly what I want it to do.

I am thinking that the database will actually look like an array of boxes. I said before that a box is an array of box items, but now I'm thinking that actually a box is an object consisting of an array of items and a date. The app will automatically load the most recent box, but the others will be accessible as well.

So let's say I am the admin. How do I load up a box? I suppose I would start by hitting the "create new box" button. That brings me to a screen with a form. Let's say there is a form on the right and a rectangle on the left. I type in all the data about the item, and then hit the "add item" button, which adds the item into the rectangle and clears out the list. A classic entry-level react project.

Then, of course, there is the part where you actually publish the box to the server.

I'm still not sure that I'm going to use Back4App. Firebase might be a better choice. I'll need to spend some time researching Firebase.

It might not actually make all that much of a difference. I'm sure they both offer all the features I need.

Regardless - what I need to do probably is build out a little web app that looks slightly nice and makes it easy to post items to the box. Then I can change the React Native app so that it pulls its box item data from the database instead of having it hard-coded.