#---Subtle V1---

----------

##Subtle.css is a free framework to help out with building websites. It is style-agnostic, containing only the code you need, and none that you don't. Subtle.css is intended to make life eaiser for anyone developing websites, and it lets you choose the styling for your particular needs. If you do need styling specifically for Subtle.css, style packs are planned for the near future.

----------

###Once you have the "Subtle" folder in your project folder, simply link to "subtle.css" in the head of your document with a <link> element.

###Make sure that you place the link for Subtle above your own stylesheets, so that the styles you have applied override those in Subtle.css.

----------

###Subtle.css can do four main things:

    
    > Buttons
    > Headers
    > Colours
    > Grids

###Using Subtle is simple: just add the apropriate classes to html elements, for example:

`<a href="https://yoursite.com/whatever" class="Subtle-warningBtn" >Hello, World!</a>`

###The above code will create an anchor with styling for a warning button.

###See below for a list of all classes available with Subtle.css



####Grid Row

subtle-gridWrapper



#####Grid columns- the numbers on the end are the fraction of the container that the grid column takes up

subtle-grid-1-15

subtle-grid-2-15

subtle-grid-3-15

subtle-grid-4-15

subtle-grid-5-15

subtle-grid-6-15

subtle-grid-7-15

subtle-grid-8-15

subtle-grid-9-15

subtle-grid-10-15

subtle-grid-11-15

subtle-grid-12-15

subtle-grid-13-15

subtle-grid-14-15

subtle-grid-15-15



###Notes:

####Grid items can be reordered with
```
.Subtle-grid-whatever-your-grid-item-is
{
  -webkit-order: (interger here); /* For Safari */
  order:         (interger here);
}
```
without changing the structure of the html.


#*Subtle.css is licenced under the MIT licence.*
